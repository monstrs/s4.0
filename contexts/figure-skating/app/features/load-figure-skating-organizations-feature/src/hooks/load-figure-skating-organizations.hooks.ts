'use client'

import { useUnit }                   from 'effector-react'

import { loadFigureSkatingOrganizationsFx } from '../effects/index.js'

export const useLoadFigureSkatingOrganizationsEvents = (): () => void => useUnit(loadFigureSkatingOrganizationsFx)
