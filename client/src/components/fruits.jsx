import { useEffect, useState } from "react";

export default function Meva() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fruits")
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, []);

  const createCouse = (e) => {
    e.preventDefault();

    const { title, color, price} = e.target;

    fetch("http://localhost:3000/fruits", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        color: color.value,
        price: price.value
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
        Add fruit
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>color</th>
            <th>price</th>
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
                  <td>{c.title}</td>
                  <td>{c.color}</td>
                  <td>{c.price}</td>
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
                  <label htmlFor="title">title</label>
                  {/* <input type="email" className="form-control" placeholder="Enter email" id="email"> */}
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="title..."
                    name="title"
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
                <div className="form-group">
                  <label htmlFor="price">price:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="price..."
                    name="price"
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
