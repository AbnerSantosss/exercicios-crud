let form = document.getElementById('form')
let input = document.getElementById('input')
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('button clicked')
  formValidation()
})

let formValidation = () => {
  if (input.value === '') {
    msg.innerHTML = 'A postagem não pode ficar em branco'
    console.log('failure')
  } else {
    acceptData()
  }
}

let data = {}

let acceptData = () => {
  data['text'] = input.value
  createPosts()
  console.log(data)
}

function createPosts() {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
     <span>
     <i onClick=deletePost(this) class="fas fa-trash-alt"></i></span>
     <span>
     <i onClick=editPost(this) class="fas fa-edit"></i>
     </span>
  </div>
  `
  input.value = ''
}

function deletePost(id) {
  id.parentElement.parentElement.remove()
}

function editPost(id) {
  console.log('delete')
  input.value = id.parentElement.previousElementSibling.innerHTML
  console.log(` ${input.value}`)
  id.parentElement.parentElement.remove()
}
