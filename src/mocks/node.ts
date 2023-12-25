import { setupServer } from 'msw/node'
import { handlers } from './handlersREST'

export const server = setupServer(...handlers)