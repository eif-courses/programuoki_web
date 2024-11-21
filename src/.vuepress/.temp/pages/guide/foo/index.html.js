import comp from "D:/FREETIME_PROJECTS/programuoki_web/src/.vuepress/.temp/pages/guide/foo/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/foo/\",\"title\":\"Foo feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Foo feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support foo feature, ... Details ...\",\"gitInclude\":[],\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://programuoki.lt/zh/guide/foo/\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://programuoki.lt/guide/foo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Programuoki.lt\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Foo feature\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Introduction We support foo feature, ... Details ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Foo feature\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Marius Gžegoževskis\\\",\\\"url\\\":\\\"https://programuoki.lt\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/foo/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
