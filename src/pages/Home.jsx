import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

export default function Home() {
  const professions = [
    "AI Enthusiast",
    "Machine Learning Engineer",
    "Deep Learning Expert",
    "Computer Vision Researcher",
    "Developer",
  ];

  const quickLinks = [
    {
      img: "/github.png",
      title: "GitHub",
      link: "https://github.com/kunj2803",
    },
    {
      img: "/linkedin.png",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/aaron-rao-b988b1286/",
    },
    {
      img: "/gmail.png",
      title: "Email",
      link: "mailto:raoaaron077@gmail.com",
    },
    {
      img: "/insta.png",
      title: "Instagram",
      link: "https://www.instagram.com/aaron_rao_8/",
    },
  ];

  return (
    <section className="home-section">
      {/* Top Section */}
      <div className="home-top">
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            className="photo-ring"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="photo-frame"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src="/photo.jpg"
              alt="Aaron Rao"
              className="profile-photo"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{" "}
            <motion.span
              className="home-name"
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Aaron Rao
            </motion.span>
          </h1>

          <p className="typing-effect">
            Artificial Intelligence Engineer | Frontend Developer | Machine
            Learning
          </p>

          {/* Profession Tags */}
          <div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                className="profession-tag"
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {role}
              </motion.div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            {[
              { label: "📍 Location", value: "Ghaziabad, Uttar Pradesh, India" },
              { label: "💼 Expertise", value: "AI/ML, Problem Solving" },
              { label: "📧 Contact", value: "raoaaron077@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                className="info-card"
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="quick-link-img"
                whileHover={{
                  filter:
                    "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
