import axios from "axios";

const btnFetchUsers = document.getElementById("btn_fetch_users");

btnFetchUsers.addEventListener("click", run);

async function run() {
  const usersListEl = document.getElementById("ul_users_list");
  usersListEl.textContent = "" // clear list

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    )

    response.data.forEach((user) => {
      const li = document.createElement("li");
      li.style.paddingTop = ".5rem"
      li.textContent = user.name;
      usersListEl.append(li);
    });
  } catch (error) {
    alert("Error fetching users");
  }
}
