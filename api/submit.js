export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  console.log('受信データ:', req.body);
  return res.status(200).json({ status: 'ok' });
}
