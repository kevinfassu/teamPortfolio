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
    expect(employee.eName)toBe(eName);
});
// givin id for test
test("set ID", () => {
    const setId = 21;
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
    const testName = "Grant"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "100"
    const employee = new Employee("Grant", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "grant@cheese.com"
    const employee = new Employee("Grant", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Grant", 1, "grant@cheese.com");
    expect(employee.getRole()).toBe(testRole);
});