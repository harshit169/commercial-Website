import React,{useEffect} from 'react'

function Electronics() {
    const GroItem = [
        {
            Img: `${require('../Components/ElectronicsImg/01.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/02.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/03.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/04.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/05.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/06.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/07.webp')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/08.jpg')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/09.jpg')}`,

        },
        {

            Img: `${require('../Components/ElectronicsImg/10.jpg')}`,

        },

    ]

    const setResponsive = () => {
        let a = document.body.offsetWidth
        let size = 200
        if (a < 907) size = 110
        let b = document.getElementsByClassName('item')
        // a = a - (a % size) * 10
        let left = a - (a % size)
        let add = (a % size)
        let part = left / size
        let exspace = 0
        let wd
        if (part > 10) {
            wd = size + add / part + (size + add / part) / 10
        }
        else if (part != 1) wd = size + add / (part) + (size + add / (part)) / (part - 1) - exspace + exspace / (part - 1)
        else wd = size + add / (part) + exspace / part - 1
        console.log(a)
        console.log(left)
        console.log(part)
        console.log(wd)

        b = Array.from(b)
        b.map(item => {
            return item.style.minWidth = `${wd}px`
        })
    }
    setResponsive()
    window.addEventListener('resize', setResponsive)
    window.addEventListener('load', setResponsive)
    useEffect(() => {
        let a = setResponsive()
        return () => {
            clearInterval(a)
        }
    }, [])
    return (
        <div className='Grocery '>
            <div className='Title  '>
                <h1>Electronics</h1>
            </div>
            <div className='items'>
                {
                    GroItem.map((item, id) => {
                        return (
                            <div className='item' key={id}>
                                <div className='Box Electro'

                                >
                                    <img src={item.Img}></img>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Electronics