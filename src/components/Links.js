import React from "react";
const Links = (props) => {
    let githubLink = props.links.github;
    let linkedlnLink = props.links.linkedin;
    console.log (props);
    return (
        <div>
            <h3>Links</h3> 
            <a href = {githubLink}>{githubLink}</a>
            <a href = {linkedlnLink}>{linkedlnLink}</a>
       </div>
    )
}
export default Links;