const valuesCategory = ["Entrada", "Saída"];

let insertedValues = [
  {
    id: 1,
    value: 90.0,
    categoryID: 0,
  },
  {
    id: 2,
    value: 40.0,
    categoryID: 1,
  },
  {
    id: 3,
    value: 15.5,
    categoryID: 0,
  },
];

function renderValue(arrayValues) {
  const valueContainer = document.querySelector('.primeiro');
  valueContainer.innerHTML = '';

  if (arrayValues.length === 0) {
    const registerWarning = document.querySelector('.registerWarning');
    registerWarning.style.display = 'block';
  } else {
    const registerWarning = document.querySelector('.registerWarning');
    registerWarning.style.display = 'none';

    arrayValues.forEach((array) => {
      let category;
      if (array.categoryID === 0) {
        category = 'Entrada';
      } else {
        category = 'Saída';
      }

      const valueElement = document.createElement('div');
      valueElement.classList.add('styleValue');
      valueElement.innerHTML = `
        <p>R$ ${array.value.toFixed(2)}</p>
        <div>
          <p>${category}</p>
          <button class="delete-button"></button>
        </div>
      `;

      const deleteButton = valueElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', () => {
        valueElement.remove();
        insertedValues = insertedValues.filter((value) => value.id !== array.id);
        renderValue(insertedValues);
      });

      valueContainer.appendChild(valueElement);
    });
  }
}

renderValue(insertedValues);
