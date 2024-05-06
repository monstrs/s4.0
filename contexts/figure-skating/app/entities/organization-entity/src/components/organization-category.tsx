import { OrganizationCategory } from "../enums/index.js";

export interface OrganizationCategoryViewProps {
    children: OrganizationCategory
}

export const OrganizationCategoryView = ({ children }: OrganizationCategoryViewProps): string => {
    if (children === OrganizationCategory.Federation) {
        return 'ассоциация/федерация'
    }

    if (children === OrganizationCategory.School) {
        return 'школа/клуб'
    }

    if (children === OrganizationCategory.Society) {
        return 'общество'
    }

    return 'другое'
}