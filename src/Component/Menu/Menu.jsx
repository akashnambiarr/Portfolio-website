import './Menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className = {'menu '+(menuOpen && "active")} >
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
                    <a href = "#testimonial"> Testimonials</a>
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
