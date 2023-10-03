'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const date = new Date();
    await queryInterface.bulkInsert('news', [
      {
        title: 'Judul berita 1',
        cover: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        author: 'Admin',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isPublic: true,
        createdAt: date,
        updatedAt: date
      },
      {
        title: 'Judul berita 2',
        cover: 'https://plus.unsplash.com/premium_photo-1664197368374-605ce8ec8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        author: 'Admin',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isPublic: true,
        createdAt: date,
        updatedAt: date
      },
      {
        title: 'Judul berita 3',
        cover: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5ld3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        author: 'Admin',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isPublic: true,
        createdAt: date,
        updatedAt: date
      },

      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      },
      {
        "title": "Berita terkini 1",
        "cover": "adasd",
        "author": "adasd",
        "content": "adasd",
        "isPublic": true,
        "createdAt": date,
        "updatedAt": date
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('news', null, {});
  }
};
