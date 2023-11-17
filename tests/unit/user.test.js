const UserService = require("../../services/user.service");
const { userMock } = require("../mocks/dataMock");
const bcrypt = require('bcrypt');

const userService = new UserService();
const userData = userMock;

describe("Unit Testing : user.service.js", () => {
    it("[+] Store User to DB", async () => {
        const userNew = await userService.store(userData);
        expect(userNew.name).toBe(userData.name);
        expect(userNew.email).toBe(userData.email);

        const passwordDB = await bcrypt.compare(userData.password, userNew.password);
        expect(passwordDB).toBe(true);
        const isDeleted = await userService.delete(userData.email);
        expect(isDeleted).toEqual(true);
    })
})