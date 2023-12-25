import { expect, test } from 'vitest'
import { renderHook } from "@testing-library/react";

import { useColors } from './colors'

test('adds 1 + 2 to equal 3', () => {
  const { result } = renderHook(() => useColors())
  expect(result.current.colors).toBe(0)
  
})
