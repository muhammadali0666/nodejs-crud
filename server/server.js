const http = require("http");
const { v4 } = require("uuid");
const url = require("url");
const { read_file, write_file } = require("./fs/fs_api");

const options = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

let app = http.createServer((req, res) => {
  course_id = req.url.split("/")[2];


  //////////////////////////// GET /////////////////////////////////

  if (req.method === "GET") {
    if (req.url === "/courses") {
      let courses = read_file("courses.json");
      res.writeHead(200, options);
      res.end(JSON.stringify(courses));
    }

    if (req.url === `/get_one_course/${course_id}`) {
      let foundedCourse = read_file("courses.json").find(
        (c) => c.id === course_id
      );
      if (!foundedCourse) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            msg: "Course Not found!",
          })
        );
      }

      res.writeHead(200, options);
      res.end(JSON.stringify(foundedCourse));
    }
  }
  if (req.method === "GET") {
    if (req.url === "/animals") {
      let result = read_file("animals.json");

      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
    if (req.url === `/get_one_animal/${course_id}`) {
      let result = read_file("animals.json").find((c) => {
        c.id === course_id;
      });
      if (!result) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            msg: "Not Found",
          })
        );
      }
      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
  }

  if (req.method === "GET") {
    if (req.url === "/cars") {
      let result = read_file("cars.json");

      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
    if (req.url === `/get_one_fruit${course_id}`) {
      let result = read_file("cars.json").find((i) => {
        i.id === course_id;
      });
      if (!result) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            msg: "Not Found",
          })
        );
      }

      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
  }

  if (req.method === "GET") {
    if (req.url === "/fruits") {
      let result = read_file("fruits.json");

      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
    if (req.url === `/get_one_fruit/${course_id}`) {
      let result = read_file("fruits.json").find((i) => {
        i.id === course_id;
      });
      if (!result) {
        res.writeHead(404, options);
        res.end(
          JSON.stringify({
            msg: "Not Found",
          })
        );
      }
      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
  }

  if (req.method === "GET") {
    if (req.url === "/register") {
      let result = read_file("register.json");

      res.writeHead(200, options);
      res.end(JSON.stringify(result));
    }
  }

  //////////////////////////// DALETE /////////////////////////////////

  if (req.method === "DELETE") {
    if (req.url === `/delete_course/${course_id}`) {
      let courses = read_file("courses.json");

      let foundedCourse = courses.find((c) => c.id === course_id);

      if (!foundedCourse) {
        res.writeHead(404, options);
        return res.end(
          JSON.stringify({
            msg: "Course not found!",
          })
        );
      }

      courses.forEach((course, idx) => {
        if (course.id === course_id) {
          courses.splice(idx, 1);
        }
      });

      write_file("courses.json", courses);

      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          msg: "Course Deleted!",
        })
      );
    }
  }

  if (req.method === "DELETE") {
    if (req.url === `/delete_animal/${course_id}`) {
      let result = read_file("animals.json");
      let founded = result.find((i) => {
        i.id === course_id;
      });
      if (!founded) {
        res.writeHead(404, options);
        res.end(
          JSON.stringify({
            msg: "deleted",
          })
        );
      }

      result.forEach((animal, idx) => {
        if (animal.id === course_id) {
          result.splice(idx, 1);
        }
      });

      write_file("animals.json", result);

      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          msg: "deleted",
        })
      );
    }
  }

  if (req.method === "DELETE") {
    if (req.url === `/delete_car/${course_id}`) {
      let result = read_file("cars.json");
      let founded = result.find((i) => {
        i.id === course_id;
      });
      if (!founded) {
        res.writeHead(404, options);
        res.end(
          JSON.stringify({
            msg: "deleted",
          })
        );
      }

      result.forEach((animal, idx) => {
        if (animal.id === course_id) {
          result.splice(idx, 1);
        }
      });

      write_file("cars.json", result);

      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          msg: "deleted",
        })
      );
    }
  }

  if (req.method === "DELETE") {
    if (req.url === `/delete_fruit/${course_id}`) {
      let result = read_file("fruits.json");
      let founded = result.find((e) => {
        e.id === course_id;
      });

      if (!founded) {
        res.writeHead(404, options);
        res.end(
          JSON.stringify({
            msg: "deleted",
          })
        );
      }

      result.forEach((fruit, idx) => {
        if (fruit.id === course_id) {
          result.splice(idx, 1);
        }
      });

      write_file("fruits.json", result);

      res.writeHead(200, options);
      res.end(
        JSON.stringify({
          msg: "deleted",
        })
      );
    }
  }
  //////////////////////////// PUT /////////////////////////////////

  if (req.method === "PUT") {
    if (req.url === `/update_course/${course_id}`) {
      req.on("data", (new_course) => {
        let newCourse = JSON.parse(new_course);
        let { title, price, author } = newCourse;

        let courses = read_file("courses.json");

        let foundedCourse = courses.find((c) => c.id === course_id);

        if (!foundedCourse) {
          res.writeHead(404, options);
          return res.end(
            JSON.stringify({
              msg: "Course not found!",
            })
          );
        }

        courses.forEach((course) => {
          if (course.id === course_id) {
            course.title = title ? title : course.title;
            course.price = price ? price : course.price;
            course.author = author ? author : course.author;
          }
        });

        write_file("courses.json", courses);

        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "Course Updated!",
          })
        );
      });
    }
  }

  if (req.method === "PUT") {
    if (req.url === `/update_animal/${course_id}`) {
      req.on("data", (new_course) => {
        let newCourse = JSON.parse(new_course);
        let { name, color } = newCourse;

        let animals = read_file("animals.json");

        let foundedCourse = animals.find((c) => c.id === course_id);

        if (!foundedCourse) {
          res.writeHead(404, options);
          return res.end(
            JSON.stringify({
              msg: "Animal not found!",
            })
          );
        }

        animals.forEach((animal) => {
          if (animal.id === course_id) {
            animal.name = name ? name : animal.name;
            animal.color = color ? color : animal.color;
          }
        });

        write_file("animals.json", animals);

        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "animal Updated!",
          })
        );
      });
    }
  }

  if (req.method === "PUT") {
    if (req.url === `/update_car/${course_id}`) {
      req.on("data", (new_course) => {
        let newCar = JSON.parse(new_course);
        let { title, color, price } = newCar;

        let cars = read_file("cars.json");

        let foundedCars = cars.find((c) => c.id === course_id);

        if (!foundedCars) {
          res.writeHead(404, options);
          return res.end(
            JSON.stringify({
              msg: "car not found!",
            })
          );
        }

        cars.forEach((car) => {
          if (car.id === course_id) {
            car.title = title ? title : car.title;
            car.color = color ? color : car.color;
            car.price = price ? price : car.price;
          }
        });

        write_file("cars.json", cars);

        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "car Updated!",
          })
        );
      });
    }
  }

  if (req.method === "PUT") {
    if (req.url === `/update_fruit/${course_id}`) {
      req.on("data", (new_course) => {
        let newCar = JSON.parse(new_course);
        let { title, color, price } = newCar;

        let cars = read_file("fruits.json");

        let foundedCars = cars.find((c) => c.id === course_id);

        if (!foundedCars) {
          res.writeHead(404, options);
          return res.end(
            JSON.stringify({
              msg: "fruit not found!",
            })
          );
        }

        cars.forEach((car) => {
          if (car.id === course_id) {
            car.title = title ? title : car.title;
            car.color = color ? color : car.color;
            car.price = price ? price : car.price;
          }
        });

        write_file("fruits.json", cars);

        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "fruit Updated!",
          })
        );
      });
    }
  }

  //////////////////////////// POST /////////////////////////////////

  if (req.method === "POST") {
    if (req.url === "/create_course") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let courses = read_file("courses.json");

        courses = [
          ...courses,
          {
            id: v4(),
            ...data,
          },
        ];
        write_file("courses.json", courses);
        res.writeHead(201, options);
        res.end(
          JSON.stringify({
            msg: "Created Course!",
          })
        );
      });
    }
  }

  if (req.method === "POST") {
    if (req.url === "/animals") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let courses = read_file("animals.json");

        courses = [
          ...courses,
          {
            id: v4(),
            ...data,
          },
        ];
        write_file("animals.json", courses);
        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "added new datas",
          })
        );
      });
    }
  }

  if (req.method === "POST") {
    if (req.url === "/register") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let courses = read_file("register.json");
        courses = [
          ...courses,
          {
            id: v4(),
            ...data,
          },
        ];
        write_file("register.json", courses);
        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "added new datas",
          })
        );
      });
    }
  }

  if (req.method === "POST") {
    if (req.url === "/fruits") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let reading = read_file("fruits.json");

        reading = [
          ...reading,
          {
            id: v4(),
            ...data,
          },
        ];

        write_file("fruits.json", reading);
        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "added new datas",
          })
        );
      });
    }
  }

  if (req.method === "POST") {
    if (req.url === "/cars") {
      req.on("data", (chunk) => {
        let data = JSON.parse(chunk);

        let reading = read_file("cars.json");

        reading = [
          ...reading,
          {
            id: v4(),
            ...data,
          },
        ];

        write_file("cars.json", reading);
        res.writeHead(200, options);
        res.end(
          JSON.stringify({
            msg: "added new datas",
          })
        );
      });
    }
  }

  ////////////////////////////////////////////////////////////////////

  if (req.url === "/auth/register") {
    req.on("data", (chunk) => {
      let { email, username, password, gender } = JSON.parse(chunk);

      let hashPsw = btoa(password);

      let users = read_file("users.json");

      let foundedUser = users.find((user) => user.email == email);

      if (foundedUser) {
        res.writeHead(200, options);
        return res.end(
          JSON.stringify({
            msg: "Email already exists!!!",
          })
        );
      }
      users.push({
        id: v4(),
        email,
        username,
        gender,
        password: hashPsw,
      });

      write_file("users.json", users);

      res.writeHead(201, options);
      res.end(
        JSON.stringify({
          msg: "User registrated!",
          token: hashPsw
        })
      );
    });
  }

  if (req.method === "GET") {   
    if (req.url === "/register_users") {
      let courses = read_file("users.json");
      res.writeHead(200, options);
      res.end(JSON.stringify(courses));
    }
  }

  // if(req.url === '/auth/login'){
  //     req.on("data", chunk => {
  //         let { email, password } = JSON.parse(chunk)

  //         let foundedUser = read_file("users.json").find(user => user.email === email)
  //         if(foundedUser){
  //             let psw = atob(foundedUser.password)
  //             if(psw !== password){
  //                 res.writeHead(200, options)
  //                 return res.end(JSON.stringify({
  //                     msg: 'Password error!'
  //                 }))

  //             }

  //             let hashUser = btoa(foundedUser)
  //             res.writeHead(200, options)
  //             return res.end(JSON.stringify({
  //                 msg: 'Success!',
  //                 token: hashUser
  //             }))
  //         }

  //         res.writeHead(404, options)
  //         res.end(JSON.stringify({
  //             msg: 'User not found!'
  //         }))

  //     })

  // }

  ///////////////////////////////////////////////
});

app.listen(3000, () => {
  console.log("Server is running on the 3000");
});
