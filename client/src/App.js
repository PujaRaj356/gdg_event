import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const API = "https://your-backend-url.onrender.com";

await axios.post(`${API}/register`, { name, email });
    alert("🎉 Registered!");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages([...images, url]);
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
       <h1 className="logo">
  <span style={{color:"#4285F4"}}>    Google    </span>
  <span style={{color:"#EA4335"}}>   Developers    </span>
  <span style={{color:"#FBBC05"}}>   Group    </span>
</h1>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#register">Register</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <h1>🚀 GDG Tech Summit 2026</h1>
        <p>Build. Learn. Connect.</p>
        <p>📍 CIT, Coimbatore  | 📅 April 10, 2026</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About the Event</h2>
        <p>
          Join developers and tech enthusiasts for a day of innovation,
          learning and networking. Explore AI, Cloud and Web technologies.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="grid">

        <div>

          <div className="box">
            <h3>
              <span className="material-icons">groups</span>
              Speakers
            </h3>
            <p>Google Developer Expert - AI</p>
            <p>AWS Cloud Architect</p>
            <p>Senior Full Stack Engineer</p>
          </div>

          <div className="box">
            <h3>
              <span className="material-icons">event</span>
              Schedule
            </h3>
            <p>10 AM - Opening Keynote</p>
            <p>11 AM - AI Session</p>
            <p>1 PM - Lunch</p>
            <p>2 PM - Web Dev</p>
            <p>4 PM - Networking</p>
          </div>

        </div>

        {/* REGISTER */}
        <div id="register" className="register">
          <h3>
            <span className="material-icons">how_to_reg</span>
            Register Now
          </h3>

          <form onSubmit={submit}>
            <input
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Register</button>
          </form>
        </div>

      </section>

      {/* GALLERY */}
      <section id="gallery" className="section">
        <h2>
          <span className="material-icons">photo_library</span>
          Event Gallery
        </h2>

        <input type="file" onChange={handleImage} />

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="img-card" key={i}>
              <img src={img} alt="event" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 GDG Event </p>
      </footer>

    </div>
  );
}

export default App;