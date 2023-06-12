<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="MoveMask" ref="events"></div>
    <div class="big" ref="big">
      <img ref="bigImg" :src="imgObj.imgUrl" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: ['skuImageList'],
  computed: {
    imgObj() {
      return this.skuImageList[0] || {}
    }
  },
  methods: {
    MoveMask(event) {
      let mask = this.$refs.mask
      let events = this.$refs.events
      let big = this.$refs.big
      let bigImg = this.$refs.bigImg

      let Left = event.offsetX - mask.offsetWidth / 2
      let Top = event.offsetY - mask.offsetHeight / 2
      let maskMax = events.offsetWidth - mask.offsetWidth
      if (Left <= 0) {
        Left = 0
      } else if (Left >= maskMax) {
        Left = maskMax
      }
      if (Top <= 0) {
        Top = 0
      } else if (Top >= maskMax) {
        Top = maskMax
      }
      mask.style.left = Left + 'px'
      mask.style.top = Top + 'px'
      let bigMax = bigImg.offsetWidth - big.offsetWidth
      let bigX = (Left * bigMax) / maskMax
      let bigY = (Top * bigMax) / maskMax
      bigImg.style.left = -bigX + 'px'
      bigImg.style.top = -bigY + 'px'
    }
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
    cursor: move;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>