let test = document.getElementsByClassName('teste');
if (test.attachEvent) {
  test.attachEvent("submit", processarForm);
}


function inserirValor() {
  const input = document.querySelector('#value')
  const entrada = document.querySelector('#entry')
  const saida = document.querySelector('#exit')
  const modalController = document.querySelector('dialog')
  const inserir = document.querySelector('.last_button_style')

  let categoria;
  entrada.addEventListener('click', () => {
    categoria = 0

  })
  saida.addEventListener('click', () => {
    categoria = 1

  })
  inserir.addEventListener('click', () => {
    let newValue = {}
    newValue.id = insertedValues.length + 1;
    newValue.value = Number(input.value);
    newValue.categoryID = categoria;

    insertedValues.push(newValue)
    modalController.close();
    renderValue(insertedValues)


  })

}
inserirValor()

function sum(numbers) {
  let total = 0;
  numbers.forEach(number => {
    total += number;
  });
  return total;
}
const buttonsFilter = document.querySelectorAll('.buttonStyle');

buttonsFilter.forEach(button => {
  button.addEventListener('click', () => {
    let arrayEntry = insertedValues;
    if (button.innerText == 'Entrada') {
      arrayEntry = insertedValues.filter(element => element.categoryID == 0);
    } else if (button.innerText == 'Saída') {
      arrayEntry = insertedValues.filter(element => element.categoryID == 1);
    }

    let total1 = sum(arrayEntry.map(element => element.value));

    let valueSum = document.querySelector('.spaceParagRight');
    valueSum.innerHTML = total1;

    console.log(total1);
    renderValue(arrayEntry);
  });
});


//filter(insertedValues)








