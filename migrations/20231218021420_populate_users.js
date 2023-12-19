/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex('users').insert([
        {
            name: 'Diego Fernandes',
            email: 'teste123@gmail.com',
            password: 'teste',
            avatar: 'teste',
            whatsapp: 'teste',
            bio: 'teste'
        },
        {
            name: 'Diego Fernandes2',
            email: 'teste12@gmail.com',
            password: 'teste',
            avatar: 'teste',
            whatsapp: 'teste',
            bio: 'teste'
        },
        {
            name: 'Diego Fernandes3',
            email: 'teste31@gmail.com',
            password: 'teste',
            avatar: 'teste',
            whatsapp: 'teste',
            bio: 'teste'
        },
        {
            name: 'Diego Fernandes4',
            email: 'teste2@gmail.com',
            password: 'teste',
            avatar: 'teste',
            whatsapp: 'teste',
            bio: 'teste'
        },

     ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
