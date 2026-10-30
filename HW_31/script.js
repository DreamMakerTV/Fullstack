const API_URL = "https://6ad77fd495e98f36aef28f87.mockapi.io/users";

async function getUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }
    const data = await response.json();
    console.log("Список елементів:", data);
    return data;
  } catch (error) {
    console.error("Помилка при отриманні елементів:", error);
  }
}

async function addUser(newUser) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const createdUser = await response.json();
    console.log("Додано новий елемент:", createdUser);
    return createdUser;
  } catch (error) {
    console.error("Помилка при додаванні елемента:", error);
  }
}

async function deleteUserById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Помилка HTTP: ${response.status}`);
    }

    const deletedUser = await response.json();
    console.log(`Елемент з ID ${id} успішно видалено:`, deletedUser);
    return deletedUser;
  } catch (error) {
    console.error(`Помилка при видаленні елемента з ID ${id}:`, error);
  }
}

/* getUsers();

addUser({
  name: "Анатолій",
  avatar: "https://avatars.githubusercontent.com/u/7926762",
});

deleteUserById("12"); */
