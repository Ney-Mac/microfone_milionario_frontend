export function telefoneValidator(telefone) {
    if (!telefone) return "Insira seu número telefonico."
    if (!/^\d+$/.test(telefone)) return "Insira um número válido."

    const phoneArray = telefone.split('');

    const firstElement = phoneArray[0];
    const secondaryElement = phoneArray[1];

    if (firstElement !== '9' || (secondaryElement !== '2' && secondaryElement !== '3' && secondaryElement !== '4')) {
        return "Insira um número válido."
    }

    return ''
}