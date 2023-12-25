// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'
 
export const handlers = [
    http.get('/api/colors', () => {
      return HttpResponse.json([
        {
          color: "red",
          value: "#f00"
        },
        {
          color: "green",
          value: "#0f0"
        },
        {
          color: "blue",
          value: "#00f"
        },
        {
          color: "cyan",
          value: "#0ff"
        },
        {
          color: "magenta",
          value: "#f0f"
        },
        {
          color: "yellow",
          value: "#ff0"
        },
        {
          color: "black",
          value: "#000"
        }
      ])
    }),
  ]