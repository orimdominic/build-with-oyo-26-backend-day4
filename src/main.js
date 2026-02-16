const btnFetchUsers = document.getElementById("btn_fetch_users");

btnFetchUsers.addEventListener("click", run);

async function run() {
  const usersListEl = document.getElementById("ul_users_list");
  usersListEl.textContent = ""; // clear list

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      console.error(response.status);
      throw new Error("Could not complete request");
    }

    const usersList = await response.json();

    usersList.forEach((user) => {
      const li = document.createElement("li");
      li.style.paddingTop = ".5rem";
      li.textContent = user.name;
      usersListEl.append(li);
    });
  } catch (error) {
    alert("Error fetching users");
  }
}
