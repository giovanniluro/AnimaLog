import React, { useState, useEffect } from 'react';
import { Square, SquareBox } from './style';

interface SquareBackgroundProps {
  quantity: number;
}

interface SquareProps {
  size: number;
  left: number;
  duration: number;
}

const SquareBackground: React.FC<SquareBackgroundProps> = ({ quantity }) => {
  const [squares, setSquares] = useState<SquareProps[]>([]);

  useEffect(() => {
    let newSquares: SquareProps[] = [];
    for(var i = 0; i < quantity; i++) {
      newSquares.push({
        size: Math.ceil(Math.random() * (180-50) + 50),
        left: Math.ceil(Math.random() * (100-1) + 1),
        duration: Math.random() * (30-1) + 1
      })
    }
    setSquares(newSquares);
  }, [quantity]);

  return(
    <SquareBox>
      <ul>
        {squares.map(square => {
          return (
            <Square size={square.size} left={square.left} duration={square.duration} />
          )
        })}
      </ul>
    </SquareBox>
  );
}

export default SquareBackground;
