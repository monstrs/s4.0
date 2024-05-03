import { useUnit } from "effector-react";

import { createFigureSkatingOrganizationAttachFx } from '../effects/index.js'

export const useCreateFigureSkatingOrganization = () => useUnit(createFigureSkatingOrganizationAttachFx)