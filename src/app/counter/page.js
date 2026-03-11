"use client";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>計數器</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
