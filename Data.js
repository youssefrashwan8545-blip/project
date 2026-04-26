let latestData = {
  voltage: 0,
  current: 0
};

export default function handler(req, res) {
  if (req.method === "POST") {
    latestData = req.body;
    console.log("Data Received:", latestData);
    return res.status(200).send("OK");
  }

  if (req.method === "GET") {
    return res.json(latestData);
  }
}