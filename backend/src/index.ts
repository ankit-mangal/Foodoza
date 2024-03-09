import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";

const app = express()
app.use(express.json());
app.use(cors())

app.get("/test", (req: Request, res: Response)=>{
    res.json({message: "Hello there!"});
})

app.listen(5000, () => {
    console.log("server started @ port 5000")
})