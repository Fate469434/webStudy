<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
  {{ console.log(props) }}
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
// 设置开发工具中的组件名
defineOptions({
  name: 'VkCollapse'
})
const props = withDefaults(defineProps<CollapseProps>(),{
  modelValue:()=>[],
  accordion:false
})
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)

watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item')
}

const handleItemClick = (item: NameType) => {
  console.log(props);
  
  let _activeNames = [...activeNames.value]
  if (props.accordion) { //如果手风琴效果打开
    _activeNames = activeNames.value[0] === item ? [] : [item]
    activeNames.value = _activeNames
  }
  else {
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      _activeNames.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      _activeNames.push(item)
    }
    activeNames.value = _activeNames
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style>
.vk-collapse {
  --vk-collapse-border-color: var(--vk-border-color-light);
  --vk-collapse-header-height: 48px;
  --vk-collapse-header-bg-color: var(--vk-fill-color-blank);
  --vk-collapse-header-text-color: var(--vk-text-color-primary);
  --vk-collapse-header-font-size: 13px;
  --vk-collapse-content-bg-color: var(--vk-fill-color-blank);
  --vk-collapse-content-font-size: 13px;
  --vk-collapse-content-text-color: var(--vk-text-color-primary);
  --vk-collapse-disabled-text-color: var(--vk-disabled-text-color);
  --vk-collapse-disabled-border-color: var(--vk-border-color-lighter);
  border-top: 1px solid var(--vk-collapse-border-color);
  border-bottom: 1px solid var(--vk-collapse-border-color);
}
</style>