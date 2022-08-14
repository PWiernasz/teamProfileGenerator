const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.name).toBe('John');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('John@test.com');
    expect(manager.office).toBe('1');
    expect(manager.role).toBe('Manager')
});

test('gets manager name', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.getName()).toEqual('John');
});

test('gets manager id', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.getId()).toEqual('1');
});

test('gets manager email', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.getEmail()).toEqual('John@test.com');
});

test('gets manager office number', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.getOffice()).toEqual('1');
});

test('gets manager role', () => {
    const manager = new Manager('John', '1', 'John@test.com', '1');
    expect(manager.getRole()).toEqual('Manager');
});