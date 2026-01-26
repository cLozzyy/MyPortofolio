import "./Home.css";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import andrepng from "../assets/andre.png";
import blenderImg from "../assets/blender.png";
import cinema4dImg from "../assets/cinema4d.png";
import ciscoImg from "../assets/cisco.png";
import figmaImg from "../assets/figma.png";
import vscodeImg from "../assets/vscode.png";
import visualstudioImg from "../assets/visualstudio.png";
import androidstudioImg from "../assets/androidstudio.png";
import anacondaImg from "../assets/anaconda.png";
import unityImg from "../assets/unity.png";
import bonavitaImg from "../assets/bonavita.png";
import umnImg from "../assets/umn.png";
import fitnessgym from "../assets/fitnessgym.jpeg";
import fitnesshome from "../assets/fitnesshome.jpeg";
import fitnesshome1 from "../assets/fitnesshome1.jpeg";
import fitnessstore from "../assets/fitnesstore.jpeg";
import midnight1 from "../assets/midnight1.jpeg";
import midnight2 from "../assets/midnight2.jpeg";
import midnight3 from "../assets/midnight3.jpeg";
import midnight4 from "../assets/midnight4.jpeg";
import tabungin1 from "../assets/tabungin1.jpeg";
import tabungin2 from "../assets/tabungin2.jpeg";
import tabungin3 from "../assets/tabungin3.jpeg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import instagramLogo from "../assets/instagram.png";
import verifiedLogo from "../assets/verified.png";

