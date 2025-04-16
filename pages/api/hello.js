export default function handler(req, res) {
  const apiKey = process.env.PI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not found' });
  }

  res.status(200).json({ message: 'Clé API trouvée !', apiKey });
}