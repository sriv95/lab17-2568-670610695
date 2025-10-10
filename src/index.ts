import express, { type Request, type Response } from "express";

// import middlewares
import morgan from "morgan";
import cors from "cors";
import invalidJsonMiddleware from "./middlewares/invalidJsonMiddleware.js";
import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";

// import routes
import userRouter from "./routes/usersRoutes.js";

const app = express();
const port = 3000;

app.use(cors());

// body parser middleware
app.use(express.json());

// logger middleware
app.use(morgan("dev"));
// app.use(morgan("combined"));

// JSON parser middleware
app.use(invalidJsonMiddleware);
app.get("/", (req: Request, res: Response) => {
  res.send("This is lab 17 API service");
});
// endpoint users
app.use("/api/v2/auth", userRouter);

app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

// Export app for vercel deployment
export default app;
