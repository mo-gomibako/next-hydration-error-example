'use client'

import { useState } from 'react'

export const HydrationFailed = () => {
  const [windowWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  return (
    <div>
      {JSON.stringify({
        windowWidth,
      })}
    </div>
  )
}
