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
        <div class="right">
              <div class="post-perfil-content">
                <img src="./img/107922389.jpg" alt="imagem de perfil de abner">
                <div class="post-perfil-descrition">
                  <h2>Abner Henrique</h2>
                  <p>desenvolvedor web</p>
                </div>
                <div class="post-opstions-action">
                  <span>
                    <i onclick=deletePost(this) class="fas fa-trash-alt"></i></span>
                  <span>
                    <i onclick=editPost(this) class="fas fa-edit"></i>
                  </span>
                </div>
              </div>
              <div class="post-text-content">
                <p>"${data.text}"</p>
              </div>

            </div>
  `
  input.value = ''
}

function deletePost(id) {
  let isOK = confirm('Deseja Realmente deletar sua publicação?')
  if (isOK) {
    id.parentElement.parentElement.parentElement.parentElement.remove()
  }
  console.log('esta pegando')
}

function editPost(id) {
  console.log('delete')
  input.value = id.parentElement.previousElementSibling.innerHTML
  console.log(` ${input.value}`)
  id.parentElement.parentElement.remove()
}
