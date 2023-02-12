import React from 'react'

export default function Content() {
    return (
        <>
            <div className='content-div'>
                <div className='inputs-div'>
                    <input type="text" placeholder='Up...' />
                    <input type="text" placeholder='Down...' />
                </div>
                <button>Get a new meme image</button>
                <div>
                    Result
                </div>
            </div>
        </>
    )
}
