// using DOM api

const cardBody = document.querySelector(".card-body");
const greetBtn = document.querySelector(".btn-primary");

greetBtn.addEventListener("click", (e) => {
  console.log(e);
  cardBody.innerHTML = "Hello, World!";
});

// using DOM api + XMLHttpRequest api

// const top5TodosBtn = document.querySelector(".btn-dark");
// const todosTBody = document.querySelector("#todos");

// top5TodosBtn.addEventListener("click", (e) => {
//   const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", apiUrl, true);
//   xhr.send();
//   document.getElementById("progress").innerText = "Loading...";

//   //  xhr ready state change event
//   // 0 - request not initialized
//   // 1 - server connection established
//   // 2 - request received
//   // 3 - processing request
//   // 4 - request finished and response is ready

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const todos = JSON.parse(xhr.responseText);
//       let todosHtml = "";
//       todos.forEach((todo) => {
//         todosHtml += `
//           <tr>
//             <td>${todo.id}</td>
//             <td>${todo.title}</td>
//             <td>${todo.completed}</td>
//           </tr>
//         `;
//       });
//       todosTBody.innerHTML = todosHtml;
//       document.getElementById("progress").innerText = "";
//     }
//   };
// });

// using DOM api + Fetch api

const top5TodosBtn = document.querySelector(".btn-dark");
const todosTBody = document.querySelector("#todos");

top5TodosBtn.addEventListener("click", (e) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((todos) => {
      let todosHtml = "";
      todos.forEach((todo) => {
        todosHtml += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
            `;
      });
      todosTBody.innerHTML = todosHtml;
    });
});
