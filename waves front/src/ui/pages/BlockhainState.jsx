import {useContext, useEffect, useState} from "react";
import {Context} from "../../core/context/Context.jsx";
import { Table} from "react-bootstrap";
import "../../index.css"
import Header from "../components/header/Header.jsx";

export default function BlockhainState() {
    const {id} = useContext(Context)

    const [state, setState] = useState([])
    let start = false;

    useEffect(() => {
        if(!start){
            start = true;
            (async () => {
                await fetch(`http://localhost:6882/contracts/${id}`)
                    .then(async res => await res.json())
                    .then(data => setState(data))
            })()
        }
    },[id])

    return (
        <div >
            <Header/>
            <Table className="container">
                <thead>
                <tr>
                    <th> key </th>
                    <th> value </th>
                </tr>
                </thead>
                <tbody>
                {state ?
                    state.map((item, index) => (
                        <tr key={index}>
                            <td> {item.key}</td>
                            <td>
                                <pre> {item.value.replace(/,/g, "\n").replace(/[{}"]/g, "" )} </pre>
                            </td>
                        </tr>
                    ))
                    :null}
                </tbody>
            </Table>
        </div>
    )
}