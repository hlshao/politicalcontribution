<template>
  <nav>
    <ul>
      <router-link to="/explore" @click.native="scroll('explore')" onclick="ga('send', 'event', 'projects', 'click', 'master to explore', { nonInteraction: false })">
        <img src="~assets/images/landing-nav/tool.png" alt="查找政商關係"><h2>查找政商關係</h2>
      </router-link>
      <router-link to="/story1" class="story" @click.native="scroll('story1')" onclick="ga('send', 'event', 'projects', 'click', 'master to article', { nonInteraction: false })">
        <div class="story__heading"><img src="~assets/images/landing-nav/pen.png" alt="獻金解析文章"><h2>獻金解析文章</h2></div>
        <nav v-if="storyPublishedCount >= 2" class="story__nav">
          <img v-if="storyPublishedCount >= 2" src="~assets/images/landing-nav/1.png" alt="獻金解析文章1">
          <img v-if="storyPublishedCount >= 2" src="~assets/images/landing-nav/2.png" alt="獻金解析文章2">
          <img v-if="storyPublishedCount >= 3" src="~assets/images/landing-nav/3.png" alt="獻金解析文章3">
          <img v-if="storyPublishedCount >= 4" src="~assets/images/landing-nav/4.png" alt="獻金解析文章4">
          <img v-if="storyPublishedCount >= 5" src="~assets/images/landing-nav/5.png" alt="獻金解析文章5">
        </nav>
      </router-link>
      <a href="https://github.com/mirror-media/politicalcontribution" target="_blank" onclick="ga('send', 'event', 'projects', 'click', 'master to data', { nonInteraction: false })">
        <img src="~assets/images/landing-nav/paper.png" alt="原始素材資料"><h2>原始素材資料</h2>
      </a>
    </ul>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      storyPublishedCount: this.$store.state.storyPublishedCount
    }
  },
  methods: {
    scroll (to) {
      if (this.$route.name === to) {
        this.$scrollTo('.content')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/util.styl'

@keyframes fadeIn
  from
    opacity 0
  to
    opacity 1
@keyframes pulse
  from
    transform scale(1)
  to
    transform scale(1.1)

$sectionNavPosition
  position absolute
  top 50%
  left 10%
$sectionNavAnimation
  opacity 0
  animation-name fadeIn
  animation-delay 0.5s
  animation-duration 1s
  animation-fill-mode forwards

$sectionIconDimensions
  width calc(1.17em * 2)
  height calc(1.17em * 2)
$storyIconDimensions
  width 32px
  height 32px

$reset-h2-style
  display inline
  margin 0 0 0 0.5rem
  font-weight normal

nav
  // @extends $sectionNavPosition
  @extends $sectionNavAnimation
  ul
    padding 0
    a
      flex(row, center, center)
      list-style none
      color white
      // border 1px solid white
      box-sizing border-box
      padding 0.5rem
      text-decoration none
      background-color #152538
      box-shadow 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)
      img
        @extends $sectionIconDimensions
      h2
        @extends $reset-h2-style
      &:hover
        cursor pointer
        // filter brightness(90%)
        transform scale(1)
        animation-name pulse
        animation-duration 0.2s
        animation-fill-mode forwards
    .story
      flex(column, center, flex-end)
      &__heading
        flex(row, center, center)
      &__nav
        margin-top 0.5rem
        position static
        width 80%
        flex(row, space-around, center)
        img
          @extends $storyIconDimensions
          // &:hover
          //   filter brightness(50%)
    a + a
      margin-top 1rem

@media (max-width: 767px)
  nav
    top 50%
    left 0
    width 100vw
    flex(column, center, center)
    ul
      width 50%
      padding 0
      a
        img
          width 22px
          height 22px
      .story
        flex(column, center, center)
@media (max-width: 413px)
  nav
    ul
      width 60%
@media (max-width: 374px)
  nav
    ul
      a
        img
          width 16px
          height 16px
</style>


