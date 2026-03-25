import {Link} from "react-router";
import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";
import LogoutButton from "./LogoutButton.jsx";

export function Header() {
    const {address, password, id, port} = useContext(Context);

    return(
        <div className="navbar" style={{background: "#a577ee", color: "white"}}>
            <h2> Waves PostOffice </h2>
            {!address && !password && !id && !port ?
                    <></>
                :
                <>
                    <Link to="/" className="btn">person</Link>
                    <Link to="/blockchainState" className="btn">blockchain state</Link>
                    <Link to="/functions" className="btn">functions</Link>
                    <LogoutButton/>
                </>
            }
        </div>
    )
}

export default Header;