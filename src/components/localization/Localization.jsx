import '../../style/localization/localization.scss';

function Localization() {
    return (
        <section id='localization'>
            <h3>Localização</h3>
            <div className='container'>
                <div className='iframeContainer'>
                    <iframe className='iframe'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9330254342876!2d-34.875246600000004!3d-7.133743699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81058a1322d%3A0x3046940ab6d0522f!2sR.%20Prof.%20Renato%20Carneiro%20da%20Cunha%2C%20172%20-%20Jaguaribe%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058015-360!5e0!3m2!1spt-BR!2sbr!4v1663700973019!5m2!1spt-BR!2sbr" width="700px" height="650" loading="lazy" title='Salão Bendita Beleza.'>

                    </iframe>
                </div>
                <div className='localizationData'>
                    <p>Horário de funcionamento: Ter a Sáb, das 9h às 18h.</p>
                    <p>Endereço: Rua Professor Renato Carneiro da Cunha, Jaguaribe, 172.</p>
                    <p>Localizado ao lado do cruzamento com a Rua Primeiro de Maio.</p>
                </div>
            </div>
        </section>
    )
}

export default Localization;