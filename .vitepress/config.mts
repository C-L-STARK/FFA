import { defineConfig } from "vitepress";

export default defineConfig({
  title: "FFA (Free For All), Free AI Tools, API Keys, News & Courses ",
  description:
    "Discover a treasure trove of free AI tools, API keys, news, and courses. Get your hands on GPT-3.5, Stable Diffusion, Midjourney, TTS, STT, AI translation, and more – all for free! Photon AI is your gateway to the world of AI, empowering you with knowledge and resources. ",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "16x16",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
        color: "#3a0839",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://oss.fastx-ai.com/file/upload/2024/06/26/1805820379432751104.png",
      },
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-J070L3EGGL",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J070L3EGGL');`,
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-GDPVLG5X24",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GDPVLG5X24');`,
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-J070L3EGGL",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J070L3EGGL');`,
    ],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/logo.png",
  },
  sitemap: {
    hostname: "https://free.fastx-ai.com",
  },

  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      title:
        "免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程",
      description:
        "免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程，探索丰富的免费 AI 工具、API 密钥、新闻和课程。获取 GPT-3.5、Stable Diffusion、Midjourney、TTS、STT、AI 翻译等 – 全部免费！ 通往 AI 世界的桥梁，为您提供知识和资源",
      themeConfig: {
        siteTitle: "免费攻略 FFA",
        nav: [
          { text: "主页", link: "/" },
          {
            text: "大语言模型",
            items: [
              { text: "Open-gpt-4o", link: "/chat/open-gpt-4o" },
              { text: "Glm-4v-9b", link: "/chat/glm-4v-9b" },
              { text: "Google-Gemma-2-9B", link: "/chat/Google-Gemma-2-9B" },
              { text: "Gpt-3.5-turbo", link: "/chat/fastx-ai" },
              { text: "Qwen2-7B-instruct", link: "/chat/Qwen2-7B-instruct" },
              { text: "Meta-Llama-2-7B", link: "/chat/Meta-Llama-2-7B" },
              { text: "Meta-Llama-2-13B", link: "/chat/Meta-Llama-2-13B" },
              { text: "Meta-Llama-3-8B", link: "/chat/Meta-Llama-3-8B" },
              {
                text: "IDEFICS2-Instruction",
                link: "/chat/IDEFICS2-Instruction",
              },
            ],
          },
          {
            text: "绘画",
            items: [
              {
                text: "Free Stable Diffusion 3 Medium 1",
                link: "/draw/stabilityai-stable-diffusion-3-medium",
              },
              {
                text: "Free Stable Diffusion 3 Medium 2",
                link: "/draw/markmagic-stable-diffusion-3",
              },
              { text: "Free DALLE-4K", link: "/draw/mukaist-dalle-4k" },
              { text: "Free Midjourney", link: "/draw/mukaist-midjourney" },
              {
                text: "Free STABLE HAMSTER 🐹",
                link: "/draw/prithivmlmods-stable-hamster",
              },
              {
                text: "Free 卡通图片生成",
                link: "/draw/cagliostrolab-animagine-xl-3-1",
              },
              {
                text: "Free DALL-E 3 XL V2",
                link: "/draw/ehristoforu-dalle-3-xl-lora-v2",
              },
              {
                text: "FlashSD: StableDiffusion3 蒸馏模型",
                link: "/draw/jasperai-flash-sd3",
              },
              {
                text: "三要素图像合成（风格、人物、动作）",
                link: "/draw/okaris-omni-zero",
              },
              {
                text: "PixArt-Sigma 1024px",
                link: "/draw/pixart-alpha-pixart-sigma",
              },
              {
                text: "在线绘图 V2.5",
                link: "/draw/playgroundai-playground-v2-5",
              },
              {
                text: "GALLO 3XL在线绘图",
                link: "/draw/prithivmlmods-gallo-3xl",
              },
              {
                text: "Free 4K Image Generate",
                link: "/draw/prithivmlmods-imagineo-4k",
              },
              {
                text: "腾讯-混元绘图",
                link: "/draw/tencent-hunyuan-hunyuandit",
              },
            ],
          },
          {
            text: "多媒体",
            items: [
              {
                text: "视频翻译 SoniTranslate",
                link: "/media/r3gm-sonitranslate-translate-audio-of-a-video-content",
              },
              { text: "图像高清放大", link: "/media/gokaygokay-aurasr" },
              {
                text: "视频背景去除（永久免费）",
                link: "/media/amirgame197-remove-video-background",
              },
              {
                text: "图片背景去除（永久免费）",
                link: "/media/schroneko-transparent-background",
              },
              {
                text: "根据指令给视频添加背景音效",
                link: "/media/ymzhang319-foleycrafter",
              },
              {
                text: "文生音频 Stable Audio Generator",
                link: "/media/artificialguybr-stable-audio-open-zero",
              },
              {
                text: "文生音频 ChatTTS Forge",
                link: "/media/lenml-chattts-forge",
              },
              {
                text: "音频转文字 Whisper Large V3:  Transcribe Audio",
                link: "/media/hf-audio-whisper-large-v3",
              },
              { text: "文生视频 Open-Sora", link: "/media/kadirnar-open-sora" },
              {
                text: "文生视频 AnimateDiff-Lightning",
                link: "/media/bytedance-animatediff-lightning",
              },
              {
                text: "文生视频 Adaface animate",
                link: "/media/adaface-neurips-adaface-animate",
              },
              {
                text: "文生视频 Animagine XL 3.0",
                link: "/media/linaqruf-animagine-xl",
              },
              {
                text: "图生视频 Stable Video Diffusion Img2Vid",
                link: "/media/xi0v-stable-video-diffusion-img2vid",
              },
              {
                text: "视频内容分析 VideoLLaMA 2",
                link: "/media/lixin4ever-videollama2",
              },
              { text: "腾讯头像制作", link: "/media/tencentarc-photomaker" },
              {
                text: "Face to All 头像制作",
                link: "/media/multimodalart-face-to-all",
              },
              { text: "图像内容识别", link: "/media/gokaygokay-florence-2" },
              {
                text: "图片内容识别（多模态源信息）",
                link: "/media/epfl-vilab-4m",
              },
              {
                text: "IC-Light 修改图片光源",
                link: "/media/lllyasviel-ic-light",
              },
              {
                text: "图片提取prompt，并转换成线条图",
                link: "/media/tori29umai-sketch2lineart",
              },
              {
                text: "图片景深计算",
                link: "/media/depth-anything-depth-anything-v2",
              },
              { text: "视频景深计算", link: "/media/jhshao-chronodepth" },
              {
                text: "按照提示词进行视频编辑",
                link: "/media/koi953215-narcan-demo",
              },
              {
                text: "获得详细的图片描述",
                link: "/media/gokaygokay-sd3-long-captioner",
              },
              {
                text: "生成 3D模型的全景视频（环绕一周）",
                link: "/media/ashawkey-lgm",
              },
              {
                text: "根据图片生成GLB格式的3D模型",
                link: "/media/wuvin-unique3d",
              },
              {
                text: "卡通视频生成（2秒）",
                link: "/media/doubiiu-tooncrafter",
              },
              {
                text: "图生视频（4秒）",
                link: "/media/modelscope-exvideo-svd-128f-v1",
              },
              {
                text: "图生视频（3秒）AnimateLCM",
                link: "/media/wangfuyun-animatelcm-svd",
              },
              { text: "混图 PuLID", link: "/media/yanze-pulid" },
              {
                text: "去除 3D 图片背景，并生成 3D （多视角）模型",
                link: "/media/tencentarc-instantmesh",
              },
              { text: "音频生成 AICoverGen", link: "/media/r3gm-aicovergen" },
              { text: "图片转音频", link: "/media/fffiloni-image-to-music-v2" },
              {
                text: "IP-Adapter-FaceID Plus",
                link: "/media/multimodalart-ip-adapter-faceid",
              },
            ],
          },
          {
            text: "工具",
            items: [
              {
                text: "屏幕截图转HTML",
                link: "/tool/huggingfacem4-screenshot2html",
              },
              {
                text: "AI 换衣 OOTDiffusion",
                link: "/tool/levihsu-ootdiffusion",
              },
              { text: "AI 换衣", link: "/tool/yisol-idm-vton" },
              { text: "视频转VR", link: "/tool/koi953215-diffir2vr" },
              {
                text: "Emoji 生成",
                link: "/tool/cfahlgren1-emoji-generator-by-fofr",
              },
              {
                text: "指令预训练",
                link: "/tool/davanstrien-instruction-synthesizer",
              },
              { text: "数学解题专家", link: "/tool/tonic-math" },
              {
                text: "开源大模型排行榜",
                link: "/tool/open-llm-leaderboard-open-llm-leaderboard",
              },
              { text: "m3u8在线转换mp4下载", link: "/tool/m3u8-mp4" },
            ],
          },
          {
            text: "API Key",
            link: "/api-key",
          },
          {
            text: "软件",
            items: [
              {
                text: "Windows",
                items: [
                  {
                    text: "Zettlr 3.2.0 论文Markdown写作编辑",
                    link: "/software/windows/zettlr-win",
                  },
                  {
                    text: "OfficeSuite Premium 8.70.56193 Office 办公套件",
                    link: "/software/windows/officesuite-premium",
                  },
                  {
                    text: "PMLite 1.1.2.2 图像校正漂白",
                    link: "/software/windows/pmlite",
                  },
                  {
                    text: "Remote Desktop Manager Enterprise 2024.1.32.0 远程桌面连接管理",
                    link: "/software/windows/remote-desktop-manager-enterprise-win",
                  },
                  {
                    text: "MAGIX Video Pro X16 22.0.1.219 视频编辑处理",
                    link: "/software/windows/magix-video-pro",
                  },
                  {
                    text: "JetBrains WebStorm 2024.1.4 JavaScript集成开发环境",
                    link: "/software/windows/jetbrains-webstorm-win",
                  },
                  {
                    text: "JetBrains RubyMine 2024.1.3 Rails/Ruby集成开发环境",
                    link: "/software/windows/jetbrains-rubymine-win",
                  },
                  {
                    text: "JetBrains Rider 2024.1.3 .NET集成开发环境",
                    link: "/software/windows/jetbrains-rider-win",
                  },
                  {
                    text: "JetBrains PyCharm Pro 2024.1.3 Python集成开发环境",
                    link: "/software/windows/jetbrains-pycharm-pro-win",
                  },
                  {
                    text: "JetBrains PhpStorm 2024.1.3 PHP集成开发环境",
                    link: "/software/windows/jetbrains-phpstorm-win",
                  },
                  {
                    text: "JetBrains IntelliJ IDEA Ultimate 2024.1.3 Java集成开发环境",
                    link: "/software/windows/jetbrains-intellij-idea-ultimate-win",
                  },
                  {
                    text: "JetBrains GoLand 2024.1.3 Go语言集成开发环境",
                    link: "/software/windows/jetbrains-goland-win",
                  },
                  {
                    text: "JetBrains DataGrip 2024.1.4 多引擎数据库管理开发",
                    link: "/software/windows/jetbrains-datagrip-win",
                  },
                  {
                    text: "JetBrains CLion 2024.1.3 C/C++集成开发环境",
                    link: "/software/windows/jetbrains-clion-win",
                  },
                  {
                    text: "GeoGebra Classic 6.0.845.0 动态数学绘图",
                    link: "/software/windows/geogebra-classic-win",
                  },
                  {
                    text: "EssentialPIM Pro Business 12.0.1 个人信息管理",
                    link: "/software/windows/essentialpim-pro-business",
                  },
                  {
                    text: "CudaText 1.214.7.2 代码编辑器",
                    link: "/software/windows/cudatext-win",
                  },
                  {
                    text: "Adobe Camera Raw 16.3.1 Adobe滤镜增效处理插件",
                    link: "/software/windows/adobe-camera-raw-win",
                  },
                  {
                    text: "XYplorer 26.10.0000 多标签文件管理器",
                    link: "/software/windows/xyplorer",
                  },
                  {
                    text: "UniFab All-In-One 2.0.2.3 视频AI压缩转换处理",
                    link: "/software/windows/unifab",
                  },
                  {
                    text: "StreamFab All-In-One 6.1.8.2 全能视频解析下载",
                    link: "/software/windows/streamfab",
                  },
                  {
                    text: "Radiant Photo 1.3.1.451 +扩展插件 图像AI增强修饰",
                    link: "/software/windows/radiant-photo",
                  },
                  {
                    text: "QOwnNotes 24.6.1 笔记记录与待办事项",
                    link: "/software/windows/qownnotes-win",
                  },
                  {
                    text: "PilotEdit Pro 18.8.0 文本代码编辑器",
                    link: "/software/windows/pilotedit-pro",
                  },
                  {
                    text: "Paperlib 3.1.5 论文文献管理",
                    link: "/software/windows/paperlib-win",
                  },
                  {
                    text: "Obsidian 1.6.3 卡片笔记编辑管理",
                    link: "/software/windows/obsidian-win",
                  },
                  {
                    text: "Maplesoft Maple 2024.1 数学科学计算",
                    link: "/software/windows/maplesoft-maple-win",
                  },
                  {
                    text: "OneCommander Pro 3.83.0.0 双窗口文件管理器",
                    link: "/software/windows/onecommander-pro",
                  },
                  {
                    text: "NetLimiter Pro 5.3.14.0 网络监控管理",
                    link: "/software/windows/netlimiter-pro",
                  },
                  {
                    text: "Lumenzia 11.7.7 PS亮度蒙版插件",
                    link: "/software/windows/lumenzia",
                  },
                  {
                    text: "Maxthon 7.1.9.4200 Beta 傲游浏览器",
                    link: "/software/windows/maxthon-win",
                  },
                  {
                    text: "Koodo Reader 1.6.7 Epub电子书阅读",
                    link: "/software/windows/koodo-reader-win",
                  },
                  {
                    text: "Firefox 127.0 火狐浏览器",
                    link: "/software/windows/firefox-win",
                  },
                  {
                    text: "欧路词典 13.6.4 英语词典翻译查询",
                    link: "/software/windows/eudic-win",
                  },
                  {
                    text: "EaseUS Video Editor Pro 2.2.0 视频编辑处理",
                    link: "/software/windows/easeus-video-editor",
                  },
                  {
                    text: "DVDFab All-In-One 13.0.1.9 DVD复制转换",
                    link: "/software/windows/dvdfab-win",
                  },
                  {
                    text: "DBeaver Ultimate 24.1.0 数据库连接管理",
                    link: "/software/windows/dbeaver-ultimate-win",
                  },
                  {
                    text: "BricsCAD Ultimate 24.2.05 2D与3D CAD建模设计",
                    link: "/software/windows/bricscad-ultimate-win",
                  },
                  {
                    text: "Bootstrap Studio 6.7.1 响应式网页设计",
                    link: "/software/windows/bootstrap-studio-win",
                  },
                  {
                    text: "Anki 24.06.2 辅助记忆学习",
                    link: "/software/windows/anki-win",
                  },
                  {
                    text: "Android Studio 2023.3.1.20 Android集成开发环境",
                    link: "/software/windows/android-studio-win",
                  },
                  {
                    text: "Agisoft Metashape Professional 2.1.2.18315 多视点三维建模设计",
                    link: "/software/windows/agisoft-metashape-professional-win",
                  },
                  {
                    text: "Adobe Substance 3D Sampler 4.4.1.4591 图片转3D素材软件",
                    link: "/software/windows/adobe-substance-3d-sampler-win",
                  },
                  {
                    text: "3DF Zephyr 7.529 图片转3D模型",
                    link: "/software/windows/3df-zephyr",
                  },
                  {
                    text: "Fort Firewall 3.13.0 防火墙软件",
                    link: "/software/windows/fort-firewall",
                  },
                  {
                    text: "Araxis Merge Professional 2024.5981 文件/文件夹对比",
                    link: "/software/windows/araxis-merge-professional-win",
                  },
                  {
                    text: "Simlab Composer 12.0.34 3D场景建模渲染",
                    link: "/software/windows/simlab-composer",
                  },
                  {
                    text: "EaseUS Todo Backup Enterprise 16.2.0 数据备份恢复",
                    link: "/software/windows/easeus-todo-backup",
                  },
                  {
                    text: "UltraSearch Pro 4.2.0.925 文件搜索查找",
                    link: "/software/windows/ultrasearch-pro",
                  },
                  {
                    text: "AI Video FaceSwap 1.0.0 视频AI识别换脸",
                    link: "/software/windows/ai-video-faceswap",
                  },
                  {
                    text: "Wipit 1.0.0 视频与图片AI去水印",
                    link: "/software/windows/wipit",
                  },
                  {
                    text: "Wondershare Repairit 5.5.9.9 万兴修复-音频/视频/图片/文件损坏修改",
                    link: "/software/windows/wondershare-repairit-win",
                  },
                  {
                    text: "QQ浏览器 13.0.6015.400 Beta 去广告精简版",
                    link: "/software/windows/qqbrowser",
                  },
                  {
                    text: "Topaz Gigapixel AI 7.2.1 AI图片无损缩放",
                    link: "/software/windows/topaz-gigapixel-ai-win",
                  },
                  {
                    text: "OBS Studio 30.2.0 Beta1 直播视频录像",
                    link: "/software/windows/obs-studio-win",
                  },
                  {
                    text: "Enpass 6.11.1 密码管理器",
                    link: "/software/windows/enpass-win",
                  },
                  {
                    text: "Effie 3.9.3 Markdown写作编辑",
                    link: "/software/windows/effie-win",
                  },
                  {
                    text: "Easy Sysprep 5.6.2404.10309 Beta 10 Win系统封装部署",
                    link: "/software/windows/easysyspre",
                  },
                  {
                    text: "Billfish 3.1.5.12 图像管理查看",
                    link: "/software/windows/billfish-win",
                  },
                  {
                    text: "Apifox 2.5.30 API接口调试",
                    link: "/software/windows/apifox-win",
                  },
                  {
                    text: "WYSIWYG Web Builder 19.2.2 可视化网页设计",
                    link: "/software/windows/wysiwyg-web-builder",
                  },
                  {
                    text: "Windows Manager 2.0.1 系统优化清理",
                    link: "/software/windows/windows-manager",
                  },
                  {
                    text: "Topaz Video AI 5.1.2 AI视频无损缩放增强",
                    link: "/software/windows/topaz-video-ai-win",
                  },
                  {
                    text: "Serviio Pro 2.4.0 DLNA媒体投屏",
                    link: "/software/windows/serviio-pro-win",
                  },
                  {
                    text: "Proxyman 2.15.0 网络协议抓包调试",
                    link: "/software/windows/proxyman-win",
                  },
                  {
                    text: "Microsoft Edge 125.0.2535.92",
                    link: "/software/windows/microsoft-edge-win",
                  },
                  {
                    text: "MusicFab All-In-One 1.0.3.7 全能音乐下载转换",
                    link: "/software/windows/musicfab",
                  },
                  {
                    text: "LightBulb 2.5.3 屏幕护眼与亮度自动调节",
                    link: "/software/windows/lightbulb",
                  },
                  {
                    text: "MOTU Digital Performer 11.32.95761 数字音频编辑制作",
                    link: "/software/windows/motu-digital-performer-win",
                  },
                  {
                    text: "雷电安卓模拟器LDPlayer 9.0.72.5 去广告精简版",
                    link: "/software/windows/ldplayer",
                  },
                  {
                    text: "iZotope RX 11 Audio Editor Advanced 11.1.0 音频降噪修复增强",
                    link: "/software/windows/izotope-rx-advanced-win",
                  },
                  {
                    text: "fHash 3.3.2 哈希值检测校验",
                    link: "/software/windows/fhash-win",
                  },
                  {
                    text: "EaseUS Partition Master Technician 18.5.0 硬盘无损分区",
                    link: "/software/windows/easeus-partition-master",
                  },
                  {
                    text: "draw.io 24.5.1 流程图绘制",
                    link: "/software/windows/drawio-win",
                  },
                  {
                    text: "CyberLink PowerDirector Ultimate 2024 22.5.3003.0 威力导演视频编辑器",
                    link: "/software/windows/cyberlink-powerdirector-ultimate",
                  },
                  {
                    text: "Cyber​​Link PhotoDirector Ultra 2024 15.5.1730.0 相片大师照片编辑",
                    link: "/software/windows/cyberlink-photodirector-ultra",
                  },
                  {
                    text: "CleanFlash 34.0.0.315 第三方无广告Flash",
                    link: "/software/windows/cleanflash",
                  },
                  {
                    text: "Cent Browser 5.1.1130.123 多手势的百分浏览器",
                    link: "/software/windows/cent-browser",
                  },
                  {
                    text: "Boris FX Mocha Pro for OFX 2024 11.0.2.32 平面跟踪摄像机反求插件",
                    link: "/software/windows/boris-fx-mocha-pro-for-ofx-win",
                  },
                  {
                    text: "Boris FX Mocha Pro for Adobe 2024 11.0.2.32 平面跟踪摄像机反求插件",
                    link: "/software/windows/boris-fx-mocha-pro-for-adobe-win",
                  },
                  {
                    text: "Boris FX Mocha Pro 2024 11.0.2.32 平面跟踪摄像机反求",
                    link: "/software/windows/boris-fx-mocha-pro-win",
                  },
                  {
                    text: "哔哩助理Bili.Copilot 1.2406.2.0 哔哩哔哩UWP客户端",
                    link: "/software/windows/bilicopilot",
                  },
                  {
                    text: "Ashampoo WinOptimizer 27.00.03 系统优化清理",
                    link: "/software/windows/ashampoo-winoptimizer",
                  },
                  {
                    text: "ArchiCAD 27.2.1 Build 5030 BIM建筑信息3D建模",
                    link: "/software/windows/archicad-win",
                  },
                  {
                    text: "Adobe Photoshop Lightroom Classic 13.3.1 照片后期处理",
                    link: "/software/windows/adobe-photoshop-lightroom-classic-win",
                  },
                  {
                    text: "腾讯QQ 9.9.11.240606",
                    link: "/software/windows/qq-win",
                  },
                  {
                    text: "360极速浏览器 X 22.3.3042.64 去广告精简版",
                    link: "/software/windows/360chrome-win",
                  },
                  {
                    text: "Wondershare UniConverter 15.5.11.104 音视频转换/下载/无损压缩",
                    link: "/software/windows/wondershare-uniconverter-win",
                  },
                  {
                    text: "Visual Studio Code 1.90.0 代码编辑器",
                    link: "/software/windows/visual-studio-code-win",
                  },
                  {
                    text: "Tracktion Outersect Modeler 1.2.3 乐器建模合成器插件",
                    link: "/software/windows/tracktion-outersect-modeler-win",
                  },
                  {
                    text: "Togu Audio Line TAL-J-8 1.8.4 单声道低音合成器插件",
                    link: "/software/windows/togu-audio-line-tal-j-8-win",
                  },
                  {
                    text: "Sandboxie Plus 1.14.1 沙盒隔离环境",
                    link: "/software/windows/sandboxie-plus",
                  },
                  {
                    text: "RayLink 8.0.6.8 远程桌面控制",
                    link: "/software/windows/raylink-win",
                  },
                  {
                    text: "Postman 11.1.14 API接口调试",
                    link: "/software/windows/postman-win",
                  },
                  {
                    text: "FontLab 8.4.0.8858 Beta 字体编辑设计",
                    link: "/software/windows/fontlab-win",
                  },
                  {
                    text: "D16 Group Nithonat 2.0.0 606鼓机模拟器插件",
                    link: "/software/windows/d16-group-nithonat-win",
                  },
                  {
                    text: "不坑盒子 2024.0607 Office插件工具箱",
                    link: "/software/windows/bkoffice",
                  },
                  {
                    text: "AppFlowy 0.5.9 笔记编辑管理",
                    link: "/software/windows/appflowy-win",
                  },
                  {
                    text: "Another Redis Desktop Manager 1.6.6 Redis可视化管理",
                    link: "/software/windows/another-redis-desktop-manager-win",
                  },
                  {
                    text: "百度输入法 6.1.8.23",
                    link: "/software/windows/baidu-input-win",
                  },
                  {
                    text: "WPS Office 12.1.0.16929 个人版 金山一站式Office办公套件",
                    link: "/software/windows/wps-office-win",
                  },
                  {
                    text: "SimpleMind Pro 2.4.0.6481 思维导图",
                    link: "/software/windows/simplemind-pro-win",
                  },
                  {
                    text: "Red Giant Universe 2024.3.0 红巨星视频特效插件套装",
                    link: "/software/windows/red-giant-universe-win",
                  },
                  {
                    text: "Opera 110.0.5130.66 欧朋浏览器",
                    link: "/software/windows/opera-win",
                  },
                  {
                    text: "LibreOffice 24.2.4 Office办公套件",
                    link: "/software/windows/libreoffice-win",
                  },
                  {
                    text: "lanzouyun 3.4.9 第三方蓝奏云",
                    link: "/software/windows/lanzouyun-win",
                  },
                  {
                    text: "FileMaker Pro 21.0.1.53 定制化App开发软件",
                    link: "/software/windows/filemaker-pro-win",
                  },
                  {
                    text: "Allavsoft 3.27.2.8920 全能视频下载器",
                    link: "/software/windows/allavsoft-win",
                  },
                  {
                    text: "Ableton Live 12 Suite 12.0.5 音乐创作与演奏分析",
                    link: "/software/windows/ableton-live-suite-win",
                  },
                  {
                    text: "XnViewMP 1.7.2 图像管理查看",
                    link: "/software/windows/xnviewmp-win",
                  },
                  {
                    text: "Wondershare PDFelement Professional 10.4.4.2766 +OCR 万兴PDF编辑器",
                    link: "/software/windows/wondershare-pdfelement-professional-win",
                  },
                  {
                    text: "x64dbg 2024-06-03-21-20 反汇编逆向调试",
                    link: "/software/windows/x64dbg",
                  },
                  {
                    text: "Wise Care 365 Pro 6.7.3.648 系统优化清理",
                    link: "/software/windows/wise-care-365-pro",
                  },
                  {
                    text: "ShotCut 24.06.02 Beta 视频编辑器",
                    link: "/software/windows/shotcut-win",
                  },
                  {
                    text: "PixPin 1.8.12.0 截图贴图标注",
                    link: "/software/windows/pixpin",
                  },
                  {
                    text: "Native Instruments Kontakt 7.10.5 音频采样器",
                    link: "/software/windows/native-instruments-kontakt-win",
                  },
                  {
                    text: "IObit Driver Booster Pro 11.5.0.83 硬件驱动更新管理",
                    link: "/software/windows/iobit-driver-booster-pro",
                  },
                  {
                    text: "ESET Smart Security Premium 17.1.13.0 防病毒安全防护",
                    link: "/software/windows/eset",
                  },
                  {
                    text: "EmuraSoft EmEditor Professional 24.2.1 代码编辑器",
                    link: "/software/windows/emurasoft-emeditor-professional",
                  },
                  {
                    text: "Boris FX Silhouette 2024.0.0 视频特效与后期抠像",
                    link: "/software/windows/boris-fx-silhouette-win",
                  },
                  {
                    text: "Ashampoo Music Studio 11.0.1 音频编辑处理",
                    link: "/software/windows/ashampoo-music-studio",
                  },
                  {
                    text: "Affinity Publisher 2.5.2.2486 页面布局设计",
                    link: "/software/windows/affinity-publisher-win",
                  },
                  {
                    text: "Affinity Designer 2.5.2.2486 矢量图形设计",
                    link: "/software/windows/affinity-designer-win",
                  },
                  {
                    text: "Affinity Photo 2.5.2.2486 图像编辑设计",
                    link: "/software/windows/affinity-photo-win",
                  },
                  {
                    text: "微信 3.9.10.27",
                    link: "/software/windows/wechat-win",
                  },
                  {
                    text: "360安全卫士极速版 15.0.2.1032 防病毒安全防护",
                    link: "/software/windows/360-total-security",
                  },
                  {
                    text: "腾讯视频 11.95.4325.0 去广告精简版",
                    link: "/software/windows/qqlive",
                  },
                  {
                    text: "Umi-OCR 2.1.2 离线OCR文字识别",
                    link: "/software/windows/umi-ocr",
                  },
                  {
                    text: "Perfectly Clear WorkBench 4.6.1.2665 +扩展插件 图像清晰度处理",
                    link: "/software/windows/perfectly-clear-workbench-win",
                  },
                  {
                    text: "TTime 0.9.12 划词翻译/截图翻译与截图OCR",
                    link: "/software/windows/ttime-win",
                  },
                  {
                    text: "RustDesk 1.2.5 Beta 远程桌面控制",
                    link: "/software/windows/rustdesk-win",
                  },
                  {
                    text: "Valentina Studio Pro 14.0.0 多连接数据库管理开发",
                    link: "/software/windows/valentina-studio-pro-win",
                  },
                  {
                    text: "MKVToolNix 85.0 MKV视频处理",
                    link: "/software/windows/mkvtoolnix-win",
                  },
                  {
                    text: "iTwin Capture Modeler 2024 Update 1.1 24.1.1.100 3D无人机航测建模",
                    link: "/software/windows/itwin-capture-modeler",
                  },
                  {
                    text: "Upscayl 2.11.5 图像AI放大增强",
                    link: "/software/windows/upscayl-win",
                  },
                  {
                    text: "Togu Audio Line TAL-U-NO-LX-V2 4.9.0 模拟Juno 60合成器插件",
                    link: "/software/windows/togu-audio-line-tal-u-no-lx-v2-win",
                  },
                  {
                    text: "Overloud BREVERB 2.1.18 算法混响效果插件",
                    link: "/software/windows/overloud-breverb-win",
                  },
                  {
                    text: "Siemens NX 2312 Build 7022 UG三维仿真建模设计",
                    link: "/software/windows/siemens-nx",
                  },
                  {
                    text: "Lunacy 9.6.2 UI/UX矢量绘图设计",
                    link: "/software/windows/lunacy-win",
                  },
                  {
                    text: "巨应壁纸LiveWallpaper 3.0.20.0 4K高清动态壁纸",
                    link: "/software/windows/livewallpaper",
                  },
                  {
                    text: "BlueStacks 5.21.206.1006 蓝叠安卓模拟器",
                    link: "/software/windows/bluestacks-win",
                  },
                  {
                    text: "XTerminal 1.25.1 终端模拟器/SSH/SFTP客户端",
                    link: "/software/windows/xterminal-win",
                  },
                  {
                    text: "Irix HDR Pro 2.3.27 HDR图像编辑处理",
                    link: "/software/windows/irix-hdr-pro",
                  },
                  {
                    text: "РotРlayer 1.7.22233 高清视频播放器",
                    link: "/software/windows/potplayer",
                  },
                  {
                    text: "YY语音 9.33.0.1 去广告精简版",
                    link: "/software/windows/yyspeak",
                  },
                  {
                    text: "阿里云盘小白羊XBYDriver 3.13.5 第三方阿里云盘",
                    link: "/software/windows/xbydriver-win",
                  },
                  {
                    text: "WonderPen 2.4.7 妙笔Markdown写作编辑",
                    link: "/software/windows/wonderpen-win",
                  },
                  {
                    text: "uTools 5.1.1 应用插件工具集",
                    link: "/software/windows/utools-win",
                  },
                  {
                    text: "Topaz Photo AI 3.0.4 AI图片智能降噪",
                    link: "/software/windows/topaz-photo-ai-win",
                  },
                  {
                    text: "洛雪音乐 2.8.0 音乐播放下载",
                    link: "/software/windows/lx-music-win",
                  },
                  {
                    text: "Lively Wallpaper 2.1.0.8 4K高清动态壁纸",
                    link: "/software/windows/lively-wallpaper",
                  },
                  {
                    text: "JProfiler 14.0.3 Java 性能分析",
                    link: "/software/windows/jprofiler-win",
                  },
                  {
                    text: "electerm 1.39.35 终端模拟器/SSH/SFTP客户端",
                    link: "/software/windows/electerm-win",
                  },
                  {
                    text: "WonderShare EdrawMax Ultimate 13.0.5.1119 亿图图示设计",
                    link: "/software/windows/wondershare-edrawmax-win",
                  },
                  {
                    text: "优启通EasyU 3.7.2024.0515 高级VIP版 PE装机维护",
                    link: "/software/windows/easyu",
                  },
                  {
                    text: "EasyDrv 8.1.2404.10305 Beta 2 万能驱动VIP版",
                    link: "/software/windows/easydrv",
                  },
                  {
                    text: "Brave Browser 1.66.118 隐私广告拦截浏览器",
                    link: "/software/windows/brave-browser-win",
                  },
                  {
                    text: "Wirecast Pro 16.2.0 视频直播制作",
                    link: "/software/windows/wirecast-pro-win",
                  },
                  {
                    text: "WinRAR 7.01 解压缩软件",
                    link: "/software/windows/winrar",
                  },
                  {
                    text: "Waterfox G6.0.15 水狐浏览器",
                    link: "/software/windows/waterfox-win",
                  },
                  {
                    text: "Wallpaper Engine 2.5.7 Steam动态创意壁纸",
                    link: "/software/windows/wallpaper-engine",
                  },
                  {
                    text: "Vivaldi Browser 6.7.3329.39 快速且私密的浏览器",
                    link: "/software/windows/vivaldi-browser-win",
                  },
                  {
                    text: "ToonTrack Superior Drummer 3.3.7 +Core Library 虚拟鼓音乐制作",
                    link: "/software/windows/toontrack-superior-drummer-win",
                  },
                  {
                    text: "HMCL 3.5.8.248 Minecraft我的世界启动器",
                    link: "/software/windows/hmcl",
                  },
                  {
                    text: "滴答清单TickTick Premium 5.5.1 事务清单管理",
                    link: "/software/windows/ticktick-win",
                  },
                  {
                    text: "Sweet Home 3D 7.4.0 3D室内装潢设计",
                    link: "/software/windows/sweet-home-3d-win",
                  },
                  {
                    text: "Steinberg Nuendo Pro 13.0.40 音频后期制作",
                    link: "/software/windows/steinberg-nuendo-pro-win",
                  },
                  {
                    text: "Steinberg Groove Agent 5.2.10 虚拟鼓手模拟插件",
                    link: "/software/windows/steinberg-groove-agent-win",
                  },
                  {
                    text: "Steinberg Dorico Pro 5.1.40 乐谱编写制作",
                    link: "/software/windows/steinberg-dorico-pro-win",
                  },
                  {
                    text: "Steinberg Cubase Pro 13.0.40 多功能音乐制作",
                    link: "/software/windows/steinberg-cubase-pro-win",
                  },
                  {
                    text: "StartAllBack 3.7.10.4910 开始菜单增强",
                    link: "/software/windows/startallback",
                  },
                  {
                    text: "Rubick 4.2.4 开源插件工具箱",
                    link: "/software/windows/rubick-win",
                  },
                  {
                    text: "Resolume Arena 7.20.1.35767 VJ创作表演",
                    link: "/software/windows/resolume-arena-win",
                  },
                  {
                    text: "Resolume Avenue 7.20.1.35767 VJ调试",
                    link: "/software/windows/resolume-avenue-win",
                  },
                  {
                    text: "Redis Insight 2.50.0 Redis可视化管理",
                    link: "/software/windows/redis-insight-win",
                  },
                  {
                    text: "QuarkXPress 2024 20.1.1.57235 版面编辑设计",
                    link: "/software/windows/quarkxpress-win",
                  },
                  {
                    text: "PowerToys 0.81.1 微软效率工具包",
                    link: "/software/windows/powertoys",
                  },
                  {
                    text: "PixelOver 0.15.2 Beta 像素动画编辑制作",
                    link: "/software/windows/pixelover-win",
                  },
                  {
                    text: "PlayerFab All-In-One 7.0.4.7 4K高清视频播放器",
                    link: "/software/windows/playerfab",
                  },
                  {
                    text: "MediaInfo 24.05 音视频信息提取",
                    link: "/software/windows/mediainfo-win",
                  },
                  {
                    text: "Google Chrome 125.0.6422.142 增强版 谷歌浏览器",
                    link: "/software/windows/google-chrome-plus",
                  },
                  {
                    text: "Google Chrome 125.0.6422.142 谷歌浏览器",
                    link: "/software/windows/google-chrome-win",
                  },
                  {
                    text: "GoodSync Enterprise 12.6.6.6 数据同步备份",
                    link: "/software/windows/goodsync-enterprise",
                  },
                  {
                    text: "DingTalkRevokeMsgPatcher 6.2.1 消息防撤回/多开/消息永不已读",
                    link: "/software/windows/dingtalkrevokemsgpatcher",
                  },
                  {
                    text: "calibre 7.12.0 电子书阅读管理器",
                    link: "/software/windows/calibre-win",
                  },
                  {
                    text: "Burp Suite Pro 2024.5.1 网络渗透测试",
                    link: "/software/windows/burp-suite-pro-win",
                  },
                  {
                    text: "比特彗星BitComet 2.08.5.30 豪华VIP版 BT种子下载器",
                    link: "/software/windows/bitcomet-win",
                  },
                  {
                    text: "balenaEtcher 1.19.21 U盘启动盘制作",
                    link: "/software/windows/balenaetcher-win",
                  },
                  {
                    text: "剪映专业版 6.0.0 Beta 6/CapCut 3.9.0 视频编辑处理",
                    link: "/software/windows/videofusion-win",
                  },
                  {
                    text: "PDF Extra Ultimate 9.30.56026 PDF编辑器",
                    link: "/software/windows/pdf-extra-ultimate",
                  },
                  {
                    text: "Nobe OmniScope 1.10.131 视频调色示波器插件",
                    link: "/software/windows/nobe-omniscope-win",
                  },
                  {
                    text: "Navicat Premium 17.0.4 多连接数据库管理开发",
                    link: "/software/windows/navicat-premium-win",
                  },
                  {
                    text: "MuseScore Studio 4.3.1.241490902 乐谱编曲编辑",
                    link: "/software/windows/musescore-studio-win",
                  },
                  {
                    text: "MAXON CINEMA 4D Studio 2024.3.2 C4D三维动画设计",
                    link: "/software/windows/maxon-cinema-4d-studio-win",
                  },
                  {
                    text: "Master PDF Editor 5.9.84 PDF编辑器",
                    link: "/software/windows/master-pdf-editor",
                  },
                  {
                    text: "LuBan 3D 07.05.2024 鲁班3D建模设计",
                    link: "/software/windows/luban-3d",
                  },
                  {
                    text: "Iperius Backup Full 8.2.0 数据备份恢复",
                    link: "/software/windows/iperius-backup-full",
                  },
                  {
                    text: "IObit Advanced SystemCare Ultimate 16.7.0.113 系统优化清理",
                    link: "/software/windows/iobit-advanced-systemcare-ultimate",
                  },
                  {
                    text: "FireAlpaca 2.11.23 数字绘画软件",
                    link: "/software/windows/firealpaca-win",
                  },
                  {
                    text: "CyberLink ColorDirector Ultra 2024 12.5.4124.0 视频后期调色",
                    link: "/software/windows/cyberlink-colordirector-ultra",
                  },
                  {
                    text: "Ashampoo Snap 16.0.6 屏幕截图编辑",
                    link: "/software/windows/ashampoo-snap",
                  },
                  {
                    text: "BluffTitler Ultimate 16.5.0.7 3D标题特效制作",
                    link: "/software/windows/blufftitler-ultimate",
                  },
                  {
                    text: "爱思助手 8.23.062 iOS设备管理器",
                    link: "/software/windows/i4tools-win",
                  },
                  {
                    text: "Binary Ninja Personal 4.0.5336 逆向编译调试",
                    link: "/software/windows/binary-ninja-personal-win",
                  },
                  {
                    text: "Avast Premium Security 24.5.6116 防病毒安全防护",
                    link: "/software/windows/avast-premium-security",
                  },
                  {
                    text: "Altium Designer 24.5.2.23 PCB电子板设计",
                    link: "/software/windows/altium-designer",
                  },
                  {
                    text: "n-Track Studio Suite 10.1.0.8686 多轨音频制作",
                    link: "/software/windows/n-track-studio-suite-win",
                  },
                  {
                    text: "HEU KMS Activator 42.0.4 Win/Office智能离线激活",
                    link: "/software/windows/heu-kms-activator",
                  },
                  {
                    text: "GlassWire Elite 3.3.678 网络流量监控",
                    link: "/software/windows/glasswire-elite",
                  },
                  {
                    text: "AIDA64 7.30.6900 系统软硬件信息检测",
                    link: "/software/windows/aida64",
                  },
                  {
                    text: "7-Zip 24.06 解压缩软件",
                    link: "/software/windows/7-zip",
                  },
                  {
                    text: "Arturia Farfisa V 1.13.0.4395 电风琴模拟合成器插件",
                    link: "/software/windows/arturia-farfisa-v-win",
                  },
                  {
                    text: "Arturia EQ SITRAL-295 1.3.0.4457 均衡器音频模拟插件",
                    link: "/software/windows/arturia-eq-sitral-295-win",
                  },
                  {
                    text: "Arturia Emulator II V 1.6.0.4395 多音色采样合成器插件",
                    link: "/software/windows/arturia-emulator-ii-v-win",
                  },
                  {
                    text: "Arturia Efx REFRACT 1.0.0.5002 立体声效果处理插件",
                    link: "/software/windows/arturia-efx-refract-win",
                  },
                  {
                    text: "Arturia Efx MOTIONS 1.0.0.4836 声音效果动态处理插件",
                    link: "/software/windows/arturia-efx-motions-win",
                  },
                  {
                    text: "Arturia Efx FRAGMENTS 1.2.0.4457 声音效果实时处理插件",
                    link: "/software/windows/arturia-efx-fragments-win",
                  },
                  {
                    text: "Arturia DX7 V 1.13.0.4395 电台数字合成器插件",
                    link: "/software/windows/arturia-dx7-v-win",
                  },
                  {
                    text: "Arturia Dist TUBE-CULTURE 1.1.1.4457 真空管模拟插件",
                    link: "/software/windows/arturia-dist-tube-culture-win",
                  },
                  {
                    text: "Arturia Dist OPAMP-21 1.1.0.4457 失真效果模拟插件",
                    link: "/software/windows/arturia-dist-opamp-21-win",
                  },
                  {
                    text: "Arturia Dist COLDFIRE 1.1.0.4463 失真效果模拟插件",
                    link: "/software/windows/arturia-dist-coldfire-win",
                  },
                  {
                    text: "SoftMaker Office Professional 2024 Rev S1214.0518 Office办公套件",
                    link: "/software/windows/softmaker-office-professional",
                  },
                  {
                    text: "Kdenlive 24.05.0 非线性视频编辑处理",
                    link: "/software/windows/kdenlive-win",
                  },
                  {
                    text: "FastCopy Pro 5.7.12 文件快速复制",
                    link: "/software/windows/fastcopy-pro",
                  },
                  {
                    text: "向日葵远程控制 15.6.0.64434",
                    link: "/software/windows/sunlogin-win",
                  },
                  {
                    text: "微信键盘 1.1.2.563 微信输入法",
                    link: "/software/windows/wetype-win",
                  },
                  {
                    text: "Houdini FX 20.0.547 3D影视特效渲染",
                    link: "/software/windows/houdini-fx",
                  },
                  {
                    text: "Dehancer Film PS/LR 2.5.0 胶片模拟调色插件",
                    link: "/software/windows/dehancer-film-ps-win",
                  },
                  {
                    text: "FotoJet Photo Editor 1.2.2 图像编辑处理",
                    link: "/software/windows/fotojet-photo-editor-win",
                  },
                  {
                    text: "FotoJet Collage Maker 1.2.9 照片拼图制作",
                    link: "/software/windows/fotojet-collage-maker",
                  },
                  {
                    text: "FotoJet Designer 1.3.4 平面制图设计",
                    link: "/software/windows/fotojet-designer-win",
                  },
                  {
                    text: "VectorStyler 1.1.116 矢量图形设计",
                    link: "/software/windows/vectorstyler-win",
                  },
                  {
                    text: "Wondershare Filmora 13.3.12.7152 万兴神剪手视频编辑器",
                    link: "/software/windows/wondershare-filmora-win",
                  },
                  {
                    text: "Pixzip 2.1.5 图片批量压缩",
                    link: "/software/windows/pixzip-win",
                  },
                  {
                    text: "Process Lasso Pro 14.1.0.20 系统进程实时优化",
                    link: "/software/windows/process-lasso-pro",
                  },
                  {
                    text: "MPad 1.34.1 高级文本编辑器",
                    link: "/software/windows/mpad",
                  },
                  {
                    text: "InternetTest Pro 8.3.1.2405 网络连接状态管理",
                    link: "/software/windows/internettest-pro",
                  },
                  {
                    text: "GibbsCAM 2024 24.0.65.0 CAM数控机床编程",
                    link: "/software/windows/gibbscam",
                  },
                  {
                    text: "DaVinci Resolve Studio 19.0.0.33 Beta 3 达芬奇影视后期调色剪辑",
                    link: "/software/windows/davinci-resolve-studio-win",
                  },
                  {
                    text: "DaVinci Fusion Studio 19.0.0.29 Beta 3 影视后期特效合成",
                    link: "/software/windows/davinci-fusion-studio-win",
                  },
                  {
                    text: "Adobe Premiere Pro 2024 24.4.1.002 视频编辑处理",
                    link: "/software/windows/adobe-premiere-pro-win",
                  },
                  {
                    text: "Adobe Animate 2024 24.0.3.19 动画渲染制作",
                    link: "/software/windows/adobe-animate-win",
                  },
                  {
                    text: "Adobe Media Encoder 2024 24.4.1.002 音视频编码渲染",
                    link: "/software/windows/adobe-media-encoder-win",
                  },
                  {
                    text: "Adobe After Effects 2024 24.4.1.002 视频后期优化处理",
                    link: "/software/windows/adobe-after-effects-win",
                  },
                  {
                    text: "Xmind Pro 2024 24.04.10311 思维导图与头脑风暴",
                    link: "/software/windows/xmind-pro-win",
                  },
                  {
                    text: "VideoProc Converter AI 7.0 全能视频处理",
                    link: "/software/windows/videoproc-converter-win",
                  },
                  {
                    text: "Revit 2025.1 BIM建筑信息3D建模",
                    link: "/software/windows/revit",
                  },
                  {
                    text: "MiniMeters 0.8.19 Beta 音频计量监视器",
                    link: "/software/windows/minimeters-win",
                  },
                  {
                    text: "Mp3tag 3.26 音频标签编辑器",
                    link: "/software/windows/mp3tag-win",
                  },
                  {
                    text: "Install4j 10.0.8 Java 安装程序构建",
                    link: "/software/windows/install4j-win",
                  },
                  {
                    text: "Foxit PDF Editor Pro 2024.2.2.25170 福昕PDF编辑器",
                    link: "/software/windows/foxit-pdf-editor-pro",
                  },
                  {
                    text: "Foxit PDF Reader 2024.2.2.25170 福昕PDF阅读器",
                    link: "/software/windows/foxit-pdf-reader-win",
                  },
                  {
                    text: "Adobe Substance 3D Stager 3.0.2.5806 3D场景渲染设计",
                    link: "/software/windows/adobe-substance-3d-stager-win",
                  },
                  {
                    text: "Adobe Photoshop Lightroom Classic 13.3.0.17 精简版 照片后期处理",
                    link: "/software/windows/adobe-photoshop-lightroom-classic-lite",
                  },
                  {
                    text: "Adobe Creative Cloud 6.2.0.554 Adobe创意云桌面应用",
                    link: "/software/windows/adobe-creative-cloud-win",
                  },
                  {
                    text: "Adobe Photoshop 2024 25.9.0.573 精简版 图像编辑处理设计",
                    link: "/software/windows/adobe-photoshop-lite",
                  },
                  {
                    text: "水豚鼠标助手 1.0.6 鼠标增强辅助",
                    link: "/software/windows/shuitun",
                  },
                  {
                    text: "搜狗拼音输入法 14.5.0.9485 去广告精简版",
                    link: "/software/windows/sogoupyinput-win",
                  },
                  {
                    text: "3DMark Professional 2.29.8256 显卡性能跑分测试",
                    link: "/software/windows/futuremark-3dmark-professional",
                  },
                  {
                    text: "Togu Audio Line TAL-Drum 2.5.3 老式鼓机音频采样插件",
                    link: "/software/windows/togu-audio-line-tal-drum-win",
                  },
                  {
                    text: "VectorWorks 2024 SP5 3D建模渲染设计",
                    link: "/software/windows/vectorworks-win",
                  },
                  {
                    text: "Tower Pro 7.1.483 Git客户端",
                    link: "/software/windows/tower-pro-win",
                  },
                  {
                    text: "Rufus 4.5 U盘启动盘制作",
                    link: "/software/windows/rufus",
                  },
                  {
                    text: "RunJS 2.12.1 JavaScript代码编辑器",
                    link: "/software/windows/runjs-win",
                  },
                  {
                    text: "OriginPro 2024 10.1.0.178 SR1 科学绘图/数据分析",
                    link: "/software/windows/originpro",
                  },
                  {
                    text: "MAGIX Samplitude Pro X8 Suite 19.1.4.23433 音乐编辑制作套件",
                    link: "/software/windows/magix-samplitude-pro-suite",
                  },
                  {
                    text: "KMPlayer 2024.5.23.16 高清视频播放器",
                    link: "/software/windows/kmplayer",
                  },
                  {
                    text: "Joplin 3.0.8 Beta 笔记加密记录与待办事项",
                    link: "/software/windows/joplin-win",
                  },
                  {
                    text: "Kate 24.05.7343 高级文本编辑器",
                    link: "/software/windows/kate-win",
                  },
                  {
                    text: "HiBit Uninstaller 3.2.20 软件深度卸载清理",
                    link: "/software/windows/hibit-uninstaller",
                  },
                  {
                    text: "Fences 5.53 桌面整理归纳",
                    link: "/software/windows/fences",
                  },
                  {
                    text: "Maya 2025.1 3D动画建模设计",
                    link: "/software/windows/maya-win",
                  },
                  {
                    text: "3ds Max 2025.1 3D动画渲染与模型制作",
                    link: "/software/windows/3ds-max",
                  },
                  {
                    text: "Enigma Virtual Box 10.70 软件虚拟化打包工具",
                    link: "/software/windows/enigma-virtual-box",
                  },
                  {
                    text: "Cockos REAPER 7.16 数字音频编辑制作",
                    link: "/software/windows/cockos-reaper-win",
                  },
                  {
                    text: "CCleaner Business 6.24.11060 系统优化清理",
                    link: "/software/windows/ccleaner-professional-win",
                  },
                  {
                    text: "Bandizip Pro 7.35 解压缩软件",
                    link: "/software/windows/bandizip-pro-win",
                  },
                  {
                    text: "BurnAware Professional 17.8 光盘刻录",
                    link: "/software/windows/burnaware-professional",
                  },
                  {
                    text: "Arturia Analog Lab Pro V 5.10.2.4741 音频合成器插件",
                    link: "/software/windows/arturia-analog-lab-pro-v-win",
                  },
                  {
                    text: "Arturia Acid V 1.1.1.4681 经典低音合成器插件",
                    link: "/software/windows/arturia-acid-v-win",
                  },
                  {
                    text: "Adobe Photoshop 2024 25.10.0.2625 Beta +Neural Filters 图像编辑处理设计",
                    link: "/software/windows/adobe-photoshop-win",
                  },
                  {
                    text: "亮鱼剪辑专业版ACDSee Luxea Pro Video Editor 7.1.3.2522 视频编辑处理",
                    link: "/software/windows/acdsee-luxea-pro-video-editor",
                  },
                  {
                    text: "HandBrake 1.8.0 视频格式转换器",
                    link: "/software/windows/handbrake-win",
                  },
                  {
                    text: "Adobe Photoshop Lightroom 7.3 照片管理与编辑处理",
                    link: "/software/windows/adobe-photoshop-lightroom-win",
                  },
                  {
                    text: "ZY Player 3.3.6 视频资源播放器",
                    link: "/software/windows/zy-player-win",
                  },
                  {
                    text: "Native Instruments Maschine 2.18.1 音频采样器",
                    link: "/software/windows/native-instruments-maschine-win",
                  },
                  {
                    text: "HashCalculator 5.23.0 哈希值检测校验",
                    link: "/software/windows/hashcalculator",
                  },
                  {
                    text: "Glary Utilities Pro 6.10.0.14 系统优化清理",
                    link: "/software/windows/glary-utilities-pro",
                  },
                  {
                    text: "Adobe DNG Converter 16.3 RAW图片转DNG格式",
                    link: "/software/windows/adobe-dng-converter-win",
                  },
                  {
                    text: "Arturia Delay TAPE-201 1.6.0.4457 磁带延迟模拟插件",
                    link: "/software/windows/arturia-delay-tape-201-win",
                  },
                  {
                    text: "Arturia Delay ETERNITY 1.6.0.4457 音频模拟延迟插件",
                    link: "/software/windows/arturia-delay-eternity-win",
                  },
                  {
                    text: "Arturia Delay BRIGADE 1.6.0.4457 音频低保真模拟延迟插件",
                    link: "/software/windows/arturia-delay-brigade-win",
                  },
                  {
                    text: "Arturia CZ V 1.9.0.4395 Casio CZ模拟合成器插件",
                    link: "/software/windows/arturia-cz-v-win",
                  },
                  {
                    text: "Arturia CS-80 V 4.3.0.4395 CS-80模拟合成器插件",
                    link: "/software/windows/arturia-cs-80-v-win",
                  },
                  {
                    text: "Arturia CP-70 V 1.0.0.4395 CP-70电钢琴模拟合成器插件",
                    link: "/software/windows/arturia-cp-70-v-win",
                  },
                  {
                    text: "Arturia Comp VCA-65 1.6.0.4457 VCA压缩器模拟插件",
                    link: "/software/windows/arturia-comp-vca-65-win",
                  },
                  {
                    text: "Arturia Comp TUBE-STA 1.6.0.4457 真空管压缩器模拟插件",
                    link: "/software/windows/arturia-comp-tube-sta-win",
                  },
                  {
                    text: "Arturia Comp FET-76 1.6.0.4457 FET压缩器模拟插件",
                    link: "/software/windows/arturia-comp-fet-76-win",
                  },
                  {
                    text: "Arturia Comp DIODE-609 1.3.0.4457 二极管压缩限幅器模拟插件",
                    link: "/software/windows/arturia-comp-diode-609-win",
                  },
                  {
                    text: "Adobe Substance 3D Painter 10.0.0.3640 3D数字绘画设计",
                    link: "/software/windows/adobe-substance-3d-painter-win",
                  },
                  {
                    text: "Beaver Notes 3.2.0 海狸笔记编辑管理",
                    link: "/software/windows/beaver-notes-win",
                  },
                  {
                    text: "MakeHuman 1.2.0 3D人物建模设计",
                    link: "/software/windows/makehuman",
                  },
                  {
                    text: "Notepad2 4.24.05r5242 高级文本编辑器",
                    link: "/software/windows/notepad2",
                  },
                  {
                    text: "IK Multimedia TONEX MAX 1.7.3 逼真音色建模",
                    link: "/software/windows/ik-multimedia-tonex-max-win",
                  },
                  {
                    text: "4K Stogram Pro 4.9.0.4680 Instagram图片查看与下载",
                    link: "/software/windows/4k-stogram-pro-win",
                  },
                  {
                    text: "Toontrack EZBass 1.2.0 虚拟低音贝斯",
                    link: "/software/windows/toontrack-ezbass-win",
                  },
                  {
                    text: "Spark 3.15.5 邮件收发管理",
                    link: "/software/windows/spark-win",
                  },
                  {
                    text: "SourceTree 3.4.18 Git客户端",
                    link: "/software/windows/sourcetree-win",
                  },
                  {
                    text: "SmartFTP Enterprise 10.0.3232 FTP传输客户端",
                    link: "/software/windows/smartftp-enterprise",
                  },
                  {
                    text: "Rhinoceros 8.7.24138.15431 犀牛3D建模",
                    link: "/software/windows/rhinoceros-win",
                  },
                  {
                    text: "Poedit 3.4.4 WP插件汉化/Po文件编辑",
                    link: "/software/windows/poedit-win",
                  },
                  {
                    text: "PCL2 2.7.3 Minecraft我的世界启动器",
                    link: "/software/windows/pcl2",
                  },
                  {
                    text: "Office Tool Plus 10.11.5.0 一键部署微软 Office",
                    link: "/software/windows/office-tool-plus",
                  },
                  {
                    text: "Mountain Duck 4.16.0.22153 FTP/SFTP连接管理",
                    link: "/software/windows/mountain-duck-win",
                  },
                  {
                    text: "MakeMKV 1.17.7 Beta MKV视频格式转换",
                    link: "/software/windows/makemkv-win",
                  },
                  {
                    text: "Inventor Professional 2025.0.1 产品设计与工程制图",
                    link: "/software/windows/inventor-professional",
                  },
                  {
                    text: "HBuilderX 4.15.2024050802 代码编辑器",
                    link: "/software/windows/hbuilderx-win",
                  },
                  {
                    text: "Bitwig Studio 5.1.9 音频编辑处理",
                    link: "/software/windows/bitwig-studio-win",
                  },
                  {
                    text: "Fork 1.97 Git客户端",
                    link: "/software/windows/fork-win",
                  },
                  {
                    text: "FastStone Capture 10.5 屏幕截图录像",
                    link: "/software/windows/faststone-capture",
                  },
                  {
                    text: "Figma EX 124.0.2 UI原型设计",
                    link: "/software/windows/figma-ex-win",
                  },
                  {
                    text: "EditPlus 5.7.0.4632 高级文本编辑器",
                    link: "/software/windows/editplus",
                  },
                  {
                    text: "Cyberduck 8.9.0.41543 FTP/SFTP连接管理",
                    link: "/software/windows/cyberduck-win",
                  },
                  {
                    text: "Capture One 23 Enterprise 16.4.1.2127 RAW图像编辑处理",
                    link: "/software/windows/capture-one-win",
                  },
                  {
                    text: "ACDSee Photo Studio Ultimate 2024 17.1.1.3800 图像数字处理",
                    link: "/software/windows/acdsee-photo-studio-ultimate",
                  },
                  {
                    text: "中望CAD机械版 2025 SP0 国产CAD机械制图设计",
                    link: "/software/windows/zwcad-mechanical",
                  },
                  {
                    text: "网易邮箱大师 5.0.10.1014 邮件收发管理",
                    link: "/software/windows/mailmaster-win",
                  },
                  {
                    text: "人人译视界 3.1.3 视频翻译制作",
                    link: "/software/windows/rrysj-win",
                  },
                  {
                    text: "Sublime Merge 2.0.2096 Git客户端",
                    link: "/software/windows/sublime-merge-win",
                  },
                  {
                    text: "TablePlus 6.0.0 多连接数据库管理开发",
                    link: "/software/windows/tableplus-win",
                  },
                  {
                    text: "Zoner Photo Studio X 19.2403.2.542 数码照片管理",
                    link: "/software/windows/zoner-photo-studio-x",
                  },
                  {
                    text: "Wireshark 4.2.5 网络协议分析",
                    link: "/software/windows/wireshark",
                  },
                  {
                    text: "4K Video Downloader+ 1.6.0.0085 高清视频下载",
                    link: "/software/windows/4k-video-downloader-plus-win",
                  },
                  {
                    text: "VueScan Pro 9.8.33 万能扫描仪驱动",
                    link: "/software/windows/vuescan-pro-win",
                  },
                  {
                    text: "VMware Workstation Pro 17.5.2 虚拟机软件",
                    link: "/software/windows/vmware-workstation-pro",
                  },
                  {
                    text: "μTorrent Pro 3.6.0.47084 BT种子下载器",
                    link: "/software/windows/utorrent-pro",
                  },
                  {
                    text: "UpdatePack7R2 24.5.15 Win 7累积更新包",
                    link: "/software/windows/updatepack7r2",
                  },
                  {
                    text: "Tipard Video Converter Ultimate 10.3.58 视频格式转换",
                    link: "/software/windows/tipard-video-converter-ultimate-win",
                  },
                  {
                    text: "Sublime Text 4.0.4175 代码编辑器",
                    link: "/software/windows/sublime-text-win",
                  },
                  {
                    text: "Start11 2.0.8.1 开始菜单增强",
                    link: "/software/windows/start11",
                  },
                  {
                    text: "SketchUp Pro 2024 24.0.553 草图大师3D绘图设计",
                    link: "/software/windows/sketchup-pro-win",
                  },
                  {
                    text: "Microsoft Office Pro Plus 2021 LTSC 2108.14332.20706 微软Office办公套件",
                    link: "/software/windows/microsoft-office-win",
                  },
                  {
                    text: "IObit Software Updater Pro 6.6.0.26 软件在线更新",
                    link: "/software/windows/iobit-software-updater-pro",
                  },
                  {
                    text: "Guitar Pro 8.1.2.37 吉他编曲与音乐创作",
                    link: "/software/windows/guitar-pro-win",
                  },
                  {
                    text: "Freeplane 1.11.14 思维导图",
                    link: "/software/windows/freeplane-win",
                  },
                  {
                    text: "ExplorerPatcher 22621.3527.65.5 Windows系统增强",
                    link: "/software/windows/explorerpatcher",
                  },
                  {
                    text: "ExamDiff Pro Master Edition 15.0.0.19 文件/文件夹对比",
                    link: "/software/windows/examdiff-pro-master-edition",
                  },
                  {
                    text: "Epic Pen Pro 3.12.148 屏幕画笔标记",
                    link: "/software/windows/epic-pen-pro",
                  },
                  {
                    text: "cFosSpeed 13.01.0001 本地网络延迟优化",
                    link: "/software/windows/cfosspeed",
                  },
                  {
                    text: "CameraBag Pro 2024.2.0 照片滤镜处理",
                    link: "/software/windows/camerabag-pro-win",
                  },
                  {
                    text: "Boris FX Sapphire for PS/LR 2024.51 蓝宝石视觉特效插件",
                    link: "/software/windows/boris-fx-sapphire-for-ps-lr-win",
                  },
                  {
                    text: "Boris FX Sapphire for Avid 2024.51 蓝宝石视觉特效插件",
                    link: "/software/windows/boris-fx-sapphire-for-avid-win",
                  },
                  {
                    text: "Boris FX Sapphire for OFX 2024.51 蓝宝石视觉特效插件",
                    link: "/software/windows/boris-fx-sapphire-for-ofx-win",
                  },
                  {
                    text: "Boris FX Sapphire for AE/PR 2024.51 蓝宝石视觉特效插件",
                    link: "/software/windows/boris-fx-sapphire-for-ae-pr-win",
                  },
                  {
                    text: "Axure RP Team 10.0.0.3920 UI/UX原型交互设计",
                    link: "/software/windows/axure-rp-win",
                  },
                  {
                    text: "Artifact Interactive Garden Planner 3.8.63 园林辅助设计/环境美化",
                    link: "/software/windows/artifact-interactive-garden-planner-win",
                  },
                  {
                    text: "Adobe Bridge 2024 14.1.0.257 文件管理浏览",
                    link: "/software/windows/adobe-bridge-win",
                  },
                  {
                    text: "Adobe Substance 3D Modeler 1.10.0.30 桌面与VR创作3D建模雕刻",
                    link: "/software/windows/adobe-substance-3d-modeler",
                  },
                  {
                    text: "Adobe Acrobat Pro 2024.002.20759 PDF编辑器",
                    link: "/software/windows/adobe-acrobat-pro-win",
                  },
                  {
                    text: "中望CAD专业版 2025 SP0 国产CAD制图设计",
                    link: "/software/windows/zwcad-pro",
                  },
                  {
                    text: "Office Installer Plus 1.15 一键部署微软 Office",
                    link: "/software/windows/office-installer-plus",
                  },
                  {
                    text: "Office 2013-2024 C2R Install 7.7.7.7 一键部署微软 Office",
                    link: "/software/windows/office-c2r-install",
                  },
                  {
                    text: "Prima Cartoonizer 5.2.7 图片转卡通效果",
                    link: "/software/windows/prima-cartoonizer",
                  },
                  {
                    text: "ON1 Effects 2024.3 18.3.0.15358 照片纹理滤镜处理",
                    link: "/software/windows/on1-effects-win",
                  },
                  {
                    text: "Adobe Acrobat Reader 2024.002.20759 PDF阅读器",
                    link: "/software/windows/adobe-acrobat-reader-win",
                  },
                  {
                    text: "Arturia CMI V 1.13.0.4395 Fairlight CMI模拟合成插件",
                    link: "/software/windows/arturia-cmi-v-win",
                  },
                  {
                    text: "Arturia Clavinet V 1.13.0.4395 电子键盘Clavinet模拟插件",
                    link: "/software/windows/arturia-clavinet-v-win",
                  },
                  {
                    text: "Arturia Chorus JUN-6 1.4.0.4457 Juno-6模拟合唱效果插件",
                    link: "/software/windows/arturia-chorus-jun-6-win",
                  },
                  {
                    text: "Arturia Chorus DIMENSION-D 1.4.0.4457 SDD-320 Dimension D合唱效果器模拟插件",
                    link: "/software/windows/arturia-chorus-dimension-d-win",
                  },
                  {
                    text: "Arturia Bus FORCE 1.3.0.4457 母带混音后期插件",
                    link: "/software/windows/arturia-bus-force-win",
                  },
                  {
                    text: "Arturia Buchla Easel V 1.13.0.4395 Buchla模拟合成器插件",
                    link: "/software/windows/arturia-buchla-easel-v-win",
                  },
                  {
                    text: "Arturia B-3 V 2.9.1.4395 电风琴模拟合成插件",
                    link: "/software/windows/arturia-b-3-v-win",
                  },
                  {
                    text: "Arturia Augmented YANGTZE 1.0.0.4679 传统民乐增强模拟插件",
                    link: "/software/windows/arturia-augmented-yangtze-win",
                  },
                  {
                    text: "Arturia Augmented WOODWINDS 1.0.0.4395 木管乐器增强模拟插件",
                    link: "/software/windows/arturia-augmented-woodwinds-win",
                  },
                  {
                    text: "Arturia Augmented VOICES 1.6.0.4395 人声增强模拟插件",
                    link: "/software/windows/arturia-augmented-voices-win",
                  },
                  {
                    text: "Arturia Augmented STRINGS 1.6.0.4395 弦乐器增强模拟插件",
                    link: "/software/windows/arturia-augmented-strings-win",
                  },
                  {
                    text: "Arturia Augmented GRAND PIANO 1.6.0.4395 大钢琴增强插件",
                    link: "/software/windows/arturia-augmented-grand-piano-win",
                  },
                  {
                    text: "Arturia Augmented BRASS 1.1.0.4395 黄铜管乐器演奏插件",
                    link: "/software/windows/arturia-augmented-brass-win",
                  },
                  {
                    text: "Arturia ARP 2600 V 3.13.0.4395 音频模拟合成器插件",
                    link: "/software/windows/arturia-arp-2600-v-win",
                  },
                  {
                    text: "Modern CSV 2.0.8 CSV文件编辑查看",
                    link: "/software/windows/modern-csv-win",
                  },
                  {
                    text: "Tracktion Waveform Pro 13.0.44 波形数字音频编辑制作",
                    link: "/software/windows/tracktion-waveform-pro-win",
                  },
                  {
                    text: "Dawn Launcher 1.4.2 一键快速启动软件",
                    link: "/software/windows/dawn-launcher",
                  },
                  {
                    text: "Snapclear 2.1.0 AI图片背景删除",
                    link: "/software/windows/snapclear-win",
                  },
                  {
                    text: "iZotope Neutron Advanced 4.6.0 智能混音",
                    link: "/software/windows/izotope-neutron-advanced-win",
                  },
                  {
                    text: "iZotope Ozone Advanced 11.0.1 臭氧-音频母带处理",
                    link: "/software/windows/izotope-ozone-advanced-win",
                  },
                  {
                    text: "Bulk Crap Uninstaller 5.8.0 软件深度卸载清理",
                    link: "/software/windows/bulk-crap-uninstaller",
                  },
                  {
                    text: "Adobe Audition 2024 24.4.0.045 数字音频编辑",
                    link: "/software/windows/adobe-audition-win",
                  },
                  {
                    text: "PeaZip 9.8.0 解压缩软件",
                    link: "/software/windows/peazip-win",
                  },
                  {
                    text: "START 0.11.0.17520 腾讯云游戏",
                    link: "/software/windows/start-win",
                  },
                  {
                    text: "Quip 8.41.0 文档编辑器",
                    link: "/software/windows/quip-win",
                  },
                  {
                    text: "Imagenomic Portraiture for PS 4.5.0.4501 图像磨皮滤镜插件",
                    link: "/software/windows/imagenomic-portraiture-for-ps-win",
                  },
                  {
                    text: "Imagenomic Portraiture for LR 4.5.0.4501 图像磨皮滤镜插件",
                    link: "/software/windows/imagenomic-portraiture-for-lr-win",
                  },
                  {
                    text: "CareUEyes Pro 2.3.1 屏幕护眼与蓝光过滤",
                    link: "/software/windows/careueyes-pro",
                  },
                  {
                    text: "WinCHM Pro 5.530 CHM编辑制作",
                    link: "/software/windows/winchm-pro",
                  },
                  {
                    text: "PhpStudy 8.1.1.3 PHP服务器集成开发环境",
                    link: "/software/windows/phpstudy",
                  },
                  {
                    text: "Mixxx 2.4.1 DJ混音制作",
                    link: "/software/windows/mixxx-win",
                  },
                  {
                    text: "Pixelorama 0.11.4 像素动画编辑制作",
                    link: "/software/windows/pixelorama-win",
                  },
                  {
                    text: "Listary Pro 6.3.0.78 文件搜索查找",
                    link: "/software/windows/listary-pro",
                  },
                  {
                    text: "Notepad-- 2.16.0 文本编辑器",
                    link: "/software/windows/notepad-win",
                  },
                  {
                    text: "OCCT 13.0.0.99 硬件稳定性超频测试",
                    link: "/software/windows/occt",
                  },
                  {
                    text: "360压缩 4.0.0.1520 解压缩软件",
                    link: "/software/windows/360zip-win",
                  },
                  {
                    text: "PreSonus Studio One 6 Professional 6.6.1 数字音乐编曲创作",
                    link: "/software/windows/presonus-studio-one-professional-win",
                  },
                  {
                    text: "EndNote 21.3.0.17918 论文文献管理",
                    link: "/software/windows/endnote-win",
                  },
                  {
                    text: "Barcode 2.5.6 条形码生成器",
                    link: "/software/windows/barcode-win",
                  },
                  {
                    text: "FastGestures 2.2.12 鼠标/触控板/屏手势增强",
                    link: "/software/windows/fastgestures",
                  },
                  {
                    text: "TouchDesigner Pro 2023.11760 可视化原型渲染设计",
                    link: "/software/windows/touchdesigner-pro-win",
                  },
                  {
                    text: "Steinberg VST Live Pro 2.0.10.118 终极现场演出系统",
                    link: "/software/windows/steinberg-vst-live-pro-win",
                  },
                  {
                    text: "Snipaste 2.9.1 Beta 截图贴图标注",
                    link: "/software/windows/snipaste-win",
                  },
                  {
                    text: "SecureCRT 9.5.2.3325 终端模拟器/SSH客户端",
                    link: "/software/windows/securecrt-win",
                  },
                  {
                    text: "SecureFX 9.5.2.3325 FTP传输客户端",
                    link: "/software/windows/securefx-win",
                  },
                  {
                    text: "GIMP 2.10.38 图像编辑处理",
                    link: "/software/windows/gimp-win",
                  },
                  {
                    text: "Bilidown 1.1.4 B站视频下载",
                    link: "/software/windows/bilidown",
                  },
                  {
                    text: "4K Tokkit Pro 2.7.2.0930 TikTok视频下载",
                    link: "/software/windows/4k-tokkit-pro-win",
                  },
                  {
                    text: "MobaXterm Professional 24.1.5208 终端模拟器/SSH客户端",
                    link: "/software/windows/mobaxterm-professional",
                  },
                  {
                    text: "Icecream Video Editor Pro 3.19 视频编辑处理",
                    link: "/software/windows/icecream-video-editor-pro",
                  },
                  {
                    text: "Icecream Screen Recorder Pro 7.41 屏幕录像编辑",
                    link: "/software/windows/icecream-screen-recorder-pro",
                  },
                  {
                    text: "IObit Uninstaller Pro 13.5.0.1 软件深度卸载清理",
                    link: "/software/windows/iobit-uninstaller-pro",
                  },
                  {
                    text: "Enscape 3D 3.5.6.204048 可视化实时渲染插件",
                    link: "/software/windows/enscape-3d",
                  },
                  {
                    text: "Qalculate! 5.1.1 全能数学计算器",
                    link: "/software/windows/qalculate",
                  },
                  {
                    text: "InPixio Photo Focus Pro 4.3.8621.22315 模糊照片清晰处理",
                    link: "/software/windows/inpixio-photo-focus-pro",
                  },
                  {
                    text: "InPixio Photo Maximizer Pro 5.3.8621.22315 图片无损缩放",
                    link: "/software/windows/inpixio-photo-maximizer-pro",
                  },
                  {
                    text: "Adobe Dreamweaver 2021 21.4.0.15620 代码编辑器",
                    link: "/software/windows/adobe-dreamweaver-win",
                  },
                  {
                    text: "KORG WAVESTATION 2.4.2 矢量波形合成器插件",
                    link: "/software/windows/korg-wavestation-win",
                  },
                  {
                    text: "KORG Wavestate Native 1.3.7 数字波形合成器插件",
                    link: "/software/windows/korg-wavestate-native-win",
                  },
                  {
                    text: "KORG TRITON Extreme 1.1.1 HI合成器插件",
                    link: "/software/windows/korg-triton-extreme-win",
                  },
                  {
                    text: "KORG Software Pass 1.2.12 KORG系列插件通用许可证",
                    link: "/software/windows/korg-software-pass-win",
                  },
                  {
                    text: "KORG Prophecy 1.6.0 音频合成器插件",
                    link: "/software/windows/korg-prophecy-win",
                  },
                  {
                    text: "KORG Polysix 2.4.3 六音色声道模拟合成器插件",
                    link: "/software/windows/korg-polysix-win",
                  },
                  {
                    text: "KORG Opsix Native 1.2.1 数字合成器插件",
                    link: "/software/windows/korg-opsix-native-win",
                  },
                  {
                    text: "KORG MS-20 2.4.3 音频合成器插件",
                    link: "/software/windows/korg-ms-20-win",
                  },
                  {
                    text: "KORG MonoPoly 2.4.3 多轨合成器插件",
                    link: "/software/windows/korg-monopoly-win",
                  },
                  {
                    text: "KORG Modwave Native 1.2.7 硬件合成器插件",
                    link: "/software/windows/korg-modwave-native-win",
                  },
                  {
                    text: "KORG miniKORG 700 1.1.1 单声道合成器插件",
                    link: "/software/windows/korg-minikorg-700-win",
                  },
                  {
                    text: "KORG microKORG 1.1.0 音频合成器插件",
                    link: "/software/windows/korg-microkorg-win",
                  },
                  {
                    text: "KORG MDE-X 2.4.2 音频合成器插件",
                    link: "/software/windows/korg-mde-x-win",
                  },
                  {
                    text: "KORG M1 2.4.1 音频合成器插件",
                    link: "/software/windows/korg-m1-win",
                  },
                  {
                    text: "KORG LegacyCell 1.8.0 电子双效果模拟插件",
                    link: "/software/windows/korg-legacycell-win",
                  },
                  {
                    text: "KORG KAOSS PAD 1.1.0 动态触摸效果插件",
                    link: "/software/windows/korg-kaoss-pad-win",
                  },
                  {
                    text: "KORG Gadget Plugins 3.0.26 音频合成器插件",
                    link: "/software/windows/korg-gadget-plugins-win",
                  },
                  {
                    text: "KORG ELECTRIBE-R 1.0.2 音频合成效果插件",
                    link: "/software/windows/korg-electribe-r-win",
                  },
                  {
                    text: "KORG ARP ODYSSEY 1.5.3 ARP Odyssey模拟合成器插件",
                    link: "/software/windows/korg-arp-odyssey-win",
                  },
                  {
                    text: "Snagit 2024.1.3 截图贴图录像编辑",
                    link: "/software/windows/snagit-win",
                  },
                  {
                    text: "ColorPicker Max 6.3.0.2405 颜色选择器",
                    link: "/software/windows/colorpicker-max",
                  },
                  {
                    text: "ManicTime Pro 2024.1.1.0 电脑使用时间跟踪管理",
                    link: "/software/windows/manictime-pro",
                  },
                  {
                    text: "HDR Light Studio Automotive 8.2.1.2024.0307 3D灯光贴图渲染",
                    link: "/software/windows/hdr-light-studio-automotive",
                  },
                  {
                    text: "RyTuneX 0.8.2 Win10/11系统优化调整",
                    link: "/software/windows/rytunex",
                  },
                  {
                    text: "TeraCopy Pro 3.17 文件快速复制",
                    link: "/software/windows/teracopy-pro",
                  },
                  {
                    text: "央视影音 6.0.0.5 去广告精简版",
                    link: "/software/windows/cbox",
                  },
                  {
                    text: "暴风影音 9.06.0523.1111 去广告精简版",
                    link: "/software/windows/baofeng",
                  },
                  {
                    text: "电子印章图片生成器 3.0",
                    link: "/software/windows/dianziyinzhang",
                  },
                  {
                    text: "单文件制作工具 7.0.2.38",
                    link: "/software/windows/danwenjianzhizuo",
                  },
                  {
                    text: "GitKraken 9.13.0 Git客户端",
                    link: "/software/windows/gitkraken-win",
                  },
                  {
                    text: "Adobe Illustrator 2024 28.5.0.132 矢量绘图设计",
                    link: "/software/windows/adobe-illustrator-win",
                  },
                  {
                    text: "Wing Pro 10.0.4.0 Python集成开发环境",
                    link: "/software/windows/wing-pro-win",
                  },
                  {
                    text: "VisualCppRedist AIO 0.82.0 微软常用运行库合集",
                    link: "/software/windows/visualcppredist-aio",
                  },
                  {
                    text: "Tracktion Dawesome Novum 1.17 创意视觉合成器插件",
                    link: "/software/windows/tracktion-dawesome-novum-win",
                  },
                  {
                    text: "VirtualBox 7.0.18 虚拟机软件",
                    link: "/software/windows/virtualbox-win",
                  },
                  {
                    text: "The Foundry MODO 17.0v5 3D建模渲染设计",
                    link: "/software/windows/the-foundry-modo-win",
                  },
                  {
                    text: "Icecream Video Converter Pro 1.43 音视频格式转换",
                    link: "/software/windows/icecream-video-converter-pro",
                  },
                  {
                    text: "Icecream PDF Editor Pro 3.23 PDF编辑器",
                    link: "/software/windows/icecream-pdf-editor-pro",
                  },
                  {
                    text: "Icecream Slideshow Maker Pro 5.14 幻灯片制作",
                    link: "/software/windows/icecream-slideshow-maker-pro",
                  },
                  {
                    text: "Icecream Ebook Reader Pro 6.49 Epub电子书阅读",
                    link: "/software/windows/icecream-ebook-reader-pro",
                  },
                  {
                    text: "Icecream Photo Editor Pro 1.50 图像编辑处理",
                    link: "/software/windows/icecream-photo-editor-pro",
                  },
                  {
                    text: "AIMP 5.30.2549 音乐播放器",
                    link: "/software/windows/aimp",
                  },
                  {
                    text: "4K YouTube to MP3 5.3.0.0085 YouTube视频转MP3音频",
                    link: "/software/windows/4k-youtube-to-mp3-win",
                  },
                  {
                    text: "Corel WinZip Pro 28.0.16002 解压缩软件",
                    link: "/software/windows/corel-winzip-pro-win",
                  },
                  {
                    text: "SolidWorks Premium 2024 SP2.0 3D建模辅助设计",
                    link: "/software/windows/solidworks-premium",
                  },
                  {
                    text: "Overloud TH-U Premium 1.4.26 rev2 吉他与贝斯音色模拟",
                    link: "/software/windows/overloud-th-u-premium-win",
                  },
                  {
                    text: "Less Player 0.1.22 音乐播放器",
                    link: "/software/windows/less-player-win",
                  },
                  {
                    text: "GraphPad Prism 10.2.3.403 科研数据绘图分析",
                    link: "/software/windows/graphpad-prism-win",
                  },
                  {
                    text: "Disk Drill Enterprise 5.5.900.0 数据恢复软件",
                    link: "/software/windows/disk-drill-enterprise-win",
                  },
                  {
                    text: "CAXA CAD电子图板 2024 SP2 CAD图纸管理查看",
                    link: "/software/windows/caxa-cad",
                  },
                  {
                    text: "CAXA CAPP工艺图表 2024 SP0 工艺图表制图设计",
                    link: "/software/windows/caxa-capp",
                  },
                  {
                    text: "CAXA 3D实体设计 2024 SP0 3D CAD实体建模设计",
                    link: "/software/windows/caxa-3d",
                  },
                  {
                    text: "BandLab Cakewalk 29.09.0.098 音乐编曲制作",
                    link: "/software/windows/bandlab-cakewalk",
                  },
                  {
                    text: "Airy Pro 2.16.339 YouTube视频下载器",
                    link: "/software/windows/airy-pro-win",
                  },
                  {
                    text: "Tracktion Dawesome Myth 1.10 音频编辑处理插件",
                    link: "/software/windows/tracktion-dawesome-myth-win",
                  },
                  {
                    text: "PDF-XChange Editor Plus 10.3.0.386.0 PDF编辑器",
                    link: "/software/windows/pdf-xchange-editor-plus",
                  },
                  {
                    text: "CrystalDiskInfo 9.3.0 硬盘状态检测",
                    link: "/software/windows/crystaldiskinfo",
                  },
                  {
                    text: "Apowersoft Video Download Capture 6.5.1.1 傲软影片下载王",
                    link: "/software/windows/apower-video-download-capture",
                  },
                  {
                    text: "FFmpeg Batch AV Converter 3.0.6 音视频格式编码转换器",
                    link: "/software/windows/ffmpeg-batch-av-converter",
                  },
                  {
                    text: "CyberLink AudioDirector Ultra 2024 14.4.4024.0 音频编辑制作",
                    link: "/software/windows/cyberlink-audiodirector-ultra",
                  },
                  {
                    text: "Ashampoo AntiSpy Pro 1.5.0 阻止跟踪监听用户",
                    link: "/software/windows/ashampoo-antispy-pro",
                  },
                  {
                    text: "傲梅分区助手AOMEI Partition Assistant Technician 10.4.0 硬盘无损分区",
                    link: "/software/windows/aomei-partition-assistant-technician",
                  },
                  {
                    text: "IObit Malware Fighter Pro 11.2.0.1334 反恶意间谍查杀",
                    link: "/software/windows/iobit-malware-fighter-pro",
                  },
                  {
                    text: "Overloud REmatrix 1.2.12 音频混响效果插件",
                    link: "/software/windows/overloud-rematrix-win",
                  },
                  {
                    text: "Overloud Mark Studio 2.0.19 数字音频模拟插件",
                    link: "/software/windows/overloud-mark-studio-win",
                  },
                  {
                    text: "Overloud Gem Voice 1.0.6 人声后期处理插件",
                    link: "/software/windows/overloud-gem-voice-win",
                  },
                  {
                    text: "Overloud Gem TAPEDESK 1.2.5 暖色调混音模拟插件",
                    link: "/software/windows/overloud-gem-tapedesk-win",
                  },
                  {
                    text: "Overloud Gem Sculptube 1.0.5 声音模拟真空放大插件",
                    link: "/software/windows/overloud-gem-sculptube-win",
                  },
                  {
                    text: "Overloud Gem OTD-2 1.0.5 模拟音频延迟效果插件",
                    link: "/software/windows/overloud-gem-otd-2-win",
                  },
                  {
                    text: "Overloud Gem Modula 1.0.3 三合一人声模拟插件",
                    link: "/software/windows/overloud-gem-modula-win",
                  },
                  {
                    text: "Overloud Gem Mod 1.0.3 复古人声模拟插件",
                    link: "/software/windows/overloud-gem-mod-win",
                  },
                  {
                    text: "Overloud Gem EQP 1.0.3 硬件均衡器模拟插件",
                    link: "/software/windows/overloud-gem-eqp-win",
                  },
                  {
                    text: "Overloud Gem EQ550 1.1.6 硬件均衡器模拟插件",
                    link: "/software/windows/overloud-gem-eq550-win",
                  },
                  {
                    text: "Overloud Gem EQ495 1.2.5 混音母带处理插件",
                    link: "/software/windows/overloud-gem-eq495-win",
                  },
                  {
                    text: "Overloud Gem EQ84 1.3.5 英式录音台EQ模拟插件",
                    link: "/software/windows/overloud-gem-eq84-win",
                  },
                  {
                    text: "Overloud Gem ECHOSON 1.0.7 传奇磁鼓延迟插件",
                    link: "/software/windows/overloud-gem-echoson-win",
                  },
                  {
                    text: "Overloud Gem Dopamine 1.1.9 磁带模拟增强插件",
                    link: "/software/windows/overloud-gem-dopamine-win",
                  },
                  {
                    text: "Overloud Gem Comp76 2.0.10 晶体管压缩机限幅器插件",
                    link: "/software/windows/overloud-gem-comp76-win",
                  },
                  {
                    text: "Overloud Gem Comp670 1.1.7 电子管压缩机限幅器插件",
                    link: "/software/windows/overloud-gem-comp670-win",
                  },
                  {
                    text: "Overloud Gem Comp LA 1.0.7 光电模拟压缩器插件",
                    link: "/software/windows/overloud-gem-comp-la-win",
                  },
                  {
                    text: "Overloud Gem Comp G 1.0.7 VCA总线压缩器插件",
                    link: "/software/windows/overloud-gem-comp-g-win",
                  },
                  {
                    text: "HQPlayer Desktop 5.7.0 高品质音频播放器",
                    link: "/software/windows/hqplayer-desktop-win",
                  },
                  {
                    text: "BiglyBT 3.6.0 BT种子下载器",
                    link: "/software/windows/biglybt-win",
                  },
                  {
                    text: "DevSidecar 1.8.1 开发者边车辅助",
                    link: "/software/windows/devsidecar-win",
                  },
                  {
                    text: "ChemDraw Professional 2023 23.1.1.3 化学结构绘图",
                    link: "/software/windows/chemdraw-professional-win",
                  },
                  {
                    text: "WinMerge 2.16.40 文件/文件夹对比",
                    link: "/software/windows/winmerge",
                  },
                  {
                    text: "Free Download Manager 6.22.0.5714 直链BT续传下载器",
                    link: "/software/windows/free-download-manager-win",
                  },
                  {
                    text: "AnyMP4 Blu-ray Player 6.5.60 蓝光视频播放器",
                    link: "/software/windows/anymp4-blu-ray-player-win",
                  },
                  {
                    text: "RESP 2022.5.1 Redis可视化管理",
                    link: "/software/windows/resp-win",
                  },
                  {
                    text: "PowerISO 8.8 ISO虚拟光驱挂载",
                    link: "/software/windows/poweriso",
                  },
                  {
                    text: "OfficeBox 3.1.2 办公组件百宝箱",
                    link: "/software/windows/officebox",
                  },
                  {
                    text: "Luminar Neo 1.19.0.13323 AI图像编辑处理",
                    link: "/software/windows/luminar-neo-win",
                  },
                  {
                    text: "Logicly 2.0.0 Beta 4 电路逻辑绘图",
                    link: "/software/windows/logicly-win",
                  },
                  {
                    text: "AutoCAD 2025.0.1 精简版 CAD绘图设计",
                    link: "/software/windows/autocad-lite",
                  },
                  {
                    text: "Tracktion F-em 1.2.2 混合四音色合成器插件",
                    link: "/software/windows/tracktion-f-em-win",
                  },
                  {
                    text: "Tracktion Dawesome Love 1.08 微光氛围效果器插件",
                    link: "/software/windows/tracktion-dawesome-love-win",
                  },
                  {
                    text: "Tracktion Dawesome KULT 1.17 音频振荡合成器插件",
                    link: "/software/windows/tracktion-dawesome-kult-win",
                  },
                  {
                    text: "Tracktion Dawesome Abyss 1.3.2 视觉化音色合成器插件",
                    link: "/software/windows/tracktion-dawesome-abyss-win",
                  },
                  {
                    text: "Tracktion Dan Dean Essential Bass 1.0.6 +Library 虚拟低音贝斯合成插件",
                    link: "/software/windows/tracktion-dan-dean-essential-bass",
                  },
                  {
                    text: "Tracktion Collective 1.3.3 +Factory Content 音频采样合成器插件",
                    link: "/software/windows/tracktion-collective-win",
                  },
                  {
                    text: "Tracktion BioTek 2.3.3 +Factory Content 音色合成器插件",
                    link: "/software/windows/tracktion-biotek-win",
                  },
                  {
                    text: "Boris FX Particle Illusion Pro 2024 17.0.5.650 幻影粒子视觉特效",
                    link: "/software/windows/boris-fx-particle-illusion-pro",
                  },
                  {
                    text: "MAMP PRO 5.0.6.7029 Web服务器集成开发环境",
                    link: "/software/windows/mamp-pro-win",
                  },
                  {
                    text: "Serato Studio 2.2.0 +Packs 音频节拍制作",
                    link: "/software/windows/serato-studio-win",
                  },
                  {
                    text: "Serato DJ Pro Suite 3.1.3.363 DJ混音制作",
                    link: "/software/windows/serato-dj-pro-suite-win",
                  },
                  {
                    text: "Notepads 1.5.5.0 轻量级纯文本编辑器",
                    link: "/software/windows/notepads",
                  },
                  {
                    text: "Audacity 3.5.1 音频编辑制作",
                    link: "/software/windows/audacity-win",
                  },
                  {
                    text: "AnyTrans for iOS 8.9.6.20240424 iPhone数据传输管理",
                    link: "/software/windows/anytrans-for-ios-win",
                  },
                  {
                    text: "AnyDesk 8.0.10 远程桌面控制",
                    link: "/software/windows/anydesk-win",
                  },
                  {
                    text: "火绒安全软件 6.0.0.23 广告弹窗拦截",
                    link: "/software/windows/huorong",
                  },
                  {
                    text: "Imaginando K7D 1.4.1 老式磁带延迟插件",
                    link: "/software/windows/imaginando-k7d-win",
                  },
                  {
                    text: "WinDynamicDesktop 5.5.0 根据时间自动切换桌面壁纸",
                    link: "/software/windows/windynamicdesktop",
                  },
                  {
                    text: "Logseq 0.10.9 知识笔记管理",
                    link: "/software/windows/logseq-win",
                  },
                  {
                    text: "Everything 1.5.0.1367a 文件搜索利器",
                    link: "/software/windows/everything",
                  },
                  {
                    text: "Adobe InDesign 2024 19.4.0.063 版面设计与排版编辑",
                    link: "/software/windows/adobe-indesign-win",
                  },
                  {
                    text: "Adobe InCopy 2024 19.4.0.063 创意写作编辑",
                    link: "/software/windows/adobe-incopy-win",
                  },
                  {
                    text: "Adobe Captivate 12.3.0.12 屏幕录制演示",
                    link: "/software/windows/adobe-captivate-win",
                  },
                  {
                    text: "Adguard 7.17.4709.0 广告过滤拦截",
                    link: "/software/windows/adguard-win",
                  },
                  {
                    text: "WindTerm 2.6.1 终端模拟器/SSH/SFTP客户端",
                    link: "/software/windows/windterm-win",
                  },
                  {
                    text: "KeyboardTest 4.0.1003 键盘按键测试",
                    link: "/software/windows/keyboardtest",
                  },
                  {
                    text: "JetBrains DataSpell 2024.1.1 数据科学家开发环境",
                    link: "/software/windows/jetbrains-dataspell-win",
                  },
                  {
                    text: "GenP 3.4.13 Beta 4 Adobe软件一键激活工具",
                    link: "/software/windows/genp",
                  },
                  {
                    text: "Boris FX Continuum Complete for Avid 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/windows/boris-fx-continuum-complete-for-avid-win",
                  },
                  {
                    text: "PicGo 2.4.0 Beta 7 图床上传",
                    link: "/software/windows/picgo-win",
                  },
                  {
                    text: "PhotoScape X Pro 4.2.2 图像编辑处理",
                    link: "/software/windows/photoscape-x-pro-win",
                  },
                  {
                    text: "Avid Pro Tools 2021.7.0 音频混音编辑套件",
                    link: "/software/windows/avid-pro-tools",
                  },
                  {
                    text: "Moneydance 2024.1.5118 个人财务管理",
                    link: "/software/windows/moneydance-win",
                  },
                  {
                    text: "Xftp 7.0.0155 FTP传输客户端",
                    link: "/software/windows/xftp",
                  },
                  {
                    text: "GPU-Z 2.59.0 显卡信息检测",
                    link: "/software/windows/gpu-z",
                  },
                  {
                    text: "CyberLink YouCam 10.1.2717.1 网络摄像头特效",
                    link: "/software/windows/cyberlink-youcam",
                  },
                  {
                    text: "Togu Audio Line TAL-Pha 1.2.0 模拟Alpha Juno II合成器插件",
                    link: "/software/windows/togu-audio-line-tal-pha-win",
                  },
                  {
                    text: "PTC Creo 11.0.0.0 3D/CAD模型辅助设计",
                    link: "/software/windows/ptc-creo",
                  },
                  {
                    text: "iZotope Trash 1.2.0 音频失真效果插件",
                    link: "/software/windows/izotope-trash-win",
                  },
                  {
                    text: "Boris FX Continuum Complete for OFX 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/windows/boris-fx-continuum-complete-for-ofx-win",
                  },
                  {
                    text: "BandLab Cakewalk Sonar 30.04.0.431 数字音频编曲制作",
                    link: "/software/windows/bandlab-cakewalk-sonar",
                  },
                  {
                    text: "Boris FX Continuum Complete for Adobe 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/windows/boris-fx-continuum-complete-for-adobe-win",
                  },
                  {
                    text: "AutoCAD 2025.0.1 CAD绘图设计",
                    link: "/software/windows/autocad-win",
                  },
                  {
                    text: "4K Image Compressor Pro 1.4.0.0220 图片批量压缩",
                    link: "/software/windows/4k-image-compressor-pro-win",
                  },
                  {
                    text: "Adobe Substance 3D Designer 13.1.2.7745 3D纹理材料制作",
                    link: "/software/windows/adobe-substance-3d-designer-win",
                  },
                  {
                    text: "Waves Ultimate 14 2024.04.14 Waves音频后期混音套件",
                    link: "/software/windows/waves-ultimate-win",
                  },
                  {
                    text: "TortoiseSVN 1.14.7 SVN客户端",
                    link: "/software/windows/tortoisesvn",
                  },
                  {
                    text: "DxO ViewPoint 4.16.0.302 照片修复校正",
                    link: "/software/windows/dxo-viewpoint-win",
                  },
                  {
                    text: "DxO FilmPack 7.6.0.515 胶片模拟效果滤镜",
                    link: "/software/windows/dxo-filmpack-win",
                  },
                  {
                    text: "DxO PhotoLab Elite 7.6.0.189 RAW图像编辑处理",
                    link: "/software/windows/dxo-photolab-elite-win",
                  },
                  {
                    text: "DxO Nik Collection 6.10.0 PS滤镜插件套装",
                    link: "/software/windows/dxo-nik-collection-win",
                  },
                  {
                    text: "D16 Group Nepheton 2.0.2 808鼓机模拟器插件",
                    link: "/software/windows/d16-group-nepheton-win",
                  },
                  {
                    text: "D16 Group Drumazon 2.0.5 909鼓机模拟器插件",
                    link: "/software/windows/d16-group-drumazon-win",
                  },
                  {
                    text: "Blender 4.1.1 3D动画建模渲染设计",
                    link: "/software/windows/blender-win",
                  },
                  {
                    text: "Blossom 1.16.0 Markdown云端写作编辑",
                    link: "/software/windows/blossom-win",
                  },
                  {
                    text: "Bandicam 7.1.1.2158 班迪高清录屏",
                    link: "/software/windows/bandicam",
                  },
                  {
                    text: "飞扬PDF转换器 1.0.4 PDF编辑转换器",
                    link: "/software/windows/fypdf",
                  },
                  {
                    text: "Steinberg WaveLab Pro 12.0.20 音频母带处理",
                    link: "/software/windows/steinberg-wavelab-pro-win",
                  },
                  {
                    text: "D16 Group Toraverb 2.2.2 高品质混响效果插件",
                    link: "/software/windows/d16-group-toraverb-win",
                  },
                  {
                    text: "D16 Group Tekturon 1.2.2 多级分隔延迟效果插件",
                    link: "/software/windows/d16-group-tekturon-win",
                  },
                  {
                    text: "D16 Group Syntorus 2.2.2 BBD模拟合唱效果插件",
                    link: "/software/windows/d16-group-syntorus-win",
                  },
                  {
                    text: "D16 Group Spacerek 1.2.3 虚拟空间混响插件",
                    link: "/software/windows/d16-group-spacerek-win",
                  },
                  {
                    text: "D16 Group Sigmund 2.0.0 多频延时效果插件",
                    link: "/software/windows/d16-group-sigmund-win",
                  },
                  {
                    text: "D16 Group Repeater 1.2.2 延时/回声效果插件",
                    link: "/software/windows/d16-group-repeater-win",
                  },
                  {
                    text: "D16 Group Redoptor 2.2.2 电子管失真模拟器插件",
                    link: "/software/windows/d16-group-redoptor-win",
                  },
                  {
                    text: "D16 Group PunchBox 1.0.8 低音鼓合成器插件",
                    link: "/software/windows/d16-group-punchbox-win",
                  },
                  {
                    text: "D16 Group Phoscyon 2.1.0 303低音合成器插件",
                    link: "/software/windows/d16-group-phoscyon-win",
                  },
                  {
                    text: "D16 Group Lush 2.0.1 音色合成器插件",
                    link: "/software/windows/d16-group-lush-win",
                  },
                  {
                    text: "D16 Group Godfazer 1.2.3 调制效果器插件",
                    link: "/software/windows/d16-group-godfazer-win",
                  },
                  {
                    text: "D16 Group Frontier 1.2.2 透明压缩器插件",
                    link: "/software/windows/d16-group-frontier-win",
                  },
                  {
                    text: "D16 Group Fazortan 2.2.2 相位器模拟插件",
                    link: "/software/windows/d16-group-fazortan-win",
                  },
                  {
                    text: "D16 Group Devastor 2.3.2 多频段失真滤波效果器插件",
                    link: "/software/windows/d16-group-devastor-win",
                  },
                  {
                    text: "D16 Group Decimort 2.3.2 经典老式采样器插件",
                    link: "/software/windows/d16-group-decimort-win",
                  },
                  {
                    text: "D16 Group Antresol 1.3.2 模拟混响效果器插件",
                    link: "/software/windows/d16-group-antresol-win",
                  },
                  {
                    text: "FileZilla 3.67.0 FTP传输客户端",
                    link: "/software/windows/filezilla-win",
                  },
                  {
                    text: "Advanced Installer Architect 21.6.0 安装包制作",
                    link: "/software/windows/advanced-installer-architect",
                  },
                  {
                    text: "Imaginando BAM 1.1.0 音频节拍制作插件",
                    link: "/software/windows/imaginando-bam",
                  },
                  {
                    text: "AquaSoft Video Vision 15.2.04 幻灯片电子相册制作",
                    link: "/software/windows/aquasoft-video-vision",
                  },
                  {
                    text: "AquaSoft Stages 15.2.04 多媒体动画制作",
                    link: "/software/windows/aquasoft-stages",
                  },
                  {
                    text: "AquaSoft Photo Vision 15.2.04 图像编辑处理",
                    link: "/software/windows/aquasoft-photo-vision",
                  },
                  {
                    text: "Windows11轻松设置 1.09 Win11系统设置优化",
                    link: "/software/windows/win11-easy-settings",
                  },
                  {
                    text: "Togu Audio Line TAL-Sampler 4.5.4 模拟建模合成器插件",
                    link: "/software/windows/togu-audio-line-tal-sampler-win",
                  },
                  {
                    text: "Togu Audio Line TAL-Mod 1.9.6 虚拟模拟合成器插件",
                    link: "/software/windows/togu-audio-line-tal-mod-win",
                  },
                  {
                    text: "Togu Audio Line TAL-Dub-X 2.1.0 音频延迟效果插件",
                    link: "/software/windows/togu-audio-line-tal-dub-x-win",
                  },
                  {
                    text: "Togu Audio Line TAL-Dac 2.0.3 模拟老式数模转换器插件",
                    link: "/software/windows/togu-audio-line-tal-dac-win",
                  },
                  {
                    text: "Togu Audio Line TAL-BassLine-101 3.9.0 单声道低音合成器插件",
                    link: "/software/windows/togu-audio-line-tal-bassline-101-win",
                  },
                  {
                    text: "傲梅轻松备份AOMEI Backupper Technician Plus 7.3.5 系统数据备份恢复",
                    link: "/software/windows/aomei-backupper-technician-plus",
                  },
                  {
                    text: "IK Multimedia T-RackS 5.10.4 混音母带处理",
                    link: "/software/windows/ik-multimedia-t-racks-win",
                  },
                  {
                    text: "IK Multimedia Syntronik 2.1.1 Syntronik虚拟合成器",
                    link: "/software/windows/ik-multimedia-syntronik-win",
                  },
                  {
                    text: "IK Multimedia SampleTank 4.2.3 音频采样器",
                    link: "/software/windows/ik-multimedia-sampletank-win",
                  },
                  {
                    text: "IK Multimedia MODO DRUM 1.5.0 虚拟鼓乐器",
                    link: "/software/windows/ik-multimedia-modo-drum-win",
                  },
                  {
                    text: "IK Multimedia MODO BASS 2.0.2 贝斯建模合成器",
                    link: "/software/windows/ik-multimedia-modo-bass-win",
                  },
                  {
                    text: "IK Multimedia MixBox 1.5.0 音频混音效果器",
                    link: "/software/windows/ik-multimedia-mixbox-win",
                  },
                  {
                    text: "IK Multimedia Lurssen Mastering Console 1.1.1 音频母带处理",
                    link: "/software/windows/ik-multimedia-lurssen-mastering-console-win",
                  },
                  {
                    text: "IK Multimedia Hammond B-3X 1.3.4 虚拟B3风琴",
                    link: "/software/windows/ik-multimedia-hammond-b-3x-win",
                  },
                  {
                    text: "IK Multimedia ARC System 4.0.0 音频声场校准",
                    link: "/software/windows/ik-multimedia-arc-system-win",
                  },
                  {
                    text: "IK Multimedia AmpliTube 5.7.5 虚拟吉他与贝斯效果器",
                    link: "/software/windows/ik-multimedia-amplitube-win",
                  },
                  {
                    text: "Pot 2.7.10 划词翻译/截图翻译与截图OCR",
                    link: "/software/windows/pot-win",
                  },
                  {
                    text: "MuMuPlayer 12 3.8.13.2805 网易MuMu安卓模拟器",
                    link: "/software/windows/mumuplayer-win",
                  },
                  {
                    text: "TSMaster 2023.5.7.864 汽车CAN总线分析/标定/诊断/仿真",
                    link: "/software/windows/tsmaster",
                  },
                  {
                    text: "WingetUI 3.0.2 CLI软件包管理器",
                    link: "/software/windows/wingetui",
                  },
                  {
                    text: "Red Giant VFX Suite 2024.2.0 红巨星视频特效插件套装",
                    link: "/software/windows/red-giant-vfx-suite-win",
                  },
                  {
                    text: "Red Giant Trapcode Suite 2024.2.0 红巨星粒子特效插件套装",
                    link: "/software/windows/red-giant-trapcode-suite-win",
                  },
                  {
                    text: "Red Giant Magic Bullet Suite 2024.2.0 红巨星调色降噪插件套装",
                    link: "/software/windows/red-giant-magic-bullet-suite-win",
                  },
                  {
                    text: "PureBasic LTS 6.10 BASIC语言编辑器",
                    link: "/software/windows/purebasic-win",
                  },
                  {
                    text: "ON1 NoNoise AI 2024.3 18.3.0.15302 摄影照片智能降噪",
                    link: "/software/windows/on1-nonoise-ai-win",
                  },
                  {
                    text: "OcenAudio 3.13.8 音频编辑制作",
                    link: "/software/windows/ocenaudio-win",
                  },
                  {
                    text: "Maxon App 2024.3.0 创意插件合集",
                    link: "/software/windows/maxon-app-win",
                  },
                  {
                    text: "Geekbench Pro 6.3.0 硬件性能基准测试",
                    link: "/software/windows/geekbench-pro-win",
                  },
                  {
                    text: "CyberLink Power2Go Platinum 13.0.5924.0 威力酷烧光盘刻录",
                    link: "/software/windows/cyberlink-power2go-platinum",
                  },
                  {
                    text: "XDown 2.0.8.6 多线程种子下载器",
                    link: "/software/windows/xdown-win",
                  },
                  {
                    text: "iTop Data Recovery Pro 4.3.0.677 数据恢复软件",
                    link: "/software/windows/iobit-itop-data-recovery",
                  },
                  {
                    text: "Caprine 2.60.1 第三方Facebook",
                    link: "/software/windows/caprine-win",
                  },
                  {
                    text: "Adobe Premiere Elements 2024.2 视频编辑合成",
                    link: "/software/windows/adobe-premiere-elements-win",
                  },
                  {
                    text: "Adobe Photoshop Elements 2024.2 图像编辑处理",
                    link: "/software/windows/adobe-photoshop-elements-win",
                  },
                  {
                    text: "IObit Smart Defrag Pro 9.4.0.342 磁盘碎片整理",
                    link: "/software/windows/iobit-smart-defrag-pro",
                  },
                  {
                    text: "ON1 Photo RAW MAX 2024.3 18.3.0.15302 摄影RAW图像处理",
                    link: "/software/windows/on1-photo-raw-win",
                  },
                  {
                    text: "EasyUEFI Enterprise 5.5 UEFI启动项管理",
                    link: "/software/windows/easyuefi-enterprise",
                  },
                  {
                    text: "QtScrcpy 2.2.1 Android实时投屏控制",
                    link: "/software/windows/qtscrcpy-win",
                  },
                  {
                    text: "Imaginando VS 1.5.0 视觉合成器插件",
                    link: "/software/windows/imaginando-vs-win",
                  },
                  {
                    text: "Imaginando FRMS 1.10.0 颗粒合成器插件",
                    link: "/software/windows/imaginando-frms-win",
                  },
                  {
                    text: "Imaginando DRC 2.9.3 虚拟模拟合成器插件",
                    link: "/software/windows/imaginando-drc-win",
                  },
                  {
                    text: "Steinberg Retrologue 2.3.0 减法合成器插件",
                    link: "/software/windows/steinberg-retrologue-win",
                  },
                  {
                    text: "Steinberg PadShop 2.2.0 虚拟合成器插件",
                    link: "/software/windows/steinberg-padshop-win",
                  },
                  {
                    text: "Steinberg Backbone 1.6.0 虚拟鼓合成器插件",
                    link: "/software/windows/steinberg-backbone-win",
                  },
                  {
                    text: "Native Instruments Supercharger GT 1.4.5 仿真电子管压缩器插件",
                    link: "/software/windows/native-instruments-supercharger-gt-win",
                  },
                  {
                    text: "Native Instruments Reaktor 6.5.0 音乐合成效果器",
                    link: "/software/windows/native-instruments-reaktor-win",
                  },
                  {
                    text: "Native Instruments FM8 1.4.6 FM8音频合成器",
                    link: "/software/windows/native-instruments-fm8-win",
                  },
                  {
                    text: "Native Instruments Battery 4.3.0 rev5 虚拟鼓机采样",
                    link: "/software/windows/native-instruments-battery-win",
                  },
                  {
                    text: "Acon Digital Acoustica Premium 7.5.5 数字音频编辑制作",
                    link: "/software/windows/acon-digital-acoustica-premium-win",
                  },
                  {
                    text: "FileLocator Pro 2022.3425 文件搜索查找",
                    link: "/software/windows/filelocator-pro",
                  },
                  {
                    text: "Boris FX Mocha Pro for Avid 2024 11.0.1.13 平面跟踪摄像机反求插件",
                    link: "/software/windows/boris-fx-mocha-pro-for-avid-win",
                  },
                  {
                    text: "ZCANPRO 2.2.7 汽车CAN总线分析",
                    link: "/software/windows/zcanpro",
                  },
                  {
                    text: "Uninstall Tool 3.7.4.5725 软件深度卸载清理",
                    link: "/software/windows/uninstall-tool",
                  },
                  {
                    text: "Toontrack EZkeys 2.0.5 音乐合成制作",
                    link: "/software/windows/toontrack-ezkeys-win",
                  },
                  {
                    text: "He3 2.0.20 终极开发者工具箱",
                    link: "/software/windows/he3-win",
                  },
                  {
                    text: "浩辰CAD专业版 2024 SP2 Bulid 240327 国产CAD制图设计",
                    link: "/software/windows/gstarcad-pro",
                  },
                  {
                    text: "CANoe 17.0 SP3 汽车CAN总线开发环境",
                    link: "/software/windows/canoe",
                  },
                  {
                    text: "Bypass 1.16.25 12306分流抢票助手",
                    link: "/software/windows/bypass",
                  },
                  {
                    text: "Adobe Fresco 5.5.0.1380 绘图绘画手绘",
                    link: "/software/windows/adobe-fresco",
                  },
                  {
                    text: "搞机工具箱 9.91 Android免ROOT调试",
                    link: "/software/windows/adbwinapi",
                  },
                  {
                    text: "360文件夹 11.0.0.1140 多标签的资源管理器",
                    link: "/software/windows/360file",
                  },
                  {
                    text: "360桌面助手 11.0.0.1981 桌面文件整理",
                    link: "/software/windows/360desktop",
                  },
                  {
                    text: "PowerArchiver Professional 2021 20.00.62 解压缩软件",
                    link: "/software/windows/powerarchiver-professional",
                  },
                  {
                    text: "Alley 0.1.6 小路速传-局域网文件共享",
                    link: "/software/windows/alley-win",
                  },
                  {
                    text: "wallhaven 4.4.6 高清动静态壁纸",
                    link: "/software/windows/wallhaven-win",
                  },
                  {
                    text: "Marvelous Designer Personal 2024.0.125.47553 3D服装设计",
                    link: "/software/windows/marvelous-designer-win",
                  },
                  {
                    text: "Imagenomic Noiseware for PS 6.0.4.6041 图像降噪插件",
                    link: "/software/windows/imagenomic-noiseware-for-ps-win",
                  },
                  {
                    text: "Listen 1 2.32.0 全网付费音乐免费听",
                    link: "/software/windows/listen1-win",
                  },
                  {
                    text: "Ashampoo Driver Updater 1.6.2 驱动更新管理",
                    link: "/software/windows/ashampoo-driver-updater",
                  },
                  {
                    text: "中望CAD建筑版 2024 SP1.3 国产CAD建筑制图设计",
                    link: "/software/windows/zwcad-architecture",
                  },
                  {
                    text: "2345看图王 11.3.0.10162 图像管理查看",
                    link: "/software/windows/2345pic",
                  },
                  {
                    text: "AOMEI MyRecover Technician 3.6.1 傲梅数据恢复",
                    link: "/software/windows/aomei-myrecover-technician",
                  },
                  {
                    text: "Buttercup 2.27.0 密码管理器",
                    link: "/software/windows/buttercup-win",
                  },
                  {
                    text: "Nuro Audio Xrider 1.0.1 智能响度效果器插件",
                    link: "/software/windows/nuro-audio-xrider-win",
                  },
                  {
                    text: "iZotope VEA 1.0.2 音频AI增强器插件",
                    link: "/software/windows/izotope-vea-win",
                  },
                  {
                    text: "VMware InstallBuilder Enterprise 24.3.0 安装包制作",
                    link: "/software/windows/vmware-installbuilder-enterprise-win",
                  },
                  {
                    text: "AI FaceSwap 2.2.0 图像AI识别换脸",
                    link: "/software/windows/ai-faceswap",
                  },
                  {
                    text: "qBittorrent Enhanced Edition 4.6.4.10 BT种子下载器",
                    link: "/software/windows/qbittorrent-enhanced-edition-win",
                  },
                  {
                    text: "Rekordbox 6 Professional 6.8.4 DJ音乐处理",
                    link: "/software/windows/rekordbox-win",
                  },
                  {
                    text: "Native Instruments Komplete Kontrol 3.2.1 MIDI键盘音源制作",
                    link: "/software/windows/native-instruments-komplete-kontrol-win",
                  },
                  {
                    text: "iA Writer 1.4.8748.18429 Markdown写作编辑",
                    link: "/software/windows/ia-writer-win",
                  },
                  {
                    text: "Dehancer Pro AE/PR 7.1.1 胶片模拟调色插件",
                    link: "/software/windows/dehancer-pro-ae-pr-win",
                  },
                  {
                    text: "Bing Wallpaper 2.0.0.6 每天自动更新必应壁纸",
                    link: "/software/windows/bing-wallpaper-win",
                  },
                  {
                    text: "Mudbox 2025 3D数字绘画雕刻设计",
                    link: "/software/windows/mudbox-win",
                  },
                  {
                    text: "AutoCAD Plant 3D 2025 工厂工艺绘图设计",
                    link: "/software/windows/autocad-plant-3d",
                  },
                  {
                    text: "Adobe Speech to Text PR 2024 2.1.4 PR语音转文字插件",
                    link: "/software/windows/adobe-speech-to-text-win",
                  },
                  {
                    text: "闪豆下载器 4.0.20240325 多平台视频下载器",
                    link: "/software/windows/shandou-video-download",
                  },
                  {
                    text: "Cycling 74 Max 8.6.2 音乐可视化编程",
                    link: "/software/windows/cycling-74-max-win",
                  },
                  {
                    text: "Stellarium 24.1.0 天象虚拟天文馆",
                    link: "/software/windows/stellarium-win",
                  },
                  {
                    text: "ScreenToGif 2.41 GIF动态图录制",
                    link: "/software/windows/screentogif",
                  },
                  {
                    text: "MAGIX SOUND FORGE Pro Suite 18.0.0.21 音频编辑制作套件",
                    link: "/software/windows/magix-sound-forge-pro-suite",
                  },
                  {
                    text: "Dehancer Pro OFX 7.1.3 胶片模拟调色插件",
                    link: "/software/windows/dehancer-pro-ofx-win",
                  },
                  {
                    text: "SonomaWallpaper 1.2 Win使用Mac Sonoma 4K动态屏保壁纸",
                    link: "/software/windows/sonomawallpaper",
                  },
                  {
                    text: "Charles 4.6.6 网络协议抓包调试",
                    link: "/software/windows/charles-win",
                  },
                  {
                    text: "The Foundry Katana 7.0v3 视觉灯光渲染与照明增强",
                    link: "/software/windows/the-foundry-katana",
                  },
                  {
                    text: "MathWorks MATLAB R2024a 24.1.0.2537033 算法开发/数据分析/模型创建",
                    link: "/software/windows/mathworks-matlab-win",
                  },
                  {
                    text: "ActivePresenter Professional 9.1.4 屏幕录像编辑",
                    link: "/software/windows/activepresenter-professional",
                  },
                  {
                    text: "PG Music Band-in-a-Box 2024 Build 1110 智能作曲伴奏",
                    link: "/software/windows/pg-music-band-in-a-box",
                  },
                  {
                    text: "FirPE 1.9.1 PE装机维护",
                    link: "/software/windows/firpe",
                  },
                  {
                    text: "CowPE 23H2 龙年新春维护版 PE装机维护",
                    link: "/software/windows/cowpe",
                  },
                  {
                    text: "恒星播放器 20240221180352 全格式高清4K视频播放器",
                    link: "/software/windows/stellarplayer-win",
                  },
                  {
                    text: "CopyQ 8.0.0 剪贴板管理",
                    link: "/software/windows/copyq-win",
                  },
                  {
                    text: "Clip Studio Paint EX 3.0.0 CSP漫画绘图设计",
                    link: "/software/windows/clip-studio-paint-ex-win",
                  },
                  {
                    text: "Room Arranger 9.8.3.645 3D室内设计",
                    link: "/software/windows/room-arranger-win",
                  },
                  {
                    text: "Adobe Flash Player 34.0.0.308 去广告版",
                    link: "/software/windows/adobe-flash-player",
                  },
                  {
                    text: "尼康工坊 1.6.1 图像编辑处理",
                    link: "/software/windows/nx-studio-win",
                  },
                  {
                    text: "爱奇艺视频 12.2.5.7850 去广告精简版",
                    link: "/software/windows/iqiyi",
                  },
                  {
                    text: "UniFab Toolkit 1.0.2.3 多媒体编辑工具箱",
                    link: "/software/windows/unifab-toolkit",
                  },
                  {
                    text: "The Foundry Mari 7.0v2 3D纹理绘画设计",
                    link: "/software/windows/the-foundry-mari-win",
                  },
                  {
                    text: "ProPresenter 7.16.1 文稿分屏演示",
                    link: "/software/windows/propresenter-win",
                  },
                  {
                    text: "Antares Auto-Tune Pro X 10.3.1 人声自动修音插件",
                    link: "/software/windows/antares-auto-tune-pro",
                  },
                  {
                    text: "Final2x 1.2.0 图像AI放大增强",
                    link: "/software/windows/final2x-win",
                  },
                  {
                    text: "Cutter 2.3.4 反汇编逆向调试",
                    link: "/software/windows/cutter-win",
                  },
                  {
                    text: "DVDFab Photo Enhancer AI 1.0.2.3 图像AI增强修复",
                    link: "/software/windows/dvdfab-photo-enhancer-ai",
                  },
                  {
                    text: "DVDFab Video Enhancer AI 1.0.3.3 视频AI增强处理",
                    link: "/software/windows/dvdfab-video-enhancer-ai",
                  },
                  {
                    text: "PhotoDiva 5.0 图像AI增强修饰",
                    link: "/software/windows/photodiva",
                  },
                  {
                    text: "CargoWiz 50.50.04 货物装载优化软件",
                    link: "/software/windows/cargowiz",
                  },
                  {
                    text: "CyberLink ActionDirector Ultra 3.0.9606.0 威力酷剪运动视频编辑",
                    link: "/software/windows/cyberlink-actiondirector-ultra",
                  },
                  {
                    text: "Notepad3 6.24.309.1 RC3 高级文本编辑器",
                    link: "/software/windows/notepad3",
                  },
                  {
                    text: "Fishing Funds 8.2.3 实时显示基金数据涨跌",
                    link: "/software/windows/fishing-funds-win",
                  },
                  {
                    text: "CyberLink PowerDVD Ultra 23.0.1406.62 极致蓝光版 蓝光视频播放器",
                    link: "/software/windows/cyberlink-powerdvd-ultra",
                  },
                  {
                    text: "FxSound 2 Pro 1.1.22 系统音效增强",
                    link: "/software/windows/fxsound-pro",
                  },
                  {
                    text: "YesPlayMusic 0.4.8-2 第三方网易云音乐播放器",
                    link: "/software/windows/yesplaymusic-win",
                  },
                  {
                    text: "Wondershare PDF Reader 1.0.10.2594 万兴PDF阅读器",
                    link: "/software/windows/wondershare-pdf-reader",
                  },
                  {
                    text: "The Foundry NUKE 15.0v4 影视后期特效合成制作",
                    link: "/software/windows/the-foundry-nuke-win",
                  },
                  {
                    text: "Tabby 1.0.207 终端模拟器/SSH客户端",
                    link: "/software/windows/tabby-win",
                  },
                  {
                    text: "F.lux 4.134 屏幕护眼与蓝光过滤",
                    link: "/software/windows/flux-win",
                  },
                  {
                    text: "Neural Filters 2021-2024 24年3月版 PS神经滤镜修图插件",
                    link: "/software/windows/neural-filters",
                  },
                  {
                    text: "Smart Game Booster Pro 5.3.0.670 游戏性能加速",
                    link: "/software/windows/smart-game-booster",
                  },
                  {
                    text: "EaseUS PDF Editor Pro 6.1.0.1 PDF编辑器",
                    link: "/software/windows/easeus-pdf-editor",
                  },
                  {
                    text: "EaseUS CleanGenius 3.0.2 系统优化清理",
                    link: "/software/windows/easeus-cleangenius",
                  },
                  {
                    text: "AceMovi Video Editor 4.10.0.160 视频编辑处理",
                    link: "/software/windows/acemovi-video-editor-win",
                  },
                  {
                    text: "Live Home 3D Pro 4.8.1520 3D家居装修设计",
                    link: "/software/windows/live-home-3d-pro-win",
                  },
                  {
                    text: "Smart MindMap 10.0.3 智能思维导图",
                    link: "/software/windows/smart-mindmap",
                  },
                  {
                    text: "AirLiveDrive Pro 2.4.2 云盘文件管理",
                    link: "/software/windows/airlivedrive-pro",
                  },
                  {
                    text: "蜗牛云盘 1.4.0 第三方阿里云盘",
                    link: "/software/windows/woniudisk-win",
                  },
                  {
                    text: "Mocreak 2.2.0.301 一键部署微软 Office",
                    link: "/software/windows/mocreak",
                  },
                  {
                    text: "010 Editor 14.0 十六进制编辑器",
                    link: "/software/windows/010-editor-win",
                  },
                  {
                    text: "Ashampoo UnInstaller Pro 14.00.12 软件深度卸载清理",
                    link: "/software/windows/ashampoo-uninstaller-pro",
                  },
                  {
                    text: "XnConvert 1.100.1 图片批量处理",
                    link: "/software/windows/xnconvert-win",
                  },
                  {
                    text: "Wondershare DVD Creator 6.5.9.208 DVD光盘刻录",
                    link: "/software/windows/wondershare-dvd-creator-win",
                  },
                  {
                    text: "NeatDownloadManager 1.4.24.0 多线程直链下载器",
                    link: "/software/windows/neatdownloadmanager-win",
                  },
                  {
                    text: "FontCreator Pro 15.0.0.2927 字体编辑设计",
                    link: "/software/windows/fontcreator-pro",
                  },
                  {
                    text: "ONLYOFFICE 8.0.1 Office办公套件",
                    link: "/software/windows/onlyoffice-win",
                  },
                  {
                    text: "LocalSend 1.14.0 文件加密共享",
                    link: "/software/windows/localsend-win",
                  },
                  {
                    text: "Corel Painter 2023 23.0.0.244 美术绘图设计",
                    link: "/software/windows/corel-painter-win",
                  },
                  {
                    text: "PicPick Professional 7.2.8 全能屏幕截图编辑",
                    link: "/software/windows/picpick-professional",
                  },
                  {
                    text: "NXPowerLite Desktop 10.2.0 文件压缩管理",
                    link: "/software/windows/nxpowerlite-desktop-win",
                  },
                  {
                    text: "NotepadNext 0.7.0 文本与代码编辑器",
                    link: "/software/windows/notepadnext-win",
                  },
                  {
                    text: "iZotope Insight Pro 2.5.0 音频分析与母带混音插件",
                    link: "/software/windows/izotope-insight-pro-win",
                  },
                  {
                    text: "Google Earth Pro 7.3.6.9796 谷歌地球-虚拟地球仪",
                    link: "/software/windows/google-earth-pro-win",
                  },
                  {
                    text: "FurMark 1.38.0.0 显卡烤机测试",
                    link: "/software/windows/furmark",
                  },
                  {
                    text: "CLO Standalone 7.3.240.46861 3D可视化服装设计",
                    link: "/software/windows/clo-standalone-win",
                  },
                  {
                    text: "Adobe Character Animator 2024 24.2.0.80 表情捕捉实时生成动画",
                    link: "/software/windows/adobe-character-animator-win",
                  },
                  {
                    text: "Typora 1.8.10 Markdown写作编辑",
                    link: "/software/windows/typora-win",
                  },
                  {
                    text: "Steinberg SpectraLayers Pro 10.0.50.343 音频光谱编辑与修复",
                    link: "/software/windows/steinberg-spectralayers-pro-win",
                  },
                  {
                    text: "StartIsBack++ 2.9.20 开始菜单增强",
                    link: "/software/windows/startisback",
                  },
                  {
                    text: "Start10 1.98 开始菜单增强",
                    link: "/software/windows/start10",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro 11.0.14.0  RAW图像编辑处理",
                    link: "/software/windows/silkypix-developer-studio-pro-win",
                  },
                  {
                    text: "SILKYPIX JPEG Photography 11.2.14.0 图像编辑处理",
                    link: "/software/windows/silkypix-jpeg-photography-win",
                  },
                  {
                    text: "Perfectly Clear Video 4.6.0.2638 AI视频清晰化处理",
                    link: "/software/windows/perfectly-clear-video-win",
                  },
                  {
                    text: "LRTimelapse Pro 6.5.4 延迟摄影后期渲染",
                    link: "/software/windows/lrtimelapse-pro-win",
                  },
                  {
                    text: "Keystroke Visualizer 3.1 键盘按键可视化",
                    link: "/software/windows/keystroke-visualizer",
                  },
                  {
                    text: "iZotope Tonal Balance Control 2.8.0 音调平衡控制插件",
                    link: "/software/windows/izotope-tonal-balance-control-win",
                  },
                  {
                    text: "iZotope Dialogue Match 1.2.0 音频混音制作插件",
                    link: "/software/windows/izotope-dialogue-match-win",
                  },
                  {
                    text: "IDA Pro 8.3.230608 反汇编逆向神器",
                    link: "/software/windows/ida-pro-win",
                  },
                  {
                    text: "HashTool 0.7.2 哈希值检测校验",
                    link: "/software/windows/hashtool",
                  },
                  {
                    text: "Darktable 4.6.1 RAW图像编辑处理",
                    link: "/software/windows/darktable-win",
                  },
                  {
                    text: "CrystalMaker 11.0.2.300 晶体与分子结构可视化",
                    link: "/software/windows/crystalmaker-win",
                  },
                  {
                    text: "微软语音合成助手 5.4 微软文字转语音",
                    link: "/software/windows/microsoft-speech-synthesis",
                  },
                  {
                    text: "腾讯软件管家 15.6.23123.201 软件下载安装",
                    link: "/software/windows/qqpcsoftmgr",
                  },
                  {
                    text: "Mirillis Action! 4.39.1 屏幕录像编辑",
                    link: "/software/windows/mirillis-action",
                  },
                  {
                    text: "Air Explorer Pro 5.4.3 云盘文件管理",
                    link: "/software/windows/air-explorer-pro",
                  },
                  {
                    text: "Alpaca 2.9.2 PS图像智能生成插件",
                    link: "/software/windows/alpaca",
                  },
                  {
                    text: "CAD迷你画图 2024 R2 CAD绘图设计",
                    link: "/software/windows/minicaddraw",
                  },
                  {
                    text: "VSDC Video Editor Pro 9.1.1.516 视频编辑处理",
                    link: "/software/windows/vsdc-video-editor-pro",
                  },
                  {
                    text: "CAD迷你看图 2024 R1 CAD看图软件",
                    link: "/software/windows/minicadsee-win",
                  },
                  {
                    text: "Ashampoo Backup Pro 25.05 数据备份恢复",
                    link: "/software/windows/ashampoo-backup-pro",
                  },
                  {
                    text: "搜狗五笔输入法 5.5.0.2584 去广告精简版",
                    link: "/software/windows/sogouwbinput-win",
                  },
                  {
                    text: "Hit Mix RipX DAW PRO 7.1.0 音频编辑处理",
                    link: "/software/windows/hitnmix-ripx-daw-pro-win",
                  },
                  {
                    text: "格式工厂 5.17.0 音视频格式转换",
                    link: "/software/windows/format-factory",
                  },
                  {
                    text: "Native Instruments Traktor Pro Plus 3.11.0.44 数字DJ混音",
                    link: "/software/windows/native-instruments-traktor-pro-plus-win",
                  },
                  {
                    text: "Ashampoo Photo Optimizer 10.0.2 图片优化处理",
                    link: "/software/windows/ashampoo-photo-optimizer",
                  },
                  {
                    text: "QQ音乐 20.05 去广告精简版",
                    link: "/software/windows/qqmusic",
                  },
                  {
                    text: "CPU-Z 2.09.0 硬件信息检测识别",
                    link: "/software/windows/cpu-z",
                  },
                  {
                    text: "Antares Auto-Tune Unlimited 2023.12 人声修正处理套件",
                    link: "/software/windows/auto-tune-unlimited",
                  },
                  {
                    text: "MayeLite 12.5.0 一键快速启动软件",
                    link: "/software/windows/mayelite",
                  },
                  {
                    text: "WhyNotWin11 2.6.0.0 检测电脑是否适用于Windows 11",
                    link: "/software/windows/whynotwin11",
                  },
                  {
                    text: "DxO PureRAW 3.9.0.33 RAW图像编辑处理",
                    link: "/software/windows/dxo-pureraw-win",
                  },
                  {
                    text: "Boris FX SynthEyes Pro 2024 24.01.1058 3D视觉效果跟踪",
                    link: "/software/windows/boris-fx-syntheyes-pro-win",
                  },
                  {
                    text: "Nuro Audio Xvox Pro 1.0.3 终极人声混音效果器插件",
                    link: "/software/windows/nuro-audio-xvox-pro-win",
                  },
                  {
                    text: "Ultimate Vocal Remover 5.6.0 UVR终极人声伴奏分离器",
                    link: "/software/windows/ultimate-vocal-remover-win",
                  },
                  {
                    text: "WinSnap 6.1.2 屏幕截图编辑",
                    link: "/software/windows/winsnap",
                  },
                  {
                    text: "WinCam 3.7 屏幕录像编辑",
                    link: "/software/windows/wincam",
                  },
                  {
                    text: "Readiris PDF Business 23.1.95.0 OCR文字识别",
                    link: "/software/windows/readiris-pdf-business",
                  },
                  {
                    text: "Native Instruments Guitar Rig 7 Pro 7.0.2 电吉他贝斯效果器",
                    link: "/software/windows/native-instruments-guitar-rig-pro-win",
                  },
                  {
                    text: "Ashampoo Burning Studio 25.0.2 光盘刻录",
                    link: "/software/windows/ashampoo-burning-studio",
                  },
                  {
                    text: "Wolfram Mathematica 14.0.0 数学科学计算",
                    link: "/software/windows/wolfram-mathematica-win",
                  },
                  {
                    text: "FreeCAD 0.21.2 CAD绘图设计",
                    link: "/software/windows/freecad-win",
                  },
                  {
                    text: "iZotope Vinyl 1.12.1 唱片模拟效果插件",
                    link: "/software/windows/izotope-vinyl-win",
                  },
                  {
                    text: "iZotope Relay 1.4.0 音频效果增强插件",
                    link: "/software/windows/izotope-relay-win",
                  },
                  {
                    text: "Navicat Charts Viewer 1.1.15 Navicat图表查看",
                    link: "/software/windows/navicat-charts-viewer-win",
                  },
                  {
                    text: "Navicat Charts Creator 1.1.15 Navicat图表创建",
                    link: "/software/windows/navicat-charts-creator-win",
                  },
                  {
                    text: "Navicat Data Modeler Premium 3.2.15 数据库建模设计",
                    link: "/software/windows/navicat-data-modeler-win",
                  },
                  {
                    text: "Cheat Engine 7.5.1 CE修改器",
                    link: "/software/windows/cheat-engine-win",
                  },
                  {
                    text: "Crow Translate 2.11.1 轻量级翻译软件",
                    link: "/software/windows/crow-translate",
                  },
                  {
                    text: "360驱动大师 2.0.0.2000 硬件驱动更新管理",
                    link: "/software/windows/360drvmgr",
                  },
                  {
                    text: "FinalShell专业版 4.3.1.0 终端模拟器/SSH客户端",
                    link: "/software/windows/finalshell-win",
                  },
                  {
                    text: "ArcTime Pro 4.3 可视化视频字幕编辑",
                    link: "/software/windows/arctime-pro-win",
                  },
                  {
                    text: "冰点还原Deep Freeze 8.71.020.5734 Standard/Enterprise 系统还原备份",
                    link: "/software/windows/deep-freeze-win",
                  },
                  {
                    text: "Imagenomic Realgrain for PS 2.1.4.2147 图像胶片滤镜插件",
                    link: "/software/windows/imagenomic-realgrain-for-ps-win",
                  },
                  {
                    text: "Clark Audio Lofi Panda 3.4.0 熊猫音频采样插件",
                    link: "/software/windows/clark-audio-lofi-panda-win",
                  },
                  {
                    text: "LMMS 1.2.2 音频编辑处理",
                    link: "/software/windows/lmms-win",
                  },
                  {
                    text: "Harrison Mixbus 32C 9.0.1 数字音频混音编辑",
                    link: "/software/windows/harrison-mixbus-win",
                  },
                  {
                    text: "Reason Studios Reason 12.5.3 数字音频混音编辑",
                    link: "/software/windows/reason-studios-reason",
                  },
                  {
                    text: "Acoustica Mixcraft Pro Studio 9.0.470 数字音频编辑处理",
                    link: "/software/windows/acoustica-mixcraft-pro-studio",
                  },
                  {
                    text: "LyricEase 0.14.153.0 第三方网易云音乐播放器",
                    link: "/software/windows/lyricease",
                  },
                  {
                    text: "Tai 1.5.0.6 统计软件使用时长",
                    link: "/software/windows/tai",
                  },
                  {
                    text: "Paragon APFS 3.1.1 APFS磁盘挂载读写",
                    link: "/software/windows/paragon-apfs",
                  },
                  {
                    text: "Paragon HFS+ 12.1.12 HFS+磁盘挂载读写",
                    link: "/software/windows/paragon-hfs",
                  },
                  {
                    text: "Lumion Pro 2023.4.2.0 3D建筑可视化渲染",
                    link: "/software/windows/lumion-pro",
                  },
                  {
                    text: "Studio 3T Ultimate 2023.5.0 MongoDB 数据库可视化管理",
                    link: "/software/windows/studio-3t-ultimate-win",
                  },
                  {
                    text: "Moho Pro 14.1.0 2D动画编辑制作",
                    link: "/software/windows/moho-pro-win",
                  },
                  {
                    text: "ToDesk 4.7.2.1 远程桌面控制",
                    link: "/software/windows/todesk-win",
                  },
                  {
                    text: "Boris FX CrumplePop Complete 2024.0.3 终极音频处理插件套装",
                    link: "/software/windows/boris-fx-crumplepop-complete-win",
                  },
                  {
                    text: "极速图片压缩器 3.1.0 图片批量压缩",
                    link: "/software/windows/topspeed-image-compressor",
                  },
                  {
                    text: "MAGIX Movie Studio 2024 Suite 23.0.1.192 视频编辑处理套件",
                    link: "/software/windows/magix-movie-studio-suite",
                  },
                  {
                    text: "Inkscape 1.3.2 矢量绘图设计",
                    link: "/software/windows/inkscape-win",
                  },
                  {
                    text: "OpenOffice 4.1.15 Office办公套件",
                    link: "/software/windows/openoffice-win",
                  },
                  {
                    text: "Scrivener 3.1.5.1 写作编辑",
                    link: "/software/windows/scrivener-win",
                  },
                  {
                    text: "PCDJ LYRX 1.10.3.0 DJ与卡拉OK制作",
                    link: "/software/windows/pcdj-lyrx-win",
                  },
                  {
                    text: "InPixio Eclipse HDR Pro 1.3.700.620 HDR照片编辑合成",
                    link: "/software/windows/inpixio-eclipse-hdr-pro",
                  },
                  {
                    text: "Windows 超级管理器 9.46 系统全能工具箱",
                    link: "/software/windows/windows-super-manager",
                  },
                  {
                    text: "PhotoLine 24.01 图像编辑处理",
                    link: "/software/windows/photoline-win",
                  },
                  {
                    text: "MAGIX Photostory 2024 Deluxe 23.0.1.170 幻灯片制作",
                    link: "/software/windows/magix-photostory-deluxe",
                  },
                  {
                    text: "iThoughts 6.6 思维导图",
                    link: "/software/windows/ithoughts-win",
                  },
                  {
                    text: "天翼云盘 6.6.0 精简优化版",
                    link: "/software/windows/ecloud",
                  },
                  {
                    text: "百度网盘 7.36.0.3 去广告精简版",
                    link: "/software/windows/baidunetdisk-win",
                  },
                  {
                    text: "aText 1.39 文本扩展",
                    link: "/software/windows/atext-win",
                  },
                  {
                    text: "AutoMouse Pro 1.0.5 极速自动鼠标点击器",
                    link: "/software/windows/automouse-pro",
                  },
                  {
                    text: "SeeMusic Pro 5.7.1 钢琴表演效果可视化",
                    link: "/software/windows/seemusic-pro",
                  },
                  {
                    text: "Oniric Glow Generator 1.3.0 PS光效光晕合成插件",
                    link: "/software/windows/oniric-glow-generator",
                  },
                  {
                    text: "ImageRanger Pro 1.9.6.1888 图像管理查看",
                    link: "/software/windows/imageranger-pro-win",
                  },
                  {
                    text: "FreeOffice 2021 build 1068 Office办公套件",
                    link: "/software/windows/freeoffice-win",
                  },
                  {
                    text: "ApiPost 7.2.6 API接口调试",
                    link: "/software/windows/apipost-win",
                  },
                  {
                    text: "Adobe Dimension 3.4.11.4298 3D渲染建模设计",
                    link: "/software/windows/adobe-dimension-win",
                  },
                  {
                    text: "Inno Setup 6.2.2 安装包制作",
                    link: "/software/windows/inno-setup",
                  },
                  {
                    text: "哔哩下载姬DownKyi 1.6.1 B站视频下载",
                    link: "/software/windows/downkyi",
                  },
                  {
                    text: "Krita 5.2.2 数字绘画设计",
                    link: "/software/windows/krita-win",
                  },
                  {
                    text: "Adobe Premiere Rush 2.10.0.30 短视频编辑处理",
                    link: "/software/windows/adobe-premiere-rush",
                  },
                  {
                    text: "Adobe Prelude 2022 22.6.1.3 视频元数据采集粗剪",
                    link: "/software/windows/adobe-prelude-win",
                  },
                  {
                    text: "T20天正暖通软件 10.0 建筑暖通分析设计",
                    link: "/software/windows/tangent-hvac",
                  },
                  {
                    text: "T20天正建筑软件 10.0 建筑制图设计",
                    link: "/software/windows/tangent-arch",
                  },
                  {
                    text: "T20天正电气软件 10.0 电气仿真设计",
                    link: "/software/windows/tangent-elec",
                  },
                  {
                    text: "T20天正给排水软件 10.0 给排水系统仿真设计",
                    link: "/software/windows/tangent-wt",
                  },
                  {
                    text: "迅雷 11.1.12.1692 去广告版",
                    link: "/software/windows/thunder-win",
                  },
                  {
                    text: "SmartSVN 14.4.0 SVN客户端",
                    link: "/software/windows/smartsvn-win",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro for Panasonic 11.3.13.0  松下相机图片处理",
                    link: "/software/windows/silkypix-developer-studio-pro-for-panasonic-win",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro for FUJIFILM 11.4.13.0  富士相机图片处理",
                    link: "/software/windows/silkypix-developer-studio-pro-for-fujifilm-win",
                  },
                  {
                    text: "360软件管家 7.5.0.2060 软件下载安装",
                    link: "/software/windows/360softmanager",
                  },
                  {
                    text: "Readiris Corporate 17.4.192 OCR文字识别",
                    link: "/software/windows/readiris-corporate-win",
                  },
                  {
                    text: "EaseUS Data Recovery Wizard Technician 17.0.0 易我数据恢复软件",
                    link: "/software/windows/easeus-data-recovery-wizard-win",
                  },
                  {
                    text: "My Family Tree 14.0.2.0 家谱族谱制作",
                    link: "/software/windows/my-family-tree",
                  },
                  {
                    text: "Movavi Screen Recorder 2024 24.0.0 屏幕录像编辑",
                    link: "/software/windows/movavi-screen-recorder-win",
                  },
                  {
                    text: "Movavi Video Editor 2024 24.0.2.0 视频编辑处理",
                    link: "/software/windows/movavi-video-editor-win",
                  },
                  {
                    text: "ElevenClock 4.3.3 自定义任务栏时间",
                    link: "/software/windows/elevenclock",
                  },
                  {
                    text: "AOMEI FoneTool Technician 2.5.0 iPhone数据传输管理",
                    link: "/software/windows/aomei-fonetool-technician",
                  },
                  {
                    text: "XAMPP 8.2.12 Apache服务开发环境配置",
                    link: "/software/windows/xampp-win",
                  },
                  {
                    text: "Jump Paint 6.1 漫画绘图设计",
                    link: "/software/windows/jump-paint-win",
                  },
                  {
                    text: "Stretchly 1.15.1 定时休息提醒",
                    link: "/software/windows/stretchly-win",
                  },
                  {
                    text: "腾讯TIM 3.4.8.22124 去广告精简版",
                    link: "/software/windows/tim",
                  },
                  {
                    text: "MainType Pro 12.0.0.1297 字体管理浏览",
                    link: "/software/windows/maintype-pro",
                  },
                  {
                    text: "JixiPix Watercolor Studio Pro 1.4.17 图片水彩画绘制",
                    link: "/software/windows/jixipix-watercolor-studio-pro-win",
                  },
                  {
                    text: "JixiPix Spektrel Art 1.1.17 图片锐化处理",
                    link: "/software/windows/jixipix-spektrel-art-win",
                  },
                  {
                    text: "JixiPix Rip Studio Pro 1.1.20 图片拼接处理",
                    link: "/software/windows/jixipix-rip-studio-pro-win",
                  },
                  {
                    text: "Jixipix Premium Pack 1.2.11 艺术照片特效",
                    link: "/software/windows/jixipix-premium-pack-win",
                  },
                  {
                    text: "JixiPix Photo Formation Pro 1.0.22 3D创意照片特效",
                    link: "/software/windows/jixipix-photo-formation-pro-win",
                  },
                  {
                    text: "JixiPix PuzziPix Pro 1.0.20 图片拼图",
                    link: "/software/windows/jixipix-puzzipix-pro-win",
                  },
                  {
                    text: "JixiPix Pastello Pro 6.0.98 照片转铅笔画",
                    link: "/software/windows/jixipix-pastello-pro-win",
                  },
                  {
                    text: "JixiPix Hand Tint Pro 1.0.23 图片调色修图",
                    link: "/software/windows/jixipix-hand-tint-pro-win",
                  },
                  {
                    text: "JixiPix Chromatic Edges 1.0.31 照片复古艺术效果",
                    link: "/software/windows/jixipix-chromatic-edges-win",
                  },
                  {
                    text: "JixiPix Artista Impresso Pro 1.8.23 图片油画滤镜",
                    link: "/software/windows/jixipix-artista-impresso-pro-win",
                  },
                  {
                    text: "FlowJo 10.10.0 流式细胞分析",
                    link: "/software/windows/flowjo-win",
                  },
                  {
                    text: "2345好压 6.5.1.11213 解压缩软件",
                    link: "/software/windows/2345haozip",
                  },
                  {
                    text: "MyDockFinder 1.9.7.4 Win系统模拟美化macOS桌面",
                    link: "/software/windows/mydockfinder",
                  },
                  {
                    text: "UltraISO Premium 9.7.6.3860 光盘映像制作",
                    link: "/software/windows/ultraiso-premium",
                  },
                  {
                    text: "TS助手 3.52 M3U8下载合并MP4",
                    link: "/software/windows/tsassistant",
                  },
                  {
                    text: "Textify 1.10.4 强制复制文本",
                    link: "/software/windows/textify",
                  },
                  {
                    text: "Office Tab Enterprise 14.50 Office插件工具箱",
                    link: "/software/windows/office-tab-enterprise",
                  },
                  {
                    text: "NTLite Enterprise 1.8.0.6790 系统精简定制",
                    link: "/software/windows/ntlite-enterprise",
                  },
                  {
                    text: "Unlocker 4.2.7 解锁VMware安装macOS 虚拟机",
                    link: "/software/windows/vm-unlocker",
                  },
                  {
                    text: "iTop Screen Recorder Pro 4.3.0.1267 屏幕录像编辑",
                    link: "/software/windows/iobit-itop-screen-recorder-pro",
                  },
                  {
                    text: "Sidify Tidabie Tidal Music Converter 1.7.4 Tidal Music转换器",
                    link: "/software/windows/sidify-tidabie-tidal-music-converter-win",
                  },
                  {
                    text: "Sidify Music Converter 3.2.1 Spotify Music转换器",
                    link: "/software/windows/sidify-music-converter-win",
                  },
                  {
                    text: "Sidify Apple Music Converter 4.9.5 Apple Music转换器",
                    link: "/software/windows/sidify-apple-music-converter-win",
                  },
                  {
                    text: "酷我音乐 9.3.0 W4 豪华VIP破解版",
                    link: "/software/windows/kuwomusic",
                  },
                  {
                    text: "iZotope Nectar Advanced 4.0.1 人声混音",
                    link: "/software/windows/izotope-nectar-advanced-win",
                  },
                  {
                    text: "future.dj pro 2.1.12 DJ混音软件",
                    link: "/software/windows/future-dj-pro-win",
                  },
                  {
                    text: "Nemetschek Allplan 2024.0.0 3D土木建筑设计",
                    link: "/software/windows/nemetschek-allplan",
                  },
                  {
                    text: "CyberLink Promeo Premium 7.0.2231.0 视频创作编辑处理",
                    link: "/software/windows/cyberlink-promeo-premium",
                  },
                  {
                    text: "Parallels Toolbox Business Edition 6.6.1.4005 PD实用工具集合",
                    link: "/software/windows/parallels-toolbox-business-edition-win",
                  },
                  {
                    text: "哔哩Bili.Uwp 2.2310.1.0 哔哩哔哩UWP客户端",
                    link: "/software/windows/biliuwp",
                  },
                  {
                    text: "CCompare 1.21 文件/文件夹对比",
                    link: "/software/windows/ccompare-win",
                  },
                  {
                    text: "Native Instruments Massive X 1.4.4 音乐低音合成插件",
                    link: "/software/windows/native-instruments-massive-x-win",
                  },
                  {
                    text: "Microsoft Edge 118.0.2088.69 增强版",
                    link: "/software/windows/microsoft-edge-plus",
                  },
                  {
                    text: "ConceptDraw PROJECT 14.0.0.320 项目管理",
                    link: "/software/windows/conceptdraw-project-win",
                  },
                  {
                    text: "ConceptDraw OFFICE 10.0.0 绘图/思维导图/项目管理",
                    link: "/software/windows/conceptdraw-office-win",
                  },
                  {
                    text: "ConceptDraw MINDMAP 15.0.0.275 思维导图",
                    link: "/software/windows/conceptdraw-mindmap-win",
                  },
                  {
                    text: "ConceptDraw DIAGRAM 17.0.0.277 商业绘图设计",
                    link: "/software/windows/conceptdraw-diagram-win",
                  },
                  {
                    text: "WinX HD Video Converter Deluxe 5.18.1.342 高清视频格式转换",
                    link: "/software/windows/winx-hd-video-converter-win",
                  },
                  {
                    text: "RevokeMsgPatcher 1.7 微信/QQ/TIM消息防撤回补丁",
                    link: "/software/windows/revokemsgpatcher",
                  },
                  {
                    text: "必剪 3.3.11 视频编辑处理",
                    link: "/software/windows/bcut-win",
                  },
                  {
                    text: "Steinberg HALion 7.0.20 虚拟采样与声音合成",
                    link: "/software/windows/steinberg-halion-win",
                  },
                  {
                    text: "PhoneRescue for iOS 4.2.6.20231019 iPhone数据恢复",
                    link: "/software/windows/phonerescue-for-ios-win",
                  },
                  {
                    text: "卡饭输入法 1.0.0.300",
                    link: "/software/windows/kafaninput",
                  },
                  {
                    text: "Fluent Reader 1.1.4 RSS阅读器",
                    link: "/software/windows/fluent-reader-win",
                  },
                  {
                    text: "DirectX Repair 4.3.0.20888 增强版 DirectX 运行库修复工具",
                    link: "/software/windows/directx-repair",
                  },
                  {
                    text: "Ashampoo Office 9 Rev A1203.0831 Office办公套件",
                    link: "/software/windows/ashampoo-office",
                  },
                  {
                    text: "JDownloader 2.0.1 多线程直链下载器",
                    link: "/software/windows/jdownloader-win",
                  },
                  {
                    text: "Auslogics Disk Defrag Ultimate 4.13.0.1 磁盘碎片整理",
                    link: "/software/windows/auslogics-disk-defrag-ultimate",
                  },
                  {
                    text: "Auto Dark Mode 10.4.1 根据时间自动切换桌面壁纸",
                    link: "/software/windows/auto-dark-mode",
                  },
                  {
                    text: "Cinebench 2024.0 CPU性能基准测试",
                    link: "/software/windows/cinebench-win",
                  },
                  {
                    text: "Groupy 2.12 软件窗口标签化管理",
                    link: "/software/windows/groupy",
                  },
                  {
                    text: "FastStone Image Viewer 7.8 图片浏览管理",
                    link: "/software/windows/faststone-image-viewer",
                  },
                  {
                    text: "Perfino 4.1 Java 性能监控分析",
                    link: "/software/windows/perfino-win",
                  },
                  {
                    text: "中望3D 2024 28.05 国产三维CAD/CAE/CAM一体化",
                    link: "/software/windows/zw3d",
                  },
                  {
                    text: "iZotope VocalSynth Pro 2.6.1 电音人声效果合成插件",
                    link: "/software/windows/izotope-vocalsynth-pro-win",
                  },
                  {
                    text: "Adobe Firefly AI 25.0.0.2265 Beta PS创意AI模型插件",
                    link: "/software/windows/firefly-ai",
                  },
                  {
                    text: "Boris FX Optics 2024.0.1.63 图像特效滤镜处理",
                    link: "/software/windows/boris-fx-optics-win",
                  },
                  {
                    text: "iZotope Audiolens 1.2.0 音频音轨比较",
                    link: "/software/windows/izotope-audiolens-win",
                  },
                  {
                    text: "团子翻译器 4.5.8 OCR截图生肉翻译",
                    link: "/software/windows/dango-translator",
                  },
                  {
                    text: "proDAD VitaScene 5.0.313 视频转场特效处理",
                    link: "/software/windows/prodad-vitascene",
                  },
                  {
                    text: "CyberLink Screen Recorder Deluxe 4.3.1.27960 屏幕录像编辑",
                    link: "/software/windows/cyberlink-screen-recorder-deluxe",
                  },
                  {
                    text: "TrafficMonitor 1.84.1 网速悬浮窗监控",
                    link: "/software/windows/trafficmonitor",
                  },
                  {
                    text: "MusicPlayer2 2.76.1 音乐播放器",
                    link: "/software/windows/musicplayer2",
                  },
                  {
                    text: "WinX DVD Ripper Platinum 8.22.1.246 DVD视频格式转换",
                    link: "/software/windows/winx-dvd-ripper-win",
                  },
                  {
                    text: "WinX DVD Copy Pro 3.9.8 DVD刻录备份",
                    link: "/software/windows/winx-dvd-copy-pro",
                  },
                  {
                    text: "Royal TS 6.1.51214 远程桌面连接管理",
                    link: "/software/windows/royal-ts-win",
                  },
                  {
                    text: "PCDJ DEX Pro 3.20.7 DJ打碟混音",
                    link: "/software/windows/pcdj-dex-pro-win",
                  },
                  {
                    text: "MediBang Paint Pro 29.1 漫画插画绘图设计",
                    link: "/software/windows/medibang-paint-pro-win",
                  },
                  {
                    text: "Exposure Blow Up 3.1.6.0 PS/LR图片无损放大插件",
                    link: "/software/windows/exposure-blow-up-win",
                  },
                  {
                    text: "微软电脑管家Microsoft PC Manager 3.6.3.0 Beta 防病毒安全防护",
                    link: "/software/windows/microsoft-pc-manager",
                  },
                  {
                    text: "ClipboardFusion Pro 6.1 剪贴板管理",
                    link: "/software/windows/clipboardfusion-pro",
                  },
                  {
                    text: "VOCALOID 6 SE 6.1.1 歌声与人声合成器",
                    link: "/software/windows/vocaloid",
                  },
                  {
                    text: "QuickRedis 2.7.1 Redis可视化管理",
                    link: "/software/windows/quickredis-win",
                  },
                  {
                    text: "OpenAI Translator 0.0.68 AI实时划词翻译",
                    link: "/software/windows/openai-translator-win",
                  },
                  {
                    text: "BingGPT 0.3.7 新必应AI聊天",
                    link: "/software/windows/binggpt-win",
                  },
                  {
                    text: "洋芋田图像工具箱 3.5.1 图片批量处理",
                    link: "/software/windows/potatofield-imagetoolkit-win",
                  },
                  {
                    text: "Everyone Piano 2.5.9.4 钢琴键盘模拟",
                    link: "/software/windows/everyone-piano",
                  },
                  {
                    text: "WindowBlinds 11.02 自定义系统外观主题",
                    link: "/software/windows/windowblinds",
                  },
                  {
                    text: "Aechoterm 4.0.1 终端模拟器/SSH客户端",
                    link: "/software/windows/aechoterm-win",
                  },
                  {
                    text: "VNote 3.17.0 Markdown写作编辑",
                    link: "/software/windows/vnote-win",
                  },
                  {
                    text: "Serato Sample 2.0.0 音频采样插件",
                    link: "/software/windows/serato-sample",
                  },
                  {
                    text: "MoZhiMusicPlayer 3.0 仿QQ音乐本地播放器",
                    link: "/software/windows/mozhimusicplayer",
                  },
                  {
                    text: "Dinosaur Rss 1.10.1 RSS阅读管理",
                    link: "/software/windows/dinosaur-rss-win",
                  },
                  {
                    text: "Xojo 2018 R1.1 18.1.1.40922 可视化编程开发",
                    link: "/software/windows/xojo-win",
                  },
                  {
                    text: "PRemoteM 0.7.2.8 远程桌面控制",
                    link: "/software/windows/premotem",
                  },
                  {
                    text: "SkinFiner 5.1 人像智能磨皮润色",
                    link: "/software/windows/skinfiner",
                  },
                  {
                    text: "ClickMonitorDDC 7.2 屏幕亮度调节",
                    link: "/software/windows/clickmonitorddc",
                  },
                  {
                    text: "Avira Antivirus Pro 15.0.2201.2134 防病毒安全防护",
                    link: "/software/windows/avira-antivirus-pro",
                  },
                  {
                    text: "Edgeless Beta 4.1.0 PE装机维护",
                    link: "/software/windows/edgeless",
                  },
                  {
                    text: "Adobe Premiere Pro 2023 23.6.0.65 精简版 视频编辑处理",
                    link: "/software/windows/adobe-premiere-pro-lite",
                  },
                  {
                    text: "Wondershare MindMaster Pro 10.7.2.204 亿图脑图/思维导图",
                    link: "/software/windows/wondershare-mindmaster-pro-win",
                  },
                  {
                    text: "网易云音乐 3.0.1.201589 精简优化版",
                    link: "/software/windows/cloudmusic",
                  },
                  {
                    text: "Ashampoo ZIP Pro 4.50.01 解压缩软件",
                    link: "/software/windows/ashampoo-zip-pro",
                  },
                  {
                    text: "Imagine 0.7.5 PNG与JPEG图片压缩",
                    link: "/software/windows/imagine-win",
                  },
                  {
                    text: "Corel PaintShop Pro 2023 Ultimate 25.2.0.58 图像编辑设计",
                    link: "/software/windows/corel-paintshop-pro-ultimate",
                  },
                  {
                    text: "AnyDroid 7.5.0.20230627 安卓数据传输管理",
                    link: "/software/windows/anydroid-win",
                  },
                  {
                    text: "雨量计Rainmeter 4.5.18 桌面个性化定制",
                    link: "/software/windows/rainmeter",
                  },
                  {
                    text: "Monit 0.8.1 桌面小组件",
                    link: "/software/windows/monit-win",
                  },
                  {
                    text: "MicaForEveryone 1.3.1.2 系统背景自定义",
                    link: "/software/windows/micaforeveryone",
                  },
                  {
                    text: "Avid Media Composer 2023.3.0 非线性视频编辑处理",
                    link: "/software/windows/avid-media-composer-win",
                  },
                  {
                    text: "Scanahand Premium 8.0.0.311 个性化手写字体生成",
                    link: "/software/windows/scanahand-premium",
                  },
                  {
                    text: "ON1 Photo Keyword AI 2023.5 17.5.1.14079 图片AI搜索管理",
                    link: "/software/windows/on1-photo-keyword-ai-win",
                  },
                  {
                    text: "ON1 Sky Swap AI 2023.5 17.5.1.14051 图片AI天空替换处理",
                    link: "/software/windows/on1-sky-swap-ai-win",
                  },
                  {
                    text: "DevToys 1.0.13.0 开发人员工具集",
                    link: "/software/windows/devtoys",
                  },
                  {
                    text: "Redshift 3.0.45 GPU加速渲染器插件",
                    link: "/software/windows/redshift",
                  },
                  {
                    text: "iZotope Neoverb Pro 1.3.0 智能音乐混响",
                    link: "/software/windows/izotope-neoverb-pro-win",
                  },
                  {
                    text: "Adobe XD 57.1.12.2 UI/UX界面设计与原型交互",
                    link: "/software/windows/adobe-xd-win",
                  },
                  {
                    text: "Hyper 4.0.0 canary 5 命令行终端美化模拟器",
                    link: "/software/windows/hyper-win",
                  },
                  {
                    text: "PhoneRescue for Android 3.8.0.20230628 Android数据恢复",
                    link: "/software/windows/phonerescue-for-android-win",
                  },
                  {
                    text: "set.a.light 3D STUDIO 2.5.9 3D摄影棚模拟布光",
                    link: "/software/windows/set-a-light-3d-studio-win",
                  },
                  {
                    text: "Pano2VR Pro 7.0.4 3D全景图像制作",
                    link: "/software/windows/pano2vr-pro-win",
                  },
                  {
                    text: "Free Icon Tool 2.2.0 软件图标提取",
                    link: "/software/windows/free-icon-tool",
                  },
                  {
                    text: "微PE工具箱 2.3 PE装机维护",
                    link: "/software/windows/wepe",
                  },
                  {
                    text: "Red Giant Shooter Suite 13.1.15 红巨星镜头修复插件套装",
                    link: "/software/windows/red-giant-shooter-suite-win",
                  },
                  {
                    text: "Red Giant PluralEyes 2023.0.0 音视频同步调整",
                    link: "/software/windows/red-giant-pluraleyes-win",
                  },
                  {
                    text: "Red Giant Keying Suite 11.1.11 红巨星抠像合成插件套装",
                    link: "/software/windows/red-giant-keying-suite-win",
                  },
                  {
                    text: "Red Giant Effects Suite 11.1.13 红巨星动态视频特效插件套装",
                    link: "/software/windows/red-giant-effects-suite-win",
                  },
                  {
                    text: "MAGIX SOUND FORGE Audio Cleaning Lab 4 26.0.0.23 音频编辑与清理修复",
                    link: "/software/windows/magix-sound-forge-audio-cleaning-lab",
                  },
                  {
                    text: "MAGIX Movie Edit Pro 2022 Premium 21.0.2.138 视频编辑处理",
                    link: "/software/windows/magix-movie-edit-pro-premium",
                  },
                  {
                    text: "MAGIX ACID Pro Suite 11.0.2.21 音频编辑制作套件",
                    link: "/software/windows/magix-acid-pro-suite",
                  },
                  {
                    text: "ON1 HDR 2023.5 17.5.1.14051 HDR图像处理",
                    link: "/software/windows/on1-hdr-win",
                  },
                  {
                    text: "ON1 Resize AI 2023.5 17.5.1.14051 图片无损缩放",
                    link: "/software/windows/on1-resize-ai-win",
                  },
                  {
                    text: "ON1 Portrait AI 2023.5 17.5.1.14051 智能AI人像处理",
                    link: "/software/windows/on1-portrait-ai-win",
                  },
                  {
                    text: "iMindMap Ultimate 10.1.1 思维导图",
                    link: "/software/windows/imindmap-ultimate",
                  },
                  {
                    text: "Windows Update Blocker 1.8 禁止系统自动更新",
                    link: "/software/windows/windows-update-blocker",
                  },
                  {
                    text: "T20天正日照分析软件 8.0 建筑日照分析设计",
                    link: "/software/windows/tangent-sun",
                  },
                  {
                    text: "T20天正结构软件 9.0 建筑结构分析设计",
                    link: "/software/windows/tangent-asd",
                  },
                  {
                    text: "T20天正建筑节能软件 8.0 建筑节能优化分析",
                    link: "/software/windows/tangent-bec",
                  },
                  {
                    text: "QQ游戏大厅 5.48.57967.0 去广告精简版",
                    link: "/software/windows/qqgame",
                  },
                  {
                    text: "比译 0.5.0 划词/截图翻译与词典",
                    link: "/software/windows/biyi-win",
                  },
                  {
                    text: "Tiles 2.0 磁贴快速启动",
                    link: "/software/windows/tiles",
                  },
                  {
                    text: "SoundPackager 10.0 系统声音自定义",
                    link: "/software/windows/soundpackager",
                  },
                  {
                    text: "Multiplicity 3.44 键鼠无线共享",
                    link: "/software/windows/multiplicity",
                  },
                  {
                    text: "Curtains 1.19.1 Windows桌面美化定制",
                    link: "/software/windows/curtains",
                  },
                  {
                    text: "CursorFX 4.03 鼠标光标定制",
                    link: "/software/windows/cursorfx",
                  },
                  {
                    text: "Movavi Gecata 6.1.2 游戏屏幕录制",
                    link: "/software/windows/movavi-gecata",
                  },
                  {
                    text: "ViceVersa Pro 5 Build 5005 数据同步备份",
                    link: "/software/windows/viceversa-pro",
                  },
                  {
                    text: "PopChar 8.7 特殊字符管理",
                    link: "/software/windows/popchar-win",
                  },
                  {
                    text: "AxGlyph 1.60 矢量绘图设计",
                    link: "/software/windows/axglyph",
                  },
                  {
                    text: "文件蜈蚣 2.82 直链BT磁链下载器",
                    link: "/software/windows/filecentipede",
                  },
                  {
                    text: "StarUML 5.1.0 UML建模设计",
                    link: "/software/windows/staruml-win",
                  },
                  {
                    text: "SmartPLS 3.2.9 模型统计分析",
                    link: "/software/windows/smartpls-win",
                  },
                  {
                    text: "Xfer Records Serum & SerumFX 1.363 音频波形合成插件",
                    link: "/software/windows/xfer-records-serum-serumfx-win",
                  },
                  {
                    text: "Xfer Records LFOTool 1.768 音频低频振荡插件",
                    link: "/software/windows/xfer-records-lfotool-win",
                  },
                  {
                    text: "Xfer Records Cthulhu 1.217 音乐和弦制作插件",
                    link: "/software/windows/xfer-records-cthulhu-win",
                  },
                  {
                    text: "Exposure Snap Art 4.1.4.0 PS手绘滤镜插件",
                    link: "/software/windows/exposure-snap-art-win",
                  },
                  {
                    text: "Grids for Instagram 8.5.8 Instagram图片客户端",
                    link: "/software/windows/grids-for-instagram-win",
                  },
                  {
                    text: "SubLab XL 1.0.4 Beta 2 808低音合成器插件",
                    link: "/software/windows/sublab-xl-win",
                  },
                  {
                    text: "SubLab 1.1.9 808低音合成插件",
                    link: "/software/windows/sublab-win",
                  },
                  {
                    text: "Circle² 2.2.1 音频效果合成器",
                    link: "/software/windows/circle-win",
                  },
                  {
                    text: "Vital Audio Vital Pro 1.5.5 频谱波表合成器",
                    link: "/software/windows/vital-audio-vital-pro-win",
                  },
                  {
                    text: "Sound Booster 1.11.0.514 系统音效增强",
                    link: "/software/windows/sound-booster",
                  },
                  {
                    text: "Exe4j 9.0 Java程序打包与部署",
                    link: "/software/windows/exe4j-win",
                  },
                  {
                    text: "FastStone Photo Resizer 4.4 图像转换与重命名调整",
                    link: "/software/windows/faststone-photo-resizer",
                  },
                  {
                    text: "FastStone MaxView 3.4 图片浏览管理",
                    link: "/software/windows/faststone-maxview",
                  },
                  {
                    text: "Gridea 0.9.3 静态博客Markdown写作编辑",
                    link: "/software/windows/gridea-win",
                  },
                  {
                    text: "SwitchHosts! 4.2.0.6105 hosts文件编辑",
                    link: "/software/windows/switchhosts-win",
                  },
                  {
                    text: "Motrix 1.8.19 直链BT磁链下载器",
                    link: "/software/windows/motrix-win",
                  },
                  {
                    text: "鲁大师 6.1022.3275.303 去广告精简版 硬件性能检测",
                    link: "/software/windows/ludashi",
                  },
                  {
                    text: "WonderShare Ubackit 3.0.1.9 数据备份还原",
                    link: "/software/windows/wondershare-ubackit",
                  },
                  {
                    text: "myBase Desktop 7.3.5 分类管理自由格式数据库",
                    link: "/software/windows/mybase-desktop",
                  },
                  {
                    text: "Topaz DeNoise AI 3.7.2 AI图片智能降噪",
                    link: "/software/windows/topaz-denoise-ai-win",
                  },
                  {
                    text: "SmoothScroll 1.2.4 鼠标增强",
                    link: "/software/windows/smoothscroll-win",
                  },
                  {
                    text: "MouseInc 2.13.4 鼠标/触控板手势增强",
                    link: "/software/windows/mouseinc",
                  },
                  {
                    text: "GestureSign 8.1.0 鼠标/触控板手势增强",
                    link: "/software/windows/gesturesign",
                  },
                  {
                    text: "WYSIWYG R36 舞台灯光特效设计模拟",
                    link: "/software/windows/wysiwyg",
                  },
                  {
                    text: "WidsMob Viewer Pro 2.7.0.118 照片管理查看",
                    link: "/software/windows/widsmob-viewer-pro-win",
                  },
                  {
                    text: "WidsMob MediaVault 1.7.0.78 照片视频加密隐藏",
                    link: "/software/windows/widsmob-mediavault",
                  },
                  {
                    text: "Toontrack EZmix 2.2.4 音频混音效果",
                    link: "/software/windows/toontrack-ezmix-win",
                  },
                  {
                    text: "Toontrack EZdrummer 3.0.6 +Core Library 虚拟鼓音乐制作",
                    link: "/software/windows/toontrack-ezdrummer-win",
                  },
                  {
                    text: "Luminar AI 1.5.5.10909 AI图像编辑处理",
                    link: "/software/windows/luminar-ai-win",
                  },
                  {
                    text: "NxShell 1.9.3 终端模拟器/SSH客户端",
                    link: "/software/windows/nxshell-win",
                  },
                  {
                    text: "ExpanDrive 2023.4.1 FTP/SFTP连接管理",
                    link: "/software/windows/expandrive-win",
                  },
                  {
                    text: "DeepL 4.5.0.8268 智能AI翻译",
                    link: "/software/windows/deepl-win",
                  },
                  {
                    text: "CopyTranslator 11.0.2 外语复制即翻译",
                    link: "/software/windows/copytranslator-win",
                  },
                  {
                    text: "AU全套插件一键安装包Pro 1.0 AU全套汉化插件",
                    link: "/software/windows/au-plugins-suite",
                  },
                  {
                    text: "C4D全套插件一键安装包Pro 2.3 C4D全套汉化插件",
                    link: "/software/windows/c4d-plugins-suite",
                  },
                  {
                    text: "LR全套插件一键安装包Pro 19.10 LR全套汉化插件",
                    link: "/software/windows/lr-plugins-suite",
                  },
                  {
                    text: "幕享 1.1.6 无线投屏",
                    link: "/software/windows/letsview-win",
                  },
                  {
                    text: "MusicTools 1.9.8.3 无损音乐下载",
                    link: "/software/windows/musictools",
                  },
                  {
                    text: "Firewall App Blocker 1.9 防火墙软件",
                    link: "/software/windows/firewall-app-blocker",
                  },
                  {
                    text: "Dism++ 10.1.1002.2 系统精简优化",
                    link: "/software/windows/dism",
                  },
                  {
                    text: "Ashampoo Photo Commander 17.0.3 图像管理查看",
                    link: "/software/windows/ashampoo-photo-commander",
                  },
                  {
                    text: "美图秀秀 6.5.7.0 去广告精简版",
                    link: "/software/windows/meituxiuxiu",
                  },
                  {
                    text: "Apower Screen Recorder Pro 2.4.1.7 傲软录屏王",
                    link: "/software/windows/apower-screen-recorder-pro",
                  },
                  {
                    text: "WidsMob WebP 1.7.0.140 WebP图片查看与转换",
                    link: "/software/windows/widsmob-webp-win",
                  },
                  {
                    text: "WidsMob Portrait Pro 2.2.0.210 人像照片编辑处理",
                    link: "/software/windows/widsmob-portrait-pro-win",
                  },
                  {
                    text: "WidsMob PhotoVault 1.7.0.78 照片加密管理",
                    link: "/software/windows/widsmob-photovault-win",
                  },
                  {
                    text: "WidsMob Panorama 2.1.0.122 全景图像拼接",
                    link: "/software/windows/widsmob-panorama-win",
                  },
                  {
                    text: "WidsMob Montage 2.6.0.86 将图片变成马赛克与蒙太奇效果",
                    link: "/software/windows/widsmob-montage-win",
                  },
                  {
                    text: "WidsMob ImageConvert 2.2.0.190 图片格式转换",
                    link: "/software/windows/widsmob-imageconvert-win",
                  },
                  {
                    text: "WidsMob HDR 2.1.0.118 照片光照渲染效果处理",
                    link: "/software/windows/widsmob-hdr-win",
                  },
                  {
                    text: "WidsMob Denoise 1.2.0.88 多功能图像降噪",
                    link: "/software/windows/widsmob-denoise-win",
                  },
                  {
                    text: "WidsMob AI Retoucher 2.5.0.126 AI照片编辑器",
                    link: "/software/windows/widsmob-ai-retoucher-win",
                  },
                  {
                    text: "WebTorrent 0.24.0 BT种子在线播放",
                    link: "/software/windows/webtorrent-win",
                  },
                  {
                    text: "Ashampoo Video Optimizer Pro 2.0.1.0 视频优化处理",
                    link: "/software/windows/ashampoo-video-optimizer-pro",
                  },
                  {
                    text: "Ashampoo Video Converter 1.0.2.1 视频格式转换器",
                    link: "/software/windows/ashampoo-video-converter",
                  },
                  {
                    text: "Ashampoo Soundstage Pro 1.0.3 环绕音效增强",
                    link: "/software/windows/ashampoo-soundstage-pro",
                  },
                  {
                    text: "Ashampoo PDF Pro 3.0.8 PDF编辑器",
                    link: "/software/windows/ashampoo-pdf-pro",
                  },
                  {
                    text: "Ashampoo Movie Studio Pro 3.0.1 视频编辑器",
                    link: "/software/windows/ashampoo-movie-studio-pro",
                  },
                  {
                    text: "McAfee Endpoint Security 10.7.0.1390.13 迈克菲防病毒查杀",
                    link: "/software/windows/mcafee-endpoint-security-win",
                  },
                  {
                    text: "ApowerShow 1.1.3.0 电子相册制作",
                    link: "/software/windows/apowershow",
                  },
                  {
                    text: "VideoScribe Pro 3.7.3103 手绘动画制作",
                    link: "/software/windows/videoscribe-pro-win",
                  },
                  {
                    text: "Vector Magic 1.15 矢量图转换",
                    link: "/software/windows/vector-magic-win",
                  },
                  {
                    text: "Topaz Studio 2.3.2 AI创意照片编辑",
                    link: "/software/windows/topaz-studio-win",
                  },
                  {
                    text: "Topaz Sharpen AI 4.1.0 AI图片清晰度锐化增强",
                    link: "/software/windows/topaz-sharpen-ai-win",
                  },
                  {
                    text: "Topaz Mask AI 1.3.9 AI智能抠图",
                    link: "/software/windows/topaz-mask-ai-win",
                  },
                  {
                    text: "Topaz JPEG to RAW AI 2.2.1 JPEG转高质量RAW",
                    link: "/software/windows/topaz-jpeg-to-raw-ai-win",
                  },
                  {
                    text: "Topaz Adjust AI 1.0.6 HDR图片滤镜渲染增强",
                    link: "/software/windows/topaz-adjust-ai-win",
                  },
                  {
                    text: "PCMark Professional 2.1.2574 电脑性能基准测试跑分",
                    link: "/software/windows/futuremark-pcmark-professional",
                  },
                  {
                    text: "Tickeys 1.2.0 定制键盘敲击音效",
                    link: "/software/windows/tickeys-win",
                  },
                  {
                    text: "Thief 4.0.0 上班摸鱼神器",
                    link: "/software/windows/thief-win",
                  },
                  {
                    text: "Termius 7.13.0 终端模拟器/SSH/SFTP客户端",
                    link: "/software/windows/termius-win",
                  },
                  {
                    text: "Tableau Desktop Professional 2021.4.4 可视化数据分析",
                    link: "/software/windows/tableau-desktop-professional-win",
                  },
                  {
                    text: "SPlayer 4.9.4 射手影音视频播放器",
                    link: "/software/windows/splayer-win",
                  },
                  {
                    text: "SmartSynchronize 4.3.1 文件/文件夹对比",
                    link: "/software/windows/smartsynchronize-win",
                  },
                  {
                    text: "SmartGit 21.2.4 Git客户端",
                    link: "/software/windows/smartgit-win",
                  },
                  {
                    text: "Luminar 4.3.3 图像后期编辑处理",
                    link: "/software/windows/luminar-win",
                  },
                  {
                    text: "Aurora HDR 2019 1.0.0.2550 HDR图像编辑处理",
                    link: "/software/windows/aurora-hdr-win",
                  },
                  {
                    text: "Sidify DeeKeep Deezer Music Converter 1.3.3 Deezer音乐转换器",
                    link: "/software/windows/sidify-deekeep-deezer-music-converter-win",
                  },
                  {
                    text: "QuickCut 1.8.0 视频编辑处理",
                    link: "/software/windows/quickcut-win",
                  },
                  {
                    text: "Navicat Premium Essentials 16.1.15 多连接数据库管理开发",
                    link: "/software/windows/navicat-premium-essentials-win",
                  },
                  {
                    text: "PhoneClean Pro 5.6.0.20210629 iPhone/iPad系统优化清理",
                    link: "/software/windows/phoneclean-pro-win",
                  },
                  {
                    text: "Native Instruments Replika XT 1.3.0 音频延迟效果器插件",
                    link: "/software/windows/native-instruments-replika-xt-win",
                  },
                  {
                    text: "Native Instruments Replika 1.6.0 音频延迟效果器插件",
                    link: "/software/windows/native-instruments-replika-win",
                  },
                  {
                    text: "MovieMator Video Editor Pro 3.2.0 剪大师专业版-视频编辑",
                    link: "/software/windows/moviemator-video-editor-pro-win",
                  },
                  {
                    text: "Movavi Video Suite 2022 22.4.1 多媒体编辑处理套件",
                    link: "/software/windows/movavi-video-suite-win",
                  },
                  {
                    text: "Movavi Video Converter 22 Premium 22.5.0 音视频格式转换",
                    link: "/software/windows/movavi-video-converter-win",
                  },
                  {
                    text: "Movavi Slideshow Maker 8.0.0 幻灯片制作",
                    link: "/software/windows/movavi-slideshow-maker-win",
                  },
                  {
                    text: "Movavi Picverse 1.11.0 图像AI编辑处理",
                    link: "/software/windows/movavi-picverse-win",
                  },
                  {
                    text: "Movavi PDFChef 2022 22.2.0 PDF编辑器",
                    link: "/software/windows/movavi-pdfchef-win",
                  },
                  {
                    text: "Movavi PDF Editor 3.2.0 PDF编辑器",
                    link: "/software/windows/movavi-pdf-editor-win",
                  },
                  {
                    text: "Movavi Photo Editor 6.7.1 照片编辑处理",
                    link: "/software/windows/movavi-photo-editor-win",
                  },
                  {
                    text: "Movavi Academic 2022 22.0.0 教育课程录制编辑",
                    link: "/software/windows/movavi-academic-win",
                  },
                  {
                    text: "Memocast 2.2.3 为知笔记编辑器",
                    link: "/software/windows/memocast-win",
                  },
                  {
                    text: "MarkText 0.17.1 Markdown写作编辑",
                    link: "/software/windows/marktext-win",
                  },
                  {
                    text: "KeeWeb 1.18.7 密码管理器",
                    link: "/software/windows/keeweb-win",
                  },
                  {
                    text: "JPEGmini Pro 4.1.0 JPG图片无损压缩",
                    link: "/software/windows/jpegmini-pro-win",
                  },
                  {
                    text: "JixiPix Simply HDR 3.2.15 HDR照片合成",
                    link: "/software/windows/jixipix-simply-hdr-win",
                  },
                  {
                    text: "JixiPix Romantic Photo 2.3.5 图片浪漫写真特效",
                    link: "/software/windows/jixipix-romantic-photo-win",
                  },
                  {
                    text: "JixiPix Portrait Painter 1.37 照片转油画效果",
                    link: "/software/windows/jixipix-portrait-painter-win",
                  },
                  {
                    text: "JixiPix Pop Dot Comics 2.11 照片转漫画",
                    link: "/software/windows/jixipix-pop-dot-comics-win",
                  },
                  {
                    text: "JixiPix Artoon 1.11.0 照片转漫画",
                    link: "/software/windows/jixipix-artoon-win",
                  },
                  {
                    text: "JixiPix Aquarella 1.38 图片转水彩画",
                    link: "/software/windows/jixipix-aquarella-win",
                  },
                  {
                    text: "iZotope Vocal Doubler 1.0.0 声音倍增插件",
                    link: "/software/windows/izotope-vocal-doubler-win",
                  },
                  {
                    text: "iZotope Stutter Edit 2.1.0 MIDI缓冲效果控制插件",
                    link: "/software/windows/izotope-stutter-edit-win",
                  },
                  {
                    text: "iZotope BreakTweaker 1.02c 音频节拍器插件",
                    link: "/software/windows/izotope-breaktweaker-win",
                  },
                  {
                    text: "InPixio Photo Cutter 10.5.7633 数码照片抠图",
                    link: "/software/windows/inpixio-photo-cutter-win",
                  },
                  {
                    text: "InPixio Photo Editor 10.5.7647 照片滤镜编辑处理",
                    link: "/software/windows/inpixio-photo-editor-win",
                  },
                  {
                    text: "InPixio Photo Eraser 10.4.7612 照片橡皮擦转场特效",
                    link: "/software/windows/inpixio-photo-eraser-win",
                  },
                  {
                    text: "InPixio Photo Studio Ultimate 12.0.8112.30215 照片编辑处理套件",
                    link: "/software/windows/inpixio-photo-studio-ultimate",
                  },
                  {
                    text: "iExplorer 4.4.2 iOS设备管理器",
                    link: "/software/windows/iexplorer-win",
                  },
                  {
                    text: "SnapGene 5.3.1 DNA序列生物分析",
                    link: "/software/windows/snapgene-win",
                  },
                  {
                    text: "Foxmail 7.2.25.148 邮件收发管理",
                    link: "/software/windows/foxmail-win",
                  },
                  {
                    text: "FastGithub 2.1.4 GitHub加速神器",
                    link: "/software/windows/fastgithub-win",
                  },
                  {
                    text: "Exposure Eye Candy 7.2.3.189 PS眼睛糖果滤镜插件",
                    link: "/software/windows/exposure-eye-candy-win",
                  },
                  {
                    text: "Eagle 1.8.2 图像管理查看",
                    link: "/software/windows/eagle-win",
                  },
                  {
                    text: "CrossFTP Enterprise 1.99.9 FTP/SFTP客户端",
                    link: "/software/windows/crossftp-enterprise-win",
                  },
                  {
                    text: "CorelCAD 2023 2022.5 Build 22.3.1.4090 CAD绘图设计",
                    link: "/software/windows/corelcad-win",
                  },
                  {
                    text: "Corel WinDVD Pro 12.0.0.265 高清蓝光视频播放器",
                    link: "/software/windows/corel-windvd-pro",
                  },
                  {
                    text: "BoostNote 0.23.1 程序员笔记记录",
                    link: "/software/windows/boostnote-win",
                  },
                  {
                    text: "BilibiliVideoDownload 3.3.3 Bilibili视频下载",
                    link: "/software/windows/bilibilivideodownload-win",
                  },
                  {
                    text: "Avid Sibelius Ultimate 2022.9.1464 乐谱简谱制作",
                    link: "/software/windows/avid-sibelius-ultimate-win",
                  },
                  {
                    text: "Atom 1.60.0 代码编辑器",
                    link: "/software/windows/atom-win",
                  },
                  {
                    text: "ATLAS.ti 9.1.3.0 定性数据分析",
                    link: "/software/windows/atlasti-win",
                  },
                  {
                    text: "Perfectly Clear QuickDesk & QuickServer 4.2.0.2336 照片批量校正处理",
                    link: "/software/windows/perfectly-clear-quickdesk-quickserver-win",
                  },
                  {
                    text: "Perfectly Clear Essentials 3.5.7.1160 LR/PS图像清晰化处理",
                    link: "/software/windows/perfectly-clear-essentials-win",
                  },
                  {
                    text: "Perfectly Clear Complete 3.12.2.2045 摄影照片后期处理",
                    link: "/software/windows/perfectly-clear-complete-win",
                  },
                  {
                    text: "Artlantis 2021.2 9.5.2.32853 3D建筑设计渲染",
                    link: "/software/windows/artlantis-win",
                  },
                  {
                    text: "Apower Data Recovery 14.2.1 傲软数据恢复王",
                    link: "/software/windows/apower-data-recovery",
                  },
                  {
                    text: "ApowerRescue 1.0.6.0 iPhone/iPad数据恢复",
                    link: "/software/windows/apowerrescue",
                  },
                  {
                    text: "AI配音专家XZVoice 2.1.1 文字转语音",
                    link: "/software/windows/xzvoice-win",
                  },
                  {
                    text: "Wondershare Recoverit 11.0.0.13 万兴数据恢复专家",
                    link: "/software/windows/wondershare-recoverit-win",
                  },
                  {
                    text: "EdrawProject 1.4.0 亿图项目管理/甘特图",
                    link: "/software/windows/wondershare-edrawproject-win",
                  },
                  {
                    text: "Wondershare Dr.Fone 10.7.2.324 苹果/安卓手机工具箱",
                    link: "/software/windows/wondershare-drfone",
                  },
                  {
                    text: "网易有道词典 8.9.6.0 去广告VIP破解版",
                    link: "/software/windows/youdao-dict",
                  },
                  {
                    text: "小画桌 1.0.0 在线协同办公",
                    link: "/software/windows/xiaohuazhuo-win",
                  },
                  {
                    text: "云日历 1.29 待办事项与日历提醒",
                    link: "/software/windows/mytime-win",
                  },
                  {
                    text: "图压 0.4.1 图片批量压缩",
                    link: "/software/windows/tuya-win",
                  },
                  {
                    text: "QQ拼音输入法 6.6.6304.400 去广告精简版",
                    link: "/software/windows/qqpinyin",
                  },
                  {
                    text: "酷狗音乐 10.0.53.24820 去广告精简版",
                    link: "/software/windows/kugou-music",
                  },
                  {
                    text: "火萤视频桌面 5.2.5.1 动态视频壁纸",
                    link: "/software/windows/huoying-video-desktop-win",
                  },
                  {
                    text: "多多投屏 0.1.20 电视投屏",
                    link: "/software/windows/easy-to-tv-win",
                  },
                  {
                    text: "Adobe Photoshop 2023 23.4.2.603 茶末余香增强版 图像编辑处理设计",
                    link: "/software/windows/adobe-photoshop-plus",
                  },
                  {
                    text: "Adobe Illustrator 2021 25.3.1.390 精简版 矢量绘图设计",
                    link: "/software/windows/adobe-illustrator-lite",
                  },
                  {
                    text: "Adobe Dreamweaver 2021 21.1.0.15413 精简版 代码编辑器",
                    link: "/software/windows/adobe-dreamweaver-lite",
                  },
                  {
                    text: "Adobe Audition 2020 13.0.13.46 精简版 数字音频编辑",
                    link: "/software/windows/adobe-audition-lite",
                  },
                  {
                    text: "Adobe After Effects 2020 17.7.0.45 精简版 视频后期优化处理",
                    link: "/software/windows/adobe-after-effects-lite",
                  },
                  {
                    text: "AE全套插件一键安装包Pro 4.7 AE全套汉化插件",
                    link: "/software/windows/ae-plugins-suite",
                  },
                  {
                    text: "PR全套插件一键安装包Pro 4.1.2 PR全套汉化插件",
                    link: "/software/windows/pr-plugins-suite-win",
                  },
                  {
                    text: "PS全套插件一键安装包Pro 4.5 PS全套汉化插件",
                    link: "/software/windows/ps-plugins-suite",
                  },
                  {
                    text: "CCMaker 1.3.16 Adobe软件在线下载",
                    link: "/software/windows/ccmaker",
                  },
                  {
                    text: "Adobe Home Screen FIX 4.0.2 Adobe软件主屏幕修复补丁",
                    link: "/software/windows/adobe-home-screen-fix",
                  },
                  {
                    text: "Windows ISO Downloader 8.46.0.154 Windows/Office下载器",
                    link: "/software/windows/windows-iso-downloader",
                  },
                  {
                    text: "MarkdownPad 2.5.0.27920 Markdown写作编辑",
                    link: "/software/windows/markdownpad",
                  },
                  {
                    text: "IObit Start Menu 8 Pro 6.0.0.2 开始菜单增强",
                    link: "/software/windows/iobit-start-menu-pro",
                  },
                  {
                    text: "Iris Pro 1.2.0 屏幕护眼与蓝光过滤",
                    link: "/software/windows/iris-pro-win",
                  },
                  {
                    text: "HofoSetup 8.5.6.1888 火凤安装包制作大师",
                    link: "/software/windows/hofosetup",
                  },
                  {
                    text: "HD Tune Pro 5.75 硬盘信息检测",
                    link: "/software/windows/hd-tune-pro",
                  },
                  {
                    text: "HashManager 1.0.0 批量修改文件哈希值",
                    link: "/software/windows/hashmanager",
                  },
                  {
                    text: "Hasher 2.0 哈希值/MD5值检测",
                    link: "/software/windows/hasher",
                  },
                  {
                    text: "GifCam 7.0 GIF动态图录制",
                    link: "/software/windows/gifcam",
                  },
                  {
                    text: "FlashFXP 5.4.0.3970 FTP/FXP协议传输",
                    link: "/software/windows/flashfxp",
                  },
                  {
                    text: "Fiddler 5.0.20202 网络协议抓包调试",
                    link: "/software/windows/fiddler",
                  },
                  {
                    text: "Defender Exclusion Tool 1.2 排除Defender误杀文件/目录",
                    link: "/software/windows/defender-exclusion-tool",
                  },
                  {
                    text: "Defender Control 2.1 永久开启/关闭Windows Defender",
                    link: "/software/windows/defender-control",
                  },
                  {
                    text: "CleanMyPC 1.12.2.2178 系统优化清理",
                    link: "/software/windows/cleanmypc",
                  },
                  {
                    text: "Bulk Rename Utility 3.4.4.0 文件批量重命名",
                    link: "/software/windows/bulk-rename-utility",
                  },
                  {
                    text: "BakaXL 3.2.3.2 Minecraft我的世界启动器",
                    link: "/software/windows/bakaxl",
                  },
                  {
                    text: "AS SSD Benchmark 2.0.7316.34247 SSD固态硬盘检测",
                    link: "/software/windows/as-ssd-benchmark",
                  },
                  {
                    text: "优酷视频 8.1.0.1280 去广告精简版",
                    link: "/software/windows/youku-video",
                  },
                  {
                    text: "Focusky 4.0.2 PPT演示制作",
                    link: "/software/windows/focusky",
                  },
                  {
                    text: "Flip PDF Corporate 2.4.10.3 PDF电子书翻页",
                    link: "/software/windows/flip-pdf-corporate",
                  },
                  {
                    text: "金山PDF专业版 10.8.0.6834 PDF阅读器",
                    link: "/software/windows/kingsoftpdf",
                  },
                  {
                    text: "1Password 7.4.750 密码管理器",
                    link: "/software/windows/1password-win",
                  },
                ],
              },
              {
                text: "MacOs",
                items: [
                  {
                    text: "CotEditor 4.8.6 轻量级纯文本编辑器",
                    link: "/software/macos/coteditor",
                  },
                  {
                    text: "Zettlr 3.2.0 论文Markdown写作编辑",
                    link: "/software/macos/zettlr-mac",
                  },
                  {
                    text: "Medis 2.15.1 MAS Redis可视化管理",
                    link: "/software/macos/medis",
                  },
                  {
                    text: "JetBrains WebStorm 2024.1.4 JavaScript集成开发环境",
                    link: "/software/macos/jetbrains-webstorm-mac",
                  },
                  {
                    text: "JetBrains RubyMine 2024.1.3 Rails/Ruby集成开发环境",
                    link: "/software/macos/jetbrains-rubymine-mac",
                  },
                  {
                    text: "JetBrains Rider 2024.1.3 .NET集成开发环境",
                    link: "/software/macos/jetbrains-rider-mac",
                  },
                  {
                    text: "JetBrains PyCharm Pro 2024.1.3 Python集成开发环境",
                    link: "/software/macos/jetbrains-pycharm-pro-mac",
                  },
                  {
                    text: "JetBrains PhpStorm 2024.1.3 PHP集成开发环境",
                    link: "/software/macos/jetbrains-phpstorm-mac",
                  },
                  {
                    text: "JetBrains IntelliJ IDEA Ultimate 2024.1.3 Java集成开发环境",
                    link: "/software/macos/jetbrains-intellij-idea-ultimate-mac",
                  },
                  {
                    text: "JetBrains GoLand 2024.1.3 Go语言集成开发环境",
                    link: "/software/macos/jetbrains-goland-mac",
                  },
                  {
                    text: "JetBrains DataGrip 2024.1.4 多引擎数据库管理开发",
                    link: "/software/macos/jetbrains-datagrip-mac",
                  },
                  {
                    text: "JetBrains CLion 2024.1.3 C/C++集成开发环境",
                    link: "/software/macos/jetbrains-clion-mac",
                  },
                  {
                    text: "GeoGebra Classic 6.0.845.0 动态数学绘图",
                    link: "/software/macos/geogebra-classic-mac",
                  },
                  {
                    text: "Adobe Camera Raw 16.3.1 Adobe滤镜增效处理插件",
                    link: "/software/macos/adobe-camera-raw-mac",
                  },
                  {
                    text: "Wondershare Recoverit 12.5.15.16 万兴数据恢复专家",
                    link: "/software/macos/wondershare-recoverit-mac",
                  },
                  {
                    text: "小历TinyCal 1.17.5 MAS 小而美的菜单栏日历",
                    link: "/software/macos/tinycal",
                  },
                  {
                    text: "Stats 2.10.17 菜单栏系统监控",
                    link: "/software/macos/stats",
                  },
                  {
                    text: "Screen Wonders 3.0.0 MAS 3D动态壁纸",
                    link: "/software/macos/screen-wonders",
                  },
                  {
                    text: "Rectangle Pro 3.0.28 光标移到与窗口切换管理",
                    link: "/software/macos/rectangle-pro",
                  },
                  {
                    text: "QSpace Pro 4.3.2.013 Beta +4个扩展插件 多窗格文件管理器",
                    link: "/software/macos/qspace-pro",
                  },
                  {
                    text: "QOwnNotes 24.6.1 笔记记录与待办事项",
                    link: "/software/macos/qownnotes-mac",
                  },
                  {
                    text: "Perfectly Clear WorkBench 4.6.1.2664 图像清晰度处理",
                    link: "/software/macos/perfectly-clear-workbench-mac",
                  },
                  {
                    text: "Parallels Toolbox Business Edition 6.7.0.5122 PD实用工具集合",
                    link: "/software/macos/parallels-toolbox-business-edition-mac",
                  },
                  {
                    text: "Paperlib 3.1.5 论文文献管理",
                    link: "/software/macos/paperlib-mac",
                  },
                  {
                    text: "OnlySwitch 2.5.2 菜单栏多合一开关功能合集",
                    link: "/software/macos/onlyswitch",
                  },
                  {
                    text: "Obsidian 1.6.3 卡片笔记编辑管理",
                    link: "/software/macos/obsidian-mac",
                  },
                  {
                    text: "Maplesoft Maple 2024.1 数学科学计算",
                    link: "/software/macos/maplesoft-maple-mac",
                  },
                  {
                    text: "Lumenzia 11.7.7 PS亮度蒙版插件",
                    link: "/software/macos/lumenzia",
                  },
                  {
                    text: "Koodo Reader 1.6.7 Epub电子书阅读",
                    link: "/software/macos/koodo-reader-mac",
                  },
                  {
                    text: "iZotope RX 11 Audio Editor Advanced 11.1.0 音频降噪修复增强",
                    link: "/software/macos/izotope-rx-advanced-mac",
                  },
                  {
                    text: "Firefox 127.0 火狐浏览器",
                    link: "/software/macos/firefox-mac",
                  },
                  {
                    text: "欧路词典 4.6.6 英语词典翻译查询",
                    link: "/software/macos/eudic-mac",
                  },
                  {
                    text: "Dropzone 4.80.15 文件拖拽增强",
                    link: "/software/macos/dropzone",
                  },
                  {
                    text: "DBeaver Ultimate 24.1.0 数据库连接管理",
                    link: "/software/macos/dbeaver-ultimate-mac",
                  },
                  {
                    text: "DirEqual 5.8.4 文件夹比较",
                    link: "/software/macos/direqual",
                  },
                  {
                    text: "Cookie 7.3.1 浏览器缓存Cookie清理",
                    link: "/software/macos/cookie",
                  },
                  {
                    text: "BricsCAD Ultimate 24.2.05 2D与3D CAD建模设计",
                    link: "/software/macos/bricscad-ultimate-mac",
                  },
                  {
                    text: "Boris FX Sapphire for PS/LR 2024.51 蓝宝石视觉特效插件",
                    link: "/software/macos/boris-fx-sapphire-for-ps-lr-mac",
                  },
                  {
                    text: "Boris FX Sapphire for OFX 2024.51 蓝宝石视觉特效插件",
                    link: "/software/macos/boris-fx-sapphire-for-ofx-mac",
                  },
                  {
                    text: "Boris FX Sapphire for Avid 2024.51 蓝宝石视觉特效插件",
                    link: "/software/macos/boris-fx-sapphire-for-avid-mac",
                  },
                  {
                    text: "Boris FX Sapphire for AE/PR 2024.51 蓝宝石视觉特效插件",
                    link: "/software/macos/boris-fx-sapphire-for-ae-pr-mac",
                  },
                  {
                    text: "Bike 1.18.4 创意写作编辑",
                    link: "/software/macos/bike",
                  },
                  {
                    text: "百度网盘 4.35.1",
                    link: "/software/macos/baidunetdisk-mac",
                  },
                  {
                    text: "Anki 24.06.2 辅助记忆学习",
                    link: "/software/macos/anki-mac",
                  },
                  {
                    text: "Android Studio 2023.3.1.20 Android集成开发环境",
                    link: "/software/macos/android-studio-mac",
                  },
                  {
                    text: "AirBattery 1.3.5 苹果设备电量信息显示",
                    link: "/software/macos/airbattery",
                  },
                  {
                    text: "Araxis Merge Professional 2024.6000 文件/文件夹对比",
                    link: "/software/macos/araxis-merge-professional-mac",
                  },
                  {
                    text: "Vellum 3.7.3 电子书出版制作",
                    link: "/software/macos/vellum",
                  },
                  {
                    text: "Ice 0.9.0 菜单栏图标隐藏管理",
                    link: "/software/macos/ice",
                  },
                  {
                    text: "QuickRecorder 1.3.1 屏幕录像",
                    link: "/software/macos/quickrecorder",
                  },
                  {
                    text: "AirBuddy 3.0.816 AirPods耳机管理",
                    link: "/software/macos/airbuddy",
                  },
                  {
                    text: "WiFi Signal 4.4.11 MAS WiFi网络管理",
                    link: "/software/macos/wifi-signal",
                  },
                  {
                    text: "Pixelmator Pro 3.6.3 MAS +iCloud 图像编辑处理",
                    link: "/software/macos/pixelmator-pro",
                  },
                  {
                    text: "Pika 0.0.17 颜色选择器",
                    link: "/software/macos/pika",
                  },
                  {
                    text: "OBS Studio 30.2.0 Beta1 直播视频录像",
                    link: "/software/macos/obs-studio-mac",
                  },
                  {
                    text: "Native Instruments Komplete Kontrol 3.2.1 MIDI键盘音源制作",
                    link: "/software/macos/native-instruments-komplete-kontrol-mac",
                  },
                  {
                    text: "Logic Pro X 11.0.1 MAS 音乐制作混音编辑",
                    link: "/software/macos/logic-pro-x",
                  },
                  {
                    text: "Input Source Pro 2.4.10 Beta 自动切换输入法",
                    link: "/software/macos/input-source-pro",
                  },
                  {
                    text: "iNet Network Scanner 3.1.1 MAS 网络扫描管理",
                    link: "/software/macos/inet-network-scanner",
                  },
                  {
                    text: "键指如飞FlyKey 1.6.5 展示软件快捷键",
                    link: "/software/macos/flykey",
                  },
                  {
                    text: "Feeder 4.6.4 RSS阅读管理",
                    link: "/software/macos/feeder",
                  },
                  {
                    text: "Enpass 6.11.0 密码管理器",
                    link: "/software/macos/enpass-mac",
                  },
                  {
                    text: "Effie 3.8.1 Markdown写作编辑",
                    link: "/software/macos/effie-mac",
                  },
                  {
                    text: "Billfish 3.1.15.5 图像管理查看",
                    link: "/software/macos/billfish-mac",
                  },
                  {
                    text: "BetterAndBetter 2.6.0 Beta 鼠标触控板手势增强",
                    link: "/software/macos/betterandbetter",
                  },
                  {
                    text: "Apifox 2.5.30 API接口调试",
                    link: "/software/macos/apifox-mac",
                  },
                  {
                    text: "搜狗拼音输入法 6.15.0.9328",
                    link: "/software/macos/sogoupyinput-mac",
                  },
                  {
                    text: "Mimestream 1.3.6 邮件收发管理",
                    link: "/software/macos/mimestream",
                  },
                  {
                    text: "Wondershare UniConverter 15.5.10.179 音视频转换/下载/无损压缩",
                    link: "/software/macos/wondershare-uniconverter-mac",
                  },
                  {
                    text: "WiFi Explorer Pro 3.6.5 WiFi网络扫描管理",
                    link: "/software/macos/wifi-explorer-pro",
                  },
                  {
                    text: "Topaz Video AI 5.1.2 AI视频无损缩放增强",
                    link: "/software/macos/topaz-video-ai-mac",
                  },
                  {
                    text: "SnippetsLab 2.4.2 MAS 代码管理编辑",
                    link: "/software/macos/snippetslab",
                  },
                  {
                    text: "Proxyman 5.5.0 网络协议抓包调试",
                    link: "/software/macos/proxyman-mac",
                  },
                  {
                    text: "Permute 3.11.10 音视频格式转换",
                    link: "/software/macos/permute",
                  },
                  {
                    text: "Microsoft Edge 125.0.2535.92",
                    link: "/software/macos/microsoft-edge-mac",
                  },
                  {
                    text: "Loopback 2.4.0 音频传输",
                    link: "/software/macos/loopback",
                  },
                  {
                    text: "Noir 2024.2.1 MAS Safari深色模式插件",
                    link: "/software/macos/noir",
                  },
                  {
                    text: "fHash 3.3.2 哈希值检测校验",
                    link: "/software/macos/fhash-mac",
                  },
                  {
                    text: "draw.io 24.5.1 流程图绘制",
                    link: "/software/macos/drawio-mac",
                  },
                  {
                    text: "Deckset 2.0.32 MD文档转幻灯片软件",
                    link: "/software/macos/deckset",
                  },
                  {
                    text: "Dato 5.3.0 MAS 多功能菜单栏时钟",
                    link: "/software/macos/dato",
                  },
                  {
                    text: "D16 Group Nithonat 2.0.0 606鼓机模拟器插件",
                    link: "/software/macos/d16-group-nithonat-mac",
                  },
                  {
                    text: "Codepoint 1.17 MAS Unicode字符管理设计",
                    link: "/software/macos/codepoint",
                  },
                  {
                    text: "AppFlowy 0.5.9 笔记编辑管理",
                    link: "/software/macos/appflowy-mac",
                  },
                  {
                    text: "腾讯QQ 6.9.36.240606",
                    link: "/software/macos/qq-mac",
                  },
                  {
                    text: "Yate 6.20 音频标签编辑器",
                    link: "/software/macos/yate",
                  },
                  {
                    text: "Visual Studio Code 1.90.0 代码编辑器",
                    link: "/software/macos/visual-studio-code-mac",
                  },
                  {
                    text: "Ulysses 35 MAS Markdown写作编辑",
                    link: "/software/macos/ulysses",
                  },
                  {
                    text: "Topaz Gigapixel AI 7.1.4 AI图片无损缩放",
                    link: "/software/macos/topaz-gigapixel-ai-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-J-8 1.8.4 单声道低音合成器插件",
                    link: "/software/macos/togu-audio-line-tal-j-8-mac",
                  },
                  {
                    text: "腾讯柠檬清理Tencent Lemon 5.1.8.1 系统优化清理",
                    link: "/software/macos/lemon-cleaner",
                  },
                  {
                    text: "RayLink 8.0.6.8 远程桌面控制",
                    link: "/software/macos/raylink-mac",
                  },
                  {
                    text: "RAW Power 3.4.22 MAS RAW照片编辑处理",
                    link: "/software/macos/raw-power",
                  },
                  {
                    text: "Postman 11.1.14 API接口调试",
                    link: "/software/macos/postman-mac",
                  },
                  {
                    text: "PopClip 2024.5.2 MAS 复制粘贴增强",
                    link: "/software/macos/popclip",
                  },
                  {
                    text: "PhotoSweeper X 4.9.0 重复照片清理",
                    link: "/software/macos/photosweeper-x",
                  },
                  {
                    text: "Path Finder 2172 文件管理浏览",
                    link: "/software/macos/path-finder",
                  },
                  {
                    text: "PhotoMill X 2.6.0 图片批量处理",
                    link: "/software/macos/photomill-x",
                  },
                  {
                    text: "OmniFocus Pro 4.3 任务与时间效率管理",
                    link: "/software/macos/omnifocus-pro",
                  },
                  {
                    text: "Microsoft Remote Desktop Beta 10.9.8.2201 远程桌面连接管理",
                    link: "/software/macos/microsoft-remote-desktop-beta",
                  },
                  { text: "Iris 1.7.1 屏幕录像", link: "/software/macos/iris" },
                  {
                    text: "iReal Pro 2024.6 音乐参考练习",
                    link: "/software/macos/ireal-pro",
                  },
                  {
                    text: "FontLab 8.4.0.8858 Beta 字体编辑设计",
                    link: "/software/macos/fontlab-mac",
                  },
                  {
                    text: "EverWeb 4.2 可视化网页设计",
                    link: "/software/macos/everweb",
                  },
                  {
                    text: "CloudMounter 4.6 FTP/SFTP连接管理",
                    link: "/software/macos/cloudmounter",
                  },
                  {
                    text: "ClipboardManager 2.6.2 MAS 剪贴板管理",
                    link: "/software/macos/clipboardmanager",
                  },
                  {
                    text: "熊掌记Bear 2.1.9 MAS Markdown写作编辑",
                    link: "/software/macos/bear",
                  },
                  {
                    text: "Another Redis Desktop Manager 1.6.6 Redis可视化管理",
                    link: "/software/macos/another-redis-desktop-manager-mac",
                  },
                  {
                    text: "Ableton Live 12 Suite 12.0.5 音乐创作与演奏分析",
                    link: "/software/macos/ableton-live-suite-mac",
                  },
                  {
                    text: "百度输入法 6.1.8.16",
                    link: "/software/macos/baidu-input-mac",
                  },
                  {
                    text: "Scroll 2.4.3 鼠标滚动增强",
                    link: "/software/macos/scroll",
                  },
                  {
                    text: "Screen Studio 2.22.16 自动放大视频的屏幕录制",
                    link: "/software/macos/screen-studio",
                  },
                  {
                    text: "Red Giant Universe 2024.3.0 红巨星视频特效插件套装",
                    link: "/software/macos/red-giant-universe-mac",
                  },
                  {
                    text: "Raycast 1.75.2 快捷启动器",
                    link: "/software/macos/raycast",
                  },
                  {
                    text: "Opera 110.0.5130.66 欧朋浏览器",
                    link: "/software/macos/opera-mac",
                  },
                  {
                    text: "LibreOffice 24.2.4 Office办公套件",
                    link: "/software/macos/libreoffice-mac",
                  },
                  {
                    text: "lanzouyun 3.4.9 第三方蓝奏云",
                    link: "/software/macos/lanzouyun-mac",
                  },
                  {
                    text: "ForkLift 4.1.3 双窗口文件管理器",
                    link: "/software/macos/forklift",
                  },
                  {
                    text: "AnyGo 7.3.1 iPhone/iPod虚拟定位",
                    link: "/software/macos/anygo",
                  },
                  {
                    text: "Allavsoft 3.27.2.8920 全能视频下载器",
                    link: "/software/macos/allavsoft-mac",
                  },
                  {
                    text: "Affinity Publisher 2.5.2.2486 页面布局设计",
                    link: "/software/macos/affinity-publisher-mac",
                  },
                  {
                    text: "Affinity Designer 2.5.2.2486 矢量图形设计",
                    link: "/software/macos/affinity-designer-mac",
                  },
                  {
                    text: "Affinity Photo 2.5.2.2486 图像编辑设计",
                    link: "/software/macos/affinity-photo-mac",
                  },
                  {
                    text: "XnViewMP 1.7.2 图像管理查看",
                    link: "/software/macos/xnviewmp-mac",
                  },
                  {
                    text: "SiteSucker Pro 5.3.5 网站扒站神器",
                    link: "/software/macos/sitesucker-pro",
                  },
                  {
                    text: "ShotCut 24.06.02 Beta 视频编辑器",
                    link: "/software/macos/shotcut-mac",
                  },
                  {
                    text: "Native Instruments Kontakt 7.10.5 音频采样器",
                    link: "/software/macos/native-instruments-kontakt-mac",
                  },
                  {
                    text: "右键助手专业版MouseBoost Pro 3.4.8 MAS 右键菜单管理",
                    link: "/software/macos/mouseboost-pro",
                  },
                  {
                    text: "iShot Pro 2.5.3 MAS 多功能OCR截图标注",
                    link: "/software/macos/ishot-pro",
                  },
                  {
                    text: "EdgeView 4.7.4 MAS 图像管理查看",
                    link: "/software/macos/edgeview",
                  },
                  {
                    text: "Downie 4.7.17 视频解析下载",
                    link: "/software/macos/downie",
                  },
                  {
                    text: "TTime 0.9.12 划词翻译/截图翻译与截图OCR",
                    link: "/software/macos/ttime-mac",
                  },
                  {
                    text: "RustDesk 1.2.5 Beta 远程桌面控制",
                    link: "/software/macos/rustdesk-mac",
                  },
                  {
                    text: "Valentina Studio Pro 14.0.0 多连接数据库管理开发",
                    link: "/software/macos/valentina-studio-pro-mac",
                  },
                  {
                    text: "Overloud BREVERB 2.1.18 算法混响效果插件",
                    link: "/software/macos/overloud-breverb-mac",
                  },
                  {
                    text: "OmniReader Pro 2.9.10 MAS 全能电子书阅读管理器",
                    link: "/software/macos/omnireader-pro",
                  },
                  {
                    text: "MKVToolNix 85.0 MKV视频处理",
                    link: "/software/macos/mkvtoolnix-mac",
                  },
                  {
                    text: "File Juicer 4.99(1538) 文件数据提取",
                    link: "/software/macos/file-juicer",
                  },
                  {
                    text: "Togu Audio Line TAL-U-NO-LX-V2 4.9.0 模拟Juno 60合成器插件",
                    link: "/software/macos/togu-audio-line-tal-u-no-lx-v2-mac",
                  },
                  {
                    text: "MediaInfo 24.05 MAS 音视频信息提取",
                    link: "/software/macos/mediainfo-mac",
                  },
                  {
                    text: "Lunacy 9.6.2 UI/UX矢量绘图设计",
                    link: "/software/macos/lunacy-mac",
                  },
                  {
                    text: "Bookends 15.0.3 文献书籍管理",
                    link: "/software/macos/bookends",
                  },
                  {
                    text: "XTerminal 1.25.1 终端模拟器/SSH/SFTP客户端",
                    link: "/software/macos/xterminal-mac",
                  },
                  {
                    text: "阿里云盘小白羊XBYDriver 3.13.5 第三方阿里云盘",
                    link: "/software/macos/xbydriver-mac",
                  },
                  {
                    text: "Wondershare PDFelement Professional 10.3.7.6478 +OCR 万兴PDF编辑器",
                    link: "/software/macos/wondershare-pdfelement-professional-mac",
                  },
                  {
                    text: "WonderPen 2.4.7 妙笔Markdown写作编辑",
                    link: "/software/macos/wonderpen-mac",
                  },
                  {
                    text: "uTools 5.1.1 应用插件工具集",
                    link: "/software/macos/utools-mac",
                  },
                  {
                    text: "Upscayl 2.11.5 图像AI放大增强",
                    link: "/software/macos/upscayl-mac",
                  },
                  {
                    text: "Serial Box 2024.06 Mac软件序列号查询",
                    link: "/software/macos/serial-box",
                  },
                  {
                    text: "Reunion 14.0.240524 家谱族谱制作",
                    link: "/software/macos/reunion",
                  },
                  {
                    text: "PDF Reader Pro 4.0.1 PDF编辑阅读器",
                    link: "/software/macos/pdf-reader-pro",
                  },
                  {
                    text: "MarsEdit 5.2.0 博客写作编辑",
                    link: "/software/macos/marsedit",
                  },
                  {
                    text: "洛雪音乐 2.8.0 音乐播放下载",
                    link: "/software/macos/lx-music-mac",
                  },
                  {
                    text: "Keep It 2.4.7 笔记编辑管理",
                    link: "/software/macos/keep-it",
                  },
                  {
                    text: "IINA 1.3.5 视频播放器",
                    link: "/software/macos/iina",
                  },
                  {
                    text: "JProfiler 14.0.3 Java 性能分析",
                    link: "/software/macos/jprofiler-mac",
                  },
                  {
                    text: "Jettison 1.8.8 外部磁盘辅助弹出",
                    link: "/software/macos/jettison",
                  },
                  {
                    text: "Hopper Disassembler 5.15.6 反汇编调试神器",
                    link: "/software/macos/hopper-disassembler",
                  },
                  {
                    text: "electerm 1.39.35 终端模拟器/SSH/SFTP客户端",
                    link: "/software/macos/electerm-mac",
                  },
                  {
                    text: "CalendarX 2.3.5 菜单栏日历和时间",
                    link: "/software/macos/calendarx",
                  },
                  {
                    text: "Brave Browser 1.66.118 隐私广告拦截浏览器",
                    link: "/software/macos/brave-browser-mac",
                  },
                  {
                    text: "AltTab 6.70.1 软件窗口快速切换",
                    link: "/software/macos/alttab",
                  },
                  {
                    text: "Wirecast Pro 16.2.1 视频直播制作",
                    link: "/software/macos/wirecast-pro-mac",
                  },
                  {
                    text: "Wins 2.0.1 窗口分屏管理",
                    link: "/software/macos/wins",
                  },
                  {
                    text: "Widgetter 1.18.0 MAS 5K高清壁纸与桌面小组件",
                    link: "/software/macos/widgetter",
                  },
                  {
                    text: "Waterfox G6.0.15 水狐浏览器",
                    link: "/software/macos/waterfox-mac",
                  },
                  {
                    text: "Vivaldi Browser 6.7.3329.39 快速且私密的浏览器",
                    link: "/software/macos/vivaldi-browser-mac",
                  },
                  {
                    text: "Topaz Photo AI 3.0.3 AI图片智能降噪",
                    link: "/software/macos/topaz-photo-ai-mac",
                  },
                  {
                    text: "ToonTrack Superior Drummer 3.3.7 +Core Library 虚拟鼓音乐制作",
                    link: "/software/macos/toontrack-superior-drummer-mac",
                  },
                  {
                    text: "HMCL 3.5.8.248 Minecraft我的世界启动器",
                    link: "/software/macos/hmcl",
                  },
                  {
                    text: "Sweet Home 3D 7.4.0 3D室内装潢设计",
                    link: "/software/macos/sweet-home-3d-mac",
                  },
                  {
                    text: "Steinberg Nuendo Pro 13.0.40 音频后期制作",
                    link: "/software/macos/steinberg-nuendo-pro-mac",
                  },
                  {
                    text: "Steinberg Groove Agent 5.2.10 虚拟鼓手模拟插件",
                    link: "/software/macos/steinberg-groove-agent-mac",
                  },
                  {
                    text: "Steinberg Dorico Pro 5.1.40 乐谱编写制作",
                    link: "/software/macos/steinberg-dorico-pro-mac",
                  },
                  {
                    text: "Steinberg Cubase Pro 13.0.40 多功能音乐制作",
                    link: "/software/macos/steinberg-cubase-pro-mac",
                  },
                  {
                    text: "Stash 2.6.3 网络代理客户端",
                    link: "/software/macos/stash",
                  },
                  { text: "Sip 3.5 屏幕取色管理", link: "/software/macos/sip" },
                  {
                    text: "Rubick 4.2.4 开源插件工具箱",
                    link: "/software/macos/rubick-mac",
                  },
                  {
                    text: "Redis Insight 2.50.0 Redis可视化管理",
                    link: "/software/macos/redis-insight-mac",
                  },
                  {
                    text: "Professional Recorder 7.0.1 MAS 专业录音机",
                    link: "/software/macos/professional-recorder",
                  },
                  {
                    text: "PreSonus Studio One 6 Professional 6.6.1 数字音乐编曲创作",
                    link: "/software/macos/presonus-studio-one-professional-mac",
                  },
                  {
                    text: "PixelOver 0.15.2 Beta 像素动画编辑制作",
                    link: "/software/macos/pixelover-mac",
                  },
                  {
                    text: "Live Home 3D Pro 4.9.1.1562 3D家居装修设计",
                    link: "/software/macos/live-home-3d-pro-mac",
                  },
                  {
                    text: "Google Chrome 125.0.6422.142 谷歌浏览器",
                    link: "/software/macos/google-chrome-mac",
                  },
                  {
                    text: "Dehancer Pro OFX 7.2.0 胶片模拟调色插件",
                    link: "/software/macos/dehancer-pro-ofx-mac",
                  },
                  {
                    text: "calibre 7.12.0 电子书阅读管理器",
                    link: "/software/macos/calibre-mac",
                  },
                  {
                    text: "Burp Suite Pro 2024.5.1 网络渗透测试",
                    link: "/software/macos/burp-suite-pro-mac",
                  },
                  {
                    text: "比特彗星BitComet 2.8.2 BT种子下载器",
                    link: "/software/macos/bitcomet-mac",
                  },
                  {
                    text: "balenaEtcher 1.19.21 U盘启动盘制作",
                    link: "/software/macos/balenaetcher-mac",
                  },
                  {
                    text: "360极速浏览器Pro 14.5.1058.0",
                    link: "/software/macos/360chrome-mac",
                  },
                  {
                    text: "OnyX 4.5.9 系统优化清理",
                    link: "/software/macos/onyx",
                  },
                  {
                    text: "MWeb Pro 4.6.2 Markdown写作编辑",
                    link: "/software/macos/mweb-pro",
                  },
                  {
                    text: "MuseScore Studio 4.3.1.241490902 乐谱编曲编辑",
                    link: "/software/macos/musescore-studio-mac",
                  },
                  {
                    text: "Microsoft Word LTSC 2021 16.85.2 微软文档处理",
                    link: "/software/macos/microsoft-word",
                  },
                  {
                    text: "Microsoft Outlook LTSC 2021 16.85.2 微软邮件收发管理",
                    link: "/software/macos/microsoft-outlook",
                  },
                  {
                    text: "Infuse Pro 7.7.7 MAS 智能视频播放器",
                    link: "/software/macos/infuse-pro",
                  },
                  {
                    text: "FireAlpaca 2.11.23 数字绘画软件",
                    link: "/software/macos/firealpaca-mac",
                  },
                  {
                    text: "CameraBag Pro 2024.2.1 照片滤镜处理",
                    link: "/software/macos/camerabag-pro-mac",
                  },
                  {
                    text: "Deeper 3.0.7 隐藏文件优化调整",
                    link: "/software/macos/deeper",
                  },
                  { text: "微信 3.8.8.17", link: "/software/macos/wechat-mac" },
                  {
                    text: "DxO PhotoLab Elite 7.6.0.55 RAW图像编辑处理",
                    link: "/software/macos/dxo-photolab-elite-mac",
                  },
                  {
                    text: "Dropover 4.14.2 MAS 更容易拖拽文件",
                    link: "/software/macos/dropover",
                  },
                  {
                    text: "DaVinci Resolve Studio 19.0.0.33 Beta 3 达芬奇影视后期调色剪辑",
                    link: "/software/macos/davinci-resolve-studio-mac",
                  },
                  {
                    text: "DaVinci Fusion Studio 19.0.0.29 Beta 3 影视后期特效合成",
                    link: "/software/macos/davinci-fusion-studio-mac",
                  },
                  {
                    text: "Blocs 5.2.4 可视化代码编辑器",
                    link: "/software/macos/blocs",
                  },
                  {
                    text: "Binary Ninja Personal 4.0.4958 逆向编译调试",
                    link: "/software/macos/binary-ninja-personal-mac",
                  },
                  {
                    text: "Arc Browser 1.36.0 重新定义下一代浏览器",
                    link: "/software/macos/arc-browser-mac",
                  },
                  {
                    text: "Apparency 2.0 查看软件基本信息",
                    link: "/software/macos/apparency",
                  },
                  {
                    text: "Planner 5D 4.16.0 MAS 室内家居设计",
                    link: "/software/macos/planner-5d",
                  },
                  {
                    text: "Mellel 6.0.4 文字编辑处理",
                    link: "/software/macos/mellel",
                  },
                  {
                    text: "Native SQLite Manager 1.28.0 MAS SQLite数据库连接管理",
                    link: "/software/macos/native-sqlite-manager",
                  },
                  {
                    text: "Dynamic Wallpaper 18.2 MAS 4K动态视频壁纸",
                    link: "/software/macos/dynamic-wallpaper",
                  },
                  {
                    text: "CleanShot X 4.7.1 截图标注录屏",
                    link: "/software/macos/cleanshot-x",
                  },
                  {
                    text: "iZotope Dialogue Match 1.2.0 音频混音制作插件",
                    link: "/software/macos/izotope-dialogue-match-mac",
                  },
                  {
                    text: "Arturia Farfisa V 1.13.0.4395 电风琴模拟合成器插件",
                    link: "/software/macos/arturia-farfisa-v-mac",
                  },
                  {
                    text: "Arturia EQ SITRAL-295 1.3.0.4457 均衡器音频模拟插件",
                    link: "/software/macos/arturia-eq-sitral-295-mac",
                  },
                  {
                    text: "Arturia Emulator II V 1.6.0.4395 多音色采样合成器插件",
                    link: "/software/macos/arturia-emulator-ii-v-mac",
                  },
                  {
                    text: "Arturia Efx REFRACT 1.0.0.5002 立体声效果处理插件",
                    link: "/software/macos/arturia-efx-refract-mac",
                  },
                  {
                    text: "Arturia Efx MOTIONS 1.0.0.4836 声音效果动态处理插件",
                    link: "/software/macos/arturia-efx-motions-mac",
                  },
                  {
                    text: "Arturia Efx FRAGMENTS 1.2.0.4457 声音效果实时处理插件",
                    link: "/software/macos/arturia-efx-fragments-mac",
                  },
                  {
                    text: "Arturia DX7 V 1.13.0.4395 电台数字合成器插件",
                    link: "/software/macos/arturia-dx7-v-mac",
                  },
                  {
                    text: "Arturia Dist TUBE-CULTURE 1.1.1.4457 真空管模拟插件",
                    link: "/software/macos/arturia-dist-tube-culture-mac",
                  },
                  {
                    text: "Arturia Dist OPAMP-21 1.1.0.4457 失真效果模拟插件",
                    link: "/software/macos/arturia-dist-opamp-21-mac",
                  },
                  {
                    text: "Arturia Dist COLDFIRE 1.1.0.4463 失真效果模拟插件",
                    link: "/software/macos/arturia-dist-coldfire-mac",
                  },
                  {
                    text: "Kdenlive 24.05.0 非线性视频编辑处理",
                    link: "/software/macos/kdenlive-mac",
                  },
                  {
                    text: "FSNotes 6.8.0 +iCloud 程序员笔记管理",
                    link: "/software/macos/fsnotes",
                  },
                  {
                    text: "DMG Canvas 4.0.9 DMG安装包制作",
                    link: "/software/macos/dmg-canvas",
                  },
                  {
                    text: "Cockos REAPER 7.16 数字音频编辑制作",
                    link: "/software/macos/cockos-reaper-mac",
                  },
                  {
                    text: "微信键盘 1.1.1.335 微信输入法",
                    link: "/software/macos/wetype-mac",
                  },
                  {
                    text: "妙言 1.15 Markdown写作编辑",
                    link: "/software/macos/miaoyan",
                  },
                  {
                    text: "Nobe OmniScope 1.10.122 视频调色示波器插件",
                    link: "/software/macos/nobe-omniscope-mac",
                  },
                  {
                    text: "HQPlayer Desktop 5.7.1 高品质音频播放器",
                    link: "/software/macos/hqplayer-desktop-mac",
                  },
                  {
                    text: "i-Picker 1.0.4 MAS 一键切换默认浏览器",
                    link: "/software/macos/i-picker",
                  },
                  {
                    text: "Mist 0.10 Mac系统镜像下载",
                    link: "/software/macos/mist",
                  },
                  {
                    text: "Ghost Buster Pro 3.2.8 MAS 文件查找删除",
                    link: "/software/macos/ghost-buster-pro",
                  },
                  {
                    text: "Xmind Pro 2024 24.04.10311 思维导图与头脑风暴",
                    link: "/software/macos/xmind-pro-mac",
                  },
                  {
                    text: "Pixzip 2.1.5 图片批量压缩",
                    link: "/software/macos/pixzip-mac",
                  },
                  {
                    text: "KORG Gadget & Plugins 3.1.0 音频合成器插件",
                    link: "/software/macos/korg-gadget-plugins-mac",
                  },
                  {
                    text: "DockView 1.5.3 Dock栏窗口预览",
                    link: "/software/macos/dockview",
                  },
                  {
                    text: "Boxy SVG 4.32.2 MAS 矢量图编辑器",
                    link: "/software/macos/boxy-svg",
                  },
                  {
                    text: "Project Office X 1.1.21 项目管理",
                    link: "/software/macos/project-office-x",
                  },
                  {
                    text: "MiniMeters 0.8.19 Beta 音频计量监视器",
                    link: "/software/macos/minimeters-mac",
                  },
                  {
                    text: "Install4j 10.0.8 Java 安装程序构建",
                    link: "/software/macos/install4j-mac",
                  },
                  {
                    text: "Hype 4 Pro 4.1.18 HTML5响应式网页设计",
                    link: "/software/macos/hype-pro",
                  },
                  {
                    text: "Foxit PDF Reader 2024.2.2.64388 福昕PDF阅读器",
                    link: "/software/macos/foxit-pdf-reader-mac",
                  },
                  {
                    text: "Flame 2025.0.1 视觉后期特效制作",
                    link: "/software/macos/flame",
                  },
                  {
                    text: "Audio Hijack 4.4.2 录音软件",
                    link: "/software/macos/audio-hijack",
                  },
                  {
                    text: "Adobe Creative Cloud 6.2.0.554 Adobe创意云桌面应用",
                    link: "/software/macos/adobe-creative-cloud-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-Drum 2.5.3 老式鼓机音频采样插件",
                    link: "/software/macos/togu-audio-line-tal-drum-mac",
                  },
                  {
                    text: "Tower Pro 11.1.405 Git客户端",
                    link: "/software/macos/tower-pro-mac",
                  },
                  {
                    text: "Snagit 2024.2.5 截图贴图录像编辑",
                    link: "/software/macos/snagit-mac",
                  },
                  {
                    text: "System Dashboard Pro 1.11.0 MAS 系统状态监测",
                    link: "/software/macos/system-dashboard-pro",
                  },
                  {
                    text: "Text Workflow 2.0 MAS 文本转换处理",
                    link: "/software/macos/text-workflow",
                  },
                  {
                    text: "RunJS 2.12.1 JavaScript代码编辑器",
                    link: "/software/macos/runjs-mac",
                  },
                  {
                    text: "Mitti 2.8.1 视频回放编辑",
                    link: "/software/macos/mitti",
                  },
                  {
                    text: "Name Mangler 3.9.1 文件批量重命名",
                    link: "/software/macos/name-mangler",
                  },
                  {
                    text: "MacDroid Pro 2.0.211 安卓数据传输软件",
                    link: "/software/macos/macdroid-pro",
                  },
                  {
                    text: "Magic Disk Cleaner 2.7.7 MAS 磁盘垃圾清理",
                    link: "/software/macos/magic-disk-cleaner",
                  },
                  {
                    text: "Leech 3.2 轻量级下载管理器",
                    link: "/software/macos/leech",
                  },
                  {
                    text: "Kate 24.05.7343 高级文本编辑器",
                    link: "/software/macos/kate-mac",
                  },
                  {
                    text: "Joplin 3.0.8 Beta 笔记加密记录与待办事项",
                    link: "/software/macos/joplin-mac",
                  },
                  {
                    text: "ePub 阅读器EPUB Reader 2.6.6 MAS 电子书阅读神器",
                    link: "/software/macos/epub-reader",
                  },
                  {
                    text: "OpenCore Configurator 2.76.1.0 黑苹果系统引导配置",
                    link: "/software/macos/opencore-configurator",
                  },
                  {
                    text: "Clover Configurator 5.28.0.0 黑苹果四叶草配置",
                    link: "/software/macos/clover-configurator",
                  },
                  {
                    text: "CHM阅读器 2.6.3 MAS CHM帮助文件阅读",
                    link: "/software/macos/chm-reader",
                  },
                  {
                    text: "Arturia Analog Lab Pro V 5.10.2.4741 音频合成器插件",
                    link: "/software/macos/arturia-analog-lab-pro-v-mac",
                  },
                  {
                    text: "Airmail Pro 5.7.7 MAS 邮件收发管理",
                    link: "/software/macos/airmail-pro",
                  },
                  {
                    text: "Artstudio Pro 5.2 MAS 绘图与照片编辑处理",
                    link: "/software/macos/artstudio-pro",
                  },
                  {
                    text: "Native Instruments Maschine 2.18.1 音频采样器",
                    link: "/software/macos/native-instruments-maschine-mac",
                  },
                  {
                    text: "Keyboard Maestro 11.0.3 键盘热键大师",
                    link: "/software/macos/keyboard-maestro",
                  },
                  {
                    text: "Glyphs 3.3.0 字体编辑设计",
                    link: "/software/macos/glyphs",
                  },
                  {
                    text: "HandBrake 1.8.0 视频格式转换器",
                    link: "/software/macos/handbrake-mac",
                  },
                  {
                    text: "剪映专业版 5.9.0/CapCut 3.9.0 视频编辑处理",
                    link: "/software/macos/videofusion-mac",
                  },
                  {
                    text: "Capture One Studio 16.4.2.1 RAW图像编辑处理",
                    link: "/software/macos/capture-one-mac",
                  },
                  {
                    text: "ZY Player 3.3.6 视频资源播放器",
                    link: "/software/macos/zy-player-mac",
                  },
                  {
                    text: "Quip 8.43.1 文档编辑器",
                    link: "/software/macos/quip-mac",
                  },
                  {
                    text: "Rhinoceros 8.7.24138.15432 犀牛3D建模",
                    link: "/software/macos/rhinoceros-mac",
                  },
                  {
                    text: "Progressive Downloader 6.5 多线程直链下载器",
                    link: "/software/macos/progressive-downloader",
                  },
                  {
                    text: "Piezo 1.9.2 录音软件",
                    link: "/software/macos/piezo",
                  },
                  {
                    text: "Mac Mouse Fix 2.2.4 鼠标平滑滚动增强",
                    link: "/software/macos/mac-mouse-fix",
                  },
                  {
                    text: "Maintenance 3.1.7 系统优化维护",
                    link: "/software/macos/maintenance",
                  },
                  {
                    text: "Dropshare 5.51 网络文件共享",
                    link: "/software/macos/dropshare",
                  },
                  {
                    text: "Adobe DNG Converter 16.3 RAW图片转DNG格式",
                    link: "/software/macos/adobe-dng-converter-mac",
                  },
                  {
                    text: "4K Stogram Pro 4.9.0.4680 Instagram图片查看与下载",
                    link: "/software/macos/4k-stogram-pro-mac",
                  },
                  {
                    text: "Arturia Delay TAPE-201 1.6.0.4457 磁带延迟模拟插件",
                    link: "/software/macos/arturia-delay-tape-201-mac",
                  },
                  {
                    text: "Arturia Delay ETERNITY 1.6.0.4457 音频模拟延迟插件",
                    link: "/software/macos/arturia-delay-eternity-mac",
                  },
                  {
                    text: "Arturia Delay BRIGADE 1.6.0.4457 音频低保真模拟延迟插件",
                    link: "/software/macos/arturia-delay-brigade-mac",
                  },
                  {
                    text: "Arturia CZ V 1.9.0.4395 Casio CZ模拟合成器插件",
                    link: "/software/macos/arturia-cz-v-mac",
                  },
                  {
                    text: "Arturia CS-80 V 4.3.0.4395 CS-80模拟合成器插件",
                    link: "/software/macos/arturia-cs-80-v-mac",
                  },
                  {
                    text: "Arturia CP-70 V 1.0.0.4395 CP-70电钢琴模拟合成器插件",
                    link: "/software/macos/arturia-cp-70-v-mac",
                  },
                  {
                    text: "Arturia Comp VCA-65 1.6.0.4457 VCA压缩器模拟插件",
                    link: "/software/macos/arturia-comp-vca-65-mac",
                  },
                  {
                    text: "Arturia Comp TUBE-STA 1.6.0.4457 真空管压缩器模拟插件",
                    link: "/software/macos/arturia-comp-tube-sta-mac",
                  },
                  {
                    text: "Arturia Comp FET-76 1.6.0.4457 FET压缩器模拟插件",
                    link: "/software/macos/arturia-comp-fet-76-mac",
                  },
                  {
                    text: "Arturia Comp DIODE-609 1.3.0.4457 二极管压缩限幅器模拟插件",
                    link: "/software/macos/arturia-comp-diode-609-mac",
                  },
                  {
                    text: "Beaver Notes 3.2.0 海狸笔记编辑管理",
                    link: "/software/macos/beaver-notes-mac",
                  },
                  {
                    text: "QR Wizard 2.2 生成二维码",
                    link: "/software/macos/qr-wizard",
                  },
                  {
                    text: "Colori 1.4 颜色选择器",
                    link: "/software/macos/colori",
                  },
                  {
                    text: "BetterMouse 1.5.4690 鼠标手势增强",
                    link: "/software/macos/bettermouse",
                  },
                  {
                    text: "Toontrack EZBass 1.2.0 虚拟低音贝斯",
                    link: "/software/macos/toontrack-ezbass-mac",
                  },
                  {
                    text: "VueScan Pro 9.8.33 万能扫描仪驱动",
                    link: "/software/macos/vuescan-pro-mac",
                  },
                  {
                    text: "TechTool Pro 19.0.6 硬件监测与系统维护",
                    link: "/software/macos/techtool-pro",
                  },
                  {
                    text: "Spark 3.15.5 邮件收发管理",
                    link: "/software/macos/spark-mac",
                  },
                  {
                    text: "SpamSieve 3.0.4 垃圾邮件过滤",
                    link: "/software/macos/spamsieve",
                  },
                  {
                    text: "Soulver 3.11.3 计算器",
                    link: "/software/macos/soulver",
                  },
                  {
                    text: "PullTube 1.8.5.33 在线视频解析下载",
                    link: "/software/macos/pulltube",
                  },
                  {
                    text: "Poedit 3.4.4 WP插件汉化/Po文件编辑",
                    link: "/software/macos/poedit-mac",
                  },
                  {
                    text: "Multitouch 1.27.31 多点触控手势增强",
                    link: "/software/macos/multitouch",
                  },
                  {
                    text: "MakeMKV 1.17.7 Beta MKV视频格式转换",
                    link: "/software/macos/makemkv-mac",
                  },
                  {
                    text: "iA Writer 7.1.3 MAS +iCloud Markdown写作编辑",
                    link: "/software/macos/ia-writer-mac",
                  },
                  {
                    text: "HBuilderX 4.15.2024050802 代码编辑器",
                    link: "/software/macos/hbuilderx-mac",
                  },
                  {
                    text: "Guitar Pro 8.1.2.37 吉他编曲与音乐创作",
                    link: "/software/macos/guitar-pro-mac",
                  },
                  {
                    text: "Fork 2.43.1 Git客户端",
                    link: "/software/macos/fork-mac",
                  },
                  {
                    text: "Figma EX 124.0.2 UI原型设计",
                    link: "/software/macos/figma-ex-mac",
                  },
                  {
                    text: "djay Pro 5.1.7 MAS 伴奏器乐声与人声实时分离",
                    link: "/software/macos/djay-pro",
                  },
                  {
                    text: "Default Folder X 6.0.7 文件管理器",
                    link: "/software/macos/default-folder-x",
                  },
                  {
                    text: "Cyberduck 8.9.0.41543 FTP/SFTP连接管理",
                    link: "/software/macos/cyberduck-mac",
                  },
                  {
                    text: "Bunny 1.4.7 MAS 预览带字幕的8K影音播放器",
                    link: "/software/macos/bunny",
                  },
                  {
                    text: "Bartender 5.0.52 菜单栏图标隐藏管理",
                    link: "/software/macos/bartender",
                  },
                  {
                    text: "Access Menu 1.3.4 菜单栏快速访问文件与文件夹",
                    link: "/software/macos/access-menu",
                  },
                  {
                    text: "CalHash 1.3.3 哈希值检测校验",
                    link: "/software/macos/calhash",
                  },
                  {
                    text: "迅雷 5.40.2.66331",
                    link: "/software/macos/thunder-mac",
                  },
                  {
                    text: "网易邮箱大师 5.0.9.1362 邮件收发管理",
                    link: "/software/macos/mailmaster-mac",
                  },
                  {
                    text: "人人译视界 3.1.3 视频翻译制作",
                    link: "/software/macos/rrysj-mac",
                  },
                  {
                    text: "4K Video Downloader+ 1.6.0.0085 高清视频下载",
                    link: "/software/macos/4k-video-downloader-plus-mac",
                  },
                  {
                    text: "Sublime Merge 2.0.2096 Git客户端",
                    link: "/software/macos/sublime-merge-mac",
                  },
                  {
                    text: "Wireshark 4.2.5 网络协议分析",
                    link: "/software/macos/wireshark-mac",
                  },
                  {
                    text: "VMware Fusion Pro 13.5.2 虚拟机软件",
                    link: "/software/macos/vmware-fusion-pro",
                  },
                  {
                    text: "VidHub 1.6.2 MAS 高清影片播放器",
                    link: "/software/macos/vidhub",
                  },
                  {
                    text: "Task Office 9.0 待办事项与日历",
                    link: "/software/macos/task-office",
                  },
                  {
                    text: "SketchUp Pro 2024 24.0.554 草图大师3D绘图设计",
                    link: "/software/macos/sketchup-pro-mac",
                  },
                  {
                    text: "Patternodes 3.3.0 创建矢量图形",
                    link: "/software/macos/patternodes",
                  },
                  {
                    text: "Microsoft PowerPonit LTSC 2021 16.85 微软幻灯片演示制作",
                    link: "/software/macos/microsoft-powerponit",
                  },
                  {
                    text: "Microsoft 365 Office BusinessPro LTSC 2024 16.85 微软Office办公套件",
                    link: "/software/macos/microsoft-office-mac",
                  },
                  {
                    text: "Microsoft OneNote LTSC 2021 16.85 微软云笔记记录",
                    link: "/software/macos/microsoft-onenote",
                  },
                  {
                    text: "Microsoft Excel LTSC 2021 16.85 微软表格处理",
                    link: "/software/macos/microsoft-excel",
                  },
                  {
                    text: "MarginNote 4.0.2 电子笔记阅读学习",
                    link: "/software/macos/marginnote",
                  },
                  {
                    text: "Little Snitch 5.7.4 小飞贼防火墙软件",
                    link: "/software/macos/little-snitch",
                  },
                  {
                    text: "KCNcrew Pack 2024.05.15 Mac软件序列号查询",
                    link: "/software/macos/kcncrew-pack",
                  },
                  {
                    text: "Freeplane 1.11.14 思维导图",
                    link: "/software/macos/freeplane-mac",
                  },
                  {
                    text: "FotoMagico 6.6.0 幻灯片制作",
                    link: "/software/macos/fotomagico",
                  },
                  {
                    text: "Eagle 4.0 Beta 19 图像管理查看",
                    link: "/software/macos/eagle-mac",
                  },
                  {
                    text: "Bootstrap Studio 6.6.1 响应式网页设计",
                    link: "/software/macos/bootstrap-studio-mac",
                  },
                  {
                    text: "Axure RP Team 10.0.0.3920 UI/UX原型交互设计",
                    link: "/software/macos/axure-rp-mac",
                  },
                  {
                    text: "Artifact Interactive Garden Planner 3.8.63 园林辅助设计/环境美化",
                    link: "/software/macos/artifact-interactive-garden-planner-mac",
                  },
                  {
                    text: "ON1 Effects 2024.3 18.3.0.15358 照片纹理滤镜处理",
                    link: "/software/macos/on1-effects-mac",
                  },
                  {
                    text: "Adobe Acrobat Reader 2024.002.20759 PDF阅读器",
                    link: "/software/macos/adobe-acrobat-reader-mac",
                  },
                  {
                    text: "Arturia CMI V 1.13.0.4395 Fairlight CMI模拟合成插件",
                    link: "/software/macos/arturia-cmi-v-mac",
                  },
                  {
                    text: "Arturia Clavinet V 1.13.0.4395 电子键盘Clavinet模拟插件",
                    link: "/software/macos/arturia-clavinet-v-mac",
                  },
                  {
                    text: "Arturia Chorus JUN-6 1.4.0.4457 Juno-6模拟合唱效果插件",
                    link: "/software/macos/arturia-chorus-jun-6-mac",
                  },
                  {
                    text: "Arturia Chorus DIMENSION-D 1.4.0.4457 SDD-320 Dimension D合唱效果器模拟插件",
                    link: "/software/macos/arturia-chorus-dimension-d-mac",
                  },
                  {
                    text: "Arturia Bus FORCE 1.3.0.4457 母带混音后期插件",
                    link: "/software/macos/arturia-bus-force-mac",
                  },
                  {
                    text: "Arturia Buchla Easel V 1.13.0.4395 Buchla模拟合成器插件",
                    link: "/software/macos/arturia-buchla-easel-v-mac",
                  },
                  {
                    text: "Arturia B-3 V 2.9.1.4395 电风琴模拟合成插件",
                    link: "/software/macos/arturia-b-3-v-mac",
                  },
                  {
                    text: "Arturia Augmented YANGTZE 1.0.0.4679 传统民乐增强模拟插件",
                    link: "/software/macos/arturia-augmented-yangtze-mac",
                  },
                  {
                    text: "Arturia Augmented WOODWINDS 1.0.0.4395 木管乐器增强模拟插件",
                    link: "/software/macos/arturia-augmented-woodwinds-mac",
                  },
                  {
                    text: "Arturia Augmented VOICES 1.6.0.4395 人声增强模拟插件",
                    link: "/software/macos/arturia-augmented-voices-mac",
                  },
                  {
                    text: "Arturia Augmented STRINGS 1.6.0.4395 弦乐器增强模拟插件",
                    link: "/software/macos/arturia-augmented-strings-mac",
                  },
                  {
                    text: "Arturia Augmented GRAND PIANO 1.6.0.4395 大钢琴增强插件",
                    link: "/software/macos/arturia-augmented-grand-piano-mac",
                  },
                  {
                    text: "Arturia Augmented BRASS 1.1.0.4395 黄铜管乐器演奏插件",
                    link: "/software/macos/arturia-augmented-brass-mac",
                  },
                  {
                    text: "Arturia ARP 2600 V 3.13.0.4395 音频模拟合成器插件",
                    link: "/software/macos/arturia-arp-2600-v-mac",
                  },
                  {
                    text: "Arturia Acid V 1.1.1.4681 经典低音合成器插件",
                    link: "/software/macos/arturia-acid-v-mac",
                  },
                  {
                    text: "Modern CSV 2.0.8 CSV文件编辑查看",
                    link: "/software/macos/modern-csv-mac",
                  },
                  {
                    text: "iZotope Ozone Advanced 11.0.1 臭氧-音频母带处理",
                    link: "/software/macos/izotope-ozone-advanced-mac",
                  },
                  {
                    text: "Easydict 2.7.2 OCR截图翻译词典",
                    link: "/software/macos/easydict",
                  },
                  {
                    text: "Snapclear 2.1.0 AI图片背景删除",
                    link: "/software/macos/snapclear-mac",
                  },
                  {
                    text: "PDF Squeezer 4.5.3 MAS PDF文件压缩",
                    link: "/software/macos/pdf-squeezer",
                  },
                  {
                    text: "PeaZip 9.8.0 解压缩软件",
                    link: "/software/macos/peazip-mac",
                  },
                  {
                    text: "Timing 2024.1.8 时间跟踪管理",
                    link: "/software/macos/timing",
                  },
                  {
                    text: "ToDesk 4.7.2.1 远程桌面控制",
                    link: "/software/macos/todesk-mac",
                  },
                  {
                    text: "MenubarX Pro 1.7.0 菜单栏浏览增强",
                    link: "/software/macos/menubarx-pro",
                  },
                  {
                    text: "Imagenomic Portraiture for PS 4.5.0.4501 图像磨皮滤镜插件",
                    link: "/software/macos/imagenomic-portraiture-for-ps-mac",
                  },
                  {
                    text: "Mp3tag 1.8.22 音频标签编辑器",
                    link: "/software/macos/mp3tag-mac",
                  },
                  {
                    text: "PhpWebStudy 2.4.5 PHP服务器集成开发环境",
                    link: "/software/macos/phpwebstudy",
                  },
                  {
                    text: "Mixxx 2.4.1 DJ混音制作",
                    link: "/software/macos/mixxx-mac",
                  },
                  {
                    text: "Pixelorama 0.11.4 像素动画编辑制作",
                    link: "/software/macos/pixelorama-mac",
                  },
                  {
                    text: "Remote Desktop Manager Enterprise 2024.1.8.6 远程桌面连接管理",
                    link: "/software/macos/remote-desktop-manager-enterprise-mac",
                  },
                  {
                    text: "Notepad-- 2.16.0 文本编辑器",
                    link: "/software/macos/notepad-mac",
                  },
                  {
                    text: "Paste Queue 1.6.2 MAS 剪贴板管理",
                    link: "/software/macos/paste-queue",
                  },
                  {
                    text: "OmniPlan Pro 4.8.1 项目规划管理",
                    link: "/software/macos/omniplan-pro",
                  },
                  {
                    text: "WPS Office 6.7.1.8828 MAS 金山一站式Office办公套件",
                    link: "/software/macos/wps-office-mac",
                  },
                  {
                    text: "QLab Pro 5.3.8 音频剪辑制作",
                    link: "/software/macos/qlab-pro",
                  },
                  {
                    text: "PowerPhotos 2.5.8 照片管理与编辑处理",
                    link: "/software/macos/powerphotos",
                  },
                  {
                    text: "Middle 1.8.6 鼠标与触控板控制增强",
                    link: "/software/macos/middle",
                  },
                  {
                    text: "MarkMyWords 2.10.1 Markdown写作编辑",
                    link: "/software/macos/markmywords",
                  },
                  {
                    text: "超级右键专业版 2.2.7 MAS 右键菜单管理",
                    link: "/software/macos/irightmouse-pro",
                  },
                  {
                    text: "GoodTask 7.7.3 MAS 日历提醒与任务管理",
                    link: "/software/macos/goodtask",
                  },
                  {
                    text: "EndNote 21.3.0.20232 论文文献管理",
                    link: "/software/macos/endnote-mac",
                  },
                  {
                    text: "4K Tokkit Pro 2.7.2.0930 TikTok视频下载",
                    link: "/software/macos/4k-tokkit-pro-mac",
                  },
                  {
                    text: "Things 3.20.6 MAS 日程计划与任务管理",
                    link: "/software/macos/things",
                  },
                  {
                    text: "PastePal 2.15.4 MAS 剪贴板管理",
                    link: "/software/macos/pastepal",
                  },
                  {
                    text: "TouchDesigner Pro 2023.11760 可视化原型渲染设计",
                    link: "/software/macos/touchdesigner-pro-mac",
                  },
                  {
                    text: "Sublime Text 4.0.4175 代码编辑器",
                    link: "/software/macos/sublime-text-mac",
                  },
                  {
                    text: "Steinberg VST Live Pro 2.0.10.118 终极现场演出系统",
                    link: "/software/macos/steinberg-vst-live-pro-mac",
                  },
                  {
                    text: "Sketch 100 矢量绘图设计",
                    link: "/software/macos/sketch",
                  },
                  {
                    text: "SecureFX 9.5.2.3325 FTP传输客户端",
                    link: "/software/macos/securefx-mac",
                  },
                  {
                    text: "RAR Extractor Max 12.3 MAS 解压缩软件",
                    link: "/software/macos/rar-extractor-max",
                  },
                  {
                    text: "SecureCRT 9.5.2.3325 终端模拟器/SSH客户端",
                    link: "/software/macos/securecrt-mac",
                  },
                  {
                    text: "Money Pro 2.10.9 MAS 个人财务管理",
                    link: "/software/macos/money-pro",
                  },
                  {
                    text: "GIMP 2.10.38 图像编辑处理",
                    link: "/software/macos/gimp-mac",
                  },
                  {
                    text: "Disk Xray 4.2 磁盘分析管理",
                    link: "/software/macos/disk-xray",
                  },
                  {
                    text: "Calendar 366 II 2.15.5 菜单栏日历",
                    link: "/software/macos/calendar-366-ii",
                  },
                  {
                    text: "Duplicate File Finder Pro 8.2 MAS 重复文件查找与清理",
                    link: "/software/macos/duplicate-file-finder-pro",
                  },
                  {
                    text: "Kaleidoscope 4.5.1 文件与图像对比",
                    link: "/software/macos/kaleidoscope",
                  },
                  {
                    text: "CodeCounter 1.1 代码计数器",
                    link: "/software/macos/codecounter",
                  },
                  {
                    text: "Disk Space Analyzer Pro 4.2 可视化磁盘清理",
                    link: "/software/macos/disk-space-analyzer-pro",
                  },
                  {
                    text: "EazyDraw 11.6.6 MAS 矢量绘图设计",
                    link: "/software/macos/eazydraw",
                  },
                  {
                    text: "VectorWorks 2024 SP4 3D建模渲染设计",
                    link: "/software/macos/vectorworks-mac",
                  },
                  {
                    text: "KORG WAVESTATION 2.4.2 矢量波形合成器插件",
                    link: "/software/macos/korg-wavestation-mac",
                  },
                  {
                    text: "KORG Wavestate Native 1.3.7 数字波形合成器插件",
                    link: "/software/macos/korg-wavestate-native-mac",
                  },
                  {
                    text: "KORG TRITON Extreme 1.1.1 HI合成器插件",
                    link: "/software/macos/korg-triton-extreme-mac",
                  },
                  {
                    text: "KORG Software Pass 1.2.12 KORG系列插件通用许可证",
                    link: "/software/macos/korg-software-pass-mac",
                  },
                  {
                    text: "KORG Prophecy 1.6.0 音频合成器插件",
                    link: "/software/macos/korg-prophecy-mac",
                  },
                  {
                    text: "KORG Polysix 2.4.2 六音色声道模拟合成器插件",
                    link: "/software/macos/korg-polysix-mac",
                  },
                  {
                    text: "KORG Opsix Native 1.2.1 数字合成器插件",
                    link: "/software/macos/korg-opsix-native-mac",
                  },
                  {
                    text: "KORG MS-20 2.4.2 音频合成器插件",
                    link: "/software/macos/korg-ms-20-mac",
                  },
                  {
                    text: "KORG MonoPoly 2.4.2 多轨合成器插件",
                    link: "/software/macos/korg-monopoly-mac",
                  },
                  {
                    text: "KORG Modwave Native 1.2.7 硬件合成器插件",
                    link: "/software/macos/korg-modwave-native-mac",
                  },
                  {
                    text: "KORG miniKORG 700 1.1.1 单声道合成器插件",
                    link: "/software/macos/korg-minikorg-700-mac",
                  },
                  {
                    text: "KORG microKORG 1.1.0 音频合成器插件",
                    link: "/software/macos/korg-microkorg-mac",
                  },
                  {
                    text: "KORG MDE-X 2.4.1 音频合成器插件",
                    link: "/software/macos/korg-mde-x-mac",
                  },
                  {
                    text: "KORG M1 2.4.1 音频合成器插件",
                    link: "/software/macos/korg-m1-mac",
                  },
                  {
                    text: "KORG LegacyCell 1.8.0 电子双效果模拟插件",
                    link: "/software/macos/korg-legacycell-mac",
                  },
                  {
                    text: "KORG KAOSS PAD 1.1.0 动态触摸效果插件",
                    link: "/software/macos/korg-kaoss-pad-mac",
                  },
                  {
                    text: "KORG ELECTRIBE-R 1.0.2 音频合成效果插件",
                    link: "/software/macos/korg-electribe-r-mac",
                  },
                  {
                    text: "KORG ARP ODYSSEY 1.5.3 ARP Odyssey模拟合成器插件",
                    link: "/software/macos/korg-arp-odyssey-mac",
                  },
                  {
                    text: "MacCleaner 3 Pro 3.3.1 系统综合清理维护工具包",
                    link: "/software/macos/maccleaner-pro",
                  },
                  {
                    text: "Adobe Photoshop Lightroom 7.2 照片管理与编辑处理",
                    link: "/software/macos/adobe-photoshop-lightroom-mac",
                  },
                  {
                    text: "Transfer 2.2.2 FTP文件服务器",
                    link: "/software/macos/transfer",
                  },
                  {
                    text: "GitKraken 9.13.0 Git客户端",
                    link: "/software/macos/gitkraken-mac",
                  },
                  {
                    text: "Colibri 2.2.0 MAS 无损音乐播放器",
                    link: "/software/macos/colibri",
                  },
                  {
                    text: "Wing Pro 10.0.4.0 Python集成开发环境",
                    link: "/software/macos/wing-pro-mac",
                  },
                  {
                    text: "Wondershare Repairit 5.5.7 万兴修复-音频/视频/图片/文件损坏修改",
                    link: "/software/macos/wondershare-repairit-mac",
                  },
                  {
                    text: "VirtualBox 7.0.18 虚拟机软件",
                    link: "/software/macos/virtualbox-mac",
                  },
                  {
                    text: "Tracktion Dawesome Novum 1.17 创意视觉合成器插件",
                    link: "/software/macos/tracktion-dawesome-novum-mac",
                  },
                  {
                    text: "The Foundry MODO 17.0v5 3D建模渲染设计",
                    link: "/software/macos/the-foundry-modo-mac",
                  },
                  {
                    text: "Texifier 1.9.27 LaTeX排版编辑器",
                    link: "/software/macos/texifier",
                  },
                  {
                    text: "SwitchResX 4.13.4 修改屏幕显示分辨率",
                    link: "/software/macos/switchresx",
                  },
                  {
                    text: "n-Track Studio Suite 10.1.0.8659 多轨音频制作",
                    link: "/software/macos/n-track-studio-suite-mac",
                  },
                  {
                    text: "Music Tag Editor Pro 8.1.1 MAS 音频标签编辑器",
                    link: "/software/macos/music-tag-editor-pro",
                  },
                  {
                    text: "GraphPad Prism 10.2.3.347 科研数据绘图分析",
                    link: "/software/macos/graphpad-prism-mac",
                  },
                  {
                    text: "ff·Works 4.1.0 视频处理转换",
                    link: "/software/macos/ffworks",
                  },
                  {
                    text: "Disk Drill Enterprise 5.5.1517 数据恢复软件",
                    link: "/software/macos/disk-drill-enterprise-mac",
                  },
                  {
                    text: "爱思助手 3.03.015 iOS设备管理器",
                    link: "/software/macos/i4tools-mac",
                  },
                  {
                    text: "4K YouTube to MP3 5.3.0.0085 YouTube视频转MP3音频",
                    link: "/software/macos/4k-youtube-to-mp3-mac",
                  },
                  {
                    text: "Less Player 0.1.22 音乐播放器",
                    link: "/software/macos/less-player-mac",
                  },
                  {
                    text: "Initiater Pro 1.1.2 MAS OCR截图翻译",
                    link: "/software/macos/initiater-pro",
                  },
                  {
                    text: "Goldie 2.2.1 MAS 黄金比例设计",
                    link: "/software/macos/goldie",
                  },
                  {
                    text: "CudaText 1.214.0.0 代码编辑器",
                    link: "/software/macos/cudatext-mac",
                  },
                  {
                    text: "Tracktion Dawesome Myth 1.10 音频编辑处理插件",
                    link: "/software/macos/tracktion-dawesome-myth-mac",
                  },
                  {
                    text: "UPDF 1.7.18 PDF编辑器",
                    link: "/software/macos/updf",
                  },
                  {
                    text: "Sensei 1.5.10 硬件检测与系统优化清理",
                    link: "/software/macos/sensei",
                  },
                  {
                    text: "Hazel 5.3.4 自动化清理软件",
                    link: "/software/macos/hazel",
                  },
                  {
                    text: "Maccy 0.31.0 剪贴板管理",
                    link: "/software/macos/maccy",
                  },
                  {
                    text: "DeepL 24.4.2912025 智能AI翻译",
                    link: "/software/macos/deepl-mac",
                  },
                  {
                    text: "AutoCAD 2025.0.1 CAD绘图设计",
                    link: "/software/macos/autocad-mac",
                  },
                  {
                    text: "Aerial 3.3.8 高清鸟瞰图屏保",
                    link: "/software/macos/aerial",
                  },
                  {
                    text: "Overloud TH-U Premium 1.4.20 吉他与贝斯音色模拟",
                    link: "/software/macos/overloud-th-u-premium-mac",
                  },
                  {
                    text: "Overloud REmatrix 1.2.12 音频混响效果插件",
                    link: "/software/macos/overloud-rematrix-mac",
                  },
                  {
                    text: "Overloud Mark Studio 2.0.19 数字音频模拟插件",
                    link: "/software/macos/overloud-mark-studio-mac",
                  },
                  {
                    text: "Overloud Gem Voice 1.0.6 人声后期处理插件",
                    link: "/software/macos/overloud-gem-voice-mac",
                  },
                  {
                    text: "Overloud Gem TAPEDESK 1.2.5 暖色调混音模拟插件",
                    link: "/software/macos/overloud-gem-tapedesk-mac",
                  },
                  {
                    text: "Overloud Gem Sculptube 1.0.5 声音模拟真空放大插件",
                    link: "/software/macos/overloud-gem-sculptube-mac",
                  },
                  {
                    text: "Overloud Gem OTD-2 1.0.5 模拟音频延迟效果插件",
                    link: "/software/macos/overloud-gem-otd-2-mac",
                  },
                  {
                    text: "Overloud Gem Modula 1.0.3 三合一人声模拟插件",
                    link: "/software/macos/overloud-gem-modula-mac",
                  },
                  {
                    text: "Overloud Gem Mod 1.0.3 复古人声模拟插件",
                    link: "/software/macos/overloud-gem-mod-mac",
                  },
                  {
                    text: "Overloud Gem EQP 1.0.3 硬件均衡器模拟插件",
                    link: "/software/macos/overloud-gem-eqp-mac",
                  },
                  {
                    text: "Overloud Gem EQ550 1.1.6 硬件均衡器模拟插件",
                    link: "/software/macos/overloud-gem-eq550-mac",
                  },
                  {
                    text: "Overloud Gem EQ495 1.2.5 混音母带处理插件",
                    link: "/software/macos/overloud-gem-eq495-mac",
                  },
                  {
                    text: "Overloud Gem EQ84 1.3.5 英式录音台EQ模拟插件",
                    link: "/software/macos/overloud-gem-eq84-mac",
                  },
                  {
                    text: "Overloud Gem ECHOSON 1.0.7 传奇磁鼓延迟插件",
                    link: "/software/macos/overloud-gem-echoson-mac",
                  },
                  {
                    text: "Overloud Gem Dopamine 1.1.9 磁带模拟增强插件",
                    link: "/software/macos/overloud-gem-dopamine-mac",
                  },
                  {
                    text: "Overloud Gem Comp76 2.0.10 晶体管压缩机限幅器插件",
                    link: "/software/macos/overloud-gem-comp76-mac",
                  },
                  {
                    text: "Overloud Gem Comp670 1.1.7 电子管压缩机限幅器插件",
                    link: "/software/macos/overloud-gem-comp670-mac",
                  },
                  {
                    text: "Overloud Gem Comp LA 1.0.7 光电模拟压缩器插件",
                    link: "/software/macos/overloud-gem-comp-la-mac",
                  },
                  {
                    text: "Overloud Gem Comp G 1.0.7 VCA总线压缩器插件",
                    link: "/software/macos/overloud-gem-comp-g-mac",
                  },
                  {
                    text: "BiglyBT 3.6.0 BT种子下载器",
                    link: "/software/macos/biglybt-mac",
                  },
                  {
                    text: "TablePlus 6.0.0 多连接数据库管理开发",
                    link: "/software/macos/tableplus-mac",
                  },
                  {
                    text: "ChemDraw Professional 2023 23.0.1.10 化学结构绘图",
                    link: "/software/macos/chemdraw-professional-mac",
                  },
                  {
                    text: "Timer RH Pro 2.14.2 MAS 计时器",
                    link: "/software/macos/timer-rh-pro",
                  },
                  {
                    text: "Luminar Neo 1.19.1.17483 AI图像编辑处理",
                    link: "/software/macos/luminar-neo-mac",
                  },
                  {
                    text: "Free Download Manager 6.22.0.5714 直链BT续传下载器",
                    link: "/software/macos/free-download-manager-mac",
                  },
                  {
                    text: "Snipaste 2.9.0 Beta 截图贴图标注",
                    link: "/software/macos/snipaste-mac",
                  },
                  {
                    text: "RESP 2022.5.1 Redis可视化管理",
                    link: "/software/macos/resp-mac",
                  },
                  {
                    text: "Principle 6.35 交互UI原型设计",
                    link: "/software/macos/principle",
                  },
                  {
                    text: "Longshot 1.1.6 MAS 截图贴图标注",
                    link: "/software/macos/longshot",
                  },
                  {
                    text: "Logicly 2.0.0 Beta 4 电路逻辑绘图",
                    link: "/software/macos/logicly-mac",
                  },
                  {
                    text: "Background Music 0.4.3 单独调节应用音量",
                    link: "/software/macos/background-music",
                  },
                  {
                    text: "Tracktion Outersect Modeler 1.1.5 乐器建模合成器插件",
                    link: "/software/macos/tracktion-outersect-modeler-mac",
                  },
                  {
                    text: "Tracktion F-em 1.2.2 混合四音色合成器插件",
                    link: "/software/macos/tracktion-f-em-mac",
                  },
                  {
                    text: "Tracktion Dawesome Love 1.08 微光氛围效果器插件",
                    link: "/software/macos/tracktion-dawesome-love-mac",
                  },
                  {
                    text: "Tracktion Dawesome KULT 1.17 音频振荡合成器插件",
                    link: "/software/macos/tracktion-dawesome-kult-mac",
                  },
                  {
                    text: "Tracktion Dawesome Abyss 1.3.2 视觉化音色合成器插件",
                    link: "/software/macos/tracktion-dawesome-abyss-mac",
                  },
                  {
                    text: "Tracktion Collective 1.2.5 +Factory Content 音频采样合成器插件",
                    link: "/software/macos/tracktion-collective-mac",
                  },
                  {
                    text: "Tracktion BioTek 2.3.3 +Factory Content 音色合成器插件",
                    link: "/software/macos/tracktion-biotek-mac",
                  },
                  {
                    text: "Boris FX CrumplePop Complete 2023.6 终极音频处理插件套装",
                    link: "/software/macos/boris-fx-crumplepop-complete-mac",
                  },
                  {
                    text: "Marvelous Designer Personal 2024.0.149.48716 3D服装设计",
                    link: "/software/macos/marvelous-designer-mac",
                  },
                  {
                    text: "Audacity 3.5.1 音频编辑制作",
                    link: "/software/macos/audacity-mac",
                  },
                  {
                    text: "AnyDesk 8.0.1 远程桌面控制",
                    link: "/software/macos/anydesk-mac",
                  },
                  {
                    text: "A Better Finder Rename 12.05 文件批量重命名",
                    link: "/software/macos/a-better-finder-rename",
                  },
                  {
                    text: "PopChar 10.1 fix 特殊字符管理",
                    link: "/software/macos/popchar-mac",
                  },
                  {
                    text: "Logseq 0.10.9 知识笔记管理",
                    link: "/software/macos/logseq-mac",
                  },
                  {
                    text: "iStat Menus 6.73.1239 系统状态监控",
                    link: "/software/macos/istat-menus",
                  },
                  {
                    text: "IDA Free 8.4.0 反汇编逆向神器",
                    link: "/software/macos/ida-pro-mac",
                  },
                  {
                    text: "Boris FX SynthEyes Pro 2024 24.01.1058 3D视觉效果跟踪",
                    link: "/software/macos/boris-fx-syntheyes-pro-mac",
                  },
                  {
                    text: "Boris FX Mocha Pro for OFX 2024 11.0.1.13 平面跟踪摄像机反求插件",
                    link: "/software/macos/boris-fx-mocha-pro-for-ofx-mac",
                  },
                  {
                    text: "Boris FX Optics 2024.0.1.63 图像特效滤镜处理",
                    link: "/software/macos/boris-fx-optics-mac",
                  },
                  {
                    text: "Boris FX Mocha Pro for Adobe 2024 11.0.1.13 平面跟踪摄像机反求插件",
                    link: "/software/macos/boris-fx-mocha-pro-for-adobe-mac",
                  },
                  {
                    text: "Boris FX Mocha Pro 2024 11.0.1.13 平面跟踪摄像机反求",
                    link: "/software/macos/boris-fx-mocha-pro-mac",
                  },
                  {
                    text: "Boris FX Continuum Complete for Avid 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/macos/boris-fx-continuum-complete-for-avid-mac",
                  },
                  {
                    text: "Boris FX Continuum Complete for FCPX 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/macos/boris-fx-continuum-complete-for-fcpx",
                  },
                  {
                    text: "Boris FX Continuum Complete for OFX 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/macos/boris-fx-continuum-complete-for-ofx-mac",
                  },
                  {
                    text: "Boris FX Continuum Complete for Adobe 2024 17.0.5.650 视觉特效插件套装",
                    link: "/software/macos/boris-fx-continuum-complete-for-adobe-mac",
                  },
                  {
                    text: "QuarkXPress 2024 20.1.0.57226 版面编辑设计",
                    link: "/software/macos/quarkxpress-mac",
                  },
                  {
                    text: "Dehancer Pro AE/PR 7.1.1 Beta 胶片模拟调色插件",
                    link: "/software/macos/dehancer-pro-ae-pr-mac",
                  },
                  {
                    text: "SmartSVN 14.4.1 SVN客户端",
                    link: "/software/macos/smartsvn-mac",
                  },
                  {
                    text: "SmartGit 23.1.3 Git客户端",
                    link: "/software/macos/smartgit-mac",
                  },
                  {
                    text: "WindTerm 2.6.1 终端模拟器/SSH/SFTP客户端",
                    link: "/software/macos/windterm-mac",
                  },
                  {
                    text: "Latest 0.10.3 软件在线更新",
                    link: "/software/macos/latest",
                  },
                  {
                    text: "JetBrains DataSpell 2024.1.1 数据科学家开发环境",
                    link: "/software/macos/jetbrains-dataspell-mac",
                  },
                  {
                    text: "BBEdit 15.0.3 代码编辑器",
                    link: "/software/macos/bbedit",
                  },
                  {
                    text: "Resolume Arena 7.16.0 rev 25503 VJ创作表演",
                    link: "/software/macos/resolume-arena-mac",
                  },
                  {
                    text: "PicGo 2.4.0 Beta 7 图床上传",
                    link: "/software/macos/picgo-mac",
                  },
                  {
                    text: "花見Live Wallpaper & Themes 4K Pro 20.0 MAS 超高清4K动态壁纸",
                    link: "/software/macos/live-wallpaper-themes-4k-pro",
                  },
                  {
                    text: "Moneydance 2024.1.5118 个人财务管理",
                    link: "/software/macos/moneydance-mac",
                  },
                  {
                    text: "SimpleMind Pro 2.3.5 MAS 思维导图",
                    link: "/software/macos/simplemind-pro-mac",
                  },
                  {
                    text: "4K Image Compressor Pro 1.4.0.0220 图片批量压缩",
                    link: "/software/macos/4k-image-compressor-pro-mac",
                  },
                  {
                    text: "Audirvana Origin 2.5.12 高音质音乐播放器",
                    link: "/software/macos/audirvana-origin",
                  },
                  {
                    text: "Togu Audio Line TAL-Pha 1.2.0 模拟Alpha Juno II合成器插件",
                    link: "/software/macos/togu-audio-line-tal-pha-mac",
                  },
                  {
                    text: "Lyn 2.3.8 图像管理查看",
                    link: "/software/macos/lyn",
                  },
                  {
                    text: "iZotope Trash 1.2.0 音频失真效果插件",
                    link: "/software/macos/izotope-trash-mac",
                  },
                  {
                    text: "HazeOver 1.9.4 虚化背景窗口",
                    link: "/software/macos/hazeover",
                  },
                  {
                    text: "DxO Nik Collection 6.10.0 PS滤镜插件套装",
                    link: "/software/macos/dxo-nik-collection-mac",
                  },
                  {
                    text: "D16 Group Nepheton 2.0.2 808鼓机模拟器插件",
                    link: "/software/macos/d16-group-nepheton-mac",
                  },
                  {
                    text: "D16 Group Drumazon 2.0.5 909鼓机模拟器插件",
                    link: "/software/macos/d16-group-drumazon-mac",
                  },
                  {
                    text: "AnyTrans for iOS 8.9.6.20240417 iPhone数据传输管理",
                    link: "/software/macos/anytrans-for-ios-mac",
                  },
                  {
                    text: "GraphicConverter 12.1.1.6485 图像管理查看",
                    link: "/software/macos/graphicconverter",
                  },
                  {
                    text: "Blossom 1.16.0 Markdown云端写作编辑",
                    link: "/software/macos/blossom-mac",
                  },
                  {
                    text: "Adobe Bridge 2024 14.0.4.222 文件管理浏览",
                    link: "/software/macos/adobe-bridge-mac",
                  },
                  {
                    text: "1Blocker 4.4.1 MAS 广告过滤拦截插件",
                    link: "/software/macos/1blocker",
                  },
                  {
                    text: "Steinberg WaveLab Pro 12.0.20 音频母带处理",
                    link: "/software/macos/steinberg-wavelab-pro-mac",
                  },
                  {
                    text: "D16 Group Toraverb 2.2.2 高品质混响效果插件",
                    link: "/software/macos/d16-group-toraverb-mac",
                  },
                  {
                    text: "D16 Group Tekturon 1.2.2 多级分隔延迟效果插件",
                    link: "/software/macos/d16-group-tekturon-mac",
                  },
                  {
                    text: "D16 Group Syntorus 2.2.2 BBD模拟合唱效果插件",
                    link: "/software/macos/d16-group-syntorus-mac",
                  },
                  {
                    text: "D16 Group Spacerek 1.2.3 虚拟空间混响插件",
                    link: "/software/macos/d16-group-spacerek-mac",
                  },
                  {
                    text: "D16 Group Sigmund 2.0.0 多频延时效果插件",
                    link: "/software/macos/d16-group-sigmund-mac",
                  },
                  {
                    text: "D16 Group Repeater 1.2.2 延时/回声效果插件",
                    link: "/software/macos/d16-group-repeater-mac",
                  },
                  {
                    text: "D16 Group Redoptor 2.2.2 电子管失真模拟器插件",
                    link: "/software/macos/d16-group-redoptor-mac",
                  },
                  {
                    text: "D16 Group PunchBox 1.0.8 低音鼓合成器插件",
                    link: "/software/macos/d16-group-punchbox-mac",
                  },
                  {
                    text: "D16 Group Phoscyon 2.1.0 303低音合成器插件",
                    link: "/software/macos/d16-group-phoscyon-mac",
                  },
                  {
                    text: "D16 Group Lush 2.0.1 音色合成器插件",
                    link: "/software/macos/d16-group-lush-mac",
                  },
                  {
                    text: "D16 Group Godfazer 1.2.3 调制效果器插件",
                    link: "/software/macos/d16-group-godfazer-mac",
                  },
                  {
                    text: "D16 Group Frontier 1.2.2 透明压缩器插件",
                    link: "/software/macos/d16-group-frontier-mac",
                  },
                  {
                    text: "D16 Group Fazortan 2.2.2 相位器模拟插件",
                    link: "/software/macos/d16-group-fazortan-mac",
                  },
                  {
                    text: "D16 Group Decimort 2.3.2 经典老式采样器插件",
                    link: "/software/macos/d16-group-devastor-mac",
                  },
                  {
                    text: "D16 Group Decimort 2.3.2 经典老式采样器插件",
                    link: "/software/macos/d16-group-decimort-mac",
                  },
                  {
                    text: "D16 Group Antresol 1.3.2 模拟混响效果器插件",
                    link: "/software/macos/d16-group-antresol-mac",
                  },
                  {
                    text: "FileZilla 3.67.0 FTP传输客户端",
                    link: "/software/macos/filezilla-mac",
                  },
                  {
                    text: "NetWorker Pro 9.0.2 MAS 网络流量监控",
                    link: "/software/macos/networker-pro",
                  },
                  {
                    text: "Togu Audio Line TAL-Sampler 4.5.4 模拟建模合成器插件",
                    link: "/software/macos/togu-audio-line-tal-sampler-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-Mod 1.9.6 虚拟模拟合成器插件",
                    link: "/software/macos/togu-audio-line-tal-mod-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-Dub-X 2.1.0 音频延迟效果插件",
                    link: "/software/macos/togu-audio-line-tal-dub-x-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-Dac 2.0.3 模拟老式数模转换器插件",
                    link: "/software/macos/togu-audio-line-tal-dac-mac",
                  },
                  {
                    text: "Togu Audio Line TAL-BassLine-101 3.9.0 单声道低音合成器插件",
                    link: "/software/macos/togu-audio-line-tal-bassline-101-mac",
                  },
                  {
                    text: "IK Multimedia TONEX MAX 1.0.4 逼真音色建模",
                    link: "/software/macos/ik-multimedia-tonex-max-mac",
                  },
                  {
                    text: "IK Multimedia T-RackS 5.10.4 混音母带处理",
                    link: "/software/macos/ik-multimedia-t-racks-mac",
                  },
                  {
                    text: "IK Multimedia Syntronik 2.1.1 Syntronik虚拟合成器",
                    link: "/software/macos/ik-multimedia-syntronik-mac",
                  },
                  {
                    text: "IK Multimedia SampleTank 4.2.3 音频采样器",
                    link: "/software/macos/ik-multimedia-sampletank-mac",
                  },
                  {
                    text: "IK Multimedia MODO DRUM 1.1.3 虚拟鼓乐器",
                    link: "/software/macos/ik-multimedia-modo-drum-mac",
                  },
                  {
                    text: "IK Multimedia MODO BASS 2.0.2 贝斯建模合成器",
                    link: "/software/macos/ik-multimedia-modo-bass-mac",
                  },
                  {
                    text: "IK Multimedia MixBox 1.5.0 音频混音效果器",
                    link: "/software/macos/ik-multimedia-mixbox-mac",
                  },
                  {
                    text: "IK Multimedia Lurssen Mastering Console 1.1.1 音频母带处理",
                    link: "/software/macos/ik-multimedia-lurssen-mastering-console-mac",
                  },
                  {
                    text: "IK Multimedia Hammond B-3X 1.3.4 虚拟B3风琴",
                    link: "/software/macos/ik-multimedia-hammond-b-3x-mac",
                  },
                  {
                    text: "IK Multimedia ARC System 4.0.0 音频声场校准",
                    link: "/software/macos/ik-multimedia-arc-system-mac",
                  },
                  {
                    text: "IK Multimedia AmpliTube MAX 5.4.1 虚拟吉他与贝斯效果器",
                    link: "/software/macos/ik-multimedia-amplitube-mac",
                  },
                  {
                    text: "Wondershare EdrawMax 13.0.5.1122 亿图图示设计",
                    link: "/software/macos/wondershare-edrawmax-mac",
                  },
                  {
                    text: "SpeakMe 3.0 文字转语音",
                    link: "/software/macos/speakme",
                  },
                  {
                    text: "Sound Siphon 3.6.8 音频捕捉录制",
                    link: "/software/macos/sound-siphon",
                  },
                  {
                    text: "Pot 2.7.10 划词翻译/截图翻译与截图OCR",
                    link: "/software/macos/pot-mac",
                  },
                  {
                    text: "BlueStacks 4.270.1.2803 蓝叠安卓模拟器",
                    link: "/software/macos/bluestacks-mac",
                  },
                  {
                    text: "CleanClip 2.1.3 剪贴板管理",
                    link: "/software/macos/cleanclip",
                  },
                  {
                    text: "Xliff Editor 2.10 Xliff文件编辑器",
                    link: "/software/macos/xliff-editor",
                  },
                  {
                    text: "Whisky 2.3.2 类虚拟机运行Windows软件",
                    link: "/software/macos/whisky",
                  },
                  {
                    text: "System Toolkit 6.1.2 MAS 系统优化维护",
                    link: "/software/macos/system-toolkit",
                  },
                  {
                    text: "Persecond 1.7.1 视频延时制作",
                    link: "/software/macos/persecond",
                  },
                  {
                    text: "Cadintosh X 8.8.6.736 2D CAD绘图设计",
                    link: "/software/macos/cadintosh-x",
                  },
                  {
                    text: "Red Giant VFX Suite 2024.2.0 红巨星视频特效插件套装",
                    link: "/software/macos/red-giant-vfx-suite-mac",
                  },
                  {
                    text: "Red Giant Trapcode Suite 2024.2.0 红巨星粒子特效插件套装",
                    link: "/software/macos/red-giant-trapcode-suite-mac",
                  },
                  {
                    text: "Red Giant Magic Bullet Suite 2024.2.0 红巨星调色降噪插件套装",
                    link: "/software/macos/red-giant-magic-bullet-suite-mac",
                  },
                  {
                    text: "PureBasic LTS 6.10 BASIC语言编辑器",
                    link: "/software/macos/purebasic-mac",
                  },
                  {
                    text: "Photomator 3.3.5 MAS +iCloud 图像编辑处理",
                    link: "/software/macos/photomator",
                  },
                  {
                    text: "ON1 NoNoise AI 2024.3 18.3.0.15302 摄影照片智能降噪",
                    link: "/software/macos/on1-nonoise-ai-mac",
                  },
                  {
                    text: "OcenAudio 3.13.8 音频编辑制作",
                    link: "/software/macos/ocenaudio-mac",
                  },
                  {
                    text: "Geekbench Pro 6.3.0 硬件性能基准测试",
                    link: "/software/macos/geekbench-pro-mac",
                  },
                  {
                    text: "Farrago 2.0.7 音乐伴奏编辑",
                    link: "/software/macos/farrago",
                  },
                  {
                    text: "Doppler 2.1.21 音乐播放器",
                    link: "/software/macos/doppler",
                  },
                  {
                    text: "AlDente Pro 1.26.1 电池健康充电保护管理",
                    link: "/software/macos/aldente-pro",
                  },
                  {
                    text: "UctoX 2.9.14 发票财务管理",
                    link: "/software/macos/uctox",
                  },
                  {
                    text: "Tipard Video Converter Ultimate 10.2.60 视频格式转换",
                    link: "/software/macos/tipard-video-converter-ultimate-mac",
                  },
                  {
                    text: "ON1 Photo RAW MAX 2024.3 18.3.0.15302 摄影RAW图像处理",
                    link: "/software/macos/on1-photo-raw-mac",
                  },
                  {
                    text: "Caprine 2.60.1 第三方Facebook",
                    link: "/software/macos/caprine-mac",
                  },
                  {
                    text: "ArchiCAD 27.2.0 Build 5003 BIM建筑信息3D建模",
                    link: "/software/macos/archicad-mac",
                  },
                  {
                    text: "Keka 1.3.8 解压缩软件",
                    link: "/software/macos/keka",
                  },
                  {
                    text: "MediaMate 3.3.0 屏幕亮度与音量调节",
                    link: "/software/macos/mediamate",
                  },
                  {
                    text: "QtScrcpy 2.2.1 Android实时投屏控制",
                    link: "/software/macos/qtscrcpy-mac",
                  },
                  {
                    text: "JPEGmini Pro 4.1.0 JPG图片无损压缩",
                    link: "/software/macos/jpegmini-pro-mac",
                  },
                  {
                    text: "Adobe Animate 2024 24.0.2.12 动画渲染制作",
                    link: "/software/macos/adobe-animate-mac",
                  },
                  {
                    text: "Imaginando VS 1.4.0 视觉合成器插件",
                    link: "/software/macos/imaginando-vs-mac",
                  },
                  {
                    text: "Imaginando K7D 1.3.0 老式磁带延迟插件",
                    link: "/software/macos/imaginando-k7d-mac",
                  },
                  {
                    text: "Imaginando FRMS 1.9.0 颗粒合成器插件",
                    link: "/software/macos/imaginando-frms-mac",
                  },
                  {
                    text: "Imaginando DRC 2.9.3 虚拟模拟合成器插件",
                    link: "/software/macos/imaginando-drc-mac",
                  },
                  {
                    text: "Imaginando DLYM 2.0.5 音频延迟调制器插件",
                    link: "/software/macos/imaginando-dlym",
                  },
                  {
                    text: "Steinberg Retrologue 2.3.0 减法合成器插件",
                    link: "/software/macos/steinberg-retrologue-mac",
                  },
                  {
                    text: "Steinberg PadShop 2.2.0 虚拟合成器插件",
                    link: "/software/macos/steinberg-padshop-mac",
                  },
                  {
                    text: "Steinberg Backbone 1.6.0 虚拟鼓合成器插件",
                    link: "/software/macos/steinberg-backbone-mac",
                  },
                  {
                    text: "Native Instruments Supercharger GT 1.4.5 仿真电子管压缩器插件",
                    link: "/software/macos/native-instruments-supercharger-gt-mac",
                  },
                  {
                    text: "Native Instruments Reaktor 6.5.0 rev2 音乐合成效果器",
                    link: "/software/macos/native-instruments-reaktor-mac",
                  },
                  {
                    text: "Native Instruments FM8 1.4.6 FM8音频合成器",
                    link: "/software/macos/native-instruments-fm8-mac",
                  },
                  {
                    text: "Native Instruments Battery 4.3.0 虚拟鼓机采样",
                    link: "/software/macos/native-instruments-battery-mac",
                  },
                  {
                    text: "Acon Digital Acoustica Premium 7.5.5 数字音频编辑制作",
                    link: "/software/macos/acon-digital-acoustica-premium-mac",
                  },
                  {
                    text: "Adobe Speech to Text PR 2024 2.1.4 PR语音转文字插件",
                    link: "/software/macos/adobe-speech-to-text-mac",
                  },
                  {
                    text: "Lasso 1.7.1 软件窗口管理",
                    link: "/software/macos/lasso",
                  },
                  {
                    text: "Yoink 3.6.90 文件临时拖放暂存",
                    link: "/software/macos/yoink",
                  },
                  {
                    text: "Toontrack EZkeys 2.0.5 +Core Library 音乐合成制作",
                    link: "/software/macos/toontrack-ezkeys-mac",
                  },
                  {
                    text: "SQLPro Studio 2024.21 数据库管理开发",
                    link: "/software/macos/sqlpro-studio",
                  },
                  {
                    text: "SourceTree 4.2.7 Git客户端",
                    link: "/software/macos/sourcetree-mac",
                  },
                  {
                    text: "Native Instruments Guitar Rig 7 Pro 7.0.2 电吉他贝斯效果器",
                    link: "/software/macos/native-instruments-guitar-rig-pro-mac",
                  },
                  {
                    text: "MathWorks MATLAB R2024a 24.1.0.2537033 算法开发/数据分析/模型创建",
                    link: "/software/macos/mathworks-matlab-mac",
                  },
                  {
                    text: "LocalizationEditor 2.9.2 本地翻译编辑器",
                    link: "/software/macos/localizationeditor",
                  },
                  {
                    text: "He3 2.0.20 终极开发者工具箱",
                    link: "/software/macos/he3-mac",
                  },
                  {
                    text: "Adobe Premiere Pro 2024 24.3.0.059 视频编辑处理",
                    link: "/software/macos/adobe-premiere-pro-mac",
                  },
                  {
                    text: "Adobe Photoshop Lightroom Classic 13.2.0.8 照片后期处理",
                    link: "/software/macos/adobe-photoshop-lightroom-classic-mac",
                  },
                  {
                    text: "Adobe Media Encoder 2024 24.3.0.49 音视频编码渲染",
                    link: "/software/macos/adobe-media-encoder-mac",
                  },
                  {
                    text: "Adobe InDesign 2024 19.3.0.58 版面设计与排版编辑",
                    link: "/software/macos/adobe-indesign-mac",
                  },
                  {
                    text: "Adobe InCopy 2024 19.3.0.58 创意写作编辑",
                    link: "/software/macos/adobe-incopy-mac",
                  },
                  {
                    text: "Adobe Illustrator 2024 28.4.1.86 矢量绘图设计",
                    link: "/software/macos/adobe-illustrator-mac",
                  },
                  {
                    text: "Adobe Character Animator 2024 24.2.0.80 表情捕捉实时生成动画",
                    link: "/software/macos/adobe-character-animator-mac",
                  },
                  {
                    text: "Adobe Audition 2024 24.2.0.83 数字音频编辑",
                    link: "/software/macos/adobe-audition-mac",
                  },
                  {
                    text: "Adobe After Effects 2024 24.3.0.50 视频后期优化处理",
                    link: "/software/macos/adobe-after-effects-mac",
                  },
                  {
                    text: "Adobe Acrobat Pro 2024.001.20604 PDF编辑器",
                    link: "/software/macos/adobe-acrobat-pro-mac",
                  },
                  {
                    text: "Adobe 2024 Patcher 2.41/0.89 Adobe Mac 2024通用补丁",
                    link: "/software/macos/adobe-patcher",
                  },
                  {
                    text: "向日葵远程控制 15.2.0.62925",
                    link: "/software/macos/sunlogin-mac",
                  },
                  {
                    text: "归家出行助手 1.3.0 12306分流抢票助手",
                    link: "/software/macos/home-coming",
                  },
                  {
                    text: "解压缩专家Oka Unarchiver Pro 2.1.9 MAS 解压缩软件",
                    link: "/software/macos/oka-unarchiver-pro",
                  },
                  {
                    text: "Amadine 1.6 矢量图形设计",
                    link: "/software/macos/amadine",
                  },
                  {
                    text: "Alley 0.1.6 小路速传-局域网文件共享",
                    link: "/software/macos/alley-mac",
                  },
                  {
                    text: "wallhaven 4.4.6 高清动静态壁纸",
                    link: "/software/macos/wallhaven-mac",
                  },
                  {
                    text: "Native Instruments Replika 1.6.1 音频延迟效果器插件",
                    link: "/software/macos/native-instruments-replika-mac",
                  },
                  {
                    text: "Imagenomic Noiseware for PS 6.0.4.6041 图像降噪插件",
                    link: "/software/macos/imagenomic-noiseware-for-ps-mac",
                  },
                  {
                    text: "Airfoil 5.12.1 高品质音乐播放器",
                    link: "/software/macos/airfoil",
                  },
                  {
                    text: "ProPresenter 7.16.2 文稿分屏演示",
                    link: "/software/macos/propresenter-mac",
                  },
                  {
                    text: "OmniPlayer Pro 2.1.4 MAS 全能视频播放器",
                    link: "/software/macos/omniplayer-pro",
                  },
                  {
                    text: "Listen 1 2.32.0 全网付费音乐免费听",
                    link: "/software/macos/listen1-mac",
                  },
                  {
                    text: "Buttercup 2.27.0 密码管理器",
                    link: "/software/macos/buttercup-mac",
                  },
                  {
                    text: "zFuse Pro 1.7.40 MAS 万能视频播放器",
                    link: "/software/macos/zfuse-pro",
                  },
                  {
                    text: "Nuro Audio Xrider 1.0.1 智能响度效果器插件",
                    link: "/software/macos/nuro-audio-xrider-mac",
                  },
                  {
                    text: "iZotope VEA 1.0.2 音频AI增强器插件",
                    link: "/software/macos/izotope-vea-mac",
                  },
                  {
                    text: "iZotope Vinyl 1.12.1 唱片模拟效果插件",
                    link: "/software/macos/izotope-vinyl-mac",
                  },
                  {
                    text: "VMware InstallBuilder Enterprise 24.3.0 安装包制作",
                    link: "/software/macos/vmware-installbuilder-enterprise-mac",
                  },
                  {
                    text: "FocuSee 1.0.8 自动放大视频的屏幕录制",
                    link: "/software/macos/focusee",
                  },
                  {
                    text: "IconChamp 1.3.7 软件图标替换",
                    link: "/software/macos/iconchamp",
                  },
                  {
                    text: "LinearMouse 0.10.0 Beta 3 鼠标与触控板控制增强",
                    link: "/software/macos/linearmouse",
                  },
                  {
                    text: "coconutBattery Plus 3.9.17 监测电池健康状况",
                    link: "/software/macos/coconutbattery-plus",
                  },
                  {
                    text: "Avid Sibelius Ultimate 2024.3.1 无限试用版 乐谱简谱制作",
                    link: "/software/macos/avid-sibelius-ultimate-mac",
                  },
                  {
                    text: "X-Disk 1.0.6 MAS U盘/外接磁盘管理",
                    link: "/software/macos/x-disk",
                  },
                  {
                    text: "WiFiSpoof 3.9.5 网络MAC地址修改",
                    link: "/software/macos/wifispoof",
                  },
                  {
                    text: "qBittorrent Enhanced Edition 4.6.4.10 BT种子下载器",
                    link: "/software/macos/qbittorrent-enhanced-edition-mac",
                  },
                  {
                    text: "Pacifist 4.1.0 PKG文件提取查看",
                    link: "/software/macos/pacifist",
                  },
                  {
                    text: "Hit Mix RipX DAW PRO 7.1.0 音频编辑处理",
                    link: "/software/macos/hitnmix-ripx-daw-pro-mac",
                  },
                  {
                    text: "Elmedia Player Pro 8.18 MAS 视频播放器",
                    link: "/software/macos/elmedia-player-pro",
                  },
                  {
                    text: "Elmedia Video Player Pro 8.18 MAS 视频播放器",
                    link: "/software/macos/elmedia-video-player-pro",
                  },
                  {
                    text: "Cycling 74 Max 8.6.2 音乐可视化编程",
                    link: "/software/macos/cycling-74-max-mac",
                  },
                  {
                    text: "DEVONthink Pro 3.9.6 文件管理器",
                    link: "/software/macos/devonthink-pro",
                  },
                  {
                    text: "Mudbox 2025 3D数字绘画雕刻设计",
                    link: "/software/macos/mudbox-mac",
                  },
                  {
                    text: "Maya 2025 3D动画建模设计",
                    link: "/software/macos/maya-mac",
                  },
                  {
                    text: "USBclean 3.9 USB垃圾清理",
                    link: "/software/macos/usbclean",
                  },
                  {
                    text: "eMail Address Extractor 4.7 获取邮箱地址",
                    link: "/software/macos/email-address-extractor",
                  },
                  {
                    text: "Invisible 2.9.0 文件隐藏工具",
                    link: "/software/macos/invisible",
                  },
                  {
                    text: "Hides 5.9.3 隐藏其他应用",
                    link: "/software/macos/hides",
                  },
                  {
                    text: "Multitrack Editor 1.0.7 MAS 多轨音频编辑器",
                    link: "/software/macos/multitrack-editor",
                  },
                  {
                    text: "Stellarium 24.1.0 天象虚拟天文馆",
                    link: "/software/macos/stellarium-mac",
                  },
                  {
                    text: "AI Transcription 2.5 MAS AI智能语音转文本",
                    link: "/software/macos/ai-transcription",
                  },
                  {
                    text: "Charles 4.6.6 网络协议抓包调试",
                    link: "/software/macos/charles-mac",
                  },
                  {
                    text: "Unclutter 2.2.8 MAS 菜单栏剪切板暂存",
                    link: "/software/macos/unclutter",
                  },
                  {
                    text: "VideoProc Converter 4K 6.4 全能视频处理",
                    link: "/software/macos/videoproc-converter-mac",
                  },
                  {
                    text: "Swinsian 3.0 Preview 15 音乐播放器",
                    link: "/software/macos/swinsian",
                  },
                  {
                    text: "Shortery 5.2.0 自动化快捷指令",
                    link: "/software/macos/shortery",
                  },
                  {
                    text: "Privatus 7.0.3 网页缓存清理",
                    link: "/software/macos/privatus",
                  },
                  {
                    text: "Movist Pro 2.11.4 高清视频播放器",
                    link: "/software/macos/movist-pro",
                  },
                  {
                    text: "DaisyDisk 4.30 磁盘空间分析清理",
                    link: "/software/macos/daisydisk",
                  },
                  {
                    text: "ColorWell 7.4.3 颜色选择器",
                    link: "/software/macos/colorwell",
                  },
                  {
                    text: "All To MP3 Converter 3.1.6 MAS 万能MP3音频转换器",
                    link: "/software/macos/all-to-mp3-converter",
                  },
                  {
                    text: "天天计算器 6.5.0 MAS 多功能备忘录计算器",
                    link: "/software/macos/daycalc",
                  },
                  {
                    text: "iCADMac Pro 2024 24.0.1.174 2D与3D CAD建模设计",
                    link: "/software/macos/icadmac-pro",
                  },
                  {
                    text: "Commander One PRO 3.8 MAS 文件管理器",
                    link: "/software/macos/commander-one-pro",
                  },
                  {
                    text: "Cardhop 2.2.17 通讯录管理创建",
                    link: "/software/macos/cardhop",
                  },
                  {
                    text: "Navicat Charts Viewer 1.2.17 Navicat图表查看",
                    link: "/software/macos/navicat-charts-viewer-mac",
                  },
                  {
                    text: "Navicat Charts Creator 1.2.17 Navicat图表创建",
                    link: "/software/macos/navicat-charts-creator-mac",
                  },
                  {
                    text: "Blender 4.1.1 3D动画建模渲染设计",
                    link: "/software/macos/blender-mac",
                  },
                  {
                    text: "TurboTax 2023.r23.032 纳税申报核实",
                    link: "/software/macos/turbotax",
                  },
                  {
                    text: "uDock 4.3 Dock栏启动增强",
                    link: "/software/macos/udock",
                  },
                  {
                    text: "Thor 1.5.14 自定义快捷键快速启动软件",
                    link: "/software/macos/thor",
                  },
                  {
                    text: "START 0.301.15650 腾讯云游戏",
                    link: "/software/macos/start-mac",
                  },
                  {
                    text: "OmniGraffle Pro 7.22.6 图示/图表/流程图绘制",
                    link: "/software/macos/omnigraffle-pro",
                  },
                  {
                    text: "Itsycal 0.15.3 菜单栏日历",
                    link: "/software/macos/itsycal",
                  },
                  {
                    text: "FxFactory Pro 8.0.14.7790 视频特效处理插件套装",
                    link: "/software/macos/fxfactory-pro",
                  },
                  {
                    text: "Caffeinated 2.0.5 MAS 防止系统休眠或调暗屏幕",
                    link: "/software/macos/caffeinated",
                  },
                  {
                    text: "BuhoCleaner 1.10.4 系统优化清理",
                    link: "/software/macos/buhocleaner",
                  },
                  {
                    text: "谜底时钟MDClock 2.34 MAS 翻页时钟与桌面组件",
                    link: "/software/macos/mdclock",
                  },
                  {
                    text: "CopyQ 8.0.0 剪贴板管理",
                    link: "/software/macos/copyq-mac",
                  },
                  {
                    text: "Room Arranger 9.8.3.645 3D室内设计",
                    link: "/software/macos/room-arranger-mac",
                  },
                  {
                    text: "Vivid 2.9 屏幕亮度调节",
                    link: "/software/macos/vivid",
                  },
                  {
                    text: "TG Pro 2.92 硬件温度监测与风扇控制",
                    link: "/software/macos/tg-pro",
                  },
                  {
                    text: "Navicat Premium 16.3.7 MAS 多连接数据库管理开发",
                    link: "/software/macos/navicat-premium-mac",
                  },
                  {
                    text: "KeyCue 10.2 展示软件快捷键",
                    link: "/software/macos/keycue",
                  },
                  {
                    text: "BetterTouchTool 4.443 触控板手势增强",
                    link: "/software/macos/bettertouchtool",
                  },
                  {
                    text: "Avid Media Composer 2024.2.0 无限试用版 非线性视频编辑处理",
                    link: "/software/macos/avid-media-composer-mac",
                  },
                  {
                    text: "Alfred 5 PowerPack 5.5.0.2257 一键快速启动软件",
                    link: "/software/macos/alfred-powerpack",
                  },
                  {
                    text: "尼康工坊 1.6.1 图像编辑处理",
                    link: "/software/macos/nx-studio-mac",
                  },
                  {
                    text: "Bob Pro 1.9.2 MAS 划词翻译/截图翻译与截图OCR",
                    link: "/software/macos/bob-pro",
                  },
                  {
                    text: "BetterDisplay Pro 2.2.6 自定义屏幕分辨率",
                    link: "/software/macos/betterdisplay-pro",
                  },
                  {
                    text: "Final2x 1.2.0 图像AI放大增强",
                    link: "/software/macos/final2x-mac",
                  },
                  {
                    text: "Cutter 2.3.4 反汇编逆向调试",
                    link: "/software/macos/cutter-mac",
                  },
                  {
                    text: "AList Desktop 3.32.0 云盘挂载管理",
                    link: "/software/macos/alist-desktop",
                  },
                  {
                    text: "Clearview X 3.0.7 MAS 电子书阅读管理器",
                    link: "/software/macos/clearview-x",
                  },
                  {
                    text: "DJ Mix Pads 2 16.0.1 MAS DJ音乐制作",
                    link: "/software/macos/dj-mix-pads",
                  },
                  {
                    text: "即刻转换 1.3.1 MAS 音视频格式转换器",
                    link: "/software/macos/video-converter-x",
                  },
                  {
                    text: "Rocket Typist 3.0.9 文本自动补全输入",
                    link: "/software/macos/rocket-typist",
                  },
                  {
                    text: "RightFont 8.6.0 字体管理设计",
                    link: "/software/macos/rightfont",
                  },
                  {
                    text: "Fishing Funds 8.2.3 实时显示基金数据涨跌",
                    link: "/software/macos/fishing-funds-mac",
                  },
                  {
                    text: "DropDMG 3.6.7 DMG安装包制作",
                    link: "/software/macos/dropdmg",
                  },
                  {
                    text: "SideNotes 1.4.14 侧边栏便笺与笔记管理",
                    link: "/software/macos/sidenotes",
                  },
                  {
                    text: "Fig Player 1.3.10 MAS 视频播放器",
                    link: "/software/macos/fig-player-mac",
                  },
                  {
                    text: "ToothFairy 2.8.4 MAS 一键切换连接蓝牙设备",
                    link: "/software/macos/toothfairy",
                  },
                  {
                    text: "Navicat Data Modeler Essentials 3.3.17 数据库建模设计",
                    link: "/software/macos/navicat-data-modeler-mac",
                  },
                  {
                    text: "Dehancer Film PS/LR 2.4.0 胶片模拟调色插件",
                    link: "/software/macos/dehancer-film-ps-mac",
                  },
                  {
                    text: "010 Editor 14.0.1 十六进制编辑器",
                    link: "/software/macos/010-editor-mac",
                  },
                  {
                    text: "One Switch 1.34.2 菜单栏多合一开关功能合集",
                    link: "/software/macos/one-switch",
                  },
                  {
                    text: "Nova 11.9 代码编辑器",
                    link: "/software/macos/nova",
                  },
                  {
                    text: "LuLu 2.6.3 防火墙软件",
                    link: "/software/macos/lulu",
                  },
                  {
                    text: "Funter 6.2.3 一键设置文件隐藏显示",
                    link: "/software/macos/funter",
                  },
                  {
                    text: "YesPlayMusic 0.4.8-2 第三方网易云音乐播放器",
                    link: "/software/macos/yesplaymusic-mac",
                  },
                  {
                    text: "The Foundry NUKE 15.0v4 影视后期特效合成制作",
                    link: "/software/macos/the-foundry-nuke-mac",
                  },
                  {
                    text: "Tabby 1.0.207 终端模拟器/SSH客户端",
                    link: "/software/macos/tabby-mac",
                  },
                  {
                    text: "SnapMotion 5.2.1 视频截图提取",
                    link: "/software/macos/snapmotion",
                  },
                  {
                    text: "Menuwhere 2.2.2 菜单栏便捷定位",
                    link: "/software/macos/menuwhere",
                  },
                  {
                    text: "MetaRename 1.0.10 文件批量重命名",
                    link: "/software/macos/metarename",
                  },
                  {
                    text: "DxO ViewPoint 4.15.0.294 照片修复校正",
                    link: "/software/macos/dxo-viewpoint-mac",
                  },
                  {
                    text: "DxO FilmPack 7.5.0.513 胶片模拟效果滤镜",
                    link: "/software/macos/dxo-filmpack-mac",
                  },
                  {
                    text: "App Cleaner & Uninstaller Pro 8.2.7 软件深度卸载清理",
                    link: "/software/macos/app-cleaner-uninstaller-pro",
                  },
                  {
                    text: "Weather Dock 5.5.1 MAS 高清天气预报与Dock图标",
                    link: "/software/macos/weather-dock",
                  },
                  {
                    text: "Desktop Aquarium Wallpapers 2.2.0 MAS 水族馆锁屏动态壁纸",
                    link: "/software/macos/desktop-aquarium-wallpapers",
                  },
                  {
                    text: "AceMovi Video Editor 4.23.0.169 视频编辑处理",
                    link: "/software/macos/acemovi-video-editor-mac",
                  },
                  {
                    text: "SuspiciousPackage 4.4.0 PKG文件提取查看",
                    link: "/software/macos/suspiciouspackage",
                  },
                  {
                    text: "Recut 3.7.6 自动视频编辑处理",
                    link: "/software/macos/recut",
                  },
                  {
                    text: "TextSoap 9.4.2 文本格式清除",
                    link: "/software/macos/textsoap",
                  },
                  {
                    text: "DisplayBuddy 1.44 屏幕亮度调节",
                    link: "/software/macos/displaybuddy",
                  },
                  {
                    text: "Coming soon 3.20 MAS 及时获取电影资讯",
                    link: "/software/macos/coming-soon",
                  },
                  {
                    text: "Maxthon 7.1.7.8700 Beta 傲游浏览器",
                    link: "/software/macos/maxthon-mac",
                  },
                  {
                    text: "蜗牛云盘 1.4.0 第三方阿里云盘",
                    link: "/software/macos/woniudisk-mac",
                  },
                  {
                    text: "BLEUnlock 1.12.2 使用iPhone/Apple Watch或其他蓝牙设备锁定/解锁Mac",
                    link: "/software/macos/bleunlock",
                  },
                  {
                    text: "GrandTotal 8.2.4 财务管理",
                    link: "/software/macos/grandtotal",
                  },
                  {
                    text: "ServerCat 1.9.0 MAS SSH终端模拟器",
                    link: "/software/macos/servercat",
                  },
                  {
                    text: "XnConvert 1.100.1 图片批量处理",
                    link: "/software/macos/xnconvert-mac",
                  },
                  {
                    text: "Wondershare DVD Creator 6.1.10.5 DVD光盘刻录",
                    link: "/software/macos/wondershare-dvd-creator-mac",
                  },
                  {
                    text: "GlueMotion 2.2.2 MAS 延时摄影视频制作",
                    link: "/software/macos/gluemotion",
                  },
                  {
                    text: "Adobe Substance 3D Sampler 4.1.0.3039 图片转3D素材软件",
                    link: "/software/macos/adobe-substance-3d-sampler-mac",
                  },
                  {
                    text: "Adobe Substance 3D Painter 9.1.2.3332 3D数字绘画设计",
                    link: "/software/macos/adobe-substance-3d-painter-mac",
                  },
                  {
                    text: "Adobe Substance 3D Designer 13.1.1.7509 3D纹理材料制作",
                    link: "/software/macos/adobe-substance-3d-designer-mac",
                  },
                  {
                    text: "Adobe Photoshop 2024 25.5.0.375 +Neural Filters 图像编辑处理设计",
                    link: "/software/macos/adobe-photoshop-mac",
                  },
                  {
                    text: "Adguard 2.13.0.1558 广告过滤拦截",
                    link: "/software/macos/adguard-mac",
                  },
                  {
                    text: "ONLYOFFICE 8.0.1 Office办公套件",
                    link: "/software/macos/onlyoffice-mac",
                  },
                  {
                    text: "Omi录屏专家 1.3.8 MAS 屏幕录像编辑",
                    link: "/software/macos/omi-screenrecorder",
                  },
                  {
                    text: "LocalSend 1.14.0 文件加密共享",
                    link: "/software/macos/localsend-mac",
                  },
                  {
                    text: "Adobe Substance 3D Stager 2.1.4.5738 3D场景渲染设计",
                    link: "/software/macos/adobe-substance-3d-stager-mac",
                  },
                  {
                    text: "Pro Microphone 4.6.0 MAS 麦克风音乐录制",
                    link: "/software/macos/pro-microphone",
                  },
                  {
                    text: "OmniZip Pro 2.1.6 MAS 全能解压缩专家",
                    link: "/software/macos/omnizip-pro",
                  },
                  {
                    text: "NotepadNext 0.7.0 文本与代码编辑器",
                    link: "/software/macos/notepadnext-mac",
                  },
                  {
                    text: "Iridient Developer 4.2.1 RAW照片调整处理",
                    link: "/software/macos/iridient-developer",
                  },
                  {
                    text: "Google Earth Pro 7.3.6.9796 谷歌地球-虚拟地球仪",
                    link: "/software/macos/google-earth-pro-mac",
                  },
                  {
                    text: "BusyCal 2024.1.2 任务提醒与菜单栏日历",
                    link: "/software/macos/busycal",
                  },
                  {
                    text: "App Tamer 2.8.3 CPU优化电池管理",
                    link: "/software/macos/app-tamer",
                  },
                  {
                    text: "Waves Ultimate 14 2024.02.11 Waves音频后期混音套件",
                    link: "/software/macos/waves-ultimate-mac",
                  },
                  {
                    text: "Typora 1.8.10 Markdown写作编辑",
                    link: "/software/macos/typora-mac",
                  },
                  {
                    text: "Termius 8.9.7 终端模拟器/SSH/SFTP客户端",
                    link: "/software/macos/termius-mac",
                  },
                  {
                    text: "Steinberg SpectraLayers Pro 10.0.50.343 音频光谱编辑与修复",
                    link: "/software/macos/steinberg-spectralayers-pro-mac",
                  },
                  {
                    text: "Smooze Pro 2.0.72 鼠标滚动增强",
                    link: "/software/macos/smooze-pro",
                  },
                  {
                    text: "SILKYPIX JPEG Photography 11.2.14.0 图像编辑处理",
                    link: "/software/macos/silkypix-jpeg-photography-mac",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro 11.0.14.0  RAW图像编辑处理",
                    link: "/software/macos/silkypix-developer-studio-pro-mac",
                  },
                  {
                    text: "Retroactive 2.1 高版本系统解锁运行低版本软件",
                    link: "/software/macos/retroactive",
                  },
                  {
                    text: "Perfectly Clear Video 4.6.0.2638 AI视频清晰化处理",
                    link: "/software/macos/perfectly-clear-video-mac",
                  },
                  {
                    text: "Paletro 1.10.0 快捷命令面板",
                    link: "/software/macos/paletro",
                  },
                  {
                    text: "Moom 3.2.26 软件窗口管理",
                    link: "/software/macos/moom",
                  },
                  {
                    text: "MAMP PRO 6.9.0 Web服务器集成开发环境",
                    link: "/software/macos/mamp-pro-mac",
                  },
                  {
                    text: "LunarBar 1.2.0 菜单栏极简日历",
                    link: "/software/macos/lunarbar",
                  },
                  {
                    text: "Loop Mash Up 1.2.13 MAS DJ音乐混音制作",
                    link: "/software/macos/loop-mash-up",
                  },
                  {
                    text: "Logoist 5.1.2 MAS 图标设计制作",
                    link: "/software/macos/logoist",
                  },
                  {
                    text: "JixiPix Artista Impresso Pro 1.8.26 图片油画滤镜",
                    link: "/software/macos/jixipix-artista-impresso-pro-mac",
                  },
                  {
                    text: "FonesGo Location Changer 7.0.0 iOS与Android设备修改GPS位置",
                    link: "/software/macos/fonesgo-location-changer",
                  },
                  {
                    text: "File List Export 2.9.1 MAS 文件列表导出",
                    link: "/software/macos/file-list-export",
                  },
                  {
                    text: "Darktable 4.6.1 RAW图像编辑处理",
                    link: "/software/macos/darktable-mac",
                  },
                  {
                    text: "Cinemagraph Pro 2.11 GIF动态图片特效",
                    link: "/software/macos/cinemagraph-pro",
                  },
                  {
                    text: "BusyContacts 2024.1.2 通讯录管理创建",
                    link: "/software/macos/busycontacts",
                  },
                  {
                    text: "Barcode 2.5.6 条形码生成器",
                    link: "/software/macos/barcode-mac",
                  },
                  {
                    text: "AutoMounter 1.8.1 网络共享自动加载软件",
                    link: "/software/macos/automounter",
                  },
                  {
                    text: "Air Printer 5.2.2 MAS 隔空虚拟打印机",
                    link: "/software/macos/air-printer",
                  },
                  {
                    text: "ACDSee Photo Studio 10.0.4.3045 图像数字处理",
                    link: "/software/macos/acdsee-photo-studio",
                  },
                  {
                    text: "EtreCheckPro 6.8.4 查看mac硬件信息",
                    link: "/software/macos/etrecheckpro",
                  },
                  {
                    text: "Session 2.9.15 MAS 番茄钟专注计时器",
                    link: "/software/macos/session",
                  },
                  {
                    text: "Alpaca 2.9.2 PS图像智能生成插件",
                    link: "/software/macos/alpaca",
                  },
                  {
                    text: "NXPowerLite Desktop 10.1.0 文件压缩管理",
                    link: "/software/macos/nxpowerlite-desktop-mac",
                  },
                  {
                    text: "Native Instruments Traktor Pro Plus 3.11.1.17 数字DJ混音",
                    link: "/software/macos/native-instruments-traktor-pro-plus-mac",
                  },
                  {
                    text: "MacZip 2.4 解压缩软件",
                    link: "/software/macos/maczip",
                  },
                  {
                    text: "DiffusionBee 2.5.1 图像AI增强修复",
                    link: "/software/macos/diffusionbee",
                  },
                  {
                    text: "Amadeus Pro 2.8.13.2662 Beta 多轨音频编辑器",
                    link: "/software/macos/amadeus-pro",
                  },
                  {
                    text: "Scrutiny 12.8.9 网站链接分析",
                    link: "/software/macos/scrutiny",
                  },
                  {
                    text: "敲木鱼 12.5 MAS 音效敲击软件",
                    link: "/software/macos/macmuyu",
                  },
                  {
                    text: "Slidepad 1.4.7 侧边栏浏览器",
                    link: "/software/macos/slidepad",
                  },
                  {
                    text: "Maxon App 2024.1.1 创意插件合集",
                    link: "/software/macos/maxon-app-mac",
                  },
                  {
                    text: "FileMaker Pro 20.3.1.31 定制化App开发软件",
                    link: "/software/macos/filemaker-pro-mac",
                  },
                  {
                    text: "Dash 7.2.1 API开发文档管理",
                    link: "/software/macos/dash",
                  },
                  {
                    text: "AnyMP4 iPhone GPS Spoofer 1.0.18 修改或隐藏iPhone GPS位置",
                    link: "/software/macos/anymp4-iphone-gps-spoofer",
                  },
                  {
                    text: "SteerMouse 5.7 万能鼠标增强设置",
                    link: "/software/macos/steermouse",
                  },
                  {
                    text: "Marked 2.6.33 文本标记预览器",
                    link: "/software/macos/marked",
                  },
                  {
                    text: "Lunar Pro 6.5.0 屏幕亮度调节",
                    link: "/software/macos/lunar-pro",
                  },
                  {
                    text: "2Do 2.8.5 任务待办事项",
                    link: "/software/macos/2do",
                  },
                  {
                    text: "PhotosRevive 2.1.3 老旧照片自动着色",
                    link: "/software/macos/photosrevive",
                  },
                  {
                    text: "MetaVideo 1.1.3 视频元数据编辑",
                    link: "/software/macos/metavideo",
                  },
                  {
                    text: "Pocket Yoga 14.3.0 MAS 口袋瑜伽",
                    link: "/software/macos/pocket-yoga",
                  },
                  {
                    text: "Eon Timer 2.9.11 时间跟踪器",
                    link: "/software/macos/eon-timer",
                  },
                  {
                    text: "DxO PureRAW 3.9.0.33 RAW图像编辑处理",
                    link: "/software/macos/dxo-pureraw-mac",
                  },
                  {
                    text: "Chain Timer 10.1 MAS 链式计时器",
                    link: "/software/macos/chain-timer",
                  },
                  {
                    text: "Boris FX Silhouette 2023.5.3 视频特效与后期抠像",
                    link: "/software/macos/boris-fx-silhouette-mac",
                  },
                  {
                    text: "Battery Indicator 2.17.0 MAS 菜单栏显示剩余电量",
                    link: "/software/macos/battery-indicator",
                  },
                  {
                    text: "Wolfram Mathematica 14.0.0 数学科学计算",
                    link: "/software/macos/wolfram-mathematica-mac",
                  },
                  {
                    text: "Nuro Audio Xvox Pro 1.0.3 终极人声混音效果器插件",
                    link: "/software/macos/nuro-audio-xvox-pro-mac",
                  },
                  {
                    text: "Ultimate Vocal Remover 5.6.0 UVR终极人声伴奏分离器",
                    link: "/software/macos/ultimate-vocal-remover-mac",
                  },
                  {
                    text: "Usage 1.14.4 MAS 菜单栏系统状态监控",
                    link: "/software/macos/usage",
                  },
                  {
                    text: "落格输入法 3.3.2 双拼输入法",
                    link: "/software/macos/loginput",
                  },
                  {
                    text: "Wizard 2.0.16 数据可视化分析",
                    link: "/software/macos/wizard",
                  },
                  {
                    text: "Weather Widget Live 5.1.1 MAS 高清天气壁纸",
                    link: "/software/macos/weather-widget-live",
                  },
                  {
                    text: "MetaImage 2.6.3 图片元数据编辑",
                    link: "/software/macos/metaimage",
                  },
                  {
                    text: "EzyCal 2.3 MAS 日历与时间提醒",
                    link: "/software/macos/ezycal",
                  },
                  {
                    text: "Alarm Clock Pro 15.6.0 闹钟与时间管理",
                    link: "/software/macos/alarm-clock-pro",
                  },
                  {
                    text: "FreeCAD 0.21.2 CAD绘图设计",
                    link: "/software/macos/freecad-mac",
                  },
                  {
                    text: "CrystalMaker 10.8.3 晶体与分子结构可视化",
                    link: "/software/macos/crystalmaker-mac",
                  },
                  {
                    text: "Butler 4.4.8 快捷启动器",
                    link: "/software/macos/butler",
                  },
                  {
                    text: "Adobe Captivate 12.2.0.19 屏幕录制演示",
                    link: "/software/macos/adobe-captivate-mac",
                  },
                  {
                    text: "Captin 1.3.1 实时显示大小写锁定状态",
                    link: "/software/macos/captin",
                  },
                  {
                    text: "Canary Mail 4.34 MAS 邮件收发管理",
                    link: "/software/macos/canary-mail",
                  },
                  {
                    text: "Receipts 1.15 财务文件管理",
                    link: "/software/macos/receipts",
                  },
                  {
                    text: "iZotope Tonal Balance Control 2.7.0 音调平衡控制插件",
                    link: "/software/macos/izotope-tonal-balance-control-mac",
                  },
                  {
                    text: "iZotope Relay 1.4.0 音频效果增强插件",
                    link: "/software/macos/izotope-relay-mac",
                  },
                  {
                    text: "Cheat Engine 7.5.2 CE修改器",
                    link: "/software/macos/cheat-engine-mac",
                  },
                  {
                    text: "Unite 5.1.2 将任何Web网站转换为桌面应用",
                    link: "/software/macos/unite",
                  },
                  {
                    text: "Mounty 2.4 NTFS磁盘挂载读写",
                    link: "/software/macos/mounty",
                  },
                  {
                    text: "ExactScan Enterprise 23.12.30 万能文档扫描仪",
                    link: "/software/macos/exactscan-enterprise",
                  },
                  {
                    text: "Color Folder Pro 3.8 MAS 文件夹图标颜色修改",
                    link: "/software/macos/color-folder-pro",
                  },
                  {
                    text: "iFastZip 9.0 MAS 解压缩软件",
                    link: "/software/macos/ifastzip",
                  },
                  {
                    text: "HapiGo 2.12.0 一键快速启动软件",
                    link: "/software/macos/hapigo",
                  },
                  {
                    text: "FinalShell专业版 4.3.1.0 终端模拟器/SSH客户端",
                    link: "/software/macos/finalshell-mac",
                  },
                  {
                    text: "Dehancer Pro FCP 2.0.1 胶片模拟调色插件",
                    link: "/software/macos/dehancer-pro-fcp",
                  },
                  {
                    text: "OctaneRender 2023.1 C4D OC渲染器",
                    link: "/software/macos/octanerender",
                  },
                  {
                    text: "Imagenomic Realgrain for PS 2.1.4.2147 图像胶片滤镜插件",
                    link: "/software/macos/imagenomic-realgrain-for-ps-mac",
                  },
                  {
                    text: "Imagenomic Portraiture for LR 4.1.2.4127 图像磨皮滤镜插件",
                    link: "/software/macos/imagenomic-portraiture-for-lr-mac",
                  },
                  {
                    text: "Clark Audio Lofi Panda 3.4.0 熊猫音频采样插件",
                    link: "/software/macos/clark-audio-lofi-panda-mac",
                  },
                  {
                    text: "LMMS 1.2.2 音频编辑处理",
                    link: "/software/macos/lmms-mac",
                  },
                  {
                    text: "Harrison Mixbus 32C 7.0.150 数字音频混音编辑",
                    link: "/software/macos/harrison-mixbus-mac",
                  },
                  {
                    text: "iMap Builder 3.1.14 MAS 思维导图与头脑风暴",
                    link: "/software/macos/imap-builder",
                  },
                  {
                    text: "QuitAll 1.2.3 一键强制退出软件",
                    link: "/software/macos/quitall",
                  },
                  {
                    text: "Mosaic Pro 1.4 软件窗口管理",
                    link: "/software/macos/mosaic-pro",
                  },
                  {
                    text: "Firetask 4.8.2 GTD任务待办管理",
                    link: "/software/macos/firetask",
                  },
                  {
                    text: "Aquarium 4K 1.0.5 MAS 4K高清屏保",
                    link: "/software/macos/aquarium-4k",
                  },
                  {
                    text: "Fireplace Live HD 4.5.0 MAS 高清壁炉篝火壁纸",
                    link: "/software/macos/fireplace-live-hd",
                  },
                  {
                    text: "Calunar 1.11.1 MAS 支持小组件的简约农历",
                    link: "/software/macos/calunar",
                  },
                  {
                    text: "Aquarium Live HD 3.5.0 MAS 水族馆海洋屏保",
                    link: "/software/macos/aquarium-live-hd",
                  },
                  {
                    text: "System Dashboard 4.9.1 MAS 系统状态监测",
                    link: "/software/macos/system-dashboard",
                  },
                  {
                    text: "Studio 3T Ultimate 2023.5.0 MongoDB 数据库可视化管理",
                    link: "/software/macos/studio-3t-ultimate-mac",
                  },
                  {
                    text: "iTerm2 3.4.23 命令行终端美化模拟器",
                    link: "/software/macos/iterm2",
                  },
                  {
                    text: "Browserosaurus 20.7.0 一键切换默认浏览器",
                    link: "/software/macos/browserosaurus",
                  },
                  {
                    text: "Awaken 6.4.5 MAS 音乐闹钟与睡眠计时器",
                    link: "/software/macos/awaken",
                  },
                  {
                    text: "Inklet 2.2.5 触控板绘图写作",
                    link: "/software/macos/inklet",
                  },
                  {
                    text: "KeyClu 0.18 展示软件快捷键",
                    link: "/software/macos/keyclu",
                  },
                  {
                    text: "Moho Pro 14.1.0 2D动画编辑制作",
                    link: "/software/macos/moho-pro-mac",
                  },
                  {
                    text: "OpenInTerminal 2.3.7 一键快速启动软件",
                    link: "/software/macos/openinterminal",
                  },
                  {
                    text: "Concealer 1.3.7 文件信息加密",
                    link: "/software/macos/concealer",
                  },
                  {
                    text: "Sparkle 5.2.3 可视化网页开发",
                    link: "/software/macos/sparkle",
                  },
                  {
                    text: "Picview Pro 1.1.2 MAS 图像管理查看",
                    link: "/software/macos/picview-pro",
                  },
                  {
                    text: "Shottr 1.7.2 OCR截图标注",
                    link: "/software/macos/shottr",
                  },
                  {
                    text: "PDF Search 13.7 PDF文档搜索",
                    link: "/software/macos/pdf-search",
                  },
                  {
                    text: "Outlinely 2.10.8 树形结构笔记软件",
                    link: "/software/macos/outlinely",
                  },
                  {
                    text: "Mix Up Studio 24.3.2 MAS 迷你混音工作室",
                    link: "/software/macos/mix-up-studio",
                  },
                  {
                    text: "RePix Pro 2.3.0 MAS 图像编辑处理",
                    link: "/software/macos/repix-pro",
                  },
                  {
                    text: "Wattagio 1.13.1 mac电池监测管理",
                    link: "/software/macos/wattagio",
                  },
                  {
                    text: "Serial 2.0.17 串行终端调试管理",
                    link: "/software/macos/serial",
                  },
                  {
                    text: "Magic Battery 8.1.1 MAS 显示连接设备电量",
                    link: "/software/macos/magic-battery",
                  },
                  {
                    text: "AnyMP4 Mac Blu-ray Player 6.3.68 蓝光视频播放器",
                    link: "/software/macos/anymp4-blu-ray-player-mac",
                  },
                  {
                    text: "Inkscape 1.3.2 矢量绘图设计",
                    link: "/software/macos/inkscape-mac",
                  },
                  {
                    text: "OpenOffice 4.1.15 Office办公套件",
                    link: "/software/macos/openoffice-mac",
                  },
                  {
                    text: "VectorStyler 1.1.111 矢量图形设计",
                    link: "/software/macos/vectorstyler-mac",
                  },
                  {
                    text: "Image2icon 2.18 MAS 图标制作导出",
                    link: "/software/macos/image2icon",
                  },
                  {
                    text: "Storyist 4.3.4 小说写作编辑",
                    link: "/software/macos/storyist",
                  },
                  {
                    text: "PCDJ LYRX 1.10.3.0 DJ与卡拉OK制作",
                    link: "/software/macos/pcdj-lyrx-mac",
                  },
                  {
                    text: "MAXON CINEMA 4D Studio 2024.2.0 C4D三维动画设计",
                    link: "/software/macos/maxon-cinema-4d-studio-mac",
                  },
                  {
                    text: "Final Cut Pro 10.7.1 MAS 视频编辑处理",
                    link: "/software/macos/final-cut-pro",
                  },
                  {
                    text: "Vanilla Pro 2.1.1 菜单栏图标隐藏管理",
                    link: "/software/macos/vanilla-pro",
                  },
                  {
                    text: "Transmit 5.10.4 FTP/SFTP连接管理",
                    link: "/software/macos/transmit",
                  },
                  {
                    text: "The Clock 4.9.1 MAS 世界时钟与日历",
                    link: "/software/macos/the-clock",
                  },
                  {
                    text: "PhotoLine 24.01 图像编辑处理",
                    link: "/software/macos/photoline-mac",
                  },
                  {
                    text: "OmniOutliner Pro 5.12 知识大纲管理",
                    link: "/software/macos/omnioutliner-pro",
                  },
                  {
                    text: "Curio Professional 27.0 笔记与思维导图",
                    link: "/software/macos/curio-professional",
                  },
                  {
                    text: "aText 2.40.5 文本扩展",
                    link: "/software/macos/atext-mac",
                  },
                  {
                    text: "Oniric Glow Generator 1.3.0 PS光效光晕合成插件",
                    link: "/software/macos/oniric-glow-generator",
                  },
                  {
                    text: "ApolloOne 3.3.7 MAS 图像管理查看",
                    link: "/software/macos/apolloone",
                  },
                  {
                    text: "Wondershare MindMaster Pro 10.8.0 亿图脑图/思维导图",
                    link: "/software/macos/wondershare-mindmaster-pro-mac",
                  },
                  {
                    text: "Corel WinZip Pro 11.0.6675 解压缩软件",
                    link: "/software/macos/corel-winzip-pro-mac",
                  },
                  {
                    text: "PasteNow 2.16 MAS 剪贴板管理",
                    link: "/software/macos/pastenow",
                  },
                  {
                    text: "Magnet 2.14.0 MAS 软件窗口管理",
                    link: "/software/macos/magnet",
                  },
                  {
                    text: "MarkMark 0.6.331 收藏后续阅读",
                    link: "/software/macos/markmark",
                  },
                  {
                    text: "Macs Fan Control Pro 1.5.17 电脑风扇控制",
                    link: "/software/macos/macs-fan-control-pro",
                  },
                  {
                    text: "ImageRanger Pro 1.9.6.1888 图像管理查看",
                    link: "/software/macos/imageranger-pro-mac",
                  },
                  {
                    text: "HoudahSpot 6.4.1 文件搜索查找",
                    link: "/software/macos/houdahspot",
                  },
                  {
                    text: "FreeOffice 2021 build 1068 Office办公套件",
                    link: "/software/macos/freeoffice-mac",
                  },
                  {
                    text: "CodeRunner 4.3 多功能代码编辑器",
                    link: "/software/macos/coderunner",
                  },
                  {
                    text: "Bandizip Pro 7.29 MAS 解压缩软件",
                    link: "/software/macos/bandizip-pro-mac",
                  },
                  {
                    text: "ApiPost 7.2.6 API接口调试",
                    link: "/software/macos/apipost-mac",
                  },
                  {
                    text: "Native Instruments Replika XT 1.3.1 音频延迟效果器插件",
                    link: "/software/macos/native-instruments-replika-xt-mac",
                  },
                  {
                    text: "Mate Translate 8.1.3 MAS 翻译软件",
                    link: "/software/macos/mate-translate",
                  },
                  {
                    text: "Karabiner Elements 14.13.0 键盘改键位",
                    link: "/software/macos/karabiner-elements",
                  },
                  {
                    text: "Data Guardian 7.6.7 数据安全保护",
                    link: "/software/macos/data-guardian",
                  },
                  {
                    text: "MacPilot 15.0.3 系统维护优化",
                    link: "/software/macos/macpilot",
                  },
                  {
                    text: "MainStage 3.6.6 MAS 音乐现场演出装备",
                    link: "/software/macos/mainstage",
                  },
                  {
                    text: "Mach Desktop HD 3.0.6 MAS 4K动态壁纸",
                    link: "/software/macos/mach-desktop-hd",
                  },
                  {
                    text: "Live Wallpaper HD 5.7.0 MAS 高清天气壁纸",
                    link: "/software/macos/live-wallpaper-hd",
                  },
                  {
                    text: "Krita 5.2.2 数字绘画设计",
                    link: "/software/macos/krita-mac",
                  },
                  {
                    text: "JixiPix Spektrel Art 1.1.17 图片锐化处理",
                    link: "/software/macos/jixipix-spektrel-art-mac",
                  },
                  {
                    text: "Color Wheel 8.1 MAS 数字和抽象色轮",
                    link: "/software/macos/color-wheel",
                  },
                  {
                    text: "Surge 5.4.3.2534 网络调试代理",
                    link: "/software/macos/surge",
                  },
                  {
                    text: "JixiPix Rip Studio Pro 1.1.20 图片拼接处理",
                    link: "/software/macos/jixipix-rip-studio-pro-mac",
                  },
                  {
                    text: "JixiPix Photo Formation Pro 1.0.22 3D创意照片特效",
                    link: "/software/macos/jixipix-photo-formation-pro-mac",
                  },
                  {
                    text: "Coherence X 4.5.3 将任何Web网站转换为桌面应用",
                    link: "/software/macos/coherence-x",
                  },
                  {
                    text: "LaunchBar 6.18.5 一键快速启动软件",
                    link: "/software/macos/launchbar",
                  },
                  {
                    text: "JixiPix PuzziPix Pro 1.0.20 图片拼图",
                    link: "/software/macos/jixipix-puzzipix-pro-mac",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro for Panasonic 11.3.13.0  松下相机图片处理",
                    link: "/software/macos/silkypix-developer-studio-pro-for-panasonic-mac",
                  },
                  {
                    text: "SILKYPIX Developer Studio Pro for FUJIFILM 11.4.13.0  富士相机图片处理",
                    link: "/software/macos/silkypix-developer-studio-pro-for-fujifilm-mac",
                  },
                  {
                    text: "Pixea Plus 5.2 MAS 图像管理查看",
                    link: "/software/macos/pixea-plus",
                  },
                  {
                    text: "Performance Index 64 Pro 4.2.12 MAS 系统性能基准测试",
                    link: "/software/macos/performance-index-pro",
                  },
                  {
                    text: "NetNewsWire 6.1.5b1 RSS阅读管理",
                    link: "/software/macos/netnewswire",
                  },
                  {
                    text: "Living Weather & Wallpapers HD 5.5.0 MAS 高清天气壁纸",
                    link: "/software/macos/living-weather-wallpapers-hd",
                  },
                  {
                    text: "Compressor 4.7.0 MAS 视频编码格式转换",
                    link: "/software/macos/compressor",
                  },
                  {
                    text: "Motion 5.7.0 MAS 视频后期特效合成",
                    link: "/software/macos/motion",
                  },
                  {
                    text: "Librarian Pro 7.4.0 图书收藏管理",
                    link: "/software/macos/librarian-pro",
                  },
                  {
                    text: "Readiris Corporate 17.1.9 OCR文字识别",
                    link: "/software/macos/readiris-corporate-mac",
                  },
                  {
                    text: "iCalamus 2.26 版面编辑设计",
                    link: "/software/macos/icalamus",
                  },
                  {
                    text: "Acorn 7.4.3 轻量级图片处理",
                    link: "/software/macos/acorn",
                  },
                  {
                    text: "Dark Reader 1.4.6 MAS Safari深色模式插件",
                    link: "/software/macos/dark-reader",
                  },
                  {
                    text: "Lightkey 4.5.1 DMX灯光照明控制",
                    link: "/software/macos/lightkey",
                  },
                  {
                    text: "Meta 2.2 音频标签编辑器",
                    link: "/software/macos/meta",
                  },
                  {
                    text: "Viper FTP 6.3.7 FTP传输客户端",
                    link: "/software/macos/viper-ftp",
                  },
                  {
                    text: "iCollections 8.1 桌面文件整理",
                    link: "/software/macos/icollections",
                  },
                  {
                    text: "Scherlokk 4.6.3 文件高效搜索",
                    link: "/software/macos/scherlokk",
                  },
                  {
                    text: "JixiPix Watercolor Studio Pro 1.4.17 图片水彩画绘制",
                    link: "/software/macos/jixipix-watercolor-studio-pro-mac",
                  },
                  {
                    text: "JixiPix Chromatic Edges 1.0.31 照片复古艺术效果",
                    link: "/software/macos/jixipix-chromatic-edges-mac",
                  },
                  {
                    text: "Timemator 3.0.4 时间追踪记录与自动化",
                    link: "/software/macos/timemator",
                  },
                  {
                    text: "Swish 1.10.3 触控栏窗口管理",
                    link: "/software/macos/swish",
                  },
                  {
                    text: "Screens 4.12.16 远程桌面控制",
                    link: "/software/macos/screens",
                  },
                  {
                    text: "JixiPix Pastello Pro 6.0.98 照片转铅笔画",
                    link: "/software/macos/jixipix-pastello-pro-mac",
                  },
                  {
                    text: "PhoneRescue for iOS 4.2.6.20231019 iPhone数据恢复",
                    link: "/software/macos/phonerescue-for-ios-mac",
                  },
                  {
                    text: "Jixipix Premium Pack 1.2.11 艺术照片特效",
                    link: "/software/macos/jixipix-premium-pack-mac",
                  },
                  {
                    text: "Royal TSX 6.0.2 远程桌面连接管理",
                    link: "/software/macos/royal-tsx-mac",
                  },
                  {
                    text: "Jump Paint 6.1 漫画绘图设计",
                    link: "/software/macos/jump-paint-mac",
                  },
                  {
                    text: "AutoMute 1.8 MAS 自动静音",
                    link: "/software/macos/automute",
                  },
                  {
                    text: "Stretchly 1.15.1 定时休息提醒",
                    link: "/software/macos/stretchly-mac",
                  },
                  {
                    text: "Tampermonkey 4.20.6188 MAS Safari油猴脚本管理插件",
                    link: "/software/macos/tampermonkey",
                  },
                  {
                    text: "Renamer 7.0.14 文件批量重命名",
                    link: "/software/macos/renamer",
                  },
                  {
                    text: "Pixelstyle Photo Editor 4.3.0 MAS 图像编辑器",
                    link: "/software/macos/pixelstyle-photo-editor",
                  },
                  {
                    text: "冰点还原Deep Freeze 7.60.220.0202 系统还原备份",
                    link: "/software/macos/deep-freeze-mac",
                  },
                  {
                    text: "GrabIt 4.932 MAS 屏幕截图",
                    link: "/software/macos/grabit",
                  },
                  {
                    text: "Remote Wake Up 1.4.1 远程唤醒电脑",
                    link: "/software/macos/remote-wake-up",
                  },
                  {
                    text: "PDF Protector 1.5.2 PDF文件加密",
                    link: "/software/macos/pdf-protector",
                  },
                  {
                    text: "Network Radar 3.0.4 网络扫描管理",
                    link: "/software/macos/network-radar",
                  },
                  {
                    text: "Tembo 3.1.1 文件搜索查找",
                    link: "/software/macos/tembo",
                  },
                  {
                    text: "Photos Workbench 1.2.1 图片管理与评分比较",
                    link: "/software/macos/photos-workbench",
                  },
                  {
                    text: "HoudahGeo 6.4.2 地理信息管理标记",
                    link: "/software/macos/houdahgeo",
                  },
                  {
                    text: "SparkFX 1.2.1 音频编辑制作",
                    link: "/software/macos/sparkfx",
                  },
                  {
                    text: "Sound Control 2.6.4 单独调节应用音量",
                    link: "/software/macos/sound-control",
                  },
                  {
                    text: "Bing Wallpaper 1.1.3 每天自动更新必应壁纸",
                    link: "/software/macos/bing-wallpaper-mac",
                  },
                  {
                    text: "MacCleanse 12.5 系统垃圾清理",
                    link: "/software/macos/maccleanse",
                  },
                  {
                    text: "Airtool 2.5.3 菜单栏网络监控",
                    link: "/software/macos/airtool",
                  },
                  {
                    text: "ScreenFlow 10.0.10 屏幕录像编辑",
                    link: "/software/macos/screenflow",
                  },
                  {
                    text: "Lattice 1.8.14 LUT颜色查找表",
                    link: "/software/macos/lattice",
                  },
                  {
                    text: "Taskheat 1.8.16 MAS 流程图任务管理",
                    link: "/software/macos/taskheat",
                  },
                  {
                    text: "BatteryBoi 2.4.1 菜单栏电池指示器",
                    link: "/software/macos/batteryboi",
                  },
                  {
                    text: "AnyDrop 1.4 文本文件集成处理",
                    link: "/software/macos/anydrop",
                  },
                  {
                    text: "FotoJet Designer 1.2.0 MAS 平面制图设计",
                    link: "/software/macos/fotojet-designer-mac",
                  },
                  {
                    text: "FotoJet Photo Editor 1.0.7 MAS 图像编辑处理",
                    link: "/software/macos/fotojet-photo-editor-mac",
                  },
                  {
                    text: "WaterMinder 4.3 健康喝水提醒",
                    link: "/software/macos/waterminder",
                  },
                  {
                    text: "UninstallPKG 1.2.1 PKG文件清理",
                    link: "/software/macos/uninstallpkg",
                  },
                  {
                    text: "VideoDuke 2.14.760 视频解析下载",
                    link: "/software/macos/videoduke",
                  },
                  {
                    text: "uBar 4.2.2 程序坞修改美化",
                    link: "/software/macos/ubar",
                  },
                  {
                    text: "Get Backup Pro 3.7.3 数据同步备份",
                    link: "/software/macos/get-backup-pro",
                  },
                  {
                    text: "EXIF Sync 1.9.5 图片元数据同步处理",
                    link: "/software/macos/exif-sync",
                  },
                  {
                    text: "Corel Painter 2023 23.0.0.352 美术绘图设计",
                    link: "/software/macos/corel-painter-mac",
                  },
                  {
                    text: "MenuBar Stats 3.9 MAS 系统进程监控管理",
                    link: "/software/macos/menubar-stats",
                  },
                  {
                    text: "Export for iTunes 3.5 MAS 音乐文件管理",
                    link: "/software/macos/export-for-itunes",
                  },
                  {
                    text: "Vectorize! 1.1 MAS 矢量图转换",
                    link: "/software/macos/vectorize",
                  },
                  {
                    text: "Screenium 3.3.4 MAS 屏幕录像编辑",
                    link: "/software/macos/screenium",
                  },
                  {
                    text: "iFinance 4.5.23 MAS 财务管理",
                    link: "/software/macos/ifinance",
                  },
                  {
                    text: "Sharks 3D 2.1.0 MAS 3D海底鲨鱼动态壁纸",
                    link: "/software/macos/sharks-3d",
                  },
                  {
                    text: "Record It Pro 1.7.6 4K超清屏幕录像编辑",
                    link: "/software/macos/record-it-pro",
                  },
                  {
                    text: "Pro Mouse 1.10 鼠标光标标记增强",
                    link: "/software/macos/pro-mouse",
                  },
                  {
                    text: "PhotoBulk 2.6 图片批量压缩处理",
                    link: "/software/macos/photobulk",
                  },
                  {
                    text: "PCalc 4.10.8 MAS 科学计算器",
                    link: "/software/macos/pcalc",
                  },
                  {
                    text: "Outside 4.0 MAS 天气预报",
                    link: "/software/macos/outside",
                  },
                  {
                    text: "oneSafe 2.4.0 MAS 密码管理器",
                    link: "/software/macos/onesafe",
                  },
                  {
                    text: "Numi 3.32 mini文本计算器",
                    link: "/software/macos/numi",
                  },
                  {
                    text: "Notability 4.4.4 MAS 多功能笔记注释",
                    link: "/software/macos/notability",
                  },
                  {
                    text: "Noizio 2.1.0 MAS 环境白噪音模拟",
                    link: "/software/macos/noizio",
                  },
                  {
                    text: "Neural Mix Pro 1.1.1 MAS 音乐实时分离",
                    link: "/software/macos/neural-mix-pro",
                  },
                  {
                    text: "Logo Art 1.0.5 MAS 矢量绘图设计",
                    link: "/software/macos/logo-art",
                  },
                  {
                    text: "CDRConverter 1.3 MAS CDR文件批量转换",
                    link: "/software/macos/cdrconverter",
                  },
                  {
                    text: "Vezer 1.8.9 视频实时控制",
                    link: "/software/macos/vezer",
                  },
                  {
                    text: "Swift Publisher 5.6.9 版面编辑设计",
                    link: "/software/macos/swift-publisher",
                  },
                  {
                    text: "Steinberg HALion 7.0.20 虚拟采样与声音合成",
                    link: "/software/macos/steinberg-halion-mac",
                  },
                  {
                    text: "PlistEdit Pro 1.9.7 Plist文件编辑器",
                    link: "/software/macos/plistedit-pro",
                  },
                  {
                    text: "iZotope VocalSynth Pro 2.6.1 电音人声效果合成插件",
                    link: "/software/macos/izotope-vocalsynth-pro-mac",
                  },
                  {
                    text: "iZotope Nectar Advanced 4.0.1 人声混音",
                    link: "/software/macos/izotope-nectar-advanced-mac",
                  },
                  {
                    text: "SmartSynchronize 4.4.4 文件/文件夹对比",
                    link: "/software/macos/smartsynchronize-mac",
                  },
                  {
                    text: "Mountain Duck 4.15.0.21616 FTP/SFTP连接管理",
                    link: "/software/macos/mountain-duck-mac",
                  },
                  {
                    text: "Launch Bar 1.0.4 MAS 一键快速启动软件",
                    link: "/software/macos/launch-bar",
                  },
                  {
                    text: "Native Instruments Massive X 1.4.4 音乐低音合成插件",
                    link: "/software/macos/native-instruments-massive-x-mac",
                  },
                  {
                    text: "Boris FX Mocha Pro for Avid 2023 10.0.4.41 平面跟踪摄像机反求插件",
                    link: "/software/macos/boris-fx-mocha-pro-for-avid-mac",
                  },
                  {
                    text: "ConceptDraw PROJECT 14.0.0.302 项目管理",
                    link: "/software/macos/conceptdraw-project-mac",
                  },
                  {
                    text: "ConceptDraw OFFICE 10.0.0 绘图/思维导图/项目管理",
                    link: "/software/macos/conceptdraw-office-mac",
                  },
                  {
                    text: "ConceptDraw MINDMAP 15.0.0.296 思维导图",
                    link: "/software/macos/conceptdraw-mindmap-mac",
                  },
                  {
                    text: "ConceptDraw DIAGRAM 17.0.0.468 商业绘图设计",
                    link: "/software/macos/conceptdraw-diagram-mac",
                  },
                  {
                    text: "iStatistica Pro 5.2 系统诊断与硬件监控",
                    link: "/software/macos/istatistica-pro",
                  },
                  {
                    text: "Apple Remote Desktop 3.9.7 MAS 远程桌面控制",
                    link: "/software/macos/apple-remote-desktop",
                  },
                  {
                    text: "我的节拍器My Metronome 1.3.9 MAS 专业练耳节拍计数器",
                    link: "/software/macos/my-metronome",
                  },
                  {
                    text: "MacFamilyTree 10.2.2 MAS 家谱族谱制作",
                    link: "/software/macos/macfamilytree",
                  },
                  {
                    text: "Adobe XD 57.1.12.2 UI/UX界面设计与原型交互",
                    link: "/software/macos/adobe-xd-mac",
                  },
                  {
                    text: "必剪 3.3.11 视频编辑处理",
                    link: "/software/macos/bcut-mac",
                  },
                  {
                    text: "SoundSource 5.6.3 音频控制输出",
                    link: "/software/macos/soundsource",
                  },
                  {
                    text: "Clash for Windows 0.20.39 网络代理客户端",
                    link: "/software/macos/clash-for-windows-mac",
                  },
                  {
                    text: "Scudo 3.0.4 防火墙软件",
                    link: "/software/macos/scudo",
                  },
                  {
                    text: "Mela 2.3.1 MAS 食谱菜谱管理",
                    link: "/software/macos/mela",
                  },
                  {
                    text: "Scrivener 3.3.6 写作编辑",
                    link: "/software/macos/scrivener-mac",
                  },
                  {
                    text: "Micro Snitch 1.6.1 摄像头与麦克风使用监控",
                    link: "/software/macos/micro-snitch",
                  },
                  {
                    text: "Fluent Reader 1.1.4 RSS阅读器",
                    link: "/software/macos/fluent-reader-mac",
                  },
                  {
                    text: "Wondershare Filmora 12.4.3.24 万兴神剪手视频编辑器",
                    link: "/software/macos/wondershare-filmora-mac",
                  },
                  {
                    text: "TextSniper 1.10.1 OCR文字识别",
                    link: "/software/macos/textsniper",
                  },
                  {
                    text: "LilyView 1.6 MAS 无边框图片浏览器",
                    link: "/software/macos/lilyview",
                  },
                  {
                    text: "Gemini 2.9.11 重复文件查找与清理",
                    link: "/software/macos/gemini",
                  },
                  {
                    text: "JDownloader 2.0.220930 多线程直链下载器",
                    link: "/software/macos/jdownloader-mac",
                  },
                  {
                    text: "iWall 6.0.0 MAS 4K高清动态壁纸",
                    link: "/software/macos/iwall",
                  },
                  {
                    text: "Grid 1.4 软件窗口管理",
                    link: "/software/macos/grid",
                  },
                  {
                    text: "Gifox Pro 2.2.5 GIF动态图录制",
                    link: "/software/macos/gifox-pro",
                  },
                  {
                    text: "Earth 3D 8.1.2 MAS 3D智能地球仪",
                    link: "/software/macos/earth-3d",
                  },
                  {
                    text: "CrystalFetch 2.1.0 Windows ESD镜像下载",
                    link: "/software/macos/crystalfetch",
                  },
                  {
                    text: "ColorFolder 1.1.1 MAS 文件夹图标颜色修改",
                    link: "/software/macos/colorfolder",
                  },
                  {
                    text: "Artpaper 3.0.5 MAS 5K高清艺术壁纸",
                    link: "/software/macos/artpaper",
                  },
                  {
                    text: "Workspaces 2.1.3 高效率文件管理",
                    link: "/software/macos/workspaces",
                  },
                  {
                    text: "TeaCode 1.1 快速编写代码",
                    link: "/software/macos/teacode",
                  },
                  {
                    text: "ScreenFocus 1.1 多屏专注效率",
                    link: "/software/macos/screenfocus",
                  },
                  {
                    text: "NoteApp 1.1 笔记编辑管理",
                    link: "/software/macos/noteapp",
                  },
                  {
                    text: "FiveNotes 2.3 菜单栏文本速记",
                    link: "/software/macos/fivenotes",
                  },
                  {
                    text: "Expressions 1.3.6 代码编辑器",
                    link: "/software/macos/expressions",
                  },
                  {
                    text: "AirServer 7.2.6 AirPlay无线投屏",
                    link: "/software/macos/airserver",
                  },
                  {
                    text: "Cinebench 2024.0 CPU性能基准测试",
                    link: "/software/macos/cinebench-mac",
                  },
                  {
                    text: "Rekordbox Premium 5.8.6.0004 DJ音乐管理",
                    link: "/software/macos/rekordbox-mac",
                  },
                  {
                    text: "Almighty 2.6.0 菜单栏多合一开关功能合集",
                    link: "/software/macos/almighty",
                  },
                  {
                    text: "Audio Editor 3.6.2 MAS 音频编辑处理",
                    link: "/software/macos/audio-editor",
                  },
                  {
                    text: "OmmWriter 1.67 MAS 免打扰写作编辑",
                    link: "/software/macos/ommwriter",
                  },
                  {
                    text: "Family Tree Maker 2019 24.2.2.560 家谱族谱制作",
                    link: "/software/macos/family-tree-maker",
                  },
                  {
                    text: "Pocket Yoga Teacher 13.0.0 MAS 瑜伽教学",
                    link: "/software/macos/pocket-yoga-teacher",
                  },
                  {
                    text: "DVDFab All-In-One 12.0.8.2 DVD复制转换",
                    link: "/software/macos/dvdfab-mac",
                  },
                  {
                    text: "Lungo 2.4.2 MAS 防止系统休眠或屏幕变暗",
                    link: "/software/macos/lungo",
                  },
                  {
                    text: "Reeder 5.4 MAS RSS阅读管理",
                    link: "/software/macos/reeder",
                  },
                  {
                    text: "Fission 2.8.5 简易版音频编辑制作",
                    link: "/software/macos/fission",
                  },
                  {
                    text: "KeepingYouAwake 1.6.5 定时阻止系统睡眠",
                    link: "/software/macos/keepingyouawake",
                  },
                  {
                    text: "Fantastical 3.8.4 菜单栏日历",
                    link: "/software/macos/fantastical",
                  },
                  {
                    text: "Hackintool 4.0.3 黑苹果驱动参数查看",
                    link: "/software/macos/hackintool",
                  },
                  {
                    text: "WidsMob AI Retoucher 3.17 MAS AI照片编辑器",
                    link: "/software/macos/widsmob-ai-retoucher-mac",
                  },
                  {
                    text: "Nigate 1.2 NTFS磁盘挂载读写",
                    link: "/software/macos/nigate",
                  },
                  {
                    text: "Memory Cleaner 5.2.1 系统内存清理",
                    link: "/software/macos/memory-cleaner",
                  },
                  {
                    text: "Softorino YouTube Converter PRO 5.1.9 YouTube视频下载",
                    link: "/software/macos/softorino-youtube-converter-pro",
                  },
                  {
                    text: "Perfino 4.1 Java 性能监控分析",
                    link: "/software/macos/perfino-mac",
                  },
                  {
                    text: "Image Tricks Pro 3.9.6 照片编辑处理",
                    link: "/software/macos/image-tricks-pro",
                  },
                  {
                    text: "iZotope Neutron Advanced 4.5.0 智能中子混音插件",
                    link: "/software/macos/izotope-neutron-advanced-mac",
                  },
                  {
                    text: "LRTimelapse Pro 6.5.2 延迟摄影后期渲染",
                    link: "/software/macos/lrtimelapse-pro-mac",
                  },
                  {
                    text: "Dozer 4.2.0 菜单栏图标隐藏管理",
                    link: "/software/macos/dozer",
                  },
                  {
                    text: "The Foundry Mari 4.7v7 3D纹理绘画设计",
                    link: "/software/macos/the-foundry-mari-mac",
                  },
                  {
                    text: "WinX DVD Ripper 6.8.0 DVD视频格式转换",
                    link: "/software/macos/winx-dvd-ripper-mac",
                  },
                  {
                    text: "WinX HD Video Converter 6.7.3 高清视频格式转换",
                    link: "/software/macos/winx-hd-video-converter-mac",
                  },
                  {
                    text: "Tracktion Waveform Pro 11.0.26 波形数字音频编辑制作",
                    link: "/software/macos/tracktion-waveform-pro-mac",
                  },
                  {
                    text: "MOTU Digital Performer 9.52.76360 数字音频编辑制作",
                    link: "/software/macos/motu-digital-performer-mac",
                  },
                  {
                    text: "Folder Tidy 2.9.2 桌面文件整理",
                    link: "/software/macos/folder-tidy",
                  },
                  {
                    text: "PCDJ DEX Pro 3.20.7 DJ打碟混音",
                    link: "/software/macos/pcdj-dex-pro-mac",
                  },
                  {
                    text: "MonitorControl 4.2.0 屏幕亮度与音量调节",
                    link: "/software/macos/monitorcontrol",
                  },
                  {
                    text: "ClashX Pro 1.118.0.1 网络代理客户端",
                    link: "/software/macos/clashx-pro",
                  },
                  {
                    text: "Clip Studio Paint EX 2.1.4 CSP漫画绘图设计",
                    link: "/software/macos/clip-studio-paint-ex-mac",
                  },
                  {
                    text: "PDFify 3.8.1 PDF编辑阅读器",
                    link: "/software/macos/pdfify",
                  },
                  {
                    text: "WebToLayers 1.4.0 将网页转换为PSD文件",
                    link: "/software/macos/webtolayers",
                  },
                  {
                    text: "MediBang Paint Pro 29.1 漫画插画绘图设计",
                    link: "/software/macos/medibang-paint-pro-mac",
                  },
                  {
                    text: "Exposure Blow Up 3.1.6.0 PS/LR图片无损放大插件",
                    link: "/software/macos/exposure-blow-up-mac",
                  },
                  {
                    text: "QuickRedis 2.7.1 Redis可视化管理",
                    link: "/software/macos/quickredis-mac",
                  },
                  {
                    text: "OpenAI Translator 0.0.68 AI实时划词翻译",
                    link: "/software/macos/openai-translator-mac",
                  },
                  {
                    text: "BingGPT 0.3.7 新必应AI聊天",
                    link: "/software/macos/binggpt-mac",
                  },
                  {
                    text: "洋芋田图像工具箱 3.5.1 图片批量处理",
                    link: "/software/macos/potatofield-imagetoolkit-mac",
                  },
                  {
                    text: "Packages 1.2.11 PKG安装包制作",
                    link: "/software/macos/packages",
                  },
                  {
                    text: "iZotope Insight Pro 2.4.0 音频分析与母带混音插件",
                    link: "/software/macos/izotope-insight-pro-mac",
                  },
                  {
                    text: "Iris Pro 1.2.2 屏幕护眼与蓝光过滤",
                    link: "/software/macos/iris-pro-mac",
                  },
                  {
                    text: "Beamer 4.1.17 TV流媒体视频播放器",
                    link: "/software/macos/beamer",
                  },
                  {
                    text: "Aechoterm 4.0.1 终端模拟器/SSH客户端",
                    link: "/software/macos/aechoterm-mac",
                  },
                  {
                    text: "Reveal 41 iOS界面UI开发调试",
                    link: "/software/macos/reveal",
                  },
                  {
                    text: "VNote 3.17.0 Markdown写作编辑",
                    link: "/software/macos/vnote-mac",
                  },
                  {
                    text: "CAD迷你看图 4.4.2 CAD看图软件",
                    link: "/software/macos/minicadsee-mac",
                  },
                  {
                    text: "Website Watchman 3.3.1 网站内容监控",
                    link: "/software/macos/website-watchman",
                  },
                  {
                    text: "WebScraper 4.15.6 网站数据提取",
                    link: "/software/macos/webscraper",
                  },
                  {
                    text: "Querious 3.3.2 MySQL数据库管理开发",
                    link: "/software/macos/querious",
                  },
                  {
                    text: "EagleFiler 1.9.12 文件信息管理",
                    link: "/software/macos/eaglefiler",
                  },
                  {
                    text: "WALTR PRO 4.0.115 iPhone文件同步",
                    link: "/software/macos/waltr-pro",
                  },
                  {
                    text: "PicFindr 1.4.1 图片查找器",
                    link: "/software/macos/picfindr",
                  },
                  {
                    text: "iRingg 4.0.16 iPhone铃声制作",
                    link: "/software/macos/iringg",
                  },
                  {
                    text: "Folder Colorizer 4.7.2 文件夹着色器",
                    link: "/software/macos/folder-colorizer",
                  },
                  {
                    text: "HistoryHound 2.3.2 网页浏览记录搜索",
                    link: "/software/macos/historyhound",
                  },
                  {
                    text: "Dinosaur Rss 1.10.1 RSS阅读管理",
                    link: "/software/macos/dinosaur-rss-mac",
                  },
                  {
                    text: "Energiza Pro 1.3.0 电池健康充电保护管理",
                    link: "/software/macos/energiza-pro",
                  },
                  {
                    text: "Xojo 2023 R1.1 23.1.1.59845 可视化编程开发",
                    link: "/software/macos/xojo-mac",
                  },
                  {
                    text: "iThoughtsX 9.4 MAS 思维导图",
                    link: "/software/macos/ithoughts-mac",
                  },
                  {
                    text: "X Djing 2.1.6 MAS DJ派对音乐制作",
                    link: "/software/macos/x-djing",
                  },
                  {
                    text: "LaunchControl 2.4 后台服务进程管理",
                    link: "/software/macos/launchcontrol",
                  },
                  {
                    text: "GoToFile 1.10.2 文件搜索查找",
                    link: "/software/macos/gotofile",
                  },
                  {
                    text: "BackupLoupe 3.9 数据备份还原",
                    link: "/software/macos/backuploupe",
                  },
                  {
                    text: "Ammonite 1.23.1 标签可视化搜索",
                    link: "/software/macos/ammonite",
                  },
                  {
                    text: "Sleep Aid 1.3 诊断Mac睡眠电池消耗",
                    link: "/software/macos/sleep-aid",
                  },
                  {
                    text: "ApowerMirror 1.4.11 MAS 傲软投屏",
                    link: "/software/macos/apowermirror-mac",
                  },
                  {
                    text: "Diagrams 2.3.4 MAS 图表编辑器",
                    link: "/software/macos/diagrams",
                  },
                  {
                    text: "PP鸭PPDuck 3.10.16 图片压缩神器",
                    link: "/software/macos/ppduck",
                  },
                  {
                    text: "EaseUS Data Recovery Wizard Pro 13.8.5 易我数据恢复软件",
                    link: "/software/macos/easeus-data-recovery-wizard-mac",
                  },
                  {
                    text: "MacMagic 1.2.0 系统垃圾清理",
                    link: "/software/macos/macmagic",
                  },
                  {
                    text: "Display Maestro 5.0.3 显示器分辨率优化",
                    link: "/software/macos/display-maestro",
                  },
                  {
                    text: "AirRadar 7.4 无线WiFi搜索管理",
                    link: "/software/macos/airradar",
                  },
                  {
                    text: "Airy Pro 3.28 YouTube视频下载器",
                    link: "/software/macos/airy-pro-mac",
                  },
                  {
                    text: "Rottenwood 1.3 电影收藏影评",
                    link: "/software/macos/rottenwood",
                  },
                  {
                    text: "Tableau Desktop Professional 2022.1.2 可视化数据分析",
                    link: "/software/macos/tableau-desktop-professional-mac",
                  },
                  {
                    text: "Serato Studio 2.0.6 +Packs 音频节拍制作",
                    link: "/software/macos/serato-studio-mac",
                  },
                  {
                    text: "Serato DJ Pro Suite 3.0.10 DJ混音制作",
                    link: "/software/macos/serato-dj-pro-suite-mac",
                  },
                  {
                    text: "Movavi HD Screen Recorder 2023 23.1.1 MAS 屏幕录像编辑",
                    link: "/software/macos/movavi-screen-recorder-mac",
                  },
                  {
                    text: "Imagine 0.7.5 PNG与JPEG图片压缩",
                    link: "/software/macos/imagine-mac",
                  },
                  {
                    text: "TopNotch 1.3.2 屏幕刘海变黑隐藏",
                    link: "/software/macos/topnotch",
                  },
                  {
                    text: "GoodNotes 5.9.112 MAS 手写笔记软件",
                    link: "/software/macos/goodnotes",
                  },
                  {
                    text: "PixelSnap 2.5.4 屏幕间距测量",
                    link: "/software/macos/pixelsnap",
                  },
                  {
                    text: "Xnip Pro 2.2.3 MAS 截图标注",
                    link: "/software/macos/xnip-pro",
                  },
                  {
                    text: "Super Vectorizer Pro 2.3.3 MAS 位图矢量转换",
                    link: "/software/macos/super-vectorizer-pro",
                  },
                  {
                    text: "Super PhotoCut Pro 2.8.8 MAS 图片AI智能抠图",
                    link: "/software/macos/super-photocut-pro",
                  },
                  {
                    text: "Super Eraser Pro 2.5.1 图片多余对象擦除",
                    link: "/software/macos/super-eraser-pro",
                  },
                  {
                    text: "Super-AI Photo Enlarger 2.0.1 MAS 模糊照片AI无损放大",
                    link: "/software/macos/super-ai-photo-enlarger",
                  },
                  {
                    text: "Photo Art Filters DeepStyle 1.0.2 MAS 照片艺术滤镜",
                    link: "/software/macos/photo-art-filters-deepstyle",
                  },
                  {
                    text: "Image Optimizer Pro 2.8 MAS 图片无损压缩",
                    link: "/software/macos/image-optimizer-pro",
                  },
                  {
                    text: "壁纸专家4K Wallpaper 2.6 MAS 4K高清壁纸",
                    link: "/software/macos/4k-wallpaper",
                  },
                  {
                    text: "Minim 3.1.6.1 MAS Safari脚本拦截插件",
                    link: "/software/macos/minim",
                  },
                  {
                    text: "SessionRestore 2.7.4 MAS Safari浏览器进程恢复插件",
                    link: "/software/macos/sessionrestore",
                  },
                  {
                    text: "CLO Standalone 7.0.242.39887 3D可视化服装设计",
                    link: "/software/macos/clo-standalone-mac",
                  },
                  {
                    text: "AI Photo 1.13 MAS 文字转图像AI智能输出",
                    link: "/software/macos/ai-photo",
                  },
                  {
                    text: "QR Factory 3.3.6 生成二维码",
                    link: "/software/macos/qr-factory",
                  },
                  {
                    text: "Disk Diet 5.5.1 磁盘空间清理",
                    link: "/software/macos/disk-diet",
                  },
                  {
                    text: "Bill Boss 1.2.2 账单预算跟踪记录",
                    link: "/software/macos/bill-boss",
                  },
                  {
                    text: "Monit 0.8.1 桌面小组件",
                    link: "/software/macos/monit-mac",
                  },
                  {
                    text: "Magic Battery Mini 4.2.5 MAS 显示电池电量",
                    link: "/software/macos/magic-battery-mini",
                  },
                  {
                    text: "ON1 Photo Keyword AI 2023.5 17.5.1.14079 图片AI搜索管理",
                    link: "/software/macos/on1-photo-keyword-ai-mac",
                  },
                  {
                    text: "ON1 Sky Swap AI 2023.5 17.5.1.14051 图片AI天空替换处理",
                    link: "/software/macos/on1-sky-swap-ai-mac",
                  },
                  {
                    text: "Moment Pro 1.4 菜单栏倒数日通知",
                    link: "/software/macos/moment-pro",
                  },
                  {
                    text: "Velja 1.15.2 一键切换默认浏览器",
                    link: "/software/macos/velja",
                  },
                  {
                    text: "Speediness 1.6.1 网速检测",
                    link: "/software/macos/speediness",
                  },
                  {
                    text: "System Color Picker 1.13.1 颜色选择器",
                    link: "/software/macos/system-color-picker",
                  },
                  {
                    text: "Black Out 2.3.1 MAS 隐藏图片中的敏感信息",
                    link: "/software/macos/black-out",
                  },
                  {
                    text: "Touch Bar Simulator 4.2.0 任何地方打开Touch Bar",
                    link: "/software/macos/touch-bar-simulator",
                  },
                  {
                    text: "Superkey 1.19 键盘键位增强",
                    link: "/software/macos/superkey",
                  },
                  {
                    text: "HighTop 1.3.4 快速搜索文件与浏览访问",
                    link: "/software/macos/hightop",
                  },
                  {
                    text: "Hyperkey 0.22 键盘改键位",
                    link: "/software/macos/hyperkey",
                  },
                  {
                    text: "HEIC Converter 3.1.0 HEIC图片转换为JPEG或PNG",
                    link: "/software/macos/heic-converter",
                  },
                  {
                    text: "Plash 2.13.5 让任何网站成为桌面壁纸",
                    link: "/software/macos/plash",
                  },
                  {
                    text: "Umbra 1.3.0 为浅色和深色外观指定桌面壁纸",
                    link: "/software/macos/umbra",
                  },
                  {
                    text: "Thunder Video Converter Pro 5.5 MAS 闪电视频转换器Pro",
                    link: "/software/macos/thunder-video-converter-pro",
                  },
                  {
                    text: "SignFlow 1.1.1 MAS eSign签署与PDF电子签名",
                    link: "/software/macos/signflow",
                  },
                  {
                    text: "Shredo 1.2.8.2 文件粉碎机",
                    link: "/software/macos/shredo",
                  },
                  {
                    text: "PlayOnMac 4.4.4 类虚拟机运行Windows软件",
                    link: "/software/macos/playonmac",
                  },
                  {
                    text: "ScrollReverser 1.8.2 反向滚动鼠标与触控板",
                    link: "/software/macos/scrollreverser",
                  },
                  {
                    text: "RapidClick 1.5.1 MAS 鼠标自动点击",
                    link: "/software/macos/rapidclick",
                  },
                  {
                    text: "DwellClick 2.2.4 模拟鼠标点击",
                    link: "/software/macos/dwellclick",
                  },
                  {
                    text: "VSD Viewer 6.16.1 Visio文件绘图阅读",
                    link: "/software/macos/vsd-viewer",
                  },
                  {
                    text: "Text Scanner 1.6.8 MAS 文字识别/截图翻译",
                    link: "/software/macos/text-scanner",
                  },
                  {
                    text: "SmoothScroll 1.6.0 鼠标增强",
                    link: "/software/macos/smoothscroll-mac",
                  },
                  {
                    text: "iZotope Neoverb Pro 1.3.0 智能音乐混响插件",
                    link: "/software/macos/izotope-neoverb-pro-mac",
                  },
                  {
                    text: "JetBrains AppCode 2023.1.4 Objective-C/Swift集成开发环境",
                    link: "/software/macos/jetbrains-appcode",
                  },
                  {
                    text: "Wondershare EdrawProject 3.0.2 亿图项目管理/甘特图",
                    link: "/software/macos/wondershare-edrawproject-mac",
                  },
                  {
                    text: "Hyper 4.0.0 canary 5 命令行终端美化模拟器",
                    link: "/software/macos/hyper-mac",
                  },
                  {
                    text: "Network & Battery 13.1.0 MAS 实时网速查看及电池健康",
                    link: "/software/macos/network-battery",
                  },
                  {
                    text: "Picsee Pro 1.6.4 MAS 图片收集与照片管理",
                    link: "/software/macos/picsee-pro",
                  },
                  {
                    text: "AntiCC 5.9 最低要求安装Adobe Mac软件",
                    link: "/software/macos/anticc",
                  },
                  {
                    text: "Volume Maximizer 1.0.1 MAS 声音增强调节",
                    link: "/software/macos/volume-maximizer",
                  },
                  {
                    text: "Music Paradise Player 1.3.2 MAS MP3音频播放增强",
                    link: "/software/macos/music-paradise-player",
                  },
                  {
                    text: "Witch 4.5.2 软件窗口切换",
                    link: "/software/macos/witch",
                  },
                  {
                    text: "Usher 2.2.1 影片库管理",
                    link: "/software/macos/usher",
                  },
                  {
                    text: "Time Sink 2.2.3 时间跟踪管理",
                    link: "/software/macos/time-sink",
                  },
                  {
                    text: "Resolutionator 2.3 屏幕分辨率调整",
                    link: "/software/macos/resolutionator",
                  },
                  {
                    text: "Keymou 1.2.10 鼠标光标控制与移动定位",
                    link: "/software/macos/keymou",
                  },
                  {
                    text: "Desktop Curtain 3.1.3 桌面图标隐藏",
                    link: "/software/macos/desktop-curtain",
                  },
                  {
                    text: "AnyDroid 7.5.0.20230626 安卓数据传输管理",
                    link: "/software/macos/anydroid-mac",
                  },
                  {
                    text: "set.a.light 3D STUDIO 2.5.9 3D摄影棚模拟布光",
                    link: "/software/macos/set-a-light-3d-studio-mac",
                  },
                  {
                    text: "macOS 小助手 1.3.3 Mac常用命令集合",
                    link: "/software/macos/macos-assistant",
                  },
                  {
                    text: "FontBook 5.3.1 字体管理",
                    link: "/software/macos/fontbook",
                  },
                  {
                    text: "Theine 3.6 MAS 防止系统休眠或调暗屏幕",
                    link: "/software/macos/theine",
                  },
                  {
                    text: "Mirror Magnet 1.3 MAS 实时摄像头",
                    link: "/software/macos/mirror-magnet",
                  },
                  {
                    text: "Keystroke Pro 1.0.1 MAS 虚拟按键可视化",
                    link: "/software/macos/keystroke-pro",
                  },
                  {
                    text: "Entity Pro 1.5 MAS Unicode字形查找器",
                    link: "/software/macos/entity-pro",
                  },
                  {
                    text: "Cursor Pro 2.4 MAS 鼠标指针高亮放大",
                    link: "/software/macos/cursor-pro",
                  },
                  {
                    text: "Couverture 1.1.6 MAS 动画增强软件",
                    link: "/software/macos/couverture",
                  },
                  {
                    text: "Color UI 2.3 MAS 颜色选择器",
                    link: "/software/macos/color-ui",
                  },
                  {
                    text: "Aspect Ratio X 2.1.8 MAS 三分法计算器",
                    link: "/software/macos/aspect-ratio",
                  },
                  {
                    text: "Netler 2.0 MAS 网络状态监测",
                    link: "/software/macos/netler",
                  },
                  {
                    text: "DiskSight 3.0 MAS 磁盘空间分析清理",
                    link: "/software/macos/disksight",
                  },
                  {
                    text: "Red Giant Shooter Suite 13.1.11 红巨星镜头修复插件套装",
                    link: "/software/macos/red-giant-shooter-suite-mac",
                  },
                  {
                    text: "Red Giant PluralEyes 4.1.11 音视频同步调整",
                    link: "/software/macos/red-giant-pluraleyes-mac",
                  },
                  {
                    text: "Red Giant Keying Suite 11.1.11 红巨星动态视频特效插件套装",
                    link: "/software/macos/red-giant-keying-suite-mac",
                  },
                  {
                    text: "Red Giant Effects Suite 11.1.13 红巨星动态视频特效插件套装",
                    link: "/software/macos/red-giant-effects-suite-mac",
                  },
                  {
                    text: "ON1 HDR 2023.5 17.5.1.14051 HDR图像处理",
                    link: "/software/macos/on1-hdr-mac",
                  },
                  {
                    text: "ON1 Portrait AI 2023.5 17.5.1.14051 智能AI人像处理",
                    link: "/software/macos/on1-portrait-ai-mac",
                  },
                  {
                    text: "ON1 Resize AI 2023.5 17.5.1.14051 图片无损缩放",
                    link: "/software/macos/on1-resize-ai-mac",
                  },
                  {
                    text: "Art Text 4.3.1 艺术字体图标设计",
                    link: "/software/macos/art-text",
                  },
                  {
                    text: "HyperDock 1.8.0.10 软件窗口管理",
                    link: "/software/macos/hyperdock",
                  },
                  {
                    text: "Hello Ai Chat 1.2.0 MAS 与AI聊天",
                    link: "/software/macos/hello-ai-chat",
                  },
                  {
                    text: "Filmage Screen 1.4.7 屏幕录像编辑",
                    link: "/software/macos/filmage-screen",
                  },
                  {
                    text: "Filmage Editor 1.3.7 音视频编辑处理",
                    link: "/software/macos/filmage-editor",
                  },
                  {
                    text: "Filmage Converter 1.2.2 音视频格式转换器",
                    link: "/software/macos/filmage-converter",
                  },
                  {
                    text: "FE File Explorer Pro 3.4.2 MAS 文件管理器",
                    link: "/software/macos/fe-file-explorer-pro",
                  },
                  {
                    text: "Aerate Pro 2.0.1 图片批量压缩",
                    link: "/software/macos/aerate-pro",
                  },
                  {
                    text: "BetterSnapTool 1.9.9 MAS 软件窗口管理",
                    link: "/software/macos/bettersnaptool",
                  },
                  {
                    text: "探狐文案 2.9.3 MAS 文章润色改写",
                    link: "/software/macos/aicopy",
                  },
                  {
                    text: "解优 2 1.6.1 MAS 解压缩软件",
                    link: "/software/macos/bestzip-2",
                  },
                  {
                    text: "和风天气 1.1.1 MAS 可视化全球天气",
                    link: "/software/macos/qweather",
                  },
                  {
                    text: "Grids for Instagram 8.5.9 Instagram图片客户端",
                    link: "/software/macos/grids-for-instagram-mac",
                  },
                  {
                    text: "比译 0.5.0 划词/截图翻译与词典",
                    link: "/software/macos/biyi-mac",
                  },
                  {
                    text: "赤友右键超人 3.0 右键菜单管理",
                    link: "/software/macos/iboysoft-magic-menu",
                  },
                  {
                    text: "StarUML 5.1.0 UML建模设计",
                    link: "/software/macos/staruml-mac",
                  },
                  {
                    text: "SmartPLS 3.2.9 模型统计分析",
                    link: "/software/macos/smartpls-mac",
                  },
                  {
                    text: "Xfer Records Serum & SerumFX 1.35b8 音频波形合成插件",
                    link: "/software/macos/xfer-records-serum-serumfx-mac",
                  },
                  {
                    text: "Xfer Records LFOTool 1.768 音频低频振荡插件",
                    link: "/software/macos/xfer-records-lfotool-mac",
                  },
                  {
                    text: "Xfer Records Cthulhu 1.216 音乐和弦制作插件",
                    link: "/software/macos/xfer-records-cthulhu-mac",
                  },
                  {
                    text: "Exposure Snap Art 4.1.4.0 PS手绘滤镜插件",
                    link: "/software/macos/exposure-snap-art-mac",
                  },
                  {
                    text: "SubLab XL 1.0.2 808低音合成器插件",
                    link: "/software/macos/sublab-xl-mac",
                  },
                  {
                    text: "SubLab 1.1.9 808低音合成插件",
                    link: "/software/macos/sublab-mac",
                  },
                  {
                    text: "Circle² 2.2.1 音频效果合成器",
                    link: "/software/macos/circle-mac",
                  },
                  {
                    text: "Vital Audio Vital Pro 1.5.5 频谱波表合成器",
                    link: "/software/macos/vital-audio-vital-pro-mac",
                  },
                  {
                    text: "Wallpaper Wizard 2.2.0 壁纸精灵",
                    link: "/software/macos/wallpaper-wizard",
                  },
                  {
                    text: "Exe4j 9.0 Java程序打包与部署",
                    link: "/software/macos/exe4j-mac",
                  },
                  {
                    text: "Gridea 0.9.3 静态博客Markdown写作编辑",
                    link: "/software/macos/gridea-mac",
                  },
                  {
                    text: "SwitchHosts! 4.2.0.6105 hosts文件编辑",
                    link: "/software/macos/switchhosts-mac",
                  },
                  {
                    text: "Gifski 2.22.3 视频转换为GIF动图",
                    link: "/software/macos/gifski",
                  },
                  {
                    text: "Bitwig Studio 5.0.4 音频编辑处理",
                    link: "/software/macos/bitwig-studio-mac",
                  },
                  {
                    text: "Navicat Premium Essentials 16.1.10 多连接数据库管理开发",
                    link: "/software/macos/navicat-premium-essentials-mac",
                  },
                  {
                    text: "Motrix 1.8.19 直链BT磁链下载器",
                    link: "/software/macos/motrix-mac",
                  },
                  {
                    text: "CCompare 1.16.3 文件/文件夹对比",
                    link: "/software/macos/ccompare-mac",
                  },
                  {
                    text: "Hasleo NTFS for Mac 4.8 NTFS磁盘挂载读写",
                    link: "/software/macos/hasleo-ntfs-for-mac",
                  },
                  {
                    text: "ArcTime Pro 3.1 可视化视频字幕编辑",
                    link: "/software/macos/arctime-pro-mac",
                  },
                  {
                    text: "XAMPP 8.2.4 Apache服务开发环境配置",
                    link: "/software/macos/xampp-mac",
                  },
                  {
                    text: "WidsMob Montage 3.26 MAS 将图片变成马赛克与蒙太奇效果",
                    link: "/software/macos/widsmob-montage-mac",
                  },
                  {
                    text: "Topaz DeNoise AI 3.7.2 AI图片智能降噪",
                    link: "/software/macos/topaz-denoise-ai-mac",
                  },
                  {
                    text: "Toontrack EZmix 2.2.4 音频混音效果",
                    link: "/software/macos/toontrack-ezmix-mac",
                  },
                  {
                    text: "Toontrack EZdrummer 3.0.6 +Core Library 虚拟鼓音乐制作",
                    link: "/software/macos/toontrack-ezdrummer-mac",
                  },
                  {
                    text: "Serviio Pro 2.3.1 DLNA媒体投屏",
                    link: "/software/macos/serviio-pro-mac",
                  },
                  {
                    text: "Luminar AI 1.5.5.13797 AI图像编辑处理",
                    link: "/software/macos/luminar-ai-mac",
                  },
                  {
                    text: "Luminar 4.3.5 fix 图像后期编辑处理",
                    link: "/software/macos/luminar-mac",
                  },
                  {
                    text: "Aurora HDR 2019 1.0.2.6495 HDR图像编辑处理",
                    link: "/software/macos/aurora-hdr-mac",
                  },
                  {
                    text: "NxShell 1.9.3 终端模拟器/SSH客户端",
                    link: "/software/macos/nxshell-mac",
                  },
                  {
                    text: "Foxmail 1.5.8 邮件收发管理",
                    link: "/software/macos/foxmail-mac",
                  },
                  {
                    text: "F.lux 42.1 屏幕护眼与蓝光过滤",
                    link: "/software/macos/flux-mac",
                  },
                  {
                    text: "ExpanDrive 2023.4.1 FTP/SFTP连接管理",
                    link: "/software/macos/expandrive-mac",
                  },
                  {
                    text: "空气日历 1.9 MAS 菜单栏日历日程",
                    link: "/software/macos/aircalendar",
                  },
                  {
                    text: "Perfectly Clear QuickDesk & QuickServer 4.2.0.2485 照片批量校正处理",
                    link: "/software/macos/perfectly-clear-quickdesk-quickserver-mac",
                  },
                  {
                    text: "CopyTranslator 11.0.0 外语复制即翻译",
                    link: "/software/macos/copytranslator-mac",
                  },
                  {
                    text: "PR全套插件一键安装包Pro 1.2 PR2020全套汉化插件",
                    link: "/software/macos/pr-plugins-suite-mac",
                  },
                  {
                    text: "滴答清单TickTick Pro 2.6.50 事务清单管理",
                    link: "/software/macos/ticktick-mac",
                  },
                  {
                    text: "恒星播放器 2.510.66 全格式高清4K视频播放器",
                    link: "/software/macos/stellarplayer-mac",
                  },
                  {
                    text: "1Password 7.9.4 密码管理器",
                    link: "/software/macos/1password-mac",
                  },
                  {
                    text: "Omi NTFS磁盘管理助手 1.1.4 MAS NTFS磁盘读写管理",
                    link: "/software/macos/omi-ntfs-disk",
                  },
                  {
                    text: "快下 1.1.9 视频解析下载",
                    link: "/software/macos/vdown",
                  },
                  {
                    text: "自动切换输入法专业版 2.2.2 MAS 自动切换中英文输入法",
                    link: "/software/macos/autoswitchinput-pro",
                  },
                  {
                    text: "Pap.er 5.3.0 5K高清壁纸",
                    link: "/software/macos/paper",
                  },
                  {
                    text: "WidsMob WebP 1.3.1 WebP图片查看与转换",
                    link: "/software/macos/widsmob-webp-mac",
                  },
                  {
                    text: "WidsMob Viewer Pro 2.19 MAS 照片管理查看",
                    link: "/software/macos/widsmob-viewer-pro-mac",
                  },
                  {
                    text: "WidsMob Portrait Pro 4.10 MAS 人像照片编辑处理",
                    link: "/software/macos/widsmob-portrait-pro-mac",
                  },
                  {
                    text: "WidsMob PhotoVault 3.9 照片加密管理",
                    link: "/software/macos/widsmob-photovault-mac",
                  },
                  {
                    text: "WidsMob Panorama 4.28 MAS 全景图像拼接",
                    link: "/software/macos/widsmob-panorama-mac",
                  },
                  {
                    text: "WidsMob MediaServer 2.5 将Mac变成UPnP多媒体服务器",
                    link: "/software/macos/widsmob-mediaserver",
                  },
                  {
                    text: "WidsMob ImageConvert 3.25 MAS 图片格式转换",
                    link: "/software/macos/widsmob-imageconvert-mac",
                  },
                  {
                    text: "WidsMob HDR 3.20 MAS 照片光照渲染效果处理",
                    link: "/software/macos/widsmob-hdr-mac",
                  },
                  {
                    text: "WidsMob Denoise 2.18 MAS 多功能图像降噪",
                    link: "/software/macos/widsmob-denoise-mac",
                  },
                  {
                    text: "XDown 2.0.2.3 多线程种子下载器",
                    link: "/software/macos/xdown-mac",
                  },
                  {
                    text: "WebTorrent 0.24.0 BT种子在线播放",
                    link: "/software/macos/webtorrent-mac",
                  },
                  {
                    text: "McAfee Endpoint Security 10.7.5.266 迈克菲防病毒查杀",
                    link: "/software/macos/mcafee-endpoint-security-mac",
                  },
                  {
                    text: "VideoScribe Pro 3.7.3103 手绘动画制作",
                    link: "/software/macos/videoscribe-pro-mac",
                  },
                  {
                    text: "Vector Magic 1.20 矢量图转换",
                    link: "/software/macos/vector-magic-mac",
                  },
                  {
                    text: "Topaz Studio 2.3.2 AI创意照片编辑",
                    link: "/software/macos/topaz-studio-mac",
                  },
                  {
                    text: "Topaz Sharpen AI 3.2.2 AI图片清晰度锐化增强",
                    link: "/software/macos/topaz-sharpen-ai-mac",
                  },
                  {
                    text: "Topaz Mask AI 1.3.9 AI智能抠图",
                    link: "/software/macos/topaz-mask-ai-mac",
                  },
                  {
                    text: "Topaz JPEG to RAW AI 2.2.1 JPEG转高质量RAW",
                    link: "/software/macos/topaz-jpeg-to-raw-ai-mac",
                  },
                  {
                    text: "Topaz Adjust AI 1.0.6 HDR图片滤镜渲染增强",
                    link: "/software/macos/topaz-adjust-ai-mac",
                  },
                  {
                    text: "Tickeys 1.1.0 定制键盘敲击音效",
                    link: "/software/macos/tickeys-mac",
                  },
                  {
                    text: "Thief 4.0.0 上班摸鱼神器",
                    link: "/software/macos/thief-mac",
                  },
                  {
                    text: "SPlayer 4.9.4 射手影音视频播放器",
                    link: "/software/macos/splayer-mac",
                  },
                  {
                    text: "Sidify DeeKeep Deezer Music Converter 1.0.3 Deezer音乐转换器",
                    link: "/software/macos/sidify-deekeep-deezer-music-converter-mac",
                  },
                  {
                    text: "Sidify Tidabie Tidal Music Converter 1.4.4 Tidal Music转换器",
                    link: "/software/macos/sidify-tidabie-tidal-music-converter-mac",
                  },
                  {
                    text: "Sidify Music Converter 2.3.3 Spotify Music转换器",
                    link: "/software/macos/sidify-music-converter-mac",
                  },
                  {
                    text: "Sidify Apple Music Converter 3.5.3 Apple Music转换器",
                    link: "/software/macos/sidify-apple-music-converter-mac",
                  },
                  {
                    text: "Resolume Avenue 6.1.2.62262 VJ调试",
                    link: "/software/macos/resolume-avenue-mac",
                  },
                  {
                    text: "QuickCut 1.6.1.0 视频编辑处理",
                    link: "/software/macos/quickcut-mac",
                  },
                  {
                    text: "PhotoScape X Pro 4.2.1 MAS 图像编辑处理",
                    link: "/software/macos/photoscape-x-pro-mac",
                  },
                  {
                    text: "PhoneRescue for Android 3.8.0.20221129 Android数据恢复",
                    link: "/software/macos/phonerescue-for-android-mac",
                  },
                  {
                    text: "PhoneClean Pro 5.6.1.20221206 iPhone/iPad系统优化清理",
                    link: "/software/macos/phoneclean-pro-mac",
                  },
                  {
                    text: "Pano2VR Pro 6.0.1 3D全景图像制作",
                    link: "/software/macos/pano2vr-pro-mac",
                  },
                  {
                    text: "NeatDownloadManager 1.3.24 多线程直链下载器",
                    link: "/software/macos/neatdownloadmanager-mac",
                  },
                  {
                    text: "MovieMator Video Editor Pro 3.2.0 MAS 剪大师专业版-视频编辑",
                    link: "/software/macos/moviemator-video-editor-pro-mac",
                  },
                  {
                    text: "Movavi Video Suite 2022 22.4.1 多媒体编辑处理套件",
                    link: "/software/macos/movavi-video-suite-mac",
                  },
                  {
                    text: "Movavi Video Editor Plus 2022 22.4.1 视频编辑处理",
                    link: "/software/macos/movavi-video-editor-mac",
                  },
                  {
                    text: "Movavi Video Converter 22 Premium 22.5.0 音视频格式转换",
                    link: "/software/macos/movavi-video-converter-mac",
                  },
                  {
                    text: "Movavi Slideshow Maker 8.0.1 MAS 幻灯片制作",
                    link: "/software/macos/movavi-slideshow-maker-mac",
                  },
                  {
                    text: "Movavi Picverse 1.11.0 图像AI编辑处理",
                    link: "/software/macos/movavi-picverse-mac",
                  },
                  {
                    text: "Movavi PDFChef 2022 22.2.0 PDF编辑器",
                    link: "/software/macos/movavi-pdfchef-mac",
                  },
                  {
                    text: "Movavi PDF Editor 3.2.1 PDF编辑器",
                    link: "/software/macos/movavi-pdf-editor-mac",
                  },
                  {
                    text: "Movavi Photo Editor 23.0.3 MAS 照片编辑处理",
                    link: "/software/macos/movavi-photo-editor-mac",
                  },
                  {
                    text: "Movavi HD Video Converter 22.1.1 MAS 视频格式转换器",
                    link: "/software/macos/movavi-hd-video-converter",
                  },
                  {
                    text: "Movavi Academic 2022 22.0.0 教育课程录制编辑",
                    link: "/software/macos/movavi-academic-mac",
                  },
                  {
                    text: "Memocast 2.2.3 为知笔记编辑器",
                    link: "/software/macos/memocast-mac",
                  },
                  {
                    text: "MarkText 0.17.1 Markdown写作编辑",
                    link: "/software/macos/marktext-mac",
                  },
                  {
                    text: "KeeWeb 1.18.7 密码管理器",
                    link: "/software/macos/keeweb-mac",
                  },
                  {
                    text: "JixiPix Simply HDR 3.2.15 HDR照片合成",
                    link: "/software/macos/jixipix-simply-hdr-mac",
                  },
                  {
                    text: "JixiPix Romantic Photo 2.3.5 图片浪漫写真特效",
                    link: "/software/macos/jixipix-romantic-photo-mac",
                  },
                  {
                    text: "JixiPix Portrait Painter 1.37 照片转油画效果",
                    link: "/software/macos/jixipix-portrait-painter-mac",
                  },
                  {
                    text: "JixiPix Pop Dot Comics 2.14 照片转漫画",
                    link: "/software/macos/jixipix-pop-dot-comics-mac",
                  },
                  {
                    text: "JixiPix Hand Tint Pro 1.0.19 图片调色修图",
                    link: "/software/macos/jixipix-hand-tint-pro-mac",
                  },
                  {
                    text: "JixiPix Artoon 1.11.0 照片转漫画",
                    link: "/software/macos/jixipix-artoon-mac",
                  },
                  {
                    text: "JixiPix Aquarella 1.38 图片转水彩画",
                    link: "/software/macos/jixipix-aquarella-mac",
                  },
                  {
                    text: "iZotope Vocal Doubler 1.2.0 声音倍增插件",
                    link: "/software/macos/izotope-vocal-doubler-mac",
                  },
                  {
                    text: "iZotope Stutter Edit 2.1.0 MIDI缓冲效果控制插件",
                    link: "/software/macos/izotope-stutter-edit-mac",
                  },
                  {
                    text: "iZotope BreakTweaker 1.02c 音频节拍器插件",
                    link: "/software/macos/izotope-breaktweaker-mac",
                  },
                  {
                    text: "iZotope Audiolens 1.1.0 音频音轨比较",
                    link: "/software/macos/izotope-audiolens-mac",
                  },
                  {
                    text: "InPixio Photo Cutter 1.5.92 数码照片抠图",
                    link: "/software/macos/inpixio-photo-cutter-mac",
                  },
                  {
                    text: "InPixio Photo Editor 1.1.31 照片滤镜编辑处理",
                    link: "/software/macos/inpixio-photo-editor-mac",
                  },
                  {
                    text: "InPixio Photo Eraser 1.1.24 照片橡皮擦转场特效",
                    link: "/software/macos/inpixio-photo-eraser-mac",
                  },
                  {
                    text: "iExplorer 4.6.0 iOS设备管理器",
                    link: "/software/macos/iexplorer-mac",
                  },
                  {
                    text: "SnapGene 5.3.1 DNA序列生物分析",
                    link: "/software/macos/snapgene-mac",
                  },
                  {
                    text: "future.dj pro 1.11.3 DJ混音软件",
                    link: "/software/macos/future-dj-pro-mac",
                  },
                  {
                    text: "FlowJo 10.4.0 流式细胞分析",
                    link: "/software/macos/flowjo-mac",
                  },
                  {
                    text: "FastGithub 2.1.4 GitHub加速神器",
                    link: "/software/macos/fastgithub-mac",
                  },
                  {
                    text: "Exposure Eye Candy 7.2.3.189 PS眼睛糖果滤镜插件",
                    link: "/software/macos/exposure-eye-candy-mac",
                  },
                  {
                    text: "DevSidecar 1.7.3 开发者边车辅助",
                    link: "/software/macos/devsidecar-mac",
                  },
                  {
                    text: "CrossFTP Enterprise 1.99.9 FTP/SFTP客户端",
                    link: "/software/macos/crossftp-enterprise-mac",
                  },
                  {
                    text: "CorelCAD 2023 2022.5 Build 22.3.1.4090 CAD绘图设计",
                    link: "/software/macos/corelcad-mac",
                  },
                  {
                    text: "CCleaner Professional 1.18.30 系统优化清理",
                    link: "/software/macos/ccleaner-professional-mac",
                  },
                  {
                    text: "BoostNote 0.23.1 程序员笔记记录",
                    link: "/software/macos/boostnote-mac",
                  },
                  {
                    text: "Boom 2 1.6.13 MAS 系统音效增强",
                    link: "/software/macos/boom-2",
                  },
                  {
                    text: "BilibiliVideoDownload 3.3.3 Bilibili视频下载",
                    link: "/software/macos/bilibilivideodownload-mac",
                  },
                  {
                    text: "Atom 1.60.0 代码编辑器",
                    link: "/software/macos/atom-mac",
                  },
                  {
                    text: "ATLAS.ti 8.4.4 定性数据分析",
                    link: "/software/macos/atlasti-mac",
                  },
                  {
                    text: "Perfectly Clear Essentials 3.8.0.1684 LR/PS图像清晰化处理",
                    link: "/software/macos/perfectly-clear-essentials-mac",
                  },
                  {
                    text: "Perfectly Clear Complete 3.12.2.2045 摄影照片后期处理",
                    link: "/software/macos/perfectly-clear-complete-mac",
                  },
                  {
                    text: "Artlantis 2021.2 9.5.2.32853 3D建筑设计渲染",
                    link: "/software/macos/artlantis-mac",
                  },
                  {
                    text: "AI配音专家XZVoice 2.1.1 文字转语音",
                    link: "/software/macos/xzvoice-mac",
                  },
                  {
                    text: "Agisoft Metashape Professional 1.7.1.11791 多视点三维建模设计",
                    link: "/software/macos/agisoft-metashape-professional-mac",
                  },
                  {
                    text: "小画桌 1.0.0 在线协同办公",
                    link: "/software/macos/xiaohuazhuo-mac",
                  },
                  {
                    text: "云日历 1.08 待办事项与日历提醒",
                    link: "/software/macos/mytime-mac",
                  },
                  {
                    text: "图压 0.4.1 图片批量压缩",
                    link: "/software/macos/tuya-mac",
                  },
                  {
                    text: "QQ小助手 3.3 消息防撤回/自动抢红包/自动回复消息",
                    link: "/software/macos/qqredpackhelper",
                  },
                  {
                    text: "搜狗五笔输入法 1.4.0.148",
                    link: "/software/macos/sogouwbinput-mac",
                  },
                  {
                    text: "幕享 1.1.0.3 无线投屏",
                    link: "/software/macos/letsview-mac",
                  },
                  {
                    text: "火萤视频桌面 1.2.2 MAS 动态视频壁纸",
                    link: "/software/macos/huoying-video-desktop-mac",
                  },
                  {
                    text: "多多投屏 0.1.20 电视投屏",
                    link: "/software/macos/easy-to-tv-mac",
                  },
                  {
                    text: "WindoWizard 1.0.3 软件窗口管理",
                    link: "/software/macos/windowizard",
                  },
                  {
                    text: "uPic 0.21.1 图床上传",
                    link: "/software/macos/upic",
                  },
                  {
                    text: "Toast Titanium 17.4 DVD光盘刻录",
                    link: "/software/macos/toast-titanium",
                  },
                  {
                    text: "SnailSVN专业版 1.10 MAS 集成访达的SVN客户端",
                    link: "/software/macos/snailsvn-pro",
                  },
                  {
                    text: "Silicon 1.0.5 检查mac应用是否适配Apple ARM64芯片",
                    link: "/software/macos/silicon",
                  },
                  {
                    text: "Pock 0.9.0.22 Touch Bar触控栏显示Dock图标",
                    link: "/software/macos/pock",
                  },
                  {
                    text: "PD Runner 0.3.8 PD启动器/PD虚拟机无限试用",
                    link: "/software/macos/pd-runner",
                  },
                  {
                    text: "Mos 3.4.1 鼠标平滑滚动",
                    link: "/software/macos/mos",
                  },
                  {
                    text: "Micro Sniff 1.2.0 麦克风监测提醒",
                    link: "/software/macos/micro-sniff",
                  },
                  {
                    text: "LyricsX 1.6.3 桌面显示歌词",
                    link: "/software/macos/lyricsx",
                  },
                  { text: "Kap 3.6.0 屏幕录像", link: "/software/macos/kap" },
                  {
                    text: "Hidden Bar 1.9 菜单栏图标隐藏管理",
                    link: "/software/macos/hidden-bar",
                  },
                  {
                    text: "快切fastApp 1.0.1 软件窗口快速切换",
                    link: "/software/macos/fastapp",
                  },
                  {
                    text: "DaFileShare 1.1 局域网文件共享",
                    link: "/software/macos/dafileshare",
                  },
                  {
                    text: "macOS Server 5.12.2 MAS 将macOS电脑变为服务器",
                    link: "/software/macos/macos-server",
                  },
                  {
                    text: "Boop 1.4.0 编程开发辅助",
                    link: "/software/macos/boop",
                  },
                  {
                    text: "Blurred 1.2.0 降低非活动窗口亮度",
                    link: "/software/macos/blurred",
                  },
                  {
                    text: "All Windows Appear 1.2.8 MAS 一键显示所有软件窗口",
                    link: "/software/macos/all-windows-appear",
                  },
                  {
                    text: "Adware Zap Browser Cleaner 2.8.3 MAS 广告拦截清理",
                    link: "/software/macos/adware-zap-browser-cleaner",
                  },
                  {
                    text: "AClock 2.8 MAS 翻页时钟屏保",
                    link: "/software/macos/aclock",
                  },
                  {
                    text: "蓝牙解锁 1.0.3 MAS 使用蓝牙/WiFi快速解锁",
                    link: "/software/macos/autolock",
                  },
                  {
                    text: "喵基金 1.0.6 MAS 状态栏查看基金涨跌",
                    link: "/software/macos/miaojijin",
                  },
                  {
                    text: "安卓文件传输 1.0.12 安卓数据传输软件",
                    link: "/software/macos/android-file-transfer",
                  },
                  {
                    text: "24 Hour Wallpaper 5.0.1 MAS 4K动态壁纸",
                    link: "/software/macos/24-hour-wallpaper",
                  },
                  {
                    text: "Adobe Premiere Elements 2023.0 视频编辑合成",
                    link: "/software/macos/adobe-premiere-elements-mac",
                  },
                  {
                    text: "Adobe Photoshop Elements 2023.0 图像编辑处理",
                    link: "/software/macos/adobe-photoshop-elements-mac",
                  },
                  {
                    text: "Adobe Prelude 2021 10.1.0.92 视频元数据采集粗剪",
                    link: "/software/macos/adobe-prelude-mac",
                  },
                  {
                    text: "Adobe Dreamweaver 2021 21.3.0.15593 代码编辑器",
                    link: "/software/macos/adobe-dreamweaver-mac",
                  },
                  {
                    text: "Adobe Dimension 3.4.3.4022 3D渲染建模设计",
                    link: "/software/macos/adobe-dimension-mac",
                  },
                  {
                    text: "Adobe Zii 2022 7.0.0 Adobe软件一键激活工具",
                    link: "/software/macos/adobe-zii",
                  },
                  {
                    text: "MacBooster Pro 8.2.0.70880 系统优化清理",
                    link: "/software/macos/macbooster-pro",
                  },
                ],
              },
            ],
          },
          {
            text: "免费体验",
            link: "/fk-pay",
          },
          { text: "关于我们", link: "/about" },
        ],

        sidebar: {
          "/chat/": [
            {
              text: "聊天",
              items: [
                { text: "Free Open-gpt-4o", link: "/chat/open-gpt-4o" },
                { text: "Free Glm-4v-9b", link: "/chat/glm-4v-9b" },
                {
                  text: "Free Google-Gemma-2-9B",
                  link: "/chat/Google-Gemma-2-9B",
                },
                { text: "Free Gpt-3.5-turbo", link: "/chat/fastx-ai" },
                {
                  text: "Free Qwen2-7B-instruct",
                  link: "/chat/Qwen2-7B-instruct",
                },
                { text: "Free Meta-Llama-2-7B", link: "/chat/Meta-Llama-2-7B" },
                {
                  text: "Free Meta-Llama-2-13B",
                  link: "/chat/Meta-Llama-2-13B",
                },
                { text: "Free Meta-Llama-3-8B", link: "/chat/Meta-Llama-3-8B" },
                {
                  text: "Free IDEFICS2-Instruction",
                  link: "/chat/IDEFICS2-Instruction",
                },
              ],
            },
          ],
          "/draw/": [
            {
              text: "绘画",
              items: [
                {
                  text: "Free Stable Diffusion 3 Medium 1",
                  link: "/draw/stabilityai-stable-diffusion-3-medium",
                },
                {
                  text: "Free Stable Diffusion 3 Medium 2",
                  link: "/draw/markmagic-stable-diffusion-3",
                },
                { text: "Free DALLE-4K", link: "/draw/mukaist-dalle-4k" },
                { text: "Free Midjourney", link: "/draw/mukaist-midjourney" },
                {
                  text: "Free STABLE HAMSTER 🐹",
                  link: "/draw/prithivmlmods-stable-hamster",
                },
                {
                  text: "Free 卡通图片生成",
                  link: "/draw/cagliostrolab-animagine-xl-3-1",
                },
                {
                  text: "Free DALL-E 3 XL V2",
                  link: "/draw/ehristoforu-dalle-3-xl-lora-v2",
                },
                {
                  text: "FlashSD: StableDiffusion3 蒸馏模型",
                  link: "/draw/jasperai-flash-sd3",
                },
                {
                  text: "三要素图像合成（风格、人物、动作）",
                  link: "/draw/okaris-omni-zero",
                },
                {
                  text: "PixArt-Sigma 1024px",
                  link: "/draw/pixart-alpha-pixart-sigma",
                },
                {
                  text: "在线绘图 V2.5",
                  link: "/draw/playgroundai-playground-v2-5",
                },
                {
                  text: "GALLO 3XL在线绘图",
                  link: "/draw/prithivmlmods-gallo-3xl",
                },
                {
                  text: "Free 4K Image Generate",
                  link: "/draw/prithivmlmods-imagineo-4k",
                },
                {
                  text: "腾讯-混元绘图",
                  link: "/draw/tencent-hunyuan-hunyuandit",
                },
              ],
            },
          ],
          "/media/": [
            {
              text: "多媒体",
              items: [
                {
                  text: "视频翻译 SoniTranslate",
                  link: "/media/r3gm-sonitranslate-translate-audio-of-a-video-content",
                },
                { text: "图像高清放大", link: "/media/gokaygokay-aurasr" },
                {
                  text: "视频背景去除（永久免费）",
                  link: "/media/amirgame197-remove-video-background",
                },
                {
                  text: "图片背景去除（永久免费）",
                  link: "/media/schroneko-transparent-background",
                },
                {
                  text: "根据指令给视频添加背景音效",
                  link: "/media/ymzhang319-foleycrafter",
                },
                {
                  text: "文生音频 Stable Audio Generator",
                  link: "/media/artificialguybr-stable-audio-open-zero",
                },
                {
                  text: "文生音频 ChatTTS Forge",
                  link: "/media/lenml-chattts-forge",
                },
                {
                  text: "音频转文字 Whisper Large V3:  Transcribe Audio",
                  link: "/media/hf-audio-whisper-large-v3",
                },
                {
                  text: "文生视频 Open-Sora",
                  link: "/media/kadirnar-open-sora",
                },
                {
                  text: "文生视频 AnimateDiff-Lightning",
                  link: "/media/bytedance-animatediff-lightning",
                },
                {
                  text: "文生视频 Adaface animate",
                  link: "/media/adaface-neurips-adaface-animate",
                },
                {
                  text: "文生视频 Animagine XL 3.0",
                  link: "/media/linaqruf-animagine-xl",
                },
                {
                  text: "图生视频 Stable Video Diffusion Img2Vid",
                  link: "/media/xi0v-stable-video-diffusion-img2vid",
                },
                {
                  text: "视频内容分析 VideoLLaMA 2",
                  link: "/media/lixin4ever-videollama2",
                },
                { text: "腾讯头像制作", link: "/media/tencentarc-photomaker" },
                {
                  text: "Face to All 头像制作",
                  link: "/media/multimodalart-face-to-all",
                },
                { text: "图像内容识别", link: "/media/gokaygokay-florence-2" },
                {
                  text: "图片内容识别（多模态源信息）",
                  link: "/media/epfl-vilab-4m",
                },
                {
                  text: "IC-Light 修改图片光源",
                  link: "/media/lllyasviel-ic-light",
                },
                {
                  text: "图片提取prompt，并转换成线条图",
                  link: "/media/tori29umai-sketch2lineart",
                },
                {
                  text: "图片景深计算",
                  link: "/media/depth-anything-depth-anything-v2",
                },
                { text: "视频景深计算", link: "/media/jhshao-chronodepth" },
                {
                  text: "按照提示词进行视频编辑",
                  link: "/media/koi953215-narcan-demo",
                },
                {
                  text: "获得详细的图片描述",
                  link: "/media/gokaygokay-sd3-long-captioner",
                },
                {
                  text: "生成 3D模型的全景视频（环绕一周）",
                  link: "/media/ashawkey-lgm",
                },
                {
                  text: "根据图片生成GLB格式的3D模型",
                  link: "/media/wuvin-unique3d",
                },
                {
                  text: "卡通视频生成（2秒）",
                  link: "/media/doubiiu-tooncrafter",
                },
                {
                  text: "图生视频（4秒）",
                  link: "/media/modelscope-exvideo-svd-128f-v1",
                },
                {
                  text: "图生视频（3秒）AnimateLCM",
                  link: "/media/wangfuyun-animatelcm-svd",
                },
                { text: "混图 PuLID", link: "/media/yanze-pulid" },
                {
                  text: "去除 3D 图片背景，并生成 3D （多视角）模型",
                  link: "/media/tencentarc-instantmesh",
                },
                { text: "音频生成 AICoverGen", link: "/media/r3gm-aicovergen" },
                {
                  text: "图片转音频",
                  link: "/media/fffiloni-image-to-music-v2",
                },
                {
                  text: "IP-Adapter-FaceID Plus",
                  link: "/media/multimodalart-ip-adapter-faceid",
                },
              ],
            },
          ],
          "/tool/": [
            {
              text: "工具",
              items: [
                {
                  text: "屏幕截图转HTML",
                  link: "/tool/huggingfacem4-screenshot2html",
                },
                {
                  text: "AI 换衣 OOTDiffusion",
                  link: "/tool/levihsu-ootdiffusion",
                },
                { text: "AI 换衣", link: "/tool/yisol-idm-vton" },
                { text: "视频转VR", link: "/tool/koi953215-diffir2vr" },
                {
                  text: "Emoji 生成",
                  link: "/tool/cfahlgren1-emoji-generator-by-fofr",
                },
                {
                  text: "指令预训练",
                  link: "/tool/davanstrien-instruction-synthesizer",
                },
                { text: "数学解题专家", link: "/tool/tonic-math" },
                {
                  text: "开源大模型排行榜",
                  link: "/tool/open-llm-leaderboard-open-llm-leaderboard",
                },
                { text: "m3u8在线转换mp4下载", link: "/tool/m3u8-mp4" },
              ],
            },
          ],
          "/api-key/": [
            {
              text: "API Key",
              items: [],
            },
          ],
          "/software/": [
            {
              text: "Windows",
              items: [
                { text: 'Zettlr 3.2.0 论文Markdown写作编辑', link: '/software/windows/zettlr-win' },
                { text: 'OfficeSuite Premium 8.70.56193 Office 办公套件', link: '/software/windows/officesuite-premium' },
                { text: 'PMLite 1.1.2.2 图像校正漂白', link: '/software/windows/pmlite' },
                { text: 'Remote Desktop Manager Enterprise 2024.1.32.0 远程桌面连接管理', link: '/software/windows/remote-desktop-manager-enterprise-win' },
                { text: 'MAGIX Video Pro X16 22.0.1.219 视频编辑处理', link: '/software/windows/magix-video-pro' },
                { text: 'JetBrains WebStorm 2024.1.4 JavaScript集成开发环境', link: '/software/windows/jetbrains-webstorm-win' },
                { text: 'JetBrains RubyMine 2024.1.3 Rails/Ruby集成开发环境', link: '/software/windows/jetbrains-rubymine-win' },
                { text: 'JetBrains Rider 2024.1.3 .NET集成开发环境', link: '/software/windows/jetbrains-rider-win' },
                { text: 'JetBrains PyCharm Pro 2024.1.3 Python集成开发环境', link: '/software/windows/jetbrains-pycharm-pro-win' },
                { text: 'JetBrains PhpStorm 2024.1.3 PHP集成开发环境', link: '/software/windows/jetbrains-phpstorm-win' },
                { text: 'JetBrains IntelliJ IDEA Ultimate 2024.1.3 Java集成开发环境', link: '/software/windows/jetbrains-intellij-idea-ultimate-win' },
                { text: 'JetBrains GoLand 2024.1.3 Go语言集成开发环境', link: '/software/windows/jetbrains-goland-win' },
                { text: 'JetBrains DataGrip 2024.1.4 多引擎数据库管理开发', link: '/software/windows/jetbrains-datagrip-win' },
                { text: 'JetBrains CLion 2024.1.3 C/C++集成开发环境', link: '/software/windows/jetbrains-clion-win' },
                { text: 'GeoGebra Classic 6.0.845.0 动态数学绘图', link: '/software/windows/geogebra-classic-win' },
                { text: 'EssentialPIM Pro Business 12.0.1 个人信息管理', link: '/software/windows/essentialpim-pro-business' },
                { text: 'CudaText 1.214.7.2 代码编辑器', link: '/software/windows/cudatext-win' },
                { text: 'Adobe Camera Raw 16.3.1 Adobe滤镜增效处理插件', link: '/software/windows/adobe-camera-raw-win' },
                { text: 'XYplorer 26.10.0000 多标签文件管理器', link: '/software/windows/xyplorer' },
                { text: 'UniFab All-In-One 2.0.2.3 视频AI压缩转换处理', link: '/software/windows/unifab' },
                { text: 'StreamFab All-In-One 6.1.8.2 全能视频解析下载', link: '/software/windows/streamfab' },
                { text: 'Radiant Photo 1.3.1.451 +扩展插件 图像AI增强修饰', link: '/software/windows/radiant-photo' },
                { text: 'QOwnNotes 24.6.1 笔记记录与待办事项', link: '/software/windows/qownnotes-win' },
                { text: 'PilotEdit Pro 18.8.0 文本代码编辑器', link: '/software/windows/pilotedit-pro' },
                { text: 'Paperlib 3.1.5 论文文献管理', link: '/software/windows/paperlib-win' },
                { text: 'Obsidian 1.6.3 卡片笔记编辑管理', link: '/software/windows/obsidian-win' },
                { text: 'Maplesoft Maple 2024.1 数学科学计算', link: '/software/windows/maplesoft-maple-win' },
                { text: 'OneCommander Pro 3.83.0.0 双窗口文件管理器', link: '/software/windows/onecommander-pro' },
                { text: 'NetLimiter Pro 5.3.14.0 网络监控管理', link: '/software/windows/netlimiter-pro' },
                { text: 'Lumenzia 11.7.7 PS亮度蒙版插件', link: '/software/windows/lumenzia' },
                { text: 'Maxthon 7.1.9.4200 Beta 傲游浏览器', link: '/software/windows/maxthon-win' },
                { text: 'Koodo Reader 1.6.7 Epub电子书阅读', link: '/software/windows/koodo-reader-win' },
                { text: 'Firefox 127.0 火狐浏览器', link: '/software/windows/firefox-win' },
                { text: '欧路词典 13.6.4 英语词典翻译查询', link: '/software/windows/eudic-win' },
                { text: 'EaseUS Video Editor Pro 2.2.0 视频编辑处理', link: '/software/windows/easeus-video-editor' },
                { text: 'DVDFab All-In-One 13.0.1.9 DVD复制转换', link: '/software/windows/dvdfab-win' },
                { text: 'DBeaver Ultimate 24.1.0 数据库连接管理', link: '/software/windows/dbeaver-ultimate-win' },
                { text: 'BricsCAD Ultimate 24.2.05 2D与3D CAD建模设计', link: '/software/windows/bricscad-ultimate-win' },
                { text: 'Bootstrap Studio 6.7.1 响应式网页设计', link: '/software/windows/bootstrap-studio-win' },
                { text: 'Anki 24.06.2 辅助记忆学习', link: '/software/windows/anki-win' },
                { text: 'Android Studio 2023.3.1.20 Android集成开发环境', link: '/software/windows/android-studio-win' },
                { text: 'Agisoft Metashape Professional 2.1.2.18315 多视点三维建模设计', link: '/software/windows/agisoft-metashape-professional-win' },
                { text: 'Adobe Substance 3D Sampler 4.4.1.4591 图片转3D素材软件', link: '/software/windows/adobe-substance-3d-sampler-win' },
                { text: '3DF Zephyr 7.529 图片转3D模型', link: '/software/windows/3df-zephyr' },
                { text: 'Fort Firewall 3.13.0 防火墙软件', link: '/software/windows/fort-firewall' },
                { text: 'Araxis Merge Professional 2024.5981 文件/文件夹对比', link: '/software/windows/araxis-merge-professional-win' },
                { text: 'Simlab Composer 12.0.34 3D场景建模渲染', link: '/software/windows/simlab-composer' },
                { text: 'EaseUS Todo Backup Enterprise 16.2.0 数据备份恢复', link: '/software/windows/easeus-todo-backup' },
                { text: 'UltraSearch Pro 4.2.0.925 文件搜索查找', link: '/software/windows/ultrasearch-pro' },
                { text: 'AI Video FaceSwap 1.0.0 视频AI识别换脸', link: '/software/windows/ai-video-faceswap' },
                { text: 'Wipit 1.0.0 视频与图片AI去水印', link: '/software/windows/wipit' },
                { text: 'Wondershare Repairit 5.5.9.9 万兴修复-音频/视频/图片/文件损坏修改', link: '/software/windows/wondershare-repairit-win' },
                { text: 'QQ浏览器 13.0.6015.400 Beta 去广告精简版', link: '/software/windows/qqbrowser' },
                { text: 'Topaz Gigapixel AI 7.2.1 AI图片无损缩放', link: '/software/windows/topaz-gigapixel-ai-win' },
                { text: 'OBS Studio 30.2.0 Beta1 直播视频录像', link: '/software/windows/obs-studio-win' },
                { text: 'Enpass 6.11.1 密码管理器', link: '/software/windows/enpass-win' },
                { text: 'Effie 3.9.3 Markdown写作编辑', link: '/software/windows/effie-win' },
                { text: 'Easy Sysprep 5.6.2404.10309 Beta 10 Win系统封装部署', link: '/software/windows/easysyspre' },
                { text: 'Billfish 3.1.5.12 图像管理查看', link: '/software/windows/billfish-win' },
                { text: 'Apifox 2.5.30 API接口调试', link: '/software/windows/apifox-win' },
                { text: 'WYSIWYG Web Builder 19.2.2 可视化网页设计', link: '/software/windows/wysiwyg-web-builder' },
                { text: 'Windows Manager 2.0.1 系统优化清理', link: '/software/windows/windows-manager' },
                { text: 'Topaz Video AI 5.1.2 AI视频无损缩放增强', link: '/software/windows/topaz-video-ai-win' },
                { text: 'Serviio Pro 2.4.0 DLNA媒体投屏', link: '/software/windows/serviio-pro-win' },
                { text: 'Proxyman 2.15.0 网络协议抓包调试', link: '/software/windows/proxyman-win' },
                { text: 'Microsoft Edge 125.0.2535.92', link: '/software/windows/microsoft-edge-win' },
                { text: 'MusicFab All-In-One 1.0.3.7 全能音乐下载转换', link: '/software/windows/musicfab' },
                { text: 'LightBulb 2.5.3 屏幕护眼与亮度自动调节', link: '/software/windows/lightbulb' },
                { text: 'MOTU Digital Performer 11.32.95761 数字音频编辑制作', link: '/software/windows/motu-digital-performer-win' },
                { text: '雷电安卓模拟器LDPlayer 9.0.72.5 去广告精简版', link: '/software/windows/ldplayer' },
                { text: 'iZotope RX 11 Audio Editor Advanced 11.1.0 音频降噪修复增强', link: '/software/windows/izotope-rx-advanced-win' },
                { text: 'fHash 3.3.2 哈希值检测校验', link: '/software/windows/fhash-win' },
                { text: 'EaseUS Partition Master Technician 18.5.0 硬盘无损分区', link: '/software/windows/easeus-partition-master' },
                { text: 'draw.io 24.5.1 流程图绘制', link: '/software/windows/drawio-win' },
                { text: 'CyberLink PowerDirector Ultimate 2024 22.5.3003.0 威力导演视频编辑器', link: '/software/windows/cyberlink-powerdirector-ultimate' },
                { text: 'Cyber​​Link PhotoDirector Ultra 2024 15.5.1730.0 相片大师照片编辑', link: '/software/windows/cyberlink-photodirector-ultra' },
                { text: 'CleanFlash 34.0.0.315 第三方无广告Flash', link: '/software/windows/cleanflash' },
                { text: 'Cent Browser 5.1.1130.123 多手势的百分浏览器', link: '/software/windows/cent-browser' },
                { text: 'Boris FX Mocha Pro for OFX 2024 11.0.2.32 平面跟踪摄像机反求插件', link: '/software/windows/boris-fx-mocha-pro-for-ofx-win' },
                { text: 'Boris FX Mocha Pro for Adobe 2024 11.0.2.32 平面跟踪摄像机反求插件', link: '/software/windows/boris-fx-mocha-pro-for-adobe-win' },
                { text: 'Boris FX Mocha Pro 2024 11.0.2.32 平面跟踪摄像机反求', link: '/software/windows/boris-fx-mocha-pro-win' },
                { text: '哔哩助理Bili.Copilot 1.2406.2.0 哔哩哔哩UWP客户端', link: '/software/windows/bilicopilot' },
                { text: 'Ashampoo WinOptimizer 27.00.03 系统优化清理', link: '/software/windows/ashampoo-winoptimizer' },
                { text: 'ArchiCAD 27.2.1 Build 5030 BIM建筑信息3D建模', link: '/software/windows/archicad-win' },
                { text: 'Adobe Photoshop Lightroom Classic 13.3.1 照片后期处理', link: '/software/windows/adobe-photoshop-lightroom-classic-win' },
                { text: '腾讯QQ 9.9.11.240606', link: '/software/windows/qq-win' },
                { text: '360极速浏览器 X 22.3.3042.64 去广告精简版', link: '/software/windows/360chrome-win' },
                { text: 'Wondershare UniConverter 15.5.11.104 音视频转换/下载/无损压缩', link: '/software/windows/wondershare-uniconverter-win' },
                { text: 'Visual Studio Code 1.90.0 代码编辑器', link: '/software/windows/visual-studio-code-win' },
                { text: 'Tracktion Outersect Modeler 1.2.3 乐器建模合成器插件', link: '/software/windows/tracktion-outersect-modeler-win' },
                { text: 'Togu Audio Line TAL-J-8 1.8.4 单声道低音合成器插件', link: '/software/windows/togu-audio-line-tal-j-8-win' },
                { text: 'Sandboxie Plus 1.14.1 沙盒隔离环境', link: '/software/windows/sandboxie-plus' },
                { text: 'RayLink 8.0.6.8 远程桌面控制', link: '/software/windows/raylink-win' },
                { text: 'Postman 11.1.14 API接口调试', link: '/software/windows/postman-win' },
                { text: 'FontLab 8.4.0.8858 Beta 字体编辑设计', link: '/software/windows/fontlab-win' },
                { text: 'D16 Group Nithonat 2.0.0 606鼓机模拟器插件', link: '/software/windows/d16-group-nithonat-win' },
                { text: '不坑盒子 2024.0607 Office插件工具箱', link: '/software/windows/bkoffice' },
                { text: 'AppFlowy 0.5.9 笔记编辑管理', link: '/software/windows/appflowy-win' },
                { text: 'Another Redis Desktop Manager 1.6.6 Redis可视化管理', link: '/software/windows/another-redis-desktop-manager-win' },
                { text: '百度输入法 6.1.8.23', link: '/software/windows/baidu-input-win' },
                { text: 'WPS Office 12.1.0.16929 个人版 金山一站式Office办公套件', link: '/software/windows/wps-office-win' },
                { text: 'SimpleMind Pro 2.4.0.6481 思维导图', link: '/software/windows/simplemind-pro-win' },
                { text: 'Red Giant Universe 2024.3.0 红巨星视频特效插件套装', link: '/software/windows/red-giant-universe-win' },
                { text: 'Opera 110.0.5130.66 欧朋浏览器', link: '/software/windows/opera-win' },
                { text: 'LibreOffice 24.2.4 Office办公套件', link: '/software/windows/libreoffice-win' },
                { text: 'lanzouyun 3.4.9 第三方蓝奏云', link: '/software/windows/lanzouyun-win' },
                { text: 'FileMaker Pro 21.0.1.53 定制化App开发软件', link: '/software/windows/filemaker-pro-win' },
                { text: 'Allavsoft 3.27.2.8920 全能视频下载器', link: '/software/windows/allavsoft-win' },
                { text: 'Ableton Live 12 Suite 12.0.5 音乐创作与演奏分析', link: '/software/windows/ableton-live-suite-win' },
                { text: 'XnViewMP 1.7.2 图像管理查看', link: '/software/windows/xnviewmp-win' },
                { text: 'Wondershare PDFelement Professional 10.4.4.2766 +OCR 万兴PDF编辑器', link: '/software/windows/wondershare-pdfelement-professional-win' },
                { text: 'x64dbg 2024-06-03-21-20 反汇编逆向调试', link: '/software/windows/x64dbg' },
                { text: 'Wise Care 365 Pro 6.7.3.648 系统优化清理', link: '/software/windows/wise-care-365-pro' },
                { text: 'ShotCut 24.06.02 Beta 视频编辑器', link: '/software/windows/shotcut-win' },
                { text: 'PixPin 1.8.12.0 截图贴图标注', link: '/software/windows/pixpin' },
                { text: 'Native Instruments Kontakt 7.10.5 音频采样器', link: '/software/windows/native-instruments-kontakt-win' },
                { text: 'IObit Driver Booster Pro 11.5.0.83 硬件驱动更新管理', link: '/software/windows/iobit-driver-booster-pro' },
                { text: 'ESET Smart Security Premium 17.1.13.0 防病毒安全防护', link: '/software/windows/eset' },
                { text: 'EmuraSoft EmEditor Professional 24.2.1 代码编辑器', link: '/software/windows/emurasoft-emeditor-professional' },
                { text: 'Boris FX Silhouette 2024.0.0 视频特效与后期抠像', link: '/software/windows/boris-fx-silhouette-win' },
                { text: 'Ashampoo Music Studio 11.0.1 音频编辑处理', link: '/software/windows/ashampoo-music-studio' },
                { text: 'Affinity Publisher 2.5.2.2486 页面布局设计', link: '/software/windows/affinity-publisher-win' },
                { text: 'Affinity Designer 2.5.2.2486 矢量图形设计', link: '/software/windows/affinity-designer-win' },
                { text: 'Affinity Photo 2.5.2.2486 图像编辑设计', link: '/software/windows/affinity-photo-win' },
                { text: '微信 3.9.10.27', link: '/software/windows/wechat-win' },
                { text: '360安全卫士极速版 15.0.2.1032 防病毒安全防护', link: '/software/windows/360-total-security' },
                { text: '腾讯视频 11.95.4325.0 去广告精简版', link: '/software/windows/qqlive' },
                { text: 'Umi-OCR 2.1.2 离线OCR文字识别', link: '/software/windows/umi-ocr' },
                { text: 'Perfectly Clear WorkBench 4.6.1.2665 +扩展插件 图像清晰度处理', link: '/software/windows/perfectly-clear-workbench-win' },
                { text: 'TTime 0.9.12 划词翻译/截图翻译与截图OCR', link: '/software/windows/ttime-win' },
                { text: 'RustDesk 1.2.5 Beta 远程桌面控制', link: '/software/windows/rustdesk-win' },
                { text: 'Valentina Studio Pro 14.0.0 多连接数据库管理开发', link: '/software/windows/valentina-studio-pro-win' },
                { text: 'MKVToolNix 85.0 MKV视频处理', link: '/software/windows/mkvtoolnix-win' },
                { text: 'iTwin Capture Modeler 2024 Update 1.1 24.1.1.100 3D无人机航测建模', link: '/software/windows/itwin-capture-modeler' },
                { text: 'Upscayl 2.11.5 图像AI放大增强', link: '/software/windows/upscayl-win' },
                { text: 'Togu Audio Line TAL-U-NO-LX-V2 4.9.0 模拟Juno 60合成器插件', link: '/software/windows/togu-audio-line-tal-u-no-lx-v2-win' },
                { text: 'Overloud BREVERB 2.1.18 算法混响效果插件', link: '/software/windows/overloud-breverb-win' },
                { text: 'Siemens NX 2312 Build 7022 UG三维仿真建模设计', link: '/software/windows/siemens-nx' },
                { text: 'Lunacy 9.6.2 UI/UX矢量绘图设计', link: '/software/windows/lunacy-win' },
                { text: '巨应壁纸LiveWallpaper 3.0.20.0 4K高清动态壁纸', link: '/software/windows/livewallpaper' },
                { text: 'BlueStacks 5.21.206.1006 蓝叠安卓模拟器', link: '/software/windows/bluestacks-win' },
                { text: 'XTerminal 1.25.1 终端模拟器/SSH/SFTP客户端', link: '/software/windows/xterminal-win' },
                { text: 'Irix HDR Pro 2.3.27 HDR图像编辑处理', link: '/software/windows/irix-hdr-pro' },
                { text: 'РotРlayer 1.7.22233 高清视频播放器', link: '/software/windows/potplayer' },
                { text: 'YY语音 9.33.0.1 去广告精简版', link: '/software/windows/yyspeak' },
                { text: '阿里云盘小白羊XBYDriver 3.13.5 第三方阿里云盘', link: '/software/windows/xbydriver-win' },
                { text: 'WonderPen 2.4.7 妙笔Markdown写作编辑', link: '/software/windows/wonderpen-win' },
                { text: 'uTools 5.1.1 应用插件工具集', link: '/software/windows/utools-win' },
                { text: 'Topaz Photo AI 3.0.4 AI图片智能降噪', link: '/software/windows/topaz-photo-ai-win' },
                { text: '洛雪音乐 2.8.0 音乐播放下载', link: '/software/windows/lx-music-win' },
                { text: 'Lively Wallpaper 2.1.0.8 4K高清动态壁纸', link: '/software/windows/lively-wallpaper' },
                { text: 'JProfiler 14.0.3 Java 性能分析', link: '/software/windows/jprofiler-win' },
                { text: 'electerm 1.39.35 终端模拟器/SSH/SFTP客户端', link: '/software/windows/electerm-win' },
                { text: 'WonderShare EdrawMax Ultimate 13.0.5.1119 亿图图示设计', link: '/software/windows/wondershare-edrawmax-win' },
                { text: '优启通EasyU 3.7.2024.0515 高级VIP版 PE装机维护', link: '/software/windows/easyu' },
                { text: 'EasyDrv 8.1.2404.10305 Beta 2 万能驱动VIP版', link: '/software/windows/easydrv' },
                { text: 'Brave Browser 1.66.118 隐私广告拦截浏览器', link: '/software/windows/brave-browser-win' },
                { text: 'Wirecast Pro 16.2.0 视频直播制作', link: '/software/windows/wirecast-pro-win' },
                { text: 'WinRAR 7.01 解压缩软件', link: '/software/windows/winrar' },
                { text: 'Waterfox G6.0.15 水狐浏览器', link: '/software/windows/waterfox-win' },
                { text: 'Wallpaper Engine 2.5.7 Steam动态创意壁纸', link: '/software/windows/wallpaper-engine' },
                { text: 'Vivaldi Browser 6.7.3329.39 快速且私密的浏览器', link: '/software/windows/vivaldi-browser-win' },
                { text: 'ToonTrack Superior Drummer 3.3.7 +Core Library 虚拟鼓音乐制作', link: '/software/windows/toontrack-superior-drummer-win' },
                { text: 'HMCL 3.5.8.248 Minecraft我的世界启动器', link: '/software/windows/hmcl' },
                { text: '滴答清单TickTick Premium 5.5.1 事务清单管理', link: '/software/windows/ticktick-win' },
                { text: 'Sweet Home 3D 7.4.0 3D室内装潢设计', link: '/software/windows/sweet-home-3d-win' },
                { text: 'Steinberg Nuendo Pro 13.0.40 音频后期制作', link: '/software/windows/steinberg-nuendo-pro-win' },
                { text: 'Steinberg Groove Agent 5.2.10 虚拟鼓手模拟插件', link: '/software/windows/steinberg-groove-agent-win' },
                { text: 'Steinberg Dorico Pro 5.1.40 乐谱编写制作', link: '/software/windows/steinberg-dorico-pro-win' },
                { text: 'Steinberg Cubase Pro 13.0.40 多功能音乐制作', link: '/software/windows/steinberg-cubase-pro-win' },
                { text: 'StartAllBack 3.7.10.4910 开始菜单增强', link: '/software/windows/startallback' },
                { text: 'Rubick 4.2.4 开源插件工具箱', link: '/software/windows/rubick-win' },
                { text: 'Resolume Arena 7.20.1.35767 VJ创作表演', link: '/software/windows/resolume-arena-win' },
                { text: 'Resolume Avenue 7.20.1.35767 VJ调试', link: '/software/windows/resolume-avenue-win' },
                { text: 'Redis Insight 2.50.0 Redis可视化管理', link: '/software/windows/redis-insight-win' },
                { text: 'QuarkXPress 2024 20.1.1.57235 版面编辑设计', link: '/software/windows/quarkxpress-win' },
                { text: 'PowerToys 0.81.1 微软效率工具包', link: '/software/windows/powertoys' },
                { text: 'PixelOver 0.15.2 Beta 像素动画编辑制作', link: '/software/windows/pixelover-win' },
                { text: 'PlayerFab All-In-One 7.0.4.7 4K高清视频播放器', link: '/software/windows/playerfab' },
                { text: 'MediaInfo 24.05 音视频信息提取', link: '/software/windows/mediainfo-win' },
                { text: 'Google Chrome 125.0.6422.142 增强版 谷歌浏览器', link: '/software/windows/google-chrome-plus' },
                { text: 'Google Chrome 125.0.6422.142 谷歌浏览器', link: '/software/windows/google-chrome-win' },
                { text: 'GoodSync Enterprise 12.6.6.6 数据同步备份', link: '/software/windows/goodsync-enterprise' },
                { text: 'DingTalkRevokeMsgPatcher 6.2.1 消息防撤回/多开/消息永不已读', link: '/software/windows/dingtalkrevokemsgpatcher' },
                { text: 'calibre 7.12.0 电子书阅读管理器', link: '/software/windows/calibre-win' },
                { text: 'Burp Suite Pro 2024.5.1 网络渗透测试', link: '/software/windows/burp-suite-pro-win' },
                { text: '比特彗星BitComet 2.08.5.30 豪华VIP版 BT种子下载器', link: '/software/windows/bitcomet-win' },
                { text: 'balenaEtcher 1.19.21 U盘启动盘制作', link: '/software/windows/balenaetcher-win' },
                { text: '剪映专业版 6.0.0 Beta 6/CapCut 3.9.0 视频编辑处理', link: '/software/windows/videofusion-win' },
                { text: 'PDF Extra Ultimate 9.30.56026 PDF编辑器', link: '/software/windows/pdf-extra-ultimate' },
                { text: 'Nobe OmniScope 1.10.131 视频调色示波器插件', link: '/software/windows/nobe-omniscope-win' },
                { text: 'Navicat Premium 17.0.4 多连接数据库管理开发', link: '/software/windows/navicat-premium-win' },
                { text: 'MuseScore Studio 4.3.1.241490902 乐谱编曲编辑', link: '/software/windows/musescore-studio-win' },
                { text: 'MAXON CINEMA 4D Studio 2024.3.2 C4D三维动画设计', link: '/software/windows/maxon-cinema-4d-studio-win' },
                { text: 'Master PDF Editor 5.9.84 PDF编辑器', link: '/software/windows/master-pdf-editor' },
                { text: 'LuBan 3D 07.05.2024 鲁班3D建模设计', link: '/software/windows/luban-3d' },
                { text: 'Iperius Backup Full 8.2.0 数据备份恢复', link: '/software/windows/iperius-backup-full' },
                { text: 'IObit Advanced SystemCare Ultimate 16.7.0.113 系统优化清理', link: '/software/windows/iobit-advanced-systemcare-ultimate' },
                { text: 'FireAlpaca 2.11.23 数字绘画软件', link: '/software/windows/firealpaca-win' },
                { text: 'CyberLink ColorDirector Ultra 2024 12.5.4124.0 视频后期调色', link: '/software/windows/cyberlink-colordirector-ultra' },
                { text: 'Ashampoo Snap 16.0.6 屏幕截图编辑', link: '/software/windows/ashampoo-snap' },
                { text: 'BluffTitler Ultimate 16.5.0.7 3D标题特效制作', link: '/software/windows/blufftitler-ultimate' },
                { text: '爱思助手 8.23.062 iOS设备管理器', link: '/software/windows/i4tools-win' },
                { text: 'Binary Ninja Personal 4.0.5336 逆向编译调试', link: '/software/windows/binary-ninja-personal-win' },
                { text: 'Avast Premium Security 24.5.6116 防病毒安全防护', link: '/software/windows/avast-premium-security' },
                { text: 'Altium Designer 24.5.2.23 PCB电子板设计', link: '/software/windows/altium-designer' },
                { text: 'n-Track Studio Suite 10.1.0.8686 多轨音频制作', link: '/software/windows/n-track-studio-suite-win' },
                { text: 'HEU KMS Activator 42.0.4 Win/Office智能离线激活', link: '/software/windows/heu-kms-activator' },
                { text: 'GlassWire Elite 3.3.678 网络流量监控', link: '/software/windows/glasswire-elite' },
                { text: 'AIDA64 7.30.6900 系统软硬件信息检测', link: '/software/windows/aida64' },
                { text: '7-Zip 24.06 解压缩软件', link: '/software/windows/7-zip' },
                { text: 'Arturia Farfisa V 1.13.0.4395 电风琴模拟合成器插件', link: '/software/windows/arturia-farfisa-v-win' },
                { text: 'Arturia EQ SITRAL-295 1.3.0.4457 均衡器音频模拟插件', link: '/software/windows/arturia-eq-sitral-295-win' },
                { text: 'Arturia Emulator II V 1.6.0.4395 多音色采样合成器插件', link: '/software/windows/arturia-emulator-ii-v-win' },
                { text: 'Arturia Efx REFRACT 1.0.0.5002 立体声效果处理插件', link: '/software/windows/arturia-efx-refract-win' },
                { text: 'Arturia Efx MOTIONS 1.0.0.4836 声音效果动态处理插件', link: '/software/windows/arturia-efx-motions-win' },
                { text: 'Arturia Efx FRAGMENTS 1.2.0.4457 声音效果实时处理插件', link: '/software/windows/arturia-efx-fragments-win' },
                { text: 'Arturia DX7 V 1.13.0.4395 电台数字合成器插件', link: '/software/windows/arturia-dx7-v-win' },
                { text: 'Arturia Dist TUBE-CULTURE 1.1.1.4457 真空管模拟插件', link: '/software/windows/arturia-dist-tube-culture-win' },
                { text: 'Arturia Dist OPAMP-21 1.1.0.4457 失真效果模拟插件', link: '/software/windows/arturia-dist-opamp-21-win' },
                { text: 'Arturia Dist COLDFIRE 1.1.0.4463 失真效果模拟插件', link: '/software/windows/arturia-dist-coldfire-win' },
                { text: 'SoftMaker Office Professional 2024 Rev S1214.0518 Office办公套件', link: '/software/windows/softmaker-office-professional' },
                { text: 'Kdenlive 24.05.0 非线性视频编辑处理', link: '/software/windows/kdenlive-win' },
                { text: 'FastCopy Pro 5.7.12 文件快速复制', link: '/software/windows/fastcopy-pro' },
                { text: '向日葵远程控制 15.6.0.64434', link: '/software/windows/sunlogin-win' },
                { text: '微信键盘 1.1.2.563 微信输入法', link: '/software/windows/wetype-win' },
                { text: 'Houdini FX 20.0.547 3D影视特效渲染', link: '/software/windows/houdini-fx' },
                { text: 'Dehancer Film PS/LR 2.5.0 胶片模拟调色插件', link: '/software/windows/dehancer-film-ps-win' },
                { text: 'FotoJet Photo Editor 1.2.2 图像编辑处理', link: '/software/windows/fotojet-photo-editor-win' },
                { text: 'FotoJet Collage Maker 1.2.9 照片拼图制作', link: '/software/windows/fotojet-collage-maker' },
                { text: 'FotoJet Designer 1.3.4 平面制图设计', link: '/software/windows/fotojet-designer-win' },
                { text: 'VectorStyler 1.1.116 矢量图形设计', link: '/software/windows/vectorstyler-win' },
                { text: 'Wondershare Filmora 13.3.12.7152 万兴神剪手视频编辑器', link: '/software/windows/wondershare-filmora-win' },
                { text: 'Pixzip 2.1.5 图片批量压缩', link: '/software/windows/pixzip-win' },
                { text: 'Process Lasso Pro 14.1.0.20 系统进程实时优化', link: '/software/windows/process-lasso-pro' },
                { text: 'MPad 1.34.1 高级文本编辑器', link: '/software/windows/mpad' },
                { text: 'InternetTest Pro 8.3.1.2405 网络连接状态管理', link: '/software/windows/internettest-pro' },
                { text: 'GibbsCAM 2024 24.0.65.0 CAM数控机床编程', link: '/software/windows/gibbscam' },
                { text: 'DaVinci Resolve Studio 19.0.0.33 Beta 3 达芬奇影视后期调色剪辑', link: '/software/windows/davinci-resolve-studio-win' },
                { text: 'DaVinci Fusion Studio 19.0.0.29 Beta 3 影视后期特效合成', link: '/software/windows/davinci-fusion-studio-win' },
                { text: 'Adobe Premiere Pro 2024 24.4.1.002 视频编辑处理', link: '/software/windows/adobe-premiere-pro-win' },
                { text: 'Adobe Animate 2024 24.0.3.19 动画渲染制作', link: '/software/windows/adobe-animate-win' },
                { text: 'Adobe Media Encoder 2024 24.4.1.002 音视频编码渲染', link: '/software/windows/adobe-media-encoder-win' },
                { text: 'Adobe After Effects 2024 24.4.1.002 视频后期优化处理', link: '/software/windows/adobe-after-effects-win' },
                { text: 'Xmind Pro 2024 24.04.10311 思维导图与头脑风暴', link: '/software/windows/xmind-pro-win' },
                { text: 'VideoProc Converter AI 7.0 全能视频处理', link: '/software/windows/videoproc-converter-win' },
                { text: 'Revit 2025.1 BIM建筑信息3D建模', link: '/software/windows/revit' },
                { text: 'MiniMeters 0.8.19 Beta 音频计量监视器', link: '/software/windows/minimeters-win' },
                { text: 'Mp3tag 3.26 音频标签编辑器', link: '/software/windows/mp3tag-win' },
                { text: 'Install4j 10.0.8 Java 安装程序构建', link: '/software/windows/install4j-win' },
                { text: 'Foxit PDF Editor Pro 2024.2.2.25170 福昕PDF编辑器', link: '/software/windows/foxit-pdf-editor-pro' },
                { text: 'Foxit PDF Reader 2024.2.2.25170 福昕PDF阅读器', link: '/software/windows/foxit-pdf-reader-win' },
                { text: 'Adobe Substance 3D Stager 3.0.2.5806 3D场景渲染设计', link: '/software/windows/adobe-substance-3d-stager-win' },
                { text: 'Adobe Photoshop Lightroom Classic 13.3.0.17 精简版 照片后期处理', link: '/software/windows/adobe-photoshop-lightroom-classic-lite' },
                { text: 'Adobe Creative Cloud 6.2.0.554 Adobe创意云桌面应用', link: '/software/windows/adobe-creative-cloud-win' },
                { text: 'Adobe Photoshop 2024 25.9.0.573 精简版 图像编辑处理设计', link: '/software/windows/adobe-photoshop-lite' },
                { text: '水豚鼠标助手 1.0.6 鼠标增强辅助', link: '/software/windows/shuitun' },
                { text: '搜狗拼音输入法 14.5.0.9485 去广告精简版', link: '/software/windows/sogoupyinput-win' },
                { text: '3DMark Professional 2.29.8256 显卡性能跑分测试', link: '/software/windows/futuremark-3dmark-professional' },
                { text: 'Togu Audio Line TAL-Drum 2.5.3 老式鼓机音频采样插件', link: '/software/windows/togu-audio-line-tal-drum-win' },
                { text: 'VectorWorks 2024 SP5 3D建模渲染设计', link: '/software/windows/vectorworks-win' },
                { text: 'Tower Pro 7.1.483 Git客户端', link: '/software/windows/tower-pro-win' },
                { text: 'Rufus 4.5 U盘启动盘制作', link: '/software/windows/rufus' },
                { text: 'RunJS 2.12.1 JavaScript代码编辑器', link: '/software/windows/runjs-win' },
                { text: 'OriginPro 2024 10.1.0.178 SR1 科学绘图/数据分析', link: '/software/windows/originpro' },
                { text: 'MAGIX Samplitude Pro X8 Suite 19.1.4.23433 音乐编辑制作套件', link: '/software/windows/magix-samplitude-pro-suite' },
                { text: 'KMPlayer 2024.5.23.16 高清视频播放器', link: '/software/windows/kmplayer' },
                { text: 'Joplin 3.0.8 Beta 笔记加密记录与待办事项', link: '/software/windows/joplin-win' },
                { text: 'Kate 24.05.7343 高级文本编辑器', link: '/software/windows/kate-win' },
                { text: 'HiBit Uninstaller 3.2.20 软件深度卸载清理', link: '/software/windows/hibit-uninstaller' },
                { text: 'Fences 5.53 桌面整理归纳', link: '/software/windows/fences' },
                { text: 'Maya 2025.1 3D动画建模设计', link: '/software/windows/maya-win' },
                { text: '3ds Max 2025.1 3D动画渲染与模型制作', link: '/software/windows/3ds-max' },
                { text: 'Enigma Virtual Box 10.70 软件虚拟化打包工具', link: '/software/windows/enigma-virtual-box' },
                { text: 'Cockos REAPER 7.16 数字音频编辑制作', link: '/software/windows/cockos-reaper-win' },
                { text: 'CCleaner Business 6.24.11060 系统优化清理', link: '/software/windows/ccleaner-professional-win' },
                { text: 'Bandizip Pro 7.35 解压缩软件', link: '/software/windows/bandizip-pro-win' },
                { text: 'BurnAware Professional 17.8 光盘刻录', link: '/software/windows/burnaware-professional' },
                { text: 'Arturia Analog Lab Pro V 5.10.2.4741 音频合成器插件', link: '/software/windows/arturia-analog-lab-pro-v-win' },
                { text: 'Arturia Acid V 1.1.1.4681 经典低音合成器插件', link: '/software/windows/arturia-acid-v-win' },
                { text: 'Adobe Photoshop 2024 25.10.0.2625 Beta +Neural Filters 图像编辑处理设计', link: '/software/windows/adobe-photoshop-win' },
                { text: '亮鱼剪辑专业版ACDSee Luxea Pro Video Editor 7.1.3.2522 视频编辑处理', link: '/software/windows/acdsee-luxea-pro-video-editor' },
                { text: 'HandBrake 1.8.0 视频格式转换器', link: '/software/windows/handbrake-win' },
                { text: 'Adobe Photoshop Lightroom 7.3 照片管理与编辑处理', link: '/software/windows/adobe-photoshop-lightroom-win' },
                { text: 'ZY Player 3.3.6 视频资源播放器', link: '/software/windows/zy-player-win' },
                { text: 'Native Instruments Maschine 2.18.1 音频采样器', link: '/software/windows/native-instruments-maschine-win' },
                { text: 'HashCalculator 5.23.0 哈希值检测校验', link: '/software/windows/hashcalculator' },
                { text: 'Glary Utilities Pro 6.10.0.14 系统优化清理', link: '/software/windows/glary-utilities-pro' },
                { text: 'Adobe DNG Converter 16.3 RAW图片转DNG格式', link: '/software/windows/adobe-dng-converter-win' },
                { text: 'Arturia Delay TAPE-201 1.6.0.4457 磁带延迟模拟插件', link: '/software/windows/arturia-delay-tape-201-win' },
                { text: 'Arturia Delay ETERNITY 1.6.0.4457 音频模拟延迟插件', link: '/software/windows/arturia-delay-eternity-win' },
                { text: 'Arturia Delay BRIGADE 1.6.0.4457 音频低保真模拟延迟插件', link: '/software/windows/arturia-delay-brigade-win' },
                { text: 'Arturia CZ V 1.9.0.4395 Casio CZ模拟合成器插件', link: '/software/windows/arturia-cz-v-win' },
                { text: 'Arturia CS-80 V 4.3.0.4395 CS-80模拟合成器插件', link: '/software/windows/arturia-cs-80-v-win' },
                { text: 'Arturia CP-70 V 1.0.0.4395 CP-70电钢琴模拟合成器插件', link: '/software/windows/arturia-cp-70-v-win' },
                { text: 'Arturia Comp VCA-65 1.6.0.4457 VCA压缩器模拟插件', link: '/software/windows/arturia-comp-vca-65-win' },
                { text: 'Arturia Comp TUBE-STA 1.6.0.4457 真空管压缩器模拟插件', link: '/software/windows/arturia-comp-tube-sta-win' },
                { text: 'Arturia Comp FET-76 1.6.0.4457 FET压缩器模拟插件', link: '/software/windows/arturia-comp-fet-76-win' },
                { text: 'Arturia Comp DIODE-609 1.3.0.4457 二极管压缩限幅器模拟插件', link: '/software/windows/arturia-comp-diode-609-win' },
                { text: 'Adobe Substance 3D Painter 10.0.0.3640 3D数字绘画设计', link: '/software/windows/adobe-substance-3d-painter-win' },
                { text: 'Beaver Notes 3.2.0 海狸笔记编辑管理', link: '/software/windows/beaver-notes-win' },
                { text: 'MakeHuman 1.2.0 3D人物建模设计', link: '/software/windows/makehuman' },
                { text: 'Notepad2 4.24.05r5242 高级文本编辑器', link: '/software/windows/notepad2' },
                { text: 'IK Multimedia TONEX MAX 1.7.3 逼真音色建模', link: '/software/windows/ik-multimedia-tonex-max-win' },
                { text: '4K Stogram Pro 4.9.0.4680 Instagram图片查看与下载', link: '/software/windows/4k-stogram-pro-win' },
                { text: 'Toontrack EZBass 1.2.0 虚拟低音贝斯', link: '/software/windows/toontrack-ezbass-win' },
                { text: 'Spark 3.15.5 邮件收发管理', link: '/software/windows/spark-win' },
                { text: 'SourceTree 3.4.18 Git客户端', link: '/software/windows/sourcetree-win' },
                { text: 'SmartFTP Enterprise 10.0.3232 FTP传输客户端', link: '/software/windows/smartftp-enterprise' },
                { text: 'Rhinoceros 8.7.24138.15431 犀牛3D建模', link: '/software/windows/rhinoceros-win' },
                { text: 'Poedit 3.4.4 WP插件汉化/Po文件编辑', link: '/software/windows/poedit-win' },
                { text: 'PCL2 2.7.3 Minecraft我的世界启动器', link: '/software/windows/pcl2' },
                { text: 'Office Tool Plus 10.11.5.0 一键部署微软 Office', link: '/software/windows/office-tool-plus' },
                { text: 'Mountain Duck 4.16.0.22153 FTP/SFTP连接管理', link: '/software/windows/mountain-duck-win' },
                { text: 'MakeMKV 1.17.7 Beta MKV视频格式转换', link: '/software/windows/makemkv-win' },
                { text: 'Inventor Professional 2025.0.1 产品设计与工程制图', link: '/software/windows/inventor-professional' },
                { text: 'HBuilderX 4.15.2024050802 代码编辑器', link: '/software/windows/hbuilderx-win' },
                { text: 'Bitwig Studio 5.1.9 音频编辑处理', link: '/software/windows/bitwig-studio-win' },
                { text: 'Fork 1.97 Git客户端', link: '/software/windows/fork-win' },
                { text: 'FastStone Capture 10.5 屏幕截图录像', link: '/software/windows/faststone-capture' },
                { text: 'Figma EX 124.0.2 UI原型设计', link: '/software/windows/figma-ex-win' },
                { text: 'EditPlus 5.7.0.4632 高级文本编辑器', link: '/software/windows/editplus' },
                { text: 'Cyberduck 8.9.0.41543 FTP/SFTP连接管理', link: '/software/windows/cyberduck-win' },
                { text: 'Capture One 23 Enterprise 16.4.1.2127 RAW图像编辑处理', link: '/software/windows/capture-one-win' },
                { text: 'ACDSee Photo Studio Ultimate 2024 17.1.1.3800 图像数字处理', link: '/software/windows/acdsee-photo-studio-ultimate' },
                { text: '中望CAD机械版 2025 SP0 国产CAD机械制图设计', link: '/software/windows/zwcad-mechanical' },
                { text: '网易邮箱大师 5.0.10.1014 邮件收发管理', link: '/software/windows/mailmaster-win' },
                { text: '人人译视界 3.1.3 视频翻译制作', link: '/software/windows/rrysj-win' },
                { text: 'Sublime Merge 2.0.2096 Git客户端', link: '/software/windows/sublime-merge-win' },
                { text: 'TablePlus 6.0.0 多连接数据库管理开发', link: '/software/windows/tableplus-win' },
                { text: 'Zoner Photo Studio X 19.2403.2.542 数码照片管理', link: '/software/windows/zoner-photo-studio-x' },
                { text: 'Wireshark 4.2.5 网络协议分析', link: '/software/windows/wireshark' },
                { text: '4K Video Downloader+ 1.6.0.0085 高清视频下载', link: '/software/windows/4k-video-downloader-plus-win' },
                { text: 'VueScan Pro 9.8.33 万能扫描仪驱动', link: '/software/windows/vuescan-pro-win' },
                { text: 'VMware Workstation Pro 17.5.2 虚拟机软件', link: '/software/windows/vmware-workstation-pro' },
                { text: 'μTorrent Pro 3.6.0.47084 BT种子下载器', link: '/software/windows/utorrent-pro' },
                { text: 'UpdatePack7R2 24.5.15 Win 7累积更新包', link: '/software/windows/updatepack7r2' },
                { text: 'Tipard Video Converter Ultimate 10.3.58 视频格式转换', link: '/software/windows/tipard-video-converter-ultimate-win' },
                { text: 'Sublime Text 4.0.4175 代码编辑器', link: '/software/windows/sublime-text-win' },
                { text: 'Start11 2.0.8.1 开始菜单增强', link: '/software/windows/start11' },
                { text: 'SketchUp Pro 2024 24.0.553 草图大师3D绘图设计', link: '/software/windows/sketchup-pro-win' },
                { text: 'Microsoft Office Pro Plus 2021 LTSC 2108.14332.20706 微软Office办公套件', link: '/software/windows/microsoft-office-win' },
                { text: 'IObit Software Updater Pro 6.6.0.26 软件在线更新', link: '/software/windows/iobit-software-updater-pro' },
                { text: 'Guitar Pro 8.1.2.37 吉他编曲与音乐创作', link: '/software/windows/guitar-pro-win' },
                { text: 'Freeplane 1.11.14 思维导图', link: '/software/windows/freeplane-win' },
                { text: 'ExplorerPatcher 22621.3527.65.5 Windows系统增强', link: '/software/windows/explorerpatcher' },
                { text: 'ExamDiff Pro Master Edition 15.0.0.19 文件/文件夹对比', link: '/software/windows/examdiff-pro-master-edition' },
                { text: 'Epic Pen Pro 3.12.148 屏幕画笔标记', link: '/software/windows/epic-pen-pro' },
                { text: 'cFosSpeed 13.01.0001 本地网络延迟优化', link: '/software/windows/cfosspeed' },
                { text: 'CameraBag Pro 2024.2.0 照片滤镜处理', link: '/software/windows/camerabag-pro-win' },
                { text: 'Boris FX Sapphire for PS/LR 2024.51 蓝宝石视觉特效插件', link: '/software/windows/boris-fx-sapphire-for-ps-lr-win' },
                { text: 'Boris FX Sapphire for Avid 2024.51 蓝宝石视觉特效插件', link: '/software/windows/boris-fx-sapphire-for-avid-win' },
                { text: 'Boris FX Sapphire for OFX 2024.51 蓝宝石视觉特效插件', link: '/software/windows/boris-fx-sapphire-for-ofx-win' },
                { text: 'Boris FX Sapphire for AE/PR 2024.51 蓝宝石视觉特效插件', link: '/software/windows/boris-fx-sapphire-for-ae-pr-win' },
                { text: 'Axure RP Team 10.0.0.3920 UI/UX原型交互设计', link: '/software/windows/axure-rp-win' },
                { text: 'Artifact Interactive Garden Planner 3.8.63 园林辅助设计/环境美化', link: '/software/windows/artifact-interactive-garden-planner-win' },
                { text: 'Adobe Bridge 2024 14.1.0.257 文件管理浏览', link: '/software/windows/adobe-bridge-win' },
                { text: 'Adobe Substance 3D Modeler 1.10.0.30 桌面与VR创作3D建模雕刻', link: '/software/windows/adobe-substance-3d-modeler' },
                { text: 'Adobe Acrobat Pro 2024.002.20759 PDF编辑器', link: '/software/windows/adobe-acrobat-pro-win' },
                { text: '中望CAD专业版 2025 SP0 国产CAD制图设计', link: '/software/windows/zwcad-pro' },
                { text: 'Office Installer Plus 1.15 一键部署微软 Office', link: '/software/windows/office-installer-plus' },
                { text: 'Office 2013-2024 C2R Install 7.7.7.7 一键部署微软 Office', link: '/software/windows/office-c2r-install' },
                { text: 'Prima Cartoonizer 5.2.7 图片转卡通效果', link: '/software/windows/prima-cartoonizer' },
                { text: 'ON1 Effects 2024.3 18.3.0.15358 照片纹理滤镜处理', link: '/software/windows/on1-effects-win' },
                { text: 'Adobe Acrobat Reader 2024.002.20759 PDF阅读器', link: '/software/windows/adobe-acrobat-reader-win' },
                { text: 'Arturia CMI V 1.13.0.4395 Fairlight CMI模拟合成插件', link: '/software/windows/arturia-cmi-v-win' },
                { text: 'Arturia Clavinet V 1.13.0.4395 电子键盘Clavinet模拟插件', link: '/software/windows/arturia-clavinet-v-win' },
                { text: 'Arturia Chorus JUN-6 1.4.0.4457 Juno-6模拟合唱效果插件', link: '/software/windows/arturia-chorus-jun-6-win' },
                { text: 'Arturia Chorus DIMENSION-D 1.4.0.4457 SDD-320 Dimension D合唱效果器模拟插件', link: '/software/windows/arturia-chorus-dimension-d-win' },
                { text: 'Arturia Bus FORCE 1.3.0.4457 母带混音后期插件', link: '/software/windows/arturia-bus-force-win' },
                { text: 'Arturia Buchla Easel V 1.13.0.4395 Buchla模拟合成器插件', link: '/software/windows/arturia-buchla-easel-v-win' },
                { text: 'Arturia B-3 V 2.9.1.4395 电风琴模拟合成插件', link: '/software/windows/arturia-b-3-v-win' },
                { text: 'Arturia Augmented YANGTZE 1.0.0.4679 传统民乐增强模拟插件', link: '/software/windows/arturia-augmented-yangtze-win' },
                { text: 'Arturia Augmented WOODWINDS 1.0.0.4395 木管乐器增强模拟插件', link: '/software/windows/arturia-augmented-woodwinds-win' },
                { text: 'Arturia Augmented VOICES 1.6.0.4395 人声增强模拟插件', link: '/software/windows/arturia-augmented-voices-win' },
                { text: 'Arturia Augmented STRINGS 1.6.0.4395 弦乐器增强模拟插件', link: '/software/windows/arturia-augmented-strings-win' },
                { text: 'Arturia Augmented GRAND PIANO 1.6.0.4395 大钢琴增强插件', link: '/software/windows/arturia-augmented-grand-piano-win' },
                { text: 'Arturia Augmented BRASS 1.1.0.4395 黄铜管乐器演奏插件', link: '/software/windows/arturia-augmented-brass-win' },
                { text: 'Arturia ARP 2600 V 3.13.0.4395 音频模拟合成器插件', link: '/software/windows/arturia-arp-2600-v-win' },
                { text: 'Modern CSV 2.0.8 CSV文件编辑查看', link: '/software/windows/modern-csv-win' },
                { text: 'Tracktion Waveform Pro 13.0.44 波形数字音频编辑制作', link: '/software/windows/tracktion-waveform-pro-win' },
                { text: 'Dawn Launcher 1.4.2 一键快速启动软件', link: '/software/windows/dawn-launcher' },
                { text: 'Snapclear 2.1.0 AI图片背景删除', link: '/software/windows/snapclear-win' },
                { text: 'iZotope Neutron Advanced 4.6.0 智能混音', link: '/software/windows/izotope-neutron-advanced-win' },
                { text: 'iZotope Ozone Advanced 11.0.1 臭氧-音频母带处理', link: '/software/windows/izotope-ozone-advanced-win' },
                { text: 'Bulk Crap Uninstaller 5.8.0 软件深度卸载清理', link: '/software/windows/bulk-crap-uninstaller' },
                { text: 'Adobe Audition 2024 24.4.0.045 数字音频编辑', link: '/software/windows/adobe-audition-win' },
                { text: 'PeaZip 9.8.0 解压缩软件', link: '/software/windows/peazip-win' },
                { text: 'START 0.11.0.17520 腾讯云游戏', link: '/software/windows/start-win' },
                { text: 'Quip 8.41.0 文档编辑器', link: '/software/windows/quip-win' },
                { text: 'Imagenomic Portraiture for PS 4.5.0.4501 图像磨皮滤镜插件', link: '/software/windows/imagenomic-portraiture-for-ps-win' },
                { text: 'Imagenomic Portraiture for LR 4.5.0.4501 图像磨皮滤镜插件', link: '/software/windows/imagenomic-portraiture-for-lr-win' },
                { text: 'CareUEyes Pro 2.3.1 屏幕护眼与蓝光过滤', link: '/software/windows/careueyes-pro' },
                { text: 'WinCHM Pro 5.530 CHM编辑制作', link: '/software/windows/winchm-pro' },
                { text: 'PhpStudy 8.1.1.3 PHP服务器集成开发环境', link: '/software/windows/phpstudy' },
                { text: 'Mixxx 2.4.1 DJ混音制作', link: '/software/windows/mixxx-win' },
                { text: 'Pixelorama 0.11.4 像素动画编辑制作', link: '/software/windows/pixelorama-win' },
                { text: 'Listary Pro 6.3.0.78 文件搜索查找', link: '/software/windows/listary-pro' },
                { text: 'Notepad-- 2.16.0 文本编辑器', link: '/software/windows/notepad-win' },
                { text: 'OCCT 13.0.0.99 硬件稳定性超频测试', link: '/software/windows/occt' },
                { text: '360压缩 4.0.0.1520 解压缩软件', link: '/software/windows/360zip-win' },
                { text: 'PreSonus Studio One 6 Professional 6.6.1 数字音乐编曲创作', link: '/software/windows/presonus-studio-one-professional-win' },
                { text: 'EndNote 21.3.0.17918 论文文献管理', link: '/software/windows/endnote-win' },
                { text: 'Barcode 2.5.6 条形码生成器', link: '/software/windows/barcode-win' },
                { text: 'FastGestures 2.2.12 鼠标/触控板/屏手势增强', link: '/software/windows/fastgestures' },
                { text: 'TouchDesigner Pro 2023.11760 可视化原型渲染设计', link: '/software/windows/touchdesigner-pro-win' },
                { text: 'Steinberg VST Live Pro 2.0.10.118 终极现场演出系统', link: '/software/windows/steinberg-vst-live-pro-win' },
                { text: 'Snipaste 2.9.1 Beta 截图贴图标注', link: '/software/windows/snipaste-win' },
                { text: 'SecureCRT 9.5.2.3325 终端模拟器/SSH客户端', link: '/software/windows/securecrt-win' },
                { text: 'SecureFX 9.5.2.3325 FTP传输客户端', link: '/software/windows/securefx-win' },
                { text: 'GIMP 2.10.38 图像编辑处理', link: '/software/windows/gimp-win' },
                { text: 'Bilidown 1.1.4 B站视频下载', link: '/software/windows/bilidown' },
                { text: '4K Tokkit Pro 2.7.2.0930 TikTok视频下载', link: '/software/windows/4k-tokkit-pro-win' },
                { text: 'MobaXterm Professional 24.1.5208 终端模拟器/SSH客户端', link: '/software/windows/mobaxterm-professional' },
                { text: 'Icecream Video Editor Pro 3.19 视频编辑处理', link: '/software/windows/icecream-video-editor-pro' },
                { text: 'Icecream Screen Recorder Pro 7.41 屏幕录像编辑', link: '/software/windows/icecream-screen-recorder-pro' },
                { text: 'IObit Uninstaller Pro 13.5.0.1 软件深度卸载清理', link: '/software/windows/iobit-uninstaller-pro' },
                { text: 'Enscape 3D 3.5.6.204048 可视化实时渲染插件', link: '/software/windows/enscape-3d' },
                { text: 'Qalculate! 5.1.1 全能数学计算器', link: '/software/windows/qalculate' },
                { text: 'InPixio Photo Focus Pro 4.3.8621.22315 模糊照片清晰处理', link: '/software/windows/inpixio-photo-focus-pro' },
                { text: 'InPixio Photo Maximizer Pro 5.3.8621.22315 图片无损缩放', link: '/software/windows/inpixio-photo-maximizer-pro' },
                { text: 'Adobe Dreamweaver 2021 21.4.0.15620 代码编辑器', link: '/software/windows/adobe-dreamweaver-win' },
                { text: 'KORG WAVESTATION 2.4.2 矢量波形合成器插件', link: '/software/windows/korg-wavestation-win' },
                { text: 'KORG Wavestate Native 1.3.7 数字波形合成器插件', link: '/software/windows/korg-wavestate-native-win' },
                { text: 'KORG TRITON Extreme 1.1.1 HI合成器插件', link: '/software/windows/korg-triton-extreme-win' },
                { text: 'KORG Software Pass 1.2.12 KORG系列插件通用许可证', link: '/software/windows/korg-software-pass-win' },
                { text: 'KORG Prophecy 1.6.0 音频合成器插件', link: '/software/windows/korg-prophecy-win' },
                { text: 'KORG Polysix 2.4.3 六音色声道模拟合成器插件', link: '/software/windows/korg-polysix-win' },
                { text: 'KORG Opsix Native 1.2.1 数字合成器插件', link: '/software/windows/korg-opsix-native-win' },
                { text: 'KORG MS-20 2.4.3 音频合成器插件', link: '/software/windows/korg-ms-20-win' },
                { text: 'KORG MonoPoly 2.4.3 多轨合成器插件', link: '/software/windows/korg-monopoly-win' },
                { text: 'KORG Modwave Native 1.2.7 硬件合成器插件', link: '/software/windows/korg-modwave-native-win' },
                { text: 'KORG miniKORG 700 1.1.1 单声道合成器插件', link: '/software/windows/korg-minikorg-700-win' },
                { text: 'KORG microKORG 1.1.0 音频合成器插件', link: '/software/windows/korg-microkorg-win' },
                { text: 'KORG MDE-X 2.4.2 音频合成器插件', link: '/software/windows/korg-mde-x-win' },
                { text: 'KORG M1 2.4.1 音频合成器插件', link: '/software/windows/korg-m1-win' },
                { text: 'KORG LegacyCell 1.8.0 电子双效果模拟插件', link: '/software/windows/korg-legacycell-win' },
                { text: 'KORG KAOSS PAD 1.1.0 动态触摸效果插件', link: '/software/windows/korg-kaoss-pad-win' },
                { text: 'KORG Gadget Plugins 3.0.26 音频合成器插件', link: '/software/windows/korg-gadget-plugins-win' },
                { text: 'KORG ELECTRIBE-R 1.0.2 音频合成效果插件', link: '/software/windows/korg-electribe-r-win' },
                { text: 'KORG ARP ODYSSEY 1.5.3 ARP Odyssey模拟合成器插件', link: '/software/windows/korg-arp-odyssey-win' },
                { text: 'Snagit 2024.1.3 截图贴图录像编辑', link: '/software/windows/snagit-win' },
                { text: 'ColorPicker Max 6.3.0.2405 颜色选择器', link: '/software/windows/colorpicker-max' },
                { text: 'ManicTime Pro 2024.1.1.0 电脑使用时间跟踪管理', link: '/software/windows/manictime-pro' },
                { text: 'HDR Light Studio Automotive 8.2.1.2024.0307 3D灯光贴图渲染', link: '/software/windows/hdr-light-studio-automotive' },
                { text: 'RyTuneX 0.8.2 Win10/11系统优化调整', link: '/software/windows/rytunex' },
                { text: 'TeraCopy Pro 3.17 文件快速复制', link: '/software/windows/teracopy-pro' },
                { text: '央视影音 6.0.0.5 去广告精简版', link: '/software/windows/cbox' },
                { text: '暴风影音 9.06.0523.1111 去广告精简版', link: '/software/windows/baofeng' },
                { text: '电子印章图片生成器 3.0', link: '/software/windows/dianziyinzhang' },
                { text: '单文件制作工具 7.0.2.38', link: '/software/windows/danwenjianzhizuo' },
                { text: 'GitKraken 9.13.0 Git客户端', link: '/software/windows/gitkraken-win' },
                { text: 'Adobe Illustrator 2024 28.5.0.132 矢量绘图设计', link: '/software/windows/adobe-illustrator-win' },
                { text: 'Wing Pro 10.0.4.0 Python集成开发环境', link: '/software/windows/wing-pro-win' },
                { text: 'VisualCppRedist AIO 0.82.0 微软常用运行库合集', link: '/software/windows/visualcppredist-aio' },
                { text: 'Tracktion Dawesome Novum 1.17 创意视觉合成器插件', link: '/software/windows/tracktion-dawesome-novum-win' },
                { text: 'VirtualBox 7.0.18 虚拟机软件', link: '/software/windows/virtualbox-win' },
                { text: 'The Foundry MODO 17.0v5 3D建模渲染设计', link: '/software/windows/the-foundry-modo-win' },
                { text: 'Icecream Video Converter Pro 1.43 音视频格式转换', link: '/software/windows/icecream-video-converter-pro' },
                { text: 'Icecream PDF Editor Pro 3.23 PDF编辑器', link: '/software/windows/icecream-pdf-editor-pro' },
                { text: 'Icecream Slideshow Maker Pro 5.14 幻灯片制作', link: '/software/windows/icecream-slideshow-maker-pro' },
                { text: 'Icecream Ebook Reader Pro 6.49 Epub电子书阅读', link: '/software/windows/icecream-ebook-reader-pro' },
                { text: 'Icecream Photo Editor Pro 1.50 图像编辑处理', link: '/software/windows/icecream-photo-editor-pro' },
                { text: 'AIMP 5.30.2549 音乐播放器', link: '/software/windows/aimp' },
                { text: '4K YouTube to MP3 5.3.0.0085 YouTube视频转MP3音频', link: '/software/windows/4k-youtube-to-mp3-win' },
                { text: 'Corel WinZip Pro 28.0.16002 解压缩软件', link: '/software/windows/corel-winzip-pro-win' },
                { text: 'SolidWorks Premium 2024 SP2.0 3D建模辅助设计', link: '/software/windows/solidworks-premium' },
                { text: 'Overloud TH-U Premium 1.4.26 rev2 吉他与贝斯音色模拟', link: '/software/windows/overloud-th-u-premium-win' },
                { text: 'Less Player 0.1.22 音乐播放器', link: '/software/windows/less-player-win' },
                { text: 'GraphPad Prism 10.2.3.403 科研数据绘图分析', link: '/software/windows/graphpad-prism-win' },
                { text: 'Disk Drill Enterprise 5.5.900.0 数据恢复软件', link: '/software/windows/disk-drill-enterprise-win' },
                { text: 'CAXA CAD电子图板 2024 SP2 CAD图纸管理查看', link: '/software/windows/caxa-cad' },
                { text: 'CAXA CAPP工艺图表 2024 SP0 工艺图表制图设计', link: '/software/windows/caxa-capp' },
                { text: 'CAXA 3D实体设计 2024 SP0 3D CAD实体建模设计', link: '/software/windows/caxa-3d' },
                { text: 'BandLab Cakewalk 29.09.0.098 音乐编曲制作', link: '/software/windows/bandlab-cakewalk' },
                { text: 'Airy Pro 2.16.339 YouTube视频下载器', link: '/software/windows/airy-pro-win' },
                { text: 'Tracktion Dawesome Myth 1.10 音频编辑处理插件', link: '/software/windows/tracktion-dawesome-myth-win' },
                { text: 'PDF-XChange Editor Plus 10.3.0.386.0 PDF编辑器', link: '/software/windows/pdf-xchange-editor-plus' },
                { text: 'CrystalDiskInfo 9.3.0 硬盘状态检测', link: '/software/windows/crystaldiskinfo' },
                { text: 'Apowersoft Video Download Capture 6.5.1.1 傲软影片下载王', link: '/software/windows/apower-video-download-capture' },
                { text: 'FFmpeg Batch AV Converter 3.0.6 音视频格式编码转换器', link: '/software/windows/ffmpeg-batch-av-converter' },
                { text: 'CyberLink AudioDirector Ultra 2024 14.4.4024.0 音频编辑制作', link: '/software/windows/cyberlink-audiodirector-ultra' },
                { text: 'Ashampoo AntiSpy Pro 1.5.0 阻止跟踪监听用户', link: '/software/windows/ashampoo-antispy-pro' },
                { text: '傲梅分区助手AOMEI Partition Assistant Technician 10.4.0 硬盘无损分区', link: '/software/windows/aomei-partition-assistant-technician' },
                { text: 'IObit Malware Fighter Pro 11.2.0.1334 反恶意间谍查杀', link: '/software/windows/iobit-malware-fighter-pro' },
                { text: 'Overloud REmatrix 1.2.12 音频混响效果插件', link: '/software/windows/overloud-rematrix-win' },
                { text: 'Overloud Mark Studio 2.0.19 数字音频模拟插件', link: '/software/windows/overloud-mark-studio-win' },
                { text: 'Overloud Gem Voice 1.0.6 人声后期处理插件', link: '/software/windows/overloud-gem-voice-win' },
                { text: 'Overloud Gem TAPEDESK 1.2.5 暖色调混音模拟插件', link: '/software/windows/overloud-gem-tapedesk-win' },
                { text: 'Overloud Gem Sculptube 1.0.5 声音模拟真空放大插件', link: '/software/windows/overloud-gem-sculptube-win' },
                { text: 'Overloud Gem OTD-2 1.0.5 模拟音频延迟效果插件', link: '/software/windows/overloud-gem-otd-2-win' },
                { text: 'Overloud Gem Modula 1.0.3 三合一人声模拟插件', link: '/software/windows/overloud-gem-modula-win' },
                { text: 'Overloud Gem Mod 1.0.3 复古人声模拟插件', link: '/software/windows/overloud-gem-mod-win' },
                { text: 'Overloud Gem EQP 1.0.3 硬件均衡器模拟插件', link: '/software/windows/overloud-gem-eqp-win' },
                { text: 'Overloud Gem EQ550 1.1.6 硬件均衡器模拟插件', link: '/software/windows/overloud-gem-eq550-win' },
                { text: 'Overloud Gem EQ495 1.2.5 混音母带处理插件', link: '/software/windows/overloud-gem-eq495-win' },
                { text: 'Overloud Gem EQ84 1.3.5 英式录音台EQ模拟插件', link: '/software/windows/overloud-gem-eq84-win' },
                { text: 'Overloud Gem ECHOSON 1.0.7 传奇磁鼓延迟插件', link: '/software/windows/overloud-gem-echoson-win' },
                { text: 'Overloud Gem Dopamine 1.1.9 磁带模拟增强插件', link: '/software/windows/overloud-gem-dopamine-win' },
                { text: 'Overloud Gem Comp76 2.0.10 晶体管压缩机限幅器插件', link: '/software/windows/overloud-gem-comp76-win' },
                { text: 'Overloud Gem Comp670 1.1.7 电子管压缩机限幅器插件', link: '/software/windows/overloud-gem-comp670-win' },
                { text: 'Overloud Gem Comp LA 1.0.7 光电模拟压缩器插件', link: '/software/windows/overloud-gem-comp-la-win' },
                { text: 'Overloud Gem Comp G 1.0.7 VCA总线压缩器插件', link: '/software/windows/overloud-gem-comp-g-win' },
                { text: 'HQPlayer Desktop 5.7.0 高品质音频播放器', link: '/software/windows/hqplayer-desktop-win' },
                { text: 'BiglyBT 3.6.0 BT种子下载器', link: '/software/windows/biglybt-win' },
                { text: 'DevSidecar 1.8.1 开发者边车辅助', link: '/software/windows/devsidecar-win' },
                { text: 'ChemDraw Professional 2023 23.1.1.3 化学结构绘图', link: '/software/windows/chemdraw-professional-win' },
                { text: 'WinMerge 2.16.40 文件/文件夹对比', link: '/software/windows/winmerge' },
                { text: 'Free Download Manager 6.22.0.5714 直链BT续传下载器', link: '/software/windows/free-download-manager-win' },
                { text: 'AnyMP4 Blu-ray Player 6.5.60 蓝光视频播放器', link: '/software/windows/anymp4-blu-ray-player-win' },
                { text: 'RESP 2022.5.1 Redis可视化管理', link: '/software/windows/resp-win' },
                { text: 'PowerISO 8.8 ISO虚拟光驱挂载', link: '/software/windows/poweriso' },
                { text: 'OfficeBox 3.1.2 办公组件百宝箱', link: '/software/windows/officebox' },
                { text: 'Luminar Neo 1.19.0.13323 AI图像编辑处理', link: '/software/windows/luminar-neo-win' },
                { text: 'Logicly 2.0.0 Beta 4 电路逻辑绘图', link: '/software/windows/logicly-win' },
                { text: 'AutoCAD 2025.0.1 精简版 CAD绘图设计', link: '/software/windows/autocad-lite' },
                { text: 'Tracktion F-em 1.2.2 混合四音色合成器插件', link: '/software/windows/tracktion-f-em-win' },
                { text: 'Tracktion Dawesome Love 1.08 微光氛围效果器插件', link: '/software/windows/tracktion-dawesome-love-win' },
                { text: 'Tracktion Dawesome KULT 1.17 音频振荡合成器插件', link: '/software/windows/tracktion-dawesome-kult-win' },
                { text: 'Tracktion Dawesome Abyss 1.3.2 视觉化音色合成器插件', link: '/software/windows/tracktion-dawesome-abyss-win' },
                { text: 'Tracktion Dan Dean Essential Bass 1.0.6 +Library 虚拟低音贝斯合成插件', link: '/software/windows/tracktion-dan-dean-essential-bass' },
                { text: 'Tracktion Collective 1.3.3 +Factory Content 音频采样合成器插件', link: '/software/windows/tracktion-collective-win' },
                { text: 'Tracktion BioTek 2.3.3 +Factory Content 音色合成器插件', link: '/software/windows/tracktion-biotek-win' },
                { text: 'Boris FX Particle Illusion Pro 2024 17.0.5.650 幻影粒子视觉特效', link: '/software/windows/boris-fx-particle-illusion-pro' },
                { text: 'MAMP PRO 5.0.6.7029 Web服务器集成开发环境', link: '/software/windows/mamp-pro-win' },
                { text: 'Serato Studio 2.2.0 +Packs 音频节拍制作', link: '/software/windows/serato-studio-win' },
                { text: 'Serato DJ Pro Suite 3.1.3.363 DJ混音制作', link: '/software/windows/serato-dj-pro-suite-win' },
                { text: 'Notepads 1.5.5.0 轻量级纯文本编辑器', link: '/software/windows/notepads' },
                { text: 'Audacity 3.5.1 音频编辑制作', link: '/software/windows/audacity-win' },
                { text: 'AnyTrans for iOS 8.9.6.20240424 iPhone数据传输管理', link: '/software/windows/anytrans-for-ios-win' },
                { text: 'AnyDesk 8.0.10 远程桌面控制', link: '/software/windows/anydesk-win' },
                { text: '火绒安全软件 6.0.0.23 广告弹窗拦截', link: '/software/windows/huorong' },
                { text: 'Imaginando K7D 1.4.1 老式磁带延迟插件', link: '/software/windows/imaginando-k7d-win' },
                { text: 'WinDynamicDesktop 5.5.0 根据时间自动切换桌面壁纸', link: '/software/windows/windynamicdesktop' },
                { text: 'Logseq 0.10.9 知识笔记管理', link: '/software/windows/logseq-win' },
                { text: 'Everything 1.5.0.1367a 文件搜索利器', link: '/software/windows/everything' },
                { text: 'Adobe InDesign 2024 19.4.0.063 版面设计与排版编辑', link: '/software/windows/adobe-indesign-win' },
                { text: 'Adobe InCopy 2024 19.4.0.063 创意写作编辑', link: '/software/windows/adobe-incopy-win' },
                { text: 'Adobe Captivate 12.3.0.12 屏幕录制演示', link: '/software/windows/adobe-captivate-win' },
                { text: 'Adguard 7.17.4709.0 广告过滤拦截', link: '/software/windows/adguard-win' },
                { text: 'WindTerm 2.6.1 终端模拟器/SSH/SFTP客户端', link: '/software/windows/windterm-win' },
                { text: 'KeyboardTest 4.0.1003 键盘按键测试', link: '/software/windows/keyboardtest' },
                { text: 'JetBrains DataSpell 2024.1.1 数据科学家开发环境', link: '/software/windows/jetbrains-dataspell-win' },
                { text: 'GenP 3.4.13 Beta 4 Adobe软件一键激活工具', link: '/software/windows/genp' },
                { text: 'Boris FX Continuum Complete for Avid 2024 17.0.5.650 视觉特效插件套装', link: '/software/windows/boris-fx-continuum-complete-for-avid-win' },
                { text: 'PicGo 2.4.0 Beta 7 图床上传', link: '/software/windows/picgo-win' },
                { text: 'PhotoScape X Pro 4.2.2 图像编辑处理', link: '/software/windows/photoscape-x-pro-win' },
                { text: 'Avid Pro Tools 2021.7.0 音频混音编辑套件', link: '/software/windows/avid-pro-tools' },
                { text: 'Moneydance 2024.1.5118 个人财务管理', link: '/software/windows/moneydance-win' },
                { text: 'Xftp 7.0.0155 FTP传输客户端', link: '/software/windows/xftp' },
                { text: 'GPU-Z 2.59.0 显卡信息检测', link: '/software/windows/gpu-z' },
                { text: 'CyberLink YouCam 10.1.2717.1 网络摄像头特效', link: '/software/windows/cyberlink-youcam' },
                { text: 'Togu Audio Line TAL-Pha 1.2.0 模拟Alpha Juno II合成器插件', link: '/software/windows/togu-audio-line-tal-pha-win' },
                { text: 'PTC Creo 11.0.0.0 3D/CAD模型辅助设计', link: '/software/windows/ptc-creo' },
                { text: 'iZotope Trash 1.2.0 音频失真效果插件', link: '/software/windows/izotope-trash-win' },
                { text: 'Boris FX Continuum Complete for OFX 2024 17.0.5.650 视觉特效插件套装', link: '/software/windows/boris-fx-continuum-complete-for-ofx-win' },
                { text: 'BandLab Cakewalk Sonar 30.04.0.431 数字音频编曲制作', link: '/software/windows/bandlab-cakewalk-sonar' },
                { text: 'Boris FX Continuum Complete for Adobe 2024 17.0.5.650 视觉特效插件套装', link: '/software/windows/boris-fx-continuum-complete-for-adobe-win' },
                { text: 'AutoCAD 2025.0.1 CAD绘图设计', link: '/software/windows/autocad-win' },
                { text: '4K Image Compressor Pro 1.4.0.0220 图片批量压缩', link: '/software/windows/4k-image-compressor-pro-win' },
                { text: 'Adobe Substance 3D Designer 13.1.2.7745 3D纹理材料制作', link: '/software/windows/adobe-substance-3d-designer-win' },
                { text: 'Waves Ultimate 14 2024.04.14 Waves音频后期混音套件', link: '/software/windows/waves-ultimate-win' },
                { text: 'TortoiseSVN 1.14.7 SVN客户端', link: '/software/windows/tortoisesvn' },
                { text: 'DxO ViewPoint 4.16.0.302 照片修复校正', link: '/software/windows/dxo-viewpoint-win' },
                { text: 'DxO FilmPack 7.6.0.515 胶片模拟效果滤镜', link: '/software/windows/dxo-filmpack-win' },
                { text: 'DxO PhotoLab Elite 7.6.0.189 RAW图像编辑处理', link: '/software/windows/dxo-photolab-elite-win' },
                { text: 'DxO Nik Collection 6.10.0 PS滤镜插件套装', link: '/software/windows/dxo-nik-collection-win' },
                { text: 'D16 Group Nepheton 2.0.2 808鼓机模拟器插件', link: '/software/windows/d16-group-nepheton-win' },
                { text: 'D16 Group Drumazon 2.0.5 909鼓机模拟器插件', link: '/software/windows/d16-group-drumazon-win' },
                { text: 'Blender 4.1.1 3D动画建模渲染设计', link: '/software/windows/blender-win' },
                { text: 'Blossom 1.16.0 Markdown云端写作编辑', link: '/software/windows/blossom-win' },
                { text: 'Bandicam 7.1.1.2158 班迪高清录屏', link: '/software/windows/bandicam' },
                { text: '飞扬PDF转换器 1.0.4 PDF编辑转换器', link: '/software/windows/fypdf' },
                { text: 'Steinberg WaveLab Pro 12.0.20 音频母带处理', link: '/software/windows/steinberg-wavelab-pro-win' },
                { text: 'D16 Group Toraverb 2.2.2 高品质混响效果插件', link: '/software/windows/d16-group-toraverb-win' },
                { text: 'D16 Group Tekturon 1.2.2 多级分隔延迟效果插件', link: '/software/windows/d16-group-tekturon-win' },
                { text: 'D16 Group Syntorus 2.2.2 BBD模拟合唱效果插件', link: '/software/windows/d16-group-syntorus-win' },
                { text: 'D16 Group Spacerek 1.2.3 虚拟空间混响插件', link: '/software/windows/d16-group-spacerek-win' },
                { text: 'D16 Group Sigmund 2.0.0 多频延时效果插件', link: '/software/windows/d16-group-sigmund-win' },
                { text: 'D16 Group Repeater 1.2.2 延时/回声效果插件', link: '/software/windows/d16-group-repeater-win' },
                { text: 'D16 Group Redoptor 2.2.2 电子管失真模拟器插件', link: '/software/windows/d16-group-redoptor-win' },
                { text: 'D16 Group PunchBox 1.0.8 低音鼓合成器插件', link: '/software/windows/d16-group-punchbox-win' },
                { text: 'D16 Group Phoscyon 2.1.0 303低音合成器插件', link: '/software/windows/d16-group-phoscyon-win' },
                { text: 'D16 Group Lush 2.0.1 音色合成器插件', link: '/software/windows/d16-group-lush-win' },
                { text: 'D16 Group Godfazer 1.2.3 调制效果器插件', link: '/software/windows/d16-group-godfazer-win' },
                { text: 'D16 Group Frontier 1.2.2 透明压缩器插件', link: '/software/windows/d16-group-frontier-win' },
                { text: 'D16 Group Fazortan 2.2.2 相位器模拟插件', link: '/software/windows/d16-group-fazortan-win' },
                { text: 'D16 Group Devastor 2.3.2 多频段失真滤波效果器插件', link: '/software/windows/d16-group-devastor-win' },
                { text: 'D16 Group Decimort 2.3.2 经典老式采样器插件', link: '/software/windows/d16-group-decimort-win' },
                { text: 'D16 Group Antresol 1.3.2 模拟混响效果器插件', link: '/software/windows/d16-group-antresol-win' },
                { text: 'FileZilla 3.67.0 FTP传输客户端', link: '/software/windows/filezilla-win' },
                { text: 'Advanced Installer Architect 21.6.0 安装包制作', link: '/software/windows/advanced-installer-architect' },
                { text: 'Imaginando BAM 1.1.0 音频节拍制作插件', link: '/software/windows/imaginando-bam' },
                { text: 'AquaSoft Video Vision 15.2.04 幻灯片电子相册制作', link: '/software/windows/aquasoft-video-vision' },
                { text: 'AquaSoft Stages 15.2.04 多媒体动画制作', link: '/software/windows/aquasoft-stages' },
                { text: 'AquaSoft Photo Vision 15.2.04 图像编辑处理', link: '/software/windows/aquasoft-photo-vision' },
                { text: 'Windows11轻松设置 1.09 Win11系统设置优化', link: '/software/windows/win11-easy-settings' },
                { text: 'Togu Audio Line TAL-Sampler 4.5.4 模拟建模合成器插件', link: '/software/windows/togu-audio-line-tal-sampler-win' },
                { text: 'Togu Audio Line TAL-Mod 1.9.6 虚拟模拟合成器插件', link: '/software/windows/togu-audio-line-tal-mod-win' },
                { text: 'Togu Audio Line TAL-Dub-X 2.1.0 音频延迟效果插件', link: '/software/windows/togu-audio-line-tal-dub-x-win' },
                { text: 'Togu Audio Line TAL-Dac 2.0.3 模拟老式数模转换器插件', link: '/software/windows/togu-audio-line-tal-dac-win' },
                { text: 'Togu Audio Line TAL-BassLine-101 3.9.0 单声道低音合成器插件', link: '/software/windows/togu-audio-line-tal-bassline-101-win' },
                { text: '傲梅轻松备份AOMEI Backupper Technician Plus 7.3.5 系统数据备份恢复', link: '/software/windows/aomei-backupper-technician-plus' },
                { text: 'IK Multimedia T-RackS 5.10.4 混音母带处理', link: '/software/windows/ik-multimedia-t-racks-win' },
                { text: 'IK Multimedia Syntronik 2.1.1 Syntronik虚拟合成器', link: '/software/windows/ik-multimedia-syntronik-win' },
                { text: 'IK Multimedia SampleTank 4.2.3 音频采样器', link: '/software/windows/ik-multimedia-sampletank-win' },
                { text: 'IK Multimedia MODO DRUM 1.5.0 虚拟鼓乐器', link: '/software/windows/ik-multimedia-modo-drum-win' },
                { text: 'IK Multimedia MODO BASS 2.0.2 贝斯建模合成器', link: '/software/windows/ik-multimedia-modo-bass-win' },
                { text: 'IK Multimedia MixBox 1.5.0 音频混音效果器', link: '/software/windows/ik-multimedia-mixbox-win' },
                { text: 'IK Multimedia Lurssen Mastering Console 1.1.1 音频母带处理', link: '/software/windows/ik-multimedia-lurssen-mastering-console-win' },
                { text: 'IK Multimedia Hammond B-3X 1.3.4 虚拟B3风琴', link: '/software/windows/ik-multimedia-hammond-b-3x-win' },
                { text: 'IK Multimedia ARC System 4.0.0 音频声场校准', link: '/software/windows/ik-multimedia-arc-system-win' },
                { text: 'IK Multimedia AmpliTube 5.7.5 虚拟吉他与贝斯效果器', link: '/software/windows/ik-multimedia-amplitube-win' },
                { text: 'Pot 2.7.10 划词翻译/截图翻译与截图OCR', link: '/software/windows/pot-win' },
                { text: 'MuMuPlayer 12 3.8.13.2805 网易MuMu安卓模拟器', link: '/software/windows/mumuplayer-win' },
                { text: 'TSMaster 2023.5.7.864 汽车CAN总线分析/标定/诊断/仿真', link: '/software/windows/tsmaster' },
                { text: 'WingetUI 3.0.2 CLI软件包管理器', link: '/software/windows/wingetui' },
                { text: 'Red Giant VFX Suite 2024.2.0 红巨星视频特效插件套装', link: '/software/windows/red-giant-vfx-suite-win' },
                { text: 'Red Giant Trapcode Suite 2024.2.0 红巨星粒子特效插件套装', link: '/software/windows/red-giant-trapcode-suite-win' },
                { text: 'Red Giant Magic Bullet Suite 2024.2.0 红巨星调色降噪插件套装', link: '/software/windows/red-giant-magic-bullet-suite-win' },
                { text: 'PureBasic LTS 6.10 BASIC语言编辑器', link: '/software/windows/purebasic-win' },
                { text: 'ON1 NoNoise AI 2024.3 18.3.0.15302 摄影照片智能降噪', link: '/software/windows/on1-nonoise-ai-win' },
                { text: 'OcenAudio 3.13.8 音频编辑制作', link: '/software/windows/ocenaudio-win' },
                { text: 'Maxon App 2024.3.0 创意插件合集', link: '/software/windows/maxon-app-win' },
                { text: 'Geekbench Pro 6.3.0 硬件性能基准测试', link: '/software/windows/geekbench-pro-win' },
                { text: 'CyberLink Power2Go Platinum 13.0.5924.0 威力酷烧光盘刻录', link: '/software/windows/cyberlink-power2go-platinum' },
                { text: 'XDown 2.0.8.6 多线程种子下载器', link: '/software/windows/xdown-win' },
                { text: 'iTop Data Recovery Pro 4.3.0.677 数据恢复软件', link: '/software/windows/iobit-itop-data-recovery' },
                { text: 'Caprine 2.60.1 第三方Facebook', link: '/software/windows/caprine-win' },
                { text: 'Adobe Premiere Elements 2024.2 视频编辑合成', link: '/software/windows/adobe-premiere-elements-win' },
                { text: 'Adobe Photoshop Elements 2024.2 图像编辑处理', link: '/software/windows/adobe-photoshop-elements-win' },
                { text: 'IObit Smart Defrag Pro 9.4.0.342 磁盘碎片整理', link: '/software/windows/iobit-smart-defrag-pro' },
                { text: 'ON1 Photo RAW MAX 2024.3 18.3.0.15302 摄影RAW图像处理', link: '/software/windows/on1-photo-raw-win' },
                { text: 'EasyUEFI Enterprise 5.5 UEFI启动项管理', link: '/software/windows/easyuefi-enterprise' },
                { text: 'QtScrcpy 2.2.1 Android实时投屏控制', link: '/software/windows/qtscrcpy-win' },
                { text: 'Imaginando VS 1.5.0 视觉合成器插件', link: '/software/windows/imaginando-vs-win' },
                { text: 'Imaginando FRMS 1.10.0 颗粒合成器插件', link: '/software/windows/imaginando-frms-win' },
                { text: 'Imaginando DRC 2.9.3 虚拟模拟合成器插件', link: '/software/windows/imaginando-drc-win' },
                { text: 'Steinberg Retrologue 2.3.0 减法合成器插件', link: '/software/windows/steinberg-retrologue-win' },
                { text: 'Steinberg PadShop 2.2.0 虚拟合成器插件', link: '/software/windows/steinberg-padshop-win' },
                { text: 'Steinberg Backbone 1.6.0 虚拟鼓合成器插件', link: '/software/windows/steinberg-backbone-win' },
                { text: 'Native Instruments Supercharger GT 1.4.5 仿真电子管压缩器插件', link: '/software/windows/native-instruments-supercharger-gt-win' },
                { text: 'Native Instruments Reaktor 6.5.0 音乐合成效果器', link: '/software/windows/native-instruments-reaktor-win' },
                { text: 'Native Instruments FM8 1.4.6 FM8音频合成器', link: '/software/windows/native-instruments-fm8-win' },
                { text: 'Native Instruments Battery 4.3.0 rev5 虚拟鼓机采样', link: '/software/windows/native-instruments-battery-win' },
                { text: 'Acon Digital Acoustica Premium 7.5.5 数字音频编辑制作', link: '/software/windows/acon-digital-acoustica-premium-win' },
                { text: 'FileLocator Pro 2022.3425 文件搜索查找', link: '/software/windows/filelocator-pro' },
                { text: 'Boris FX Mocha Pro for Avid 2024 11.0.1.13 平面跟踪摄像机反求插件', link: '/software/windows/boris-fx-mocha-pro-for-avid-win' },
                { text: 'ZCANPRO 2.2.7 汽车CAN总线分析', link: '/software/windows/zcanpro' },
                { text: 'Uninstall Tool 3.7.4.5725 软件深度卸载清理', link: '/software/windows/uninstall-tool' },
                { text: 'Toontrack EZkeys 2.0.5 音乐合成制作', link: '/software/windows/toontrack-ezkeys-win' },
                { text: 'He3 2.0.20 终极开发者工具箱', link: '/software/windows/he3-win' },
                { text: '浩辰CAD专业版 2024 SP2 Bulid 240327 国产CAD制图设计', link: '/software/windows/gstarcad-pro' },
                { text: 'CANoe 17.0 SP3 汽车CAN总线开发环境', link: '/software/windows/canoe' },
                { text: 'Bypass 1.16.25 12306分流抢票助手', link: '/software/windows/bypass' },
                { text: 'Adobe Fresco 5.5.0.1380 绘图绘画手绘', link: '/software/windows/adobe-fresco' },
                { text: '搞机工具箱 9.91 Android免ROOT调试', link: '/software/windows/adbwinapi' },
                { text: '360文件夹 11.0.0.1140 多标签的资源管理器', link: '/software/windows/360file' },
                { text: '360桌面助手 11.0.0.1981 桌面文件整理', link: '/software/windows/360desktop' },
                { text: 'PowerArchiver Professional 2021 20.00.62 解压缩软件', link: '/software/windows/powerarchiver-professional' },
                { text: 'Alley 0.1.6 小路速传-局域网文件共享', link: '/software/windows/alley-win' },
                { text: 'wallhaven 4.4.6 高清动静态壁纸', link: '/software/windows/wallhaven-win' },
                { text: 'Marvelous Designer Personal 2024.0.125.47553 3D服装设计', link: '/software/windows/marvelous-designer-win' },
                { text: 'Imagenomic Noiseware for PS 6.0.4.6041 图像降噪插件', link: '/software/windows/imagenomic-noiseware-for-ps-win' },
                { text: 'Listen 1 2.32.0 全网付费音乐免费听', link: '/software/windows/listen1-win' },
                { text: 'Ashampoo Driver Updater 1.6.2 驱动更新管理', link: '/software/windows/ashampoo-driver-updater' },
                { text: '中望CAD建筑版 2024 SP1.3 国产CAD建筑制图设计', link: '/software/windows/zwcad-architecture' },
                { text: '2345看图王 11.3.0.10162 图像管理查看', link: '/software/windows/2345pic' },
                { text: 'AOMEI MyRecover Technician 3.6.1 傲梅数据恢复', link: '/software/windows/aomei-myrecover-technician' },
                { text: 'Buttercup 2.27.0 密码管理器', link: '/software/windows/buttercup-win' },
                { text: 'Nuro Audio Xrider 1.0.1 智能响度效果器插件', link: '/software/windows/nuro-audio-xrider-win' },
                { text: 'iZotope VEA 1.0.2 音频AI增强器插件', link: '/software/windows/izotope-vea-win' },
                { text: 'VMware InstallBuilder Enterprise 24.3.0 安装包制作', link: '/software/windows/vmware-installbuilder-enterprise-win' },
                { text: 'AI FaceSwap 2.2.0 图像AI识别换脸', link: '/software/windows/ai-faceswap' },
                { text: 'qBittorrent Enhanced Edition 4.6.4.10 BT种子下载器', link: '/software/windows/qbittorrent-enhanced-edition-win' },
                { text: 'Rekordbox 6 Professional 6.8.4 DJ音乐处理', link: '/software/windows/rekordbox-win' },
                { text: 'Native Instruments Komplete Kontrol 3.2.1 MIDI键盘音源制作', link: '/software/windows/native-instruments-komplete-kontrol-win' },
                { text: 'iA Writer 1.4.8748.18429 Markdown写作编辑', link: '/software/windows/ia-writer-win' },
                { text: 'Dehancer Pro AE/PR 7.1.1 胶片模拟调色插件', link: '/software/windows/dehancer-pro-ae-pr-win' },
                { text: 'Bing Wallpaper 2.0.0.6 每天自动更新必应壁纸', link: '/software/windows/bing-wallpaper-win' },
                { text: 'Mudbox 2025 3D数字绘画雕刻设计', link: '/software/windows/mudbox-win' },
                { text: 'AutoCAD Plant 3D 2025 工厂工艺绘图设计', link: '/software/windows/autocad-plant-3d' },
                { text: 'Adobe Speech to Text PR 2024 2.1.4 PR语音转文字插件', link: '/software/windows/adobe-speech-to-text-win' },
                { text: '闪豆下载器 4.0.20240325 多平台视频下载器', link: '/software/windows/shandou-video-download' },
                { text: 'Cycling 74 Max 8.6.2 音乐可视化编程', link: '/software/windows/cycling-74-max-win' },
                { text: 'Stellarium 24.1.0 天象虚拟天文馆', link: '/software/windows/stellarium-win' },
                { text: 'ScreenToGif 2.41 GIF动态图录制', link: '/software/windows/screentogif' },
                { text: 'MAGIX SOUND FORGE Pro Suite 18.0.0.21 音频编辑制作套件', link: '/software/windows/magix-sound-forge-pro-suite' },
                { text: 'Dehancer Pro OFX 7.1.3 胶片模拟调色插件', link: '/software/windows/dehancer-pro-ofx-win' },
                { text: 'SonomaWallpaper 1.2 Win使用Mac Sonoma 4K动态屏保壁纸', link: '/software/windows/sonomawallpaper' },
                { text: 'Charles 4.6.6 网络协议抓包调试', link: '/software/windows/charles-win' },
                { text: 'The Foundry Katana 7.0v3 视觉灯光渲染与照明增强', link: '/software/windows/the-foundry-katana' },
                { text: 'MathWorks MATLAB R2024a 24.1.0.2537033 算法开发/数据分析/模型创建', link: '/software/windows/mathworks-matlab-win' },
                { text: 'ActivePresenter Professional 9.1.4 屏幕录像编辑', link: '/software/windows/activepresenter-professional' },
                { text: 'PG Music Band-in-a-Box 2024 Build 1110 智能作曲伴奏', link: '/software/windows/pg-music-band-in-a-box' },
                { text: 'FirPE 1.9.1 PE装机维护', link: '/software/windows/firpe' },
                { text: 'CowPE 23H2 龙年新春维护版 PE装机维护', link: '/software/windows/cowpe' },
                { text: '恒星播放器 20240221180352 全格式高清4K视频播放器', link: '/software/windows/stellarplayer-win' },
                { text: 'CopyQ 8.0.0 剪贴板管理', link: '/software/windows/copyq-win' },
                { text: 'Clip Studio Paint EX 3.0.0 CSP漫画绘图设计', link: '/software/windows/clip-studio-paint-ex-win' },
                { text: 'Room Arranger 9.8.3.645 3D室内设计', link: '/software/windows/room-arranger-win' },
                { text: 'Adobe Flash Player 34.0.0.308 去广告版', link: '/software/windows/adobe-flash-player' },
                { text: '尼康工坊 1.6.1 图像编辑处理', link: '/software/windows/nx-studio-win' },
                { text: '爱奇艺视频 12.2.5.7850 去广告精简版', link: '/software/windows/iqiyi' },
                { text: 'UniFab Toolkit 1.0.2.3 多媒体编辑工具箱', link: '/software/windows/unifab-toolkit' },
                { text: 'The Foundry Mari 7.0v2 3D纹理绘画设计', link: '/software/windows/the-foundry-mari-win' },
                { text: 'ProPresenter 7.16.1 文稿分屏演示', link: '/software/windows/propresenter-win' },
                { text: 'Antares Auto-Tune Pro X 10.3.1 人声自动修音插件', link: '/software/windows/antares-auto-tune-pro' },
                { text: 'Final2x 1.2.0 图像AI放大增强', link: '/software/windows/final2x-win' },
                { text: 'Cutter 2.3.4 反汇编逆向调试', link: '/software/windows/cutter-win' },
                { text: 'DVDFab Photo Enhancer AI 1.0.2.3 图像AI增强修复', link: '/software/windows/dvdfab-photo-enhancer-ai' },
                { text: 'DVDFab Video Enhancer AI 1.0.3.3 视频AI增强处理', link: '/software/windows/dvdfab-video-enhancer-ai' },
                { text: 'PhotoDiva 5.0 图像AI增强修饰', link: '/software/windows/photodiva' },
                { text: 'CargoWiz 50.50.04 货物装载优化软件', link: '/software/windows/cargowiz' },
                { text: 'CyberLink ActionDirector Ultra 3.0.9606.0 威力酷剪运动视频编辑', link: '/software/windows/cyberlink-actiondirector-ultra' },
                { text: 'Notepad3 6.24.309.1 RC3 高级文本编辑器', link: '/software/windows/notepad3' },
                { text: 'Fishing Funds 8.2.3 实时显示基金数据涨跌', link: '/software/windows/fishing-funds-win' },
                { text: 'CyberLink PowerDVD Ultra 23.0.1406.62 极致蓝光版 蓝光视频播放器', link: '/software/windows/cyberlink-powerdvd-ultra' },
                { text: 'FxSound 2 Pro 1.1.22 系统音效增强', link: '/software/windows/fxsound-pro' },
                { text: 'YesPlayMusic 0.4.8-2 第三方网易云音乐播放器', link: '/software/windows/yesplaymusic-win' },
                { text: 'Wondershare PDF Reader 1.0.10.2594 万兴PDF阅读器', link: '/software/windows/wondershare-pdf-reader' },
                { text: 'The Foundry NUKE 15.0v4 影视后期特效合成制作', link: '/software/windows/the-foundry-nuke-win' },
                { text: 'Tabby 1.0.207 终端模拟器/SSH客户端', link: '/software/windows/tabby-win' },
                { text: 'F.lux 4.134 屏幕护眼与蓝光过滤', link: '/software/windows/flux-win' },
                { text: 'Neural Filters 2021-2024 24年3月版 PS神经滤镜修图插件', link: '/software/windows/neural-filters' },
                { text: 'Smart Game Booster Pro 5.3.0.670 游戏性能加速', link: '/software/windows/smart-game-booster' },
                { text: 'EaseUS PDF Editor Pro 6.1.0.1 PDF编辑器', link: '/software/windows/easeus-pdf-editor' },
                { text: 'EaseUS CleanGenius 3.0.2 系统优化清理', link: '/software/windows/easeus-cleangenius' },
                { text: 'AceMovi Video Editor 4.10.0.160 视频编辑处理', link: '/software/windows/acemovi-video-editor-win' },
                { text: 'Live Home 3D Pro 4.8.1520 3D家居装修设计', link: '/software/windows/live-home-3d-pro-win' },
                { text: 'Smart MindMap 10.0.3 智能思维导图', link: '/software/windows/smart-mindmap' },
                { text: 'AirLiveDrive Pro 2.4.2 云盘文件管理', link: '/software/windows/airlivedrive-pro' },
                { text: '蜗牛云盘 1.4.0 第三方阿里云盘', link: '/software/windows/woniudisk-win' },
                { text: 'Mocreak 2.2.0.301 一键部署微软 Office', link: '/software/windows/mocreak' },
                { text: '010 Editor 14.0 十六进制编辑器', link: '/software/windows/010-editor-win' },
                { text: 'Ashampoo UnInstaller Pro 14.00.12 软件深度卸载清理', link: '/software/windows/ashampoo-uninstaller-pro' },
                { text: 'XnConvert 1.100.1 图片批量处理', link: '/software/windows/xnconvert-win' },
                { text: 'Wondershare DVD Creator 6.5.9.208 DVD光盘刻录', link: '/software/windows/wondershare-dvd-creator-win' },
                { text: 'NeatDownloadManager 1.4.24.0 多线程直链下载器', link: '/software/windows/neatdownloadmanager-win' },
                { text: 'FontCreator Pro 15.0.0.2927 字体编辑设计', link: '/software/windows/fontcreator-pro' },
                { text: 'ONLYOFFICE 8.0.1 Office办公套件', link: '/software/windows/onlyoffice-win' },
                { text: 'LocalSend 1.14.0 文件加密共享', link: '/software/windows/localsend-win' },
                { text: 'Corel Painter 2023 23.0.0.244 美术绘图设计', link: '/software/windows/corel-painter-win' },
                { text: 'PicPick Professional 7.2.8 全能屏幕截图编辑', link: '/software/windows/picpick-professional' },
                { text: 'NXPowerLite Desktop 10.2.0 文件压缩管理', link: '/software/windows/nxpowerlite-desktop-win' },
                { text: 'NotepadNext 0.7.0 文本与代码编辑器', link: '/software/windows/notepadnext-win' },
                { text: 'iZotope Insight Pro 2.5.0 音频分析与母带混音插件', link: '/software/windows/izotope-insight-pro-win' },
                { text: 'Google Earth Pro 7.3.6.9796 谷歌地球-虚拟地球仪', link: '/software/windows/google-earth-pro-win' },
                { text: 'FurMark 1.38.0.0 显卡烤机测试', link: '/software/windows/furmark' },
                { text: 'CLO Standalone 7.3.240.46861 3D可视化服装设计', link: '/software/windows/clo-standalone-win' },
                { text: 'Adobe Character Animator 2024 24.2.0.80 表情捕捉实时生成动画', link: '/software/windows/adobe-character-animator-win' },
                { text: 'Typora 1.8.10 Markdown写作编辑', link: '/software/windows/typora-win' },
                { text: 'Steinberg SpectraLayers Pro 10.0.50.343 音频光谱编辑与修复', link: '/software/windows/steinberg-spectralayers-pro-win' },
                { text: 'StartIsBack++ 2.9.20 开始菜单增强', link: '/software/windows/startisback' },
                { text: 'Start10 1.98 开始菜单增强', link: '/software/windows/start10' },
                { text: 'SILKYPIX Developer Studio Pro 11.0.14.0  RAW图像编辑处理', link: '/software/windows/silkypix-developer-studio-pro-win' },
                { text: 'SILKYPIX JPEG Photography 11.2.14.0 图像编辑处理', link: '/software/windows/silkypix-jpeg-photography-win' },
                { text: 'Perfectly Clear Video 4.6.0.2638 AI视频清晰化处理', link: '/software/windows/perfectly-clear-video-win' },
                { text: 'LRTimelapse Pro 6.5.4 延迟摄影后期渲染', link: '/software/windows/lrtimelapse-pro-win' },
                { text: 'Keystroke Visualizer 3.1 键盘按键可视化', link: '/software/windows/keystroke-visualizer' },
                { text: 'iZotope Tonal Balance Control 2.8.0 音调平衡控制插件', link: '/software/windows/izotope-tonal-balance-control-win' },
                { text: 'iZotope Dialogue Match 1.2.0 音频混音制作插件', link: '/software/windows/izotope-dialogue-match-win' },
                { text: 'IDA Pro 8.3.230608 反汇编逆向神器', link: '/software/windows/ida-pro-win' },
                { text: 'HashTool 0.7.2 哈希值检测校验', link: '/software/windows/hashtool' },
                { text: 'Darktable 4.6.1 RAW图像编辑处理', link: '/software/windows/darktable-win' },
                { text: 'CrystalMaker 11.0.2.300 晶体与分子结构可视化', link: '/software/windows/crystalmaker-win' },
                { text: '微软语音合成助手 5.4 微软文字转语音', link: '/software/windows/microsoft-speech-synthesis' },
                { text: '腾讯软件管家 15.6.23123.201 软件下载安装', link: '/software/windows/qqpcsoftmgr' },
                { text: 'Mirillis Action! 4.39.1 屏幕录像编辑', link: '/software/windows/mirillis-action' },
                { text: 'Air Explorer Pro 5.4.3 云盘文件管理', link: '/software/windows/air-explorer-pro' },
                { text: 'Alpaca 2.9.2 PS图像智能生成插件', link: '/software/windows/alpaca' },
                { text: 'CAD迷你画图 2024 R2 CAD绘图设计', link: '/software/windows/minicaddraw' },
                { text: 'VSDC Video Editor Pro 9.1.1.516 视频编辑处理', link: '/software/windows/vsdc-video-editor-pro' },
                { text: 'CAD迷你看图 2024 R1 CAD看图软件', link: '/software/windows/minicadsee-win' },
                { text: 'Ashampoo Backup Pro 25.05 数据备份恢复', link: '/software/windows/ashampoo-backup-pro' },
                { text: '搜狗五笔输入法 5.5.0.2584 去广告精简版', link: '/software/windows/sogouwbinput-win' },
                { text: 'Hit Mix RipX DAW PRO 7.1.0 音频编辑处理', link: '/software/windows/hitnmix-ripx-daw-pro-win' },
                { text: '格式工厂 5.17.0 音视频格式转换', link: '/software/windows/format-factory' },
                { text: 'Native Instruments Traktor Pro Plus 3.11.0.44 数字DJ混音', link: '/software/windows/native-instruments-traktor-pro-plus-win' },
                { text: 'Ashampoo Photo Optimizer 10.0.2 图片优化处理', link: '/software/windows/ashampoo-photo-optimizer' },
                { text: 'QQ音乐 20.05 去广告精简版', link: '/software/windows/qqmusic' },
                { text: 'CPU-Z 2.09.0 硬件信息检测识别', link: '/software/windows/cpu-z' },
                { text: 'Antares Auto-Tune Unlimited 2023.12 人声修正处理套件', link: '/software/windows/auto-tune-unlimited' },
                { text: 'MayeLite 12.5.0 一键快速启动软件', link: '/software/windows/mayelite' },
                { text: 'WhyNotWin11 2.6.0.0 检测电脑是否适用于Windows 11', link: '/software/windows/whynotwin11' },
                { text: 'DxO PureRAW 3.9.0.33 RAW图像编辑处理', link: '/software/windows/dxo-pureraw-win' },
                { text: 'Boris FX SynthEyes Pro 2024 24.01.1058 3D视觉效果跟踪', link: '/software/windows/boris-fx-syntheyes-pro-win' },
                { text: 'Nuro Audio Xvox Pro 1.0.3 终极人声混音效果器插件', link: '/software/windows/nuro-audio-xvox-pro-win' },
                { text: 'Ultimate Vocal Remover 5.6.0 UVR终极人声伴奏分离器', link: '/software/windows/ultimate-vocal-remover-win' },
                { text: 'WinSnap 6.1.2 屏幕截图编辑', link: '/software/windows/winsnap' },
                { text: 'WinCam 3.7 屏幕录像编辑', link: '/software/windows/wincam' },
                { text: 'Readiris PDF Business 23.1.95.0 OCR文字识别', link: '/software/windows/readiris-pdf-business' },
                { text: 'Native Instruments Guitar Rig 7 Pro 7.0.2 电吉他贝斯效果器', link: '/software/windows/native-instruments-guitar-rig-pro-win' },
                { text: 'Ashampoo Burning Studio 25.0.2 光盘刻录', link: '/software/windows/ashampoo-burning-studio' },
                { text: 'Wolfram Mathematica 14.0.0 数学科学计算', link: '/software/windows/wolfram-mathematica-win' },
                { text: 'FreeCAD 0.21.2 CAD绘图设计', link: '/software/windows/freecad-win' },
                { text: 'iZotope Vinyl 1.12.1 唱片模拟效果插件', link: '/software/windows/izotope-vinyl-win' },
                { text: 'iZotope Relay 1.4.0 音频效果增强插件', link: '/software/windows/izotope-relay-win' },
                { text: 'Navicat Charts Viewer 1.1.15 Navicat图表查看', link: '/software/windows/navicat-charts-viewer-win' },
                { text: 'Navicat Charts Creator 1.1.15 Navicat图表创建', link: '/software/windows/navicat-charts-creator-win' },
                { text: 'Navicat Data Modeler Premium 3.2.15 数据库建模设计', link: '/software/windows/navicat-data-modeler-win' },
                { text: 'Cheat Engine 7.5.1 CE修改器', link: '/software/windows/cheat-engine-win' },
                { text: 'Crow Translate 2.11.1 轻量级翻译软件', link: '/software/windows/crow-translate' },
                { text: '360驱动大师 2.0.0.2000 硬件驱动更新管理', link: '/software/windows/360drvmgr' },
                { text: 'FinalShell专业版 4.3.1.0 终端模拟器/SSH客户端', link: '/software/windows/finalshell-win' },
                { text: 'ArcTime Pro 4.3 可视化视频字幕编辑', link: '/software/windows/arctime-pro-win' },
                { text: '冰点还原Deep Freeze 8.71.020.5734 Standard/Enterprise 系统还原备份', link: '/software/windows/deep-freeze-win' },
                { text: 'Imagenomic Realgrain for PS 2.1.4.2147 图像胶片滤镜插件', link: '/software/windows/imagenomic-realgrain-for-ps-win' },
                { text: 'Clark Audio Lofi Panda 3.4.0 熊猫音频采样插件', link: '/software/windows/clark-audio-lofi-panda-win' },
                { text: 'LMMS 1.2.2 音频编辑处理', link: '/software/windows/lmms-win' },
                { text: 'Harrison Mixbus 32C 9.0.1 数字音频混音编辑', link: '/software/windows/harrison-mixbus-win' },
                { text: 'Reason Studios Reason 12.5.3 数字音频混音编辑', link: '/software/windows/reason-studios-reason' },
                { text: 'Acoustica Mixcraft Pro Studio 9.0.470 数字音频编辑处理', link: '/software/windows/acoustica-mixcraft-pro-studio' },
                { text: 'LyricEase 0.14.153.0 第三方网易云音乐播放器', link: '/software/windows/lyricease' },
                { text: 'Tai 1.5.0.6 统计软件使用时长', link: '/software/windows/tai' },
                { text: 'Paragon APFS 3.1.1 APFS磁盘挂载读写', link: '/software/windows/paragon-apfs' },
                { text: 'Paragon HFS+ 12.1.12 HFS+磁盘挂载读写', link: '/software/windows/paragon-hfs' },
                { text: 'Lumion Pro 2023.4.2.0 3D建筑可视化渲染', link: '/software/windows/lumion-pro' },
                { text: 'Studio 3T Ultimate 2023.5.0 MongoDB 数据库可视化管理', link: '/software/windows/studio-3t-ultimate-win' },
                { text: 'Moho Pro 14.1.0 2D动画编辑制作', link: '/software/windows/moho-pro-win' },
                { text: 'ToDesk 4.7.2.1 远程桌面控制', link: '/software/windows/todesk-win' },
                { text: 'Boris FX CrumplePop Complete 2024.0.3 终极音频处理插件套装', link: '/software/windows/boris-fx-crumplepop-complete-win' },
                { text: '极速图片压缩器 3.1.0 图片批量压缩', link: '/software/windows/topspeed-image-compressor' },
                { text: 'MAGIX Movie Studio 2024 Suite 23.0.1.192 视频编辑处理套件', link: '/software/windows/magix-movie-studio-suite' },
                { text: 'Inkscape 1.3.2 矢量绘图设计', link: '/software/windows/inkscape-win' },
                { text: 'OpenOffice 4.1.15 Office办公套件', link: '/software/windows/openoffice-win' },
                { text: 'Scrivener 3.1.5.1 写作编辑', link: '/software/windows/scrivener-win' },
                { text: 'PCDJ LYRX 1.10.3.0 DJ与卡拉OK制作', link: '/software/windows/pcdj-lyrx-win' },
                { text: 'InPixio Eclipse HDR Pro 1.3.700.620 HDR照片编辑合成', link: '/software/windows/inpixio-eclipse-hdr-pro' },
                { text: 'Windows 超级管理器 9.46 系统全能工具箱', link: '/software/windows/windows-super-manager' },
                { text: 'PhotoLine 24.01 图像编辑处理', link: '/software/windows/photoline-win' },
                { text: 'MAGIX Photostory 2024 Deluxe 23.0.1.170 幻灯片制作', link: '/software/windows/magix-photostory-deluxe' },
                { text: 'iThoughts 6.6 思维导图', link: '/software/windows/ithoughts-win' },
                { text: '天翼云盘 6.6.0 精简优化版', link: '/software/windows/ecloud' },
                { text: '百度网盘 7.36.0.3 去广告精简版', link: '/software/windows/baidunetdisk-win' },
                { text: 'aText 1.39 文本扩展', link: '/software/windows/atext-win' },
                { text: 'AutoMouse Pro 1.0.5 极速自动鼠标点击器', link: '/software/windows/automouse-pro' },
                { text: 'SeeMusic Pro 5.7.1 钢琴表演效果可视化', link: '/software/windows/seemusic-pro' },
                { text: 'Oniric Glow Generator 1.3.0 PS光效光晕合成插件', link: '/software/windows/oniric-glow-generator' },
                { text: 'ImageRanger Pro 1.9.6.1888 图像管理查看', link: '/software/windows/imageranger-pro-win' },
                { text: 'FreeOffice 2021 build 1068 Office办公套件', link: '/software/windows/freeoffice-win' },
                { text: 'ApiPost 7.2.6 API接口调试', link: '/software/windows/apipost-win' },
                { text: 'Adobe Dimension 3.4.11.4298 3D渲染建模设计', link: '/software/windows/adobe-dimension-win' },
                { text: 'Inno Setup 6.2.2 安装包制作', link: '/software/windows/inno-setup' },
                { text: '哔哩下载姬DownKyi 1.6.1 B站视频下载', link: '/software/windows/downkyi' },
                { text: 'Krita 5.2.2 数字绘画设计', link: '/software/windows/krita-win' },
                { text: 'Adobe Premiere Rush 2.10.0.30 短视频编辑处理', link: '/software/windows/adobe-premiere-rush' },
                { text: 'Adobe Prelude 2022 22.6.1.3 视频元数据采集粗剪', link: '/software/windows/adobe-prelude-win' },
                { text: 'T20天正暖通软件 10.0 建筑暖通分析设计', link: '/software/windows/tangent-hvac' },
                { text: 'T20天正建筑软件 10.0 建筑制图设计', link: '/software/windows/tangent-arch' },
                { text: 'T20天正电气软件 10.0 电气仿真设计', link: '/software/windows/tangent-elec' },
                { text: 'T20天正给排水软件 10.0 给排水系统仿真设计', link: '/software/windows/tangent-wt' },
                { text: '迅雷 11.1.12.1692 去广告版', link: '/software/windows/thunder-win' },
                { text: 'SmartSVN 14.4.0 SVN客户端', link: '/software/windows/smartsvn-win' },
                { text: 'SILKYPIX Developer Studio Pro for Panasonic 11.3.13.0  松下相机图片处理', link: '/software/windows/silkypix-developer-studio-pro-for-panasonic-win' },
                { text: 'SILKYPIX Developer Studio Pro for FUJIFILM 11.4.13.0  富士相机图片处理', link: '/software/windows/silkypix-developer-studio-pro-for-fujifilm-win' },
                { text: '360软件管家 7.5.0.2060 软件下载安装', link: '/software/windows/360softmanager' },
                { text: 'Readiris Corporate 17.4.192 OCR文字识别', link: '/software/windows/readiris-corporate-win' },
                { text: 'EaseUS Data Recovery Wizard Technician 17.0.0 易我数据恢复软件', link: '/software/windows/easeus-data-recovery-wizard-win' },
                { text: 'My Family Tree 14.0.2.0 家谱族谱制作', link: '/software/windows/my-family-tree' },
                { text: 'Movavi Screen Recorder 2024 24.0.0 屏幕录像编辑', link: '/software/windows/movavi-screen-recorder-win' },
                { text: 'Movavi Video Editor 2024 24.0.2.0 视频编辑处理', link: '/software/windows/movavi-video-editor-win' },
                { text: 'ElevenClock 4.3.3 自定义任务栏时间', link: '/software/windows/elevenclock' },
                { text: 'AOMEI FoneTool Technician 2.5.0 iPhone数据传输管理', link: '/software/windows/aomei-fonetool-technician' },
                { text: 'XAMPP 8.2.12 Apache服务开发环境配置', link: '/software/windows/xampp-win' },
                { text: 'Jump Paint 6.1 漫画绘图设计', link: '/software/windows/jump-paint-win' },
                { text: 'Stretchly 1.15.1 定时休息提醒', link: '/software/windows/stretchly-win' },
                { text: '腾讯TIM 3.4.8.22124 去广告精简版', link: '/software/windows/tim' },
                { text: 'MainType Pro 12.0.0.1297 字体管理浏览', link: '/software/windows/maintype-pro' },
                { text: 'JixiPix Watercolor Studio Pro 1.4.17 图片水彩画绘制', link: '/software/windows/jixipix-watercolor-studio-pro-win' },
                { text: 'JixiPix Spektrel Art 1.1.17 图片锐化处理', link: '/software/windows/jixipix-spektrel-art-win' },
                { text: 'JixiPix Rip Studio Pro 1.1.20 图片拼接处理', link: '/software/windows/jixipix-rip-studio-pro-win' },
                { text: 'Jixipix Premium Pack 1.2.11 艺术照片特效', link: '/software/windows/jixipix-premium-pack-win' },
                { text: 'JixiPix Photo Formation Pro 1.0.22 3D创意照片特效', link: '/software/windows/jixipix-photo-formation-pro-win' },
                { text: 'JixiPix PuzziPix Pro 1.0.20 图片拼图', link: '/software/windows/jixipix-puzzipix-pro-win' },
                { text: 'JixiPix Pastello Pro 6.0.98 照片转铅笔画', link: '/software/windows/jixipix-pastello-pro-win' },
                { text: 'JixiPix Hand Tint Pro 1.0.23 图片调色修图', link: '/software/windows/jixipix-hand-tint-pro-win' },
                { text: 'JixiPix Chromatic Edges 1.0.31 照片复古艺术效果', link: '/software/windows/jixipix-chromatic-edges-win' },
                { text: 'JixiPix Artista Impresso Pro 1.8.23 图片油画滤镜', link: '/software/windows/jixipix-artista-impresso-pro-win' },
                { text: 'FlowJo 10.10.0 流式细胞分析', link: '/software/windows/flowjo-win' },
                { text: '2345好压 6.5.1.11213 解压缩软件', link: '/software/windows/2345haozip' },
                { text: 'MyDockFinder 1.9.7.4 Win系统模拟美化macOS桌面', link: '/software/windows/mydockfinder' },
                { text: 'UltraISO Premium 9.7.6.3860 光盘映像制作', link: '/software/windows/ultraiso-premium' },
                { text: 'TS助手 3.52 M3U8下载合并MP4', link: '/software/windows/tsassistant' },
                { text: 'Textify 1.10.4 强制复制文本', link: '/software/windows/textify' },
                { text: 'Office Tab Enterprise 14.50 Office插件工具箱', link: '/software/windows/office-tab-enterprise' },
                { text: 'NTLite Enterprise 1.8.0.6790 系统精简定制', link: '/software/windows/ntlite-enterprise' },
                { text: 'Unlocker 4.2.7 解锁VMware安装macOS 虚拟机', link: '/software/windows/vm-unlocker' },
                { text: 'iTop Screen Recorder Pro 4.3.0.1267 屏幕录像编辑', link: '/software/windows/iobit-itop-screen-recorder-pro' },
                { text: 'Sidify Tidabie Tidal Music Converter 1.7.4 Tidal Music转换器', link: '/software/windows/sidify-tidabie-tidal-music-converter-win' },
                { text: 'Sidify Music Converter 3.2.1 Spotify Music转换器', link: '/software/windows/sidify-music-converter-win' },
                { text: 'Sidify Apple Music Converter 4.9.5 Apple Music转换器', link: '/software/windows/sidify-apple-music-converter-win' },
                { text: '酷我音乐 9.3.0 W4 豪华VIP破解版', link: '/software/windows/kuwomusic' },
                { text: 'iZotope Nectar Advanced 4.0.1 人声混音', link: '/software/windows/izotope-nectar-advanced-win' },
                { text: 'future.dj pro 2.1.12 DJ混音软件', link: '/software/windows/future-dj-pro-win' },
                { text: 'Nemetschek Allplan 2024.0.0 3D土木建筑设计', link: '/software/windows/nemetschek-allplan' },
                { text: 'CyberLink Promeo Premium 7.0.2231.0 视频创作编辑处理', link: '/software/windows/cyberlink-promeo-premium' },
                { text: 'Parallels Toolbox Business Edition 6.6.1.4005 PD实用工具集合', link: '/software/windows/parallels-toolbox-business-edition-win' },
                { text: '哔哩Bili.Uwp 2.2310.1.0 哔哩哔哩UWP客户端', link: '/software/windows/biliuwp' },
                { text: 'CCompare 1.21 文件/文件夹对比', link: '/software/windows/ccompare-win' },
                { text: 'Native Instruments Massive X 1.4.4 音乐低音合成插件', link: '/software/windows/native-instruments-massive-x-win' },
                { text: 'Microsoft Edge 118.0.2088.69 增强版', link: '/software/windows/microsoft-edge-plus' },
                { text: 'ConceptDraw PROJECT 14.0.0.320 项目管理', link: '/software/windows/conceptdraw-project-win' },
                { text: 'ConceptDraw OFFICE 10.0.0 绘图/思维导图/项目管理', link: '/software/windows/conceptdraw-office-win' },
                { text: 'ConceptDraw MINDMAP 15.0.0.275 思维导图', link: '/software/windows/conceptdraw-mindmap-win' },
                { text: 'ConceptDraw DIAGRAM 17.0.0.277 商业绘图设计', link: '/software/windows/conceptdraw-diagram-win' },
                { text: 'WinX HD Video Converter Deluxe 5.18.1.342 高清视频格式转换', link: '/software/windows/winx-hd-video-converter-win' },
                { text: 'RevokeMsgPatcher 1.7 微信/QQ/TIM消息防撤回补丁', link: '/software/windows/revokemsgpatcher' },
                { text: '必剪 3.3.11 视频编辑处理', link: '/software/windows/bcut-win' },
                { text: 'Steinberg HALion 7.0.20 虚拟采样与声音合成', link: '/software/windows/steinberg-halion-win' },
                { text: 'PhoneRescue for iOS 4.2.6.20231019 iPhone数据恢复', link: '/software/windows/phonerescue-for-ios-win' },
                { text: '卡饭输入法 1.0.0.300', link: '/software/windows/kafaninput' },
                { text: 'Fluent Reader 1.1.4 RSS阅读器', link: '/software/windows/fluent-reader-win' },
                { text: 'DirectX Repair 4.3.0.20888 增强版 DirectX 运行库修复工具', link: '/software/windows/directx-repair' },
                { text: 'Ashampoo Office 9 Rev A1203.0831 Office办公套件', link: '/software/windows/ashampoo-office' },
                { text: 'JDownloader 2.0.1 多线程直链下载器', link: '/software/windows/jdownloader-win' },
                { text: 'Auslogics Disk Defrag Ultimate 4.13.0.1 磁盘碎片整理', link: '/software/windows/auslogics-disk-defrag-ultimate' },
                { text: 'Auto Dark Mode 10.4.1 根据时间自动切换桌面壁纸', link: '/software/windows/auto-dark-mode' },
                { text: 'Cinebench 2024.0 CPU性能基准测试', link: '/software/windows/cinebench-win' },
                { text: 'Groupy 2.12 软件窗口标签化管理', link: '/software/windows/groupy' },
                { text: 'FastStone Image Viewer 7.8 图片浏览管理', link: '/software/windows/faststone-image-viewer' },
                { text: 'Perfino 4.1 Java 性能监控分析', link: '/software/windows/perfino-win' },
                { text: '中望3D 2024 28.05 国产三维CAD/CAE/CAM一体化', link: '/software/windows/zw3d' },
                { text: 'iZotope VocalSynth Pro 2.6.1 电音人声效果合成插件', link: '/software/windows/izotope-vocalsynth-pro-win' },
                { text: 'Adobe Firefly AI 25.0.0.2265 Beta PS创意AI模型插件', link: '/software/windows/firefly-ai' },
                { text: 'Boris FX Optics 2024.0.1.63 图像特效滤镜处理', link: '/software/windows/boris-fx-optics-win' },
                { text: 'iZotope Audiolens 1.2.0 音频音轨比较', link: '/software/windows/izotope-audiolens-win' },
                { text: '团子翻译器 4.5.8 OCR截图生肉翻译', link: '/software/windows/dango-translator' },
                { text: 'proDAD VitaScene 5.0.313 视频转场特效处理', link: '/software/windows/prodad-vitascene' },
                { text: 'CyberLink Screen Recorder Deluxe 4.3.1.27960 屏幕录像编辑', link: '/software/windows/cyberlink-screen-recorder-deluxe' },
                { text: 'TrafficMonitor 1.84.1 网速悬浮窗监控', link: '/software/windows/trafficmonitor' },
                { text: 'MusicPlayer2 2.76.1 音乐播放器', link: '/software/windows/musicplayer2' },
                { text: 'WinX DVD Ripper Platinum 8.22.1.246 DVD视频格式转换', link: '/software/windows/winx-dvd-ripper-win' },
                { text: 'WinX DVD Copy Pro 3.9.8 DVD刻录备份', link: '/software/windows/winx-dvd-copy-pro' },
                { text: 'Royal TS 6.1.51214 远程桌面连接管理', link: '/software/windows/royal-ts-win' },
                { text: 'PCDJ DEX Pro 3.20.7 DJ打碟混音', link: '/software/windows/pcdj-dex-pro-win' },
                { text: 'MediBang Paint Pro 29.1 漫画插画绘图设计', link: '/software/windows/medibang-paint-pro-win' },
                { text: 'Exposure Blow Up 3.1.6.0 PS/LR图片无损放大插件', link: '/software/windows/exposure-blow-up-win' },
                { text: '微软电脑管家Microsoft PC Manager 3.6.3.0 Beta 防病毒安全防护', link: '/software/windows/microsoft-pc-manager' },
                { text: 'ClipboardFusion Pro 6.1 剪贴板管理', link: '/software/windows/clipboardfusion-pro' },
                { text: 'VOCALOID 6 SE 6.1.1 歌声与人声合成器', link: '/software/windows/vocaloid' },
                { text: 'QuickRedis 2.7.1 Redis可视化管理', link: '/software/windows/quickredis-win' },
                { text: 'OpenAI Translator 0.0.68 AI实时划词翻译', link: '/software/windows/openai-translator-win' },
                { text: 'BingGPT 0.3.7 新必应AI聊天', link: '/software/windows/binggpt-win' },
                { text: '洋芋田图像工具箱 3.5.1 图片批量处理', link: '/software/windows/potatofield-imagetoolkit-win' },
                { text: 'Everyone Piano 2.5.9.4 钢琴键盘模拟', link: '/software/windows/everyone-piano' },
                { text: 'WindowBlinds 11.02 自定义系统外观主题', link: '/software/windows/windowblinds' },
                { text: 'Aechoterm 4.0.1 终端模拟器/SSH客户端', link: '/software/windows/aechoterm-win' },
                { text: 'VNote 3.17.0 Markdown写作编辑', link: '/software/windows/vnote-win' },
                { text: 'Serato Sample 2.0.0 音频采样插件', link: '/software/windows/serato-sample' },
                { text: 'MoZhiMusicPlayer 3.0 仿QQ音乐本地播放器', link: '/software/windows/mozhimusicplayer' },
                { text: 'Dinosaur Rss 1.10.1 RSS阅读管理', link: '/software/windows/dinosaur-rss-win' },
                { text: 'Xojo 2018 R1.1 18.1.1.40922 可视化编程开发', link: '/software/windows/xojo-win' },
                { text: 'PRemoteM 0.7.2.8 远程桌面控制', link: '/software/windows/premotem' },
                { text: 'SkinFiner 5.1 人像智能磨皮润色', link: '/software/windows/skinfiner' },
                { text: 'ClickMonitorDDC 7.2 屏幕亮度调节', link: '/software/windows/clickmonitorddc' },
                { text: 'Avira Antivirus Pro 15.0.2201.2134 防病毒安全防护', link: '/software/windows/avira-antivirus-pro' },
                { text: 'Edgeless Beta 4.1.0 PE装机维护', link: '/software/windows/edgeless' },
                { text: 'Adobe Premiere Pro 2023 23.6.0.65 精简版 视频编辑处理', link: '/software/windows/adobe-premiere-pro-lite' },
                { text: 'Wondershare MindMaster Pro 10.7.2.204 亿图脑图/思维导图', link: '/software/windows/wondershare-mindmaster-pro-win' },
                { text: '网易云音乐 3.0.1.201589 精简优化版', link: '/software/windows/cloudmusic' },
                { text: 'Ashampoo ZIP Pro 4.50.01 解压缩软件', link: '/software/windows/ashampoo-zip-pro' },
                { text: 'Imagine 0.7.5 PNG与JPEG图片压缩', link: '/software/windows/imagine-win' },
                { text: 'Corel PaintShop Pro 2023 Ultimate 25.2.0.58 图像编辑设计', link: '/software/windows/corel-paintshop-pro-ultimate' },
                { text: 'AnyDroid 7.5.0.20230627 安卓数据传输管理', link: '/software/windows/anydroid-win' },
                { text: '雨量计Rainmeter 4.5.18 桌面个性化定制', link: '/software/windows/rainmeter' },
                { text: 'Monit 0.8.1 桌面小组件', link: '/software/windows/monit-win' },
                { text: 'MicaForEveryone 1.3.1.2 系统背景自定义', link: '/software/windows/micaforeveryone' },
                { text: 'Avid Media Composer 2023.3.0 非线性视频编辑处理', link: '/software/windows/avid-media-composer-win' },
                { text: 'Scanahand Premium 8.0.0.311 个性化手写字体生成', link: '/software/windows/scanahand-premium' },
                { text: 'ON1 Photo Keyword AI 2023.5 17.5.1.14079 图片AI搜索管理', link: '/software/windows/on1-photo-keyword-ai-win' },
                { text: 'ON1 Sky Swap AI 2023.5 17.5.1.14051 图片AI天空替换处理', link: '/software/windows/on1-sky-swap-ai-win' },
                { text: 'DevToys 1.0.13.0 开发人员工具集', link: '/software/windows/devtoys' },
                { text: 'Redshift 3.0.45 GPU加速渲染器插件', link: '/software/windows/redshift' },
                { text: 'iZotope Neoverb Pro 1.3.0 智能音乐混响', link: '/software/windows/izotope-neoverb-pro-win' },
                { text: 'Adobe XD 57.1.12.2 UI/UX界面设计与原型交互', link: '/software/windows/adobe-xd-win' },
                { text: 'Hyper 4.0.0 canary 5 命令行终端美化模拟器', link: '/software/windows/hyper-win' },
                { text: 'PhoneRescue for Android 3.8.0.20230628 Android数据恢复', link: '/software/windows/phonerescue-for-android-win' },
                { text: 'set.a.light 3D STUDIO 2.5.9 3D摄影棚模拟布光', link: '/software/windows/set-a-light-3d-studio-win' },
                { text: 'Pano2VR Pro 7.0.4 3D全景图像制作', link: '/software/windows/pano2vr-pro-win' },
                { text: 'Free Icon Tool 2.2.0 软件图标提取', link: '/software/windows/free-icon-tool' },
                { text: '微PE工具箱 2.3 PE装机维护', link: '/software/windows/wepe' },
                { text: 'Red Giant Shooter Suite 13.1.15 红巨星镜头修复插件套装', link: '/software/windows/red-giant-shooter-suite-win' },
                { text: 'Red Giant PluralEyes 2023.0.0 音视频同步调整', link: '/software/windows/red-giant-pluraleyes-win' },
                { text: 'Red Giant Keying Suite 11.1.11 红巨星抠像合成插件套装', link: '/software/windows/red-giant-keying-suite-win' },
                { text: 'Red Giant Effects Suite 11.1.13 红巨星动态视频特效插件套装', link: '/software/windows/red-giant-effects-suite-win' },
                { text: 'MAGIX SOUND FORGE Audio Cleaning Lab 4 26.0.0.23 音频编辑与清理修复', link: '/software/windows/magix-sound-forge-audio-cleaning-lab' },
                { text: 'MAGIX Movie Edit Pro 2022 Premium 21.0.2.138 视频编辑处理', link: '/software/windows/magix-movie-edit-pro-premium' },
                { text: 'MAGIX ACID Pro Suite 11.0.2.21 音频编辑制作套件', link: '/software/windows/magix-acid-pro-suite' },
                { text: 'ON1 HDR 2023.5 17.5.1.14051 HDR图像处理', link: '/software/windows/on1-hdr-win' },
                { text: 'ON1 Resize AI 2023.5 17.5.1.14051 图片无损缩放', link: '/software/windows/on1-resize-ai-win' },
                { text: 'ON1 Portrait AI 2023.5 17.5.1.14051 智能AI人像处理', link: '/software/windows/on1-portrait-ai-win' },
                { text: 'iMindMap Ultimate 10.1.1 思维导图', link: '/software/windows/imindmap-ultimate' },
                { text: 'Windows Update Blocker 1.8 禁止系统自动更新', link: '/software/windows/windows-update-blocker' },
                { text: 'T20天正日照分析软件 8.0 建筑日照分析设计', link: '/software/windows/tangent-sun' },
                { text: 'T20天正结构软件 9.0 建筑结构分析设计', link: '/software/windows/tangent-asd' },
                { text: 'T20天正建筑节能软件 8.0 建筑节能优化分析', link: '/software/windows/tangent-bec' },
                { text: 'QQ游戏大厅 5.48.57967.0 去广告精简版', link: '/software/windows/qqgame' },
                { text: '比译 0.5.0 划词/截图翻译与词典', link: '/software/windows/biyi-win' },
                { text: 'Tiles 2.0 磁贴快速启动', link: '/software/windows/tiles' },
                { text: 'SoundPackager 10.0 系统声音自定义', link: '/software/windows/soundpackager' },
                { text: 'Multiplicity 3.44 键鼠无线共享', link: '/software/windows/multiplicity' },
                { text: 'Curtains 1.19.1 Windows桌面美化定制', link: '/software/windows/curtains' },
                { text: 'CursorFX 4.03 鼠标光标定制', link: '/software/windows/cursorfx' },
                { text: 'Movavi Gecata 6.1.2 游戏屏幕录制', link: '/software/windows/movavi-gecata' },
                { text: 'ViceVersa Pro 5 Build 5005 数据同步备份', link: '/software/windows/viceversa-pro' },
                { text: 'PopChar 8.7 特殊字符管理', link: '/software/windows/popchar-win' },
                { text: 'AxGlyph 1.60 矢量绘图设计', link: '/software/windows/axglyph' },
                { text: '文件蜈蚣 2.82 直链BT磁链下载器', link: '/software/windows/filecentipede' },
                { text: 'StarUML 5.1.0 UML建模设计', link: '/software/windows/staruml-win' },
                { text: 'SmartPLS 3.2.9 模型统计分析', link: '/software/windows/smartpls-win' },
                { text: 'Xfer Records Serum & SerumFX 1.363 音频波形合成插件', link: '/software/windows/xfer-records-serum-serumfx-win' },
                { text: 'Xfer Records LFOTool 1.768 音频低频振荡插件', link: '/software/windows/xfer-records-lfotool-win' },
                { text: 'Xfer Records Cthulhu 1.217 音乐和弦制作插件', link: '/software/windows/xfer-records-cthulhu-win' },
                { text: 'Exposure Snap Art 4.1.4.0 PS手绘滤镜插件', link: '/software/windows/exposure-snap-art-win' },
                { text: 'Grids for Instagram 8.5.8 Instagram图片客户端', link: '/software/windows/grids-for-instagram-win' },
                { text: 'SubLab XL 1.0.4 Beta 2 808低音合成器插件', link: '/software/windows/sublab-xl-win' },
                { text: 'SubLab 1.1.9 808低音合成插件', link: '/software/windows/sublab-win' },
                { text: 'Circle² 2.2.1 音频效果合成器', link: '/software/windows/circle-win' },
                { text: 'Vital Audio Vital Pro 1.5.5 频谱波表合成器', link: '/software/windows/vital-audio-vital-pro-win' },
                { text: 'Sound Booster 1.11.0.514 系统音效增强', link: '/software/windows/sound-booster' },
                { text: 'Exe4j 9.0 Java程序打包与部署', link: '/software/windows/exe4j-win' },
                { text: 'FastStone Photo Resizer 4.4 图像转换与重命名调整', link: '/software/windows/faststone-photo-resizer' },
                { text: 'FastStone MaxView 3.4 图片浏览管理', link: '/software/windows/faststone-maxview' },
                { text: 'Gridea 0.9.3 静态博客Markdown写作编辑', link: '/software/windows/gridea-win' },
                { text: 'SwitchHosts! 4.2.0.6105 hosts文件编辑', link: '/software/windows/switchhosts-win' },
                { text: 'Motrix 1.8.19 直链BT磁链下载器', link: '/software/windows/motrix-win' },
                { text: '鲁大师 6.1022.3275.303 去广告精简版 硬件性能检测', link: '/software/windows/ludashi' },
                { text: 'WonderShare Ubackit 3.0.1.9 数据备份还原', link: '/software/windows/wondershare-ubackit' },
                { text: 'myBase Desktop 7.3.5 分类管理自由格式数据库', link: '/software/windows/mybase-desktop' },
                { text: 'Topaz DeNoise AI 3.7.2 AI图片智能降噪', link: '/software/windows/topaz-denoise-ai-win' },
                { text: 'SmoothScroll 1.2.4 鼠标增强', link: '/software/windows/smoothscroll-win' },
                { text: 'MouseInc 2.13.4 鼠标/触控板手势增强', link: '/software/windows/mouseinc' },
                { text: 'GestureSign 8.1.0 鼠标/触控板手势增强', link: '/software/windows/gesturesign' },
                { text: 'WYSIWYG R36 舞台灯光特效设计模拟', link: '/software/windows/wysiwyg' },
                { text: 'WidsMob Viewer Pro 2.7.0.118 照片管理查看', link: '/software/windows/widsmob-viewer-pro-win' },
                { text: 'WidsMob MediaVault 1.7.0.78 照片视频加密隐藏', link: '/software/windows/widsmob-mediavault' },
                { text: 'Toontrack EZmix 2.2.4 音频混音效果', link: '/software/windows/toontrack-ezmix-win' },
                { text: 'Toontrack EZdrummer 3.0.6 +Core Library 虚拟鼓音乐制作', link: '/software/windows/toontrack-ezdrummer-win' },
                { text: 'Luminar AI 1.5.5.10909 AI图像编辑处理', link: '/software/windows/luminar-ai-win' },
                { text: 'NxShell 1.9.3 终端模拟器/SSH客户端', link: '/software/windows/nxshell-win' },
                { text: 'ExpanDrive 2023.4.1 FTP/SFTP连接管理', link: '/software/windows/expandrive-win' },
                { text: 'DeepL 4.5.0.8268 智能AI翻译', link: '/software/windows/deepl-win' },
                { text: 'CopyTranslator 11.0.2 外语复制即翻译', link: '/software/windows/copytranslator-win' },
                { text: 'AU全套插件一键安装包Pro 1.0 AU全套汉化插件', link: '/software/windows/au-plugins-suite' },
                { text: 'C4D全套插件一键安装包Pro 2.3 C4D全套汉化插件', link: '/software/windows/c4d-plugins-suite' },
                { text: 'LR全套插件一键安装包Pro 19.10 LR全套汉化插件', link: '/software/windows/lr-plugins-suite' },
                { text: '幕享 1.1.6 无线投屏', link: '/software/windows/letsview-win' },
                { text: 'MusicTools 1.9.8.3 无损音乐下载', link: '/software/windows/musictools' },
                { text: 'Firewall App Blocker 1.9 防火墙软件', link: '/software/windows/firewall-app-blocker' },
                { text: 'Dism++ 10.1.1002.2 系统精简优化', link: '/software/windows/dism' },
                { text: 'Ashampoo Photo Commander 17.0.3 图像管理查看', link: '/software/windows/ashampoo-photo-commander' },
                { text: '美图秀秀 6.5.7.0 去广告精简版', link: '/software/windows/meituxiuxiu' },
                { text: 'Apower Screen Recorder Pro 2.4.1.7 傲软录屏王', link: '/software/windows/apower-screen-recorder-pro' },
                { text: 'WidsMob WebP 1.7.0.140 WebP图片查看与转换', link: '/software/windows/widsmob-webp-win' },
                { text: 'WidsMob Portrait Pro 2.2.0.210 人像照片编辑处理', link: '/software/windows/widsmob-portrait-pro-win' },
                { text: 'WidsMob PhotoVault 1.7.0.78 照片加密管理', link: '/software/windows/widsmob-photovault-win' },
                { text: 'WidsMob Panorama 2.1.0.122 全景图像拼接', link: '/software/windows/widsmob-panorama-win' },
                { text: 'WidsMob Montage 2.6.0.86 将图片变成马赛克与蒙太奇效果', link: '/software/windows/widsmob-montage-win' },
                { text: 'WidsMob ImageConvert 2.2.0.190 图片格式转换', link: '/software/windows/widsmob-imageconvert-win' },
                { text: 'WidsMob HDR 2.1.0.118 照片光照渲染效果处理', link: '/software/windows/widsmob-hdr-win' },
                { text: 'WidsMob Denoise 1.2.0.88 多功能图像降噪', link: '/software/windows/widsmob-denoise-win' },
                { text: 'WidsMob AI Retoucher 2.5.0.126 AI照片编辑器', link: '/software/windows/widsmob-ai-retoucher-win' },
                { text: 'WebTorrent 0.24.0 BT种子在线播放', link: '/software/windows/webtorrent-win' },
                { text: 'Ashampoo Video Optimizer Pro 2.0.1.0 视频优化处理', link: '/software/windows/ashampoo-video-optimizer-pro' },
                { text: 'Ashampoo Video Converter 1.0.2.1 视频格式转换器', link: '/software/windows/ashampoo-video-converter' },
                { text: 'Ashampoo Soundstage Pro 1.0.3 环绕音效增强', link: '/software/windows/ashampoo-soundstage-pro' },
                { text: 'Ashampoo PDF Pro 3.0.8 PDF编辑器', link: '/software/windows/ashampoo-pdf-pro' },
                { text: 'Ashampoo Movie Studio Pro 3.0.1 视频编辑器', link: '/software/windows/ashampoo-movie-studio-pro' },
                { text: 'McAfee Endpoint Security 10.7.0.1390.13 迈克菲防病毒查杀', link: '/software/windows/mcafee-endpoint-security-win' },
                { text: 'ApowerShow 1.1.3.0 电子相册制作', link: '/software/windows/apowershow' },
                { text: 'VideoScribe Pro 3.7.3103 手绘动画制作', link: '/software/windows/videoscribe-pro-win' },
                { text: 'Vector Magic 1.15 矢量图转换', link: '/software/windows/vector-magic-win' },
                { text: 'Topaz Studio 2.3.2 AI创意照片编辑', link: '/software/windows/topaz-studio-win' },
                { text: 'Topaz Sharpen AI 4.1.0 AI图片清晰度锐化增强', link: '/software/windows/topaz-sharpen-ai-win' },
                { text: 'Topaz Mask AI 1.3.9 AI智能抠图', link: '/software/windows/topaz-mask-ai-win' },
                { text: 'Topaz JPEG to RAW AI 2.2.1 JPEG转高质量RAW', link: '/software/windows/topaz-jpeg-to-raw-ai-win' },
                { text: 'Topaz Adjust AI 1.0.6 HDR图片滤镜渲染增强', link: '/software/windows/topaz-adjust-ai-win' },
                { text: 'PCMark Professional 2.1.2574 电脑性能基准测试跑分', link: '/software/windows/futuremark-pcmark-professional' },
                { text: 'Tickeys 1.2.0 定制键盘敲击音效', link: '/software/windows/tickeys-win' },
                { text: 'Thief 4.0.0 上班摸鱼神器', link: '/software/windows/thief-win' },
                { text: 'Termius 7.13.0 终端模拟器/SSH/SFTP客户端', link: '/software/windows/termius-win' },
                { text: 'Tableau Desktop Professional 2021.4.4 可视化数据分析', link: '/software/windows/tableau-desktop-professional-win' },
                { text: 'SPlayer 4.9.4 射手影音视频播放器', link: '/software/windows/splayer-win' },
                { text: 'SmartSynchronize 4.3.1 文件/文件夹对比', link: '/software/windows/smartsynchronize-win' },
                { text: 'SmartGit 21.2.4 Git客户端', link: '/software/windows/smartgit-win' },
                { text: 'Luminar 4.3.3 图像后期编辑处理', link: '/software/windows/luminar-win' },
                { text: 'Aurora HDR 2019 1.0.0.2550 HDR图像编辑处理', link: '/software/windows/aurora-hdr-win' },
                { text: 'Sidify DeeKeep Deezer Music Converter 1.3.3 Deezer音乐转换器', link: '/software/windows/sidify-deekeep-deezer-music-converter-win' },
                { text: 'QuickCut 1.8.0 视频编辑处理', link: '/software/windows/quickcut-win' },
                { text: 'Navicat Premium Essentials 16.1.15 多连接数据库管理开发', link: '/software/windows/navicat-premium-essentials-win' },
                { text: 'PhoneClean Pro 5.6.0.20210629 iPhone/iPad系统优化清理', link: '/software/windows/phoneclean-pro-win' },
                { text: 'Native Instruments Replika XT 1.3.0 音频延迟效果器插件', link: '/software/windows/native-instruments-replika-xt-win' },
                { text: 'Native Instruments Replika 1.6.0 音频延迟效果器插件', link: '/software/windows/native-instruments-replika-win' },
                { text: 'MovieMator Video Editor Pro 3.2.0 剪大师专业版-视频编辑', link: '/software/windows/moviemator-video-editor-pro-win' },
                { text: 'Movavi Video Suite 2022 22.4.1 多媒体编辑处理套件', link: '/software/windows/movavi-video-suite-win' },
                { text: 'Movavi Video Converter 22 Premium 22.5.0 音视频格式转换', link: '/software/windows/movavi-video-converter-win' },
                { text: 'Movavi Slideshow Maker 8.0.0 幻灯片制作', link: '/software/windows/movavi-slideshow-maker-win' },
                { text: 'Movavi Picverse 1.11.0 图像AI编辑处理', link: '/software/windows/movavi-picverse-win' },
                { text: 'Movavi PDFChef 2022 22.2.0 PDF编辑器', link: '/software/windows/movavi-pdfchef-win' },
                { text: 'Movavi PDF Editor 3.2.0 PDF编辑器', link: '/software/windows/movavi-pdf-editor-win' },
                { text: 'Movavi Photo Editor 6.7.1 照片编辑处理', link: '/software/windows/movavi-photo-editor-win' },
                { text: 'Movavi Academic 2022 22.0.0 教育课程录制编辑', link: '/software/windows/movavi-academic-win' },
                { text: 'Memocast 2.2.3 为知笔记编辑器', link: '/software/windows/memocast-win' },
                { text: 'MarkText 0.17.1 Markdown写作编辑', link: '/software/windows/marktext-win' },
                { text: 'KeeWeb 1.18.7 密码管理器', link: '/software/windows/keeweb-win' },
                { text: 'JPEGmini Pro 4.1.0 JPG图片无损压缩', link: '/software/windows/jpegmini-pro-win' },
                { text: 'JixiPix Simply HDR 3.2.15 HDR照片合成', link: '/software/windows/jixipix-simply-hdr-win' },
                { text: 'JixiPix Romantic Photo 2.3.5 图片浪漫写真特效', link: '/software/windows/jixipix-romantic-photo-win' },
                { text: 'JixiPix Portrait Painter 1.37 照片转油画效果', link: '/software/windows/jixipix-portrait-painter-win' },
                { text: 'JixiPix Pop Dot Comics 2.11 照片转漫画', link: '/software/windows/jixipix-pop-dot-comics-win' },
                { text: 'JixiPix Artoon 1.11.0 照片转漫画', link: '/software/windows/jixipix-artoon-win' },
                { text: 'JixiPix Aquarella 1.38 图片转水彩画', link: '/software/windows/jixipix-aquarella-win' },
                { text: 'iZotope Vocal Doubler 1.0.0 声音倍增插件', link: '/software/windows/izotope-vocal-doubler-win' },
                { text: 'iZotope Stutter Edit 2.1.0 MIDI缓冲效果控制插件', link: '/software/windows/izotope-stutter-edit-win' },
                { text: 'iZotope BreakTweaker 1.02c 音频节拍器插件', link: '/software/windows/izotope-breaktweaker-win' },
                { text: 'InPixio Photo Cutter 10.5.7633 数码照片抠图', link: '/software/windows/inpixio-photo-cutter-win' },
                { text: 'InPixio Photo Editor 10.5.7647 照片滤镜编辑处理', link: '/software/windows/inpixio-photo-editor-win' },
                { text: 'InPixio Photo Eraser 10.4.7612 照片橡皮擦转场特效', link: '/software/windows/inpixio-photo-eraser-win' },
                { text: 'InPixio Photo Studio Ultimate 12.0.8112.30215 照片编辑处理套件', link: '/software/windows/inpixio-photo-studio-ultimate' },
                { text: 'iExplorer 4.4.2 iOS设备管理器', link: '/software/windows/iexplorer-win' },
                { text: 'SnapGene 5.3.1 DNA序列生物分析', link: '/software/windows/snapgene-win' },
                { text: 'Foxmail 7.2.25.148 邮件收发管理', link: '/software/windows/foxmail-win' },
                { text: 'FastGithub 2.1.4 GitHub加速神器', link: '/software/windows/fastgithub-win' },
                { text: 'Exposure Eye Candy 7.2.3.189 PS眼睛糖果滤镜插件', link: '/software/windows/exposure-eye-candy-win' },
                { text: 'Eagle 1.8.2 图像管理查看', link: '/software/windows/eagle-win' },
                { text: 'CrossFTP Enterprise 1.99.9 FTP/SFTP客户端', link: '/software/windows/crossftp-enterprise-win' },
                { text: 'CorelCAD 2023 2022.5 Build 22.3.1.4090 CAD绘图设计', link: '/software/windows/corelcad-win' },
                { text: 'Corel WinDVD Pro 12.0.0.265 高清蓝光视频播放器', link: '/software/windows/corel-windvd-pro' },
                { text: 'BoostNote 0.23.1 程序员笔记记录', link: '/software/windows/boostnote-win' },
                { text: 'BilibiliVideoDownload 3.3.3 Bilibili视频下载', link: '/software/windows/bilibilivideodownload-win' },
                { text: 'Avid Sibelius Ultimate 2022.9.1464 乐谱简谱制作', link: '/software/windows/avid-sibelius-ultimate-win' },
                { text: 'Atom 1.60.0 代码编辑器', link: '/software/windows/atom-win' },
                { text: 'ATLAS.ti 9.1.3.0 定性数据分析', link: '/software/windows/atlasti-win' },
                { text: 'Perfectly Clear QuickDesk & QuickServer 4.2.0.2336 照片批量校正处理', link: '/software/windows/perfectly-clear-quickdesk-quickserver-win' },
                { text: 'Perfectly Clear Essentials 3.5.7.1160 LR/PS图像清晰化处理', link: '/software/windows/perfectly-clear-essentials-win' },
                { text: 'Perfectly Clear Complete 3.12.2.2045 摄影照片后期处理', link: '/software/windows/perfectly-clear-complete-win' },
                { text: 'Artlantis 2021.2 9.5.2.32853 3D建筑设计渲染', link: '/software/windows/artlantis-win' },
                { text: 'Apower Data Recovery 14.2.1 傲软数据恢复王', link: '/software/windows/apower-data-recovery' },
                { text: 'ApowerRescue 1.0.6.0 iPhone/iPad数据恢复', link: '/software/windows/apowerrescue' },
                { text: 'AI配音专家XZVoice 2.1.1 文字转语音', link: '/software/windows/xzvoice-win' },
                { text: 'Wondershare Recoverit 11.0.0.13 万兴数据恢复专家', link: '/software/windows/wondershare-recoverit-win' },
                { text: 'EdrawProject 1.4.0 亿图项目管理/甘特图', link: '/software/windows/wondershare-edrawproject-win' },
                { text: 'Wondershare Dr.Fone 10.7.2.324 苹果/安卓手机工具箱', link: '/software/windows/wondershare-drfone' },
                { text: '网易有道词典 8.9.6.0 去广告VIP破解版', link: '/software/windows/youdao-dict' },
                { text: '小画桌 1.0.0 在线协同办公', link: '/software/windows/xiaohuazhuo-win' },
                { text: '云日历 1.29 待办事项与日历提醒', link: '/software/windows/mytime-win' },
                { text: '图压 0.4.1 图片批量压缩', link: '/software/windows/tuya-win' },
                { text: 'QQ拼音输入法 6.6.6304.400 去广告精简版', link: '/software/windows/qqpinyin' },
                { text: '酷狗音乐 10.0.53.24820 去广告精简版', link: '/software/windows/kugou-music' },
                { text: '火萤视频桌面 5.2.5.1 动态视频壁纸', link: '/software/windows/huoying-video-desktop-win' },
                { text: '多多投屏 0.1.20 电视投屏', link: '/software/windows/easy-to-tv-win' },
                { text: 'Adobe Photoshop 2023 23.4.2.603 茶末余香增强版 图像编辑处理设计', link: '/software/windows/adobe-photoshop-plus' },
                { text: 'Adobe Illustrator 2021 25.3.1.390 精简版 矢量绘图设计', link: '/software/windows/adobe-illustrator-lite' },
                { text: 'Adobe Dreamweaver 2021 21.1.0.15413 精简版 代码编辑器', link: '/software/windows/adobe-dreamweaver-lite' },
                { text: 'Adobe Audition 2020 13.0.13.46 精简版 数字音频编辑', link: '/software/windows/adobe-audition-lite' },
                { text: 'Adobe After Effects 2020 17.7.0.45 精简版 视频后期优化处理', link: '/software/windows/adobe-after-effects-lite' },
                { text: 'AE全套插件一键安装包Pro 4.7 AE全套汉化插件', link: '/software/windows/ae-plugins-suite' },
                { text: 'PR全套插件一键安装包Pro 4.1.2 PR全套汉化插件', link: '/software/windows/pr-plugins-suite-win' },
                { text: 'PS全套插件一键安装包Pro 4.5 PS全套汉化插件', link: '/software/windows/ps-plugins-suite' },
                { text: 'CCMaker 1.3.16 Adobe软件在线下载', link: '/software/windows/ccmaker' },
                { text: 'Adobe Home Screen FIX 4.0.2 Adobe软件主屏幕修复补丁', link: '/software/windows/adobe-home-screen-fix' },
                { text: 'Windows ISO Downloader 8.46.0.154 Windows/Office下载器', link: '/software/windows/windows-iso-downloader' },
                { text: 'MarkdownPad 2.5.0.27920 Markdown写作编辑', link: '/software/windows/markdownpad' },
                { text: 'IObit Start Menu 8 Pro 6.0.0.2 开始菜单增强', link: '/software/windows/iobit-start-menu-pro' },
                { text: 'Iris Pro 1.2.0 屏幕护眼与蓝光过滤', link: '/software/windows/iris-pro-win' },
                { text: 'HofoSetup 8.5.6.1888 火凤安装包制作大师', link: '/software/windows/hofosetup' },
                { text: 'HD Tune Pro 5.75 硬盘信息检测', link: '/software/windows/hd-tune-pro' },
                { text: 'HashManager 1.0.0 批量修改文件哈希值', link: '/software/windows/hashmanager' },
                { text: 'Hasher 2.0 哈希值/MD5值检测', link: '/software/windows/hasher' },
                { text: 'GifCam 7.0 GIF动态图录制', link: '/software/windows/gifcam' },
                { text: 'FlashFXP 5.4.0.3970 FTP/FXP协议传输', link: '/software/windows/flashfxp' },
                { text: 'Fiddler 5.0.20202 网络协议抓包调试', link: '/software/windows/fiddler' },
                { text: 'Defender Exclusion Tool 1.2 排除Defender误杀文件/目录', link: '/software/windows/defender-exclusion-tool' },
                { text: 'Defender Control 2.1 永久开启/关闭Windows Defender', link: '/software/windows/defender-control' },
                { text: 'CleanMyPC 1.12.2.2178 系统优化清理', link: '/software/windows/cleanmypc' },
                { text: 'Bulk Rename Utility 3.4.4.0 文件批量重命名', link: '/software/windows/bulk-rename-utility' },
                { text: 'BakaXL 3.2.3.2 Minecraft我的世界启动器', link: '/software/windows/bakaxl' },
                { text: 'AS SSD Benchmark 2.0.7316.34247 SSD固态硬盘检测', link: '/software/windows/as-ssd-benchmark' },
                { text: '优酷视频 8.1.0.1280 去广告精简版', link: '/software/windows/youku-video' },
                { text: 'Focusky 4.0.2 PPT演示制作', link: '/software/windows/focusky' },
                { text: 'Flip PDF Corporate 2.4.10.3 PDF电子书翻页', link: '/software/windows/flip-pdf-corporate' },
                { text: '金山PDF专业版 10.8.0.6834 PDF阅读器', link: '/software/windows/kingsoftpdf' },
                { text: '1Password 7.4.750 密码管理器', link: '/software/windows/1password-win' },
                
              ],
            },
            {
              text: "MacOs",
              items: [
                { text: 'CotEditor 4.8.6 轻量级纯文本编辑器', link: '/software/macos/coteditor' },
                { text: 'Zettlr 3.2.0 论文Markdown写作编辑', link: '/software/macos/zettlr-mac' },
                { text: 'Medis 2.15.1 MAS Redis可视化管理', link: '/software/macos/medis' },
                { text: 'JetBrains WebStorm 2024.1.4 JavaScript集成开发环境', link: '/software/macos/jetbrains-webstorm-mac' },
                { text: 'JetBrains RubyMine 2024.1.3 Rails/Ruby集成开发环境', link: '/software/macos/jetbrains-rubymine-mac' },
                { text: 'JetBrains Rider 2024.1.3 .NET集成开发环境', link: '/software/macos/jetbrains-rider-mac' },
                { text: 'JetBrains PyCharm Pro 2024.1.3 Python集成开发环境', link: '/software/macos/jetbrains-pycharm-pro-mac' },
                { text: 'JetBrains PhpStorm 2024.1.3 PHP集成开发环境', link: '/software/macos/jetbrains-phpstorm-mac' },
                { text: 'JetBrains IntelliJ IDEA Ultimate 2024.1.3 Java集成开发环境', link: '/software/macos/jetbrains-intellij-idea-ultimate-mac' },
                { text: 'JetBrains GoLand 2024.1.3 Go语言集成开发环境', link: '/software/macos/jetbrains-goland-mac' },
                { text: 'JetBrains DataGrip 2024.1.4 多引擎数据库管理开发', link: '/software/macos/jetbrains-datagrip-mac' },
                { text: 'JetBrains CLion 2024.1.3 C/C++集成开发环境', link: '/software/macos/jetbrains-clion-mac' },
                { text: 'GeoGebra Classic 6.0.845.0 动态数学绘图', link: '/software/macos/geogebra-classic-mac' },
                { text: 'Adobe Camera Raw 16.3.1 Adobe滤镜增效处理插件', link: '/software/macos/adobe-camera-raw-mac' },
                { text: 'Wondershare Recoverit 12.5.15.16 万兴数据恢复专家', link: '/software/macos/wondershare-recoverit-mac' },
                { text: '小历TinyCal 1.17.5 MAS 小而美的菜单栏日历', link: '/software/macos/tinycal' },
                { text: 'Stats 2.10.17 菜单栏系统监控', link: '/software/macos/stats' },
                { text: 'Screen Wonders 3.0.0 MAS 3D动态壁纸', link: '/software/macos/screen-wonders' },
                { text: 'Rectangle Pro 3.0.28 光标移到与窗口切换管理', link: '/software/macos/rectangle-pro' },
                { text: 'QSpace Pro 4.3.2.013 Beta +4个扩展插件 多窗格文件管理器', link: '/software/macos/qspace-pro' },
                { text: 'QOwnNotes 24.6.1 笔记记录与待办事项', link: '/software/macos/qownnotes-mac' },
                { text: 'Perfectly Clear WorkBench 4.6.1.2664 图像清晰度处理', link: '/software/macos/perfectly-clear-workbench-mac' },
                { text: 'Parallels Toolbox Business Edition 6.7.0.5122 PD实用工具集合', link: '/software/macos/parallels-toolbox-business-edition-mac' },
                { text: 'Paperlib 3.1.5 论文文献管理', link: '/software/macos/paperlib-mac' },
                { text: 'OnlySwitch 2.5.2 菜单栏多合一开关功能合集', link: '/software/macos/onlyswitch' },
                { text: 'Obsidian 1.6.3 卡片笔记编辑管理', link: '/software/macos/obsidian-mac' },
                { text: 'Maplesoft Maple 2024.1 数学科学计算', link: '/software/macos/maplesoft-maple-mac' },
                { text: 'Lumenzia 11.7.7 PS亮度蒙版插件', link: '/software/macos/lumenzia' },
                { text: 'Koodo Reader 1.6.7 Epub电子书阅读', link: '/software/macos/koodo-reader-mac' },
                { text: 'iZotope RX 11 Audio Editor Advanced 11.1.0 音频降噪修复增强', link: '/software/macos/izotope-rx-advanced-mac' },
                { text: 'Firefox 127.0 火狐浏览器', link: '/software/macos/firefox-mac' },
                { text: '欧路词典 4.6.6 英语词典翻译查询', link: '/software/macos/eudic-mac' },
                { text: 'Dropzone 4.80.15 文件拖拽增强', link: '/software/macos/dropzone' },
                { text: 'DBeaver Ultimate 24.1.0 数据库连接管理', link: '/software/macos/dbeaver-ultimate-mac' },
                { text: 'DirEqual 5.8.4 文件夹比较', link: '/software/macos/direqual' },
                { text: 'Cookie 7.3.1 浏览器缓存Cookie清理', link: '/software/macos/cookie' },
                { text: 'BricsCAD Ultimate 24.2.05 2D与3D CAD建模设计', link: '/software/macos/bricscad-ultimate-mac' },
                { text: 'Boris FX Sapphire for PS/LR 2024.51 蓝宝石视觉特效插件', link: '/software/macos/boris-fx-sapphire-for-ps-lr-mac' },
                { text: 'Boris FX Sapphire for OFX 2024.51 蓝宝石视觉特效插件', link: '/software/macos/boris-fx-sapphire-for-ofx-mac' },
                { text: 'Boris FX Sapphire for Avid 2024.51 蓝宝石视觉特效插件', link: '/software/macos/boris-fx-sapphire-for-avid-mac' },
                { text: 'Boris FX Sapphire for AE/PR 2024.51 蓝宝石视觉特效插件', link: '/software/macos/boris-fx-sapphire-for-ae-pr-mac' },
                { text: 'Bike 1.18.4 创意写作编辑', link: '/software/macos/bike' },
                { text: '百度网盘 4.35.1', link: '/software/macos/baidunetdisk-mac' },
                { text: 'Anki 24.06.2 辅助记忆学习', link: '/software/macos/anki-mac' },
                { text: 'Android Studio 2023.3.1.20 Android集成开发环境', link: '/software/macos/android-studio-mac' },
                { text: 'AirBattery 1.3.5 苹果设备电量信息显示', link: '/software/macos/airbattery' },
                { text: 'Araxis Merge Professional 2024.6000 文件/文件夹对比', link: '/software/macos/araxis-merge-professional-mac' },
                { text: 'Vellum 3.7.3 电子书出版制作', link: '/software/macos/vellum' },
                { text: 'Ice 0.9.0 菜单栏图标隐藏管理', link: '/software/macos/ice' },
                { text: 'QuickRecorder 1.3.1 屏幕录像', link: '/software/macos/quickrecorder' },
                { text: 'AirBuddy 3.0.816 AirPods耳机管理', link: '/software/macos/airbuddy' },
                { text: 'WiFi Signal 4.4.11 MAS WiFi网络管理', link: '/software/macos/wifi-signal' },
                { text: 'Pixelmator Pro 3.6.3 MAS +iCloud 图像编辑处理', link: '/software/macos/pixelmator-pro' },
                { text: 'Pika 0.0.17 颜色选择器', link: '/software/macos/pika' },
                { text: 'OBS Studio 30.2.0 Beta1 直播视频录像', link: '/software/macos/obs-studio-mac' },
                { text: 'Native Instruments Komplete Kontrol 3.2.1 MIDI键盘音源制作', link: '/software/macos/native-instruments-komplete-kontrol-mac' },
                { text: 'Logic Pro X 11.0.1 MAS 音乐制作混音编辑', link: '/software/macos/logic-pro-x' },
                { text: 'Input Source Pro 2.4.10 Beta 自动切换输入法', link: '/software/macos/input-source-pro' },
                { text: 'iNet Network Scanner 3.1.1 MAS 网络扫描管理', link: '/software/macos/inet-network-scanner' },
                { text: '键指如飞FlyKey 1.6.5 展示软件快捷键', link: '/software/macos/flykey' },
                { text: 'Feeder 4.6.4 RSS阅读管理', link: '/software/macos/feeder' },
                { text: 'Enpass 6.11.0 密码管理器', link: '/software/macos/enpass-mac' },
                { text: 'Effie 3.8.1 Markdown写作编辑', link: '/software/macos/effie-mac' },
                { text: 'Billfish 3.1.15.5 图像管理查看', link: '/software/macos/billfish-mac' },
                { text: 'BetterAndBetter 2.6.0 Beta 鼠标触控板手势增强', link: '/software/macos/betterandbetter' },
                { text: 'Apifox 2.5.30 API接口调试', link: '/software/macos/apifox-mac' },
                { text: '搜狗拼音输入法 6.15.0.9328', link: '/software/macos/sogoupyinput-mac' },
                { text: 'Mimestream 1.3.6 邮件收发管理', link: '/software/macos/mimestream' },
                { text: 'Wondershare UniConverter 15.5.10.179 音视频转换/下载/无损压缩', link: '/software/macos/wondershare-uniconverter-mac' },
                { text: 'WiFi Explorer Pro 3.6.5 WiFi网络扫描管理', link: '/software/macos/wifi-explorer-pro' },
                { text: 'Topaz Video AI 5.1.2 AI视频无损缩放增强', link: '/software/macos/topaz-video-ai-mac' },
                { text: 'SnippetsLab 2.4.2 MAS 代码管理编辑', link: '/software/macos/snippetslab' },
                { text: 'Proxyman 5.5.0 网络协议抓包调试', link: '/software/macos/proxyman-mac' },
                { text: 'Permute 3.11.10 音视频格式转换', link: '/software/macos/permute' },
                { text: 'Microsoft Edge 125.0.2535.92', link: '/software/macos/microsoft-edge-mac' },
                { text: 'Loopback 2.4.0 音频传输', link: '/software/macos/loopback' },
                { text: 'Noir 2024.2.1 MAS Safari深色模式插件', link: '/software/macos/noir' },
                { text: 'fHash 3.3.2 哈希值检测校验', link: '/software/macos/fhash-mac' },
                { text: 'draw.io 24.5.1 流程图绘制', link: '/software/macos/drawio-mac' },
                { text: 'Deckset 2.0.32 MD文档转幻灯片软件', link: '/software/macos/deckset' },
                { text: 'Dato 5.3.0 MAS 多功能菜单栏时钟', link: '/software/macos/dato' },
                { text: 'D16 Group Nithonat 2.0.0 606鼓机模拟器插件', link: '/software/macos/d16-group-nithonat-mac' },
                { text: 'Codepoint 1.17 MAS Unicode字符管理设计', link: '/software/macos/codepoint' },
                { text: 'AppFlowy 0.5.9 笔记编辑管理', link: '/software/macos/appflowy-mac' },
                { text: '腾讯QQ 6.9.36.240606', link: '/software/macos/qq-mac' },
                { text: 'Yate 6.20 音频标签编辑器', link: '/software/macos/yate' },
                { text: 'Visual Studio Code 1.90.0 代码编辑器', link: '/software/macos/visual-studio-code-mac' },
                { text: 'Ulysses 35 MAS Markdown写作编辑', link: '/software/macos/ulysses' },
                { text: 'Topaz Gigapixel AI 7.1.4 AI图片无损缩放', link: '/software/macos/topaz-gigapixel-ai-mac' },
                { text: 'Togu Audio Line TAL-J-8 1.8.4 单声道低音合成器插件', link: '/software/macos/togu-audio-line-tal-j-8-mac' },
                { text: '腾讯柠檬清理Tencent Lemon 5.1.8.1 系统优化清理', link: '/software/macos/lemon-cleaner' },
                { text: 'RayLink 8.0.6.8 远程桌面控制', link: '/software/macos/raylink-mac' },
                { text: 'RAW Power 3.4.22 MAS RAW照片编辑处理', link: '/software/macos/raw-power' },
                { text: 'Postman 11.1.14 API接口调试', link: '/software/macos/postman-mac' },
                { text: 'PopClip 2024.5.2 MAS 复制粘贴增强', link: '/software/macos/popclip' },
                { text: 'PhotoSweeper X 4.9.0 重复照片清理', link: '/software/macos/photosweeper-x' },
                { text: 'Path Finder 2172 文件管理浏览', link: '/software/macos/path-finder' },
                { text: 'PhotoMill X 2.6.0 图片批量处理', link: '/software/macos/photomill-x' },
                { text: 'OmniFocus Pro 4.3 任务与时间效率管理', link: '/software/macos/omnifocus-pro' },
                { text: 'Microsoft Remote Desktop Beta 10.9.8.2201 远程桌面连接管理', link: '/software/macos/microsoft-remote-desktop-beta' },
                { text: 'Iris 1.7.1 屏幕录像', link: '/software/macos/iris' },
                { text: 'iReal Pro 2024.6 音乐参考练习', link: '/software/macos/ireal-pro' },
                { text: 'FontLab 8.4.0.8858 Beta 字体编辑设计', link: '/software/macos/fontlab-mac' },
                { text: 'EverWeb 4.2 可视化网页设计', link: '/software/macos/everweb' },
                { text: 'CloudMounter 4.6 FTP/SFTP连接管理', link: '/software/macos/cloudmounter' },
                { text: 'ClipboardManager 2.6.2 MAS 剪贴板管理', link: '/software/macos/clipboardmanager' },
                { text: '熊掌记Bear 2.1.9 MAS Markdown写作编辑', link: '/software/macos/bear' },
                { text: 'Another Redis Desktop Manager 1.6.6 Redis可视化管理', link: '/software/macos/another-redis-desktop-manager-mac' },
                { text: 'Ableton Live 12 Suite 12.0.5 音乐创作与演奏分析', link: '/software/macos/ableton-live-suite-mac' },
                { text: '百度输入法 6.1.8.16', link: '/software/macos/baidu-input-mac' },
                { text: 'Scroll 2.4.3 鼠标滚动增强', link: '/software/macos/scroll' },
                { text: 'Screen Studio 2.22.16 自动放大视频的屏幕录制', link: '/software/macos/screen-studio' },
                { text: 'Red Giant Universe 2024.3.0 红巨星视频特效插件套装', link: '/software/macos/red-giant-universe-mac' },
                { text: 'Raycast 1.75.2 快捷启动器', link: '/software/macos/raycast' },
                { text: 'Opera 110.0.5130.66 欧朋浏览器', link: '/software/macos/opera-mac' },
                { text: 'LibreOffice 24.2.4 Office办公套件', link: '/software/macos/libreoffice-mac' },
                { text: 'lanzouyun 3.4.9 第三方蓝奏云', link: '/software/macos/lanzouyun-mac' },
                { text: 'ForkLift 4.1.3 双窗口文件管理器', link: '/software/macos/forklift' },
                { text: 'AnyGo 7.3.1 iPhone/iPod虚拟定位', link: '/software/macos/anygo' },
                { text: 'Allavsoft 3.27.2.8920 全能视频下载器', link: '/software/macos/allavsoft-mac' },
                { text: 'Affinity Publisher 2.5.2.2486 页面布局设计', link: '/software/macos/affinity-publisher-mac' },
                { text: 'Affinity Designer 2.5.2.2486 矢量图形设计', link: '/software/macos/affinity-designer-mac' },
                { text: 'Affinity Photo 2.5.2.2486 图像编辑设计', link: '/software/macos/affinity-photo-mac' },
                { text: 'XnViewMP 1.7.2 图像管理查看', link: '/software/macos/xnviewmp-mac' },
                { text: 'SiteSucker Pro 5.3.5 网站扒站神器', link: '/software/macos/sitesucker-pro' },
                { text: 'ShotCut 24.06.02 Beta 视频编辑器', link: '/software/macos/shotcut-mac' },
                { text: 'Native Instruments Kontakt 7.10.5 音频采样器', link: '/software/macos/native-instruments-kontakt-mac' },
                { text: '右键助手专业版MouseBoost Pro 3.4.8 MAS 右键菜单管理', link: '/software/macos/mouseboost-pro' },
                { text: 'iShot Pro 2.5.3 MAS 多功能OCR截图标注', link: '/software/macos/ishot-pro' },
                { text: 'EdgeView 4.7.4 MAS 图像管理查看', link: '/software/macos/edgeview' },
                { text: 'Downie 4.7.17 视频解析下载', link: '/software/macos/downie' },
                { text: 'TTime 0.9.12 划词翻译/截图翻译与截图OCR', link: '/software/macos/ttime-mac' },
                { text: 'RustDesk 1.2.5 Beta 远程桌面控制', link: '/software/macos/rustdesk-mac' },
                { text: 'Valentina Studio Pro 14.0.0 多连接数据库管理开发', link: '/software/macos/valentina-studio-pro-mac' },
                { text: 'Overloud BREVERB 2.1.18 算法混响效果插件', link: '/software/macos/overloud-breverb-mac' },
                { text: 'OmniReader Pro 2.9.10 MAS 全能电子书阅读管理器', link: '/software/macos/omnireader-pro' },
                { text: 'MKVToolNix 85.0 MKV视频处理', link: '/software/macos/mkvtoolnix-mac' },
                { text: 'File Juicer 4.99(1538) 文件数据提取', link: '/software/macos/file-juicer' },
                { text: 'Togu Audio Line TAL-U-NO-LX-V2 4.9.0 模拟Juno 60合成器插件', link: '/software/macos/togu-audio-line-tal-u-no-lx-v2-mac' },
                { text: 'MediaInfo 24.05 MAS 音视频信息提取', link: '/software/macos/mediainfo-mac' },
                { text: 'Lunacy 9.6.2 UI/UX矢量绘图设计', link: '/software/macos/lunacy-mac' },
                { text: 'Bookends 15.0.3 文献书籍管理', link: '/software/macos/bookends' },
                { text: 'XTerminal 1.25.1 终端模拟器/SSH/SFTP客户端', link: '/software/macos/xterminal-mac' },
                { text: '阿里云盘小白羊XBYDriver 3.13.5 第三方阿里云盘', link: '/software/macos/xbydriver-mac' },
                { text: 'Wondershare PDFelement Professional 10.3.7.6478 +OCR 万兴PDF编辑器', link: '/software/macos/wondershare-pdfelement-professional-mac' },
                { text: 'WonderPen 2.4.7 妙笔Markdown写作编辑', link: '/software/macos/wonderpen-mac' },
                { text: 'uTools 5.1.1 应用插件工具集', link: '/software/macos/utools-mac' },
                { text: 'Upscayl 2.11.5 图像AI放大增强', link: '/software/macos/upscayl-mac' },
                { text: 'Serial Box 2024.06 Mac软件序列号查询', link: '/software/macos/serial-box' },
                { text: 'Reunion 14.0.240524 家谱族谱制作', link: '/software/macos/reunion' },
                { text: 'PDF Reader Pro 4.0.1 PDF编辑阅读器', link: '/software/macos/pdf-reader-pro' },
                { text: 'MarsEdit 5.2.0 博客写作编辑', link: '/software/macos/marsedit' },
                { text: '洛雪音乐 2.8.0 音乐播放下载', link: '/software/macos/lx-music-mac' },
                { text: 'Keep It 2.4.7 笔记编辑管理', link: '/software/macos/keep-it' },
                { text: 'IINA 1.3.5 视频播放器', link: '/software/macos/iina' },
                { text: 'JProfiler 14.0.3 Java 性能分析', link: '/software/macos/jprofiler-mac' },
                { text: 'Jettison 1.8.8 外部磁盘辅助弹出', link: '/software/macos/jettison' },
                { text: 'Hopper Disassembler 5.15.6 反汇编调试神器', link: '/software/macos/hopper-disassembler' },
                { text: 'electerm 1.39.35 终端模拟器/SSH/SFTP客户端', link: '/software/macos/electerm-mac' },
                { text: 'CalendarX 2.3.5 菜单栏日历和时间', link: '/software/macos/calendarx' },
                { text: 'Brave Browser 1.66.118 隐私广告拦截浏览器', link: '/software/macos/brave-browser-mac' },
                { text: 'AltTab 6.70.1 软件窗口快速切换', link: '/software/macos/alttab' },
                { text: 'Wirecast Pro 16.2.1 视频直播制作', link: '/software/macos/wirecast-pro-mac' },
                { text: 'Wins 2.0.1 窗口分屏管理', link: '/software/macos/wins' },
                { text: 'Widgetter 1.18.0 MAS 5K高清壁纸与桌面小组件', link: '/software/macos/widgetter' },
                { text: 'Waterfox G6.0.15 水狐浏览器', link: '/software/macos/waterfox-mac' },
                { text: 'Vivaldi Browser 6.7.3329.39 快速且私密的浏览器', link: '/software/macos/vivaldi-browser-mac' },
                { text: 'Topaz Photo AI 3.0.3 AI图片智能降噪', link: '/software/macos/topaz-photo-ai-mac' },
                { text: 'ToonTrack Superior Drummer 3.3.7 +Core Library 虚拟鼓音乐制作', link: '/software/macos/toontrack-superior-drummer-mac' },
                { text: 'HMCL 3.5.8.248 Minecraft我的世界启动器', link: '/software/macos/hmcl' },
                { text: 'Sweet Home 3D 7.4.0 3D室内装潢设计', link: '/software/macos/sweet-home-3d-mac' },
                { text: 'Steinberg Nuendo Pro 13.0.40 音频后期制作', link: '/software/macos/steinberg-nuendo-pro-mac' },
                { text: 'Steinberg Groove Agent 5.2.10 虚拟鼓手模拟插件', link: '/software/macos/steinberg-groove-agent-mac' },
                { text: 'Steinberg Dorico Pro 5.1.40 乐谱编写制作', link: '/software/macos/steinberg-dorico-pro-mac' },
                { text: 'Steinberg Cubase Pro 13.0.40 多功能音乐制作', link: '/software/macos/steinberg-cubase-pro-mac' },
                { text: 'Stash 2.6.3 网络代理客户端', link: '/software/macos/stash' },
                { text: 'Sip 3.5 屏幕取色管理', link: '/software/macos/sip' },
                { text: 'Rubick 4.2.4 开源插件工具箱', link: '/software/macos/rubick-mac' },
                { text: 'Redis Insight 2.50.0 Redis可视化管理', link: '/software/macos/redis-insight-mac' },
                { text: 'Professional Recorder 7.0.1 MAS 专业录音机', link: '/software/macos/professional-recorder' },
                { text: 'PreSonus Studio One 6 Professional 6.6.1 数字音乐编曲创作', link: '/software/macos/presonus-studio-one-professional-mac' },
                { text: 'PixelOver 0.15.2 Beta 像素动画编辑制作', link: '/software/macos/pixelover-mac' },
                { text: 'Live Home 3D Pro 4.9.1.1562 3D家居装修设计', link: '/software/macos/live-home-3d-pro-mac' },
                { text: 'Google Chrome 125.0.6422.142 谷歌浏览器', link: '/software/macos/google-chrome-mac' },
                { text: 'Dehancer Pro OFX 7.2.0 胶片模拟调色插件', link: '/software/macos/dehancer-pro-ofx-mac' },
                { text: 'calibre 7.12.0 电子书阅读管理器', link: '/software/macos/calibre-mac' },
                { text: 'Burp Suite Pro 2024.5.1 网络渗透测试', link: '/software/macos/burp-suite-pro-mac' },
                { text: '比特彗星BitComet 2.8.2 BT种子下载器', link: '/software/macos/bitcomet-mac' },
                { text: 'balenaEtcher 1.19.21 U盘启动盘制作', link: '/software/macos/balenaetcher-mac' },
                { text: '360极速浏览器Pro 14.5.1058.0', link: '/software/macos/360chrome-mac' },
                { text: 'OnyX 4.5.9 系统优化清理', link: '/software/macos/onyx' },
                { text: 'MWeb Pro 4.6.2 Markdown写作编辑', link: '/software/macos/mweb-pro' },
                { text: 'MuseScore Studio 4.3.1.241490902 乐谱编曲编辑', link: '/software/macos/musescore-studio-mac' },
                { text: 'Microsoft Word LTSC 2021 16.85.2 微软文档处理', link: '/software/macos/microsoft-word' },
                { text: 'Microsoft Outlook LTSC 2021 16.85.2 微软邮件收发管理', link: '/software/macos/microsoft-outlook' },
                { text: 'Infuse Pro 7.7.7 MAS 智能视频播放器', link: '/software/macos/infuse-pro' },
                { text: 'FireAlpaca 2.11.23 数字绘画软件', link: '/software/macos/firealpaca-mac' },
                { text: 'CameraBag Pro 2024.2.1 照片滤镜处理', link: '/software/macos/camerabag-pro-mac' },
                { text: 'Deeper 3.0.7 隐藏文件优化调整', link: '/software/macos/deeper' },
                { text: '微信 3.8.8.17', link: '/software/macos/wechat-mac' },
                { text: 'DxO PhotoLab Elite 7.6.0.55 RAW图像编辑处理', link: '/software/macos/dxo-photolab-elite-mac' },
                { text: 'Dropover 4.14.2 MAS 更容易拖拽文件', link: '/software/macos/dropover' },
                { text: 'DaVinci Resolve Studio 19.0.0.33 Beta 3 达芬奇影视后期调色剪辑', link: '/software/macos/davinci-resolve-studio-mac' },
                { text: 'DaVinci Fusion Studio 19.0.0.29 Beta 3 影视后期特效合成', link: '/software/macos/davinci-fusion-studio-mac' },
                { text: 'Blocs 5.2.4 可视化代码编辑器', link: '/software/macos/blocs' },
                { text: 'Binary Ninja Personal 4.0.4958 逆向编译调试', link: '/software/macos/binary-ninja-personal-mac' },
                { text: 'Arc Browser 1.36.0 重新定义下一代浏览器', link: '/software/macos/arc-browser-mac' },
                { text: 'Apparency 2.0 查看软件基本信息', link: '/software/macos/apparency' },
                { text: 'Planner 5D 4.16.0 MAS 室内家居设计', link: '/software/macos/planner-5d' },
                { text: 'Mellel 6.0.4 文字编辑处理', link: '/software/macos/mellel' },
                { text: 'Native SQLite Manager 1.28.0 MAS SQLite数据库连接管理', link: '/software/macos/native-sqlite-manager' },
                { text: 'Dynamic Wallpaper 18.2 MAS 4K动态视频壁纸', link: '/software/macos/dynamic-wallpaper' },
                { text: 'CleanShot X 4.7.1 截图标注录屏', link: '/software/macos/cleanshot-x' },
                { text: 'iZotope Dialogue Match 1.2.0 音频混音制作插件', link: '/software/macos/izotope-dialogue-match-mac' },
                { text: 'Arturia Farfisa V 1.13.0.4395 电风琴模拟合成器插件', link: '/software/macos/arturia-farfisa-v-mac' },
                { text: 'Arturia EQ SITRAL-295 1.3.0.4457 均衡器音频模拟插件', link: '/software/macos/arturia-eq-sitral-295-mac' },
                { text: 'Arturia Emulator II V 1.6.0.4395 多音色采样合成器插件', link: '/software/macos/arturia-emulator-ii-v-mac' },
                { text: 'Arturia Efx REFRACT 1.0.0.5002 立体声效果处理插件', link: '/software/macos/arturia-efx-refract-mac' },
                { text: 'Arturia Efx MOTIONS 1.0.0.4836 声音效果动态处理插件', link: '/software/macos/arturia-efx-motions-mac' },
                { text: 'Arturia Efx FRAGMENTS 1.2.0.4457 声音效果实时处理插件', link: '/software/macos/arturia-efx-fragments-mac' },
                { text: 'Arturia DX7 V 1.13.0.4395 电台数字合成器插件', link: '/software/macos/arturia-dx7-v-mac' },
                { text: 'Arturia Dist TUBE-CULTURE 1.1.1.4457 真空管模拟插件', link: '/software/macos/arturia-dist-tube-culture-mac' },
                { text: 'Arturia Dist OPAMP-21 1.1.0.4457 失真效果模拟插件', link: '/software/macos/arturia-dist-opamp-21-mac' },
                { text: 'Arturia Dist COLDFIRE 1.1.0.4463 失真效果模拟插件', link: '/software/macos/arturia-dist-coldfire-mac' },
                { text: 'Kdenlive 24.05.0 非线性视频编辑处理', link: '/software/macos/kdenlive-mac' },
                { text: 'FSNotes 6.8.0 +iCloud 程序员笔记管理', link: '/software/macos/fsnotes' },
                { text: 'DMG Canvas 4.0.9 DMG安装包制作', link: '/software/macos/dmg-canvas' },
                { text: 'Cockos REAPER 7.16 数字音频编辑制作', link: '/software/macos/cockos-reaper-mac' },
                { text: '微信键盘 1.1.1.335 微信输入法', link: '/software/macos/wetype-mac' },
                { text: '妙言 1.15 Markdown写作编辑', link: '/software/macos/miaoyan' },
                { text: 'Nobe OmniScope 1.10.122 视频调色示波器插件', link: '/software/macos/nobe-omniscope-mac' },
                { text: 'HQPlayer Desktop 5.7.1 高品质音频播放器', link: '/software/macos/hqplayer-desktop-mac' },
                { text: 'i-Picker 1.0.4 MAS 一键切换默认浏览器', link: '/software/macos/i-picker' },
                { text: 'Mist 0.10 Mac系统镜像下载', link: '/software/macos/mist' },
                { text: 'Ghost Buster Pro 3.2.8 MAS 文件查找删除', link: '/software/macos/ghost-buster-pro' },
                { text: 'Xmind Pro 2024 24.04.10311 思维导图与头脑风暴', link: '/software/macos/xmind-pro-mac' },
                { text: 'Pixzip 2.1.5 图片批量压缩', link: '/software/macos/pixzip-mac' },
                { text: 'KORG Gadget & Plugins 3.1.0 音频合成器插件', link: '/software/macos/korg-gadget-plugins-mac' },
                { text: 'DockView 1.5.3 Dock栏窗口预览', link: '/software/macos/dockview' },
                { text: 'Boxy SVG 4.32.2 MAS 矢量图编辑器', link: '/software/macos/boxy-svg' },
                { text: 'Project Office X 1.1.21 项目管理', link: '/software/macos/project-office-x' },
                { text: 'MiniMeters 0.8.19 Beta 音频计量监视器', link: '/software/macos/minimeters-mac' },
                { text: 'Install4j 10.0.8 Java 安装程序构建', link: '/software/macos/install4j-mac' },
                { text: 'Hype 4 Pro 4.1.18 HTML5响应式网页设计', link: '/software/macos/hype-pro' },
                { text: 'Foxit PDF Reader 2024.2.2.64388 福昕PDF阅读器', link: '/software/macos/foxit-pdf-reader-mac' },
                { text: 'Flame 2025.0.1 视觉后期特效制作', link: '/software/macos/flame' },
                { text: 'Audio Hijack 4.4.2 录音软件', link: '/software/macos/audio-hijack' },
                { text: 'Adobe Creative Cloud 6.2.0.554 Adobe创意云桌面应用', link: '/software/macos/adobe-creative-cloud-mac' },
                { text: 'Togu Audio Line TAL-Drum 2.5.3 老式鼓机音频采样插件', link: '/software/macos/togu-audio-line-tal-drum-mac' },
                { text: 'Tower Pro 11.1.405 Git客户端', link: '/software/macos/tower-pro-mac' },
                { text: 'Snagit 2024.2.5 截图贴图录像编辑', link: '/software/macos/snagit-mac' },
                { text: 'System Dashboard Pro 1.11.0 MAS 系统状态监测', link: '/software/macos/system-dashboard-pro' },
                { text: 'Text Workflow 2.0 MAS 文本转换处理', link: '/software/macos/text-workflow' },
                { text: 'RunJS 2.12.1 JavaScript代码编辑器', link: '/software/macos/runjs-mac' },
                { text: 'Mitti 2.8.1 视频回放编辑', link: '/software/macos/mitti' },
                { text: 'Name Mangler 3.9.1 文件批量重命名', link: '/software/macos/name-mangler' },
                { text: 'MacDroid Pro 2.0.211 安卓数据传输软件', link: '/software/macos/macdroid-pro' },
                { text: 'Magic Disk Cleaner 2.7.7 MAS 磁盘垃圾清理', link: '/software/macos/magic-disk-cleaner' },
                { text: 'Leech 3.2 轻量级下载管理器', link: '/software/macos/leech' },
                { text: 'Kate 24.05.7343 高级文本编辑器', link: '/software/macos/kate-mac' },
                { text: 'Joplin 3.0.8 Beta 笔记加密记录与待办事项', link: '/software/macos/joplin-mac' },
                { text: 'ePub 阅读器EPUB Reader 2.6.6 MAS 电子书阅读神器', link: '/software/macos/epub-reader' },
                { text: 'OpenCore Configurator 2.76.1.0 黑苹果系统引导配置', link: '/software/macos/opencore-configurator' },
                { text: 'Clover Configurator 5.28.0.0 黑苹果四叶草配置', link: '/software/macos/clover-configurator' },
                { text: 'CHM阅读器 2.6.3 MAS CHM帮助文件阅读', link: '/software/macos/chm-reader' },
                { text: 'Arturia Analog Lab Pro V 5.10.2.4741 音频合成器插件', link: '/software/macos/arturia-analog-lab-pro-v-mac' },
                { text: 'Airmail Pro 5.7.7 MAS 邮件收发管理', link: '/software/macos/airmail-pro' },
                { text: 'Artstudio Pro 5.2 MAS 绘图与照片编辑处理', link: '/software/macos/artstudio-pro' },
                { text: 'Native Instruments Maschine 2.18.1 音频采样器', link: '/software/macos/native-instruments-maschine-mac' },
                { text: 'Keyboard Maestro 11.0.3 键盘热键大师', link: '/software/macos/keyboard-maestro' },
                { text: 'Glyphs 3.3.0 字体编辑设计', link: '/software/macos/glyphs' },
                { text: 'HandBrake 1.8.0 视频格式转换器', link: '/software/macos/handbrake-mac' },
                { text: '剪映专业版 5.9.0/CapCut 3.9.0 视频编辑处理', link: '/software/macos/videofusion-mac' },
                { text: 'Capture One Studio 16.4.2.1 RAW图像编辑处理', link: '/software/macos/capture-one-mac' },
                { text: 'ZY Player 3.3.6 视频资源播放器', link: '/software/macos/zy-player-mac' },
                { text: 'Quip 8.43.1 文档编辑器', link: '/software/macos/quip-mac' },
                { text: 'Rhinoceros 8.7.24138.15432 犀牛3D建模', link: '/software/macos/rhinoceros-mac' },
                { text: 'Progressive Downloader 6.5 多线程直链下载器', link: '/software/macos/progressive-downloader' },
                { text: 'Piezo 1.9.2 录音软件', link: '/software/macos/piezo' },
                { text: 'Mac Mouse Fix 2.2.4 鼠标平滑滚动增强', link: '/software/macos/mac-mouse-fix' },
                { text: 'Maintenance 3.1.7 系统优化维护', link: '/software/macos/maintenance' },
                { text: 'Dropshare 5.51 网络文件共享', link: '/software/macos/dropshare' },
                { text: 'Adobe DNG Converter 16.3 RAW图片转DNG格式', link: '/software/macos/adobe-dng-converter-mac' },
                { text: '4K Stogram Pro 4.9.0.4680 Instagram图片查看与下载', link: '/software/macos/4k-stogram-pro-mac' },
                { text: 'Arturia Delay TAPE-201 1.6.0.4457 磁带延迟模拟插件', link: '/software/macos/arturia-delay-tape-201-mac' },
                { text: 'Arturia Delay ETERNITY 1.6.0.4457 音频模拟延迟插件', link: '/software/macos/arturia-delay-eternity-mac' },
                { text: 'Arturia Delay BRIGADE 1.6.0.4457 音频低保真模拟延迟插件', link: '/software/macos/arturia-delay-brigade-mac' },
                { text: 'Arturia CZ V 1.9.0.4395 Casio CZ模拟合成器插件', link: '/software/macos/arturia-cz-v-mac' },
                { text: 'Arturia CS-80 V 4.3.0.4395 CS-80模拟合成器插件', link: '/software/macos/arturia-cs-80-v-mac' },
                { text: 'Arturia CP-70 V 1.0.0.4395 CP-70电钢琴模拟合成器插件', link: '/software/macos/arturia-cp-70-v-mac' },
                { text: 'Arturia Comp VCA-65 1.6.0.4457 VCA压缩器模拟插件', link: '/software/macos/arturia-comp-vca-65-mac' },
                { text: 'Arturia Comp TUBE-STA 1.6.0.4457 真空管压缩器模拟插件', link: '/software/macos/arturia-comp-tube-sta-mac' },
                { text: 'Arturia Comp FET-76 1.6.0.4457 FET压缩器模拟插件', link: '/software/macos/arturia-comp-fet-76-mac' },
                { text: 'Arturia Comp DIODE-609 1.3.0.4457 二极管压缩限幅器模拟插件', link: '/software/macos/arturia-comp-diode-609-mac' },
                { text: 'Beaver Notes 3.2.0 海狸笔记编辑管理', link: '/software/macos/beaver-notes-mac' },
                { text: 'QR Wizard 2.2 生成二维码', link: '/software/macos/qr-wizard' },
                { text: 'Colori 1.4 颜色选择器', link: '/software/macos/colori' },
                { text: 'BetterMouse 1.5.4690 鼠标手势增强', link: '/software/macos/bettermouse' },
                { text: 'Toontrack EZBass 1.2.0 虚拟低音贝斯', link: '/software/macos/toontrack-ezbass-mac' },
                { text: 'VueScan Pro 9.8.33 万能扫描仪驱动', link: '/software/macos/vuescan-pro-mac' },
                { text: 'TechTool Pro 19.0.6 硬件监测与系统维护', link: '/software/macos/techtool-pro' },
                { text: 'Spark 3.15.5 邮件收发管理', link: '/software/macos/spark-mac' },
                { text: 'SpamSieve 3.0.4 垃圾邮件过滤', link: '/software/macos/spamsieve' },
                { text: 'Soulver 3.11.3 计算器', link: '/software/macos/soulver' },
                { text: 'PullTube 1.8.5.33 在线视频解析下载', link: '/software/macos/pulltube' },
                { text: 'Poedit 3.4.4 WP插件汉化/Po文件编辑', link: '/software/macos/poedit-mac' },
                { text: 'Multitouch 1.27.31 多点触控手势增强', link: '/software/macos/multitouch' },
                { text: 'MakeMKV 1.17.7 Beta MKV视频格式转换', link: '/software/macos/makemkv-mac' },
                { text: 'iA Writer 7.1.3 MAS +iCloud Markdown写作编辑', link: '/software/macos/ia-writer-mac' },
                { text: 'HBuilderX 4.15.2024050802 代码编辑器', link: '/software/macos/hbuilderx-mac' },
                { text: 'Guitar Pro 8.1.2.37 吉他编曲与音乐创作', link: '/software/macos/guitar-pro-mac' },
                { text: 'Fork 2.43.1 Git客户端', link: '/software/macos/fork-mac' },
                { text: 'Figma EX 124.0.2 UI原型设计', link: '/software/macos/figma-ex-mac' },
                { text: 'djay Pro 5.1.7 MAS 伴奏器乐声与人声实时分离', link: '/software/macos/djay-pro' },
                { text: 'Default Folder X 6.0.7 文件管理器', link: '/software/macos/default-folder-x' },
                { text: 'Cyberduck 8.9.0.41543 FTP/SFTP连接管理', link: '/software/macos/cyberduck-mac' },
                { text: 'Bunny 1.4.7 MAS 预览带字幕的8K影音播放器', link: '/software/macos/bunny' },
                { text: 'Bartender 5.0.52 菜单栏图标隐藏管理', link: '/software/macos/bartender' },
                { text: 'Access Menu 1.3.4 菜单栏快速访问文件与文件夹', link: '/software/macos/access-menu' },
                { text: 'CalHash 1.3.3 哈希值检测校验', link: '/software/macos/calhash' },
                { text: '迅雷 5.40.2.66331', link: '/software/macos/thunder-mac' },
                { text: '网易邮箱大师 5.0.9.1362 邮件收发管理', link: '/software/macos/mailmaster-mac' },
                { text: '人人译视界 3.1.3 视频翻译制作', link: '/software/macos/rrysj-mac' },
                { text: '4K Video Downloader+ 1.6.0.0085 高清视频下载', link: '/software/macos/4k-video-downloader-plus-mac' },
                { text: 'Sublime Merge 2.0.2096 Git客户端', link: '/software/macos/sublime-merge-mac' },
                { text: 'Wireshark 4.2.5 网络协议分析', link: '/software/macos/wireshark-mac' },
                { text: 'VMware Fusion Pro 13.5.2 虚拟机软件', link: '/software/macos/vmware-fusion-pro' },
                { text: 'VidHub 1.6.2 MAS 高清影片播放器', link: '/software/macos/vidhub' },
                { text: 'Task Office 9.0 待办事项与日历', link: '/software/macos/task-office' },
                { text: 'SketchUp Pro 2024 24.0.554 草图大师3D绘图设计', link: '/software/macos/sketchup-pro-mac' },
                { text: 'Patternodes 3.3.0 创建矢量图形', link: '/software/macos/patternodes' },
                { text: 'Microsoft PowerPonit LTSC 2021 16.85 微软幻灯片演示制作', link: '/software/macos/microsoft-powerponit' },
                { text: 'Microsoft 365 Office BusinessPro LTSC 2024 16.85 微软Office办公套件', link: '/software/macos/microsoft-office-mac' },
                { text: 'Microsoft OneNote LTSC 2021 16.85 微软云笔记记录', link: '/software/macos/microsoft-onenote' },
                { text: 'Microsoft Excel LTSC 2021 16.85 微软表格处理', link: '/software/macos/microsoft-excel' },
                { text: 'MarginNote 4.0.2 电子笔记阅读学习', link: '/software/macos/marginnote' },
                { text: 'Little Snitch 5.7.4 小飞贼防火墙软件', link: '/software/macos/little-snitch' },
                { text: 'KCNcrew Pack 2024.05.15 Mac软件序列号查询', link: '/software/macos/kcncrew-pack' },
                { text: 'Freeplane 1.11.14 思维导图', link: '/software/macos/freeplane-mac' },
                { text: 'FotoMagico 6.6.0 幻灯片制作', link: '/software/macos/fotomagico' },
                { text: 'Eagle 4.0 Beta 19 图像管理查看', link: '/software/macos/eagle-mac' },
                { text: 'Bootstrap Studio 6.6.1 响应式网页设计', link: '/software/macos/bootstrap-studio-mac' },
                { text: 'Axure RP Team 10.0.0.3920 UI/UX原型交互设计', link: '/software/macos/axure-rp-mac' },
                { text: 'Artifact Interactive Garden Planner 3.8.63 园林辅助设计/环境美化', link: '/software/macos/artifact-interactive-garden-planner-mac' },
                { text: 'ON1 Effects 2024.3 18.3.0.15358 照片纹理滤镜处理', link: '/software/macos/on1-effects-mac' },
                { text: 'Adobe Acrobat Reader 2024.002.20759 PDF阅读器', link: '/software/macos/adobe-acrobat-reader-mac' },
                { text: 'Arturia CMI V 1.13.0.4395 Fairlight CMI模拟合成插件', link: '/software/macos/arturia-cmi-v-mac' },
                { text: 'Arturia Clavinet V 1.13.0.4395 电子键盘Clavinet模拟插件', link: '/software/macos/arturia-clavinet-v-mac' },
                { text: 'Arturia Chorus JUN-6 1.4.0.4457 Juno-6模拟合唱效果插件', link: '/software/macos/arturia-chorus-jun-6-mac' },
                { text: 'Arturia Chorus DIMENSION-D 1.4.0.4457 SDD-320 Dimension D合唱效果器模拟插件', link: '/software/macos/arturia-chorus-dimension-d-mac' },
                { text: 'Arturia Bus FORCE 1.3.0.4457 母带混音后期插件', link: '/software/macos/arturia-bus-force-mac' },
                { text: 'Arturia Buchla Easel V 1.13.0.4395 Buchla模拟合成器插件', link: '/software/macos/arturia-buchla-easel-v-mac' },
                { text: 'Arturia B-3 V 2.9.1.4395 电风琴模拟合成插件', link: '/software/macos/arturia-b-3-v-mac' },
                { text: 'Arturia Augmented YANGTZE 1.0.0.4679 传统民乐增强模拟插件', link: '/software/macos/arturia-augmented-yangtze-mac' },
                { text: 'Arturia Augmented WOODWINDS 1.0.0.4395 木管乐器增强模拟插件', link: '/software/macos/arturia-augmented-woodwinds-mac' },
                { text: 'Arturia Augmented VOICES 1.6.0.4395 人声增强模拟插件', link: '/software/macos/arturia-augmented-voices-mac' },
                { text: 'Arturia Augmented STRINGS 1.6.0.4395 弦乐器增强模拟插件', link: '/software/macos/arturia-augmented-strings-mac' },
                { text: 'Arturia Augmented GRAND PIANO 1.6.0.4395 大钢琴增强插件', link: '/software/macos/arturia-augmented-grand-piano-mac' },
                { text: 'Arturia Augmented BRASS 1.1.0.4395 黄铜管乐器演奏插件', link: '/software/macos/arturia-augmented-brass-mac' },
                { text: 'Arturia ARP 2600 V 3.13.0.4395 音频模拟合成器插件', link: '/software/macos/arturia-arp-2600-v-mac' },
                { text: 'Arturia Acid V 1.1.1.4681 经典低音合成器插件', link: '/software/macos/arturia-acid-v-mac' },
                { text: 'Modern CSV 2.0.8 CSV文件编辑查看', link: '/software/macos/modern-csv-mac' },
                { text: 'iZotope Ozone Advanced 11.0.1 臭氧-音频母带处理', link: '/software/macos/izotope-ozone-advanced-mac' },
                { text: 'Easydict 2.7.2 OCR截图翻译词典', link: '/software/macos/easydict' },
                { text: 'Snapclear 2.1.0 AI图片背景删除', link: '/software/macos/snapclear-mac' },
                { text: 'PDF Squeezer 4.5.3 MAS PDF文件压缩', link: '/software/macos/pdf-squeezer' },
                { text: 'PeaZip 9.8.0 解压缩软件', link: '/software/macos/peazip-mac' },
                { text: 'Timing 2024.1.8 时间跟踪管理', link: '/software/macos/timing' },
                { text: 'ToDesk 4.7.2.1 远程桌面控制', link: '/software/macos/todesk-mac' },
                { text: 'MenubarX Pro 1.7.0 菜单栏浏览增强', link: '/software/macos/menubarx-pro' },
                { text: 'Imagenomic Portraiture for PS 4.5.0.4501 图像磨皮滤镜插件', link: '/software/macos/imagenomic-portraiture-for-ps-mac' },
                { text: 'Mp3tag 1.8.22 音频标签编辑器', link: '/software/macos/mp3tag-mac' },
                { text: 'PhpWebStudy 2.4.5 PHP服务器集成开发环境', link: '/software/macos/phpwebstudy' },
                { text: 'Mixxx 2.4.1 DJ混音制作', link: '/software/macos/mixxx-mac' },
                { text: 'Pixelorama 0.11.4 像素动画编辑制作', link: '/software/macos/pixelorama-mac' },
                { text: 'Remote Desktop Manager Enterprise 2024.1.8.6 远程桌面连接管理', link: '/software/macos/remote-desktop-manager-enterprise-mac' },
                { text: 'Notepad-- 2.16.0 文本编辑器', link: '/software/macos/notepad-mac' },
                { text: 'Paste Queue 1.6.2 MAS 剪贴板管理', link: '/software/macos/paste-queue' },
                { text: 'OmniPlan Pro 4.8.1 项目规划管理', link: '/software/macos/omniplan-pro' },
                { text: 'WPS Office 6.7.1.8828 MAS 金山一站式Office办公套件', link: '/software/macos/wps-office-mac' },
                { text: 'QLab Pro 5.3.8 音频剪辑制作', link: '/software/macos/qlab-pro' },
                { text: 'PowerPhotos 2.5.8 照片管理与编辑处理', link: '/software/macos/powerphotos' },
                { text: 'Middle 1.8.6 鼠标与触控板控制增强', link: '/software/macos/middle' },
                { text: 'MarkMyWords 2.10.1 Markdown写作编辑', link: '/software/macos/markmywords' },
                { text: '超级右键专业版 2.2.7 MAS 右键菜单管理', link: '/software/macos/irightmouse-pro' },
                { text: 'GoodTask 7.7.3 MAS 日历提醒与任务管理', link: '/software/macos/goodtask' },
                { text: 'EndNote 21.3.0.20232 论文文献管理', link: '/software/macos/endnote-mac' },
                { text: '4K Tokkit Pro 2.7.2.0930 TikTok视频下载', link: '/software/macos/4k-tokkit-pro-mac' },
                { text: 'Things 3.20.6 MAS 日程计划与任务管理', link: '/software/macos/things' },
                { text: 'PastePal 2.15.4 MAS 剪贴板管理', link: '/software/macos/pastepal' },
                { text: 'TouchDesigner Pro 2023.11760 可视化原型渲染设计', link: '/software/macos/touchdesigner-pro-mac' },
                { text: 'Sublime Text 4.0.4175 代码编辑器', link: '/software/macos/sublime-text-mac' },
                { text: 'Steinberg VST Live Pro 2.0.10.118 终极现场演出系统', link: '/software/macos/steinberg-vst-live-pro-mac' },
                { text: 'Sketch 100 矢量绘图设计', link: '/software/macos/sketch' },
                { text: 'SecureFX 9.5.2.3325 FTP传输客户端', link: '/software/macos/securefx-mac' },
                { text: 'RAR Extractor Max 12.3 MAS 解压缩软件', link: '/software/macos/rar-extractor-max' },
                { text: 'SecureCRT 9.5.2.3325 终端模拟器/SSH客户端', link: '/software/macos/securecrt-mac' },
                { text: 'Money Pro 2.10.9 MAS 个人财务管理', link: '/software/macos/money-pro' },
                { text: 'GIMP 2.10.38 图像编辑处理', link: '/software/macos/gimp-mac' },
                { text: 'Disk Xray 4.2 磁盘分析管理', link: '/software/macos/disk-xray' },
                { text: 'Calendar 366 II 2.15.5 菜单栏日历', link: '/software/macos/calendar-366-ii' },
                { text: 'Duplicate File Finder Pro 8.2 MAS 重复文件查找与清理', link: '/software/macos/duplicate-file-finder-pro' },
                { text: 'Kaleidoscope 4.5.1 文件与图像对比', link: '/software/macos/kaleidoscope' },
                { text: 'CodeCounter 1.1 代码计数器', link: '/software/macos/codecounter' },
                { text: 'Disk Space Analyzer Pro 4.2 可视化磁盘清理', link: '/software/macos/disk-space-analyzer-pro' },
                { text: 'EazyDraw 11.6.6 MAS 矢量绘图设计', link: '/software/macos/eazydraw' },
                { text: 'VectorWorks 2024 SP4 3D建模渲染设计', link: '/software/macos/vectorworks-mac' },
                { text: 'KORG WAVESTATION 2.4.2 矢量波形合成器插件', link: '/software/macos/korg-wavestation-mac' },
                { text: 'KORG Wavestate Native 1.3.7 数字波形合成器插件', link: '/software/macos/korg-wavestate-native-mac' },
                { text: 'KORG TRITON Extreme 1.1.1 HI合成器插件', link: '/software/macos/korg-triton-extreme-mac' },
                { text: 'KORG Software Pass 1.2.12 KORG系列插件通用许可证', link: '/software/macos/korg-software-pass-mac' },
                { text: 'KORG Prophecy 1.6.0 音频合成器插件', link: '/software/macos/korg-prophecy-mac' },
                { text: 'KORG Polysix 2.4.2 六音色声道模拟合成器插件', link: '/software/macos/korg-polysix-mac' },
                { text: 'KORG Opsix Native 1.2.1 数字合成器插件', link: '/software/macos/korg-opsix-native-mac' },
                { text: 'KORG MS-20 2.4.2 音频合成器插件', link: '/software/macos/korg-ms-20-mac' },
                { text: 'KORG MonoPoly 2.4.2 多轨合成器插件', link: '/software/macos/korg-monopoly-mac' },
                { text: 'KORG Modwave Native 1.2.7 硬件合成器插件', link: '/software/macos/korg-modwave-native-mac' },
                { text: 'KORG miniKORG 700 1.1.1 单声道合成器插件', link: '/software/macos/korg-minikorg-700-mac' },
                { text: 'KORG microKORG 1.1.0 音频合成器插件', link: '/software/macos/korg-microkorg-mac' },
                { text: 'KORG MDE-X 2.4.1 音频合成器插件', link: '/software/macos/korg-mde-x-mac' },
                { text: 'KORG M1 2.4.1 音频合成器插件', link: '/software/macos/korg-m1-mac' },
                { text: 'KORG LegacyCell 1.8.0 电子双效果模拟插件', link: '/software/macos/korg-legacycell-mac' },
                { text: 'KORG KAOSS PAD 1.1.0 动态触摸效果插件', link: '/software/macos/korg-kaoss-pad-mac' },
                { text: 'KORG ELECTRIBE-R 1.0.2 音频合成效果插件', link: '/software/macos/korg-electribe-r-mac' },
                { text: 'KORG ARP ODYSSEY 1.5.3 ARP Odyssey模拟合成器插件', link: '/software/macos/korg-arp-odyssey-mac' },
                { text: 'MacCleaner 3 Pro 3.3.1 系统综合清理维护工具包', link: '/software/macos/maccleaner-pro' },
                { text: 'Adobe Photoshop Lightroom 7.2 照片管理与编辑处理', link: '/software/macos/adobe-photoshop-lightroom-mac' },
                { text: 'Transfer 2.2.2 FTP文件服务器', link: '/software/macos/transfer' },
                { text: 'GitKraken 9.13.0 Git客户端', link: '/software/macos/gitkraken-mac' },
                { text: 'Colibri 2.2.0 MAS 无损音乐播放器', link: '/software/macos/colibri' },
                { text: 'Wing Pro 10.0.4.0 Python集成开发环境', link: '/software/macos/wing-pro-mac' },
                { text: 'Wondershare Repairit 5.5.7 万兴修复-音频/视频/图片/文件损坏修改', link: '/software/macos/wondershare-repairit-mac' },
                { text: 'VirtualBox 7.0.18 虚拟机软件', link: '/software/macos/virtualbox-mac' },
                { text: 'Tracktion Dawesome Novum 1.17 创意视觉合成器插件', link: '/software/macos/tracktion-dawesome-novum-mac' },
                { text: 'The Foundry MODO 17.0v5 3D建模渲染设计', link: '/software/macos/the-foundry-modo-mac' },
                { text: 'Texifier 1.9.27 LaTeX排版编辑器', link: '/software/macos/texifier' },
                { text: 'SwitchResX 4.13.4 修改屏幕显示分辨率', link: '/software/macos/switchresx' },
                { text: 'n-Track Studio Suite 10.1.0.8659 多轨音频制作', link: '/software/macos/n-track-studio-suite-mac' },
                { text: 'Music Tag Editor Pro 8.1.1 MAS 音频标签编辑器', link: '/software/macos/music-tag-editor-pro' },
                { text: 'GraphPad Prism 10.2.3.347 科研数据绘图分析', link: '/software/macos/graphpad-prism-mac' },
                { text: 'ff·Works 4.1.0 视频处理转换', link: '/software/macos/ffworks' },
                { text: 'Disk Drill Enterprise 5.5.1517 数据恢复软件', link: '/software/macos/disk-drill-enterprise-mac' },
                { text: '爱思助手 3.03.015 iOS设备管理器', link: '/software/macos/i4tools-mac' },
                { text: '4K YouTube to MP3 5.3.0.0085 YouTube视频转MP3音频', link: '/software/macos/4k-youtube-to-mp3-mac' },
                { text: 'Less Player 0.1.22 音乐播放器', link: '/software/macos/less-player-mac' },
                { text: 'Initiater Pro 1.1.2 MAS OCR截图翻译', link: '/software/macos/initiater-pro' },
                { text: 'Goldie 2.2.1 MAS 黄金比例设计', link: '/software/macos/goldie' },
                { text: 'CudaText 1.214.0.0 代码编辑器', link: '/software/macos/cudatext-mac' },
                { text: 'Tracktion Dawesome Myth 1.10 音频编辑处理插件', link: '/software/macos/tracktion-dawesome-myth-mac' },
                { text: 'UPDF 1.7.18 PDF编辑器', link: '/software/macos/updf' },
                { text: 'Sensei 1.5.10 硬件检测与系统优化清理', link: '/software/macos/sensei' },
                { text: 'Hazel 5.3.4 自动化清理软件', link: '/software/macos/hazel' },
                { text: 'Maccy 0.31.0 剪贴板管理', link: '/software/macos/maccy' },
                { text: 'DeepL 24.4.2912025 智能AI翻译', link: '/software/macos/deepl-mac' },
                { text: 'AutoCAD 2025.0.1 CAD绘图设计', link: '/software/macos/autocad-mac' },
                { text: 'Aerial 3.3.8 高清鸟瞰图屏保', link: '/software/macos/aerial' },
                { text: 'Overloud TH-U Premium 1.4.20 吉他与贝斯音色模拟', link: '/software/macos/overloud-th-u-premium-mac' },
                { text: 'Overloud REmatrix 1.2.12 音频混响效果插件', link: '/software/macos/overloud-rematrix-mac' },
                { text: 'Overloud Mark Studio 2.0.19 数字音频模拟插件', link: '/software/macos/overloud-mark-studio-mac' },
                { text: 'Overloud Gem Voice 1.0.6 人声后期处理插件', link: '/software/macos/overloud-gem-voice-mac' },
                { text: 'Overloud Gem TAPEDESK 1.2.5 暖色调混音模拟插件', link: '/software/macos/overloud-gem-tapedesk-mac' },
                { text: 'Overloud Gem Sculptube 1.0.5 声音模拟真空放大插件', link: '/software/macos/overloud-gem-sculptube-mac' },
                { text: 'Overloud Gem OTD-2 1.0.5 模拟音频延迟效果插件', link: '/software/macos/overloud-gem-otd-2-mac' },
                { text: 'Overloud Gem Modula 1.0.3 三合一人声模拟插件', link: '/software/macos/overloud-gem-modula-mac' },
                { text: 'Overloud Gem Mod 1.0.3 复古人声模拟插件', link: '/software/macos/overloud-gem-mod-mac' },
                { text: 'Overloud Gem EQP 1.0.3 硬件均衡器模拟插件', link: '/software/macos/overloud-gem-eqp-mac' },
                { text: 'Overloud Gem EQ550 1.1.6 硬件均衡器模拟插件', link: '/software/macos/overloud-gem-eq550-mac' },
                { text: 'Overloud Gem EQ495 1.2.5 混音母带处理插件', link: '/software/macos/overloud-gem-eq495-mac' },
                { text: 'Overloud Gem EQ84 1.3.5 英式录音台EQ模拟插件', link: '/software/macos/overloud-gem-eq84-mac' },
                { text: 'Overloud Gem ECHOSON 1.0.7 传奇磁鼓延迟插件', link: '/software/macos/overloud-gem-echoson-mac' },
                { text: 'Overloud Gem Dopamine 1.1.9 磁带模拟增强插件', link: '/software/macos/overloud-gem-dopamine-mac' },
                { text: 'Overloud Gem Comp76 2.0.10 晶体管压缩机限幅器插件', link: '/software/macos/overloud-gem-comp76-mac' },
                { text: 'Overloud Gem Comp670 1.1.7 电子管压缩机限幅器插件', link: '/software/macos/overloud-gem-comp670-mac' },
                { text: 'Overloud Gem Comp LA 1.0.7 光电模拟压缩器插件', link: '/software/macos/overloud-gem-comp-la-mac' },
                { text: 'Overloud Gem Comp G 1.0.7 VCA总线压缩器插件', link: '/software/macos/overloud-gem-comp-g-mac' },
                { text: 'BiglyBT 3.6.0 BT种子下载器', link: '/software/macos/biglybt-mac' },
                { text: 'TablePlus 6.0.0 多连接数据库管理开发', link: '/software/macos/tableplus-mac' },
                { text: 'ChemDraw Professional 2023 23.0.1.10 化学结构绘图', link: '/software/macos/chemdraw-professional-mac' },
                { text: 'Timer RH Pro 2.14.2 MAS 计时器', link: '/software/macos/timer-rh-pro' },
                { text: 'Luminar Neo 1.19.1.17483 AI图像编辑处理', link: '/software/macos/luminar-neo-mac' },
                { text: 'Free Download Manager 6.22.0.5714 直链BT续传下载器', link: '/software/macos/free-download-manager-mac' },
                { text: 'Snipaste 2.9.0 Beta 截图贴图标注', link: '/software/macos/snipaste-mac' },
                { text: 'RESP 2022.5.1 Redis可视化管理', link: '/software/macos/resp-mac' },
                { text: 'Principle 6.35 交互UI原型设计', link: '/software/macos/principle' },
                { text: 'Longshot 1.1.6 MAS 截图贴图标注', link: '/software/macos/longshot' },
                { text: 'Logicly 2.0.0 Beta 4 电路逻辑绘图', link: '/software/macos/logicly-mac' },
                { text: 'Background Music 0.4.3 单独调节应用音量', link: '/software/macos/background-music' },
                { text: 'Tracktion Outersect Modeler 1.1.5 乐器建模合成器插件', link: '/software/macos/tracktion-outersect-modeler-mac' },
                { text: 'Tracktion F-em 1.2.2 混合四音色合成器插件', link: '/software/macos/tracktion-f-em-mac' },
                { text: 'Tracktion Dawesome Love 1.08 微光氛围效果器插件', link: '/software/macos/tracktion-dawesome-love-mac' },
                { text: 'Tracktion Dawesome KULT 1.17 音频振荡合成器插件', link: '/software/macos/tracktion-dawesome-kult-mac' },
                { text: 'Tracktion Dawesome Abyss 1.3.2 视觉化音色合成器插件', link: '/software/macos/tracktion-dawesome-abyss-mac' },
                { text: 'Tracktion Collective 1.2.5 +Factory Content 音频采样合成器插件', link: '/software/macos/tracktion-collective-mac' },
                { text: 'Tracktion BioTek 2.3.3 +Factory Content 音色合成器插件', link: '/software/macos/tracktion-biotek-mac' },
                { text: 'Boris FX CrumplePop Complete 2023.6 终极音频处理插件套装', link: '/software/macos/boris-fx-crumplepop-complete-mac' },
                { text: 'Marvelous Designer Personal 2024.0.149.48716 3D服装设计', link: '/software/macos/marvelous-designer-mac' },
                { text: 'Audacity 3.5.1 音频编辑制作', link: '/software/macos/audacity-mac' },
                { text: 'AnyDesk 8.0.1 远程桌面控制', link: '/software/macos/anydesk-mac' },
                { text: 'A Better Finder Rename 12.05 文件批量重命名', link: '/software/macos/a-better-finder-rename' },
                { text: 'PopChar 10.1 fix 特殊字符管理', link: '/software/macos/popchar-mac' },
                { text: 'Logseq 0.10.9 知识笔记管理', link: '/software/macos/logseq-mac' },
                { text: 'iStat Menus 6.73.1239 系统状态监控', link: '/software/macos/istat-menus' },
                { text: 'IDA Free 8.4.0 反汇编逆向神器', link: '/software/macos/ida-pro-mac' },
                { text: 'Boris FX SynthEyes Pro 2024 24.01.1058 3D视觉效果跟踪', link: '/software/macos/boris-fx-syntheyes-pro-mac' },
                { text: 'Boris FX Mocha Pro for OFX 2024 11.0.1.13 平面跟踪摄像机反求插件', link: '/software/macos/boris-fx-mocha-pro-for-ofx-mac' },
                { text: 'Boris FX Optics 2024.0.1.63 图像特效滤镜处理', link: '/software/macos/boris-fx-optics-mac' },
                { text: 'Boris FX Mocha Pro for Adobe 2024 11.0.1.13 平面跟踪摄像机反求插件', link: '/software/macos/boris-fx-mocha-pro-for-adobe-mac' },
                { text: 'Boris FX Mocha Pro 2024 11.0.1.13 平面跟踪摄像机反求', link: '/software/macos/boris-fx-mocha-pro-mac' },
                { text: 'Boris FX Continuum Complete for Avid 2024 17.0.5.650 视觉特效插件套装', link: '/software/macos/boris-fx-continuum-complete-for-avid-mac' },
                { text: 'Boris FX Continuum Complete for FCPX 2024 17.0.5.650 视觉特效插件套装', link: '/software/macos/boris-fx-continuum-complete-for-fcpx' },
                { text: 'Boris FX Continuum Complete for OFX 2024 17.0.5.650 视觉特效插件套装', link: '/software/macos/boris-fx-continuum-complete-for-ofx-mac' },
                { text: 'Boris FX Continuum Complete for Adobe 2024 17.0.5.650 视觉特效插件套装', link: '/software/macos/boris-fx-continuum-complete-for-adobe-mac' },
                { text: 'QuarkXPress 2024 20.1.0.57226 版面编辑设计', link: '/software/macos/quarkxpress-mac' },
                { text: 'Dehancer Pro AE/PR 7.1.1 Beta 胶片模拟调色插件', link: '/software/macos/dehancer-pro-ae-pr-mac' },
                { text: 'SmartSVN 14.4.1 SVN客户端', link: '/software/macos/smartsvn-mac' },
                { text: 'SmartGit 23.1.3 Git客户端', link: '/software/macos/smartgit-mac' },
                { text: 'WindTerm 2.6.1 终端模拟器/SSH/SFTP客户端', link: '/software/macos/windterm-mac' },
                { text: 'Latest 0.10.3 软件在线更新', link: '/software/macos/latest' },
                { text: 'JetBrains DataSpell 2024.1.1 数据科学家开发环境', link: '/software/macos/jetbrains-dataspell-mac' },
                { text: 'BBEdit 15.0.3 代码编辑器', link: '/software/macos/bbedit' },
                { text: 'Resolume Arena 7.16.0 rev 25503 VJ创作表演', link: '/software/macos/resolume-arena-mac' },
                { text: 'PicGo 2.4.0 Beta 7 图床上传', link: '/software/macos/picgo-mac' },
                { text: '花見Live Wallpaper & Themes 4K Pro 20.0 MAS 超高清4K动态壁纸', link: '/software/macos/live-wallpaper-themes-4k-pro' },
                { text: 'Moneydance 2024.1.5118 个人财务管理', link: '/software/macos/moneydance-mac' },
                { text: 'SimpleMind Pro 2.3.5 MAS 思维导图', link: '/software/macos/simplemind-pro-mac' },
                { text: '4K Image Compressor Pro 1.4.0.0220 图片批量压缩', link: '/software/macos/4k-image-compressor-pro-mac' },
                { text: 'Audirvana Origin 2.5.12 高音质音乐播放器', link: '/software/macos/audirvana-origin' },
                { text: 'Togu Audio Line TAL-Pha 1.2.0 模拟Alpha Juno II合成器插件', link: '/software/macos/togu-audio-line-tal-pha-mac' },
                { text: 'Lyn 2.3.8 图像管理查看', link: '/software/macos/lyn' },
                { text: 'iZotope Trash 1.2.0 音频失真效果插件', link: '/software/macos/izotope-trash-mac' },
                { text: 'HazeOver 1.9.4 虚化背景窗口', link: '/software/macos/hazeover' },
                { text: 'DxO Nik Collection 6.10.0 PS滤镜插件套装', link: '/software/macos/dxo-nik-collection-mac' },
                { text: 'D16 Group Nepheton 2.0.2 808鼓机模拟器插件', link: '/software/macos/d16-group-nepheton-mac' },
                { text: 'D16 Group Drumazon 2.0.5 909鼓机模拟器插件', link: '/software/macos/d16-group-drumazon-mac' },
                { text: 'AnyTrans for iOS 8.9.6.20240417 iPhone数据传输管理', link: '/software/macos/anytrans-for-ios-mac' },
                { text: 'GraphicConverter 12.1.1.6485 图像管理查看', link: '/software/macos/graphicconverter' },
                { text: 'Blossom 1.16.0 Markdown云端写作编辑', link: '/software/macos/blossom-mac' },
                { text: 'Adobe Bridge 2024 14.0.4.222 文件管理浏览', link: '/software/macos/adobe-bridge-mac' },
                { text: '1Blocker 4.4.1 MAS 广告过滤拦截插件', link: '/software/macos/1blocker' },
                { text: 'Steinberg WaveLab Pro 12.0.20 音频母带处理', link: '/software/macos/steinberg-wavelab-pro-mac' },
                { text: 'D16 Group Toraverb 2.2.2 高品质混响效果插件', link: '/software/macos/d16-group-toraverb-mac' },
                { text: 'D16 Group Tekturon 1.2.2 多级分隔延迟效果插件', link: '/software/macos/d16-group-tekturon-mac' },
                { text: 'D16 Group Syntorus 2.2.2 BBD模拟合唱效果插件', link: '/software/macos/d16-group-syntorus-mac' },
                { text: 'D16 Group Spacerek 1.2.3 虚拟空间混响插件', link: '/software/macos/d16-group-spacerek-mac' },
                { text: 'D16 Group Sigmund 2.0.0 多频延时效果插件', link: '/software/macos/d16-group-sigmund-mac' },
                { text: 'D16 Group Repeater 1.2.2 延时/回声效果插件', link: '/software/macos/d16-group-repeater-mac' },
                { text: 'D16 Group Redoptor 2.2.2 电子管失真模拟器插件', link: '/software/macos/d16-group-redoptor-mac' },
                { text: 'D16 Group PunchBox 1.0.8 低音鼓合成器插件', link: '/software/macos/d16-group-punchbox-mac' },
                { text: 'D16 Group Phoscyon 2.1.0 303低音合成器插件', link: '/software/macos/d16-group-phoscyon-mac' },
                { text: 'D16 Group Lush 2.0.1 音色合成器插件', link: '/software/macos/d16-group-lush-mac' },
                { text: 'D16 Group Godfazer 1.2.3 调制效果器插件', link: '/software/macos/d16-group-godfazer-mac' },
                { text: 'D16 Group Frontier 1.2.2 透明压缩器插件', link: '/software/macos/d16-group-frontier-mac' },
                { text: 'D16 Group Fazortan 2.2.2 相位器模拟插件', link: '/software/macos/d16-group-fazortan-mac' },
                { text: 'D16 Group Decimort 2.3.2 经典老式采样器插件', link: '/software/macos/d16-group-devastor-mac' },
                { text: 'D16 Group Decimort 2.3.2 经典老式采样器插件', link: '/software/macos/d16-group-decimort-mac' },
                { text: 'D16 Group Antresol 1.3.2 模拟混响效果器插件', link: '/software/macos/d16-group-antresol-mac' },
                { text: 'FileZilla 3.67.0 FTP传输客户端', link: '/software/macos/filezilla-mac' },
                { text: 'NetWorker Pro 9.0.2 MAS 网络流量监控', link: '/software/macos/networker-pro' },
                { text: 'Togu Audio Line TAL-Sampler 4.5.4 模拟建模合成器插件', link: '/software/macos/togu-audio-line-tal-sampler-mac' },
                { text: 'Togu Audio Line TAL-Mod 1.9.6 虚拟模拟合成器插件', link: '/software/macos/togu-audio-line-tal-mod-mac' },
                { text: 'Togu Audio Line TAL-Dub-X 2.1.0 音频延迟效果插件', link: '/software/macos/togu-audio-line-tal-dub-x-mac' },
                { text: 'Togu Audio Line TAL-Dac 2.0.3 模拟老式数模转换器插件', link: '/software/macos/togu-audio-line-tal-dac-mac' },
                { text: 'Togu Audio Line TAL-BassLine-101 3.9.0 单声道低音合成器插件', link: '/software/macos/togu-audio-line-tal-bassline-101-mac' },
                { text: 'IK Multimedia TONEX MAX 1.0.4 逼真音色建模', link: '/software/macos/ik-multimedia-tonex-max-mac' },
                { text: 'IK Multimedia T-RackS 5.10.4 混音母带处理', link: '/software/macos/ik-multimedia-t-racks-mac' },
                { text: 'IK Multimedia Syntronik 2.1.1 Syntronik虚拟合成器', link: '/software/macos/ik-multimedia-syntronik-mac' },
                { text: 'IK Multimedia SampleTank 4.2.3 音频采样器', link: '/software/macos/ik-multimedia-sampletank-mac' },
                { text: 'IK Multimedia MODO DRUM 1.1.3 虚拟鼓乐器', link: '/software/macos/ik-multimedia-modo-drum-mac' },
                { text: 'IK Multimedia MODO BASS 2.0.2 贝斯建模合成器', link: '/software/macos/ik-multimedia-modo-bass-mac' },
                { text: 'IK Multimedia MixBox 1.5.0 音频混音效果器', link: '/software/macos/ik-multimedia-mixbox-mac' },
                { text: 'IK Multimedia Lurssen Mastering Console 1.1.1 音频母带处理', link: '/software/macos/ik-multimedia-lurssen-mastering-console-mac' },
                { text: 'IK Multimedia Hammond B-3X 1.3.4 虚拟B3风琴', link: '/software/macos/ik-multimedia-hammond-b-3x-mac' },
                { text: 'IK Multimedia ARC System 4.0.0 音频声场校准', link: '/software/macos/ik-multimedia-arc-system-mac' },
                { text: 'IK Multimedia AmpliTube MAX 5.4.1 虚拟吉他与贝斯效果器', link: '/software/macos/ik-multimedia-amplitube-mac' },
                { text: 'Wondershare EdrawMax 13.0.5.1122 亿图图示设计', link: '/software/macos/wondershare-edrawmax-mac' },
                { text: 'SpeakMe 3.0 文字转语音', link: '/software/macos/speakme' },
                { text: 'Sound Siphon 3.6.8 音频捕捉录制', link: '/software/macos/sound-siphon' },
                { text: 'Pot 2.7.10 划词翻译/截图翻译与截图OCR', link: '/software/macos/pot-mac' },
                { text: 'BlueStacks 4.270.1.2803 蓝叠安卓模拟器', link: '/software/macos/bluestacks-mac' },
                { text: 'CleanClip 2.1.3 剪贴板管理', link: '/software/macos/cleanclip' },
                { text: 'Xliff Editor 2.10 Xliff文件编辑器', link: '/software/macos/xliff-editor' },
                { text: 'Whisky 2.3.2 类虚拟机运行Windows软件', link: '/software/macos/whisky' },
                { text: 'System Toolkit 6.1.2 MAS 系统优化维护', link: '/software/macos/system-toolkit' },
                { text: 'Persecond 1.7.1 视频延时制作', link: '/software/macos/persecond' },
                { text: 'Cadintosh X 8.8.6.736 2D CAD绘图设计', link: '/software/macos/cadintosh-x' },
                { text: 'Red Giant VFX Suite 2024.2.0 红巨星视频特效插件套装', link: '/software/macos/red-giant-vfx-suite-mac' },
                { text: 'Red Giant Trapcode Suite 2024.2.0 红巨星粒子特效插件套装', link: '/software/macos/red-giant-trapcode-suite-mac' },
                { text: 'Red Giant Magic Bullet Suite 2024.2.0 红巨星调色降噪插件套装', link: '/software/macos/red-giant-magic-bullet-suite-mac' },
                { text: 'PureBasic LTS 6.10 BASIC语言编辑器', link: '/software/macos/purebasic-mac' },
                { text: 'Photomator 3.3.5 MAS +iCloud 图像编辑处理', link: '/software/macos/photomator' },
                { text: 'ON1 NoNoise AI 2024.3 18.3.0.15302 摄影照片智能降噪', link: '/software/macos/on1-nonoise-ai-mac' },
                { text: 'OcenAudio 3.13.8 音频编辑制作', link: '/software/macos/ocenaudio-mac' },
                { text: 'Geekbench Pro 6.3.0 硬件性能基准测试', link: '/software/macos/geekbench-pro-mac' },
                { text: 'Farrago 2.0.7 音乐伴奏编辑', link: '/software/macos/farrago' },
                { text: 'Doppler 2.1.21 音乐播放器', link: '/software/macos/doppler' },
                { text: 'AlDente Pro 1.26.1 电池健康充电保护管理', link: '/software/macos/aldente-pro' },
                { text: 'UctoX 2.9.14 发票财务管理', link: '/software/macos/uctox' },
                { text: 'Tipard Video Converter Ultimate 10.2.60 视频格式转换', link: '/software/macos/tipard-video-converter-ultimate-mac' },
                { text: 'ON1 Photo RAW MAX 2024.3 18.3.0.15302 摄影RAW图像处理', link: '/software/macos/on1-photo-raw-mac' },
                { text: 'Caprine 2.60.1 第三方Facebook', link: '/software/macos/caprine-mac' },
                { text: 'ArchiCAD 27.2.0 Build 5003 BIM建筑信息3D建模', link: '/software/macos/archicad-mac' },
                { text: 'Keka 1.3.8 解压缩软件', link: '/software/macos/keka' },
                { text: 'MediaMate 3.3.0 屏幕亮度与音量调节', link: '/software/macos/mediamate' },
                { text: 'QtScrcpy 2.2.1 Android实时投屏控制', link: '/software/macos/qtscrcpy-mac' },
                { text: 'JPEGmini Pro 4.1.0 JPG图片无损压缩', link: '/software/macos/jpegmini-pro-mac' },
                { text: 'Adobe Animate 2024 24.0.2.12 动画渲染制作', link: '/software/macos/adobe-animate-mac' },
                { text: 'Imaginando VS 1.4.0 视觉合成器插件', link: '/software/macos/imaginando-vs-mac' },
                { text: 'Imaginando K7D 1.3.0 老式磁带延迟插件', link: '/software/macos/imaginando-k7d-mac' },
                { text: 'Imaginando FRMS 1.9.0 颗粒合成器插件', link: '/software/macos/imaginando-frms-mac' },
                { text: 'Imaginando DRC 2.9.3 虚拟模拟合成器插件', link: '/software/macos/imaginando-drc-mac' },
                { text: 'Imaginando DLYM 2.0.5 音频延迟调制器插件', link: '/software/macos/imaginando-dlym' },
                { text: 'Steinberg Retrologue 2.3.0 减法合成器插件', link: '/software/macos/steinberg-retrologue-mac' },
                { text: 'Steinberg PadShop 2.2.0 虚拟合成器插件', link: '/software/macos/steinberg-padshop-mac' },
                { text: 'Steinberg Backbone 1.6.0 虚拟鼓合成器插件', link: '/software/macos/steinberg-backbone-mac' },
                { text: 'Native Instruments Supercharger GT 1.4.5 仿真电子管压缩器插件', link: '/software/macos/native-instruments-supercharger-gt-mac' },
                { text: 'Native Instruments Reaktor 6.5.0 rev2 音乐合成效果器', link: '/software/macos/native-instruments-reaktor-mac' },
                { text: 'Native Instruments FM8 1.4.6 FM8音频合成器', link: '/software/macos/native-instruments-fm8-mac' },
                { text: 'Native Instruments Battery 4.3.0 虚拟鼓机采样', link: '/software/macos/native-instruments-battery-mac' },
                { text: 'Acon Digital Acoustica Premium 7.5.5 数字音频编辑制作', link: '/software/macos/acon-digital-acoustica-premium-mac' },
                { text: 'Adobe Speech to Text PR 2024 2.1.4 PR语音转文字插件', link: '/software/macos/adobe-speech-to-text-mac' },
                { text: 'Lasso 1.7.1 软件窗口管理', link: '/software/macos/lasso' },
                { text: 'Yoink 3.6.90 文件临时拖放暂存', link: '/software/macos/yoink' },
                { text: 'Toontrack EZkeys 2.0.5 +Core Library 音乐合成制作', link: '/software/macos/toontrack-ezkeys-mac' },
                { text: 'SQLPro Studio 2024.21 数据库管理开发', link: '/software/macos/sqlpro-studio' },
                { text: 'SourceTree 4.2.7 Git客户端', link: '/software/macos/sourcetree-mac' },
                { text: 'Native Instruments Guitar Rig 7 Pro 7.0.2 电吉他贝斯效果器', link: '/software/macos/native-instruments-guitar-rig-pro-mac' },
                { text: 'MathWorks MATLAB R2024a 24.1.0.2537033 算法开发/数据分析/模型创建', link: '/software/macos/mathworks-matlab-mac' },
                { text: 'LocalizationEditor 2.9.2 本地翻译编辑器', link: '/software/macos/localizationeditor' },
                { text: 'He3 2.0.20 终极开发者工具箱', link: '/software/macos/he3-mac' },
                { text: 'Adobe Premiere Pro 2024 24.3.0.059 视频编辑处理', link: '/software/macos/adobe-premiere-pro-mac' },
                { text: 'Adobe Photoshop Lightroom Classic 13.2.0.8 照片后期处理', link: '/software/macos/adobe-photoshop-lightroom-classic-mac' },
                { text: 'Adobe Media Encoder 2024 24.3.0.49 音视频编码渲染', link: '/software/macos/adobe-media-encoder-mac' },
                { text: 'Adobe InDesign 2024 19.3.0.58 版面设计与排版编辑', link: '/software/macos/adobe-indesign-mac' },
                { text: 'Adobe InCopy 2024 19.3.0.58 创意写作编辑', link: '/software/macos/adobe-incopy-mac' },
                { text: 'Adobe Illustrator 2024 28.4.1.86 矢量绘图设计', link: '/software/macos/adobe-illustrator-mac' },
                { text: 'Adobe Character Animator 2024 24.2.0.80 表情捕捉实时生成动画', link: '/software/macos/adobe-character-animator-mac' },
                { text: 'Adobe Audition 2024 24.2.0.83 数字音频编辑', link: '/software/macos/adobe-audition-mac' },
                { text: 'Adobe After Effects 2024 24.3.0.50 视频后期优化处理', link: '/software/macos/adobe-after-effects-mac' },
                { text: 'Adobe Acrobat Pro 2024.001.20604 PDF编辑器', link: '/software/macos/adobe-acrobat-pro-mac' },
                { text: 'Adobe 2024 Patcher 2.41/0.89 Adobe Mac 2024通用补丁', link: '/software/macos/adobe-patcher' },
                { text: '向日葵远程控制 15.2.0.62925', link: '/software/macos/sunlogin-mac' },
                { text: '归家出行助手 1.3.0 12306分流抢票助手', link: '/software/macos/home-coming' },
                { text: '解压缩专家Oka Unarchiver Pro 2.1.9 MAS 解压缩软件', link: '/software/macos/oka-unarchiver-pro' },
                { text: 'Amadine 1.6 矢量图形设计', link: '/software/macos/amadine' },
                { text: 'Alley 0.1.6 小路速传-局域网文件共享', link: '/software/macos/alley-mac' },
                { text: 'wallhaven 4.4.6 高清动静态壁纸', link: '/software/macos/wallhaven-mac' },
                { text: 'Native Instruments Replika 1.6.1 音频延迟效果器插件', link: '/software/macos/native-instruments-replika-mac' },
                { text: 'Imagenomic Noiseware for PS 6.0.4.6041 图像降噪插件', link: '/software/macos/imagenomic-noiseware-for-ps-mac' },
                { text: 'Airfoil 5.12.1 高品质音乐播放器', link: '/software/macos/airfoil' },
                { text: 'ProPresenter 7.16.2 文稿分屏演示', link: '/software/macos/propresenter-mac' },
                { text: 'OmniPlayer Pro 2.1.4 MAS 全能视频播放器', link: '/software/macos/omniplayer-pro' },
                { text: 'Listen 1 2.32.0 全网付费音乐免费听', link: '/software/macos/listen1-mac' },
                { text: 'Buttercup 2.27.0 密码管理器', link: '/software/macos/buttercup-mac' },
                { text: 'zFuse Pro 1.7.40 MAS 万能视频播放器', link: '/software/macos/zfuse-pro' },
                { text: 'Nuro Audio Xrider 1.0.1 智能响度效果器插件', link: '/software/macos/nuro-audio-xrider-mac' },
                { text: 'iZotope VEA 1.0.2 音频AI增强器插件', link: '/software/macos/izotope-vea-mac' },
                { text: 'iZotope Vinyl 1.12.1 唱片模拟效果插件', link: '/software/macos/izotope-vinyl-mac' },
                { text: 'VMware InstallBuilder Enterprise 24.3.0 安装包制作', link: '/software/macos/vmware-installbuilder-enterprise-mac' },
                { text: 'FocuSee 1.0.8 自动放大视频的屏幕录制', link: '/software/macos/focusee' },
                { text: 'IconChamp 1.3.7 软件图标替换', link: '/software/macos/iconchamp' },
                { text: 'LinearMouse 0.10.0 Beta 3 鼠标与触控板控制增强', link: '/software/macos/linearmouse' },
                { text: 'coconutBattery Plus 3.9.17 监测电池健康状况', link: '/software/macos/coconutbattery-plus' },
                { text: 'Avid Sibelius Ultimate 2024.3.1 无限试用版 乐谱简谱制作', link: '/software/macos/avid-sibelius-ultimate-mac' },
                { text: 'X-Disk 1.0.6 MAS U盘/外接磁盘管理', link: '/software/macos/x-disk' },
                { text: 'WiFiSpoof 3.9.5 网络MAC地址修改', link: '/software/macos/wifispoof' },
                { text: 'qBittorrent Enhanced Edition 4.6.4.10 BT种子下载器', link: '/software/macos/qbittorrent-enhanced-edition-mac' },
                { text: 'Pacifist 4.1.0 PKG文件提取查看', link: '/software/macos/pacifist' },
                { text: 'Hit Mix RipX DAW PRO 7.1.0 音频编辑处理', link: '/software/macos/hitnmix-ripx-daw-pro-mac' },
                { text: 'Elmedia Player Pro 8.18 MAS 视频播放器', link: '/software/macos/elmedia-player-pro' },
                { text: 'Elmedia Video Player Pro 8.18 MAS 视频播放器', link: '/software/macos/elmedia-video-player-pro' },
                { text: 'Cycling 74 Max 8.6.2 音乐可视化编程', link: '/software/macos/cycling-74-max-mac' },
                { text: 'DEVONthink Pro 3.9.6 文件管理器', link: '/software/macos/devonthink-pro' },
                { text: 'Mudbox 2025 3D数字绘画雕刻设计', link: '/software/macos/mudbox-mac' },
                { text: 'Maya 2025 3D动画建模设计', link: '/software/macos/maya-mac' },
                { text: 'USBclean 3.9 USB垃圾清理', link: '/software/macos/usbclean' },
                { text: 'eMail Address Extractor 4.7 获取邮箱地址', link: '/software/macos/email-address-extractor' },
                { text: 'Invisible 2.9.0 文件隐藏工具', link: '/software/macos/invisible' },
                { text: 'Hides 5.9.3 隐藏其他应用', link: '/software/macos/hides' },
                { text: 'Multitrack Editor 1.0.7 MAS 多轨音频编辑器', link: '/software/macos/multitrack-editor' },
                { text: 'Stellarium 24.1.0 天象虚拟天文馆', link: '/software/macos/stellarium-mac' },
                { text: 'AI Transcription 2.5 MAS AI智能语音转文本', link: '/software/macos/ai-transcription' },
                { text: 'Charles 4.6.6 网络协议抓包调试', link: '/software/macos/charles-mac' },
                { text: 'Unclutter 2.2.8 MAS 菜单栏剪切板暂存', link: '/software/macos/unclutter' },
                { text: 'VideoProc Converter 4K 6.4 全能视频处理', link: '/software/macos/videoproc-converter-mac' },
                { text: 'Swinsian 3.0 Preview 15 音乐播放器', link: '/software/macos/swinsian' },
                { text: 'Shortery 5.2.0 自动化快捷指令', link: '/software/macos/shortery' },
                { text: 'Privatus 7.0.3 网页缓存清理', link: '/software/macos/privatus' },
                { text: 'Movist Pro 2.11.4 高清视频播放器', link: '/software/macos/movist-pro' },
                { text: 'DaisyDisk 4.30 磁盘空间分析清理', link: '/software/macos/daisydisk' },
                { text: 'ColorWell 7.4.3 颜色选择器', link: '/software/macos/colorwell' },
                { text: 'All To MP3 Converter 3.1.6 MAS 万能MP3音频转换器', link: '/software/macos/all-to-mp3-converter' },
                { text: '天天计算器 6.5.0 MAS 多功能备忘录计算器', link: '/software/macos/daycalc' },
                { text: 'iCADMac Pro 2024 24.0.1.174 2D与3D CAD建模设计', link: '/software/macos/icadmac-pro' },
                { text: 'Commander One PRO 3.8 MAS 文件管理器', link: '/software/macos/commander-one-pro' },
                { text: 'Cardhop 2.2.17 通讯录管理创建', link: '/software/macos/cardhop' },
                { text: 'Navicat Charts Viewer 1.2.17 Navicat图表查看', link: '/software/macos/navicat-charts-viewer-mac' },
                { text: 'Navicat Charts Creator 1.2.17 Navicat图表创建', link: '/software/macos/navicat-charts-creator-mac' },
                { text: 'Blender 4.1.1 3D动画建模渲染设计', link: '/software/macos/blender-mac' },
                { text: 'TurboTax 2023.r23.032 纳税申报核实', link: '/software/macos/turbotax' },
                { text: 'uDock 4.3 Dock栏启动增强', link: '/software/macos/udock' },
                { text: 'Thor 1.5.14 自定义快捷键快速启动软件', link: '/software/macos/thor' },
                { text: 'START 0.301.15650 腾讯云游戏', link: '/software/macos/start-mac' },
                { text: 'OmniGraffle Pro 7.22.6 图示/图表/流程图绘制', link: '/software/macos/omnigraffle-pro' },
                { text: 'Itsycal 0.15.3 菜单栏日历', link: '/software/macos/itsycal' },
                { text: 'FxFactory Pro 8.0.14.7790 视频特效处理插件套装', link: '/software/macos/fxfactory-pro' },
                { text: 'Caffeinated 2.0.5 MAS 防止系统休眠或调暗屏幕', link: '/software/macos/caffeinated' },
                { text: 'BuhoCleaner 1.10.4 系统优化清理', link: '/software/macos/buhocleaner' },
                { text: '谜底时钟MDClock 2.34 MAS 翻页时钟与桌面组件', link: '/software/macos/mdclock' },
                { text: 'CopyQ 8.0.0 剪贴板管理', link: '/software/macos/copyq-mac' },
                { text: 'Room Arranger 9.8.3.645 3D室内设计', link: '/software/macos/room-arranger-mac' },
                { text: 'Vivid 2.9 屏幕亮度调节', link: '/software/macos/vivid' },
                { text: 'TG Pro 2.92 硬件温度监测与风扇控制', link: '/software/macos/tg-pro' },
                { text: 'Navicat Premium 16.3.7 MAS 多连接数据库管理开发', link: '/software/macos/navicat-premium-mac' },
                { text: 'KeyCue 10.2 展示软件快捷键', link: '/software/macos/keycue' },
                { text: 'BetterTouchTool 4.443 触控板手势增强', link: '/software/macos/bettertouchtool' },
                { text: 'Avid Media Composer 2024.2.0 无限试用版 非线性视频编辑处理', link: '/software/macos/avid-media-composer-mac' },
                { text: 'Alfred 5 PowerPack 5.5.0.2257 一键快速启动软件', link: '/software/macos/alfred-powerpack' },
                { text: '尼康工坊 1.6.1 图像编辑处理', link: '/software/macos/nx-studio-mac' },
                { text: 'Bob Pro 1.9.2 MAS 划词翻译/截图翻译与截图OCR', link: '/software/macos/bob-pro' },
                { text: 'BetterDisplay Pro 2.2.6 自定义屏幕分辨率', link: '/software/macos/betterdisplay-pro' },
                { text: 'Final2x 1.2.0 图像AI放大增强', link: '/software/macos/final2x-mac' },
                { text: 'Cutter 2.3.4 反汇编逆向调试', link: '/software/macos/cutter-mac' },
                { text: 'AList Desktop 3.32.0 云盘挂载管理', link: '/software/macos/alist-desktop' },
                { text: 'Clearview X 3.0.7 MAS 电子书阅读管理器', link: '/software/macos/clearview-x' },
                { text: 'DJ Mix Pads 2 16.0.1 MAS DJ音乐制作', link: '/software/macos/dj-mix-pads' },
                { text: '即刻转换 1.3.1 MAS 音视频格式转换器', link: '/software/macos/video-converter-x' },
                { text: 'Rocket Typist 3.0.9 文本自动补全输入', link: '/software/macos/rocket-typist' },
                { text: 'RightFont 8.6.0 字体管理设计', link: '/software/macos/rightfont' },
                { text: 'Fishing Funds 8.2.3 实时显示基金数据涨跌', link: '/software/macos/fishing-funds-mac' },
                { text: 'DropDMG 3.6.7 DMG安装包制作', link: '/software/macos/dropdmg' },
                { text: 'SideNotes 1.4.14 侧边栏便笺与笔记管理', link: '/software/macos/sidenotes' },
                { text: 'Fig Player 1.3.10 MAS 视频播放器', link: '/software/macos/fig-player-mac' },
                { text: 'ToothFairy 2.8.4 MAS 一键切换连接蓝牙设备', link: '/software/macos/toothfairy' },
                { text: 'Navicat Data Modeler Essentials 3.3.17 数据库建模设计', link: '/software/macos/navicat-data-modeler-mac' },
                { text: 'Dehancer Film PS/LR 2.4.0 胶片模拟调色插件', link: '/software/macos/dehancer-film-ps-mac' },
                { text: '010 Editor 14.0.1 十六进制编辑器', link: '/software/macos/010-editor-mac' },
                { text: 'One Switch 1.34.2 菜单栏多合一开关功能合集', link: '/software/macos/one-switch' },
                { text: 'Nova 11.9 代码编辑器', link: '/software/macos/nova' },
                { text: 'LuLu 2.6.3 防火墙软件', link: '/software/macos/lulu' },
                { text: 'Funter 6.2.3 一键设置文件隐藏显示', link: '/software/macos/funter' },
                { text: 'YesPlayMusic 0.4.8-2 第三方网易云音乐播放器', link: '/software/macos/yesplaymusic-mac' },
                { text: 'The Foundry NUKE 15.0v4 影视后期特效合成制作', link: '/software/macos/the-foundry-nuke-mac' },
                { text: 'Tabby 1.0.207 终端模拟器/SSH客户端', link: '/software/macos/tabby-mac' },
                { text: 'SnapMotion 5.2.1 视频截图提取', link: '/software/macos/snapmotion' },
                { text: 'Menuwhere 2.2.2 菜单栏便捷定位', link: '/software/macos/menuwhere' },
                { text: 'MetaRename 1.0.10 文件批量重命名', link: '/software/macos/metarename' },
                { text: 'DxO ViewPoint 4.15.0.294 照片修复校正', link: '/software/macos/dxo-viewpoint-mac' },
                { text: 'DxO FilmPack 7.5.0.513 胶片模拟效果滤镜', link: '/software/macos/dxo-filmpack-mac' },
                { text: 'App Cleaner & Uninstaller Pro 8.2.7 软件深度卸载清理', link: '/software/macos/app-cleaner-uninstaller-pro' },
                { text: 'Weather Dock 5.5.1 MAS 高清天气预报与Dock图标', link: '/software/macos/weather-dock' },
                { text: 'Desktop Aquarium Wallpapers 2.2.0 MAS 水族馆锁屏动态壁纸', link: '/software/macos/desktop-aquarium-wallpapers' },
                { text: 'AceMovi Video Editor 4.23.0.169 视频编辑处理', link: '/software/macos/acemovi-video-editor-mac' },
                { text: 'SuspiciousPackage 4.4.0 PKG文件提取查看', link: '/software/macos/suspiciouspackage' },
                { text: 'Recut 3.7.6 自动视频编辑处理', link: '/software/macos/recut' },
                { text: 'TextSoap 9.4.2 文本格式清除', link: '/software/macos/textsoap' },
                { text: 'DisplayBuddy 1.44 屏幕亮度调节', link: '/software/macos/displaybuddy' },
                { text: 'Coming soon 3.20 MAS 及时获取电影资讯', link: '/software/macos/coming-soon' },
                { text: 'Maxthon 7.1.7.8700 Beta 傲游浏览器', link: '/software/macos/maxthon-mac' },
                { text: '蜗牛云盘 1.4.0 第三方阿里云盘', link: '/software/macos/woniudisk-mac' },
                { text: 'BLEUnlock 1.12.2 使用iPhone/Apple Watch或其他蓝牙设备锁定/解锁Mac', link: '/software/macos/bleunlock' },
                { text: 'GrandTotal 8.2.4 财务管理', link: '/software/macos/grandtotal' },
                { text: 'ServerCat 1.9.0 MAS SSH终端模拟器', link: '/software/macos/servercat' },
                { text: 'XnConvert 1.100.1 图片批量处理', link: '/software/macos/xnconvert-mac' },
                { text: 'Wondershare DVD Creator 6.1.10.5 DVD光盘刻录', link: '/software/macos/wondershare-dvd-creator-mac' },
                { text: 'GlueMotion 2.2.2 MAS 延时摄影视频制作', link: '/software/macos/gluemotion' },
                { text: 'Adobe Substance 3D Sampler 4.1.0.3039 图片转3D素材软件', link: '/software/macos/adobe-substance-3d-sampler-mac' },
                { text: 'Adobe Substance 3D Painter 9.1.2.3332 3D数字绘画设计', link: '/software/macos/adobe-substance-3d-painter-mac' },
                { text: 'Adobe Substance 3D Designer 13.1.1.7509 3D纹理材料制作', link: '/software/macos/adobe-substance-3d-designer-mac' },
                { text: 'Adobe Photoshop 2024 25.5.0.375 +Neural Filters 图像编辑处理设计', link: '/software/macos/adobe-photoshop-mac' },
                { text: 'Adguard 2.13.0.1558 广告过滤拦截', link: '/software/macos/adguard-mac' },
                { text: 'ONLYOFFICE 8.0.1 Office办公套件', link: '/software/macos/onlyoffice-mac' },
                { text: 'Omi录屏专家 1.3.8 MAS 屏幕录像编辑', link: '/software/macos/omi-screenrecorder' },
                { text: 'LocalSend 1.14.0 文件加密共享', link: '/software/macos/localsend-mac' },
                { text: 'Adobe Substance 3D Stager 2.1.4.5738 3D场景渲染设计', link: '/software/macos/adobe-substance-3d-stager-mac' },
                { text: 'Pro Microphone 4.6.0 MAS 麦克风音乐录制', link: '/software/macos/pro-microphone' },
                { text: 'OmniZip Pro 2.1.6 MAS 全能解压缩专家', link: '/software/macos/omnizip-pro' },
                { text: 'NotepadNext 0.7.0 文本与代码编辑器', link: '/software/macos/notepadnext-mac' },
                { text: 'Iridient Developer 4.2.1 RAW照片调整处理', link: '/software/macos/iridient-developer' },
                { text: 'Google Earth Pro 7.3.6.9796 谷歌地球-虚拟地球仪', link: '/software/macos/google-earth-pro-mac' },
                { text: 'BusyCal 2024.1.2 任务提醒与菜单栏日历', link: '/software/macos/busycal' },
                { text: 'App Tamer 2.8.3 CPU优化电池管理', link: '/software/macos/app-tamer' },
                { text: 'Waves Ultimate 14 2024.02.11 Waves音频后期混音套件', link: '/software/macos/waves-ultimate-mac' },
                { text: 'Typora 1.8.10 Markdown写作编辑', link: '/software/macos/typora-mac' },
                { text: 'Termius 8.9.7 终端模拟器/SSH/SFTP客户端', link: '/software/macos/termius-mac' },
                { text: 'Steinberg SpectraLayers Pro 10.0.50.343 音频光谱编辑与修复', link: '/software/macos/steinberg-spectralayers-pro-mac' },
                { text: 'Smooze Pro 2.0.72 鼠标滚动增强', link: '/software/macos/smooze-pro' },
                { text: 'SILKYPIX JPEG Photography 11.2.14.0 图像编辑处理', link: '/software/macos/silkypix-jpeg-photography-mac' },
                { text: 'SILKYPIX Developer Studio Pro 11.0.14.0  RAW图像编辑处理', link: '/software/macos/silkypix-developer-studio-pro-mac' },
                { text: 'Retroactive 2.1 高版本系统解锁运行低版本软件', link: '/software/macos/retroactive' },
                { text: 'Perfectly Clear Video 4.6.0.2638 AI视频清晰化处理', link: '/software/macos/perfectly-clear-video-mac' },
                { text: 'Paletro 1.10.0 快捷命令面板', link: '/software/macos/paletro' },
                { text: 'Moom 3.2.26 软件窗口管理', link: '/software/macos/moom' },
                { text: 'MAMP PRO 6.9.0 Web服务器集成开发环境', link: '/software/macos/mamp-pro-mac' },
                { text: 'LunarBar 1.2.0 菜单栏极简日历', link: '/software/macos/lunarbar' },
                { text: 'Loop Mash Up 1.2.13 MAS DJ音乐混音制作', link: '/software/macos/loop-mash-up' },
                { text: 'Logoist 5.1.2 MAS 图标设计制作', link: '/software/macos/logoist' },
                { text: 'JixiPix Artista Impresso Pro 1.8.26 图片油画滤镜', link: '/software/macos/jixipix-artista-impresso-pro-mac' },
                { text: 'FonesGo Location Changer 7.0.0 iOS与Android设备修改GPS位置', link: '/software/macos/fonesgo-location-changer' },
                { text: 'File List Export 2.9.1 MAS 文件列表导出', link: '/software/macos/file-list-export' },
                { text: 'Darktable 4.6.1 RAW图像编辑处理', link: '/software/macos/darktable-mac' },
                { text: 'Cinemagraph Pro 2.11 GIF动态图片特效', link: '/software/macos/cinemagraph-pro' },
                { text: 'BusyContacts 2024.1.2 通讯录管理创建', link: '/software/macos/busycontacts' },
                { text: 'Barcode 2.5.6 条形码生成器', link: '/software/macos/barcode-mac' },
                { text: 'AutoMounter 1.8.1 网络共享自动加载软件', link: '/software/macos/automounter' },
                { text: 'Air Printer 5.2.2 MAS 隔空虚拟打印机', link: '/software/macos/air-printer' },
                { text: 'ACDSee Photo Studio 10.0.4.3045 图像数字处理', link: '/software/macos/acdsee-photo-studio' },
                { text: 'EtreCheckPro 6.8.4 查看mac硬件信息', link: '/software/macos/etrecheckpro' },
                { text: 'Session 2.9.15 MAS 番茄钟专注计时器', link: '/software/macos/session' },
                { text: 'Alpaca 2.9.2 PS图像智能生成插件', link: '/software/macos/alpaca' },
                { text: 'NXPowerLite Desktop 10.1.0 文件压缩管理', link: '/software/macos/nxpowerlite-desktop-mac' },
                { text: 'Native Instruments Traktor Pro Plus 3.11.1.17 数字DJ混音', link: '/software/macos/native-instruments-traktor-pro-plus-mac' },
                { text: 'MacZip 2.4 解压缩软件', link: '/software/macos/maczip' },
                { text: 'DiffusionBee 2.5.1 图像AI增强修复', link: '/software/macos/diffusionbee' },
                { text: 'Amadeus Pro 2.8.13.2662 Beta 多轨音频编辑器', link: '/software/macos/amadeus-pro' },
                { text: 'Scrutiny 12.8.9 网站链接分析', link: '/software/macos/scrutiny' },
                { text: '敲木鱼 12.5 MAS 音效敲击软件', link: '/software/macos/macmuyu' },
                { text: 'Slidepad 1.4.7 侧边栏浏览器', link: '/software/macos/slidepad' },
                { text: 'Maxon App 2024.1.1 创意插件合集', link: '/software/macos/maxon-app-mac' },
                { text: 'FileMaker Pro 20.3.1.31 定制化App开发软件', link: '/software/macos/filemaker-pro-mac' },
                { text: 'Dash 7.2.1 API开发文档管理', link: '/software/macos/dash' },
                { text: 'AnyMP4 iPhone GPS Spoofer 1.0.18 修改或隐藏iPhone GPS位置', link: '/software/macos/anymp4-iphone-gps-spoofer' },
                { text: 'SteerMouse 5.7 万能鼠标增强设置', link: '/software/macos/steermouse' },
                { text: 'Marked 2.6.33 文本标记预览器', link: '/software/macos/marked' },
                { text: 'Lunar Pro 6.5.0 屏幕亮度调节', link: '/software/macos/lunar-pro' },
                { text: '2Do 2.8.5 任务待办事项', link: '/software/macos/2do' },
                { text: 'PhotosRevive 2.1.3 老旧照片自动着色', link: '/software/macos/photosrevive' },
                { text: 'MetaVideo 1.1.3 视频元数据编辑', link: '/software/macos/metavideo' },
                { text: 'Pocket Yoga 14.3.0 MAS 口袋瑜伽', link: '/software/macos/pocket-yoga' },
                { text: 'Eon Timer 2.9.11 时间跟踪器', link: '/software/macos/eon-timer' },
                { text: 'DxO PureRAW 3.9.0.33 RAW图像编辑处理', link: '/software/macos/dxo-pureraw-mac' },
                { text: 'Chain Timer 10.1 MAS 链式计时器', link: '/software/macos/chain-timer' },
                { text: 'Boris FX Silhouette 2023.5.3 视频特效与后期抠像', link: '/software/macos/boris-fx-silhouette-mac' },
                { text: 'Battery Indicator 2.17.0 MAS 菜单栏显示剩余电量', link: '/software/macos/battery-indicator' },
                { text: 'Wolfram Mathematica 14.0.0 数学科学计算', link: '/software/macos/wolfram-mathematica-mac' },
                { text: 'Nuro Audio Xvox Pro 1.0.3 终极人声混音效果器插件', link: '/software/macos/nuro-audio-xvox-pro-mac' },
                { text: 'Ultimate Vocal Remover 5.6.0 UVR终极人声伴奏分离器', link: '/software/macos/ultimate-vocal-remover-mac' },
                { text: 'Usage 1.14.4 MAS 菜单栏系统状态监控', link: '/software/macos/usage' },
                { text: '落格输入法 3.3.2 双拼输入法', link: '/software/macos/loginput' },
                { text: 'Wizard 2.0.16 数据可视化分析', link: '/software/macos/wizard' },
                { text: 'Weather Widget Live 5.1.1 MAS 高清天气壁纸', link: '/software/macos/weather-widget-live' },
                { text: 'MetaImage 2.6.3 图片元数据编辑', link: '/software/macos/metaimage' },
                { text: 'EzyCal 2.3 MAS 日历与时间提醒', link: '/software/macos/ezycal' },
                { text: 'Alarm Clock Pro 15.6.0 闹钟与时间管理', link: '/software/macos/alarm-clock-pro' },
                { text: 'FreeCAD 0.21.2 CAD绘图设计', link: '/software/macos/freecad-mac' },
                { text: 'CrystalMaker 10.8.3 晶体与分子结构可视化', link: '/software/macos/crystalmaker-mac' },
                { text: 'Butler 4.4.8 快捷启动器', link: '/software/macos/butler' },
                { text: 'Adobe Captivate 12.2.0.19 屏幕录制演示', link: '/software/macos/adobe-captivate-mac' },
                { text: 'Captin 1.3.1 实时显示大小写锁定状态', link: '/software/macos/captin' },
                { text: 'Canary Mail 4.34 MAS 邮件收发管理', link: '/software/macos/canary-mail' },
                { text: 'Receipts 1.15 财务文件管理', link: '/software/macos/receipts' },
                { text: 'iZotope Tonal Balance Control 2.7.0 音调平衡控制插件', link: '/software/macos/izotope-tonal-balance-control-mac' },
                { text: 'iZotope Relay 1.4.0 音频效果增强插件', link: '/software/macos/izotope-relay-mac' },
                { text: 'Cheat Engine 7.5.2 CE修改器', link: '/software/macos/cheat-engine-mac' },
                { text: 'Unite 5.1.2 将任何Web网站转换为桌面应用', link: '/software/macos/unite' },
                { text: 'Mounty 2.4 NTFS磁盘挂载读写', link: '/software/macos/mounty' },
                { text: 'ExactScan Enterprise 23.12.30 万能文档扫描仪', link: '/software/macos/exactscan-enterprise' },
                { text: 'Color Folder Pro 3.8 MAS 文件夹图标颜色修改', link: '/software/macos/color-folder-pro' },
                { text: 'iFastZip 9.0 MAS 解压缩软件', link: '/software/macos/ifastzip' },
                { text: 'HapiGo 2.12.0 一键快速启动软件', link: '/software/macos/hapigo' },
                { text: 'FinalShell专业版 4.3.1.0 终端模拟器/SSH客户端', link: '/software/macos/finalshell-mac' },
                { text: 'Dehancer Pro FCP 2.0.1 胶片模拟调色插件', link: '/software/macos/dehancer-pro-fcp' },
                { text: 'OctaneRender 2023.1 C4D OC渲染器', link: '/software/macos/octanerender' },
                { text: 'Imagenomic Realgrain for PS 2.1.4.2147 图像胶片滤镜插件', link: '/software/macos/imagenomic-realgrain-for-ps-mac' },
                { text: 'Imagenomic Portraiture for LR 4.1.2.4127 图像磨皮滤镜插件', link: '/software/macos/imagenomic-portraiture-for-lr-mac' },
                { text: 'Clark Audio Lofi Panda 3.4.0 熊猫音频采样插件', link: '/software/macos/clark-audio-lofi-panda-mac' },
                { text: 'LMMS 1.2.2 音频编辑处理', link: '/software/macos/lmms-mac' },
                { text: 'Harrison Mixbus 32C 7.0.150 数字音频混音编辑', link: '/software/macos/harrison-mixbus-mac' },
                { text: 'iMap Builder 3.1.14 MAS 思维导图与头脑风暴', link: '/software/macos/imap-builder' },
                { text: 'QuitAll 1.2.3 一键强制退出软件', link: '/software/macos/quitall' },
                { text: 'Mosaic Pro 1.4 软件窗口管理', link: '/software/macos/mosaic-pro' },
                { text: 'Firetask 4.8.2 GTD任务待办管理', link: '/software/macos/firetask' },
                { text: 'Aquarium 4K 1.0.5 MAS 4K高清屏保', link: '/software/macos/aquarium-4k' },
                { text: 'Fireplace Live HD 4.5.0 MAS 高清壁炉篝火壁纸', link: '/software/macos/fireplace-live-hd' },
                { text: 'Calunar 1.11.1 MAS 支持小组件的简约农历', link: '/software/macos/calunar' },
                { text: 'Aquarium Live HD 3.5.0 MAS 水族馆海洋屏保', link: '/software/macos/aquarium-live-hd' },
                { text: 'System Dashboard 4.9.1 MAS 系统状态监测', link: '/software/macos/system-dashboard' },
                { text: 'Studio 3T Ultimate 2023.5.0 MongoDB 数据库可视化管理', link: '/software/macos/studio-3t-ultimate-mac' },
                { text: 'iTerm2 3.4.23 命令行终端美化模拟器', link: '/software/macos/iterm2' },
                { text: 'Browserosaurus 20.7.0 一键切换默认浏览器', link: '/software/macos/browserosaurus' },
                { text: 'Awaken 6.4.5 MAS 音乐闹钟与睡眠计时器', link: '/software/macos/awaken' },
                { text: 'Inklet 2.2.5 触控板绘图写作', link: '/software/macos/inklet' },
                { text: 'KeyClu 0.18 展示软件快捷键', link: '/software/macos/keyclu' },
                { text: 'Moho Pro 14.1.0 2D动画编辑制作', link: '/software/macos/moho-pro-mac' },
                { text: 'OpenInTerminal 2.3.7 一键快速启动软件', link: '/software/macos/openinterminal' },
                { text: 'Concealer 1.3.7 文件信息加密', link: '/software/macos/concealer' },
                { text: 'Sparkle 5.2.3 可视化网页开发', link: '/software/macos/sparkle' },
                { text: 'Picview Pro 1.1.2 MAS 图像管理查看', link: '/software/macos/picview-pro' },
                { text: 'Shottr 1.7.2 OCR截图标注', link: '/software/macos/shottr' },
                { text: 'PDF Search 13.7 PDF文档搜索', link: '/software/macos/pdf-search' },
                { text: 'Outlinely 2.10.8 树形结构笔记软件', link: '/software/macos/outlinely' },
                { text: 'Mix Up Studio 24.3.2 MAS 迷你混音工作室', link: '/software/macos/mix-up-studio' },
                { text: 'RePix Pro 2.3.0 MAS 图像编辑处理', link: '/software/macos/repix-pro' },
                { text: 'Wattagio 1.13.1 mac电池监测管理', link: '/software/macos/wattagio' },
                { text: 'Serial 2.0.17 串行终端调试管理', link: '/software/macos/serial' },
                { text: 'Magic Battery 8.1.1 MAS 显示连接设备电量', link: '/software/macos/magic-battery' },
                { text: 'AnyMP4 Mac Blu-ray Player 6.3.68 蓝光视频播放器', link: '/software/macos/anymp4-blu-ray-player-mac' },
                { text: 'Inkscape 1.3.2 矢量绘图设计', link: '/software/macos/inkscape-mac' },
                { text: 'OpenOffice 4.1.15 Office办公套件', link: '/software/macos/openoffice-mac' },
                { text: 'VectorStyler 1.1.111 矢量图形设计', link: '/software/macos/vectorstyler-mac' },
                { text: 'Image2icon 2.18 MAS 图标制作导出', link: '/software/macos/image2icon' },
                { text: 'Storyist 4.3.4 小说写作编辑', link: '/software/macos/storyist' },
                { text: 'PCDJ LYRX 1.10.3.0 DJ与卡拉OK制作', link: '/software/macos/pcdj-lyrx-mac' },
                { text: 'MAXON CINEMA 4D Studio 2024.2.0 C4D三维动画设计', link: '/software/macos/maxon-cinema-4d-studio-mac' },
                { text: 'Final Cut Pro 10.7.1 MAS 视频编辑处理', link: '/software/macos/final-cut-pro' },
                { text: 'Vanilla Pro 2.1.1 菜单栏图标隐藏管理', link: '/software/macos/vanilla-pro' },
                { text: 'Transmit 5.10.4 FTP/SFTP连接管理', link: '/software/macos/transmit' },
                { text: 'The Clock 4.9.1 MAS 世界时钟与日历', link: '/software/macos/the-clock' },
                { text: 'PhotoLine 24.01 图像编辑处理', link: '/software/macos/photoline-mac' },
                { text: 'OmniOutliner Pro 5.12 知识大纲管理', link: '/software/macos/omnioutliner-pro' },
                { text: 'Curio Professional 27.0 笔记与思维导图', link: '/software/macos/curio-professional' },
                { text: 'aText 2.40.5 文本扩展', link: '/software/macos/atext-mac' },
                { text: 'Oniric Glow Generator 1.3.0 PS光效光晕合成插件', link: '/software/macos/oniric-glow-generator' },
                { text: 'ApolloOne 3.3.7 MAS 图像管理查看', link: '/software/macos/apolloone' },
                { text: 'Wondershare MindMaster Pro 10.8.0 亿图脑图/思维导图', link: '/software/macos/wondershare-mindmaster-pro-mac' },
                { text: 'Corel WinZip Pro 11.0.6675 解压缩软件', link: '/software/macos/corel-winzip-pro-mac' },
                { text: 'PasteNow 2.16 MAS 剪贴板管理', link: '/software/macos/pastenow' },
                { text: 'Magnet 2.14.0 MAS 软件窗口管理', link: '/software/macos/magnet' },
                { text: 'MarkMark 0.6.331 收藏后续阅读', link: '/software/macos/markmark' },
                { text: 'Macs Fan Control Pro 1.5.17 电脑风扇控制', link: '/software/macos/macs-fan-control-pro' },
                { text: 'ImageRanger Pro 1.9.6.1888 图像管理查看', link: '/software/macos/imageranger-pro-mac' },
                { text: 'HoudahSpot 6.4.1 文件搜索查找', link: '/software/macos/houdahspot' },
                { text: 'FreeOffice 2021 build 1068 Office办公套件', link: '/software/macos/freeoffice-mac' },
                { text: 'CodeRunner 4.3 多功能代码编辑器', link: '/software/macos/coderunner' },
                { text: 'Bandizip Pro 7.29 MAS 解压缩软件', link: '/software/macos/bandizip-pro-mac' },
                { text: 'ApiPost 7.2.6 API接口调试', link: '/software/macos/apipost-mac' },
                { text: 'Native Instruments Replika XT 1.3.1 音频延迟效果器插件', link: '/software/macos/native-instruments-replika-xt-mac' },
                { text: 'Mate Translate 8.1.3 MAS 翻译软件', link: '/software/macos/mate-translate' },
                { text: 'Karabiner Elements 14.13.0 键盘改键位', link: '/software/macos/karabiner-elements' },
                { text: 'Data Guardian 7.6.7 数据安全保护', link: '/software/macos/data-guardian' },
                { text: 'MacPilot 15.0.3 系统维护优化', link: '/software/macos/macpilot' },
                { text: 'MainStage 3.6.6 MAS 音乐现场演出装备', link: '/software/macos/mainstage' },
                { text: 'Mach Desktop HD 3.0.6 MAS 4K动态壁纸', link: '/software/macos/mach-desktop-hd' },
                { text: 'Live Wallpaper HD 5.7.0 MAS 高清天气壁纸', link: '/software/macos/live-wallpaper-hd' },
                { text: 'Krita 5.2.2 数字绘画设计', link: '/software/macos/krita-mac' },
                { text: 'JixiPix Spektrel Art 1.1.17 图片锐化处理', link: '/software/macos/jixipix-spektrel-art-mac' },
                { text: 'Color Wheel 8.1 MAS 数字和抽象色轮', link: '/software/macos/color-wheel' },
                { text: 'Surge 5.4.3.2534 网络调试代理', link: '/software/macos/surge' },
                { text: 'JixiPix Rip Studio Pro 1.1.20 图片拼接处理', link: '/software/macos/jixipix-rip-studio-pro-mac' },
                { text: 'JixiPix Photo Formation Pro 1.0.22 3D创意照片特效', link: '/software/macos/jixipix-photo-formation-pro-mac' },
                { text: 'Coherence X 4.5.3 将任何Web网站转换为桌面应用', link: '/software/macos/coherence-x' },
                { text: 'LaunchBar 6.18.5 一键快速启动软件', link: '/software/macos/launchbar' },
                { text: 'JixiPix PuzziPix Pro 1.0.20 图片拼图', link: '/software/macos/jixipix-puzzipix-pro-mac' },
                { text: 'SILKYPIX Developer Studio Pro for Panasonic 11.3.13.0  松下相机图片处理', link: '/software/macos/silkypix-developer-studio-pro-for-panasonic-mac' },
                { text: 'SILKYPIX Developer Studio Pro for FUJIFILM 11.4.13.0  富士相机图片处理', link: '/software/macos/silkypix-developer-studio-pro-for-fujifilm-mac' },
                { text: 'Pixea Plus 5.2 MAS 图像管理查看', link: '/software/macos/pixea-plus' },
                { text: 'Performance Index 64 Pro 4.2.12 MAS 系统性能基准测试', link: '/software/macos/performance-index-pro' },
                { text: 'NetNewsWire 6.1.5b1 RSS阅读管理', link: '/software/macos/netnewswire' },
                { text: 'Living Weather & Wallpapers HD 5.5.0 MAS 高清天气壁纸', link: '/software/macos/living-weather-wallpapers-hd' },
                { text: 'Compressor 4.7.0 MAS 视频编码格式转换', link: '/software/macos/compressor' },
                { text: 'Motion 5.7.0 MAS 视频后期特效合成', link: '/software/macos/motion' },
                { text: 'Librarian Pro 7.4.0 图书收藏管理', link: '/software/macos/librarian-pro' },
                { text: 'Readiris Corporate 17.1.9 OCR文字识别', link: '/software/macos/readiris-corporate-mac' },
                { text: 'iCalamus 2.26 版面编辑设计', link: '/software/macos/icalamus' },
                { text: 'Acorn 7.4.3 轻量级图片处理', link: '/software/macos/acorn' },
                { text: 'Dark Reader 1.4.6 MAS Safari深色模式插件', link: '/software/macos/dark-reader' },
                { text: 'Lightkey 4.5.1 DMX灯光照明控制', link: '/software/macos/lightkey' },
                { text: 'Meta 2.2 音频标签编辑器', link: '/software/macos/meta' },
                { text: 'Viper FTP 6.3.7 FTP传输客户端', link: '/software/macos/viper-ftp' },
                { text: 'iCollections 8.1 桌面文件整理', link: '/software/macos/icollections' },
                { text: 'Scherlokk 4.6.3 文件高效搜索', link: '/software/macos/scherlokk' },
                { text: 'JixiPix Watercolor Studio Pro 1.4.17 图片水彩画绘制', link: '/software/macos/jixipix-watercolor-studio-pro-mac' },
                { text: 'JixiPix Chromatic Edges 1.0.31 照片复古艺术效果', link: '/software/macos/jixipix-chromatic-edges-mac' },
                { text: 'Timemator 3.0.4 时间追踪记录与自动化', link: '/software/macos/timemator' },
                { text: 'Swish 1.10.3 触控栏窗口管理', link: '/software/macos/swish' },
                { text: 'Screens 4.12.16 远程桌面控制', link: '/software/macos/screens' },
                { text: 'JixiPix Pastello Pro 6.0.98 照片转铅笔画', link: '/software/macos/jixipix-pastello-pro-mac' },
                { text: 'PhoneRescue for iOS 4.2.6.20231019 iPhone数据恢复', link: '/software/macos/phonerescue-for-ios-mac' },
                { text: 'Jixipix Premium Pack 1.2.11 艺术照片特效', link: '/software/macos/jixipix-premium-pack-mac' },
                { text: 'Royal TSX 6.0.2 远程桌面连接管理', link: '/software/macos/royal-tsx-mac' },
                { text: 'Jump Paint 6.1 漫画绘图设计', link: '/software/macos/jump-paint-mac' },
                { text: 'AutoMute 1.8 MAS 自动静音', link: '/software/macos/automute' },
                { text: 'Stretchly 1.15.1 定时休息提醒', link: '/software/macos/stretchly-mac' },
                { text: 'Tampermonkey 4.20.6188 MAS Safari油猴脚本管理插件', link: '/software/macos/tampermonkey' },
                { text: 'Renamer 7.0.14 文件批量重命名', link: '/software/macos/renamer' },
                { text: 'Pixelstyle Photo Editor 4.3.0 MAS 图像编辑器', link: '/software/macos/pixelstyle-photo-editor' },
                { text: '冰点还原Deep Freeze 7.60.220.0202 系统还原备份', link: '/software/macos/deep-freeze-mac' },
                { text: 'GrabIt 4.932 MAS 屏幕截图', link: '/software/macos/grabit' },
                { text: 'Remote Wake Up 1.4.1 远程唤醒电脑', link: '/software/macos/remote-wake-up' },
                { text: 'PDF Protector 1.5.2 PDF文件加密', link: '/software/macos/pdf-protector' },
                { text: 'Network Radar 3.0.4 网络扫描管理', link: '/software/macos/network-radar' },
                { text: 'Tembo 3.1.1 文件搜索查找', link: '/software/macos/tembo' },
                { text: 'Photos Workbench 1.2.1 图片管理与评分比较', link: '/software/macos/photos-workbench' },
                { text: 'HoudahGeo 6.4.2 地理信息管理标记', link: '/software/macos/houdahgeo' },
                { text: 'SparkFX 1.2.1 音频编辑制作', link: '/software/macos/sparkfx' },
                { text: 'Sound Control 2.6.4 单独调节应用音量', link: '/software/macos/sound-control' },
                { text: 'Bing Wallpaper 1.1.3 每天自动更新必应壁纸', link: '/software/macos/bing-wallpaper-mac' },
                { text: 'MacCleanse 12.5 系统垃圾清理', link: '/software/macos/maccleanse' },
                { text: 'Airtool 2.5.3 菜单栏网络监控', link: '/software/macos/airtool' },
                { text: 'ScreenFlow 10.0.10 屏幕录像编辑', link: '/software/macos/screenflow' },
                { text: 'Lattice 1.8.14 LUT颜色查找表', link: '/software/macos/lattice' },
                { text: 'Taskheat 1.8.16 MAS 流程图任务管理', link: '/software/macos/taskheat' },
                { text: 'BatteryBoi 2.4.1 菜单栏电池指示器', link: '/software/macos/batteryboi' },
                { text: 'AnyDrop 1.4 文本文件集成处理', link: '/software/macos/anydrop' },
                { text: 'FotoJet Designer 1.2.0 MAS 平面制图设计', link: '/software/macos/fotojet-designer-mac' },
                { text: 'FotoJet Photo Editor 1.0.7 MAS 图像编辑处理', link: '/software/macos/fotojet-photo-editor-mac' },
                { text: 'WaterMinder 4.3 健康喝水提醒', link: '/software/macos/waterminder' },
                { text: 'UninstallPKG 1.2.1 PKG文件清理', link: '/software/macos/uninstallpkg' },
                { text: 'VideoDuke 2.14.760 视频解析下载', link: '/software/macos/videoduke' },
                { text: 'uBar 4.2.2 程序坞修改美化', link: '/software/macos/ubar' },
                { text: 'Get Backup Pro 3.7.3 数据同步备份', link: '/software/macos/get-backup-pro' },
                { text: 'EXIF Sync 1.9.5 图片元数据同步处理', link: '/software/macos/exif-sync' },
                { text: 'Corel Painter 2023 23.0.0.352 美术绘图设计', link: '/software/macos/corel-painter-mac' },
                { text: 'MenuBar Stats 3.9 MAS 系统进程监控管理', link: '/software/macos/menubar-stats' },
                { text: 'Export for iTunes 3.5 MAS 音乐文件管理', link: '/software/macos/export-for-itunes' },
                { text: 'Vectorize! 1.1 MAS 矢量图转换', link: '/software/macos/vectorize' },
                { text: 'Screenium 3.3.4 MAS 屏幕录像编辑', link: '/software/macos/screenium' },
                { text: 'iFinance 4.5.23 MAS 财务管理', link: '/software/macos/ifinance' },
                { text: 'Sharks 3D 2.1.0 MAS 3D海底鲨鱼动态壁纸', link: '/software/macos/sharks-3d' },
                { text: 'Record It Pro 1.7.6 4K超清屏幕录像编辑', link: '/software/macos/record-it-pro' },
                { text: 'Pro Mouse 1.10 鼠标光标标记增强', link: '/software/macos/pro-mouse' },
                { text: 'PhotoBulk 2.6 图片批量压缩处理', link: '/software/macos/photobulk' },
                { text: 'PCalc 4.10.8 MAS 科学计算器', link: '/software/macos/pcalc' },
                { text: 'Outside 4.0 MAS 天气预报', link: '/software/macos/outside' },
                { text: 'oneSafe 2.4.0 MAS 密码管理器', link: '/software/macos/onesafe' },
                { text: 'Numi 3.32 mini文本计算器', link: '/software/macos/numi' },
                { text: 'Notability 4.4.4 MAS 多功能笔记注释', link: '/software/macos/notability' },
                { text: 'Noizio 2.1.0 MAS 环境白噪音模拟', link: '/software/macos/noizio' },
                { text: 'Neural Mix Pro 1.1.1 MAS 音乐实时分离', link: '/software/macos/neural-mix-pro' },
                { text: 'Logo Art 1.0.5 MAS 矢量绘图设计', link: '/software/macos/logo-art' },
                { text: 'CDRConverter 1.3 MAS CDR文件批量转换', link: '/software/macos/cdrconverter' },
                { text: 'Vezer 1.8.9 视频实时控制', link: '/software/macos/vezer' },
                { text: 'Swift Publisher 5.6.9 版面编辑设计', link: '/software/macos/swift-publisher' },
                { text: 'Steinberg HALion 7.0.20 虚拟采样与声音合成', link: '/software/macos/steinberg-halion-mac' },
                { text: 'PlistEdit Pro 1.9.7 Plist文件编辑器', link: '/software/macos/plistedit-pro' },
                { text: 'iZotope VocalSynth Pro 2.6.1 电音人声效果合成插件', link: '/software/macos/izotope-vocalsynth-pro-mac' },
                { text: 'iZotope Nectar Advanced 4.0.1 人声混音', link: '/software/macos/izotope-nectar-advanced-mac' },
                { text: 'SmartSynchronize 4.4.4 文件/文件夹对比', link: '/software/macos/smartsynchronize-mac' },
                { text: 'Mountain Duck 4.15.0.21616 FTP/SFTP连接管理', link: '/software/macos/mountain-duck-mac' },
                { text: 'Launch Bar 1.0.4 MAS 一键快速启动软件', link: '/software/macos/launch-bar' },
                { text: 'Native Instruments Massive X 1.4.4 音乐低音合成插件', link: '/software/macos/native-instruments-massive-x-mac' },
                { text: 'Boris FX Mocha Pro for Avid 2023 10.0.4.41 平面跟踪摄像机反求插件', link: '/software/macos/boris-fx-mocha-pro-for-avid-mac' },
                { text: 'ConceptDraw PROJECT 14.0.0.302 项目管理', link: '/software/macos/conceptdraw-project-mac' },
                { text: 'ConceptDraw OFFICE 10.0.0 绘图/思维导图/项目管理', link: '/software/macos/conceptdraw-office-mac' },
                { text: 'ConceptDraw MINDMAP 15.0.0.296 思维导图', link: '/software/macos/conceptdraw-mindmap-mac' },
                { text: 'ConceptDraw DIAGRAM 17.0.0.468 商业绘图设计', link: '/software/macos/conceptdraw-diagram-mac' },
                { text: 'iStatistica Pro 5.2 系统诊断与硬件监控', link: '/software/macos/istatistica-pro' },
                { text: 'Apple Remote Desktop 3.9.7 MAS 远程桌面控制', link: '/software/macos/apple-remote-desktop' },
                { text: '我的节拍器My Metronome 1.3.9 MAS 专业练耳节拍计数器', link: '/software/macos/my-metronome' },
                { text: 'MacFamilyTree 10.2.2 MAS 家谱族谱制作', link: '/software/macos/macfamilytree' },
                { text: 'Adobe XD 57.1.12.2 UI/UX界面设计与原型交互', link: '/software/macos/adobe-xd-mac' },
                { text: '必剪 3.3.11 视频编辑处理', link: '/software/macos/bcut-mac' },
                { text: 'SoundSource 5.6.3 音频控制输出', link: '/software/macos/soundsource' },
                { text: 'Clash for Windows 0.20.39 网络代理客户端', link: '/software/macos/clash-for-windows-mac' },
                { text: 'Scudo 3.0.4 防火墙软件', link: '/software/macos/scudo' },
                { text: 'Mela 2.3.1 MAS 食谱菜谱管理', link: '/software/macos/mela' },
                { text: 'Scrivener 3.3.6 写作编辑', link: '/software/macos/scrivener-mac' },
                { text: 'Micro Snitch 1.6.1 摄像头与麦克风使用监控', link: '/software/macos/micro-snitch' },
                { text: 'Fluent Reader 1.1.4 RSS阅读器', link: '/software/macos/fluent-reader-mac' },
                { text: 'Wondershare Filmora 12.4.3.24 万兴神剪手视频编辑器', link: '/software/macos/wondershare-filmora-mac' },
                { text: 'TextSniper 1.10.1 OCR文字识别', link: '/software/macos/textsniper' },
                { text: 'LilyView 1.6 MAS 无边框图片浏览器', link: '/software/macos/lilyview' },
                { text: 'Gemini 2.9.11 重复文件查找与清理', link: '/software/macos/gemini' },
                { text: 'JDownloader 2.0.220930 多线程直链下载器', link: '/software/macos/jdownloader-mac' },
                { text: 'iWall 6.0.0 MAS 4K高清动态壁纸', link: '/software/macos/iwall' },
                { text: 'Grid 1.4 软件窗口管理', link: '/software/macos/grid' },
                { text: 'Gifox Pro 2.2.5 GIF动态图录制', link: '/software/macos/gifox-pro' },
                { text: 'Earth 3D 8.1.2 MAS 3D智能地球仪', link: '/software/macos/earth-3d' },
                { text: 'CrystalFetch 2.1.0 Windows ESD镜像下载', link: '/software/macos/crystalfetch' },
                { text: 'ColorFolder 1.1.1 MAS 文件夹图标颜色修改', link: '/software/macos/colorfolder' },
                { text: 'Artpaper 3.0.5 MAS 5K高清艺术壁纸', link: '/software/macos/artpaper' },
                { text: 'Workspaces 2.1.3 高效率文件管理', link: '/software/macos/workspaces' },
                { text: 'TeaCode 1.1 快速编写代码', link: '/software/macos/teacode' },
                { text: 'ScreenFocus 1.1 多屏专注效率', link: '/software/macos/screenfocus' },
                { text: 'NoteApp 1.1 笔记编辑管理', link: '/software/macos/noteapp' },
                { text: 'FiveNotes 2.3 菜单栏文本速记', link: '/software/macos/fivenotes' },
                { text: 'Expressions 1.3.6 代码编辑器', link: '/software/macos/expressions' },
                { text: 'AirServer 7.2.6 AirPlay无线投屏', link: '/software/macos/airserver' },
                { text: 'Cinebench 2024.0 CPU性能基准测试', link: '/software/macos/cinebench-mac' },
                { text: 'Rekordbox Premium 5.8.6.0004 DJ音乐管理', link: '/software/macos/rekordbox-mac' },
                { text: 'Almighty 2.6.0 菜单栏多合一开关功能合集', link: '/software/macos/almighty' },
                { text: 'Audio Editor 3.6.2 MAS 音频编辑处理', link: '/software/macos/audio-editor' },
                { text: 'OmmWriter 1.67 MAS 免打扰写作编辑', link: '/software/macos/ommwriter' },
                { text: 'Family Tree Maker 2019 24.2.2.560 家谱族谱制作', link: '/software/macos/family-tree-maker' },
                { text: 'Pocket Yoga Teacher 13.0.0 MAS 瑜伽教学', link: '/software/macos/pocket-yoga-teacher' },
                { text: 'DVDFab All-In-One 12.0.8.2 DVD复制转换', link: '/software/macos/dvdfab-mac' },
                { text: 'Lungo 2.4.2 MAS 防止系统休眠或屏幕变暗', link: '/software/macos/lungo' },
                { text: 'Reeder 5.4 MAS RSS阅读管理', link: '/software/macos/reeder' },
                { text: 'Fission 2.8.5 简易版音频编辑制作', link: '/software/macos/fission' },
                { text: 'KeepingYouAwake 1.6.5 定时阻止系统睡眠', link: '/software/macos/keepingyouawake' },
                { text: 'Fantastical 3.8.4 菜单栏日历', link: '/software/macos/fantastical' },
                { text: 'Hackintool 4.0.3 黑苹果驱动参数查看', link: '/software/macos/hackintool' },
                { text: 'WidsMob AI Retoucher 3.17 MAS AI照片编辑器', link: '/software/macos/widsmob-ai-retoucher-mac' },
                { text: 'Nigate 1.2 NTFS磁盘挂载读写', link: '/software/macos/nigate' },
                { text: 'Memory Cleaner 5.2.1 系统内存清理', link: '/software/macos/memory-cleaner' },
                { text: 'Softorino YouTube Converter PRO 5.1.9 YouTube视频下载', link: '/software/macos/softorino-youtube-converter-pro' },
                { text: 'Perfino 4.1 Java 性能监控分析', link: '/software/macos/perfino-mac' },
                { text: 'Image Tricks Pro 3.9.6 照片编辑处理', link: '/software/macos/image-tricks-pro' },
                { text: 'iZotope Neutron Advanced 4.5.0 智能中子混音插件', link: '/software/macos/izotope-neutron-advanced-mac' },
                { text: 'LRTimelapse Pro 6.5.2 延迟摄影后期渲染', link: '/software/macos/lrtimelapse-pro-mac' },
                { text: 'Dozer 4.2.0 菜单栏图标隐藏管理', link: '/software/macos/dozer' },
                { text: 'The Foundry Mari 4.7v7 3D纹理绘画设计', link: '/software/macos/the-foundry-mari-mac' },
                { text: 'WinX DVD Ripper 6.8.0 DVD视频格式转换', link: '/software/macos/winx-dvd-ripper-mac' },
                { text: 'WinX HD Video Converter 6.7.3 高清视频格式转换', link: '/software/macos/winx-hd-video-converter-mac' },
                { text: 'Tracktion Waveform Pro 11.0.26 波形数字音频编辑制作', link: '/software/macos/tracktion-waveform-pro-mac' },
                { text: 'MOTU Digital Performer 9.52.76360 数字音频编辑制作', link: '/software/macos/motu-digital-performer-mac' },
                { text: 'Folder Tidy 2.9.2 桌面文件整理', link: '/software/macos/folder-tidy' },
                { text: 'PCDJ DEX Pro 3.20.7 DJ打碟混音', link: '/software/macos/pcdj-dex-pro-mac' },
                { text: 'MonitorControl 4.2.0 屏幕亮度与音量调节', link: '/software/macos/monitorcontrol' },
                { text: 'ClashX Pro 1.118.0.1 网络代理客户端', link: '/software/macos/clashx-pro' },
                { text: 'Clip Studio Paint EX 2.1.4 CSP漫画绘图设计', link: '/software/macos/clip-studio-paint-ex-mac' },
                { text: 'PDFify 3.8.1 PDF编辑阅读器', link: '/software/macos/pdfify' },
                { text: 'WebToLayers 1.4.0 将网页转换为PSD文件', link: '/software/macos/webtolayers' },
                { text: 'MediBang Paint Pro 29.1 漫画插画绘图设计', link: '/software/macos/medibang-paint-pro-mac' },
                { text: 'Exposure Blow Up 3.1.6.0 PS/LR图片无损放大插件', link: '/software/macos/exposure-blow-up-mac' },
                { text: 'QuickRedis 2.7.1 Redis可视化管理', link: '/software/macos/quickredis-mac' },
                { text: 'OpenAI Translator 0.0.68 AI实时划词翻译', link: '/software/macos/openai-translator-mac' },
                { text: 'BingGPT 0.3.7 新必应AI聊天', link: '/software/macos/binggpt-mac' },
                { text: '洋芋田图像工具箱 3.5.1 图片批量处理', link: '/software/macos/potatofield-imagetoolkit-mac' },
                { text: 'Packages 1.2.11 PKG安装包制作', link: '/software/macos/packages' },
                { text: 'iZotope Insight Pro 2.4.0 音频分析与母带混音插件', link: '/software/macos/izotope-insight-pro-mac' },
                { text: 'Iris Pro 1.2.2 屏幕护眼与蓝光过滤', link: '/software/macos/iris-pro-mac' },
                { text: 'Beamer 4.1.17 TV流媒体视频播放器', link: '/software/macos/beamer' },
                { text: 'Aechoterm 4.0.1 终端模拟器/SSH客户端', link: '/software/macos/aechoterm-mac' },
                { text: 'Reveal 41 iOS界面UI开发调试', link: '/software/macos/reveal' },
                { text: 'VNote 3.17.0 Markdown写作编辑', link: '/software/macos/vnote-mac' },
                { text: 'CAD迷你看图 4.4.2 CAD看图软件', link: '/software/macos/minicadsee-mac' },
                { text: 'Website Watchman 3.3.1 网站内容监控', link: '/software/macos/website-watchman' },
                { text: 'WebScraper 4.15.6 网站数据提取', link: '/software/macos/webscraper' },
                { text: 'Querious 3.3.2 MySQL数据库管理开发', link: '/software/macos/querious' },
                { text: 'EagleFiler 1.9.12 文件信息管理', link: '/software/macos/eaglefiler' },
                { text: 'WALTR PRO 4.0.115 iPhone文件同步', link: '/software/macos/waltr-pro' },
                { text: 'PicFindr 1.4.1 图片查找器', link: '/software/macos/picfindr' },
                { text: 'iRingg 4.0.16 iPhone铃声制作', link: '/software/macos/iringg' },
                { text: 'Folder Colorizer 4.7.2 文件夹着色器', link: '/software/macos/folder-colorizer' },
                { text: 'HistoryHound 2.3.2 网页浏览记录搜索', link: '/software/macos/historyhound' },
                { text: 'Dinosaur Rss 1.10.1 RSS阅读管理', link: '/software/macos/dinosaur-rss-mac' },
                { text: 'Energiza Pro 1.3.0 电池健康充电保护管理', link: '/software/macos/energiza-pro' },
                { text: 'Xojo 2023 R1.1 23.1.1.59845 可视化编程开发', link: '/software/macos/xojo-mac' },
                { text: 'iThoughtsX 9.4 MAS 思维导图', link: '/software/macos/ithoughts-mac' },
                { text: 'X Djing 2.1.6 MAS DJ派对音乐制作', link: '/software/macos/x-djing' },
                { text: 'LaunchControl 2.4 后台服务进程管理', link: '/software/macos/launchcontrol' },
                { text: 'GoToFile 1.10.2 文件搜索查找', link: '/software/macos/gotofile' },
                { text: 'BackupLoupe 3.9 数据备份还原', link: '/software/macos/backuploupe' },
                { text: 'Ammonite 1.23.1 标签可视化搜索', link: '/software/macos/ammonite' },
                { text: 'Sleep Aid 1.3 诊断Mac睡眠电池消耗', link: '/software/macos/sleep-aid' },
                { text: 'ApowerMirror 1.4.11 MAS 傲软投屏', link: '/software/macos/apowermirror-mac' },
                { text: 'Diagrams 2.3.4 MAS 图表编辑器', link: '/software/macos/diagrams' },
                { text: 'PP鸭PPDuck 3.10.16 图片压缩神器', link: '/software/macos/ppduck' },
                { text: 'EaseUS Data Recovery Wizard Pro 13.8.5 易我数据恢复软件', link: '/software/macos/easeus-data-recovery-wizard-mac' },
                { text: 'MacMagic 1.2.0 系统垃圾清理', link: '/software/macos/macmagic' },
                { text: 'Display Maestro 5.0.3 显示器分辨率优化', link: '/software/macos/display-maestro' },
                { text: 'AirRadar 7.4 无线WiFi搜索管理', link: '/software/macos/airradar' },
                { text: 'Airy Pro 3.28 YouTube视频下载器', link: '/software/macos/airy-pro-mac' },
                { text: 'Rottenwood 1.3 电影收藏影评', link: '/software/macos/rottenwood' },
                { text: 'Tableau Desktop Professional 2022.1.2 可视化数据分析', link: '/software/macos/tableau-desktop-professional-mac' },
                { text: 'Serato Studio 2.0.6 +Packs 音频节拍制作', link: '/software/macos/serato-studio-mac' },
                { text: 'Serato DJ Pro Suite 3.0.10 DJ混音制作', link: '/software/macos/serato-dj-pro-suite-mac' },
                { text: 'Movavi HD Screen Recorder 2023 23.1.1 MAS 屏幕录像编辑', link: '/software/macos/movavi-screen-recorder-mac' },
                { text: 'Imagine 0.7.5 PNG与JPEG图片压缩', link: '/software/macos/imagine-mac' },
                { text: 'TopNotch 1.3.2 屏幕刘海变黑隐藏', link: '/software/macos/topnotch' },
                { text: 'GoodNotes 5.9.112 MAS 手写笔记软件', link: '/software/macos/goodnotes' },
                { text: 'PixelSnap 2.5.4 屏幕间距测量', link: '/software/macos/pixelsnap' },
                { text: 'Xnip Pro 2.2.3 MAS 截图标注', link: '/software/macos/xnip-pro' },
                { text: 'Super Vectorizer Pro 2.3.3 MAS 位图矢量转换', link: '/software/macos/super-vectorizer-pro' },
                { text: 'Super PhotoCut Pro 2.8.8 MAS 图片AI智能抠图', link: '/software/macos/super-photocut-pro' },
                { text: 'Super Eraser Pro 2.5.1 图片多余对象擦除', link: '/software/macos/super-eraser-pro' },
                { text: 'Super-AI Photo Enlarger 2.0.1 MAS 模糊照片AI无损放大', link: '/software/macos/super-ai-photo-enlarger' },
                { text: 'Photo Art Filters DeepStyle 1.0.2 MAS 照片艺术滤镜', link: '/software/macos/photo-art-filters-deepstyle' },
                { text: 'Image Optimizer Pro 2.8 MAS 图片无损压缩', link: '/software/macos/image-optimizer-pro' },
                { text: '壁纸专家4K Wallpaper 2.6 MAS 4K高清壁纸', link: '/software/macos/4k-wallpaper' },
                { text: 'Minim 3.1.6.1 MAS Safari脚本拦截插件', link: '/software/macos/minim' },
                { text: 'SessionRestore 2.7.4 MAS Safari浏览器进程恢复插件', link: '/software/macos/sessionrestore' },
                { text: 'CLO Standalone 7.0.242.39887 3D可视化服装设计', link: '/software/macos/clo-standalone-mac' },
                { text: 'AI Photo 1.13 MAS 文字转图像AI智能输出', link: '/software/macos/ai-photo' },
                { text: 'QR Factory 3.3.6 生成二维码', link: '/software/macos/qr-factory' },
                { text: 'Disk Diet 5.5.1 磁盘空间清理', link: '/software/macos/disk-diet' },
                { text: 'Bill Boss 1.2.2 账单预算跟踪记录', link: '/software/macos/bill-boss' },
                { text: 'Monit 0.8.1 桌面小组件', link: '/software/macos/monit-mac' },
                { text: 'Magic Battery Mini 4.2.5 MAS 显示电池电量', link: '/software/macos/magic-battery-mini' },
                { text: 'ON1 Photo Keyword AI 2023.5 17.5.1.14079 图片AI搜索管理', link: '/software/macos/on1-photo-keyword-ai-mac' },
                { text: 'ON1 Sky Swap AI 2023.5 17.5.1.14051 图片AI天空替换处理', link: '/software/macos/on1-sky-swap-ai-mac' },
                { text: 'Moment Pro 1.4 菜单栏倒数日通知', link: '/software/macos/moment-pro' },
                { text: 'Velja 1.15.2 一键切换默认浏览器', link: '/software/macos/velja' },
                { text: 'Speediness 1.6.1 网速检测', link: '/software/macos/speediness' },
                { text: 'System Color Picker 1.13.1 颜色选择器', link: '/software/macos/system-color-picker' },
                { text: 'Black Out 2.3.1 MAS 隐藏图片中的敏感信息', link: '/software/macos/black-out' },
                { text: 'Touch Bar Simulator 4.2.0 任何地方打开Touch Bar', link: '/software/macos/touch-bar-simulator' },
                { text: 'Superkey 1.19 键盘键位增强', link: '/software/macos/superkey' },
                { text: 'HighTop 1.3.4 快速搜索文件与浏览访问', link: '/software/macos/hightop' },
                { text: 'Hyperkey 0.22 键盘改键位', link: '/software/macos/hyperkey' },
                { text: 'HEIC Converter 3.1.0 HEIC图片转换为JPEG或PNG', link: '/software/macos/heic-converter' },
                { text: 'Plash 2.13.5 让任何网站成为桌面壁纸', link: '/software/macos/plash' },
                { text: 'Umbra 1.3.0 为浅色和深色外观指定桌面壁纸', link: '/software/macos/umbra' },
                { text: 'Thunder Video Converter Pro 5.5 MAS 闪电视频转换器Pro', link: '/software/macos/thunder-video-converter-pro' },
                { text: 'SignFlow 1.1.1 MAS eSign签署与PDF电子签名', link: '/software/macos/signflow' },
                { text: 'Shredo 1.2.8.2 文件粉碎机', link: '/software/macos/shredo' },
                { text: 'PlayOnMac 4.4.4 类虚拟机运行Windows软件', link: '/software/macos/playonmac' },
                { text: 'ScrollReverser 1.8.2 反向滚动鼠标与触控板', link: '/software/macos/scrollreverser' },
                { text: 'RapidClick 1.5.1 MAS 鼠标自动点击', link: '/software/macos/rapidclick' },
                { text: 'DwellClick 2.2.4 模拟鼠标点击', link: '/software/macos/dwellclick' },
                { text: 'VSD Viewer 6.16.1 Visio文件绘图阅读', link: '/software/macos/vsd-viewer' },
                { text: 'Text Scanner 1.6.8 MAS 文字识别/截图翻译', link: '/software/macos/text-scanner' },
                { text: 'SmoothScroll 1.6.0 鼠标增强', link: '/software/macos/smoothscroll-mac' },
                { text: 'iZotope Neoverb Pro 1.3.0 智能音乐混响插件', link: '/software/macos/izotope-neoverb-pro-mac' },
                { text: 'JetBrains AppCode 2023.1.4 Objective-C/Swift集成开发环境', link: '/software/macos/jetbrains-appcode' },
                { text: 'Wondershare EdrawProject 3.0.2 亿图项目管理/甘特图', link: '/software/macos/wondershare-edrawproject-mac' },
                { text: 'Hyper 4.0.0 canary 5 命令行终端美化模拟器', link: '/software/macos/hyper-mac' },
                { text: 'Network & Battery 13.1.0 MAS 实时网速查看及电池健康', link: '/software/macos/network-battery' },
                { text: 'Picsee Pro 1.6.4 MAS 图片收集与照片管理', link: '/software/macos/picsee-pro' },
                { text: 'AntiCC 5.9 最低要求安装Adobe Mac软件', link: '/software/macos/anticc' },
                { text: 'Volume Maximizer 1.0.1 MAS 声音增强调节', link: '/software/macos/volume-maximizer' },
                { text: 'Music Paradise Player 1.3.2 MAS MP3音频播放增强', link: '/software/macos/music-paradise-player' },
                { text: 'Witch 4.5.2 软件窗口切换', link: '/software/macos/witch' },
                { text: 'Usher 2.2.1 影片库管理', link: '/software/macos/usher' },
                { text: 'Time Sink 2.2.3 时间跟踪管理', link: '/software/macos/time-sink' },
                { text: 'Resolutionator 2.3 屏幕分辨率调整', link: '/software/macos/resolutionator' },
                { text: 'Keymou 1.2.10 鼠标光标控制与移动定位', link: '/software/macos/keymou' },
                { text: 'Desktop Curtain 3.1.3 桌面图标隐藏', link: '/software/macos/desktop-curtain' },
                { text: 'AnyDroid 7.5.0.20230626 安卓数据传输管理', link: '/software/macos/anydroid-mac' },
                { text: 'set.a.light 3D STUDIO 2.5.9 3D摄影棚模拟布光', link: '/software/macos/set-a-light-3d-studio-mac' },
                { text: 'macOS 小助手 1.3.3 Mac常用命令集合', link: '/software/macos/macos-assistant' },
                { text: 'FontBook 5.3.1 字体管理', link: '/software/macos/fontbook' },
                { text: 'Theine 3.6 MAS 防止系统休眠或调暗屏幕', link: '/software/macos/theine' },
                { text: 'Mirror Magnet 1.3 MAS 实时摄像头', link: '/software/macos/mirror-magnet' },
                { text: 'Keystroke Pro 1.0.1 MAS 虚拟按键可视化', link: '/software/macos/keystroke-pro' },
                { text: 'Entity Pro 1.5 MAS Unicode字形查找器', link: '/software/macos/entity-pro' },
                { text: 'Cursor Pro 2.4 MAS 鼠标指针高亮放大', link: '/software/macos/cursor-pro' },
                { text: 'Couverture 1.1.6 MAS 动画增强软件', link: '/software/macos/couverture' },
                { text: 'Color UI 2.3 MAS 颜色选择器', link: '/software/macos/color-ui' },
                { text: 'Aspect Ratio X 2.1.8 MAS 三分法计算器', link: '/software/macos/aspect-ratio' },
                { text: 'Netler 2.0 MAS 网络状态监测', link: '/software/macos/netler' },
                { text: 'DiskSight 3.0 MAS 磁盘空间分析清理', link: '/software/macos/disksight' },
                { text: 'Red Giant Shooter Suite 13.1.11 红巨星镜头修复插件套装', link: '/software/macos/red-giant-shooter-suite-mac' },
                { text: 'Red Giant PluralEyes 4.1.11 音视频同步调整', link: '/software/macos/red-giant-pluraleyes-mac' },
                { text: 'Red Giant Keying Suite 11.1.11 红巨星动态视频特效插件套装', link: '/software/macos/red-giant-keying-suite-mac' },
                { text: 'Red Giant Effects Suite 11.1.13 红巨星动态视频特效插件套装', link: '/software/macos/red-giant-effects-suite-mac' },
                { text: 'ON1 HDR 2023.5 17.5.1.14051 HDR图像处理', link: '/software/macos/on1-hdr-mac' },
                { text: 'ON1 Portrait AI 2023.5 17.5.1.14051 智能AI人像处理', link: '/software/macos/on1-portrait-ai-mac' },
                { text: 'ON1 Resize AI 2023.5 17.5.1.14051 图片无损缩放', link: '/software/macos/on1-resize-ai-mac' },
                { text: 'Art Text 4.3.1 艺术字体图标设计', link: '/software/macos/art-text' },
                { text: 'HyperDock 1.8.0.10 软件窗口管理', link: '/software/macos/hyperdock' },
                { text: 'Hello Ai Chat 1.2.0 MAS 与AI聊天', link: '/software/macos/hello-ai-chat' },
                { text: 'Filmage Screen 1.4.7 屏幕录像编辑', link: '/software/macos/filmage-screen' },
                { text: 'Filmage Editor 1.3.7 音视频编辑处理', link: '/software/macos/filmage-editor' },
                { text: 'Filmage Converter 1.2.2 音视频格式转换器', link: '/software/macos/filmage-converter' },
                { text: 'FE File Explorer Pro 3.4.2 MAS 文件管理器', link: '/software/macos/fe-file-explorer-pro' },
                { text: 'Aerate Pro 2.0.1 图片批量压缩', link: '/software/macos/aerate-pro' },
                { text: 'BetterSnapTool 1.9.9 MAS 软件窗口管理', link: '/software/macos/bettersnaptool' },
                { text: '探狐文案 2.9.3 MAS 文章润色改写', link: '/software/macos/aicopy' },
                { text: '解优 2 1.6.1 MAS 解压缩软件', link: '/software/macos/bestzip-2' },
                { text: '和风天气 1.1.1 MAS 可视化全球天气', link: '/software/macos/qweather' },
                { text: 'Grids for Instagram 8.5.9 Instagram图片客户端', link: '/software/macos/grids-for-instagram-mac' },
                { text: '比译 0.5.0 划词/截图翻译与词典', link: '/software/macos/biyi-mac' },
                { text: '赤友右键超人 3.0 右键菜单管理', link: '/software/macos/iboysoft-magic-menu' },
                { text: 'StarUML 5.1.0 UML建模设计', link: '/software/macos/staruml-mac' },
                { text: 'SmartPLS 3.2.9 模型统计分析', link: '/software/macos/smartpls-mac' },
                { text: 'Xfer Records Serum & SerumFX 1.35b8 音频波形合成插件', link: '/software/macos/xfer-records-serum-serumfx-mac' },
                { text: 'Xfer Records LFOTool 1.768 音频低频振荡插件', link: '/software/macos/xfer-records-lfotool-mac' },
                { text: 'Xfer Records Cthulhu 1.216 音乐和弦制作插件', link: '/software/macos/xfer-records-cthulhu-mac' },
                { text: 'Exposure Snap Art 4.1.4.0 PS手绘滤镜插件', link: '/software/macos/exposure-snap-art-mac' },
                { text: 'SubLab XL 1.0.2 808低音合成器插件', link: '/software/macos/sublab-xl-mac' },
                { text: 'SubLab 1.1.9 808低音合成插件', link: '/software/macos/sublab-mac' },
                { text: 'Circle² 2.2.1 音频效果合成器', link: '/software/macos/circle-mac' },
                { text: 'Vital Audio Vital Pro 1.5.5 频谱波表合成器', link: '/software/macos/vital-audio-vital-pro-mac' },
                { text: 'Wallpaper Wizard 2.2.0 壁纸精灵', link: '/software/macos/wallpaper-wizard' },
                { text: 'Exe4j 9.0 Java程序打包与部署', link: '/software/macos/exe4j-mac' },
                { text: 'Gridea 0.9.3 静态博客Markdown写作编辑', link: '/software/macos/gridea-mac' },
                { text: 'SwitchHosts! 4.2.0.6105 hosts文件编辑', link: '/software/macos/switchhosts-mac' },
                { text: 'Gifski 2.22.3 视频转换为GIF动图', link: '/software/macos/gifski' },
                { text: 'Bitwig Studio 5.0.4 音频编辑处理', link: '/software/macos/bitwig-studio-mac' },
                { text: 'Navicat Premium Essentials 16.1.10 多连接数据库管理开发', link: '/software/macos/navicat-premium-essentials-mac' },
                { text: 'Motrix 1.8.19 直链BT磁链下载器', link: '/software/macos/motrix-mac' },
                { text: 'CCompare 1.16.3 文件/文件夹对比', link: '/software/macos/ccompare-mac' },
                { text: 'Hasleo NTFS for Mac 4.8 NTFS磁盘挂载读写', link: '/software/macos/hasleo-ntfs-for-mac' },
                { text: 'ArcTime Pro 3.1 可视化视频字幕编辑', link: '/software/macos/arctime-pro-mac' },
                { text: 'XAMPP 8.2.4 Apache服务开发环境配置', link: '/software/macos/xampp-mac' },
                { text: 'WidsMob Montage 3.26 MAS 将图片变成马赛克与蒙太奇效果', link: '/software/macos/widsmob-montage-mac' },
                { text: 'Topaz DeNoise AI 3.7.2 AI图片智能降噪', link: '/software/macos/topaz-denoise-ai-mac' },
                { text: 'Toontrack EZmix 2.2.4 音频混音效果', link: '/software/macos/toontrack-ezmix-mac' },
                { text: 'Toontrack EZdrummer 3.0.6 +Core Library 虚拟鼓音乐制作', link: '/software/macos/toontrack-ezdrummer-mac' },
                { text: 'Serviio Pro 2.3.1 DLNA媒体投屏', link: '/software/macos/serviio-pro-mac' },
                { text: 'Luminar AI 1.5.5.13797 AI图像编辑处理', link: '/software/macos/luminar-ai-mac' },
                { text: 'Luminar 4.3.5 fix 图像后期编辑处理', link: '/software/macos/luminar-mac' },
                { text: 'Aurora HDR 2019 1.0.2.6495 HDR图像编辑处理', link: '/software/macos/aurora-hdr-mac' },
                { text: 'NxShell 1.9.3 终端模拟器/SSH客户端', link: '/software/macos/nxshell-mac' },
                { text: 'Foxmail 1.5.8 邮件收发管理', link: '/software/macos/foxmail-mac' },
                { text: 'F.lux 42.1 屏幕护眼与蓝光过滤', link: '/software/macos/flux-mac' },
                { text: 'ExpanDrive 2023.4.1 FTP/SFTP连接管理', link: '/software/macos/expandrive-mac' },
                { text: '空气日历 1.9 MAS 菜单栏日历日程', link: '/software/macos/aircalendar' },
                { text: 'Perfectly Clear QuickDesk & QuickServer 4.2.0.2485 照片批量校正处理', link: '/software/macos/perfectly-clear-quickdesk-quickserver-mac' },
                { text: 'CopyTranslator 11.0.0 外语复制即翻译', link: '/software/macos/copytranslator-mac' },
                { text: 'PR全套插件一键安装包Pro 1.2 PR2020全套汉化插件', link: '/software/macos/pr-plugins-suite-mac' },
                { text: '滴答清单TickTick Pro 2.6.50 事务清单管理', link: '/software/macos/ticktick-mac' },
                { text: '恒星播放器 2.510.66 全格式高清4K视频播放器', link: '/software/macos/stellarplayer-mac' },
                { text: '1Password 7.9.4 密码管理器', link: '/software/macos/1password-mac' },
                { text: 'Omi NTFS磁盘管理助手 1.1.4 MAS NTFS磁盘读写管理', link: '/software/macos/omi-ntfs-disk' },
                { text: '快下 1.1.9 视频解析下载', link: '/software/macos/vdown' },
                { text: '自动切换输入法专业版 2.2.2 MAS 自动切换中英文输入法', link: '/software/macos/autoswitchinput-pro' },
                { text: 'Pap.er 5.3.0 5K高清壁纸', link: '/software/macos/paper' },
                { text: 'WidsMob WebP 1.3.1 WebP图片查看与转换', link: '/software/macos/widsmob-webp-mac' },
                { text: 'WidsMob Viewer Pro 2.19 MAS 照片管理查看', link: '/software/macos/widsmob-viewer-pro-mac' },
                { text: 'WidsMob Portrait Pro 4.10 MAS 人像照片编辑处理', link: '/software/macos/widsmob-portrait-pro-mac' },
                { text: 'WidsMob PhotoVault 3.9 照片加密管理', link: '/software/macos/widsmob-photovault-mac' },
                { text: 'WidsMob Panorama 4.28 MAS 全景图像拼接', link: '/software/macos/widsmob-panorama-mac' },
                { text: 'WidsMob MediaServer 2.5 将Mac变成UPnP多媒体服务器', link: '/software/macos/widsmob-mediaserver' },
                { text: 'WidsMob ImageConvert 3.25 MAS 图片格式转换', link: '/software/macos/widsmob-imageconvert-mac' },
                { text: 'WidsMob HDR 3.20 MAS 照片光照渲染效果处理', link: '/software/macos/widsmob-hdr-mac' },
                { text: 'WidsMob Denoise 2.18 MAS 多功能图像降噪', link: '/software/macos/widsmob-denoise-mac' },
                { text: 'XDown 2.0.2.3 多线程种子下载器', link: '/software/macos/xdown-mac' },
                { text: 'WebTorrent 0.24.0 BT种子在线播放', link: '/software/macos/webtorrent-mac' },
                { text: 'McAfee Endpoint Security 10.7.5.266 迈克菲防病毒查杀', link: '/software/macos/mcafee-endpoint-security-mac' },
                { text: 'VideoScribe Pro 3.7.3103 手绘动画制作', link: '/software/macos/videoscribe-pro-mac' },
                { text: 'Vector Magic 1.20 矢量图转换', link: '/software/macos/vector-magic-mac' },
                { text: 'Topaz Studio 2.3.2 AI创意照片编辑', link: '/software/macos/topaz-studio-mac' },
                { text: 'Topaz Sharpen AI 3.2.2 AI图片清晰度锐化增强', link: '/software/macos/topaz-sharpen-ai-mac' },
                { text: 'Topaz Mask AI 1.3.9 AI智能抠图', link: '/software/macos/topaz-mask-ai-mac' },
                { text: 'Topaz JPEG to RAW AI 2.2.1 JPEG转高质量RAW', link: '/software/macos/topaz-jpeg-to-raw-ai-mac' },
                { text: 'Topaz Adjust AI 1.0.6 HDR图片滤镜渲染增强', link: '/software/macos/topaz-adjust-ai-mac' },
                { text: 'Tickeys 1.1.0 定制键盘敲击音效', link: '/software/macos/tickeys-mac' },
                { text: 'Thief 4.0.0 上班摸鱼神器', link: '/software/macos/thief-mac' },
                { text: 'SPlayer 4.9.4 射手影音视频播放器', link: '/software/macos/splayer-mac' },
                { text: 'Sidify DeeKeep Deezer Music Converter 1.0.3 Deezer音乐转换器', link: '/software/macos/sidify-deekeep-deezer-music-converter-mac' },
                { text: 'Sidify Tidabie Tidal Music Converter 1.4.4 Tidal Music转换器', link: '/software/macos/sidify-tidabie-tidal-music-converter-mac' },
                { text: 'Sidify Music Converter 2.3.3 Spotify Music转换器', link: '/software/macos/sidify-music-converter-mac' },
                { text: 'Sidify Apple Music Converter 3.5.3 Apple Music转换器', link: '/software/macos/sidify-apple-music-converter-mac' },
                { text: 'Resolume Avenue 6.1.2.62262 VJ调试', link: '/software/macos/resolume-avenue-mac' },
                { text: 'QuickCut 1.6.1.0 视频编辑处理', link: '/software/macos/quickcut-mac' },
                { text: 'PhotoScape X Pro 4.2.1 MAS 图像编辑处理', link: '/software/macos/photoscape-x-pro-mac' },
                { text: 'PhoneRescue for Android 3.8.0.20221129 Android数据恢复', link: '/software/macos/phonerescue-for-android-mac' },
                { text: 'PhoneClean Pro 5.6.1.20221206 iPhone/iPad系统优化清理', link: '/software/macos/phoneclean-pro-mac' },
                { text: 'Pano2VR Pro 6.0.1 3D全景图像制作', link: '/software/macos/pano2vr-pro-mac' },
                { text: 'NeatDownloadManager 1.3.24 多线程直链下载器', link: '/software/macos/neatdownloadmanager-mac' },
                { text: 'MovieMator Video Editor Pro 3.2.0 MAS 剪大师专业版-视频编辑', link: '/software/macos/moviemator-video-editor-pro-mac' },
                { text: 'Movavi Video Suite 2022 22.4.1 多媒体编辑处理套件', link: '/software/macos/movavi-video-suite-mac' },
                { text: 'Movavi Video Editor Plus 2022 22.4.1 视频编辑处理', link: '/software/macos/movavi-video-editor-mac' },
                { text: 'Movavi Video Converter 22 Premium 22.5.0 音视频格式转换', link: '/software/macos/movavi-video-converter-mac' },
                { text: 'Movavi Slideshow Maker 8.0.1 MAS 幻灯片制作', link: '/software/macos/movavi-slideshow-maker-mac' },
                { text: 'Movavi Picverse 1.11.0 图像AI编辑处理', link: '/software/macos/movavi-picverse-mac' },
                { text: 'Movavi PDFChef 2022 22.2.0 PDF编辑器', link: '/software/macos/movavi-pdfchef-mac' },
                { text: 'Movavi PDF Editor 3.2.1 PDF编辑器', link: '/software/macos/movavi-pdf-editor-mac' },
                { text: 'Movavi Photo Editor 23.0.3 MAS 照片编辑处理', link: '/software/macos/movavi-photo-editor-mac' },
                { text: 'Movavi HD Video Converter 22.1.1 MAS 视频格式转换器', link: '/software/macos/movavi-hd-video-converter' },
                { text: 'Movavi Academic 2022 22.0.0 教育课程录制编辑', link: '/software/macos/movavi-academic-mac' },
                { text: 'Memocast 2.2.3 为知笔记编辑器', link: '/software/macos/memocast-mac' },
                { text: 'MarkText 0.17.1 Markdown写作编辑', link: '/software/macos/marktext-mac' },
                { text: 'KeeWeb 1.18.7 密码管理器', link: '/software/macos/keeweb-mac' },
                { text: 'JixiPix Simply HDR 3.2.15 HDR照片合成', link: '/software/macos/jixipix-simply-hdr-mac' },
                { text: 'JixiPix Romantic Photo 2.3.5 图片浪漫写真特效', link: '/software/macos/jixipix-romantic-photo-mac' },
                { text: 'JixiPix Portrait Painter 1.37 照片转油画效果', link: '/software/macos/jixipix-portrait-painter-mac' },
                { text: 'JixiPix Pop Dot Comics 2.14 照片转漫画', link: '/software/macos/jixipix-pop-dot-comics-mac' },
                { text: 'JixiPix Hand Tint Pro 1.0.19 图片调色修图', link: '/software/macos/jixipix-hand-tint-pro-mac' },
                { text: 'JixiPix Artoon 1.11.0 照片转漫画', link: '/software/macos/jixipix-artoon-mac' },
                { text: 'JixiPix Aquarella 1.38 图片转水彩画', link: '/software/macos/jixipix-aquarella-mac' },
                { text: 'iZotope Vocal Doubler 1.2.0 声音倍增插件', link: '/software/macos/izotope-vocal-doubler-mac' },
                { text: 'iZotope Stutter Edit 2.1.0 MIDI缓冲效果控制插件', link: '/software/macos/izotope-stutter-edit-mac' },
                { text: 'iZotope BreakTweaker 1.02c 音频节拍器插件', link: '/software/macos/izotope-breaktweaker-mac' },
                { text: 'iZotope Audiolens 1.1.0 音频音轨比较', link: '/software/macos/izotope-audiolens-mac' },
                { text: 'InPixio Photo Cutter 1.5.92 数码照片抠图', link: '/software/macos/inpixio-photo-cutter-mac' },
                { text: 'InPixio Photo Editor 1.1.31 照片滤镜编辑处理', link: '/software/macos/inpixio-photo-editor-mac' },
                { text: 'InPixio Photo Eraser 1.1.24 照片橡皮擦转场特效', link: '/software/macos/inpixio-photo-eraser-mac' },
                { text: 'iExplorer 4.6.0 iOS设备管理器', link: '/software/macos/iexplorer-mac' },
                { text: 'SnapGene 5.3.1 DNA序列生物分析', link: '/software/macos/snapgene-mac' },
                { text: 'future.dj pro 1.11.3 DJ混音软件', link: '/software/macos/future-dj-pro-mac' },
                { text: 'FlowJo 10.4.0 流式细胞分析', link: '/software/macos/flowjo-mac' },
                { text: 'FastGithub 2.1.4 GitHub加速神器', link: '/software/macos/fastgithub-mac' },
                { text: 'Exposure Eye Candy 7.2.3.189 PS眼睛糖果滤镜插件', link: '/software/macos/exposure-eye-candy-mac' },
                { text: 'DevSidecar 1.7.3 开发者边车辅助', link: '/software/macos/devsidecar-mac' },
                { text: 'CrossFTP Enterprise 1.99.9 FTP/SFTP客户端', link: '/software/macos/crossftp-enterprise-mac' },
                { text: 'CorelCAD 2023 2022.5 Build 22.3.1.4090 CAD绘图设计', link: '/software/macos/corelcad-mac' },
                { text: 'CCleaner Professional 1.18.30 系统优化清理', link: '/software/macos/ccleaner-professional-mac' },
                { text: 'BoostNote 0.23.1 程序员笔记记录', link: '/software/macos/boostnote-mac' },
                { text: 'Boom 2 1.6.13 MAS 系统音效增强', link: '/software/macos/boom-2' },
                { text: 'BilibiliVideoDownload 3.3.3 Bilibili视频下载', link: '/software/macos/bilibilivideodownload-mac' },
                { text: 'Atom 1.60.0 代码编辑器', link: '/software/macos/atom-mac' },
                { text: 'ATLAS.ti 8.4.4 定性数据分析', link: '/software/macos/atlasti-mac' },
                { text: 'Perfectly Clear Essentials 3.8.0.1684 LR/PS图像清晰化处理', link: '/software/macos/perfectly-clear-essentials-mac' },
                { text: 'Perfectly Clear Complete 3.12.2.2045 摄影照片后期处理', link: '/software/macos/perfectly-clear-complete-mac' },
                { text: 'Artlantis 2021.2 9.5.2.32853 3D建筑设计渲染', link: '/software/macos/artlantis-mac' },
                { text: 'AI配音专家XZVoice 2.1.1 文字转语音', link: '/software/macos/xzvoice-mac' },
                { text: 'Agisoft Metashape Professional 1.7.1.11791 多视点三维建模设计', link: '/software/macos/agisoft-metashape-professional-mac' },
                { text: '小画桌 1.0.0 在线协同办公', link: '/software/macos/xiaohuazhuo-mac' },
                { text: '云日历 1.08 待办事项与日历提醒', link: '/software/macos/mytime-mac' },
                { text: '图压 0.4.1 图片批量压缩', link: '/software/macos/tuya-mac' },
                { text: 'QQ小助手 3.3 消息防撤回/自动抢红包/自动回复消息', link: '/software/macos/qqredpackhelper' },
                { text: '搜狗五笔输入法 1.4.0.148', link: '/software/macos/sogouwbinput-mac' },
                { text: '幕享 1.1.0.3 无线投屏', link: '/software/macos/letsview-mac' },
                { text: '火萤视频桌面 1.2.2 MAS 动态视频壁纸', link: '/software/macos/huoying-video-desktop-mac' },
                { text: '多多投屏 0.1.20 电视投屏', link: '/software/macos/easy-to-tv-mac' },
                { text: 'WindoWizard 1.0.3 软件窗口管理', link: '/software/macos/windowizard' },
                { text: 'uPic 0.21.1 图床上传', link: '/software/macos/upic' },
                { text: 'Toast Titanium 17.4 DVD光盘刻录', link: '/software/macos/toast-titanium' },
                { text: 'SnailSVN专业版 1.10 MAS 集成访达的SVN客户端', link: '/software/macos/snailsvn-pro' },
                { text: 'Silicon 1.0.5 检查mac应用是否适配Apple ARM64芯片', link: '/software/macos/silicon' },
                { text: 'Pock 0.9.0.22 Touch Bar触控栏显示Dock图标', link: '/software/macos/pock' },
                { text: 'PD Runner 0.3.8 PD启动器/PD虚拟机无限试用', link: '/software/macos/pd-runner' },
                { text: 'Mos 3.4.1 鼠标平滑滚动', link: '/software/macos/mos' },
                { text: 'Micro Sniff 1.2.0 麦克风监测提醒', link: '/software/macos/micro-sniff' },
                { text: 'LyricsX 1.6.3 桌面显示歌词', link: '/software/macos/lyricsx' },
                { text: 'Kap 3.6.0 屏幕录像', link: '/software/macos/kap' },
                { text: 'Hidden Bar 1.9 菜单栏图标隐藏管理', link: '/software/macos/hidden-bar' },
                { text: '快切fastApp 1.0.1 软件窗口快速切换', link: '/software/macos/fastapp' },
                { text: 'DaFileShare 1.1 局域网文件共享', link: '/software/macos/dafileshare' },
                { text: 'macOS Server 5.12.2 MAS 将macOS电脑变为服务器', link: '/software/macos/macos-server' },
                { text: 'Boop 1.4.0 编程开发辅助', link: '/software/macos/boop' },
                { text: 'Blurred 1.2.0 降低非活动窗口亮度', link: '/software/macos/blurred' },
                { text: 'All Windows Appear 1.2.8 MAS 一键显示所有软件窗口', link: '/software/macos/all-windows-appear' },
                { text: 'Adware Zap Browser Cleaner 2.8.3 MAS 广告拦截清理', link: '/software/macos/adware-zap-browser-cleaner' },
                { text: 'AClock 2.8 MAS 翻页时钟屏保', link: '/software/macos/aclock' },
                { text: '蓝牙解锁 1.0.3 MAS 使用蓝牙/WiFi快速解锁', link: '/software/macos/autolock' },
                { text: '喵基金 1.0.6 MAS 状态栏查看基金涨跌', link: '/software/macos/miaojijin' },
                { text: '安卓文件传输 1.0.12 安卓数据传输软件', link: '/software/macos/android-file-transfer' },
                { text: '24 Hour Wallpaper 5.0.1 MAS 4K动态壁纸', link: '/software/macos/24-hour-wallpaper' },
                { text: 'Adobe Premiere Elements 2023.0 视频编辑合成', link: '/software/macos/adobe-premiere-elements-mac' },
                { text: 'Adobe Photoshop Elements 2023.0 图像编辑处理', link: '/software/macos/adobe-photoshop-elements-mac' },
                { text: 'Adobe Prelude 2021 10.1.0.92 视频元数据采集粗剪', link: '/software/macos/adobe-prelude-mac' },
                { text: 'Adobe Dreamweaver 2021 21.3.0.15593 代码编辑器', link: '/software/macos/adobe-dreamweaver-mac' },
                { text: 'Adobe Dimension 3.4.3.4022 3D渲染建模设计', link: '/software/macos/adobe-dimension-mac' },
                { text: 'Adobe Zii 2022 7.0.0 Adobe软件一键激活工具', link: '/software/macos/adobe-zii' },
                { text: 'MacBooster Pro 8.2.0.70880 系统优化清理', link: '/software/macos/macbooster-pro' },
                
              ],
            },
          ],
          "/fk-pay/": [
            {
              text: "免费体验",
              items: [],
            },
          ],
          "/about/": [
            {
              text: "关于",
              items: [
                { text: "关于我们", link: "/about" },
                { text: "联系我们", link: "/about/concat" },
              ],
            },
          ],
        },

        footer: {
          copyright: "版权所有 © 2020-至今, 免费体验 FFA!",
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
        `,
            },
            link: "https://fastx-ai.com",
            ariaLabel: "fastx-ai",
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      // 免费 AI 聊天，免费 AI 绘画，免费 AI 工具、免费软件，免费 API 密钥、免费新闻和课程
      title:
        "Free Chatgpt, Free LLMs, Free Midjourney, Free Stable diffusion 3, Free software, Free AI Tools, API Keys, News & Courses",
      description:
        "Free Chatgpt, Free LLMs, Free Midjourney, Free Stable diffusion 3, Free software, Free AI Tools, API Keys, News & Courses, Discover a treasure trove of free AI tools, API keys, news, and courses. Get your hands on GPT-3.5, Stable Diffusion, Midjourney, TTS, STT, AI translation, and more – all for free! Your gateway to the world of AI, empowering you with knowledge and resources",
      themeConfig: {
        siteTitle: "Free For All !",
        nav: [
          { text: "Home", link: "/en" },
          {
            text: "Chat",
            items: [
              { text: "Open-gpt-4o", link: "/en/chat/open-gpt-4o" },
              { text: "Glm-4v-9b", link: "/en/chat/glm-4v-9b" },
              { text: "Google-Gemma-2-9B", link: "/en/chat/Google-Gemma-2-9B" },
              { text: "Gpt-3.5-turbo", link: "/en/chat/fastx-ai" },
              { text: "Qwen2-7B-instruct", link: "/en/chat/Qwen2-7B-instruct" },
              { text: "Meta-Llama-2-7B", link: "/en/chat/Meta-Llama-2-7B" },
              { text: "Meta-Llama-2-13B", link: "/en/chat/Meta-Llama-2-13B" },
              { text: "Meta-Llama-3-8B", link: "/en/chat/Meta-Llama-3-8B" },
              {
                text: "IDEFICS2-Instruction",
                link: "/en/chat/IDEFICS2-Instruction",
              },
            ],
          },
          {
            text: "Draw",
            items: [
              {
                text: "Free Stable Diffusion 3 Medium 1",
                link: "/en/draw/stabilityai-stable-diffusion-3-medium",
              },
              {
                text: "Free Stable Diffusion 3 Medium 2",
                link: "/en/draw/markmagic-stable-diffusion-3",
              },
              { text: "Free DALLE-4K", link: "/en/draw/mukaist-dalle-4k" },
              { text: "Free Midjourney", link: "/en/draw/mukaist-midjourney" },
              {
                text: "Free STABLE HAMSTER 🐹",
                link: "/en/draw/prithivmlmods-stable-hamster",
              },
              {
                text: "Free Cartoon Image Generation",
                link: "/en/draw/cagliostrolab-animagine-xl-3-1",
              },
              {
                text: "Free DALL-E 3 XL V2",
                link: "/en/draw/ehristoforu-dalle-3-xl-lora-v2",
              },
              {
                text: "FlashSD: StableDiffusion3 Distilled Model",
                link: "/en/draw/jasperai-flash-sd3",
              },
              {
                text: "Three Elements Image Synthesis (Style, Character, Action)",
                link: "/en/draw/okaris-omni-zero",
              },
              {
                text: "PixArt-Sigma 1024px",
                link: "/en/draw/pixart-alpha-pixart-sigma",
              },
              {
                text: "Online Drawing V2.5",
                link: "/en/draw/playgroundai-playground-v2-5",
              },
              {
                text: "GALLO 3XL Online Drawing",
                link: "/en/draw/prithivmlmods-gallo-3xl",
              },
              {
                text: "Free 4K Image Generate",
                link: "/en/draw/prithivmlmods-imagineo-4k",
              },
              {
                text: "Tencent - Hunyuan Drawing",
                link: "/en/draw/tencent-hunyuan-hunyuandit",
              },
            ],
          },
          {
            text: "Media",
            items: [
              {
                text: "Video Translation SoniTranslate",
                link: "/en/media/r3gm-sonitranslate-translate-audio-of-a-video-content",
              },
              {
                text: "Image High-Resolution Upscaling",
                link: "/en/media/gokaygokay-aurasr",
              },
              {
                text: "Remove Video Background (Forever Free)",
                link: "/en/media/amirgame197-remove-video-background",
              },
              {
                text: "Remove Image Background (Forever Free)",
                link: "/en/media/schroneko-transparent-background",
              },
              {
                text: "Add Background Sound Effects to a Video Based on Instructions",
                link: "/en/media/ymzhang319-foleycrafter",
              },
              {
                text: "Text-to-Audio Stable Audio Generator",
                link: "/en/media/artificialguybr-stable-audio-open-zero",
              },
              {
                text: "Text-to-Audio ChatTTS Forge",
                link: "/en/media/lenml-chattts-forge",
              },
              {
                text: "Audio to Text Whisper Large V3: Transcribe Audio",
                link: "/en/media/hf-audio-whisper-large-v3",
              },
              {
                text: "Text-to-Video Open-Sora",
                link: "/en/media/kadirnar-open-sora",
              },
              {
                text: "Text-to-Video AnimateDiff-Lightning",
                link: "/en/media/bytedance-animatediff-lightning",
              },
              {
                text: "Text-to-Video Adaface animate",
                link: "/en/media/adaface-neurips-adaface-animate",
              },
              {
                text: "Text-to-Video Animagine XL 3.0",
                link: "/en/media/linaqruf-animagine-xl",
              },
              {
                text: "Image-to-Video Stable Video Diffusion Img2Vid",
                link: "/en/media/xi0v-stable-video-diffusion-img2vid",
              },
              {
                text: "Video Content Analysis VideoLLaMA 2",
                link: "/en/media/lixin4ever-videollama2",
              },
              {
                text: "Tencent Avatar Creation",
                link: "/en/media/tencentarc-photomaker",
              },
              {
                text: "Face to All Avatar Creation",
                link: "/en/media/multimodalart-face-to-all",
              },
              {
                text: "Image Content Recognition",
                link: "/en/media/gokaygokay-florence-2",
              },
              {
                text: "Image Content Recognition (Multimodal Source Information)",
                link: "/en/media/epfl-vilab-4m",
              },
              {
                text: "IC-Light Modify Image Light Source",
                link: "/en/media/lllyasviel-ic-light",
              },
              {
                text: "Extract Image Prompts and Convert to Line Art",
                link: "/en/media/tori29umai-sketch2lineart",
              },
              {
                text: "Image Depth Calculation",
                link: "/en/media/depth-anything-depth-anything-v2",
              },
              {
                text: "Video Depth Calculation",
                link: "/en/media/jhshao-chronodepth",
              },
              {
                text: "Edit Video Based on Prompts",
                link: "/en/media/koi953215-narcan-demo",
              },
              {
                text: "Get Detailed Image Description",
                link: "/en/media/gokaygokay-sd3-long-captioner",
              },
              {
                text: "Generate a Panoramic Video of a 3D Model (Rotating Around)",
                link: "/en/media/ashawkey-lgm",
              },
              {
                text: "Generate a 3D Model in GLB Format Based on an Image",
                link: "/en/media/wuvin-unique3d",
              },
              {
                text: "Cartoon Video Generation (2 Seconds)",
                link: "/en/media/doubiiu-tooncrafter",
              },
              {
                text: "Image-to-Video (4 Seconds)",
                link: "/en/media/modelscope-exvideo-svd-128f-v1",
              },
              {
                text: "Image-to-Video (3 Seconds) AnimateLCM",
                link: "/en/media/wangfuyun-animatelcm-svd",
              },
              { text: "Image Blending PuLID", link: "/en/media/yanze-pulid" },
              {
                text: "Remove 3D Image Background and Generate 3D (Multi-View) Model",
                link: "/en/media/tencentarc-instantmesh",
              },
              {
                text: "Audio Generation AICoverGen",
                link: "/en/media/r3gm-aicovergen",
              },
              {
                text: "Image to Audio",
                link: "/en/media/fffiloni-image-to-music-v2",
              },
              {
                text: "IP-Adapter-FaceID Plus",
                link: "/en/media/multimodalart-ip-adapter-faceid",
              },
            ],
          },
          {
            text: "Tool",
            items: [
              {
                text: "Screenshot to HTML",
                link: "/en/tool/huggingfacem4-screenshot2html",
              },
              {
                text: "AI Outfit Diffusion",
                link: "/en/tool/levihsu-ootdiffusion",
              },
              { text: "AI Outfit Change", link: "/en/tool/yisol-idm-vton" },
              { text: "Video to VR", link: "/en/tool/koi953215-diffir2vr" },
              {
                text: "Emoji Generation",
                link: "/en/tool/cfahlgren1-emoji-generator-by-fofr",
              },
              {
                text: "Instruction Pretraining",
                link: "/en/tool/davanstrien-instruction-synthesizer",
              },
              { text: "Math Solver Expert", link: "/en/tool/tonic-math" },
              {
                text: "Open LLM Leaderboard",
                link: "/en/tool/open-llm-leaderboard-open-llm-leaderboard",
              },
            ],
          },
          {
            text: "API Key",
            link: "/en/api-key",
          },
          {
            text: "Software",
            link: "/en/software",
          },
          {
            text: "Free Try",
            link: "/en/fk-pay",
          },
          { text: "About Us", link: "/en/about" },
        ],

        sidebar: {
          "/en/chat/": [
            {
              text: "Chat",
              items: [
                { text: "Free Open-gpt-4o", link: "/en/chat/open-gpt-4o" },
                { text: "Free Glm-4v-9b", link: "/en/chat/glm-4v-9b" },
                {
                  text: "Free Google-Gemma-2-9B",
                  link: "/en/chat/Google-Gemma-2-9B",
                },
                { text: "Free Gpt-3.5-turbo", link: "/en/chat/fastx-ai" },
                {
                  text: "Free Qwen2-7B-instruct",
                  link: "/en/chat/Qwen2-7B-instruct",
                },
                {
                  text: "Free Meta-Llama-2-7B",
                  link: "/en/chat/Meta-Llama-2-7B",
                },
                {
                  text: "Free Meta-Llama-2-13B",
                  link: "/en/chat/Meta-Llama-2-13B",
                },
                {
                  text: "Free Meta-Llama-3-8B",
                  link: "/en/chat/Meta-Llama-3-8B",
                },
                {
                  text: "Free IDEFICS2-Instruction",
                  link: "/en/chat/IDEFICS2-Instruction",
                },
              ],
            },
          ],
          "/en/draw/": [
            {
              text: "Draw",
              items: [
                {
                  text: "Free Stable Diffusion 3 Medium 1",
                  link: "/en/draw/stabilityai-stable-diffusion-3-medium",
                },
                {
                  text: "Free Stable Diffusion 3 Medium 2",
                  link: "/en/draw/markmagic-stable-diffusion-3",
                },
                { text: "Free DALLE-4K", link: "/en/draw/mukaist-dalle-4k" },
                {
                  text: "Free Midjourney",
                  link: "/en/draw/mukaist-midjourney",
                },
                {
                  text: "Free STABLE HAMSTER 🐹",
                  link: "/en/draw/prithivmlmods-stable-hamster",
                },
                {
                  text: "Free Cartoon Image Generation",
                  link: "/en/draw/cagliostrolab-animagine-xl-3-1",
                },
                {
                  text: "Free DALL-E 3 XL V2",
                  link: "/en/draw/ehristoforu-dalle-3-xl-lora-v2",
                },
                {
                  text: "FlashSD: StableDiffusion3 Distilled Model",
                  link: "/en/draw/jasperai-flash-sd3",
                },
                {
                  text: "Three Elements Image Synthesis (Style, Character, Action)",
                  link: "/en/draw/okaris-omni-zero",
                },
                {
                  text: "PixArt-Sigma 1024px",
                  link: "/en/draw/pixart-alpha-pixart-sigma",
                },
                {
                  text: "Online Drawing V2.5",
                  link: "/en/draw/playgroundai-playground-v2-5",
                },
                {
                  text: "GALLO 3XL Online Drawing",
                  link: "/en/draw/prithivmlmods-gallo-3xl",
                },
                {
                  text: "Free 4K Image Generate",
                  link: "/en/draw/prithivmlmods-imagineo-4k",
                },
                {
                  text: "Tencent - Hunyuan Drawing",
                  link: "/en/draw/tencent-hunyuan-hunyuandit",
                },
              ],
            },
          ],
          "/en/media/": [
            {
              text: "Media",
              items: [
                {
                  text: "Video Translation SoniTranslate",
                  link: "/en/media/r3gm-sonitranslate-translate-audio-of-a-video-content",
                },
                {
                  text: "Image High-Resolution Upscaling",
                  link: "/en/media/gokaygokay-aurasr",
                },
                {
                  text: "Remove Video Background (Forever Free)",
                  link: "/en/media/amirgame197-remove-video-background",
                },
                {
                  text: "Remove Image Background (Forever Free)",
                  link: "/en/media/schroneko-transparent-background",
                },
                {
                  text: "Add Background Sound Effects to a Video Based on Instructions",
                  link: "/en/media/ymzhang319-foleycrafter",
                },
                {
                  text: "Text-to-Audio Stable Audio Generator",
                  link: "/en/media/artificialguybr-stable-audio-open-zero",
                },
                {
                  text: "Text-to-Audio ChatTTS Forge",
                  link: "/en/media/lenml-chattts-forge",
                },
                {
                  text: "Audio to Text Whisper Large V3: Transcribe Audio",
                  link: "/en/media/hf-audio-whisper-large-v3",
                },
                {
                  text: "Text-to-Video Open-Sora",
                  link: "/en/media/kadirnar-open-sora",
                },
                {
                  text: "Text-to-Video AnimateDiff-Lightning",
                  link: "/en/media/bytedance-animatediff-lightning",
                },
                {
                  text: "Text-to-Video Adaface animate",
                  link: "/en/media/adaface-neurips-adaface-animate",
                },
                {
                  text: "Text-to-Video Animagine XL 3.0",
                  link: "/en/media/linaqruf-animagine-xl",
                },
                {
                  text: "Image-to-Video Stable Video Diffusion Img2Vid",
                  link: "/en/media/xi0v-stable-video-diffusion-img2vid",
                },
                {
                  text: "Video Content Analysis VideoLLaMA 2",
                  link: "/en/media/lixin4ever-videollama2",
                },
                {
                  text: "Tencent Avatar Creation",
                  link: "/en/media/tencentarc-photomaker",
                },
                {
                  text: "Face to All Avatar Creation",
                  link: "/en/media/multimodalart-face-to-all",
                },
                {
                  text: "Image Content Recognition",
                  link: "/en/media/gokaygokay-florence-2",
                },
                {
                  text: "Image Content Recognition (Multimodal Source Information)",
                  link: "/en/media/epfl-vilab-4m",
                },
                {
                  text: "IC-Light Modify Image Light Source",
                  link: "/en/media/lllyasviel-ic-light",
                },
                {
                  text: "Extract Image Prompts and Convert to Line Art",
                  link: "/en/media/tori29umai-sketch2lineart",
                },
                {
                  text: "Image Depth Calculation",
                  link: "/en/media/depth-anything-depth-anything-v2",
                },
                {
                  text: "Video Depth Calculation",
                  link: "/en/media/jhshao-chronodepth",
                },
                {
                  text: "Edit Video Based on Prompts",
                  link: "/en/media/koi953215-narcan-demo",
                },
                {
                  text: "Get Detailed Image Description",
                  link: "/en/media/gokaygokay-sd3-long-captioner",
                },
                {
                  text: "Generate a Panoramic Video of a 3D Model (Rotating Around)",
                  link: "/en/media/ashawkey-lgm",
                },
                {
                  text: "Generate a 3D Model in GLB Format Based on an Image",
                  link: "/en/media/wuvin-unique3d",
                },
                {
                  text: "Cartoon Video Generation (2 Seconds)",
                  link: "/en/media/doubiiu-tooncrafter",
                },
                {
                  text: "Image-to-Video (4 Seconds)",
                  link: "/en/media/modelscope-exvideo-svd-128f-v1",
                },
                {
                  text: "Image-to-Video (3 Seconds) AnimateLCM",
                  link: "/en/media/wangfuyun-animatelcm-svd",
                },
                { text: "Image Blending PuLID", link: "/en/media/yanze-pulid" },
                {
                  text: "Remove 3D Image Background and Generate 3D (Multi-View) Model",
                  link: "/en/media/tencentarc-instantmesh",
                },
                {
                  text: "Audio Generation AICoverGen",
                  link: "/en/media/r3gm-aicovergen",
                },
                {
                  text: "Image to Audio",
                  link: "/en/media/fffiloni-image-to-music-v2",
                },
                {
                  text: "IP-Adapter-FaceID Plus",
                  link: "/en/media/multimodalart-ip-adapter-faceid",
                },
              ],
            },
          ],
          "/en/tool/": [
            {
              text: "Tool",
              items: [
                {
                  text: "Screenshot to HTML",
                  link: "/en/tool/huggingfacem4-screenshot2html",
                },
                {
                  text: "AI Outfit Diffusion",
                  link: "/en/tool/levihsu-ootdiffusion",
                },
                { text: "AI Outfit Change", link: "/en/tool/yisol-idm-vton" },
                { text: "Video to VR", link: "/en/tool/koi953215-diffir2vr" },
                {
                  text: "Emoji Generation",
                  link: "/en/tool/cfahlgren1-emoji-generator-by-fofr",
                },
                {
                  text: "Instruction Pretraining",
                  link: "/en/tool/davanstrien-instruction-synthesizer",
                },
                { text: "Math Solver Expert", link: "/en/tool/tonic-math" },
                {
                  text: "Open LLM Leaderboard",
                  link: "/en/tool/open-llm-leaderboard-open-llm-leaderboard",
                },
              ],
            },
          ],
          "/en/api-key/": [
            {
              text: "API Key",
              items: [],
            },
          ],
          "/en/software/": [
            {
              text: "Software",
              items: [],
            },
          ],
          "/en/fk-pay/": [
            {
              text: "Free Try",
              items: [],
            },
          ],
          "/en/about/": [
            {
              text: "About Us",
              items: [
                { text: "About us", link: "/en/about" },
                { text: "Mail to us", link: "/en/about/concat" },
              ],
            },
          ],
        },

        footer: {
          copyright: "Copyright © 2020-present, Free For You!",
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
        `,
            },
            link: "https://fastx-ai.com",
            ariaLabel: "fastx-ai",
          },
        ],
      },
    },
  },
});
