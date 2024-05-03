import { registerEnumType }         from '@nestjs/graphql'

import { FigureSkatingDisciplines } from '@common/rpc'

registerEnumType(FigureSkatingDisciplines, {
  name: 'FigureSkatingDisciplines',
})

export { FigureSkatingDisciplines }
