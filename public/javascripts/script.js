document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

if (document.querySelector('#schools')) {
  let changeCourse = document.querySelector('#schools');
  changeCourse.onchange = function (e) {
    console.log(changeCourse.value)
    let activeSel = document.querySelector(`.${changeCourse.options[changeCourse.selectedIndex].text}`)
    activeSel.setAttribute(`name`, `courses`)
    let otherSel = document.querySelectorAll(`.school-option`)
    otherSel.forEach(ele => ele.classList.add('hidden'))
    activeSel.classList.remove('hidden')

    //changeCourse.classList.toggle('hidden');
  }
}

let bottons = document.querySelectorAll(`.btn-content`)
let forms = document.querySelectorAll(`.type-form`)
bottons.forEach(botton => botton.addEventListener('click', function (e) {
  e.preventDefault()
  console.log(botton)
  forms.forEach(form => form.classList.add('hidden'))
  document.querySelector(`#${botton.getAttribute("data-type").toLowerCase()}`).classList.remove('hidden')
})
)

let favButtons = document.querySelectorAll(`.favbutton`)
favButtons.forEach(button => button.addEventListener('click', function (e) {
  e.preventDefault()
  let favPosts = {
    id: button.id
  }

  button.childNodes[1].classList.add('fav')
  console.log(favPosts)
  axios.post('/favorites', favPosts)
    .then(() => console.log(favPosts))
}))

