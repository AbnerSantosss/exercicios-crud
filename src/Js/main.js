//================Variables===================//

let form = document.getElementById('form')
let input = document.getElementById('input')
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')
let bodyContent = document.querySelector('.body-content')

//===================Event======================//

//---like and comment---//

let likeBtn = document.querySelector('.like-section')

let likeComente = document.querySelector('.coment-section')

likeBtn.addEventListener('click', () => {
  ativeLike()
})

function ativeLike() {
  bodyContent.classList.toggle('active-btn-like')
}

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

//==================Functions================//

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
            <div class="like-end-coment">
              <div class="like-section">
                <div class="svg-icon-like">
                  <?xml version="1.0" encoding="iso-8859-1"?>
                  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.1 490.1"
                    style="enable-background:new 0 0 490.1 490.1;" xml:space="preserve">
                    <g>
                      <path d="M201.9,21.018c-18.6,13.6-28,36.9-28,69v76.2H68.3c-37.6,0-68.3,30.6-68.3,68.3v2.1c0,0.6,0.1,1.3,0.2,1.9l28.1,176.5
                                		c5.2,42.4,34.8,66.8,81.1,66.8h209.2c37.6,0,68.3-30.6,68.3-68.3v-196.1c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7
                                		v207.9c0,5.9-4.8,10.7-10.7,10.7h-33.1c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h33.1c19.4,0,35.2-15.8,35.2-35.2v-208
                                		c0-19.4-15.8-35.2-35.2-35.2h-57.3c-13.8,0-25.8,8-31.6,19.6c-0.8-0.5-1.7-0.8-2.7-1.1c-3.3-0.9-81.4-23.8-81.4-91.2v-85.6
                                		c0-5.4-3.5-10.1-8.6-11.7C271.7,11.718,231.3-0.582,201.9,21.018z M356.8,224.218c1.9,0.5,3.8,0.6,5.6,0.2v189.1
                                		c0,24.1-19.6,43.8-43.8,43.8h-66.4H109.4c-34,0-53.1-15.2-56.9-45.7l-28-176v-1.1c0-24.1,19.6-43.8,43.8-43.8h117.9
                                		c6.8,0,12.3-5.5,12.3-12.3v-88.4c0-23.9,6-40.4,17.9-49.2c12.9-9.6,30.7-8.7,41.1-7v75.6
                                		C257.5,195.418,352.7,223.118,356.8,224.218z" />
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </div>
                <p>Curtir</p>
              </div>
              <div class="coment-section">
                <div class="svg-coment-icon">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Zm5-9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-2,4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,9h6a1,1,0,0,0,0-2H9A1,1,0,0,0,9,9Z" />
                  </svg>

                </div>
                <p>Comentar</p>
              </div>
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
