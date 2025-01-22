// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  // Mock GET request to fetch users
  rest.get('http://localhost:5000/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, username: 'sunusi_adam', password: 'password123' },
        { id: 2, username: 'mohd_ali', password: 'password456' }
      ])
    );
  }),

  // Mock POST request for login
  rest.post('http://localhost:5000/login', (req, res, ctx) => {
    const { username, password } = req.body;
    const users = [
      { id: 1, username: 'sunusi_adam', password: 'password123' },
      { id: 2, username: 'mohd_ali', password: 'password456' }
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return res(
        ctx.status(200),
        ctx.json({ message: 'Login successful', user })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: 'Invalid username or password' })
      );
    }
  })
];