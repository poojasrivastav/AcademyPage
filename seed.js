const {db, Campus, Student} = require('./server/db/models');

const campus = [
  {name: "Luna", imgUrl: "https://images.template.net/wp-content/uploads/2017/04/Abstract-Logo-with-Colorful-Leaves1.jpg", description: "Luna Community College (LCC) is the only community college in northeastern New Mexico."},
  {name: "Terra", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71HXqFTPqDL._SX522_.jpg", description: "Terra State Community College is a two-year accredited, state-supported, commuter college located in Fremont, Ohio."},
  {name: "Mars", imgUrl: "http://media.graytvinc.com/images/400*320/Del+Rio+Rams.pngf", description: "Mars Hill University, an academic community rooted in the Christian faith, challenges and equips students to pursue intellectual, spiritual, and personal growth through an education."},
  {name: "Titan", imgUrl: "https://collegekhabri.com/data/shri-ram-institute-of-technology-logo.jpg", description: "Titan College is a College Credit Plus partnership between Lorain City Schools and Lorain County Community College where high school students as early as seventh grade participate in a combined high school and college experience with the goal of earning a high school and a college associate degree at the same time."},
];

const student = [
    {firstName: "Priya", lastName:"Jaiswal", email: "priya@xyz.com", gpa: 2.9, campusId: 1},
    {firstName: "Ruchin", lastName: "Sharma",email: "ruchin@xyz.com", gpa: 3.4, campusId: 3},
    {firstName: "Ankit", lastName: "manni", email: "ankit@xyz.com", gpa: 1.0, campusId: 1},
    {firstName: "Surabhi", lastName: "Sinha", email: "suru@xyz.com", gpa: 3.9, campusId: 3},
    {firstName: "Zeke", lastName: "Omri", email:"zeke@xyz.com", gpa: 3.0, campusId: 4},
    {firstName: "Pooja", lastName:"Srivastava", email: "pooja@xyz.com", gpa: 4, campusId: 2},
    {firstName: "Mayank", lastName: "Srivastava",email: "mayank@xyz.com", gpa: 4, campusId: 2},
    {firstName: "Piyush", lastName: "Sri", email: "piyush@xyz.com", gpa: 4, campusId: 2},
    {firstName: "Arti", lastName: "Kayashtha", email: "arti@xyz.com", gpa: 4, campusId: 2},
    {firstName: "Prashant", lastName: "Sri", email:"prash@xyz.com", gpa: 4, campusId: 2}
   ]

const seed = () =>
  Promise.all(campus.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(student.map(student =>
    Student.create(student)
  
  )
  ));


const main = () => {
  console.log('Syncing db..')
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database..')
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack);
    })
    .then(() => {
      db.close()
      return null
    });
};

main()