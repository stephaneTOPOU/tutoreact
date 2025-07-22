import { createPortal } from "react-dom";

function App() {
  return (
    <div
      style={{
        height: 300,
        overflowY: "scroll",
        background: "#EEE",
        margin: 20,
        position: "relative",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde
        alias minima eligendi id omnis pariatur laudantium harum similique cum.
        Nam quod temporibus recusandae fuga quidem laudantium laborum eius
        earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores unde
        alias minima eligendi id omnis pariatur laudantium harum similique cum.
        Nam quod temporibus recusandae fuga quidem laudantium laborum eius
        earum!
      </p>
      <Modal />
    </div>
  );
}

function Modal() {
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: 10,
        border: "solid 1px grey",
        background: "#FFF",
      }}
    >
      je suis un portail
    </div>,
    document.body
  );
}

export default App;
