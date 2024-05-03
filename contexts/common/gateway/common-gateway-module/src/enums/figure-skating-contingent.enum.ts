import { registerEnumType }        from '@nestjs/graphql'

import { FigureSkatingContingent } from '@common/rpc'

registerEnumType(FigureSkatingContingent, {
  name: 'FigureSkatingContingent',
})

export { FigureSkatingContingent }
