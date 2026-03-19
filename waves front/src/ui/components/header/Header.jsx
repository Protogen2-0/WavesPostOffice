import {Link} from "react-router";
import {useContext} from "react";
import {Context} from "../../../core/context/Context.jsx";

export function Header() {
    const {address, password, id, port} = useContext(Context);

    return(
        <div className="navbar" style={{background: "#a577ee", color: "white"}}>
            <h2> Waves PostOffice </h2>
            <Link to="/" className="btn">person</Link>
            {!address && !password && !id && !port ?
                    <></>
                :
                <>
                    <Link to="/blockchainState" className="btn">blockchain state</Link>
                    <Link to="/function" className="btn">functions</Link>
                </>
            }
        </div>
    )
}

export default Header;