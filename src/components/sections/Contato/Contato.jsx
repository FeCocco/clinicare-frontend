import './Contato.css';

function Contato() {
    return (
        <section id="contato">
            <h2>Entre em Contato</h2>
            <p>Estamos prontos para atender você. Agende sua avaliação hoje mesmo!</p>
            <div className="contato_wrap">
                <div>
                    <span>WhatsApp: </span>
                    <a href="https://wa.me/551935247867" target="_blank" rel="noopener noreferrer">(19) 3524-7867</a>
                </div>
                <div>
                    <span>Telefones: </span>
                    <a href="tel:+551935247867">(19) 3524-7867</a> / <a href="tel:+551935342984">(19) 3534-2984</a>
                </div>
                <div>
                    <span>Endereço: </span>
                    <a href="https://google.com/maps?q=Av.+Treze%2C+542%2C+Saude%2C+Rio+Claro+-+SP" target="_blank" rel="noopener noreferrer"> Av. Treze, 542 - Saúde, Rio Claro - SP</a>
                </div>
            </div>
            <div className="map_wrap">
                <iframe
                    title="Localização da CliniCare no Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0711925345763!2d-47.5649479247738!3d-22.313174179674844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7e0975e53e6b7%3A0x86132b0057199464!2sAv.%2013%2C%20542%20-%20Sa%C3%BAde%2C%20Rio%20Claro%20-%20SP%2C%2013500-420!5e0!3m2!1spt-BR!2sbr!4v1723653457620!5m2!1spt-BR!2sbr"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </section>
    )
}export default Contato;