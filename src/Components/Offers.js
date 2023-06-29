import React, { useEffect } from 'react'

function Offers() {

    const OfferImg = [
        {
            text: 'Top Selection | JRShop brand ',
            img1: `${require('../Components/OfferImage/OF1.jpg')}`,
            img2: `${require('../Components/OfferImage/OF2.jpg')}`,
            img3: `${require('../Components/OfferImage/OF3.jpg')}`,
            img4: `${require('../Components/OfferImage/OF4.jpg')}`,
        },
        {
            text: 'Top Deals | JRShop Shirt',
            img1: `${require('../Components/OfferImage/OF11.jpg')}`,
            img2: `${require('../Components/OfferImage/OF12.jpg')}`,
            img3: `${require('../Components/OfferImage/OF13.jpg')}`,
            img4: `${require('../Components/OfferImage/OF14.jpg')}`,
        },
        {
            text: 'Top Deals | JRShop Grocery',
            img1: `${require('../Components/OfferImage/OF21.jpg')}`,
            img2: `${require('../Components/OfferImage/OF22.jpeg')}`,
            img3: `${require('../Components/OfferImage/OF23.jpg')}`,
            img4: `${require('../Components/OfferImage/OF24.jpg')}`,
        },
        {
            text: 'Top Deals | JRShop Shoes',
            img1: `${require('../Components/OfferImage/OF31.jpg')}`,
            img2: `${require('../Components/OfferImage/OF32.jpg')}`,
            img3: `${require('../Components/OfferImage/OF33.jpg')}`,
            img4: `${require('../Components/OfferImage/OF34.jpg')}`,
        },
    ]
    const setResponsive = () => {
        let a = document.body.offsetWidth
        let b = document.getElementsByClassName('items')
        let left = a - (a % 350)
        let add = (a % 350)
        let part = left / 350
        let wd
        if(part>4){
            wd = 350 + add / part + (350 + add / part)/4       
        }
        else  wd = 350 + add / part
        // console.log(a)
        // console.log(left)
        // console.log(part)
        // console.log(wd)
        // console.log(b)
        b=Array.from(b)
        b.map(item => {
            return item.style.minWidth = `${wd}px`
        })
    }
    window.addEventListener('resize', setResponsive)
    window.addEventListener('load', setResponsive)
    useEffect(()=>{
        let a= setResponsive()
        return()=>{
            clearInterval(a)
        }
    },[])
    return (
        <div className='Offer'>

            {
                OfferImg.map((item, id) => {
                    return (
                        <div className='items' key={id}>
                            <div className='box' >
                                <div className='Top'>
                                    <p>{item.text}</p>
                                </div>
                                <div className='Bottom'>
                                    <div className='TTop'>
                                        <div className='BoxL'>
                                            <img src={item.img1}></img>
                                        </div>
                                        <div className='BoxR'>
                                            <img src={item.img2}></img>
                                        </div>
                                    </div>
                                    <div className='BBottom'>
                                        <div className='BoxL'>
                                            <img src={item.img3}></img>
                                        </div>
                                        <div className='BoxR'>
                                            <img src={item.img4}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Offers