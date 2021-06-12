import './Portfolio.scss'

export default function Portfolio() {
    return (
        <div className = "portfolio" id = "portfolio" >
            <h1>Portfolio</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
