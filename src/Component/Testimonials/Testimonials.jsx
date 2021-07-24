import './Testimonials.scss'

export default function Testimonials() {

    const data = [
    {
      id: 1,
      name: "Elon Musk",
      title: "Co-Founder & CEO Tesla, SpaceX",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      icon: "assets/twitter.png",
      desc:
        "Without Akash I don't think Tesla would exist today. Thank you boss for your contribution",
    },
    {
      id: 2,
      name: "Sundar Pichai",
      title: "CEO Google",
      img:
        "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg",
      icon: "assets/youtube.png",
      desc:
        "Akash was my best friend at IIT-K. He is the one who pushed me forward to persue my masters. Now see where I am and he is ",
      featured: true,
    },
    {
      id: 3,
      name: "Jeff Bezos",
      title: "Founder Amazon",
      img:
        "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e",
      icon: "assets/linkedin.png",
      desc:
        "Akash has been my role model since 1998",
    },
  ];

    return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
