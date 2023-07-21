const list = document.getElementById("list");
const filter = document.getElementById("filter");
let USERS = [];

filter.addEventListener("input", (event) => {
  const userValue = event.target.value.toLowerCase();

  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(userValue)
  );

  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // throw new Error("new error");
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 1500);
  } catch (error) {
    list.style.color = "red";
    list.innerHTML = error.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "no matched users...";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `
        <li class="list-group-item">${user.name}</li>
    `;
}

start();
