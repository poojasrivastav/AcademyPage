const Sequelize = require('sequelize');
const db = require('../index');

const images = [
    'https://images.template.net/wp-content/uploads/2017/04/Abstract-Logo-with-Colorful-Leaves1.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/71HXqFTPqDL._SX522_.jpg',
    'https://www.seoclerk.com/pics/556744-1wYpi51504622425.jpg',
    'https://collegekhabri.com/data/shri-ram-institute-of-technology-logo.jpg',
    'https://images-eu.ssl-images-amazon.com/images/I/61nesrmMepL.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Columbia_Crown_simple.svg/1280px-Columbia_Crown_simple.svg.png'
]

const randomImage = () => images[Math.floor(Math.random() * images.length)];

const returnImage = (images) => {
    return randomImage();
}

const Campus = db.define('campus', {

	name: {
		type: Sequelize.STRING,
		allowNull: false,
        validate: {
            notEmpty: true
        }
	},
	imageUrl: {
		type: Sequelize.STRING,
		defaultValue: function() {
          return returnImage(images);
      }
		
	},
	description: {
		type: Sequelize.TEXT

	}

})

module.exports = Campus
