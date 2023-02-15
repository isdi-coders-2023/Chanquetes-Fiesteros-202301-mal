// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/location/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Earth (C-137)",
      })
    );
  }),
  rest.get(`https://rickandmortyapi.com/api/character/1`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "Rick Sanchez",
      })
    );
  }),
];
