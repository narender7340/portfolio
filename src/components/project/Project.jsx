import { useEffect, useState } from "react";
import ProjectList from "../projectList/ProjectList";
import "./project.scss";
import {
  react,
  restaurant,
  microsoft,
  demistifying,
} from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React Portfolio Website",
    },
    {
      id: "restaurant",
      title: "Restaurant Management System",
    },
    {
      id: "microsoft",
      title: "Microsoft Word Solver Game",
    },
    {
      id: "demistifying",
      title: "Demistifying Algo:PClub IITK",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(react);
        break;
      case "restaurant":
        setData(restaurant);
        break;
      case "microsoft":
        setData(microsoft);
        break;
      case "demistifying":
        setData(demistifying);
        break;
      default:
        setData(react);
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1>Resume</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
