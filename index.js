import express from "express"
import cors from "cors"

const app = express ()

const dogs = [
    {
    name: "Paco",
    age: 34,
    breed: "Chihuaha"
    },
    {
        name: "Dora",
        age: 5,
        breed: "Yorki"
    },
    {
        name: "Pony",
        age: 15,
        breed: "Labrador"
    }
]

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => res.json(dogs))

app.listen(4000, () => console.log("API running 😃"))