import React from 'react'
import Page from '../Components/Page'
import SideBar from '../Components/SideBar';
import { useContext } from 'react';
import { store } from '../Components/Detail';
import Advertisement from '../Components/Advertisement';


const Technology = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div className='main-container'>
      <Advertisement />
      {detail.filter((article) => { return article.category === "Technology" }).map((n) => (
        <div className='leftBar'>
          <Page
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 300)}

          />
        </div>

      ))

      }

      {detail.filter((article) => { return article.category === "Technology" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 50)}
          />
        </div>
      ))
      }
      {/* <PageStruct 
            img="https://images.indianexpress.com/2023/01/google-musiclm.jpg"
            title="Google"
            about="Googles MusicLM AI can create music from any genre with just a description.MusicLM can produce 23kHz music that is consistent over several minutes and it can be conditioned on both text and melody."


            img2="https://images.indianexpress.com/2023/01/samsung-galaxy-s22-ultra-featured.jpg"
            title2="Samsung"
            about2="Samsung Galaxy S23 may cost Rs 7,000 more than Galaxy S22.Smartphone prices have been skyrocketing in the last few years. Now, it seems Samsung is the latest to join the league with likely price hikes on its forthcoming Galaxy S23 series."

            img3="https://images.indianexpress.com/2023/01/windows-10-wallpaper.jpg"
            title3="Microsoft"
            about3="Microsoft will stop selling Windows 10 licenses from January 31
            Microsoft says it will stop licensing Windows 10 Home and Pro later this month but will continue supporting the operating system until October 2025."
      /> */}
    </div>
  )
}

export default Technology