'use client'
import React, { useEffect, useRef } from "react"

function updateBokehPaths(bokehRefs) {
    const dirArr = [-1, 1]
    const bokehColors = ["#ffffff", "#e93e68", "#FFC300"]
    for (let i = 0; i < bokehRefs.current.length; i++) {
      let diam = Math.floor(Math.random() * (200 - 15) + 15)
      let yOffset = Math.round(Math.random() * 1600)
      let xOffset = Math.round(Math.random() * 3000)
      let orbitDiam = Math.round(Math.random() * (500 - 50) + 50)
      let dir = dirArr[Math.floor(Math.random() * dirArr.length)]
      let col = bokehColors[Math.floor(Math.random() * bokehColors.length)]

      bokehRefs.current[i].style.top = yOffset + "px"
      bokehRefs.current[i].style.left = xOffset + "px"
      bokehRefs.current[i].style.height = diam + "px"
      bokehRefs.current[i].style.width = diam + "px"
      bokehRefs.current[i].style.boxShadow = `inset 0px 0px 60px 80px ${col}`
      bokehRefs.current[i].animate(
        [
          { transform: `rotate(0deg) translateX(${orbitDiam}px)` },
          {
            transform: `rotate(${dir * 360}deg) translateX(${orbitDiam}px)`,
          },
        ],
        {
          duration: Math.floor(Math.random() * (30000 - 20000) + 20000),
          iterations: Infinity,
        }
      )
    }
  };


const Bokeh = () => {
  /* Get bokeh elements*/
    const bokehRefs = useRef([])

  useEffect(() => {
      updateBokehPaths(bokehRefs);
  }, []);

  return (
    <div className="absolute h-screen w-screen">
      {[...Array(50)].map((value, index) => (
        <div
          key={index}
          className="rounded-[50%] opacity-10 absolute z-5 blur-xs t-[50%] l-[50%]"
          ref={element => {
            bokehRefs.current[index] = element
          }}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export default Bokeh
