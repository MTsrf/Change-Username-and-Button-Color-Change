import React, { useState } from 'react'

const Color = () => {
    const buttons = [
        {
            id: 1,
            color: 'black'
        },
        {
            id: 2,
            color: 'black'
        },
        {
            id: 3,
            color: 'black'
        },
        {
            id: 4,
            color: 'black'
        },
        {
            id: 5,
            color: 'black'
        },
    ]
    const [btn, setBtn] = useState(buttons)

    const handleClick = (id) => {
        let newbtn = btn.map((val) => {
            if (val.id === id) {
                val.color = 'red'
            } else if (val.id < id) {
                val.color = 'green'
            }
            else {
                val.color = 'yellow'
            }
            return val
        })
        setBtn(newbtn)
    }
    return (
        <div>
            {
                btn.map((item, index) => (
                    <button style={{ color: item.color, padding: '10px' }} onClick={() => { handleClick(item.id) }}>Button</button>
                ))
            }
        </div>
    )
}

export default Color
