import React, { useRef, useEffect } from 'react';

function CanvasLine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const x1 = 50;
    const y1 = 50;
    const x2 = 200;
    const y2 = 200;
    
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} width={500} height={500} style={{ border: '1px solid #000' }}></canvas>
  );
}

export default CanvasLine;
// I implemented Canvas in my code but I had some visual problems, so i didnt want to add this to my UI
