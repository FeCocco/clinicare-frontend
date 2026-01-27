import './Especialistas.css'
import EspecialistasCard from "../../ui/EspecialistasCard/EspecialistasCard.jsx";

import FotoDraVanessa from "../../../assets/DraVanessa.png";

function Especialistas() {
    return (
        <div id="especialistas">
            <h2>Conheça Nossas Especialistas</h2>
            <div className="especialistas_wrap">
                <EspecialistasCard
                    FotoDra=""
                    NomeDra="Dra A"
                    FuncaoDra="Clínica Geral e Estética"
                />
                <EspecialistasCard
                    FotoDra={FotoDraVanessa}
                    NomeDra="Dra Vanessa"
                    FuncaoDra="Ortodontia"
                />
                <EspecialistasCard
                    FotoDra=""
                    NomeDra="Dra C"
                    FuncaoDra="Implantodontia e Prótese"
                />
            </div>
        </div>
    )
}export default Especialistas;