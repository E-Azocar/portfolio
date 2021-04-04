import React from "react";

import "./Project.css";

function Project({ english, link, img, title, techs }) {
    return (
        <div className="col-md-4 my-3">
            <div className="card">
                <img src={img} className="card-img-top" alt="Project" />
                <div className="card-body">
                    <hr />
                    <h5 className="card-title">{title}</h5>
                    <ul>
                        {techs.map((tech) => {
                            return (
                                <li key={tech}>{tech}</li>
                            )
                        })}
                    </ul>
                    <a href={link} className="btn btn-gray col-12" target="_blank">
                        {english ? "See Project" : "Ver Proyecto"}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
