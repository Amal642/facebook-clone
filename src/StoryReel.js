import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
      image="https://images.unsplash.com/photo-1583121136709-60d71d61894f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWRpdGluZyUyMGJhY2tncm91bmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
      profileSrc="https://forums-images.oneplus.net/attachments/854/854419-5f61a96f5280544c9b65803f8299802e.png"
      title="Peter" />
      <Story
      image="https://i.pinimg.com/564x/f0/03/dc/f003dc5df7314ad869e7991c50cb3ab6.jpg"
      profileSrc="https://www.pikpng.com/pngl/m/491-4913670_bitmojis-boys-clipart.png"
      title="John" />
      <Story
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjt4Gu1MiHwqiAu-ec_jNL3wdNBB9RuDGbQ&usqp=CAU"
      profileSrc="https://i.pinimg.com/originals/6c/3a/19/6c3a191d302fcfc2ff7320fdd54ca664.png"
      title="George" />
      <Story
      image="https://hdpik.com/wp-content/uploads/2019/08/69462124_165004347978850_2271273520890921534_n-01.jpeg"
      profileSrc="https://img.pngio.com/my-images-for-k-dub-sap-business-exchange-bitmoji-png-398_398.jpg"
      title="Bruce" />
      <Story
      image="https://1.bp.blogspot.com/-RZP6JMnbtq4/X-WowNknNEI/AAAAAAAABhQ/fp4s_NqBMps4GwuQW_SQempZbxncl9AyACLcBGAsYHQ/s1631/sketch1608870543717.webp"
      profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuh2J8ev2Xx9wwk3-48YurTHrRPN893mxOqQ&usqp=CAU"
      title="jeffry" />
    </div>
  )
}

export default StoryReel
