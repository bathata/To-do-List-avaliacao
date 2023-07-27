const form = document.getElementById('task-form');
    const taskList = document.getElementById('tasks');

    form.onsubmit = function (e) {
      e.preventDefault();
      const inputField = document.getElementById('task-input');
      addTask(inputField.value);
      form.reset();
    };

    function addTask(description) {
      const taskContainer = document.createElement('div');
      const newTask = document.createElement('input');
      const taskLabel = document.createElement('label');
      const taskDescriptionNode = document.createTextNode(description);

      newTask.setAttribute('type', 'checkbox');
      newTask.setAttribute('name', description);
      newTask.setAttribute('id', description);

      taskLabel.setAttribute('for', description);
      taskLabel.appendChild(taskDescriptionNode);

      taskContainer.classList.add('task-item');
      taskContainer.appendChild(newTask);
      taskContainer.appendChild(taskLabel);

      // Adicionando botão de remover
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remover';
      removeButton.onclick = function() {
	  
        removeTask(taskContainer);
      };
      taskContainer.appendChild(removeButton);

      taskList.appendChild(taskContainer);
	  removeButton.classList.add('button-remove');
    }

    function removeTask(taskContainer) {
      // Remover o item da lista (ou seja, a tarefa)
      taskContainer.remove();
    }