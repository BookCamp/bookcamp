// To insert in "bin/seeds.js"
const mongoose = require('mongoose');
const Student = require('../models/Student');

const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainPassword1 = "123";
const salt = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);


const dbtitle = 'bookcamp'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useUnifiedTopology: true, useNewUrlParser: true })



  const Student = [
    {
      username: "Sergio",
      email: "sergiomendez@gmail.com",
      password: hash1,
      birthDate: "1984-01-23",
      school: ["ironhack"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPqEz9hk3cSDBjfP2Rccq0H9EJ1y1x1EMaW9RS7v2IJwHH-lSq",
      hobbies: ["tenis", "futbol", "viajar"]
       
      
    },
    {
      username: "Ursu",
      email: "ursu@hotmail.com",
      password: hash1,
      birthDate: "1986-04-03",
      school: ["immune"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbjAwcsppyMYKIBddIS6AZ0O6c8sSou2tgwy69TswFmJzZL6ne",
      hobbies: ["cine", "senderismo", "musica"]
      
      
    },
    {
      username: "Baloo",
      email: "baloo32@yahoo.com",
      password: hash1,
      birthDate: "1988-09-17",
      school: ["webdict"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxXeeUYw3sjBGqVpKAo6Ol7ih8S5CJ2BY-5mBiKHeXGGSP1qor",
      hobbies: ["tecnologias", "musica"]
      
    },
    {
      username: "Cindy27",
      email: "cindy_27@gmail.com",
      password: hash1,
      birthDate: "1993-06-02",
      school: ["citylab"],
      course: ["web"],
      photo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Perfil-Berna.jpg",
      hobbies: ["bailar", "viajar", "cine"]
     
      
    },
    {
      username: "Charly",
      email: "elchar@yahoo.com",
      password: hash1,
      birthDate: "1980-07-20",
      school: ["comdemotion"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4Gn2LKw0ANggu71b_6Q-PCFhPEB9W9qJpqzxzbgPXIcCKxtik",
      hobbies: ["musica", "series", "leer"]
      
      
    },
    {
      username: "Pablo",
      email: "current@hotmail.com",
      password: hash1,
      birthDate: "1989-10-01",
      school: ["daytech"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIH8Woz_16Y8WH0qSKj0IuXmLFHc7zeSGx-7tbMzZbv-iVYo_d", 
      hobbies: ["natacion", "musica", "tecnologias"]
      
    },
    {
      username: "Maria",
      email: "mary_35@hotmail.com",
      password: hash1,
      birthDate: "1990-12-09",
      school: ["ironhack"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNuZgDXdLV5VnaHBvwFX7CDMDbZ_yRUFwLAs6Gs6NCTP6VE6Fx",
      hobbies: ["gym", "musica", "bailar"]
      
    },
    {
      username: "Richard",
      email: "richy@yahoo.com",
      password: hash1,
      birthDate: "1992-11-08",
      school: ["track"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9lAckKAwdlOYjtnsj3x8ko-5yAbZnQQ5bjcOxLDxhzd2nhksZ",
      hobbies: ["viajar", "cine"]
      
    },
    {
      username: "julia",
      email: "ju@gmail.com",
      password: hash1,
      birthDate: "1983-04-01",
      school:["universidad Carlos III"],
      course: ["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1jScPjfXBy2BjoNlf8toSP8H_v-2dXOM3_sagRXO4hWBxBfFy",
      hobbies: ["leer", "viajar", "bailar"]
      
    },
    {
      username: "Pedro",
      email: "elpi@hotmail.com",
      password: hash1,
      birthDate: "1990-09-10",
      school:["coursera"],
      course:["web"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcC3nuof3brPkZ5XLXuTOSYfkOUjBp8H37uZubMnjYlYnme5aB",
      hobbies: ["musica", "boxeo", "programacion"]
      
    },
    {
      username: "Manu",
      email: "manueldiaz@yahoo.com",
      password: hash1,
      birthDate: "1987-02-03",
      school:["miriada-x"],
      course:["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Cx8SMFXvHfXwPPHkXygOLn6rVgkSN0JtSrzvH9Cy59o5lAVn",
      hobbies: ["cine, senderismo"]
      
    },
    {
      username: "Elsa",
      email: "elsy@hotmail.com",
      password: hash1,
      birthDate: "1995-05-12",
      school:["Ironhack"],
      course: ["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRTpTLmGpRorPZjAy5Ed-k1AnWDBxxhj757th0wgRrAkOwsr5-",
      hobbies: ["natacion, gym"]
      
    },
    {
      username: "Juan", 
      email: "juanignacio@hotmail.com",
      password: hash1,
      birthDate: "1980-07-23",
      school: ["datateck"],
      course: ["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQtrNCoRDfTAE_L2awzt1duFCe2i3ZZOEm-UdiYVOjfOk4B7lb",
      hobbies: ["series, musica"]
      
    },
    {
      username: "Fraciso",
      email: "elfran@gmail.com",
      password: hash1,
      birthDate: "1985-08-30",
      school: ["inmmune"],
      course: ["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShu24l1ZcdNgCBMCTUan9G33xQ6TbVwdxbMEbI8tImIhrdY5cg",
      hobbies: ["cine, viajes"]
      
    },
    {
      username: "Jony",
      email: "jonypaz@yahoo.com",
      password: hash1,
      birthDate: "1990-11-10",
      school:["Universidad Politecnica de Madrid"],
      course: ["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShu24l1ZcdNgCBMCTUan9G33xQ6TbVwdxbMEbI8tImIhrdY5cg",
      hobbies: ["leer, escalar"]
      
    },
    {
      username: "Miriam",
      email: "miru@hotmail.com",
      password: hash1,
      birthDate: "1984-06-08",
      school: ["datalab"],
      course: ["data"],
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJqFmwpOlEB-jAiIDKBCUKLyZlMCDuEQ5iYYWYTcxb_eYM7JN3",
      hobbies: ["pilates, yoga"]
      
    },
    {
      username: "Joaquin", 
      email: "eljuaco@gmail.com",
      password: hash1,
      birthDate: "1979-10-03",
      school:["miriada-x"],
      course: ["data"],
      photo: "",
      hobbies: ["futbool, natacion"] 
    },
    {
      username: "Marcos", 
      email: "marcus@gmail.com",
      password: hash1,
      birthDate: "1991-04-27",
      school: ["tech"],
      course: ["data"],
      photo: "",
      hobbies: ["sederismo, remo"]
      
    },
    {
      username: "Paula",
      email: "pau33@hotmail.com",
      password: hash1,
      birthDate: "1982-09-14",
      school:["codigo-c"],
      course: ["data"],
      photo: "",
      hobbies: ["leer, yoga, bailar"]
      
    },
    {
      username: "Sergio",
      email: "sergi_27@yahoo.com",
      password: hash1,
      birthDate: "1990-11-05",
      school:["universidad telefonica"],
      course: ["data"],
      photo: "",
      hobbies: ["escalar, remo, tennis"]
      
    },
    {
      username: "Fernando", 
      email: "fer@hotmail.com",
      password: hash1,
      birthDate: "1978-10-25",
      school: ["ironhack"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["natacion, boxeo, gym"]
      
    },
    {
      username: "Cecilia",
      email: "chechu@yahoo.com",
      password: hash1,
      birthDate: "2000-03-19",
      school:["miriada-x"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["gym, yoga, tennis"]
      
    },
    {
      username: "Carlos",
      email: "carlosdiaz@gmail.com",
      password: hash1,
      birthDate: "1995-12-09",
      school: ["Lab"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["leer, senderismo, escalar"]
      
    },
    {
      username: "Merche", 
        email: "mercheperez@hotmail.com",
        password: hash1,
        birthDate: "2001-06-13",
        school: ["universidad de Londres"],
        course: ["Ux/Ui"],
        photo: "",
        hobbies: ["gym, yoga, bailar"]

      },
      {
      username: "Pia",
      email: "pialozano@hotmail.com",
      password: hash1,
      birthDate: "1990-01-07",
      school: ["ironhack"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["padel, natacion"]
      
    },
    {
      username: "Carmen",
      email: "carmu@gmail.com",
      password: hash1,
      birthDate: "2000-11-28",
      school: ["immune"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["aerobic, leer, viajar"]
      
    },
    {
      username: "Alejandro",
      email: "ale@hotmail.com",
      password: hash1,
      birthDate: "1997-05-03",
      school: ["autia"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["senderismo, escalar, viajar"]
      
    },
    {
      username: "Victor", 
      email: "victorrans@yahoo.com",
      password: hash1,
      birthDate: "2001-09-15",
      school: ["Universidad de Monterrey"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["boxeo, natacion"]

      
    },
    {
      username: "Soraya",
      email: "sory@hotmail.com",
      password: hash1,
      birthDate: "1998-07-02",
      school: ["Lab"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["yoga, leer, viajar"]
      
    },
    {
      username: "Sara",
      email: "saramontero@yahoo.com",
      password: hash1,
      birthDate: "2002-11-18",
      school: ["track"],
      course: ["Ux/Ui"],
      photo: "",
      hobbies: ["gym, tennis, natacion"]
      
    },
  ];

  Student.create(Students, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${Students.length} Students`)
    mongoose.connection.close()
  });