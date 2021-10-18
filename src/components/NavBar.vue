<template>
  <div id="nav">
    <h1>IIHW</h1>
    <div class="icon-container">
      <fa
        v-if="!isNavMenuOpen"
        icon="bars"
        @click="toggleNavMenu"
        height="30"
        color="white"
      ></fa>
      <fa
        v-else
        color="white"
        icon="times"
        @click="toggleNavMenu"
        height="30"
      ></fa>
    </div>
    <div
      :class="{ expand: isNavMenuOpen, scrolled: isScrolled && !isNavMenuOpen }"
      class="nav-overlay-container"
    >
      <div class="nav-link-container">
        <router-link to="/">
          <li>
            <a>home</a>
          </li>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrollHeight: 0,
      isNavMenuOpen: false,
    };
  },
  mounted() {
    this.scrollHeight = window.scrollY;
    window.addEventListener("scroll", this.getScrollDistance);
  },
  methods: {
    setScrollDistance() {
      this.scrollHeight = window.scrollY;
    },
    toggleNavMenu() {
      this.isNavMenuOpen = !this.isNavMenuOpen;
    },
  },
  computed: {
    isScrolled() {
      return this.scrollHeight > 270;
    },
  },
};
</script>

<style scoped lang="scss">
#nav {
  position: fixed;
  padding: 16px;
  top: 0;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  display: flex;
  align-items: center;

  h1 {
    z-index: 1;
  }

  .icon-container {
    z-index: 1;
  }

  .nav-overlay-container {
    width: 100vw;
    height: 0;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    &.expand {
      height: 100vh;
    }

    &.scrolled {
      background-color: white;
      border-bottom: 1px solid black;
      color: black;
    }
    .nav-link-container {
      li {
        list-style: none;
        a {
          font-size: 48px;
          &:visited {
            text-decoration: none;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 800px) {
  #nav {
    svg {
      display: none;
    }
    .nav-overlay-container {
      height: 100px;
      background-color: transparent;

      .nav-link-container {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        li {
          padding: 0 16px;
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
