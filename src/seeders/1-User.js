"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        name: "user1",
        password: "123456",
        email: "user1@gmail.com",
        phone: "123456789",
      },
      {
        name: "user2",
        password: "123456",
        email: "user2@gmail.com",
        phone: "123456789",
      },
      {
        name: "user3",
        password: "123456",
        email: "user3@gmail.com",
        phone: "123456789",
      },
      {
        name: "user4",
        password: "123456",
        email: "user4@gmail.com",
        phone: "123456789",
      },
    ];
    data.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
