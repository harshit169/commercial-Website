import React, { useEffect, useRef, useState } from 'react'
let flag = 0 ,WS
function Slider() {
    const [num, setnum] = useState(0)
    const SLImg = [
        {
            id: 1,
            img: `${require('../Components/SliderImg/S-01.png')}`,
            img2: `${require('../Components/SliderImg/S-001.png')}`,
        },
        {
            id: 2,
            img: `${require('../Components/SliderImg/S-02.png')}`,
            img2: `${require('../Components/SliderImg/S-002.png')}`,
        },
        {
            id: 3,
            img: `${require('../Components/SliderImg/S-03.png')}`,
            img2: `${require('../Components/SliderImg/S-003.png')}`,
        },
        {
            id: 4,
            img: `${require('../Components/SliderImg/S-04.png')}`,
            img2: `${require('../Components/SliderImg/S-004.png')}`,
        },
        {
            id: 5,
            img: `${require('../Components/SliderImg/S-05.png')}`,
            img2: `${require('../Components/SliderImg/S-005.png')}`,
        },
    ]

    const Length = SLImg.length
    const RightMove = () => {
        flag = 0
        if (num < Length - 1) setnum(num + 1)
        if (num === Length - 1) setnum(0)
        // console.log(num)
    }
    const LeftMove = () => {
        flag = 1
        if (num > -1) setnum(num - 1)
        if (num === 0) setnum(Length - 1)
        // console.log(num)
    }
    const timeoutRef = useRef(null)
    function resetTimeout() {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current)
        }
    }
    const Wsize=()=>{
       WS=document.body.offsetWidth
    }
    Wsize()
    window.addEventListener('resize',Wsize)
    window.addEventListener('load',Wsize)
    useEffect(() => {
        window.addEventListener('resize',Wsize)
        window.addEventListener('load',Wsize)
        resetTimeout()
        flag = 0
        timeoutRef.current = setInterval(() => {
            if (num < Length - 1) setnum(num + 1)
            if (num === Length - 1) setnum(0)
        }, 2500)
        return () => {
            resetTimeout()
            
            
        }
    },[num])
    return (
        <div className='Main' >
            {
                SLImg.map((item, id) => {
                    return (
                        <div key={id} className={(flag === 0) ? (id === num ? 'Slider-Right' : 'Slider') : (id === num ? 'Slider-Left' : 'Slider')}
                            style={
                                (WS>=1120)?{
                                    backgroundImage: `url(${item.img})`
                                }:{
                                    backgroundImage: `url(${item.img2})`
                                }
                            }
                        >
                        </div>
                    )
                })
            }
            <div className='Left' onClick={LeftMove}>
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className='Right' onClick={RightMove}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    )
}

export default Slider