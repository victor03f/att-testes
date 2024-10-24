
const { addUser, getUser, countActiveUsers } = require('./user');
const { sum } = require('./math');

test('adiciona e recupera um usuário', () => {
    const user = { id: 1, name: 'Alice', active: true };
    addUser(user);
    
    expect(getUser(1)).toEqual(user);
});

test('verifica o número total de usuários ativos', () => {
    const user1 = { id: 1, name: 'Alice', active: true };
    const user2 = { id: 2, name: 'Bob', active: false };
    addUser(user1);
    addUser(user2);
    
    const activeCount = countActiveUsers();
    expect(activeCount).toBe(1);
    
    // Verificando se a função de soma está funcionando corretamente
    expect(sum(activeCount, 0)).toBe(1);
});
