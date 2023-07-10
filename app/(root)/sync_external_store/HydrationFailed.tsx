'use client'

import { useSyncExternalStore } from 'react'

export const HydrationSuccess = () => {
  const windowWidth = useSyncExternalStore(
    () => {
      return () => {}
    },
    () => window.innerWidth.toString(),
    () => `${typeof window !== 'undefined'}`
  )
  return (
    <div>
      {JSON.stringify({
        windowWidth,
      })}
    </div>
  )
}
