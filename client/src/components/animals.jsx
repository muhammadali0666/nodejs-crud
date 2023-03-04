import { useEffect, useState } from "react";

export default function Animals() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, []);

  const createCouse = (e) => {
    e.preventDefault();

    const { name, color} = e.target;

    fetch("http://localhost:3000/animals", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        color: color.value
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg));
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add animals
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>color</th>
            <th>edit</th>
            <th>trash</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((c, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.color}</td>
                  <td>
                    <i
                      className="fa fa-edit text-primary"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa fa-trash text-danger"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={(e) => createCouse(e)}>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  {/* <input type="email" className="form-control" placeholder="Enter email" id="email"> */}
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="name..."
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="color">color:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="color..."
                    name="color"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
