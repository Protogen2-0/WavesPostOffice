import {useContext, useEffect} from "react";
import {Context} from "../../core/context/Context.jsx";
import {Table} from "react-bootstrap";
import Header from "../components/Header.jsx";
import Authorization from "./Authorization.jsx";

export default function BlockchainState() {
    const {id, state, setState} = useContext(Context)

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
    },[])

    return (
        <>
            {state.length > 0 ?
            <>
                <Header/>
                <Table className="container">
                    <thead>
                    <tr>
                        <th> key </th>
                        <th> value </th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.map((item, index) => (
                            <tr key={index}>
                                <td> {item.key}</td>
                                <td>
                                    <pre> {item.value.replace(/,/g, "\n").replace(/[{}"]/g, "" )} </pre>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </Table>
            </>
            :
            <Authorization/>
            }
        </>
    )
}