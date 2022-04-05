import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@tiger/components/breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> = Symbol('breadcrumbKey')
