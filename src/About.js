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
                  Hello! I'm <strong>Hafeel Ahmed</strong>, a passionate game development enthusiast based in India. 
                  With a <strong>B.Tech degree in Computer Science and Engineering</strong> specialized in <strong>AI and Machine Learning</strong>, 
                  I've spent the past couple of years honing my skills in <strong>game mechanics</strong>, <strong>3D modeling</strong>, 
                  and <strong>product animation</strong>.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  Though I’m currently not in a professional role, I have practical experience working with 
                  <strong> Unreal Engine 5</strong>, <strong>Blender</strong>, and <strong>C++ programming</strong>, 
                  driven by a deep love for <em>problem solving</em> and <em>logical thinking</em>.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  <em>Collaboration</em> and <em>creativity</em> fuel my working style, and I thrive when I can combine 
                  <strong>innovation</strong> with <strong>reliability</strong> in my projects. My goal is to become a 
                  <strong> gameplay programmer</strong> and <strong>mechanics developer</strong>, building engaging and 
                  well-known indie games that capture players' imaginations. I value <strong>rationality</strong> and am 
                  always motivated by the <em>satisfaction</em> and <em>peace</em> that come from solving complex 
                  challenges in game design.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  Outside of development, I enjoy reading <em>manhwas</em> and <em>self-improvement books</em>, and I have a 
                  keen interest in <strong>jet engines</strong>, <strong>physics theories</strong>, <strong>quantum physics</strong>, 
                  and <strong>science fiction</strong>. These passions inspire me to constantly learn and think beyond the 
                  conventional—keeping my <em>creativity alive</em>.
                </p>

                <p style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                  color: "#B8B8B8"
                }}>
                  I am excited about the journey ahead, aiming to make meaningful contributions in game development while 
                  growing as a <strong>creative programmer</strong>.
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
