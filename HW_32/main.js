/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка HTTP! Статус відповіді: ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    console.log(`Знайдено ${posts.length} постів, перший: "${posts[0].title}"`);
  })
  .catch((error) => {
    console.error(`Не вдалося завантажити пости. Причина: ${error.message}`);
  })
  .finally(() => {
    console.log("Запит завершено.");
  });

fetch("https://jsonplaceholder.typicode.com/posts/99999")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка HTTP! Статус відповіді: ${response.status}`);
    }
    return response.json();
  })
  .then((posts) => {
    console.log(`Знайдено ${posts.length} постів, перший: "${posts[0].title}"`);
  })
  .catch((error) => {
    console.error(`Не вдалося завантажити пости. Причина: ${error.message}`);
  })
  .finally(() => {
    console.log("Запит завершено.");
  }); */

async function loadPosts(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Помилка HTTP! Статус відповіді: ${response.status}`);
    }

    const posts = await response.json();
    console.log(`Знайдено ${posts.length} постів, перший: "${posts[0].title}"`);
  } catch (error) {
    console.error(`Не вдалося завантажити пости. Причина: ${error.message}`);
  } finally {
    console.log("Запит завершено.");
  }
}

loadPosts("https://jsonplaceholder.typicode.com/posts");
loadPosts("https://jsonplaceholder.typicode.com/posts/99999");
