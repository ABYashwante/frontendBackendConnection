import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/getData", (req, res)=>{
    res.send("jamtaye kiii....!!!")
})

app.listen(5000, ()=>{
    console.log("Server is running on port", 5000);
})