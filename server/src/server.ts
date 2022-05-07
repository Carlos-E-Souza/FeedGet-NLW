import cors from "cors"
import express from "express"

import feedbackRoute from "./routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use(feedbackRoute)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log("Server Running!")
})
