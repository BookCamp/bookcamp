require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('../models/User')
const Post = require('../models/Post.model')

mongoose
    .connect(`${process.env.DBLOCAL}`, { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

Post.collection.drop()

let post1 = {
    title: 'Que bien me lo paso en el Curso',
    type: 'Photo',
    img: 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
}
let post2 = {
    title: 'Mira que ebook he encontrado!',
    type: 'File',
    file: 'http://www.agirregabiria.net/g/sylvainaitor/principito.pdf'
}
let post3 = {
    type: 'Comment',
    comment: 'Hoy ha sido un día muy grande, hemos realizado el Seed!!'
}
let post4 = {
    title: 'Mirar que escuela he encontrado:',
    type: 'URL',
    url: 'https://www.ironhack.com/es'
}

const allPosts1 = new Array(20).fill(post1)
const allPosts2 = new Array(20).fill(post2)
const allPosts3 = new Array(20).fill(post3)
const allPosts4 = new Array(20).fill(post4)



Post.create(allPosts1)
    .then(postsCreated => {
        let thePosts = postsCreated
        Student.find()
            .then(students => {
                students.forEach((student, idx) => {
                    Student.findByIdAndUpdate(student._id, { $push: { posts: thePosts[idx] } })
                        .then(() => {
                            Post.findByIdAndUpdate(thePosts[idx]._id, { creator: student._id, school: student.school, course: student.courses[0] })
                                .then()
                        })
                        .then()
                })
            })

    })
    .then(() => {
        return Post.create(allPosts2)
            .then(postsCreated => {
                let thePosts = postsCreated
                Student.find()
                    .then(students => {
                        students.forEach((student, idx) => {
                            Student.findByIdAndUpdate(student._id, { $push: { posts: thePosts[idx] } })
                                .then(() => {
                                    Post.findByIdAndUpdate(thePosts[idx]._id, { creator: student._id, school: student.school, course: student.courses[0] })
                                        .then()
                                })
                                .then()
                        })
                    })

            })

    })
    .then(() => {
        return Post.create(allPosts3)
            .then(postsCreated => {
                let thePosts = postsCreated
                Student.find()
                    .then(students => {
                        students.forEach((student, idx) => {
                            Student.findByIdAndUpdate(student._id, { $push: { posts: thePosts[idx] } })
                                .then(() => {
                                    Post.findByIdAndUpdate(thePosts[idx]._id, { creator: student._id, school: student.school, course: student.courses[0] })
                                        .then()
                                })
                                .then()
                        })
                    })

            })

    })
    .then(() => {
        return Post.create(allPosts4)
            .then(postsCreated => {
                let thePosts = postsCreated
                Student.find()
                    .then(students => {
                        students.forEach((student, idx) => {
                            Student.findByIdAndUpdate(student._id, { $push: { posts: thePosts[idx] } })
                                .then(() => {
                                    Post.findByIdAndUpdate(thePosts[idx]._id, { creator: student._id, school: student.school, course: student.courses[0] })
                                        .then()
                                })
                                .then()
                        })
                    })

            })

    })
    .then(() => console.log("All Post Created!"))
