// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.getElementsByClassName("like-glyph")
const errorModal = document.getElementById("modal")

// Your JavaScript code goes here!
for (const btn of hearts){
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    mimicServerCall()
    .then(()=>{
      if (!btn.classList.contains('activated-heart')){
        btn.innerText = FULL_HEART;
        btn.classList.add("activated-heart")
      } else {
        btn.innerText = EMPTY_HEART
        btn.classList.remove('activated-heart')
      }
    })
    .catch((error)=>{
      errorModal.classList.remove("hidden")
      errorModal.lastElementChild.innerText = error
      setTimeout(()=>{
        errorModal.classList.add("hidden")
      },3000)
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
