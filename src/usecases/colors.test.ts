import { expect, test } from 'vitest'
import { renderHook, waitFor } from "@testing-library/react";

import { useColors } from './colors'

test('get colors', async () => {
  const { result } = renderHook(() => useColors())
  await waitFor(() => expect(result.current.colors).toHaveLength(7))  
})
