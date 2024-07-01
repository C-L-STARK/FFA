import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "FFA (Free For All), Free AI Tools, API Keys, News & Courses ",
  description: "Discover a treasure trove of free AI tools, API keys, news, and courses. Get your hands on GPT-3.5, Stable Diffusion, Midjourney, TTS, STT, AI translation, and more – all for free! Photon AI is your gateway to the world of AI, empowering you with knowledge and resources. ",
  lastUpdated: true,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png"}],
    ['link', { rel: "icon", sizes: "32x32", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png"}],
    ['link', { rel: "icon", sizes: "16x16", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png"}],
    ['link', { rel: "mask-icon", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png"}],
    ['link', { rel: "shortcut icon", href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png"}],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-J070L3EGGL' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J070L3EGGL');`
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GDPVLG5X24' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GDPVLG5X24');`
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-J070L3EGGL' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J070L3EGGL');`
    ],
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo.png'
  },
  sitemap: {
    hostname: 'https://free.fastx-ai.com'
  },
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      title: '免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程',
      description: '免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程，探索丰富的免费 AI 工具、API 密钥、新闻和课程。获取 GPT-3.5、Stable Diffusion、Midjourney、TTS、STT、AI 翻译等 – 全部免费！ 通往 AI 世界的桥梁，为您提供知识和资源',
      themeConfig: {
        siteTitle: '免费攻略 FFA',
        nav: [
          { text: '主页', link: '/' },
          {
            text: '大语言模型',
            items: [
              { text: 'Open-gpt-4o', link: '/chat/open-gpt-4o' },
              { text: 'Glm-4v-9b', link: '/chat/glm-4v-9b' },
              { text: 'Google-Gemma-2-9B', link: '/chat/Google-Gemma-2-9B' },
              { text: 'Gpt-3.5-turbo', link: '/chat/fastx-ai' },
              { text: 'Qwen2-7B-instruct', link: '/chat/Qwen2-7B-instruct' },
              { text: 'Meta-Llama-2-7B', link: '/chat/Meta-Llama-2-7B' },
              { text: 'Meta-Llama-2-13B', link: '/chat/Meta-Llama-2-13B' },
              { text: 'Meta-Llama-3-8B', link: '/chat/Meta-Llama-3-8B' },
              { text: 'IDEFICS2-Instruction', link: '/chat/IDEFICS2-Instruction' },
            ]
          },
          {
            text: '绘画',
            items: [
              { text: 'Free Stable Diffusion 3 Medium 1', link: '/draw/stabilityai-stable-diffusion-3-medium' },
              { text: 'Free Stable Diffusion 3 Medium 2', link: '/draw/markmagic-stable-diffusion-3' },
              { text: 'Free DALLE-4K', link: '/draw/mukaist-dalle-4k' },
              { text: 'Free Midjourney', link: '/draw/mukaist-midjourney' },
              { text: 'Free STABLE HAMSTER 🐹', link: '/draw/prithivmlmods-stable-hamster' },
              { text: 'Free 卡通图片生成', link: '/draw/cagliostrolab-animagine-xl-3-1' },
              { text: 'Free DALL-E 3 XL V2', link: '/draw/ehristoforu-dalle-3-xl-lora-v2' },
              { text: 'FlashSD: StableDiffusion3 蒸馏模型', link: '/draw/jasperai-flash-sd3' },
              { text: '三要素图像合成（风格、人物、动作）', link: '/draw/okaris-omni-zero' },
              { text: 'PixArt-Sigma 1024px', link: '/draw/pixart-alpha-pixart-sigma' },
              { text: '在线绘图 V2.5', link: '/draw/playgroundai-playground-v2-5' },
              { text: 'GALLO 3XL在线绘图', link: '/draw/prithivmlmods-gallo-3xl' },
              { text: 'Free 4K Image Generate', link: '/draw/prithivmlmods-imagineo-4k' },
              { text: '腾讯-混元绘图', link: '/draw/tencent-hunyuan-hunyuandit' },
            ]
          },
          {
            text: '多媒体',
            items: [
              { text: '视频翻译 SoniTranslate', link: '/media/r3gm-sonitranslate-translate-audio-of-a-video-content' },
              { text: '图像高清放大', link: '/media/gokaygokay-aurasr' },
              { text: '视频背景去除（永久免费）', link: '/media/amirgame197-remove-video-background' },
              { text: '图片背景去除（永久免费）', link: '/media/schroneko-transparent-background' },
              { text: '根据指令给视频添加背景音效', link: '/media/ymzhang319-foleycrafter' },
              { text: '文生音频 Stable Audio Generator', link: '/media/artificialguybr-stable-audio-open-zero' },
              { text: '文生音频 ChatTTS Forge', link: '/media/lenml-chattts-forge' },
              { text: '音频转文字 Whisper Large V3:  Transcribe Audio', link: '/media/hf-audio-whisper-large-v3' },
              { text: '文生视频 Open-Sora', link: '/media/kadirnar-open-sora' },
              { text: '文生视频 AnimateDiff-Lightning', link: '/media/bytedance-animatediff-lightning' },
              { text: '文生视频 Adaface animate', link: '/media/adaface-neurips-adaface-animate' },
              { text: '文生视频 Animagine XL 3.0', link: '/media/linaqruf-animagine-xl' },
              { text: '图生视频 Stable Video Diffusion Img2Vid', link: '/media/xi0v-stable-video-diffusion-img2vid' },
              { text: '视频内容分析 VideoLLaMA 2', link: '/media/lixin4ever-videollama2' },
              { text: '腾讯头像制作', link: '/media/tencentarc-photomaker' },
              { text: 'Face to All 头像制作', link: '/media/multimodalart-face-to-all' },
              { text: '图像内容识别', link: '/media/gokaygokay-florence-2' },
              { text: '图片内容识别（多模态源信息）', link: '/media/epfl-vilab-4m' },
              { text: 'IC-Light 修改图片光源', link: '/media/lllyasviel-ic-light' },
              { text: '图片提取prompt，并转换成线条图', link: '/media/tori29umai-sketch2lineart' },
              { text: '图片景深计算', link: '/media/depth-anything-depth-anything-v2' },
              { text: '视频景深计算', link: '/media/jhshao-chronodepth' },
              { text: '按照提示词进行视频编辑', link: '/media/koi953215-narcan-demo' },
              { text: '获得详细的图片描述', link: '/media/gokaygokay-sd3-long-captioner' },
              { text: '生成 3D模型的全景视频（环绕一周）', link: '/media/ashawkey-lgm' },
              { text: '根据图片生成GLB格式的3D模型', link: '/media/wuvin-unique3d' },
              { text: '卡通视频生成（2秒）', link: '/media/doubiiu-tooncrafter' },
              { text: '图生视频（4秒）', link: '/media/modelscope-exvideo-svd-128f-v1' },
              { text: '图生视频（3秒）AnimateLCM', link: '/media/wangfuyun-animatelcm-svd' },
              { text: '混图 PuLID', link: '/media/yanze-pulid' },
              { text: '去除 3D 图片背景，并生成 3D （多视角）模型', link: '/media/tencentarc-instantmesh' },
              { text: '音频生成 AICoverGen', link: '/media/r3gm-aicovergen' },
              { text: '图片转音频', link: '/media/fffiloni-image-to-music-v2' },
              { text: 'IP-Adapter-FaceID Plus', link: '/media/multimodalart-ip-adapter-faceid' },
            ]
          },
          {
            text: '工具',
            items: [
              { "text": "屏幕截图转HTML", "link": "/tool/huggingfacem4-screenshot2html" },
              { "text": "AI 换衣 OOTDiffusion", "link": "/tool/levihsu-ootdiffusion" },
              { "text": "AI 换衣", "link": "/tool/yisol-idm-vton" },
              { "text": "视频转VR", "link": "/tool/koi953215-diffir2vr" },
              { "text": "Emoji 生成", "link": "/tool/cfahlgren1-emoji-generator-by-fofr" },
              { "text": "指令预训练", "link": "/tool/davanstrien-instruction-synthesizer" },
              { "text": "数学解题专家", "link": "/tool/tonic-math" },
              { "text": "开源大模型排行榜", "link": "/tool/open-llm-leaderboard-open-llm-leaderboard" }
            ]
          },
          {
            text: 'API Key',
            link: '/api-key'
          },
          {
            text: '软件',
            link: '/software'
          },
          {
            text: '免费体验',
            link: '/fk-pay'
          },
          { text: '关于我们', link: '/about' }
        ],

        sidebar: {
          '/chat/': [{
            text: '聊天',
            items: [
              { text: 'Free Open-gpt-4o', link: '/chat/open-gpt-4o' },
              { text: 'Free Glm-4v-9b', link: '/chat/glm-4v-9b' },
              { text: 'Free Google-Gemma-2-9B', link: '/chat/Google-Gemma-2-9B' },
              { text: 'Free Gpt-3.5-turbo', link: '/chat/fastx-ai' },
              { text: 'Free Qwen2-7B-instruct', link: '/chat/Qwen2-7B-instruct' },
              { text: 'Free Meta-Llama-2-7B', link: '/chat/Meta-Llama-2-7B' },
              { text: 'Free Meta-Llama-2-13B', link: '/chat/Meta-Llama-2-13B' },
              { text: 'Free Meta-Llama-3-8B', link: '/chat/Meta-Llama-3-8B' },
              { text: 'Free IDEFICS2-Instruction', link: '/chat/IDEFICS2-Instruction' },
            ]
          }],
          '/draw/': [{
            text: '绘画',
            items: [
              { text: 'Free Stable Diffusion 3 Medium 1', link: '/draw/stabilityai-stable-diffusion-3-medium' },
              { text: 'Free Stable Diffusion 3 Medium 2', link: '/draw/markmagic-stable-diffusion-3' },
              { text: 'Free DALLE-4K', link: '/draw/mukaist-dalle-4k' },
              { text: 'Free Midjourney', link: '/draw/mukaist-midjourney' },
              { text: 'Free STABLE HAMSTER 🐹', link: '/draw/prithivmlmods-stable-hamster' },
              { text: 'Free 卡通图片生成', link: '/draw/cagliostrolab-animagine-xl-3-1' },
              { text: 'Free DALL-E 3 XL V2', link: '/draw/ehristoforu-dalle-3-xl-lora-v2' },
              { text: 'FlashSD: StableDiffusion3 蒸馏模型', link: '/draw/jasperai-flash-sd3' },
              { text: '三要素图像合成（风格、人物、动作）', link: '/draw/okaris-omni-zero' },
              { text: 'PixArt-Sigma 1024px', link: '/draw/pixart-alpha-pixart-sigma' },
              { text: '在线绘图 V2.5', link: '/draw/playgroundai-playground-v2-5' },
              { text: 'GALLO 3XL在线绘图', link: '/draw/prithivmlmods-gallo-3xl' },
              { text: 'Free 4K Image Generate', link: '/draw/prithivmlmods-imagineo-4k' },
              { text: '腾讯-混元绘图', link: '/draw/tencent-hunyuan-hunyuandit' },
            ]
          }],
          '/media/': [{
            text: '多媒体',
            items: [
              { text: '视频翻译 SoniTranslate', link: '/media/r3gm-sonitranslate-translate-audio-of-a-video-content' },
              { text: '图像高清放大', link: '/media/gokaygokay-aurasr' },
              { text: '视频背景去除（永久免费）', link: '/media/amirgame197-remove-video-background' },
              { text: '图片背景去除（永久免费）', link: '/media/schroneko-transparent-background' },
              { text: '根据指令给视频添加背景音效', link: '/media/ymzhang319-foleycrafter' },
              { text: '文生音频 Stable Audio Generator', link: '/media/artificialguybr-stable-audio-open-zero' },
              { text: '文生音频 ChatTTS Forge', link: '/media/lenml-chattts-forge' },
              { text: '音频转文字 Whisper Large V3:  Transcribe Audio', link: '/media/hf-audio-whisper-large-v3' },
              { text: '文生视频 Open-Sora', link: '/media/kadirnar-open-sora' },
              { text: '文生视频 AnimateDiff-Lightning', link: '/media/bytedance-animatediff-lightning' },
              { text: '文生视频 Adaface animate', link: '/media/adaface-neurips-adaface-animate' },
              { text: '文生视频 Animagine XL 3.0', link: '/media/linaqruf-animagine-xl' },
              { text: '图生视频 Stable Video Diffusion Img2Vid', link: '/media/xi0v-stable-video-diffusion-img2vid' },
              { text: '视频内容分析 VideoLLaMA 2', link: '/media/lixin4ever-videollama2' },
              { text: '腾讯头像制作', link: '/media/tencentarc-photomaker' },
              { text: 'Face to All 头像制作', link: '/media/multimodalart-face-to-all' },
              { text: '图像内容识别', link: '/media/gokaygokay-florence-2' },
              { text: '图片内容识别（多模态源信息）', link: '/media/epfl-vilab-4m' },
              { text: 'IC-Light 修改图片光源', link: '/media/lllyasviel-ic-light' },
              { text: '图片提取prompt，并转换成线条图', link: '/media/tori29umai-sketch2lineart' },
              { text: '图片景深计算', link: '/media/depth-anything-depth-anything-v2' },
              { text: '视频景深计算', link: '/media/jhshao-chronodepth' },
              { text: '按照提示词进行视频编辑', link: '/media/koi953215-narcan-demo' },
              { text: '获得详细的图片描述', link: '/media/gokaygokay-sd3-long-captioner' },
              { text: '生成 3D模型的全景视频（环绕一周）', link: '/media/ashawkey-lgm' },
              { text: '根据图片生成GLB格式的3D模型', link: '/media/wuvin-unique3d' },
              { text: '卡通视频生成（2秒）', link: '/media/doubiiu-tooncrafter' },
              { text: '图生视频（4秒）', link: '/media/modelscope-exvideo-svd-128f-v1' },
              { text: '图生视频（3秒）AnimateLCM', link: '/media/wangfuyun-animatelcm-svd' },
              { text: '混图 PuLID', link: '/media/yanze-pulid' },
              { text: '去除 3D 图片背景，并生成 3D （多视角）模型', link: '/media/tencentarc-instantmesh' },
              { text: '音频生成 AICoverGen', link: '/media/r3gm-aicovergen' },
              { text: '图片转音频', link: '/media/fffiloni-image-to-music-v2' },
              { text: 'IP-Adapter-FaceID Plus', link: '/media/multimodalart-ip-adapter-faceid' },
            ]
          }],
          '/tool/': [{
            text: '工具',
            items: [
              { "text": "屏幕截图转HTML", "link": "/tool/huggingfacem4-screenshot2html" },
              { "text": "AI 换衣 OOTDiffusion", "link": "/tool/levihsu-ootdiffusion" },
              { "text": "AI 换衣", "link": "/tool/yisol-idm-vton" },
              { "text": "视频转VR", "link": "/tool/koi953215-diffir2vr" },
              { "text": "Emoji 生成", "link": "/tool/cfahlgren1-emoji-generator-by-fofr" },
              { "text": "指令预训练", "link": "/tool/davanstrien-instruction-synthesizer" },
              { "text": "数学解题专家", "link": "/tool/tonic-math" },
              { "text": "开源大模型排行榜", "link": "/tool/open-llm-leaderboard-open-llm-leaderboard" }
            ]
          }],
          '/api-key/': [{
            text: 'API Key',
            items: [
              
            ]
          }],
          '/software/': [{
            text: '软件',
            items: [
            ]
          }],
          '/fk-pay/': [{
            text: '免费体验',
            items: [
            ]
          }],
          '/about/': [{
            text: '关于',
            items: [
              { text: '关于我们', link: '/about' },
              { text: '联系我们', link: '/about/concat' }
            ]
          }],
        },
    
        footer: {
          copyright: '版权所有 © 2020-至今, 免费体验 FFA!'
        },
    
        socialLinks: [
          {
            icon: {
              svg: `
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 68 68" viewBox="0 0 68 68" id="project-launch"><path fill="#FFF" d="M33.45498,48.77941L19.21925,34.5437c2.53175-6.8032,6.49908-12.90624,11.53427-17.94142
          c9.02375-9.02374,21.4632-14.60347,35.2393-14.60343c0,0.15556-0.00708,0.3182-0.00708,0.47376
          C65.80184,23.73075,52.30161,41.75698,33.45498,48.77941z"></path><path fill="#DFE1E6" d="M33.45498,48.77941L19.21925,34.5437C45.85199,49.50779,63.52472,8.58274,65.98573,2.47261
          C65.80184,23.73075,52.30161,41.75698,33.45498,48.77941z"></path><line x1="22.298" x2="26.335" y1="45.7" y2="41.663" fill="#DFE1E6"></line><path fill="#FAC41D" d="M19.21933 34.5379l-7.64673-7.64671c-2.02175-2.02175-.59303-5.48122 2.27332-5.47223l14.22417-1.89601C24.2962 23.9259 21.286 29.00271 19.21933 34.5379zM41.09917 56.41768l-7.63773-7.63771c5.53514-2.06673 10.61201-5.07687 15.0149-8.85082L46.58035 54.1533C46.58041 57.0107 43.12992 58.44843 41.09917 56.41768z"></path><path fill="#F4A01E" d="M47.72153,45.60803c-3.37858,2.56986-7.09857,4.70848-11.08821,6.34381l-3.17188-3.17187
          c5.53514-2.06673,10.61201-5.07687,15.0149-8.85082L47.72153,45.60803z"></path><path fill="#F37D7F" d="M61.84764,21.87049c2.65355-6.08927,4.15073-12.79855,4.15072-19.87051l0.00011-0.00011h-0.00033
          c-7.07197,0.00001-13.7812,1.49713-19.87048,4.15068L61.84764,21.87049z"></path><path fill="#F37D7F" d="M61.84764,21.87049c2.65355-6.08927,4.15073-12.79855,4.15072-19.87051l0.00011-0.00011h-0.00033
          c-7.07197,0.00001-13.7812,1.49713-19.87048,4.15068L61.84764,21.87049z"></path><path fill="#EF3F3E" d="M61.84536,21.92138c2.60388-5.96388,4.08055-12.53331,4.14038-19.44877
          c-0.87061,2.16154-3.64719,8.68072-8.04852,15.54063L61.84536,21.92138z"></path><circle cx="43.771" cy="24.227" r="6.354" fill="#5EA7DC"></circle><path fill="#FFF" d="M21.79724,55.17124c-0.01004-0.01004-0.02123-0.01831-0.03131-0.02831
          c0.18341-0.14662,0.36188-0.30226,0.5318-0.47218c2.47713-2.47713,2.47713-6.49331,0-8.97044
          c-2.47709-2.47708-6.49332-2.47712-8.97046,0.00001c-0.16992,0.16992-0.32556,0.34838-0.47218,0.5318
          c-0.01-0.01009-0.01827-0.02127-0.02831-0.03131c-2.47714-2.47713-6.49332-2.47712-8.97046,0.00001
          c-2.47713,2.47713-2.47713,6.49332,0,8.97044c2.47714,2.47713,6.49332,2.47713,8.97046-0.00001
          c0.16992-0.16993,0.16992-0.16993,0,0c-2.47713,2.47713-2.47709,6.49336,0,8.97045
          c2.47714,2.47713,6.49337,2.47717,8.9705,0.00003C24.27442,61.66459,24.27438,57.64837,21.79724,55.17124z"></path><path fill="#DFE1E6" d="M21.80049,64.13953c-2.48224,2.48224-6.49908,2.48219-8.97424,0.00703
          c-1.49216-1.49216-2.08622-3.54298-1.77505-5.46655c0.24042,0.42429,0.55159,0.82032,0.91934,1.18807
          c2.47516,2.47516,6.49204,2.47516,8.96721,0c0.99004-0.99004,1.58406-2.2347,1.78209-3.52183
          C24.22615,58.78611,23.91498,62.02504,21.80049,64.13953z"></path><path fill="#010101" d="M32.40051 52.66987c-.39063-.39063-1.02344-.39063-1.41406 0l-2.69531 2.6958c-.39063.39063-.39063 1.02393 0 1.41406.39063.39063 1.02344.39063 1.41406 0l2.69531-2.6958C32.79114 53.69331 32.79114 53.06001 32.40051 52.66987zM15.32825 35.59761c-.39063-.39063-1.02344-.39063-1.41406 0l-2.6958 2.69531c-.39063.39014-.39063 1.02344 0 1.41406s1.02344.39063 1.41406 0l2.6958-2.69531C15.71887 36.62153 15.71887 35.98823 15.32825 35.59761z"></path><path fill="#010101" d="M66.99817,1.99995v-1h-1c-12.06359,0-21.36403,4.77552-21.86816,4.94482l0.03687,0.03687
          c-6.30603,3.01691-11.95984,7.30597-16.57245,12.59564l-13.81744,1.8421c-1.70801,0.02197-3.16992,1.01074-3.82471,2.59229
          c-0.66406,1.60205-0.31396,3.35938,0.91309,4.58643l7.19171,7.19214l-0.00226,0.0061l6.86627,6.86652l-2.67694,2.67664
          c-2.84517-2.16568-6.84277-1.96968-9.46228,0.4964c-2.83018-2.15799-6.96385-2.01125-9.63281,0.65771
          c-2.86328,2.86328-2.86279,7.52197,0.00049,10.38477c1.91769,1.91769,4.61926,2.5505,7.06201,1.91162
          c-0.63721,2.44141-0.00098,5.14941,1.9082,7.05859c2.8656,2.86662,7.51516,2.87062,10.38477,0
          c2.60255-2.60255,2.87516-6.70684,0.65283-9.62793c2.47328-2.62113,2.66618-6.62371,0.50098-9.46722l2.67682-2.67651
          l6.86615,6.86639l0.00702-0.00262l7.1839,7.18427c2.65216,2.65216,7.12643,0.77394,7.1875-2.90088l1.84247-13.82172
          c5.28906-4.6123,9.57764-10.26569,12.5943-16.57111l0.03687,0.03687C62.28784,23.16411,66.99817,14.2828,66.99817,1.99995z
           M21.09045,55.87837c2.08301,2.0835,2.08301,5.47266,0,7.55615c-2.08786,2.08786-5.46808,2.08856-7.55664,0
          c-2.08301-2.0835-2.08301-5.47266,0-7.55615l0.12744-0.12744c0.19531-0.19531,0.29297-0.45117,0.29297-0.70703
          s-0.09766-0.51172-0.29297-0.70703c-0.39063-0.39063-1.02344-0.39063-1.41406,0l-0.12744,0.12744
          c-2.08786,2.08786-5.46765,2.0885-7.55615,0c-2.0835-2.08301-2.0835-5.47314-0.00049-7.55664
          c2.13809-2.13809,5.5326-2.02097,7.51514-0.04443c0.22002,0.26307,0.53373,0.38699,0.84424,0.36621
          c0.56445-0.0375,0.70008-0.41053,1.11182-0.82227c2.0878-2.08781,5.46758-2.08857,7.55615,0
          c2.08909,2.08909,2.08857,5.46807,0,7.55664c-0.41224,0.41224-0.77377,0.53051-0.80713,1.13721
          C20.76721,55.3852,20.88928,55.6772,21.09045,55.87837z M61.3736,20.36024L47.63782,6.62446
          c5.53949-2.26477,11.43126-3.49174,17.34961-3.61377C64.86944,8.73332,63.70997,14.64544,61.3736,20.36024z M11.79993,23.77729
          c0.35205-0.85059,1.11279-1.3584,2.04297-1.3584l11.8584-1.57129c-2.83572,3.66359-5.2447,7.94569-6.85693,11.90137
          l-6.56494-6.56494C11.50989,25.41401,11.52698,24.43599,11.79993,23.77729z M47.15149,42.2978l-1.5625,11.72314l-0.00879,0.13232
          c0,1.97812-2.3743,2.95724-3.77393,1.55762l-6.55566-6.55615C39.23654,47.53101,43.49314,45.12939,47.15149,42.2978z
           M33.69647,47.60987l-6.65338-6.65363c0,0-0.00024-0.00049-0.00049-0.00073l-0.00073-0.00049l-6.6524-6.65265
          C25.12572,22.09237,34.41132,12.66413,45.66364,7.4784l14.85596,14.85596C55.30785,33.64279,45.85159,42.89651,33.69647,47.60987z
          "></path><path fill="#010101" d="M38.57141,19.02681c-2.8667,2.86719-2.8667,7.53271,0,10.3999c2.87469,2.87366,7.52466,2.87421,10.3999,0
          c2.8667-2.86719,2.8667-7.53271,0-10.3999C46.09662,16.15315,41.44659,16.1526,38.57141,19.02681z M47.55725,28.01265
          c-2.0968,2.09576-5.48291,2.08789-7.57178,0c-2.08691-2.0874-2.08691-5.48438,0-7.57178
          c2.09674-2.09576,5.48273-2.08807,7.57178,0C49.64417,22.52827,49.64417,25.92524,47.55725,28.01265z"></path><path fill="#FFF" d="M19.27844,23.47993l-2.49072,0.23047c-0.41211,0.03809-0.71582,0.40332-0.67725,0.81592
        c0.03564,0.38867,0.36279,0.68066,0.74561,0.68066c0.02344,0,0.04639-0.00098,0.07031-0.00342l2.49072-0.23047
        c0.41211-0.03809,0.71582-0.40332,0.67725-0.81592C20.05627,23.74458,19.69153,23.43354,19.27844,23.47993z"></path></svg>
        `
            },
            link: 'https://fastx-ai.com',
            ariaLabel: 'fastx-ai'
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      // 免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程
      title: 'Free Chatgpt, Free LLMs, Free Midjourney, Free Stable diffusion 3, Free software, Free AI Tools, API Keys, News & Courses',
      description: 'Free Chatgpt, Free LLMs, Free Midjourney, Free Stable diffusion 3, Free software, Free AI Tools, API Keys, News & Courses, Discover a treasure trove of free AI tools, API keys, news, and courses. Get your hands on GPT-3.5, Stable Diffusion, Midjourney, TTS, STT, AI translation, and more – all for free! Your gateway to the world of AI, empowering you with knowledge and resources',
      themeConfig: {
        siteTitle: 'Free For All !',
        nav: [
          { text: 'Home', link: '/en' },
          {
            text: 'Chat',
            items: [
              { text: 'Open-gpt-4o', link: '/en/chat/open-gpt-4o' },
              { text: 'Glm-4v-9b', link: '/en/chat/glm-4v-9b' },
              { text: 'Google-Gemma-2-9B', link: '/en/chat/Google-Gemma-2-9B' },
              { text: 'Gpt-3.5-turbo', link: '/en/chat/fastx-ai' },
              { text: 'Qwen2-7B-instruct', link: '/en/chat/Qwen2-7B-instruct' },
              { text: 'Meta-Llama-2-7B', link: '/en/chat/Meta-Llama-2-7B' },
              { text: 'Meta-Llama-2-13B', link: '/en/chat/Meta-Llama-2-13B' },
              { text: 'Meta-Llama-3-8B', link: '/en/chat/Meta-Llama-3-8B' },
              { text: 'IDEFICS2-Instruction', link: '/en/chat/IDEFICS2-Instruction' },
            ]
          },
          {
            text: 'Draw',
            items: [
              { text: 'Free Stable Diffusion 3 Medium 1', link: '/en/draw/stabilityai-stable-diffusion-3-medium' },
              { text: 'Free Stable Diffusion 3 Medium 2', link: '/en/draw/markmagic-stable-diffusion-3' },
              { text: 'Free DALLE-4K', link: '/en/draw/mukaist-dalle-4k' },
              { text: 'Free Midjourney', link: '/en/draw/mukaist-midjourney' },
              { text: 'Free STABLE HAMSTER 🐹', link: '/en/draw/prithivmlmods-stable-hamster' },
              { text: 'Free Cartoon Image Generation', link: '/en/draw/cagliostrolab-animagine-xl-3-1' },
              { text: 'Free DALL-E 3 XL V2', link: '/en/draw/ehristoforu-dalle-3-xl-lora-v2' },
              { text: 'FlashSD: StableDiffusion3 Distilled Model', link: '/en/draw/jasperai-flash-sd3' },
              { text: 'Three Elements Image Synthesis (Style, Character, Action)', link: '/en/draw/okaris-omni-zero' },
              { text: 'PixArt-Sigma 1024px', link: '/en/draw/pixart-alpha-pixart-sigma' },
              { text: 'Online Drawing V2.5', link: '/en/draw/playgroundai-playground-v2-5' },
              { text: 'GALLO 3XL Online Drawing', link: '/en/draw/prithivmlmods-gallo-3xl' },
              { text: 'Free 4K Image Generate', link: '/en/draw/prithivmlmods-imagineo-4k' },
              { text: 'Tencent - Hunyuan Drawing', link: '/en/draw/tencent-hunyuan-hunyuandit' }
            ]
          },
          {
            text: 'Media',
            items: [
              { text: 'Video Translation SoniTranslate', link: '/en/media/r3gm-sonitranslate-translate-audio-of-a-video-content' },
              { text: 'Image High-Resolution Upscaling', link: '/en/media/gokaygokay-aurasr' },
              { text: 'Remove Video Background (Forever Free)', link: '/en/media/amirgame197-remove-video-background' },
              { text: 'Remove Image Background (Forever Free)', link: '/en/media/schroneko-transparent-background' },
              { text: 'Add Background Sound Effects to a Video Based on Instructions', link: '/en/media/ymzhang319-foleycrafter' },
              { text: 'Text-to-Audio Stable Audio Generator', link: '/en/media/artificialguybr-stable-audio-open-zero' },
              { text: 'Text-to-Audio ChatTTS Forge', link: '/en/media/lenml-chattts-forge' },
              { text: 'Audio to Text Whisper Large V3: Transcribe Audio', link: '/en/media/hf-audio-whisper-large-v3' },
              { text: 'Text-to-Video Open-Sora', link: '/en/media/kadirnar-open-sora' },
              { text: 'Text-to-Video AnimateDiff-Lightning', link: '/en/media/bytedance-animatediff-lightning' },
              { text: 'Text-to-Video Adaface animate', link: '/en/media/adaface-neurips-adaface-animate' },
              { text: 'Text-to-Video Animagine XL 3.0', link: '/en/media/linaqruf-animagine-xl' },
              { text: 'Image-to-Video Stable Video Diffusion Img2Vid', link: '/en/media/xi0v-stable-video-diffusion-img2vid' },
              { text: 'Video Content Analysis VideoLLaMA 2', link: '/en/media/lixin4ever-videollama2' },
              { text: 'Tencent Avatar Creation', link: '/en/media/tencentarc-photomaker' },
              { text: 'Face to All Avatar Creation', link: '/en/media/multimodalart-face-to-all' },
              { text: 'Image Content Recognition', link: '/en/media/gokaygokay-florence-2' },
              { text: 'Image Content Recognition (Multimodal Source Information)', link: '/en/media/epfl-vilab-4m' },
              { text: 'IC-Light Modify Image Light Source', link: '/en/media/lllyasviel-ic-light' },
              { text: 'Extract Image Prompts and Convert to Line Art', link: '/en/media/tori29umai-sketch2lineart' },
              { text: 'Image Depth Calculation', link: '/en/media/depth-anything-depth-anything-v2' },
              { text: 'Video Depth Calculation', link: '/en/media/jhshao-chronodepth' },
              { text: 'Edit Video Based on Prompts', link: '/en/media/koi953215-narcan-demo' },
              { text: 'Get Detailed Image Description', link: '/en/media/gokaygokay-sd3-long-captioner' },
              { text: 'Generate a Panoramic Video of a 3D Model (Rotating Around)', link: '/en/media/ashawkey-lgm' },
              { text: 'Generate a 3D Model in GLB Format Based on an Image', link: '/en/media/wuvin-unique3d' },
              { text: 'Cartoon Video Generation (2 Seconds)', link: '/en/media/doubiiu-tooncrafter' },
              { text: 'Image-to-Video (4 Seconds)', link: '/en/media/modelscope-exvideo-svd-128f-v1' },
              { text: 'Image-to-Video (3 Seconds) AnimateLCM', link: '/en/media/wangfuyun-animatelcm-svd' },
              { text: 'Image Blending PuLID', link: '/en/media/yanze-pulid' },
              { text: 'Remove 3D Image Background and Generate 3D (Multi-View) Model', link: '/en/media/tencentarc-instantmesh' },
              { text: 'Audio Generation AICoverGen', link: '/en/media/r3gm-aicovergen' },
              { text: 'Image to Audio', link: '/en/media/fffiloni-image-to-music-v2' },
              { text: 'IP-Adapter-FaceID Plus', link: '/en/media/multimodalart-ip-adapter-faceid' }
            ]
          },
          {
            text: 'Tool',
            items: [
              { "text": "Screenshot to HTML", "link": "/en/tool/huggingfacem4-screenshot2html" },
              { "text": "AI Outfit Diffusion", "link": "/en/tool/levihsu-ootdiffusion" },
              { "text": "AI Outfit Change", "link": "/en/tool/yisol-idm-vton" },
              { "text": "Video to VR", "link": "/en/tool/koi953215-diffir2vr" },
              { "text": "Emoji Generation", "link": "/en/tool/cfahlgren1-emoji-generator-by-fofr" },
              { "text": "Instruction Pretraining", "link": "/en/tool/davanstrien-instruction-synthesizer" },
              { "text": "Math Solver Expert", "link": "/en/tool/tonic-math" },
              { "text": "Open LLM Leaderboard", "link": "/en/tool/open-llm-leaderboard-open-llm-leaderboard" }
            ]
          },
          {
            text: 'API Key',
            link: '/en/api-key'
          },
          {
            text: 'Software',
            link: '/en/software'
          },
          {
            text: 'Free Try',
            link: '/en/fk-pay'
          },
          { text: 'About Us', link: '/en/about' }
        ],

        sidebar: {
          '/en/chat/': [{
            text: 'Chat',
            items: [
              { text: 'Free Open-gpt-4o', link: '/en/chat/open-gpt-4o' },
              { text: 'Free Glm-4v-9b', link: '/en/chat/glm-4v-9b' },
              { text: 'Free Google-Gemma-2-9B', link: '/en/chat/Google-Gemma-2-9B' },
              { text: 'Free Gpt-3.5-turbo', link: '/en/chat/fastx-ai' },
              { text: 'Free Qwen2-7B-instruct', link: '/en/chat/Qwen2-7B-instruct' },
              { text: 'Free Meta-Llama-2-7B', link: '/en/chat/Meta-Llama-2-7B' },
              { text: 'Free Meta-Llama-2-13B', link: '/en/chat/Meta-Llama-2-13B' },
              { text: 'Free Meta-Llama-3-8B', link: '/en/chat/Meta-Llama-3-8B' },
              { text: 'Free IDEFICS2-Instruction', link: '/en/chat/IDEFICS2-Instruction' },
            ]
          }],
          '/en/draw/': [{
            text: 'Draw',
            items: [
              { text: 'Free Stable Diffusion 3 Medium 1', link: '/en/draw/stabilityai-stable-diffusion-3-medium' },
              { text: 'Free Stable Diffusion 3 Medium 2', link: '/en/draw/markmagic-stable-diffusion-3' },
              { text: 'Free DALLE-4K', link: '/en/draw/mukaist-dalle-4k' },
              { text: 'Free Midjourney', link: '/en/draw/mukaist-midjourney' },
              { text: 'Free STABLE HAMSTER 🐹', link: '/en/draw/prithivmlmods-stable-hamster' },
              { text: 'Free Cartoon Image Generation', link: '/en/draw/cagliostrolab-animagine-xl-3-1' },
              { text: 'Free DALL-E 3 XL V2', link: '/en/draw/ehristoforu-dalle-3-xl-lora-v2' },
              { text: 'FlashSD: StableDiffusion3 Distilled Model', link: '/en/draw/jasperai-flash-sd3' },
              { text: 'Three Elements Image Synthesis (Style, Character, Action)', link: '/en/draw/okaris-omni-zero' },
              { text: 'PixArt-Sigma 1024px', link: '/en/draw/pixart-alpha-pixart-sigma' },
              { text: 'Online Drawing V2.5', link: '/en/draw/playgroundai-playground-v2-5' },
              { text: 'GALLO 3XL Online Drawing', link: '/en/draw/prithivmlmods-gallo-3xl' },
              { text: 'Free 4K Image Generate', link: '/en/draw/prithivmlmods-imagineo-4k' },
              { text: 'Tencent - Hunyuan Drawing', link: '/en/draw/tencent-hunyuan-hunyuandit' }
            ]            
          }],
          '/en/media/': [{
            text: 'Media',
            items: [
              { text: 'Video Translation SoniTranslate', link: '/en/media/r3gm-sonitranslate-translate-audio-of-a-video-content' },
              { text: 'Image High-Resolution Upscaling', link: '/en/media/gokaygokay-aurasr' },
              { text: 'Remove Video Background (Forever Free)', link: '/en/media/amirgame197-remove-video-background' },
              { text: 'Remove Image Background (Forever Free)', link: '/en/media/schroneko-transparent-background' },
              { text: 'Add Background Sound Effects to a Video Based on Instructions', link: '/en/media/ymzhang319-foleycrafter' },
              { text: 'Text-to-Audio Stable Audio Generator', link: '/en/media/artificialguybr-stable-audio-open-zero' },
              { text: 'Text-to-Audio ChatTTS Forge', link: '/en/media/lenml-chattts-forge' },
              { text: 'Audio to Text Whisper Large V3: Transcribe Audio', link: '/en/media/hf-audio-whisper-large-v3' },
              { text: 'Text-to-Video Open-Sora', link: '/en/media/kadirnar-open-sora' },
              { text: 'Text-to-Video AnimateDiff-Lightning', link: '/en/media/bytedance-animatediff-lightning' },
              { text: 'Text-to-Video Adaface animate', link: '/en/media/adaface-neurips-adaface-animate' },
              { text: 'Text-to-Video Animagine XL 3.0', link: '/en/media/linaqruf-animagine-xl' },
              { text: 'Image-to-Video Stable Video Diffusion Img2Vid', link: '/en/media/xi0v-stable-video-diffusion-img2vid' },
              { text: 'Video Content Analysis VideoLLaMA 2', link: '/en/media/lixin4ever-videollama2' },
              { text: 'Tencent Avatar Creation', link: '/en/media/tencentarc-photomaker' },
              { text: 'Face to All Avatar Creation', link: '/en/media/multimodalart-face-to-all' },
              { text: 'Image Content Recognition', link: '/en/media/gokaygokay-florence-2' },
              { text: 'Image Content Recognition (Multimodal Source Information)', link: '/en/media/epfl-vilab-4m' },
              { text: 'IC-Light Modify Image Light Source', link: '/en/media/lllyasviel-ic-light' },
              { text: 'Extract Image Prompts and Convert to Line Art', link: '/en/media/tori29umai-sketch2lineart' },
              { text: 'Image Depth Calculation', link: '/en/media/depth-anything-depth-anything-v2' },
              { text: 'Video Depth Calculation', link: '/en/media/jhshao-chronodepth' },
              { text: 'Edit Video Based on Prompts', link: '/en/media/koi953215-narcan-demo' },
              { text: 'Get Detailed Image Description', link: '/en/media/gokaygokay-sd3-long-captioner' },
              { text: 'Generate a Panoramic Video of a 3D Model (Rotating Around)', link: '/en/media/ashawkey-lgm' },
              { text: 'Generate a 3D Model in GLB Format Based on an Image', link: '/en/media/wuvin-unique3d' },
              { text: 'Cartoon Video Generation (2 Seconds)', link: '/en/media/doubiiu-tooncrafter' },
              { text: 'Image-to-Video (4 Seconds)', link: '/en/media/modelscope-exvideo-svd-128f-v1' },
              { text: 'Image-to-Video (3 Seconds) AnimateLCM', link: '/en/media/wangfuyun-animatelcm-svd' },
              { text: 'Image Blending PuLID', link: '/en/media/yanze-pulid' },
              { text: 'Remove 3D Image Background and Generate 3D (Multi-View) Model', link: '/en/media/tencentarc-instantmesh' },
              { text: 'Audio Generation AICoverGen', link: '/en/media/r3gm-aicovergen' },
              { text: 'Image to Audio', link: '/en/media/fffiloni-image-to-music-v2' },
              { text: 'IP-Adapter-FaceID Plus', link: '/en/media/multimodalart-ip-adapter-faceid' }
            ]            
          }],
          '/en/tool/': [{
            text: 'Tool',
            items: [
              { "text": "Screenshot to HTML", "link": "/en/tool/huggingfacem4-screenshot2html" },
              { "text": "AI Outfit Diffusion", "link": "/en/tool/levihsu-ootdiffusion" },
              { "text": "AI Outfit Change", "link": "/en/tool/yisol-idm-vton" },
              { "text": "Video to VR", "link": "/en/tool/koi953215-diffir2vr" },
              { "text": "Emoji Generation", "link": "/en/tool/cfahlgren1-emoji-generator-by-fofr" },
              { "text": "Instruction Pretraining", "link": "/en/tool/davanstrien-instruction-synthesizer" },
              { "text": "Math Solver Expert", "link": "/en/tool/tonic-math" },
              { "text": "Open LLM Leaderboard", "link": "/en/tool/open-llm-leaderboard-open-llm-leaderboard" }
            ]
          }],
          '/en/api-key/': [{
            text: 'API Key',
            items: [
              
            ]
          }],
          '/en/software/': [{
            text: 'Software',
            items: [
            ]
          }],
          '/en/fk-pay/': [{
            text: 'Free Try',
            items: [
            ]
          }],
          '/en/about/': [{
            text: 'About Us',
            items: [
              { text: 'About us', link: '/en/about' },
              { text: 'Mail to us', link: '/en/about/concat' }
            ]
          }],
        },
    
        footer: {
          copyright: 'Copyright © 2020-present, Free For You!'
        },
    
        socialLinks: [
          {
            icon: {
              svg: `
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 68 68" viewBox="0 0 68 68" id="project-launch"><path fill="#FFF" d="M33.45498,48.77941L19.21925,34.5437c2.53175-6.8032,6.49908-12.90624,11.53427-17.94142
          c9.02375-9.02374,21.4632-14.60347,35.2393-14.60343c0,0.15556-0.00708,0.3182-0.00708,0.47376
          C65.80184,23.73075,52.30161,41.75698,33.45498,48.77941z"></path><path fill="#DFE1E6" d="M33.45498,48.77941L19.21925,34.5437C45.85199,49.50779,63.52472,8.58274,65.98573,2.47261
          C65.80184,23.73075,52.30161,41.75698,33.45498,48.77941z"></path><line x1="22.298" x2="26.335" y1="45.7" y2="41.663" fill="#DFE1E6"></line><path fill="#FAC41D" d="M19.21933 34.5379l-7.64673-7.64671c-2.02175-2.02175-.59303-5.48122 2.27332-5.47223l14.22417-1.89601C24.2962 23.9259 21.286 29.00271 19.21933 34.5379zM41.09917 56.41768l-7.63773-7.63771c5.53514-2.06673 10.61201-5.07687 15.0149-8.85082L46.58035 54.1533C46.58041 57.0107 43.12992 58.44843 41.09917 56.41768z"></path><path fill="#F4A01E" d="M47.72153,45.60803c-3.37858,2.56986-7.09857,4.70848-11.08821,6.34381l-3.17188-3.17187
          c5.53514-2.06673,10.61201-5.07687,15.0149-8.85082L47.72153,45.60803z"></path><path fill="#F37D7F" d="M61.84764,21.87049c2.65355-6.08927,4.15073-12.79855,4.15072-19.87051l0.00011-0.00011h-0.00033
          c-7.07197,0.00001-13.7812,1.49713-19.87048,4.15068L61.84764,21.87049z"></path><path fill="#F37D7F" d="M61.84764,21.87049c2.65355-6.08927,4.15073-12.79855,4.15072-19.87051l0.00011-0.00011h-0.00033
          c-7.07197,0.00001-13.7812,1.49713-19.87048,4.15068L61.84764,21.87049z"></path><path fill="#EF3F3E" d="M61.84536,21.92138c2.60388-5.96388,4.08055-12.53331,4.14038-19.44877
          c-0.87061,2.16154-3.64719,8.68072-8.04852,15.54063L61.84536,21.92138z"></path><circle cx="43.771" cy="24.227" r="6.354" fill="#5EA7DC"></circle><path fill="#FFF" d="M21.79724,55.17124c-0.01004-0.01004-0.02123-0.01831-0.03131-0.02831
          c0.18341-0.14662,0.36188-0.30226,0.5318-0.47218c2.47713-2.47713,2.47713-6.49331,0-8.97044
          c-2.47709-2.47708-6.49332-2.47712-8.97046,0.00001c-0.16992,0.16992-0.32556,0.34838-0.47218,0.5318
          c-0.01-0.01009-0.01827-0.02127-0.02831-0.03131c-2.47714-2.47713-6.49332-2.47712-8.97046,0.00001
          c-2.47713,2.47713-2.47713,6.49332,0,8.97044c2.47714,2.47713,6.49332,2.47713,8.97046-0.00001
          c0.16992-0.16993,0.16992-0.16993,0,0c-2.47713,2.47713-2.47709,6.49336,0,8.97045
          c2.47714,2.47713,6.49337,2.47717,8.9705,0.00003C24.27442,61.66459,24.27438,57.64837,21.79724,55.17124z"></path><path fill="#DFE1E6" d="M21.80049,64.13953c-2.48224,2.48224-6.49908,2.48219-8.97424,0.00703
          c-1.49216-1.49216-2.08622-3.54298-1.77505-5.46655c0.24042,0.42429,0.55159,0.82032,0.91934,1.18807
          c2.47516,2.47516,6.49204,2.47516,8.96721,0c0.99004-0.99004,1.58406-2.2347,1.78209-3.52183
          C24.22615,58.78611,23.91498,62.02504,21.80049,64.13953z"></path><path fill="#010101" d="M32.40051 52.66987c-.39063-.39063-1.02344-.39063-1.41406 0l-2.69531 2.6958c-.39063.39063-.39063 1.02393 0 1.41406.39063.39063 1.02344.39063 1.41406 0l2.69531-2.6958C32.79114 53.69331 32.79114 53.06001 32.40051 52.66987zM15.32825 35.59761c-.39063-.39063-1.02344-.39063-1.41406 0l-2.6958 2.69531c-.39063.39014-.39063 1.02344 0 1.41406s1.02344.39063 1.41406 0l2.6958-2.69531C15.71887 36.62153 15.71887 35.98823 15.32825 35.59761z"></path><path fill="#010101" d="M66.99817,1.99995v-1h-1c-12.06359,0-21.36403,4.77552-21.86816,4.94482l0.03687,0.03687
          c-6.30603,3.01691-11.95984,7.30597-16.57245,12.59564l-13.81744,1.8421c-1.70801,0.02197-3.16992,1.01074-3.82471,2.59229
          c-0.66406,1.60205-0.31396,3.35938,0.91309,4.58643l7.19171,7.19214l-0.00226,0.0061l6.86627,6.86652l-2.67694,2.67664
          c-2.84517-2.16568-6.84277-1.96968-9.46228,0.4964c-2.83018-2.15799-6.96385-2.01125-9.63281,0.65771
          c-2.86328,2.86328-2.86279,7.52197,0.00049,10.38477c1.91769,1.91769,4.61926,2.5505,7.06201,1.91162
          c-0.63721,2.44141-0.00098,5.14941,1.9082,7.05859c2.8656,2.86662,7.51516,2.87062,10.38477,0
          c2.60255-2.60255,2.87516-6.70684,0.65283-9.62793c2.47328-2.62113,2.66618-6.62371,0.50098-9.46722l2.67682-2.67651
          l6.86615,6.86639l0.00702-0.00262l7.1839,7.18427c2.65216,2.65216,7.12643,0.77394,7.1875-2.90088l1.84247-13.82172
          c5.28906-4.6123,9.57764-10.26569,12.5943-16.57111l0.03687,0.03687C62.28784,23.16411,66.99817,14.2828,66.99817,1.99995z
           M21.09045,55.87837c2.08301,2.0835,2.08301,5.47266,0,7.55615c-2.08786,2.08786-5.46808,2.08856-7.55664,0
          c-2.08301-2.0835-2.08301-5.47266,0-7.55615l0.12744-0.12744c0.19531-0.19531,0.29297-0.45117,0.29297-0.70703
          s-0.09766-0.51172-0.29297-0.70703c-0.39063-0.39063-1.02344-0.39063-1.41406,0l-0.12744,0.12744
          c-2.08786,2.08786-5.46765,2.0885-7.55615,0c-2.0835-2.08301-2.0835-5.47314-0.00049-7.55664
          c2.13809-2.13809,5.5326-2.02097,7.51514-0.04443c0.22002,0.26307,0.53373,0.38699,0.84424,0.36621
          c0.56445-0.0375,0.70008-0.41053,1.11182-0.82227c2.0878-2.08781,5.46758-2.08857,7.55615,0
          c2.08909,2.08909,2.08857,5.46807,0,7.55664c-0.41224,0.41224-0.77377,0.53051-0.80713,1.13721
          C20.76721,55.3852,20.88928,55.6772,21.09045,55.87837z M61.3736,20.36024L47.63782,6.62446
          c5.53949-2.26477,11.43126-3.49174,17.34961-3.61377C64.86944,8.73332,63.70997,14.64544,61.3736,20.36024z M11.79993,23.77729
          c0.35205-0.85059,1.11279-1.3584,2.04297-1.3584l11.8584-1.57129c-2.83572,3.66359-5.2447,7.94569-6.85693,11.90137
          l-6.56494-6.56494C11.50989,25.41401,11.52698,24.43599,11.79993,23.77729z M47.15149,42.2978l-1.5625,11.72314l-0.00879,0.13232
          c0,1.97812-2.3743,2.95724-3.77393,1.55762l-6.55566-6.55615C39.23654,47.53101,43.49314,45.12939,47.15149,42.2978z
           M33.69647,47.60987l-6.65338-6.65363c0,0-0.00024-0.00049-0.00049-0.00073l-0.00073-0.00049l-6.6524-6.65265
          C25.12572,22.09237,34.41132,12.66413,45.66364,7.4784l14.85596,14.85596C55.30785,33.64279,45.85159,42.89651,33.69647,47.60987z
          "></path><path fill="#010101" d="M38.57141,19.02681c-2.8667,2.86719-2.8667,7.53271,0,10.3999c2.87469,2.87366,7.52466,2.87421,10.3999,0
          c2.8667-2.86719,2.8667-7.53271,0-10.3999C46.09662,16.15315,41.44659,16.1526,38.57141,19.02681z M47.55725,28.01265
          c-2.0968,2.09576-5.48291,2.08789-7.57178,0c-2.08691-2.0874-2.08691-5.48438,0-7.57178
          c2.09674-2.09576,5.48273-2.08807,7.57178,0C49.64417,22.52827,49.64417,25.92524,47.55725,28.01265z"></path><path fill="#FFF" d="M19.27844,23.47993l-2.49072,0.23047c-0.41211,0.03809-0.71582,0.40332-0.67725,0.81592
        c0.03564,0.38867,0.36279,0.68066,0.74561,0.68066c0.02344,0,0.04639-0.00098,0.07031-0.00342l2.49072-0.23047
        c0.41211-0.03809,0.71582-0.40332,0.67725-0.81592C20.05627,23.74458,19.69153,23.43354,19.27844,23.47993z"></path></svg>
        `
            },
            link: 'https://fastx-ai.com',
            ariaLabel: 'fastx-ai'
          }
        ]
      }
    }
  }
})
