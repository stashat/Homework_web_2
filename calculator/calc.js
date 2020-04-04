const buttons = document.querySelector('.calculator')
const display = document.querySelector('.display')

buttons.addEventListener('click', e => {
 if (e.target.matches('button')) {
  const key = e.target
  const action = key.dataset.action
  const keyContent = key.textContent
  const displayedNum = display.textContent
  const previousKeyType = buttons.dataset.previousKeyType
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('pressed'))


  if (!action) {
    buttons.dataset.previousKey = 'number'
    if (displayedNum === '0' || previousKeyType === 'operator') {
      display.textContent = keyContent
      buttons.removeAttribute('data-previous-key-type')
    } else {
      display.textContent = displayedNum + keyContent
    }
  }
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('pressed')
    buttons.dataset.previousKeyType = 'operator'
    buttons.dataset.firstValue = displayedNum
    buttons.dataset.operator = action
  }
  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
    }
    buttons.dataset.previousKey = 'decimal'
  }
  
  if (action === 'clear') {
    display.textContent = '0'
    buttons.dataset.previousKeyType = 'clear'
  }
  
  if (action === 'calculate') {
    buttons.dataset.previousKeyType = 'calculate'
    const calculate = (n1, operator, n2) => {
      let result = ''
      
      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }
      
      return result
    }
    const firstValue = buttons.dataset.firstValue
    const operator = buttons.dataset.operator
    const secondValue = displayedNum
    display.textContent = calculate(firstValue, operator, secondValue)
    
  }

 }
})