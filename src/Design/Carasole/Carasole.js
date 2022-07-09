import React from 'react'
import img1 from './c1.jpg'
import img2 from './c2.jpg'

const images =[img1,img2];

export default function Carasole() {
  const [img, setImg] = React.useState(0);
  setTimeout(() => {
    setImg(img + 1);
  }, 3000);
  const y=img%2;
  return (
    <div>
      <img src={images[y]} style={{width:"100%"}}/>
    </div>
  )
}
