import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, imageUrls, id }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/Portfolio/projects/${id}`)
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imageUrls[0]} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>View More</span>
        </div>
      </div>
    </Col>
  );
};

