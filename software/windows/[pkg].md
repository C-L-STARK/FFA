---
layout: doc
---

<script setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { params } = useData()

onMounted(() => {
    document.title = params.value.title + ' For Windows'
})

</script>

<h1>{{ $params.title }} For Windows</h1>

::: info
{{ $params.lu }}到[我们的邮箱](mailto:jarvis@20999999@gmail.com)
:::

软件下载地址：
<a v-for="dl in $params.download" :href="dl.url" style="margin-left: 20px;" target="_blank">
    {{ dl.type === 'bdwp' ? '百度网盘' : '夸克网盘/123网盘' }}
</a>

对应访问密码：
<span v-for="dl in $params.download" style="margin-left: 20px;">
    {{ dl.type === 'bdwp' ? '百度网盘(' + dl.pwd + ')' : '夸克网盘/123网盘：(' + dl.pwd + ')' }}
</span>

<!-- @content -->
