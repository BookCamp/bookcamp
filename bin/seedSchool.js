const mongoose = require('mongoose')
const Student = require('../models/Student.model')
const School = require('../models/School.model')

const dbtitle = 'bookcamp'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })

School.collection.drop()

const schools = [
  {
    name: "Ironhack",
    address: "Paseo de la Chopera, 14 C.P: 28045, Madrid",
    contact: "Fran Naranjo",
    yearFoundation: 2013,
    courses: [{ "name": "Web Development FullStack", "students": [] }, { "name": "UX/UI Design", "students": [] }, { "name": "Data Analytics", "students": [] }]
  },
  {
    name: "Neoland",
    address: "Plaza de España, 11 C.P: 28008, Madrid",
    contact: "Maria Simó",
    yearFoundation: 2017,
    courses: [{ "name": "Web Development FullStack", "students": [] }, { "name": "UX/UI Design", "students": [] }, { "name": "Data Science", "students": [] }, { "name": "Digital Marketing", "students": [] }, { "name": "Mobile Development", "students": [] }, { "name": "Product Management", "students": [] }]
  },
  {
    name: "Keepcoding",
    address: "Calle Méndez Álvaro, 20 C.P: 28045, Madrid",
    contact: "Enrique Montaño",
    yearFoundation: 2018,
    courses: [{ "name": "DevOps Full Stack", "students": [] }, { "name": "Big Data, AI & ML Full Stack", "students": [] }, { "name": "Mobile Full Stack", "students": [] }, { "name": "Web Full Stack", "students": [] }, { "name": "Cybersecurity Full Stack", "students": [] }, { "name": "Aprende a Programar desde Cero", "students": [] }]
  }
]
School.create(schools, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${schools.length} schools`)
  mongoose.connection.close()
})
  .then(schoolsCreated => {
    Student.findAll()
      .then(studentsFound => {
        studentsFound.forEach(student, idx => {
          if (idx === 2 || idx === 3) {

          }
        });
      })
  })