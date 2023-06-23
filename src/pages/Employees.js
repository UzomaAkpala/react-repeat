import "../index.css";
import Employee from "../component/Employee";
import AddEmployee from "../component/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import EditEmployee from "../component/EditEmployee";
import Header from "../component/Header";
function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Uzoma Akpala",
      role: "Web Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },

    {
      id: 2,
      name: "Jovita Akpala",
      role: "Advertising",
      img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg",
    },

    {
      id: 3,
      name: "Ola Jane Akpala",
      role: "Senior Student",
      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg",
    },

    {
      id: 4,
      name: "Joshua Akpala",
      role: "Junior Developer",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    },

    {
      id: 5,
      name: "Julia U. Akpala",
      role: "Nusery baby",
      img: "https://images.pexels.com/photos/1170894/pexels-photo-1170894.jpeg",
    },

    {
      id: 6,
      name: "Ola O. Akpala",
      role: "Chief Magistrate",
      img: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg",
    },

    {
      id: 7,
      name: "Onyeze Akpala",
      role: "Business Guru",
      img: "https://images.pexels.com/photos/3781928/pexels-photo-3781928.jpeg",
    },

    {
      id: 8,
      name: "Machi Akpala",
      role: "Business Man",
      img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg",
    },

    {
      id: 9,
      name: "Amanze Ogbonna",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/935969/pexels-photo-935969.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
          id: employee.id,
        };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function NewEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee NewEmployee={NewEmployee} />
        </>
      ) : (
        <h3>You don't have the necessary clearance!</h3>
      )}
    </div>
  );
}

export default Employees;