const Home = () => {
  const [tabunginSlide, setTabunginSlide] = useState(0);
  const [myfitnesSlide, setMyfitnessSlide] = useState(0);
  const [gaiaSlide, setGaiaSlide] = useState(0);

  
  const { scrollYProgress } = useScroll();
  
  
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  
  const photoY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  
  const tabunginImages = [
    tabungin1,
    tabungin2,
    tabungin3,
  ];
  
  const myfitnessImages = [
    fitnesshome,
    fitnesshome1,
    fitnessgym,
    fitnessstore,
  ];

  const gaiaImages = [
    midnight1,
    midnight2,
    midnight3,
    midnight4,
  ];
  
  const handleSlide = (direction, slides, currentSlide, setSlide) => {
    if (direction === "next") {
      setSlide((currentSlide + 1) % slides.length);
    } else {
      setSlide((currentSlide - 1 + slides.length) % slides.length);
    }
  };

  
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="home" id="home">
      
      <section className="hero">
        <motion.div 
          className="intro-cards-hero"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div 
            className="intro-card-large"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            
            <motion.div 
              className="intro-text-content"
              variants={fadeInUp}
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nicholas Andre Natalino
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I'm an Informatics student at UMN with a strong background in Networking, from basic knowledge about DHCP, Firewall, DNS, VLAN and configuration using Cisco Packet Tracer. Lately, I've been diving into SQL and Python, learning how to turn messy data into something meaningful.
              </motion.p>
              <motion.div 
                className="intro-skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="skill-tag">Network Engineer Enthusiast</span>
                <span className="skill-tag">Data Enthusiast</span>
              </motion.div>
            </motion.div>

            
            <motion.div 
              className="intro-photo-content"
              style={{ y: photoY }}
            >
              <motion.img 
                src={andrepng} 
                alt="Nicholas Andre" 
                className="intro-photo-image"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      
      <motion.section 
        className="about" 
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>About Me</motion.h2>
          <motion.p variants={fadeInUp}>
            Hi there! I'm Nicholas Andre Natalino, a 6th-semester Informatics student at UMN.
          </motion.p>
          <br />
          <motion.p variants={fadeInUp}>
            I've always loved exploring new things. My tech journey actually started on the creative side, where I spent a lot of time playing around with 3D art in Cinema4D and Blender. Later on, during my vocational high school years, I got curious about how the internet works and dived deep into networking and Cisco Packet Tracer.
          </motion.p>
          <br />
          <motion.p variants={fadeInUp}>
            Fast forward to today, and I've found my sweet spot in the world of IT. I'm currently focusing on programming and design, blending my technical background with my creative roots to build cool and useful digital projects. Welcome to my portfolio, and feel free to look around!
          </motion.p>
          <br />
          <motion.p1 variants={fadeInUp}>Software :</motion.p1>

          <motion.div 
            className="intro-software-skills"
            variants={fadeInUp}
          >
            <div className="software-carousel">
              {[blenderImg, cinema4dImg, ciscoImg, figmaImg, vscodeImg, visualstudioImg, unityImg, androidstudioImg, anacondaImg].map((img, idx) => (
                <motion.div 
                  key={idx}
                  className="software-item"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={img} alt={`Software ${idx}`} className="software-logo" />
                  <span className="software-name">
                    {["Blender3D", "Cinema4D", "Cisco", "Figma", "VS Code", "VS Studio", "Unity", "Android", "Anaconda"][idx]}
                  </span>
                </motion.div>
              ))}
              
              {[blenderImg, cinema4dImg, ciscoImg, figmaImg, vscodeImg, visualstudioImg, unityImg, androidstudioImg, anacondaImg].map((img, idx) => (
                <motion.div 
                  key={`dup-${idx}`}
                  className="software-item"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={img} alt={`Software ${idx}`} className="software-logo" />
                  <span className="software-name">
                    {["Blender3D", "Cinema4D", "Cisco", "Figma", "VS Code", "VS Studio", "Unity", "Android", "Anaconda"][idx]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      
      <motion.section 
        className="education" 
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Education</motion.h2>
          <motion.div 
            className="education-grid"
            variants={staggerContainer}
          >
            <motion.div 
              className="education-item"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img src={bonavitaImg} alt="Bonavita" className="education-logo" />
              <div className="education-content">
                <h3>SMK Bonavita</h3>
                <p>I studied Computer and Network Engineering from 2020 to 2023.</p>
                <br />
                <p>Overall GPA : 3.40</p>
              </div>
            </motion.div>
            <motion.div 
              className="education-item"
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img src={umnImg} alt="UMN" className="education-logo" />
              <div className="education-content">
                <h3>Universitas Multimedia Nusantara</h3>
                <p>An undergraduate Informatics student, currently in my 6th semester.</p>
                <br />
                <p>Current GPA : 3.52</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="certificate-grid"
            variants={fadeInUp}
          >
            <motion.div 
              className="certificate-item"
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="certificate-content">
                <h3>Certifications</h3>
                <p><strong>Introduction to Programming Using Python</strong> - Solelearn (Mar 2025)</p>
                <p><strong>Python Intermediate</strong> - Solelearn (Jun 2025)</p>
                <p><strong>Huawei Talent HCIA-AI V3.5 Course</strong> - Huawei (Artificial Intelligence)</p>
                <p><strong>HCIA-openGauss V1.0 Course</strong> - Huawei (MySQL)</p>
                <p><strong>Cisco Networking Basic</strong> - Cisco Networking Academy (Jul 2025)</p>
                <p><strong>Unity C# Scripting Complete C# For Unity Game Development</strong> - Udemy (Oct 2025)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

     
      <motion.section 
        className="projects-preview" 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Projects</motion.h2>
          <motion.div 
            className="projects-grid"
            variants={staggerContainer}
          >
            {/* Project 1: MyFitness */}
            <motion.div 
              className="project-card"
              variants={scaleIn}
              whileHover={{ y: -15, scale: 1.01 }}
            >
              <div className="project-text-content">
                <h3>MyFitness - Human Computer Interaction Course</h3>
                <p>My team and I built a Smart Fitness & Reward App using Figma to make working out at home more fun and consistent. The app keeps users motivated with a point-reward system and daily streaks, while also offering direct access to Gym Experts for personalized advice. It's a simple, flexible solution for busy people to stay fit and get rewarded by their favorite health brands along the way.</p>
                <br />
                <p><strong>Tech Stack :</strong> Figma</p>
                <p><strong>Link : <a href="https://www.figma.com/proto/Ab3YL5ff0YnviCdkkb2lj4/MyFitness---HCI?node-id=8-158&starting-point-node-id=8%3A158&t=D9BcABn0TJWudDwC-1">Figma Prototype - MyFitness</a></strong></p>
                <p><strong>Team Member :</strong> Leonard Augusto, Marvell Wijaya, Nicholas Andre, Vinson Gautama, Wilsen Susanto.</p>
                <br />
                <p><strong>* Here's a short preview of the app in the Figma prototype.</strong></p>
              </div>
              
              <div className="project-carousel-section">
                <div className="project-carousel-container">
                  <button 
                    className="carousel-button carousel-button-left"
                    onClick={() => handleSlide("prev", myfitnessImages, myfitnesSlide, setMyfitnessSlide)}
                  >
                    ◀
                  </button>
                  <motion.div 
                    className="mobile-phone-mockup"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img 
                      key={myfitnesSlide}
                      src={myfitnessImages[myfitnesSlide]} 
                      alt="MyFitness Screenshot" 
                      className="carousel-image"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <button 
                    className="carousel-button carousel-button-right"
                    onClick={() => handleSlide("next", myfitnessImages, myfitnesSlide, setMyfitnessSlide)}
                  >
                    ▶
                  </button>
                </div>
                <div className="carousel-dots">
                  {myfitnessImages.map((_, idx) => (
                    <span 
                      key={idx}
                      className={`dot ${idx === myfitnesSlide ? "active" : ""}`}
                      onClick={() => setMyfitnessSlide(idx)}
                    ></span>
                  ))}
                </div>
              </div>
            </motion.div>

           
            <motion.div 
            className="project-card"
            variants={scaleIn}
            whileHover={{ y: -15, scale: 1.01 }}
            >
            <div className="project-text-content">
              <h3>Tabungin - Mobile App Programming Course</h3>
              <p>
                For this project, my team and I built an app called <strong>Tabungin</strong> to digitize employee cooperative management. 
                By replacing manual records with intuitive dashboards for members and admins, we’ve made tracking savings and loans more transparent, efficient, and error-free for everyone.
              </p>
              <br />
              <p><strong>Tech Stack :</strong> Android Studio, Kotlin.</p>
              <p><strong>Team Member :</strong> Dave William, Nima Tamren, Nathanael Axl, Nicholas Andre.</p>
              <br />
              <p><strong>* Here's a short preview of the mobile app.</strong></p>
            </div>

            <div className="project-carousel-section">
              <div className="project-carousel-container">
                <button 
                  className="carousel-button carousel-button-left"
                  onClick={() => handleSlide("prev", tabunginImages, tabunginSlide, setTabunginSlide)}
                >
                  ◀
                </button>
                
                <motion.div 
                  className="mobile-phone-mockup"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img 
                    key={tabunginSlide}
                    src={tabunginImages[tabunginSlide]} 
                    alt="Tabungin Screenshot" 
                    className="carousel-image"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <button 
                  className="carousel-button carousel-button-right"
                  onClick={() => handleSlide("next", tabunginImages, tabunginSlide, setTabunginSlide)}
                >
                  ▶
                </button>
              </div>

              <div className="carousel-dots">
                {tabunginImages.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`dot ${idx === tabunginSlide ? "active" : ""}`}
                    onClick={() => setTabunginSlide(idx)}
                  ></span>
                ))}
              </div>
            </div>
          </motion.div>

            
            <motion.div 
              className="project-card project-card-vertical"
              variants={scaleIn}
              whileHover={{ y: -15, scale: 1.01 }}
              style={{ gridTemplateColumns: '1fr', gap: '50px' }}
            >
              <div className="project-text-content" style={{ justifyContent: 'left' }}>
                <h3>Midnight Melody - Game Development Course</h3>
                <p>
                Midnight Melody is a 3D RPG Adventure Story set in a vibrant cyber-city 
                environment. Where players as a hero took an adventure to collect all musical notes, which are the keys to restoring harmony 
                to a world out of balance. The game offers a rich blend of urban exploration, 
                narrative-driven dialogue quests, rhytm-based minigames.
                </p>
                <br />
                <p><strong>Tech Stack:</strong> Unity, C#.</p>
                <p><strong>Link : <a href="https://nicholas-andre.itch.io/midnight-melody">Midnight Melody - GameDev Course</a></strong></p>
                <p><strong>Team Member:</strong> Dave William & Nicholas Andre.</p>
              </div>

              
              <div className="project-carousel-section" style={{ width: '100%' }}>
                <div className="project-carousel-container" style={{ justifyContent: 'center' }}>
                  <button 
                    className="carousel-button"
                    onClick={() => handleSlide("prev", gaiaImages, gaiaSlide, setGaiaSlide)}
                  >
                    ◀
                  </button>
                  
                  <motion.div 
                    className="landscape-photo-container"
                    style={{ maxWidth: '700px', width: '100%' }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img 
                      key={gaiaSlide}
                      src={gaiaImages[gaiaSlide]} 
                      alt="Midnight Game Screenshot" 
                      className="landscape-image"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  <button 
                    className="carousel-button"
                    onClick={() => handleSlide("next", gaiaImages, gaiaSlide, setGaiaSlide)}
                  >
                    ▶
                  </button>
                </div>
                
                <div className="carousel-dots">
                  {gaiaImages.map((_, idx) => (
                    <span 
                      key={idx}
                      className={`dot ${idx === gaiaSlide ? "active" : ""}`}
                      onClick={() => setGaiaSlide(idx)}
                    ></span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      
      <motion.section 
        className="contact-spotify" 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="spotify-bg-overlay"></div>
        
        <div className="spotify-container">
          <div className="artist-badge">
            <img src={verifiedLogo} alt="Verified" className="verified-img" />
            <p>Informatics Student '23 @ Universitas Multimedia Nusantara</p>
          </div>
          
          <motion.h1 className="artist-name" variants={fadeInUp}>
            Nicholas Andre Natalino
          </motion.h1>
          
          <motion.p className="monthly-listeners" variants={fadeInUp}>
          Follow my social media for any updates and feel free to reach out!
          </motion.p>

            
            <div className="social-links">
              
              <motion.a href="https://github.com/cLozzyy" target="_blank" whileHover={{ y: -5 }}>
                <img src={githubLogo} alt="GitHub" className="social-icon-img" />
              </motion.a>

              
              <motion.a href="https://www.linkedin.com/in/nicholasandrenatalino/" target="_blank" whileHover={{ y: -5 }}>
                <img src={linkedinLogo} alt="LinkedIn" className="linkedim-icon-img" />
              </motion.a>

              
              <motion.a href="https://instagram.com/ncholadandre" target="_blank" whileHover={{ y: -5 }}>
                <img src={instagramLogo} alt="Instagram Pribadi" className="social-icon-img" />
              </motion.a>

              
              <motion.a href="https://instagram.com/andre.nich" target="_blank" whileHover={{ y: -5 }}>
                <div className="instagram-art-wrapper">
                  <img src={instagramLogo} alt="Instagram 3D Art" className="social-icon-img" />
                  <span className="art-label">3D Art</span>
                </div>
              </motion.a>
            </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;