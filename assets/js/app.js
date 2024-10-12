const list = document.querySelector("ul");
const add = document.querySelector(".add");
const sort = document.querySelector(".sort");
const again = document.querySelector(".again");
const winner = document.querySelector(".winner");

const participants = [];

add.addEventListener("click", function handleAdd() {
  const input = document.querySelector("input").value.trim();

  if (input != "") {
    participants.push(input);
  }

  list.innerHTML = "";

  for (let i = 0; i < participants.length; i++) {
    const element = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const trash = document.createElement("img");
    trash.src = "./libs/icons/trash.svg";

    element.innerHTML = participants[i];
    list.appendChild(element);
    element.appendChild(deleteBtn);
    deleteBtn.appendChild(trash);

    deleteBtn.addEventListener('click', () => {

      participants.splice(i, 1);
      element.remove();
      
    })

  }

  document.querySelector("input").value = "";
});

document.querySelector("input").addEventListener('keydown', (event) => {

  if(event.key === 'Enter') {
    event.preventDefault()
    add.click()
  }

})

sort.addEventListener('click', () => {

    const randomIndex = Math.floor(Math.random() * participants.length);
    let randomParticipant = participants[randomIndex]

    console.log(randomParticipant)

    again.style.display = "flex";

    winner.innerHTML = randomParticipant;

})

again.addEventListener('click', () => {

   /* list.style.display = "block";
    again.style.display = "none";
    winner.innerHTML = "";
    sort.style.display = "block";

    let randomParticipant = participants[randomIndex]
    winner.innerHTML = randomParticipant; */

    sort.click()


})