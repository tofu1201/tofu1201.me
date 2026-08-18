interface Env {
  DISCORD_WEBHOOK_URL?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = await context.request.json() as { name: string; email: string; message: string };
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: '請填寫所有欄位' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. 如果設定了 Discord Webhook，自動推送到 Discord 頻道
    if (context.env.DISCORD_WEBHOOK_URL) {
      await fetch(context.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: '📩 tofu1201.me 收到新留言筆記！',
            color: 0xD4AF37,
            fields: [
              { name: '👤 姓名 / 單位', value: name, inline: true },
              { name: '✉️ Email', value: email, inline: true },
              { name: '💬 留言內容', value: message }
            ],
            timestamp: new Date().toISOString()
          }]
        })
      });
    }

    // 2. 如果設定了 Telegram Bot，自動發送到 Telegram 手機通知
    if (context.env.TELEGRAM_BOT_TOKEN && context.env.TELEGRAM_CHAT_ID) {
      const text = `📩 *tofu1201.me 收到新留言！*\n\n👤 *姓名*：${name}\n✉️ *Email*：${email}\n💬 *內容*：\n${message}`;
      await fetch(`https://api.telegram.org/bot${context.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: context.env.TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });
    }

    return new Response(JSON.stringify({ success: true, message: '留言已成功傳送' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message || '伺服器錯誤' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
