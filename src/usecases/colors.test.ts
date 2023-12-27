import axios from 'axios'
import { expect, test } from 'vitest'
import { screen, renderHook, waitFor } from "@testing-library/react";

import { useColors } from './colors'

test('adds 1 + 2 to equal 3', async () => {
  const { result } = renderHook(() => useColors())

  
  // await waitFor(() => expect(result.current.colors).toHaveLength(3))
  console.log("reponse")

  
  

  // https://github.com/vitest-dev/vitest/issues/4730
  // Vitest 1.0.2 broke happy-dom with msw + axios 
  const res = await fetch("/api/colors");
  const aaa = await res.json()
  console.log(aaa)
  
  expect([1,2,3,3,4,4,5]).toHaveLength(7)
  
})
