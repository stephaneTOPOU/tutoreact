import { Button } from "./components/forms/Button.jsx";
import { useToggle } from "./hooks/useToggle.js";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const boxVariants = {
  visible: { x: 0, opacity: 1, rotate: 0 },
  hidden: { x: 100, opacity: 0, rotate: 45 },
};
function App() {
  const [open, toggle] = useToggle(true);

  return (
    <div className="container my-4 vstack gap-2">
      <div className="vstack gap-2">
        <motion.div
          variants={boxVariants}
          className="box"
          whileHover={{ scale: 1.2 }}
          animate={open ? "visible" : "hidden"}
        >
          1
        </motion.div>
      </div>
      <div>
        <Button onClick={toggle}>Afficher / Masquer</Button>
      </div>
    </div>
  );
}

const Box = forwardRef(({ children }, ref) => {
  return <div className="box" ref={ref}>{children}</div>;
})

const MotionBox = motion(Box)

export default App;
