
import React from 'react';


const CTA = () => {
  return (
    <div className="cta">
      <a
        // href="https://drive.google.com/file/d/1JfFnfYRlAGfjvrQYTQ6a1l2uVZHBltP_/view?usp=sharing"
        href="https://drive.google.com/uc?export=download&id=1JfFnfYRlAGfjvrQYTQ6a1l2uVZHBltP_"
        target={"_blank"}
        className="btn"
      >
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
}

export default CTA