/* eslint-disable no-template-curly-in-string */

import type { TemplateBuilder } from '@babel/template'
import type { types as t }      from '@babel/core'

interface TemplateVariables {
  componentName: string
  interfaces: Array<t.TSInterfaceDeclaration>
  props: Array<t.Identifier | t.ObjectPattern>
  imports: Array<t.ImportDeclaration>
  exports: Array<t.ExportDeclaration | t.Statement | t.VariableDeclaration>
  jsx: t.JSXElement
}

interface TemplateContext {
  tpl: TemplateBuilder<string>['ast']
}

export default (variables: TemplateVariables, { tpl }: TemplateContext): string => tpl`
  /* eslint-disable @typescript-eslint/no-redundant-type-constituents */
  
  import type { ReactElement }  from 'react'
  import type { SVGProps }      from 'react'

  import React                  from 'react'
  
  import { vars }               from '@ui/theme'
  
  const getColor = (color: undefined | string | keyof typeof vars.colors): undefined | keyof typeof vars.colors => {
    if (color) {
      return vars?.colors[color as keyof typeof vars.colors] as keyof typeof vars.colors
    }
  
    return undefined
  }

  export interface ${`${variables.componentName}Props`} extends Omit<SVGProps<SVGSVGElement>, 'color'> {
    color?: string | ${'`$${keyof typeof vars.colors}`'}
  }

  export const ${`${variables.componentName}`} = ({ color, ...props }: ${`${variables.componentName}Props`}): ReactElement => (
    ${variables.jsx}
  );
  `
