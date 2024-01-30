let unreadNotification = document.querySelectorAll(".unread");
let dot = document.querySelectorAll(".dot");
const allRead = document.querySelector("#allRead");

const quantity = document.querySelector("#numberNote");

quantity.innerHTML = unreadNotification.length;

const redefinitionUnreadElementAndNumberNote = () => {
    unreadNotification = document.querySelectorAll(".unread");
    quantity.innerHTML = unreadNotification.length;
};

unreadNotification.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.remove("bg-veryLightGrayishBlue");
    e.classList.remove("unread");
    redefinitionUnreadElementAndNumberNote()
    e.querySelector('p span.dot').classList.remove('absolute')
    e.querySelector('p span.dot').classList.add('hidden')
   console.log(e.querySelector('p span .dot'));
    
  });
});

allRead.addEventListener("click", () => {
  unreadNotification.forEach((e) => {
    e.classList.remove("bg-veryLightGrayishBlue");
    e.classList.remove("unread");
    redefinitionUnreadElementAndNumberNote()
    dot.forEach((e)=>{
        e.classList.remove('absolute')
        e.classList.add('hidden')
    })
    
  });
});
