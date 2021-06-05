import './Menu.scss';

export default function Menu() {
    return (
        <div className = 'menu'>
            <ul>
                <li>
                    <a href = "#intro"> Home</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href = "#portfolio"> Portfolio</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href = "#works"> Works</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href = "#testimonials"> Testimonials</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href = "#contact"> Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
