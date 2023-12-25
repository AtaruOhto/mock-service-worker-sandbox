// src/mocks/browser.js
import { setupWorker } from 'msw/browser'
import { handlers } from './handlersREST'
 
export const worker = setupWorker(...handlers)