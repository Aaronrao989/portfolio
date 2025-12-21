import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🐄 Bharat Pashudhan App',
    desc: 'Bharat Pashudhan App is an AI-powered web application that identifies Indian cattle and buffalo breeds from images. Built with Deep Learning (CNN + Transfer Learning)',
    ss: '/bpa.png',
    tech: ['PyTorch', 'Torchvision', 'OpenCV', 'Matplotlib','CNN'],
    live: 'https://indianbreedclassifier.streamlit.app/',
    code: 'https://github.com/Aaronrao989/Cattle-Breed-Classification'
  },
  {
  title: '🧠 Multimodal Analysis for Mental Health Detection',
  desc: 'Mental health challenges are often expressed subtly online through a combination of language, emoji usage, and posting behavior.',
  ss: '/mentalhealth.jpg',
  tech: ['Python', 'XGBoost', 'Scikit-learn', 'Emoji Sentiment Lexicon'],
  live: 'https://sentimentforsocialmedia.streamlit.app/',
  code: 'https://github.com/Aaronrao989/sentiment-insights-for-social-media-posts'
  },
  {
    title: '📄 LLM-Powered Resume Reviewer',
    desc: 'An intelligent web application that leverages LLMs and ATS-style scoring to help candidates analyze and enhance their resumes.',
    ss: '/resume.png',
    tech: ['Scikit-learn + Joblib', 'PyMuPDF / pdfminer', 'Keyword extraction + semantic matching'],
    live: 'https://llmresumeanalysis.streamlit.app/',
    code: 'https://github.com/Aaronrao989/AI_Resume_Analysis'
  },
  {
  title: '💼 Employee Salary Prediction using Machine Learning',
  desc: 'A simple Machine Learning web app built with Streamlit to predict employee salaries based on their details such as age, experience, and other categorical features.',
  ss: '/salary.webp',
  tech: ['Python', 'Pandas & NumPy (Data Handling)', 'Joblib (Model Saving & Loading)'],
  live: 'https://employee-salary-prediction-nicuwy2cnu5qvvekaqxf5y.streamlit.app/',
  code: 'https://github.com/Aaronrao989/employee-salary-prediction'
  },
  {
    title: '🛒 Amazon Reviews Sentiment Analyzer',
    desc: 'A simple AI-powered web app that analyzes Amazon product reviews to determine whether they are Positive, Neutral, or Negative — along with a confidence score.',
    ss: '/sentiment.webp',
    tech: ['Python', 'NLTK (Text preprocessing)', 'Scikit-learn (Model training)', 'Pandas & NumPy (Data handling)'],
    live: 'https://sentiment-analyzer-yc9ljmwoasdk55f53qg7ym.streamlit.app/',
    code: 'https://github.com/Aaronrao989/Sentiment-Analysis-of-Product-Reviews-using-Naive-Bayes'
  },
  {
    title: '🧠 Smart Product Pricing — Multimodal ML Project',
    desc: 'This project builds an AI-powered pricing model that predicts product prices by analyzing both textual and visual information.',
    ss: '/amazon.png',
    tech: ['Text-based TF-IDF features', 'CatBoost regression model', 'Precomputed image embeddings'],
    live: 'https://amazon-ml-challenge-2025.streamlit.app/',
    code: 'https://github.com/Aaronrao989/AMAZON-ML-Challenge-2025'
  },
  {
    title: '🧠 Image Classification using CNN',
    desc: 'This project is a beginner-friendly image classifier built using a Convolutional Neural Network (CNN) and deployed via Streamlit.',
    ss: '/cnn.png',
    tech: ['TensorFlow / Keras', 'NumPy' ,'Pillow'],
    live: '#',
    code: 'https://github.com/Aaronrao989/Image-Classification-using-CNN'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
