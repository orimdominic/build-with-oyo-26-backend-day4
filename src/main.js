const btnFetchUsers = document.getElementById("btn_fetch_users");

btnFetchUsers.addEventListener("click", run);

async function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "get",
  }).then((response) => response.json());
}

async function run() {
  const usersListEl = document.getElementById("ul_users_list");
  usersListEl.textContent = "" // clear list

  try {
    const usersList = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "get",
      },
    ).then((response) => response.json());

    usersList.forEach((user) => {
      const li = document.createElement("li");
      li.style.paddingTop = ".5rem"
      li.textContent = user.name;
      usersListEl.append(li);
    });
  } catch (error) {
    alert("Error fetching users");
  }
}
