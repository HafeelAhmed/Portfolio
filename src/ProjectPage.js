import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Banner } from "./components/Banner";
function ProjectPage()
{
    const navigate = useNavigate();
    const location = useLocation();
    const { message } = location.state || { message: "congratulation on finding this page" };

    const handleClick = (value) => {
    navigate('/projec', { state: { message: value } });
    };

return(
<div>
    <h2>{message}</h2>
    <button onClick={()=>handleClick("congratulation on finding this button")}><h1>hi</h1></button>
</div>
);
}

export default ProjectPage;