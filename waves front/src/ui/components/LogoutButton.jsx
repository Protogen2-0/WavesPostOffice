import {Button} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";

export default function LogoutButton() {
    const {setId, setPort, setAddress, setPassword, setState} = useContext(Context);

    function Logout(){
        setId("")
        setPort("")
        setAddress("")
        setPassword("")
        setState([])
    }

    return(
        <Button onClick={Logout}> log out </Button>
    )
}