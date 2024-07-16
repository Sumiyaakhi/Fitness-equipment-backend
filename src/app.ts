import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/modules/products/product.route";
import cors from "cors";
import { BenefitRoutes } from "./app/modules/benefits/benefit.route";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);
app.use("/api/benefits", BenefitRoutes);
app.use(cors({ origin: "http://localhost:5173/" }));

// Catch all undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred",
    error: err.message,
  });
});

export default app;
