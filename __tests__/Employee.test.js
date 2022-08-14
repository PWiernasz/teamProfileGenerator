const Employee = require('../lib/Employee')

test('creates an Employee object', () => {
    const employee = new Employee('John', '1', 'John@test.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('John@test.com');
});

test('gets employee name', () => {
    const employee = new Employee('John', '1', 'John@test.com');
    expect(employee.getName()).toEqual('John');
});

test('gets employee id', () => {
    const employee = new Employee('John', '1', 'John@test.com');
    expect(employee.getId()).toEqual('1');
});

test('gets employee email', () => {
    const employee = new Employee('John', '1', 'John@test.com');
    expect(employee.getEmail()).toEqual('John@test.com');
});