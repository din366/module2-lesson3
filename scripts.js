'use strict';

(() => {
  const editList = (listId) => {
    const userStr = prompt('Введите строку');

    if (userStr === null || userStr === 'exit') {
      //exit block
      console.log(userStr);
      return null;
    } else {
      if (userStr.trim() === '') {
        // checking for empty string
        return editList('list');
      }

      if (userStr === 'del') {
        deleteLastItem(listId);
        return editList('list');
      }

      if (userStr === 'clear') {
        deleteAllList('list');
        return editList('list');
      }

      document
        .querySelector(`#${listId}`)
        .insertAdjacentHTML('beforeend', `<li>${userStr}</li>`);
      return editList('list');
    }
  };

  const deleteLastItem = (listId) => {
    document.querySelector(`#${listId}`).lastElementChild.remove();
  };

  const deleteAllList = (listId) => {
    document.querySelector(`#${listId}`).textContent = '';
  };

  editList('list');
})();
