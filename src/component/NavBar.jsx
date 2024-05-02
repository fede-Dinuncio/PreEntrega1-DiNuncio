import CartWidget from "./CartWidget";
import ListComponent from "./ListComponent";
import "./NavBar.css"


export default function NavBar () {
    return (<>
        <header className="allNav">
            <img className="logo" src="src/imgs/770889-800-800.webp" alt="Logo" />
            <nav className="nav">
                <ListComponent nombre="Inicio"/>
                <ListComponent nombre="Indumentaria de Juego"/>
                <ListComponent nombre="Indumentaria de Entrenamiento"/>
            </nav>
            <CartWidget/>
        </header>
    </>);
}