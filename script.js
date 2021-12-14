const mongoose = require("mongoose");
const Courses = require("./models/courses");
const Participants = require("./models/participants");

const connecter = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bootcamp");
    console.log("connected to the DataBase");
  } catch (e) {
    console.log(e.message);
  }

};


const recherche =async ()=> {
    const participants= await Participants.find()
    .populate("courses", "-_id -__v -participants");

    console.log(participants)

}



/* const creer = async () => {
  try {
    const html = await Courses.create(
    
      {
        label: "HTML",
        description: "Hyper Text Markup Language",
        volume: 30,
        starDate: "2021/09/12",
      });

      const css = await Courses.create(
      {
        label: "CSS",
        description: "Cascading Style Sheets",
        volume: 30,
        starDate: "2021/09/12",
      });

      const typescript = await Courses.create(
      {
        label: "TypeScript",
        description: "TypeScript est un langage de programmation",
        volume: 20,
        starDate: "2021/09/12",
      });


    console.log(html,css,typescript);

    const participants = await Participants.insertMany([
      {
        name: "Mamadou MBENGUE",
        courses:[
            html._id , css._id , typescript._id
        ]
      },


      {
        name: "Aminata GAYE",
        courses:[
            css._id , typescript._id
        ]
      },

      
    ]);
    
  } catch (e) {
    console.error(e.message);
  }
}; */

connecter();
recherche();
// creer();