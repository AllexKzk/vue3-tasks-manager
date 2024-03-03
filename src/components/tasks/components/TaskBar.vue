<template>
  <AccordionCustom title="Filters" variant="outlined">
    <div class="bar-container">
      <InputCustom v-model="state.name" :active="true" style="width: 100%;" label="Tasks name" />
      <InputCustom v-model="state.date" :active="true" style="width: 100%;" label="Date" type="date" />
      <ButtonCustom variant="outlined" class="cross" @click="reset">
        <CrossIcon style="width: 1.2em; height: 1.2em;" />
      </ButtonCustom>
    </div>
  </AccordionCustom>
</template>
<script setup lang="ts">
import AccordionCustom from '@/components/common/AccordionCustom.vue';
import InputCustom from '@/components/common/InputCustom.vue';
import CrossIcon from '@/components/common/icons/CrossIcon.vue';
import ButtonCustom from '@/components/common/ButtonCustom.vue';
import { reactive, watch } from 'vue';

const state = reactive({
  name: '',
  date: undefined
})

const emit = defineEmits(['change'])
const emitUpdate = () => emit('change', { name: state.name, date: state.date })
watch(
  () => state,
  emitUpdate,
  { deep: true }
)

const reset = () => {
  state.name = ''
  state.date = undefined
  emitUpdate()
}
</script>
<style scoped>
.bar-container {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 1em 0.5em 0.2em 0.5em;
  svg {
    width: 1em;
  }
  .search {
    display: flex;
  }
}
.cross {
  margin: auto;
  svg {
    filter: invert(52%) sepia(73%) saturate(4862%) hue-rotate(154deg) brightness(93%) contrast(87%);
  }
  &:hover {
    svg {
      filter: invert(96%) sepia(100%) saturate(0%) hue-rotate(62deg) brightness(103%) contrast(107%);
    }
  }
}
</style>