import { useUnit }                                 from 'effector-react'
import { useState }              from 'react'
import { useEffect }             from 'react'

import { createFigureSkatingOrganizationAttachFx } from '../effects/index.js'

export const useCreateFigureSkatingOrganization = () =>
  useUnit(createFigureSkatingOrganizationAttachFx)

export const useCreateFigureSkatingOrganizationComplete = (): boolean => {
  const [complete, setComplete] = useState<boolean>(false)

  useEffect(() => {
    const { unsubscribe: unsubscribeFinally } = createFigureSkatingOrganizationAttachFx.finally.watch((value) => {
      if (value.status === 'done') {
        setComplete(true)
      }
    })

    return () => {
      unsubscribeFinally()
    }
  }, [setComplete])

  return complete
}