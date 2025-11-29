import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter, BoxArrowUpRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ShowCasePage = ({
  imageUrls = ['.Mic.png'],
  title = 'Project Title',
  category = 'Game Dev',
  role = 'Developer',
  description = 'Project description',
  challenges = 'Test Challenges',
  solution = 'Test Solution',
  usedTools = ['test tool1', 'test tool2', 'test tool3', 'test tool4'],
  linkToProject = '',
  hasLink = false,
  videoUrl
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    if (imageUrls.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    if (imageUrls.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getLinkButtonDetails = () => {
    if (linkToProject.includes('github')) {
      return { text: 'View on GitHub', icon: Github, size: 20 };
    } else if (linkToProject.includes('itch.io')) {
      return { text: 'Play on itch.io', icon: BoxArrowUpRight, size: 20 };
    } else {
      return { text: 'View Project', icon: BoxArrowUpRight, size: 20 };
    }
  };

  const linkDetails = getLinkButtonDetails();

  const getCategoryColor = () => {
    switch (category) {
      case 'Game Dev': return '#4A2FBD';
      case '3D Art': return '#AA367C';
      case 'Web Dev': return '#17A2B8';
      default: return '#4A2FBD';
    }
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check out this amazing project: ${title}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <section style={{
      minHeight: '100vh',
      padding: '120px 0 80px 0',
      background: 'radial-gradient(circle at top, #1a1b3a 0%, #05070c 55%, #050509 100%)',
      color: '#f5f5f5'
    }}>
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={12}>
            {/* BACK BUTTON */}
            <div style={{ marginBottom: '30px' }}>
              <button
                onClick={() => navigate('/portfolio/projects')}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#f5f5f5',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: "'Centra', sans-serif",
                  transition: '0.3s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#AA367C';
                  e.target.style.color = '#AA367C';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.color = '#f5f5f5';
                }}
              >
                <ChevronLeft size={18} />
                Back to Projects
              </button>
            </div>

            {/* TITLE AND BADGES */}
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h1 style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#f5f5f5',
                    marginBottom: '20px',
                    letterSpacing: '1.2px',
                    lineHeight: '1.2',
                    fontFamily: "'Centra', sans-serif"
                  }}>
                    {title}
                  </h1>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '30px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      background: `${getCategoryColor()}16`,
                      color: getCategoryColor(),
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      border: `1px solid ${getCategoryColor()}60`,
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      {category}
                    </span>
                    <span style={{
                      background: 'rgba(74, 47, 189, 0.16)',
                      color: '#c2c6ff',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      border: '1px solid rgba(74, 47, 189, 0.6)',
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      {role}
                    </span>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {/* IMAGE GALLERY */}
        {imageUrls.length > 0 &&
          <TrackVisibility partialVisibility>
            {({ isVisible }) =>
              <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""} style={{ marginBottom: '60px' }}>
                <Col lg={12}>
                  {/* Main Image */}
                  <div 
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '24px',
                      background: 'rgba(10, 11, 24, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      height: '500px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 22px 50px rgba(0, 0, 0, 0.6)';
                      e.currentTarget.style.borderColor = '#AA367C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.35)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      background: '#060713',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img
                        src={imageUrls[currentImageIndex]}
                        alt={`${title} - Screenshot ${currentImageIndex + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease-in-out',
                          backgroundColor: '#060713'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div style="color: rgba(255,255,255,0.3); font-size: 18px;">No Image Available</div>';
                        }}
                      />
                    </div>

                    {/* Navigation Arrows */}
                    {imageUrls.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          style={{
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(10, 11, 24, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#f5f5f5',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: '0.3s ease-in-out',
                            zIndex: 10
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #AA367C, #4A2FBD)';
                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(10, 11, 24, 0.9)';
                            e.target.style.transform = 'translateY(-50%) scale(1)';
                          }}
                        >
                          <ChevronLeft size={28} />
                        </button>

                        <button
                          onClick={nextImage}
                          style={{
                            position: 'absolute',
                            right: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(10, 11, 24, 0.9)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                            color: '#f5f5f5',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: '0.3s ease-in-out',
                            zIndex: 10
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #AA367C, #4A2FBD)';
                            e.target.style.transform = 'translateY(-50%) scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(10, 11, 24, 0.9)';
                            e.target.style.transform = 'translateY(-50%) scale(1)';
                          }}
                        >
                          <ChevronRight size={28} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {imageUrls.length > 1 && (
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      overflowX: 'auto',
                      paddingBottom: '10px'
                    }}>
                      {imageUrls.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          style={{
                            width: '100px',
                            height: '80px',
                            borderRadius: '12px',
                            border: currentImageIndex === index ? '2px solid #AA367C' : '2px solid rgba(255, 255, 255, 0.2)',
                            background: '#1a1a1d',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            padding: 0,
                            flexShrink: 0,
                            transition: '0.3s ease-in-out',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => {
                            if (currentImageIndex !== index) {
                              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentImageIndex !== index) {
                              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            }
                          }}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain'
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Image Indicators */}
                  {imageUrls.length > 1 && (
                    <div style={{
                      textAlign: 'center',
                      marginTop: '16px',
                      fontSize: '14px',
                      color: '#b7b9cc',
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      {currentImageIndex + 1} / {imageUrls.length}
                    </div>
                  )}
                </Col>
              </Row>
            }
          </TrackVisibility>
        }

        {/* DESCRIPTION */}
        <TrackVisibility partialVisibility>
          {({ isVisible }) =>
            <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""} style={{ marginBottom: '60px' }}>
              <Col lg={12}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '40px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
                }}>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '20px',
                    background: 'linear-gradient(135deg, #AA367C, #4A2FBD)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: "'Centra', sans-serif"
                  }}>
                    Project Overview
                  </h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#b7b9cc',
                    lineHeight: '1.8',
                    letterSpacing: '0.8px',
                    marginBottom: 0,
                    fontFamily: "'Centra', sans-serif"
                  }}>
                    {description}
                  </p>
                </div>
              </Col>
            </Row>
          }
        </TrackVisibility>

        {/* CHALLENGES & SOLUTIONS */}
        {challenges || solution ?
          <TrackVisibility partialVisibility>
            {({ isVisible }) =>
              <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""} style={{ marginBottom: '60px' }}>
                <Col lg={6} md={12} style={{ marginBottom: '24px' }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '30px',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
                  }}>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#AA367C',
                      marginBottom: '15px',
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      Challenges
                    </h4>
                    <p style={{
                      fontSize: '16px',
                      color: '#b7b9cc',
                      lineHeight: '1.7',
                      letterSpacing: '0.6px',
                      marginBottom: 0,
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      {challenges}
                    </p>
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '30px',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
                  }}>
                    <h4 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#4A2FBD',
                      marginBottom: '15px',
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      Solution
                    </h4>
                    <p style={{
                      fontSize: '16px',
                      color: '#b7b9cc',
                      lineHeight: '1.7',
                      letterSpacing: '0.6px',
                      marginBottom: 0,
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      {solution}
                    </p>
                  </div>
                </Col>
              </Row>
            }
          </TrackVisibility> : null
        }

        {/* TOOLS & TECHNOLOGIES */}
        {usedTools.length > 0 &&
          <TrackVisibility partialVisibility>
            {({ isVisible }) =>
              <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""} style={{ marginBottom: '60px' }}>
                <Col lg={12}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '40px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
                  }}>
                    <h3 style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      marginBottom: '30px',
                      background: 'linear-gradient(135deg, #AA367C, #4A2FBD)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: "'Centra', sans-serif"
                    }}>
                      Tools & Technologies
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      {usedTools.map((tool, index) => (
                        <span
                          key={index}
                          style={{
                            background: 'linear-gradient(135deg, #AA367C, #4A2FBD)',
                            color: '#ffffff',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            fontFamily: "'Centra', sans-serif",
                            display: 'inline-block'
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            }
          </TrackVisibility>
        }

        {/* CTA BUTTONS */}
        <TrackVisibility partialVisibility>
          {({ isVisible }) =>
            <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""} style={{ marginBottom: '60px' }}>
              <Col lg={12}>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  {hasLink && linkToProject &&
                    <button
                      onClick={() => window.open(linkToProject, '_blank')}
                      style={{
                        background: 'linear-gradient(135deg, #AA367C, #4A2FBD)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '16px 40px',
                        fontSize: '16px',
                        fontWeight: '700',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: '0.3s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontFamily: "'Centra', sans-serif",
                        letterSpacing: '0.8px',
                        boxShadow: '0 8px 20px rgba(170, 54, 124, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(170, 54, 124, 0.55)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(170, 54, 124, 0.4)';
                      }}
                    >
                      <linkDetails.icon size={linkDetails.size || 20} />
                      {linkDetails.text}
                    </button>
                  }

                  {/* LinkedIn Share */}
                  <button
                    onClick={shareOnLinkedIn}
                    style={{
                      background: 'rgba(14, 118, 168, 0.15)',
                      color: '#0e76a8',
                      border: '1px solid #0e76a8',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: '0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: "'Centra', sans-serif"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(14, 118, 168, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(14, 118, 168, 0.15)';
                    }}
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </button>

                  {/* Twitter Share */}
                  <button
                    onClick={shareOnTwitter}
                    style={{
                      background: 'rgba(29, 161, 242, 0.15)',
                      color: '#1da1f2',
                      border: '1px solid #1da1f2',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: '0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: "'Centra', sans-serif"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(29, 161, 242, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(29, 161, 242, 0.15)';
                    }}
                  >
                    <Twitter size={18} />
                    Twitter
                  </button>
                </div>
              </Col>
            </Row>
          }
        </TrackVisibility>
      </Container>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 { font-size: 32px !important; }
          h3 { font-size: 24px !important; }
          h4 { font-size: 18px !important; }
          p { font-size: 16px !important; }
          div[style*="padding: 40px"] { padding: 24px !important; }
          button { padding: 12px 20px !important; font-size: 14px !important; }
        }
        @media (max-width: 576px) {
          h1 { font-size: 28px !important; }
          h3 { font-size: 20px !important; }
          div[style*="display: flex"][style*="gap: 20px"] { flex-direction: column !important; }
          button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};
