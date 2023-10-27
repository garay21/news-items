import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './_app.css'

const initialItems = [
    {
        Id : crypto.randomUUID(),
        Text: 'Hola Mundo'
    },
    {
        Id : crypto.randomUUID(),
        Text: 'Buenas Noches'
    }
]

function App() {
    const [items , setItems] = useState(initialItems)

    const hangleSubmit = (event) => {
        event.preventDefault()
        
        const { elements } = event.currentTarget
        const input = elements.namedItem('item')
        const isInsput = input instanceof HTMLFormElement
        if(!isInsput && input == null){ return }    
        
        const text = input.value

        const newItem = {
            Id : crypto.randomUUID(),
            Text : text
        }

        setItems((prevItems)=>{
            return [...prevItems,newItem]
        })

        input.value = '' 
    }

    const deleteItem = (itemId) => () => {
        setItems((prevItems)=>{
            return prevItems.filter((item) => item.Id !== itemId)
        })
    }

    return (
    <main>
        <article>
        <h1>Textos Para Guardar</h1>
        <form action="" onSubmit={hangleSubmit}>
            <label htmlFor="">
                Ingrese el Texto : 
                <input name='item' type="text" placeholder='Contenido del Texto'/>
            </label>
            <button type="submit">Guardar</button>
        </form>
        </article>
        <section>
            <h2>Lista de Textos</h2>
            {
                items ? (
                    <ul>
                        {
                            items.map(item =>{
                                return <li key={item.Id}>{item.Text}
                                    <button onClick={deleteItem(item.Id)}> Eliminar </button>
                                </li>                                
                            })
                        }
                    </ul>              
                ):
                (
                    <p>No hay Elementos en la lista !!</p>
                )
            }
        </section>
    </main>
    )
}

export default App
