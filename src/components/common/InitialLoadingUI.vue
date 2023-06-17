<script setup></script>

<template>
  <div class="loading__wrapper">
    <div class="loading__pattern">
      <div class="loading__group">
        <img
          class="loading__logo"
          src="../../assets/Image/Logo Brand.svg"
          alt="logo-brand"
        />
        <div class="loading__bar">
          <div class="loading__stick"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--gradient-404);
  z-index: 250;
  overflow: hidden;
}

.loading__pattern {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/Image/Backgroud-pattern.svg") center;
}

.loading__group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
  width: 70%;
}

.loading__bar {
  width: 85%;
  background: var(--white);
  border-radius: 20px;
  padding: 3px;
}

.loading__stick {
  width: 40%;
  height: 18px;
  border-radius: 20px 0px 0px 20px;
  background: var(--gradient-logo);
}

@media screen and (min-width: 500px) {
  .loading__group {
    width: 286px;
  }
  .loading__stick {
    height: 20px;
  }
}

@media screen and (min-width: 1250px) {
  .loading__bar {
    width: 100%;
  }
}
</style>
