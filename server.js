const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const students = [
  { id: 1, name: "Anjali", skills: ["React", "Node.js", "MongoDB"], stack: "MERN" },
  { id: 2, name: "Rahul", skills: ["Python", "Django", "SQL"], stack: "Python/Django" },
  { id: 3, name: "Meera", skills: ["HTML", "CSS", "JavaScript"], stack: "Frontend" },
  { id: 4, name: "Arjun", skills: ["React", "Express", "MongoDB"], stack: "MERN" },
  { id: 5, name: "Fathima", skills: ["Python", "Flask", "Machine Learning"], stack: "Python/Django" }
];

app.get("/api/students", (req, res) => {
  const { stack } = req.query;
  const data = stack ? students.filter(s => s.stack === stack) : students;
  res.json({ count: data.length, data });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Student server running at http://localhost:" + PORT));