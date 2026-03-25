import {useContext, useEffect} from "react";
import {Context} from "../../core/context/Context.jsx";
import { Table} from "react-bootstrap";

export default function UserState() {
    const {id, address, state, setState} = useContext(Context)

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
        <div >
            <Table className="container">
                <thead>
                <tr>
                    <th> key </th>
                    <th> value </th>
                </tr>
                </thead>
                <tbody>
                {id ?
                    state
                        .filter((item)=>item.value.includes(address))
                        .map((item, index) => (
                        <tr key={index}>
                            <th> {item.key}</th>
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