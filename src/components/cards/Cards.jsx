import '../../style/cards/cards.scss';
import { images } from '../../beforeAfter';
import * as functions from '../../beforeAfter';


function Card() {
    return (
        <div id='cards'>
            <div className='card'>
                <img className='image1' src={images[0]} alt="Fotos de antes e depois de serviços realizados." />
                <div className='buttons'>
                    <button onClick={functions.before1}>
                        Clique aqui para ver o Antes
                    </button>
                    <button onClick={functions.after1}>
                        Clique aqui para ver o Depois
                    </button>
                </div>
            </div>
            <div className='card'>    
                <img className='image2' src={images[2]} alt="Fotos de antes e depois de serviços realizados." />
                <div className='buttons'>
                    <button onClick={functions.before2}>
                        Clique aqui para ver o Antes
                    </button>
                    <button onClick={functions.after2}>
                        Clique aqui para ver o Depois
                    </button>
                </div>
            </div>
            <div className='card'>
                <img className='image3' src={images[4]} alt="Fotos de antes e depois de serviços realizados." />
                <div className='buttons'>
                    <button onClick={functions.before3}>
                        Clique aqui para ver o Antes
                    </button>
                    <button onClick={functions.after3}>
                        Clique aqui para ver o Depois
                    </button>
                </div>
            </div>
            <div className='card'>    
                <img className='image4' src={images[6]} alt="Fotos de antes e depois de serviços realizados." />
                <div className='buttons'>
                    <button onClick={functions.before4}>
                        Clique aqui para ver o Antes
                    </button>
                    <button onClick={functions.after4}>
                        Clique aqui para ver o Depois
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;