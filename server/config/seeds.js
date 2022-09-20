const db = require("./connection");
const { Departments, Users } = require("../models");

db.once('open', async() => {
    await Departments.deleteMany()

    const DepartmentList = await Departments.insertMany([
        { name: 'Advertising'},
        { name: 'HR'},
        { name: 'Finance'},
        { name: 'Legal'}
    ]);

    console.log('depts seeded')

    await Users.deleteMany();

    const userList = await Users.insertMany([
        {
            name: 'Clark Kent',
            email: 'Clark.Kent@p3ltd.com',
            employeeID: 10001
            
        }
    ])
})