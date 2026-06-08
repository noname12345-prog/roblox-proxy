export default async function handler(req, res) {
    const path = req.url.replace("/api/badges", "")
    const url = `https://badges.roblox.com${path}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(200).json(data)
}
