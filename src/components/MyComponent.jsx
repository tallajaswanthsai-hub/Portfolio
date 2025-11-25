import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function MyComponent() {
  const el = useRef(null); // Reference to the span element

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FrontEnd Developer', 'Web Developer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="App font-semibold text-[20px]">
      <span ref={el} />
    </div>
  );
}

export default MyComponent;