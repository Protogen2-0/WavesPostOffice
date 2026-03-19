import {createContext, useState} from "react";

const Context = createContext({});
const ContextProvider = ({ children }) => {
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [port, setPort] = useState("");
    const [id, setId] = useState("");

    const values = {
        address,
        password,
        id,
        port,
        setAddress,
        setPassword,
        setId,
        setPort
    }

    return <Context.Provider value={values}>{children}</Context.Provider>;
}
export { ContextProvider, Context };