export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('受信データ:', req.body);

  try {
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `問い合わせがありました\n${JSON.stringify(req.body, null, 2)}`
      })
    });
  } catch (e) {
    console.error('Slack通知エラー:', e);
  }

  return res.status(200).json({ status: 'ok' });
}
