const db = require('./connection');
const { User, Mattress, Vendor } = require('../models');

db.once('open', async () => {
  await Vendor.deleteMany();

  const vendors = await Vendor.insertMany([
    { name: 'Beautyrest' },
    { name: 'Sealy' },
    { name: 'Serta' },
    { name: 'Tulo' },
    { name: 'Purple' }
  ]);

  console.log('Vendor data has been seeded');

  await Mattress.deleteMany();

  const mattresses = await Mattress.insertMany([
    {
      name: 'Beautyrest Greenwood 9.5" Firm Mattress',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'beautyrestGreenwood.jpg',
      vendor: vendors[0]._id,
      price: 429.99,
      size: 'Full'
    },
    {
      name: 'Beautyrest Greenwood 9.5" Firm Mattress',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'beautyrestGreenwood.jpg',
      vendor: vendors[0]._id,
      price: 629.99,
      size: 'Queen'
    },
    {
      name: 'Beautyrest Greenwood 9.5" Firm Mattress',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'beautyrestGreenwood.jpg',
      vendor: vendors[0]._id,
      price: 929.99,
      size: 'King'
    }
  ]);

  console.log('Mattress data has been seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Harley',
    lastName: 'Quinn',
    email: 'quinn@testmail.com',
    password: 'password12345',
    carts: [
      {
        mattresses: [mattresses[0]._id, mattresses[0]._id, mattresses[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Bruce',
    lastName: 'Wayne',
    email: 'wayne@testmail.com',
    password: 'password12345'
  });

  console.log('User data has been seeded');

  process.exit();
});
