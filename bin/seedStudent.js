// To insert in "bin/seeds.js"
require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('../models/User')

const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainPassword1 = "123";
const salt = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);

mongoose
    .connect(`${process.env.DBLOCAL}`, { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

Student.collection.drop()

const student = [
    {
        username: "Luciano Sánchez",
        email: "daniel.ronhacker@gmail.com",
        password: hash1,
        birthDate: "1986-05-07",
        course: ["Web Development FullStack"],
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582287612/Low_IMG_3849_aiibtq.jpg",
        hobbies: ["tenis", "futbol", "viajar"]


    },
    {
        username: "Pablo Carceller",
        email: "paucarsab@gmail.com",
        password: hash1,
        birthDate: "1984-07-08",
        course: ["Web Development FullStack"],
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582287599/low_IMG_3876_kzhl5t.jpg",
        hobbies: ["cine", "senderismo", "musica"]


    },
    {
        username: "Franky",
        email: "baloo32@yahoo.com",
        password: hash1,
        birthDate: "1988-09-17",
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582288545/low_franky_ciq8ju.jpg",
        course: ["UX/UI Design"],
        hobbies: ["tecnologias", "musica"]

    },
    {
        username: "Cindy",
        email: "cindy_27@gmail.com",
        password: hash1,
        birthDate: "1993-06-02",
        course: ["UX/UI Design"],
        hobbies: ["bailar", "viajar", "cine"]


    },
    {
        username: "Fernando Comet",
        email: "elchar@yahoo.com",
        password: hash1,
        birthDate: "1980-07-20",
        course: ["Data Analytics"],
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582288546/low_fer_kqr6jj.jpg",
        hobbies: ["musica", "series", "leer"]


    },
    {
        username: "Manu Fernández",
        email: "current@hotmail.com",
        password: hash1,
        birthDate: "1989-10-01",
        course: ["Data Analytics"],
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582288549/low_manu_f5u6vs.jpg",
        hobbies: ["natacion", "musica", "tecnologias"]

    },
    {
        username: "Armando Momo",
        email: "mary_35@hotmail.com",
        password: hash1,
        birthDate: "1990-12-09",
        course: ["Data Science"],
        photo: "https://res.cloudinary.com/dtdx0w1qa/image/upload/v1582288849/low_armando_q3ueso.jpg",
        hobbies: ["gym", "musica", "bailar"]

    },
    {
        username: "Richard",
        email: "richy@yahoo.com",
        password: hash1,
        birthDate: "1992-11-08",
        course: ["UX/UI"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9lAckKAwdlOYjtnsj3x8ko-5yAbZnQQ5bjcOxLDxhzd2nhksZ",
        hobbies: ["viajar", "cine"]

    },
    {
        username: "julia",
        email: "ju@gmail.com",
        password: hash1,
        birthDate: "1983-04-01",
        course: ["Web Development"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1jScPjfXBy2BjoNlf8toSP8H_v-2dXOM3_sagRXO4hWBxBfFy",
        hobbies: ["leer", "viajar", "bailar"]

    },
    {
        username: "Pedro",
        email: "elpi@hotmail.com",
        password: hash1,
        birthDate: "1990-09-10",
        course: ["Web Development"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcC3nuof3brPkZ5XLXuTOSYfkOUjBp8H37uZubMnjYlYnme5aB",
        hobbies: ["musica", "boxeo", "programacion"]

    },
    {
        username: "Manu",
        email: "manueldiaz@yahoo.com",
        password: hash1,
        birthDate: "1987-02-03",
        course: ["Digital Marketing"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Cx8SMFXvHfXwPPHkXygOLn6rVgkSN0JtSrzvH9Cy59o5lAVn",
        hobbies: ["cine", "senderismo"]

    },
    {
        username: "Elsa",
        email: "elsy@hotmail.com",
        password: hash1,
        birthDate: "1995-05-12",
        course: ["Mobile Development"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRTpTLmGpRorPZjAy5Ed-k1AnWDBxxhj757th0wgRrAkOwsr5-",
        hobbies: ["natacion", "gym"]

    },
    {
        username: "Juan",
        email: "juanignacio@hotmail.com",
        password: hash1,
        birthDate: "1980-07-23",
        course: ["Product Management"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQtrNCoRDfTAE_L2awzt1duFCe2i3ZZOEm-UdiYVOjfOk4B7lb",
        hobbies: ["series", "musica"]

    },
    {
        username: "Fraciso",
        email: "elfran@gmail.com",
        password: hash1,
        birthDate: "1985-08-30",
        course: ["Product Management"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShu24l1ZcdNgCBMCTUan9G33xQ6TbVwdxbMEbI8tImIhrdY5cg",
        hobbies: ["cine", "viajes"]

    },
    {
        username: "Jony",
        email: "jonypaz@yahoo.com",
        password: hash1,
        birthDate: "1990-11-10",
        course: ["Digital Marketing"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShu24l1ZcdNgCBMCTUan9G33xQ6TbVwdxbMEbI8tImIhrdY5cg",
        hobbies: ["leer", "escalar"]

    },
    {
        username: "Miriam",
        email: "miru@hotmail.com",
        password: hash1,
        birthDate: "1984-06-08",
        course: ["DevOps Full Stack"],
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJqFmwpOlEB-jAiIDKBCUKLyZlMCDuEQ5iYYWYTcxb_eYM7JN3",
        hobbies: ["pilates", "yoga"]

    },
    {
        username: "Joaquin",
        email: "eljuaco@gmail.com",
        password: hash1,
        birthDate: "1979-10-03",
        course: ["Big Data, AI & ML Full Stack"],
        hobbies: ["futbol", "natacion"]
    },
    {
        username: "Marcos",
        email: "marcus@gmail.com",
        password: hash1,
        birthDate: "1991-04-27",
        course: ["Mobile Full Stack"],
        photo: "https://los40mx00.epimg.net/los40/imagenes/2017/04/19/moda/1492632196_480234_1492632619_noticia_normal.jpg",
        hobbies: ["sederismo", "remo"]

    },
    {
        username: "Paula",
        email: "pau33@hotmail.com",
        password: hash1,
        birthDate: "1982-09-14",
        course: ["Web Full Stack"],
        photo: "https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-600x400.jpg",
        hobbies: ["leer", "yoga", "bailar"]

    },
    {
        username: "Sergio",
        email: "sergi_27@yahoo.com",
        password: hash1,
        birthDate: "1990-11-05",
        course: ["Cybersecurity Full Stack"],
        photo: "https://hombresconestilo.com/wp-content/uploads/2018/08/Peinados-modernos-hombre.jpg",
        hobbies: ["escalar", "remo", "tennis"]

    }
];
Student.create(student, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${student.length} students`)
    mongoose.connection.close()
});
