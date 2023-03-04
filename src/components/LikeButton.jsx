import React, {useState} from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [classColor, setClassColor] = useState('purple');
 
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const changeColor = colors[Math.floor(Math.random() * colors.length)];
  
  const handleIncrease = () => {
    setCount(prev => prev + 1)
    setClassColor(changeColor)
  }

  return (
    <section className="section-like-button">
      <button className={classColor} onClick={handleIncrease}> {count} Likes</button>
    </section>
  )
}

export default LikeButton;