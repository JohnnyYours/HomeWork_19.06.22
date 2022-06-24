/*
Завершите функцию, чтобы она извлекла конечную точку https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json , а затем вызвала функцию showNewNotifications с количеством непрочитанных уведомлений.
*/

const checkForNewNotifications = () => {
  fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then((response) => response.json())
    .then((json) => showNewNotifications(json.count));
};

// do NOT modify this function
function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

// Sample usage - do not modify
checkForNewNotifications(); // You have 3 new notifications. Would you like to read them?
