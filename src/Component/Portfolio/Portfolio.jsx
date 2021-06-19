import './Portfolio.scss'
import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';

export default function Portfolio() {

    const [selected, setSelected]  = useState("feature")

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
        {
            id: "featured",
            title: "Featured",
        },
        
    ];

    return (
        <div className = "portfolio" id = "portfolio" >
            <h1>Portfolio</h1>
            <ul>
               {list.map((item) => (
                   <PortfolioList title = {item.title} active = 
                   {selected === item.id} setSelected = {setSelected}/>
               ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img className = "photo" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/10/banking-app-1.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
            
        </div>
    )
}
