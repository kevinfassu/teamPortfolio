//linking files
const Manager = require("../lib/manager");

test("office number", () => {
    const officeValue = "1";
    const employee = new Manager("kevin", 1, "kevin@managers.com", officeValue);
    expect(employee.officeNumber).toBe(officeValue);
});

test("function", () => {
    const officeValue = "Manager";
    const employee = new Manager("kevin", 1, "kevin@managers.com", officeValue);
    expect(employee.getRole()).toBe(officeValue);
})