import React, {useState} from 'react'
import {useEffect} from 'react'

export default function Hero() {
  const images = [
    {
      id: 1,
      link: 'https://media.istockphoto.com/id/916811784/photo/african-american-woman-with-colorful-clothes-at-market.jpg?s=612x612&w=0&k=20&c=T6UtE_TvPvmq38A5SmW_T5zk6jrG-sDUo693d6rOgLY='
    },
    {
      id: 2,
      link: 'https://media.istockphoto.com/id/1038331380/photo/vases-and-craft-objects-on-a-market-in-nairobi-kenya.jpg?s=612x612&w=0&k=20&c=ukYGZnK-q4_qk3m0khRR4nNOY5QTnCSOX1PpCMX2X1c='
    },
    {
      id: 3,
      link: 'https://media.istockphoto.com/id/1282108735/photo/east-nairobi-bus-terminal-and-market-kenya-editorial.jpg?s=612x612&w=0&k=20&c=iE5luWA6Ig6-N5q8f6cMftIJGGkn90VCrxw68peUV50='
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='bg-red-400 h-screen w-full '>

         <img className='w-full h-full bg-cover object-cover z-40 ' src={`${images[currentIndex].link}`} alt="hero_img" />
      
    </div>
  )
}
