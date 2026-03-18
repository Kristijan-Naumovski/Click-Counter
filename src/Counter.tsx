import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleIncrease = () => setValue(prev => prev + 1);
  const handleDecrease = () => setValue(prev => prev - 1);
  const handleReset = () => setValue(0);

  return (
    <main className="container">
      <section className="counter-card">
        <header className="card-header">
          <h1>Counter</h1>
          <p>Simple and clean counter app</p>
        </header>

        <div className="display-wrapper">
          <input type="text" value={value} disabled />
        </div>

        <div className="button-group">
          <button className="btn increase" onClick={handleIncrease}>
            Increase
          </button>
          <button className="btn decrease" onClick={handleDecrease}>
            Decrease
          </button>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Counter;