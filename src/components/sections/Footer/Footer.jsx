import { Link } from 'react-scroll';
import './Footer.css';
import logo from '../../../assets/logo.png';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <img src={logo} alt="CliniCare Odontologia" className="footer-logo" />
                    <p className="footer-description">
                        Odontologia moderna e especializada para toda a família. Cuidamos de você com tecnologia e carinho.
                    </p>
                </div>

                <div className="footer-column">
                    <h4>Navegação</h4>
                    <ul>
                        <li><Link to="hero" spy={true} smooth={true} offset={-90} duration={500} style={{cursor: 'pointer'}}>Início</Link></li>
                        <li><Link to="servicos" spy={true} smooth={true} offset={-80} duration={500} style={{cursor: 'pointer'}}>Serviços</Link></li>
                        <li><Link to="especialistas" spy={true} smooth={true} offset={-80} duration={500} style={{cursor: 'pointer'}}>Nossa Equipe</Link></li>
                        <li><Link to="contato" spy={true} smooth={true} offset={-80} duration={500} style={{cursor: 'pointer'}}>Contato</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="https://wa.me/551935247867" target="_blank" rel="noopener noreferrer">WhatsApp: (19) 3524-7867</a></li>
                        <li><a href="tel:+551935247867">Telefone: (19) 3524-7867</a></li>
                        <li><a href="https://google.com/maps?q=Av.+Treze%2C+542%2C+Saude%2C+Rio+Claro+-+SP" target="_blank" rel="noopener noreferrer">Av. Treze, 542 - Saúde, Rio Claro - SP</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-info">
                <p>&copy; {new Date().getFullYear()} CliniCare Odontologia. Todos os direitos reservados.</p>
                <p>Responsável Técnico: Dra. Bruna Giacomini Cocco - CRO/SP: 130.170</p>
            </div>
        </footer>
    );
} export default Footer;