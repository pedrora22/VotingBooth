import iveteimg from "./images/ivete.jpg"
import carlinhosimg from "./images/carlinhos.jpg"
import Gilbertoimg from "./images/Gilberto.jpg"
import mariaimg from "./images/maria.jpg"
import Raulimg from "./images/Raul.jpg"


const Screen = (vote) => {

    let ivete = {
        id: 1,
        name: 'Ivete Sangalo',
        number: vote,
        img: iveteimg
    }

    let carlinhos = {
        id: 2,
        name: 'Carlinhos Brown',
        number: vote,
        img: carlinhosimg
    }

    let Gilberto = {
        id: 3,
        name: 'Gilberto Gil',
        number: vote,
        img: Gilbertoimg
    }

    let maria = {
        id: 4,
        name: 'Maria Bethania',
        number: vote,
        img: mariaimg
    }

    let Raul = {
        id: 5,
        name: 'Raul Seixas',
        number: vote,
        img: Raulimg
    }



    let holder = '';

    while(vote < 10) {
        return (
            <div><h2>Eleições 2023.1 - Melhor cantor da Bahia.</h2></div> 
        )
    }

    switch (vote) {
        case vote = 72:
                holder = ivete;
                break;
        case vote = 62: 
                holder = carlinhos;
                break;
        case vote = 42: 
                holder = Gilberto;
                break;
        case vote = 46: 
                holder = maria;
                break;
        case vote = 45:
                holder = Raul;
                break;
        case vote = 'Branco':
                return(
                    <div><h1>voto em Branco.</h1></div>
                )
        case vote = 'Confirma':
                return(
                    <div><h1 id='fim'>FIM</h1></div>
                )
        default:
                return(
                    <div><h1>número inválido!</h1></div>
                )
    }

    return(
        <div>
            <img className="image" src={holder.img}></img>
            <h2>{holder.name}</h2>
            <h3>{holder.number}</h3>
        </div>
    )
}

export default Screen;