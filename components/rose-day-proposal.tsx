"use client";

import React, { useState, useEffect } from "react";

const loveReasons = [
  "You were there when noone, not even my family was there for me🥹",
  "You treated me like you own family. Because of you i got to know what the love of a family looks like. Because of you i got a sister who loves me like her own brother🥺",
  "You never judged me because of my appearance or my silly talks😅",
  "You gave me you own time to talk with me when i craved to talk, even you were busy, tired.💖",
  "You always cared me, supported me, and loved me even when we had fights. You choosed me rather than your ego🥺",
  "You choose to be loyal even when you had so many better options around you😗",
  "You do so many efforts to make me happy. You fulfilled my wishes just to bring a smile on my face.☺️",
];

const roseRows = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6],
];

export default function RoseDayProposal() {
  const [step, setStep] = useState(0);
  const [clickedRoses, setClickedRoses] = useState(Array(7).fill(false));
  const [activeRose, setActiveRose] = useState<number | null>(null);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleRoseClick = (index: number) => {
    const updated = [...clickedRoses];
    updated[index] = true;
    setClickedRoses(updated);
    setActiveRose(index);
  };

  const closePopup = () => {
    setActiveRose(null);
    if (clickedRoses.every(Boolean)) {
      setTimeout(() => setStep(3), 600);
    }
  };

  return (
    <div className="rose-container">
      <HeartBackground />

      {step === 1 && (
        <div className="intro">
          <img src="/cat.gif" alt="Cute Cat" className="cat intro-anim intro-anim-1" />
          <button onClick={() => setStep(2)} type="button" className="intro-anim intro-anim-2">
            Ready to enter my garden of love?
          </button>
          <p className="signature intro-anim intro-anim-3">{"— By your watermelon \ud83c\udf49"}</p>
        </div>
      )}

      {step === 2 && (
        <div className="garden">
          <h2>{"Tap all roses \ud83c\udf39"}</h2>
          <div className="roses-grid">
            {roseRows.map((row, rowIdx) => (
              <div key={rowIdx} className="rose-row">
                {row.map((roseIdx) => (
                  <button
                    key={roseIdx}
                    type="button"
                    className={`rose ${clickedRoses[roseIdx] ? "clicked" : ""}`}
                    onClick={() =>
                      !clickedRoses[roseIdx] && handleRoseClick(roseIdx)
                    }
                    aria-label={`Rose ${roseIdx + 1}${clickedRoses[roseIdx] ? " (already clicked)" : ""}`}
                  >
                    <img
                      src="/rose.webp"
                      alt={`Rose ${roseIdx + 1}`}
                      className="rose-img"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>

          {activeRose !== null && (
            <div className="popup-overlay" onClick={closePopup}>
              <div
                className="popup"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>Why I love you?</h3>
                <p>{loveReasons[activeRose]}</p>
                <button type="button" onClick={closePopup}>
                  {"Close \u2764"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="final">
          <h1>{"\ud83c\udf39 Happy Rose Day \ud83c\udf39"}</h1>
          <p>I know i can't give you a Rose cause of our distance so, I did a small thing to make you happy. 
Here is a small pickup line for you.
"Roses are red, violet's are blue
People call me crazy, but the truth is I am in love with you."</p>
<div id="last-text">
<p>I love you alot Chutki💖</p>
</div>
        </div>
      )}

      <style>{css}</style>
    </div>
  );
}

type HeartStyle = {
  left: string;
  animationDelay: string;
  fontSize: string;
};



export function HeartBackground() {
  const [hearts, setHearts] = useState<HeartStyle[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      fontSize: `${Math.random() * 20 + 12}px`,
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <div className="heart-bg">
      {hearts.map((style, i) => (
        <span key={i} className="heart" style={style}>
          ❤
        </span>
      ))}
    </div>
  );
}

const css = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.rose-container {
  min-height: 100vh;
  background: radial-gradient(circle at top, #1a001a, #000);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.heart-bg {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.heart {
  position: absolute;
  animation: float 6s infinite ease-in;
  color: crimson;
  font-size: 20px;
}

@keyframes float {
  from { transform: translateY(100vh) scale(0.5); opacity: 0; }
  to { transform: translateY(-10vh) scale(1.2); opacity: 1; }
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.intro button {
  margin-top: 20px;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.intro button:hover {
  transform: scale(1.05);
}

.signature {
  margin-top: 10px;
  opacity: 0.8;
}

.intro-anim {
  opacity: 0;
  transform: scale(0);
  animation: growIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.intro-anim-1 {
  animation-delay: 0.2s;
}

.intro-anim-2 {
  animation-delay: 0.9s;
}

.intro-anim-3 {
  animation-delay: 1.6s;
}

@keyframes growIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  60% {
    opacity: 1;
    transform: scale(1.08);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.cat {
  width: 220px;
  border-radius: 16px;
}

.garden {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
}

.garden h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.roses-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
}

.rose-row {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.rose {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(0 0 8px rgba(255, 80, 100, 0.5));
}

.rose-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  pointer-events: none;
  border-radius: 12px;
}

.rose:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 16px rgba(255, 80, 100, 0.8));
}

.rose:focus-visible {
  outline: 2px solid #ff416c;
  outline-offset: 4px;
  border-radius: 8px;
}

.rose.clicked {
  opacity: 0.3;
  pointer-events: none;
  filter: grayscale(0.6) drop-shadow(0 0 4px rgba(255, 80, 100, 0.2));
}

.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: fadeIn 0.25s ease;
}

.popup {
  background: linear-gradient(145deg, #2a0015, #1a0020);
  border: 1px solid rgba(255, 80, 100, 0.3);
  border-radius: 20px;
  padding: 32px 36px;
  max-width: 360px;
  width: 90%;
  text-align: center;
  animation: popIn 0.3s ease;
  box-shadow: 0 0 40px rgba(255, 65, 108, 0.25);
}

.popup h3 {
  font-size: 1.3rem;
  color: #ff6b81;
  margin-bottom: 12px;
  font-weight: 600;
}

.popup p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
}

.popup button {
  padding: 10px 24px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-family: inherit;
}

.popup button:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.final {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.final h1 {
  font-size: 2rem;
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.final p {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0px 35px 0px 35px;
}
  #last-text {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0px 35px 0px 35px;
  color: #ffafcc;
  }
`;
