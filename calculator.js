import prompt from "prompt-sync"
import colors from "colors"

const promptFunc = prompt()

export const calculatorProcess = () =>{
    
    const number = promptFunc(colors.blue('Por favor ingresa un número: '))
    const operation = promptFunc(colors.blue('Qué operación desea realizar? '))
    const number2 = promptFunc(colors.blue('Por favor ingresa un segundo número: '))

    if (!isNaN(parseInt(number)) &&
        !isNaN(parseInt(number2)) &&
        (operation === "+" || operation === "-" || operation === "/" || operation === "*")
    ) {
        console.log(colors.green("El resultado es: "), eval(number+operation+number2))
    } else {
        console.error(colors.red("No es posible realizar esta operación"))
    }

}