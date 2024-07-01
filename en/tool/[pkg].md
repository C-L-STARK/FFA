---
layout: doc
---

<script setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { params } = useData()

onMounted(() => {
    document.title = params.value.title
})

</script>

<h1>{{ $params.title }}</h1>

## Free Online Experience (Loading may be slow, requires magic)

Of course, you can also use the online experience interface for online experience. The `loading may be slow, please be patient`, and it's best to have an account on [huggingface](https://huggingface.co/). 

<iframe
	:src="params.url"
	frameborder="0"
	width="100%"
	height="1000"
></iframe>