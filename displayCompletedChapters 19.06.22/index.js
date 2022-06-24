/*
Представим, что вы пишете компонент sidebar с названиями глав из книги для отображения их в браузере. Списки глав находятся по endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json. Напишите fetch запрос и выведите массив объектов тех глав, которые являются isCompleted.
*/

const getChapters = () => {
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      displayCompletedChapters(
        json.filter((chapter) => chapter.isCompleted === true)
      );
    });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();

// should return
[
  { id: 1, isCompleted: true, title: "Basic Functions" },
  { id: 2, isCompleted: true, title: "Strings" },
  { id: 4, isCompleted: true, title: "Variables" },
];
