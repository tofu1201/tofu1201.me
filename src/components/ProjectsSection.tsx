import React, { useEffect, useState } from 'react';
import { PROFILE_INFO, PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ExternalLink, Github, Check, Loader2, RefreshCw } from 'lucide-react';

interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  archived: boolean;
}

const toRoman = (value: number): string => {
  const numerals: Array<[number, string]> = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let remaining = value;
  let result = '';

  numerals.forEach(([number, numeral]) => {
    while (remaining >= number) {
      result += numeral;
      remaining -= number;
    }
  });

  return result;
};

const formatUpdatedDate = (date: string): string => {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(date));
};

const mapRepositoryToProject = (repository: GitHubRepository, index: number): ProjectItem => {
  const tags = [repository.language, ...(repository.topics ?? [])].filter(
    (tag): tag is string => Boolean(tag),
  );

  return {
    id: `github-${repository.id}`,
    roman: toRoman(index + 1),
    title: repository.name,
    subtitle: `${repository.language ?? 'GitHub Repository'} • GitHub 專案`,
    category: 'dev',
    categoryLabel: repository.archived ? '已封存專案' : 'GitHub 專案',
    description: repository.description ?? '這是 Tofu 在 GitHub 上公開的程式作品。',
    tags: tags.length > 0 ? tags : ['GitHub'],
    highlights: [
      `最後更新：${formatUpdatedDate(repository.updated_at)}`,
      `⭐ ${repository.stargazers_count} 顆星 · 🍴 ${repository.forks_count} 次分支`,
    ],
    demoUrl: repository.homepage || undefined,
    githubUrl: repository.html_url,
  };
};

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(PROJECTS);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const loadGitHubProjects = async (signal?: AbortSignal) => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const response = await fetch(
        'https://api.github.com/users/tofu1201/repos?sort=updated&direction=desc&per_page=100',
        {
          headers: {
            Accept: 'application/vnd.github+json',
          },
          signal,
        },
      );

      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
      }

      const repositories = (await response.json()) as GitHubRepository[];
      setProjects(repositories.map(mapRepositoryToProject));
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      setLoadError('目前無法連線到 GitHub，先顯示網站內建作品。');
      setProjects(PROJECTS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    void loadGitHubProjects(controller.signal);

    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="real-tape inline-block px-4 py-1.5 bg-[#D1FAE5] border border-[#23201D] text-[#23201D] text-xs font-body font-black tracking-widest uppercase shadow-sm mb-3">
            📌 CODE & CRAFT • PYTHON, HTML, CSS
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-widest text-[#23201D]">
            程式作品與專案
          </h2>
          <p className="mt-3 text-[#23201D]/80 font-body font-bold max-w-2xl mx-auto text-base">
            自動同步 <span className="underline">{PROFILE_INFO.github.replace('https://github.com/', '@')}</span> 的公開 GitHub 專案。
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-body font-black">
            {isLoading && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#23201D]">
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> 正在同步 GitHub…
              </span>
            )}

            {!isLoading && loadError && (
              <span className="px-3 py-1.5 bg-[#FFEDD5] border border-[#23201D]">
                {loadError}
              </span>
            )}

            {!isLoading && (
              <button
                type="button"
                onClick={() => void loadGitHubProjects()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#23201D] hover:bg-[#FEF08A]"
              >
                <RefreshCw className="w-3.5 h-3.5" /> 重新同步
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`sticky-note p-8 flex flex-col justify-between group rounded-sm border-2 border-[#23201D] ${
                idx % 2 === 0 ? 'bg-[#D1FAE5] -rotate-1' : 'bg-[#FEF08A] rotate-1'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#23201D]/20 pb-3">
                  <span className="font-heading text-xl font-black text-[#23201D] tracking-widest">
                    PROJECT {project.roman}
                  </span>
                  
                  <div className="px-3 py-1 bg-white border-2 border-[#23201D] text-[#23201D] text-xs font-body font-black uppercase">
                    {project.categoryLabel}
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-black text-[#23201D] mb-1">
                  {project.title}
                </h3>
                
                <span className="block text-xs font-body text-[#23201D]/80 font-black tracking-wider uppercase mb-4">
                  {project.subtitle}
                </span>

                <p className="text-[#23201D] font-body text-sm font-bold leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t-2 border-[#23201D]/20 pt-4 mb-6">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#23201D] font-black font-body">
                      <Check className="w-3.5 h-3.5 text-[#23201D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-white border border-[#23201D] text-[#23201D] text-[11px] font-body font-black"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t-2 border-[#23201D]/20 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body font-black text-[#23201D] tracking-wider uppercase hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#23201D]" /> 預覽網站
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-body font-black text-[#23201D]/70 tracking-wider uppercase hover:text-[#23201D]"
                    >
                      <Github className="w-3.5 h-3.5" /> 程式碼
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
