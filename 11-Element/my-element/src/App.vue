<template>
  <Button ref="buttonRef">Test Button</Button>
  <Button plain>Plain Button</Button>
  <Button round>Round Button</Button>
  <Button circle>VK</Button>
  <Button disabled>Disabled Button</Button><br /><br />
  <Button type="primary">Primary</Button>
  <Button type="success">Success</Button>
  <Button type="info">Info</Button>
  <Button type="warning">Warning</Button>
  <Button type="danger">Danger</Button><br /><br />
  <Button type="primary" plain>Primary</Button>
  <Button type="success" plain>Success</Button>
  <Button type="info" plain>Info</Button>
  <Button type="warning" plain>Warning</Button>
  <Button type="danger" plain>Danger</Button><br /><br />
  <Button size="large">Large</Button>
  <Button size="small">Small</Button><br /><br />
  <Button size="large" loading>Loading</Button>
  <Button size="large" icon="arrow-up">Icon</Button><br /><br />

  <Collapse accordion >
    <Item name="a" title="Title A">
      <h1>headline title</h1>
      <div> this is content a aaa </div>
    </Item>
    <Item name="b" title="Title B">
      <div> this is bbbbb test </div>
    </Item>
    <Item name="c" title="Disabled Title" disabled>
      <div> this is cccc test </div>
    </Item>
  </Collapse>
  {{ openedItemNames }}
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue';
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import type { ButtonInstance } from './components/Button/types'
import { onMounted, ref } from 'vue';
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
})
const openedItemNames = ref(['a'])
</script>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
