import type { PropType } from "vue";

import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number

// export const collapseItemProps = {
//   name:{
//     type: [NameType]
//   },
//   title:{
//     type: String
//   },
//   disabled:{
//     type: Boolean
//   }
// }

// export const collapseProps = {
//   modelValue: {
//     // type: Array as () => Array<NameType>
//   },
//   accordian: {
//     type: Boolean
//   }
// }

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void;
  (e: 'change', values: NameType[]): void;
}
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')