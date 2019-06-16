import React from 'react';

export default function Popover() {
  return (
    <div className="popover">
      <div className="background" />
      <div className="reactions">
        <img
          src={`${process.env.PUBLIC_URL}/emoticons/laughing.png`}
          alt="teste"
        />
        <img
          src={`${process.env.PUBLIC_URL}/emoticons/in-love.png`}
          alt="teste"
        />
        <img
          src={`${process.env.PUBLIC_URL}/emoticons/crying.png`}
          alt="teste"
        />
        <img src={`${process.env.PUBLIC_URL}/emoticons/rich.png`} alt="teste" />
        <img
          src={`${process.env.PUBLIC_URL}/emoticons/angry.png`}
          alt="teste"
        />
      </div>
    </div>
  );
}
