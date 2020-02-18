document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

let changeCourse = document.querySelector('#schools');
changeCourse.onchange = function(e){
  console.log(changeCourse.value)
  let activeSel = document.querySelector(`.${changeCourse.value}`)
  let otherSel = document.querySelectorAll(`.school-option`)
  otherSel.forEach(ele => ele.classList.add('hidden'))
  activeSel.classList.remove('hidden')

//changeCourse.classList.toggle('hidden');


}
