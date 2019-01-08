<template>
  <div class="content color-6">
    <h2 class="content__title">Mawar</h2>
    <ul id="stack_mawar" class="stack stack--mawar" style="perspective: 1500px; perspective-origin: -150% 50%;">
      <li class="stack__item stack__item--current" style="opacity: 1; pointer-events: auto; z-index: 5; transform: translate3d(0px, 0px, 0px);"><img src="./8.png" alt="Tree 8"></li>
      <li class="stack__item" style="opacity: 1; pointer-events: auto; z-index: 3; transform: translate3d(0px, 0px, -50px);"><img src="./2.png" alt="Tree 2"></li>
      <li class="stack__item" style="opacity: 1; pointer-events: auto; z-index: 2; transform: translate3d(0px, 0px, -100px);"><img src="./4.png" alt="Tree 4"></li>
      <li class="stack__item" style="opacity: 1; pointer-events: auto; z-index: 1; transform: translate3d(0px, 0px, -150px);"><img src="./7.png" alt="Tree 7"></li>
      <li class="stack__item" style="transform: translate3d(0px, 0px, -200px);"><img src="./6.png" alt="Tree 6"></li>
      <li class="stack__item" style="transform: translate3d(0px, 0px, -200px);"><img src="./1.png" alt="Tree 1"></li>
    </ul>
    <div class="controls">
      <button class="button button--sonar button--reject" data-stack="stack_mawar"><i
        class="fa fa-times"></i><span class="text-hidden">Reject</span></button>
      <button class="button button--sonar button--accept" data-stack="stack_mawar"><i
        class="fa fa-check"></i><span class="text-hidden">Accept</span></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tab'
  }
</script>

<style scoped lang="less">
  .content {
    -webkit-align-self: stretch;
    align-self: stretch;
    overflow: hidden;
    padding: 2em 2em 6em;
    width: 100%;
    background: #565f77;
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex-direction: column;
    flex-direction: column;
    .content__title {
      margin: 0 auto 6em 0;
      font-size: 1em;
      z-index: 100;
      position: relative;
      color: rgba(0, 0, 0, .25)
    }
    .stack {
      margin: 0 auto;
      position: relative;
      z-index: 1000;
      width: 320px;
      height: 320px;
      padding: 0;
      list-style: none;
      pointer-events: none;
      .stack__item {
        background: #fff;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        text-align: center;
        overflow: hidden;
        position: absolute;
        opacity: 0;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: auto;
        img {
          width: 100%;
          display: block;
          pointer-events: none
        }
      }
    }
    .stack--mawar {
      .stack__item--reject {
        -webkit-animation: mawarReject .5s forwards;
        animation: mawarReject .5s forwards
      }
      .stack__item--accept {
        -webkit-animation: mawarAccept .5s forwards;
        animation: mawarAccept .5s forwards;
        -webkit-transform-origin: 100% 50%;
        transform-origin: 100% 50%
      }
    }
    .controls {
      position: relative;
      width: 200px;
      text-align: center;
      margin: 3em 0 0;
      .button {
        border: 0;
        background: 0 0;
        position: relative;
        display: inline-block;
        padding: .25em;
        margin: 0 .5em;
        cursor: pointer;
        font-size: 1.5em;
        width: 50px;
        height: 50px;
        z-index: 100;
        -webkit-tap-highlight-color: transparent;
        &:focus {
          outline: 0
        }
        &.button--sonar {
          border-radius: 50%;
          background: #fff;
          &::before{
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            content: '';
            opacity: 0;
            pointer-events: none;
            border: 4px solid rgba(255, 255, 255, .5);
            margin: -35px 0 0 -35px;
            width: 70px;
            height: 70px
          }
        }
        &.button--reject {
          color: #e66868
        }
        &.button--accept {
          color: #81d47d
        }
        .fa {
          pointer-events: none
        }
        .text-hidden {
          position: absolute;
          overflow: hidden;
          width: 0;
          height: 0;
          color: transparent;
          display: block
        }
      }
    }
  }
</style>
