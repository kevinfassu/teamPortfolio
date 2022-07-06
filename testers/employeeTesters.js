// in this tester i will give all variables

const Employee = require("../lib/employee");
test("initiate object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});
//given name for test 
test("given employee Name", () => {
    const eName = "kevin"
    const employee = new Employee(eName);
    expect(employee.eName).toBe(eName);
});
// givin id for test
test("set ID", () => {
    const setId = "21";
    const employee = new Employee("kevin", setId);
    expect(employee.setId).toBe(setId);
});
//given email for test
test("email", () => {
    const setEmail = "kevin@kevin.com"
    const employee = new Employee("kevin", setId, setEmail);
    expect(employee.email).toBe(setEmail);
});
//
test('get name from getName', () => {
    const eName = "kevin"
    const employee = new Employee(eName);
    expect(employee.getName()).toBe(eName);
});
test('get ID from getId', () => {
    const setId = "21"
    const employee = new Employee("kevin", setId);
    expect(employee.setId()).toBe(setId);
});
test('get email from getEmail', () => {
    const setEmail = "kevin@kevin.com"
    const employee = new Employee("kevin", 21, setEmail);
    expect(employee.setId()).toBe(setEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("kevin", 21, "grant@cheese.com");
    expect(employee.getRole()).toBe(testRole);
});