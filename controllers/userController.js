const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: tour,
    },
  });
};

exports.createUser = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  res.status(201).json({
    status: "success",
    body: newTour,
  });
};

exports.updateUser = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user: "<Updated tour here...>",
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
