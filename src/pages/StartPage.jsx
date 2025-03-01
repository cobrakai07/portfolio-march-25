
import React from 'react'
import MetaBalls from '../animated/MetaBalls'
import FallingText from '../animated/FallingText'

const StartPage = () => {
 
  return (
    <div className="h-screen  flex flex-col p-4 bg-black">
      <FallingText
        text={`Hey There..! Wanna Know Me?`}
        highlightWords={["Hey", "Know", "?", "components", "simplify"]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />

      <MetaBalls
        color="#29d7f2"
        cursorBallColor="#ffffff"
        cursorBallSize={2}
        ballCount={15}
        animationSize={30}
        enableMouseInteraction={true}
        enableTransparency={true}
        hoverSmoothness={0.05}
        clumpFactor={1}
        speed={0.3}
      />
    </div>
  )
}

export default StartPage