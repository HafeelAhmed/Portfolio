import React from 'react';

function About() {
  return (
    <div className="about-section" style={{ 
      paddingTop: '120px', 
      paddingBottom: '60px', 
      minHeight: '60vh' 
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">About Me</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  Hello! I'm <strong>Hafeel Ahmed</strong>, a game developer based in India with a <strong>B.Tech in Computer Science and Engineering</strong>, specialized in <strong>AI and Machine Learning</strong>. I have over <strong>3 years of hands-on experience</strong> developing games using <strong>Unreal Engine 5</strong>, focusing on gameplay systems and interactive mechanics.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  I am currently working on <strong>ARES 2192</strong> at <strong>TenderizerGames</strong>, where I contribute to building multiplayer gameplay systems, core mechanics, and performance-optimized features using <strong>Blueprint</strong> and <strong>C++</strong>.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  My work is driven by a strong foundation in <strong>problem-solving</strong> and <strong>system design</strong>, along with experience in tools like <strong>Blender</strong> for 3D modeling and animation. I enjoy building systems that are both technically robust and engaging for players.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  I aim to grow as a <strong>gameplay programmer</strong>, contributing to high-quality, immersive games while collaborating in professional development environments.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  Outside of development, I enjoy reading manhwas and exploring topics like <strong>physics</strong>, <strong>jet engines</strong>, and <strong>science fiction</strong>, which continue to inspire my creativity and curiosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
