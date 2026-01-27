import './Servicos.css'
import ServicoCard from '../../ui/ServicoCard/ServicoCard.jsx'
import ImplantePhoto from '../../../assets/icons/Implante-Dentario.jpg'
import OrtodontiaPhoto from '../../../assets/icons/ortodontia.jpg'
import ClareamentoPhoto from '../../../assets/icons/clareamento.jpg'
import LimpezaPhoto from '../../../assets/icons/limpeza.jpg'
import EndodontiaPhoto from '../../../assets/icons/endodontia.webp'

function Servicos() {
    return (
        <div id="servicos">
            <h2>Nossos Serviços</h2>
            <div className="servicos_wrap">
                <ServicoCard
                    imagem={ImplantePhoto}
                    titulo="Implantes Dentários"
                    descricao="Recupere a função e a estética do seu sorriso com implantes de alta qualidade."
                />
                <ServicoCard
                    imagem={OrtodontiaPhoto}
                    titulo="Ortodontia"
                    descricao="Alinhamento perfeito do sorriso com aparelhos modernos e discretos."
                />
                <ServicoCard
                    imagem={ClareamentoPhoto}
                    titulo="Clareamento Dental"
                    descricao="Conquiste um sorriso mais branco e radiante com nossas técnicas seguras."
                />
                <ServicoCard
                    imagem={LimpezaPhoto}
                    titulo="Limpeza"
                    descricao="A base para uma saúde bucal duradoura, prevenindo problemas futuros."
                />
                <ServicoCard
                    imagem={EndodontiaPhoto}
                    titulo="Endodontia"
                    descricao="A base para uma saúde bucal duradoura, prevenindo problemas futuros."
                />
            </div>
        </div>
    )
}export default Servicos;