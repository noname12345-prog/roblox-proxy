export default async function handler(req, res) {
    const { path } = req.query;
    const segments = Array.isArray(path) ? path : [path];
    const pathStr = segments.join('/');
    const queryString = req.url.includes('?') ? '?' + req.url.split('?').slice(1).join('?') : '';
    const url = `https://badges.roblox.com/v1/${pathStr}${queryString}`;

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.9",
                "Origin": "https://www.roblox.com",
                "Referer": "https://www.roblox.com/"
            }
        });
        const data = await response.json();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(response.status).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
