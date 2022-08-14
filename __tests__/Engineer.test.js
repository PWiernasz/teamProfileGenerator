
const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('John@test.com');
    expect(engineer.github).toBe('John');
    expect(engineer.role).toBe('Engineer')
});

test('gets engineer name', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.getName()).toEqual('John');
});

test('gets engineer id', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.getId()).toEqual('1');
});

test('gets engineer email', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.getEmail()).toEqual('John@test.com');
});

test('gets engineer Github account', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.getGithub()).toEqual('John');
});

test('gets engineer role', () => {
    const engineer = new Engineer('John', '1', 'John@test.com', 'John');
    expect(engineer.getRole()).toEqual('Engineer');
});