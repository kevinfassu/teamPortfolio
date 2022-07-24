const Intern = require("../lib/intern");

test("setting school through argument", () => {
    const testValue = "University of California Los Angeles";
    const employee = new Intern("kevin", 1, "kevin@kevin.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("kevin", 1, "kevin@kevin.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of California Los Angeles";
    const employee = new Intern("kevin", 1, "kevin@kevin.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});