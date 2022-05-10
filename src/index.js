const add = document.getElementById('add')
const sub = document.getElementById('sub')
const number = document.querySelector('span')

let count = 0
number.innerText = count

const upText = () => { number.innerHTML = count }

const handleAdd = () => {
  count += 1
  upText()
}
const handleSub = () => {
  count -= 1
  upText()
}

add.addEventListener('click', handleAdd)
sub.addEventListener('click', handleSub)