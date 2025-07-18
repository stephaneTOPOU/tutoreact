import { useEffect, useState } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const [duration, setDuration] = useState(5);
  const [timer, setTimer] = useState(duration);

  const handleChange = (v) => {
    setDuration(v)
    setTimer(v)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          clearInterval(timer)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [duration])

  return (
    <div className="vstack gap-2">
      <Input placeholder="Timer.... " value={duration} onChange={handleChange} />
      <p> Décompte : {timer} </p>
    </div>
  );
}

export default App;
