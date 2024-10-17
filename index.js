const express = require("express")

const app = express()
const PORT = 8000

// Middleware | Plugin
app.use(express.urlencoded({extended: false}))

// Routes

// Route for api

app.get("/api/home", (req, res) => {
    return res.json()
})
app.get("/api/about", (req, res) => {
    return res.json()
})
app.get("/api/header", (req, res) => {
    return res.json()
})
app.get("/api/education", (req, res) => {
    return res.json()
})
app.get("/api/skills", (req, res) => {
    return res.json()
})
app.get("/api/experience", (req, res) => {
    return res.json()
})
app.get("/api/projects", (req, res) => {
    return res.json()
})
app.get("/api/resume", (req, res) => {
    return res.json()
})
app.get("/api/contact", (req, res) => {
    return res.json()
})
app.get("/api/footer", (req, res) => {
    return res.json()
})