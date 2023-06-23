import "./index.css";
import Employee from "./component/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [role, setRole] = useState("");

  const [employees, setEmployees] = useState([
    {
      name: "Uzoma Akpala",
      role: "Web Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },

    {
      name: "Jovita Akpala",
      role: "Advertising",
      img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg",
    },

    {
      name: "Ola Akpala",
      role: "Senior Student",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },

    {
      name: "Joshua Akpala",
      role: "Junior Developer",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    },

    {
      name: "Julia Akpala",
      role: "Nusery baby",
      img: "https://images.pexels.com/photos/1170894/pexels-photo-1170894.jpeg",
    },

    {
      name: "GrandMa Akpala",
      role: "Chief Magistrate",
      img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg",
    },

    {
      name: "Onyeze Akpala",
      role: "Business Guru",
      img: "https://images.pexels.com/photos/3781928/pexels-photo-3781928.jpeg",
    },

    {
      name: "Machi Akpala",
      role: "Business Man",
      img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg",
    },

    {
      name: "Amanze Ogbonna",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg",
    },
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            id="text"
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h3>You don't have the necessary clearance!</h3>
      )}
    </div>
  );
}

export default App;
