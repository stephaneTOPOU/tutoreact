import { Button } from "./components/forms/Button.jsx";
import { useToggle } from "./hooks/useToggle.js";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";



const boxVariants = {
  visible: { x: 0, rotate: 0, opacity: 1},
  hidden: { x: 100, rotate: 45, opacity: 0},
};

function App() {
  const [open, toggle] = useToggle(true);
  const items = open ? [1, 2, 3, 4, 5] : [3, 2, 5];

  return (
    <div className="container my-4 vstack gap-2">
      <AnimatePresence mode="popLayout">
        {items.map((item) =>(<MotionBox
        key={item}
        variants={boxVariants}
        animate="visible"
        initial="hidden"
        exit="hidden">{item}</MotionBox>))}
      </AnimatePresence>
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
