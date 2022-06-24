/*
Функция `prepareStatus` вызывается перед отправкой статуса пользователя в социальной сети.
Завершите функцию, чтобы она возвращала строку содержащую `userId`, `status` и `location`, из объекта `data`.
*/

/**
 * @param {string} status
 * @param {string} location
 */
const prepareStatus = (status, location) => {
  const userId = 42;
  const data = {
    userId,
    status,
    location,
  };
  return {
    userId: data.userId,
    status: data.status,
    location: data.location,
  };
};

// Sample usage - do not modify
console.log(prepareStatus("My first post!", "Amsterdam")); // '{"userId":42,"status":"My first post!","location":"Amsterdam"}'
console.log(prepareStatus("Hello World!", "Berlin")); // '{"userId":42,"status":"Hello World!","location":"Berlin"}'
