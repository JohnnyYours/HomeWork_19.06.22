/*
Завершите функцию, чтобы она делала fetch запрос на https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json, преобразовывала ответ в формат JSON и записывала полученные data в консоль.
*/

const checkForNewNotifications = () => {
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// Sample usage - do not modify
checkForNewNotifications();
