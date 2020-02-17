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
    courses: ["Web Development FullStack", "UX/UI Design", "Data Analytics"]
  },
  {
    name: "Neoland",
    address: "Plaza de España, 11 C.P: 28008, Madrid",
    contact: "Maria Simó",
    yearFoundation: 2017,
    courses: ["Web Development", "UX/UI", "Data Science", "Digital Marketing", "Mobile Development", "Product Management"]
  },
  {
    name: "Keepcoding",
    address: "Calle Méndez Álvaro, 20 C.P: 28045, Madrid",
    contact: "Enrique Montaño",
    yearFoundation: 2018,
    courses: ["DevOps Full Stack", "Big Data, AI & ML Full Stack", "Mobile Full Stack", "Web Full Stack", "Cybersecurity Full Stack", "Aprende a Programar desde Cero"]
  }
]
School.create(schools)
  .then(schoolsCreated => {
    let allSchools = schoolsCreated
    Student.find()
      .then(studentsFound => {
        studentsFound.forEach((student, idx) => {
          if (idx <= 3) {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[0]._id, courses: allSchools[0].courses[0] } })
              .then()
          } else if (idx > 3 && idx <= 7) {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[0]._id, courses: allSchools[0].courses[1] } })
              .then()
          } else if (idx > 7 && idx <= 11) {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[1]._id, courses: allSchools[1].courses[0] } })
              .then()
          } else if (idx > 11 && idx <= 15) {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[1]._id, courses: allSchools[1].courses[3] } })
              .then()
          } else if (idx > 15 && idx <= 17) {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[1]._id, courses: allSchools[1].courses[5] } })
              .then()
          } else {
            Student.findByIdAndUpdate(student._id, { $push: { school: allSchools[2]._id, courses: allSchools[2].courses[0] } })
              .then()
          }
        });
      })
      .then(() => {
        Student.find({ $or: [{ courses: "Web Development FullStack" }, { courses: "UX/UI Design" }, { courses: "Data Analytics" }] })
          .then(studentsFound => {
            studentsFound.forEach(student => {
              School.findOneAndUpdate({ name: "Ironhack" }, {
                $push: { studentsCount: student._id }
              })
                .then(() => {
                  console.log("1 student added!")
                })
            })

          })
      })
      .then(() => {
        Student.find({ $or: [{ courses: "Web Development" }, { courses: "UX/UI" }, { courses: "Data Science" }, { courses: "Digital Marketing" }, { courses: "Mobile Development" }, { courses: "Product Management" }] })
          .then(studentsFound => {
            studentsFound.forEach(student => {
              School.findOneAndUpdate({ name: "Neoland" }, {
                $push: { studentsCount: student._id }
              })
                .then(() => {
                  console.log("1 student added!")
                })
            })

          })
      })
      .then(() => {
        Student.find({ $or: [{ courses: "DevOps Full Stack" }, { courses: "Big Data, AI & ML Full Stack" }, { courses: "Mobile Full Stack" }, { courses: "Web Full Stack" }, { courses: "Cybersecurity Full Stack" }, { courses: "Aprende a Programar desde Cero" }] })
          .then(studentsFound => {
            studentsFound.forEach(student => {
              School.findOneAndUpdate({ name: "Keepcoding" }, {
                $push: { studentsCount: student._id }
              })
                .then(() => {
                  console.log("1 student added!")
                })
            })

          })
      })
  })