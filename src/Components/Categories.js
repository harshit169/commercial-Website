import React, { useEffect } from 'react'

function Categories() {
    const items = [
        {
            img: `${require('../Components/CategoryImg/I-01.png')}`,
            name: 'Grocery',
        },
        {
            img: `${require('../Components/CategoryImg/I-02.png')}`,
            name: 'Mobile',
        },
        {
            img: `${require('../Components/CategoryImg/I-03.png')}`,
            name: 'Fashion',
        },
        {
            img: `${require('../Components/CategoryImg/I-04.png')}`,
            name: 'Electronics',
        },
        {
            img: `${require('../Components/CategoryImg/I-05.png')}`,
            name: 'Furniture',
        },
        {
            img: `${require('../Components/CategoryImg/I-06.png')}`,
            name: 'Appliances',
        },
        {
            img: `${require('../Components/CategoryImg/I-07.png')}`,
            name: 'Travel',
        },
        {
            img: `${require('../Components/CategoryImg/I-08.png')}`,
            name: 'Offer',
        },
        {
            img: `${require('../Components/CategoryImg/I-09.png')}`,
            name: 'Beauty',
        },
        {
            img: `${require('../Components/CategoryImg/I-10.png')}`,
            name: 'Toys',
        },

    ]

    const Fun = () => {
        let b = document.body.offsetWidth
        let c = document.querySelectorAll('.card')
        let d = b - (b % 100)
        let p, ex, wd
        if (d >= 1100) {
            p = d / 100;
            ex = (d - 1000) / 10;
            wd = 100 + ((b % 100) / p) + ex
        }
        else {
            p = d / 100;
            wd = 100 + ((b % 100) / p)
        }
        c = Array.from(c)
        c.map(item => {
            return (
                item.style.minWidth = `${wd}px`
            )
        })
    }
    window.addEventListener('resize', Fun)
    window.addEventListener('load', Fun)
    useEffect(()=>{
        let a=Fun()
        return()=>{
            clearInterval(a)
        }
    },[])
    return (
        <div className='categories'>
            <div className='cards' id='Cards'>
                {
                    items.map(item => {
                        return (
                            <div className='card' key={item.name}>
                                <img src={item.img} alt='png'></img>
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Categories