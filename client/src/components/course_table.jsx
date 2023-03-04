import { useEffect, useState } from "react";

export default function Courses() {


  const [courses, setCourses] = useState([]);
  const [arr, setArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/delete_course/${arr}`)
      .then((res) => res.json())
      .then((course) => setCourses(course));
  }, []);

  // const deleteBtn = (id) => {
  //   const resultTask = courses.filter((element) => {
  //      setArr(element.id[1] !== id)
  //   });
  //   setCourses(resultTask);
  // };

  const createCouse = (e) => {
    e.preventDefault();

    const { title, price, author } = e.target;

    fetch("http://localhost:3000/create_course", {
      method: "POST",
      body: JSON.stringify({
        title: title.value,
        price: price.value,
        author: author.value,
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
        Add Course
      </button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>author</th>
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
                  <td>{c.price}</td>
                  <td>{c.author}</td>
                  <td>
                    <i
                      className="fa fa-edit text-primary"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                  <td>
                    <i
                    // onClick={(e)=> {
                    //   deleteBtn(e.id)
                    // }}
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
                  <label htmlFor="title">Title</label>
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
                  <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="price..."
                    name="price"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="author">author:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="author..."
                    name="author"
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
