import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Pokédex</h1>
            <ul>
                <li>
                   <a href="/">Liste</a>
                </li>
                <li>
                   <a href="/types">Types</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;