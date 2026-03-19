import Header from "../components/header/Header.jsx";
import ChangeName from "../components/contactMethods/ChangeName.jsx";
import {Button} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";

export default function Functions() {
    return (
        <>
            <Header />
            <ChangeName />
        </>
    )
}