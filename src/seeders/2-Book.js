'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
     {
       name: "books1",
       type: "triet hoc",
       code: "123456",
       img: "example",
       userId: 1,
     },
     {
       name: "books2",
       type: "triet hoc",
       code: "123456",
       img: "example",
       userId: 1,
     },
     {
       name: "books3",
       type: "triet hoc",
       code: "123456",
       img: "example",
       userId: 1,
     },
     {
       name: "books4",
       type: "triet hoc",
       code: "123456",
       img: "example",
       userId: 1,
     },
     {
       name: "books5",
       type: "triet hoc",
       code: "123456",
       img: "example",
       userId: 1,
     },
   ];
   data.forEach( item => {
    item.createdAt = Sequelize.literal("NOW()");
    item.updatedAt = Sequelize.literal("NOW()");
   })
     await queryInterface.bulkInsert('Books',data, {});
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete("Books", null, {});
  }
};
