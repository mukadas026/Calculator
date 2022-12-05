const display = document.querySelector('.calculator__display')
const keys = document.querySelectorAll('.key')

keys.forEach(element => {
    
    element.addEventListener('click', (e) => {
        let value = element.attributes[0].value

        if(value === 'ac') return display.innerHTML = ''
        if(value === 'del') {
            return display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1)
        }
        if(value === '='){
            return display.innerHTML = eval(display.innerHTML)
        }
        return display.innerHTML += value
    })
})