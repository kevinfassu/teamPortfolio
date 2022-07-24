const Engineer = require('../lib/engineer');

test("setting up github via constructor", () => {
    const engineerValue = "nosremetnarg";
    const employee = new Engineer("kevin", 1, "kevin@engineer.com", engineerValue);
    expect(employee.github).toBe(engineerValue);
})

test("getRole function", () => {
    const engineerValue = "Engineer";
    const employee = new Engineer("kevin", 1, "kevin@engineer.com", engineerValue);
    expect(employee.getRole()).toBe(engineerValue);
})

test("Get gitHub", () => {
    const engineerValue = "nosremetnarg";
    const employee = new Engineer("kevin", 1, "kevin@engineer.com", engineerValue);
    expect(employee.getGitHub()).toBe(engineerValue);
})