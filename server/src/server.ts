import cors from "cors"
import express from "express"

import feedbackRoute from "./routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use(feedbackRoute)

app.listen(9000, () => {
    console.log("Server Running!")
})
