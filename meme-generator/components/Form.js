import React from 'react'

export default function Form() {
    const [meme, imgFun] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get-memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMeme() {
        const random = Math.floor(Math.random() * allMemes.length)
        const totalUrl = allMemes[random].url

        imgFun(prevV => ({
                ...prevV,
                randomImage: totalUrl
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        imgFun(prevV => ({
            ...prevV,
            [name]: value
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <main>
            <div className="form">
                <input 
                    placeholder="Top text" 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Bottom text" 
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMeme}>Get a new meme image 🖼</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className="state--img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

//Your first concept: 

//JSX: 

{/* <div className="form--container">
<form>
    <div>
        <input placeholder="Top text" type="text" className="first--input" />
        <input placeholder="Bottom text" type="text" className="second-input"/>
    </div>
    <button>Get a new meme image 🖼</button>
</form>
</div> */}

//CSS: 


// form {
//     position: absolute;
//     width: 477px;
//     margin-top: 36px;
//   }
  
//   form > div{
//     display: flex;
//     justify-content: center;
//   }
  
//   input {
//     width: 230px;
//     height: 35px;
//     border-radius: 5px;
//     border: 2px solid #ccc;
//   }
  
//   .first--input {
//     margin-right: 8px;
//   }
  
//   .second--input {
//     margin-left: 8px;
//   }
  
//   button {
//     width: 477px;
//     height: 40px;
//     margin-top: 15px;
//     background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
//     border: none;
//     border-radius: 5px;
//     font-family: 'Karla', sans-serif;
//     font-weight: 700;
//     font-size: 16px;
//     letter-spacing: -0.1em;
//     color: #fff;
//   }
  
//   .form--container {
//     display: flex;
//     justify-content: center;
//   }