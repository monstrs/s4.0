import type { FC } from 'react'

import React       from 'react'

export interface SpaceProps {
  count?: number
}

const Space: FC<SpaceProps> = ({ count = 1 }) => (
  <span style={{ display: 'inline-flex' }}>{'\u00A0'.repeat(count)}</span>
)

export { Space }
