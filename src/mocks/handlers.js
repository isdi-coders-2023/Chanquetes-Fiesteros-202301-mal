// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/location/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          id: 1,
          name: "Earth (C-137)",
        },
        {
          id: 2,
          name: "Abadango",
        },
        {
          id: 3,
          name: "Citadel of Ricks",
        }
      )
    );
  }),
];
