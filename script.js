const mongoose = require('mongoose');
const Course = require('./models/course')
const Groupe = require('./models/groupe')
const Participants = require('./models/participants')

const connecter = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bootcamp');
        console.log('connected to the DataBase')
    }
    catch(e){
        console.log(e.message)

    }
}

const recherche =async ()=> {
    // const course = await Course.find({'label':'HTML'})

    // const course = await Course.find({'volume': 5})
    
    const course = await Course.find({'volume': { $gt: 5 } })
    
    console.log(course)
}







 /* const creer = async ()=> {
     try{
        const course= await Course.insertMany([{
             label: 'HTML',
            description: 'Hyper Text Markup Language',
            volume: 5,
            starDate: '2021/09/12',

         },
         {
            label: 'CSS',
            description: 'Cascading Style Sheets',
            volume: 6,
            starDate: '2021/09/12',

         },

        
         {
            label: 'WordPress',
            description: 'Gratuit libre et open source',
            volume: 5,
            starDate: '2021/09/12',

         }]);
console.log(course)

const participants= await Participants.insertMany([{
firstname:'Mamadou',
lastname:'Moussa',
birthDate:2000/30/10,
address:"Yoff"

},

{

firstname:'Aminata',
lastname:'Mami',
birthDate:2000/30/10,
address:"Parcelle"

},

{
firstname:'Awa',
lastname:'Abdou',
birthDate:2000/30/10,
address:"Asecna"

},


]);
       

     }
     catch(e){
        console.error(e.message)
    }
 }
 creer();
 */


connecter();
recherche();