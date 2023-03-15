import React from 'react'
import Page from '../Components/Page'
import SideBar from '../Components/SideBar';
import { useContext } from 'react';
import { store } from '../Components/Details';
import Advertisement from '../Components/Advertisement';

const Food = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div className='main-container'>

      {detail.filter((article) => { return article.category === "Food" }).map((n) => (
        <div className='leftBar'>
          <Page
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 1000)}

          />
        </div>

      ))

      }

      {detail.filter((article) => { return article.category === "Food" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 1000)}
          />
        </div>
      ))
      }

     
      <Advertisement />
    </div>
  )
}

export default Food