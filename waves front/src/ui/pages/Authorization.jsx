import {useContext} from "react";
import {Context} from "../../core/context/Context.jsx";
import {Form} from "react-router";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Header} from "../components/header/Header.jsx";
import UserState from "../components/UserState.jsx";

function Authorization(){
    const {setAddress, setPassword, setPort, setId, address, password, id, port} = useContext(Context);

    function authorization (e, Address, Password, Port, Id){
        e.preventDefault();
        if(
            Address &&
            Password &&
            Id &&
            Port

        ) {
            setId(Id);
            setPassword(Password);
            setAddress(Address);
            setPort(Port);
        }
    }

    return(
        <>
            <Header/>
            {address && password && id && port ?
                <UserState/>
            :
                <>
                    <Form onSubmit={(e)=>authorization(e, e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value,)} className="container">
                        <h2> авторизация </h2>
                        <FormGroup>
                            <FormLabel column={1}> адрес </FormLabel>
                            <FormControl placeholder="3Nn2iVjVN3uDmpvHPVvC3nBCpEPXkMsXFK6"/>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel column={1}> пароль </FormLabel>
                            <FormControl placeholder="sadgsrtaergtdh"/>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel column={1}> порт ноды </FormLabel>
                            <FormControl placeholder="6882" type={"number"} min={0}/>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel column={1}> айди контракта </FormLabel>
                            <FormControl placeholder="5TX6RWzsJkdMp4rmVodahCKszrQHXG7JdJWW54aiRhN7"/>
                        </FormGroup>

                        <Button type="submit" className="container"> авторизоваться </Button>
                    </Form>
                </>
            }
        </>
    )
}

export default Authorization;