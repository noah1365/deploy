import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from "path";

import { connectDB } from "./config/db.js";

import authRoute from './routes/authRoute.js';
import benefitRoute from './routes/benefitRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/auth",benefitRoute);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT,() => {
    connectDB();
    console.log(`Server is running PORT: ${PORT}`);
});
