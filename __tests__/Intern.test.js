
const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('John@test.com');
    expect(intern.school).toBe('Uconn');
    expect(intern.role).toBe('Intern')
});

test('gets Intern name', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.getName()).toEqual('John');
});

test('gets Intern id', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.getId()).toEqual('1');
});

test('gets Intern email', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.getEmail()).toEqual('John@test.com');
});

test('gets Intern school', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.getSchool()).toEqual('Uconn');
});

test('gets Intern role', () => {
    const intern = new Intern('John', '1', 'John@test.com', 'Uconn');
    expect(intern.getRole()).toEqual('Intern');
});