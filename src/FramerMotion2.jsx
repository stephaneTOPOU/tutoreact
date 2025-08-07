import { Button } from "./components/forms/Button.jsx";
import { useToggle } from "./hooks/useToggle.js";
import { motion } from "framer-motion";
import { forwardRef } from "react";


function App() {
  const [open, toggle] = useToggle(true);
  const items = open ? [1, 2, 3, 4, 5] : [3, 2, 5, 1, 4];

  return (
    <div className="container my-4 vstack gap-2">
      <motion.div
        className="hstack gap-2"
        animate={open ? "visible" : "hidden"}
        
      >
        {items.map((item) => (
          <MotionBox layout key={item}>
            {item}
          </MotionBox>
        ))}
      </motion.div>
      <div>
        <Button onClick={toggle}>Afficher / Masquer</Button>
      </div>
    </div>
  );
}

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

const MotionBox = motion(Box);

export default App;
