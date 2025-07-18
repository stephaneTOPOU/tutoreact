import { useEffect, useState } from "react";
import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";




function App () {
    const [showInput, setShowInput] = useState(false);
    return <div className="container my-3 stack">
        <Checkbox
            checked={showInput}
            onChange={setShowInput}
            id="titleshow"
            label="Afficher le champs titre"
        />
        {showInput && <EditTitle />}
        <div style={{ height: "300vh" }}></div>
    </div>
}




function EditTitle () {
        const [title, setTitle] = useState("")
        const [firstname, setFirstname] = useState("")
        const [y, setY] = useState(0)

        useEffect(() => {
            const originalTitle = document.title
            return () => {
                document.title = originalTitle
            }
        }, [])

        useEffect(() => {
            document.title = title //? `${title} - Mon Application` : "Mon Application";
        }, [title])

        useEffect(() => {
            const handler = () => {
                console.log("Scroll");
                setY(window.scrollY)
            }
            window.addEventListener('scroll', handler)
            return () => {
                window.removeEventListener('scroll', handler)
            }
        }, [])

        return <div className="vstack gap-2">
            <div> Scroll : {y} </div>
            <Input
                placeholder="Modifier le titre"
                value={title}
                onChange={setTitle}
            />
            <Input 
                placeholder="Prénom" 
                value={firstname} 
                onChange={setFirstname} 
            />
        </div>
    }


export default App;
