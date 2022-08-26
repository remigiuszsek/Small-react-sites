
import './App.css'
import React from 'react'
import Star from './components/Star.js'

function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-12121",
        email: "itsmyrealname@example.com1",
        isFavourite: false
    })

    function toggleFavorite() {
        setContact(prevValue => ({
            ...prevValue,
            isFavourite: !prevValue.isFavourite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/waiter.webp" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavourite} func={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

export default App;


// /**
//      * Challenge: See if you can do it all again by yourself :)
//      */
//  const [thArray, setTh] = React.useState(['Thing 1'])
    
//  function addItem() {
//     // Build from scratch :)
//     setTh(prev => [...prev, `Thing ${thArray.length + 1}`])
// }

// const allTh = thArray.map(th => <p key={th}>{th}</p>)


// return (
//     <div>
//         <button onClick={addItem}>Add Item</button>
//         {allTh}
//     </div>
// )