import React from 'react'
import Page from '../Components/Page'
import SideBar from '../Components/SideBar';
import { useContext } from 'react';
import { store } from '../Components/Detail';
import Advertisement from '../Components/Advertisement';


const Fitness = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div className='main-container'>

      {detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='leftBar'>
          <Page
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 300)}

          />
        </div>

      ))

      }

      {detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 50)}
          />
        </div>
      ))
      }
      
     
      <Advertisement />
    </div>
  )
}

export default Fitness