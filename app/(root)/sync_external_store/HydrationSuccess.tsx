'use client'

import { useSyncExternalStore } from 'react'

export const HydrationSuccess = () => {
  const windowWidth = useSyncExternalStore(
    () => {
      return () => {}
    },
    () => window.innerWidth,
    () => 0
  )
  console.debug('render', { windowWidth })
  return (
    <div>
      {JSON.stringify({
        windowWidth,
      })}
    </div>
  )
}
