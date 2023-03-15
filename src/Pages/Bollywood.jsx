import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import Page from '../Components/Page'
import { store } from '../Components/Detail'
import SideBar from '../Components/SideBar';
import Advertisement from '../Components/Advertisement';
// import SideBar from '../Components/SideBar';


const Bollywood = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div className='main-container'>
            <Advertisement />

            {detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                <div className='leftBar'>
                    <Page
                        imgUrl={n.img}
                        title={n.title}
                        description={n.description.slice(0, 300)}

                    />
                </div>

            ))

            }

            {detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                <div className='rightBar'>
                    <SideBar
                        imgUrl={n.img}
                        title={n.title}
                        description={n.description.slice(0, 50)}
                    />
                </div>
            ))
            }
        </div>
    )
}

export default Bollywood