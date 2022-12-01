<template>
    <div class="rarityTag" ref="tag">
        {{rarity}}
    </div>
</template>
<script setup lang="ts">
import { defineProps,onMounted,ref } from 'vue'
import { Rarity } from '@/ts/types'

const props = defineProps({
    rarity: {
        type: String as () => Rarity,
        required: true
    }
})

const tag = ref<HTMLDivElement | null>(null)
onMounted(() => {
    if (tag.value == null) return;
    tag.value.classList.add(props.rarity.toString());
})
</script>
<style lang="scss" scoped>
    .rarityTag{
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 0.2rem 0.5rem;
        font-size: 1rem;
        font-style: italic;
    }
    .common{
        background-color: #b3b3b3;
    }
    .uncommon{
        background-color: #2cbb5c;
    }
    .rare{
        background-color: #4392e1;
    }
    .epic{
        background-color: #a64de1;
    }
    .legendary{
        background-color: #e1a64d;
    }
</style>