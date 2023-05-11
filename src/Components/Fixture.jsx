import { Table } from "react-bootstrap";
import fixtureData from "../js/fixtureData";


function Fixture({ x }) {
    const render = () => {
        const equipos = fixtureData.filter((equipo) => equipo.grupo === x)
        return (
            equipos.map((team) => {
                return (
                    <>
                        <tr>
                            <th>{team.nombre}</th>
                            <th>{team.puntos}</th>
                        </tr>
                    </>
                )
            })
        )
    }
    return (
        <Table striped border="true" hover>
            <thead>
                <tr>
                    <th>{x}</th>
                    <th>PJ</th>
                </tr>
            </thead>
            <tbody>{render()}</tbody>
        </Table>
    )
}

export default Fixture