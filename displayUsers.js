// src/displayUsers.js

import users from './data';

function displayUsers() {
  const userList = document.getElementById('user-list');

  users.forEach((user) => {
    const userItem = document.createElement('li');
    userItem.innerHTML = `
      <strong>ID:</strong> ${user.id}<br>
      <strong>Name:</strong> ${user.name}<br>
      <strong>Age:</strong> ${user.age}<br>
      <strong>Email:</strong> ${user.email}<br>
      <strong>Country:</strong> ${user.country}<br>
      <strong>Company:</strong> ${user.company}<br>
      <strong>Birthday:</strong> ${user.birthday}<br><br>
    `;
    userList.appendChild(userItem);
  });
}

export default displayUsers;