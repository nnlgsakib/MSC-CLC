import express from "express";
import { calc } from "./calculate";

const app = express();
const PORT = 3000; // You can change this to your desired port

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle calculation requests
app.post("/api/calculate", async (req, res) => {
    try {
        const { value, tokenName } = req.body;

        if (!value || !tokenName) {
            return res.status(400).json({ error: "Coin value and token name are required" });
        }

        const result = await calc(value, tokenName);

        if (result === 0) {
            return res.status(400).json({ error: "Calculation failed! Maybe coin is not supported " });
        }

        return res.json({ total: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
