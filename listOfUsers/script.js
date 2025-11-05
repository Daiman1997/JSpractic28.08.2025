const listUsers = document.querySelector("#userList"); // Списко пользователей
const filter = document.querySelector("#filter"); // Фильтр по именам
const arrow = document.querySelectorAll("#arrow"); // Открывающееся меню
let USERS = [];

filter.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filterUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filterUsers);
});

async function start() {
  listUsers.innerHTML = `<li class="loading__spinner"><span>Loading users</span><div class="spinner"></div></li>`;
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 1000);
  } catch (error) {
    listUsers.style.color = "red";
    listUsers.innerHTML = `<li class="loading__spinner">${error.message}</li>`;
  }
}

function render(users = []) {
  if (users.length === 0) {
    listUsers.innerHTML = `<li class="loading__spinner">No users found</li>`;
  } else {
    const html = users.map(toHTML).join("");
    listUsers.innerHTML = html;
  }
}

function toHTML(user) {
  return `<li class="list__user">
            <div class="list__user-top"><span>${user.name}</span><span class="arrow" id="arrow">⇩</span></div>
            <ul class="list__user-bottom">
                <li><b>Username:</b> ${user.username}</li>
                <li><b>Email:</b> ${user.email}</li>
                <li><b>Phone:</b> ${user.phone}</li>
                <li><b>Website:</b> ${user.website}</li>
            </ul>
        </li>`;
}

start();

arrow.addEventListener("click", () => {
    document.querySelectorAll('.list__user-bottom').forEach((el) => {
        el.style.display = el.style.display === 'flex' ? 'none' : 'flex';
    });
});
