const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())




  app.post('/api/data', (req, res, next) => {
    console.log(req.body);
    res.status(201).json();
    message: 'objet crée'
  }) 




  app.get('/api/data', (req, res, next) => {
    const data = [
        {
          id: 1,
        //   imgSrc: img1,
          hotelName: "Hotel Terrou-Bi",
          location: "Boulevard Martin Luther King Dakar, 11500",
          price: "25000 XOF par nuit",
        },
        {
          id: 2,
        //   imgSrc: img2,
          hotelName: "King Fahd Palace",
          location: "Rte des Almadies, Dakar",
          price: "20000 XOF par nuit",
        },
        {
          id: 3,
        //   imgSrc: img3,
          hotelName: "Radisson Blu Hotel",
          location: "Rte de la Corniche O, Dakar 16868",
          price: "22000 XOF par nuit",
        },
        {
          id: 4,
        //   imgSrc: img4,
          hotelName: "Pullman Dakar Teranga",
          location: "Place de l`Independance, 10 Rue PL 29, Dakar",
          price: "30000 XOF par nuit",
        },
        {
          id: 5,
        //   imgSrc: img5,
          hotelName: "Hôtel Lac Rose",
          location: "Lac Rose, Dakar",
          price: "25000 XOF par nuit",
        },
        {
          id: 6,
        //   imgSrc: img6,
          hotelName: "Hôtel Saly",
          location: "Mbour, Sénégal",
          grade: "CULTURAL RELAX",
          price: "20000 XOF par nuit",
        },
        {
          id: 7,
        //   imgSrc: img7,
          hotelName: "Hôtel Saly",
          location: "Mbour, Sénégal",
          grade: "CULTURAL RELAX",
          price: "20000 XOF par nuit",
        },
        {
          id: 8,
        //   imgSrc: img8,
          hotelName: "Hôtel Saly",
          location: "Mbour, Sénégal",
          grade: "CULTURAL RELAX",
          price: "20000 XOF par nuit",
        },
      ];
    res.status(200).json(stuff);
  });

module.exports = app;

