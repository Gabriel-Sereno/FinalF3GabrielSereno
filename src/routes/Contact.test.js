import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Contact } from './Contact'

test('renders learn react link', () => {
    
    //mockeo de datos
    

    //ejecutar la funcion que queremos testear
    render(<Contact />)

    //screen.debug()
    const unParrafo = screen.getByText("Contacto")

    //chequear que el resultado sea el esperado
    expect(unParrafo).toBeTruthy()
})




