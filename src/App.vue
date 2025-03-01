<template >
  <div class="container">
    <div class="position-theme">
      <button
        class="circle theme-blue"
        style="margin-right: 10px"
        @click="setTheme('theme-blue')"
      ></button>
      <button
        class="circle theme-light"
        style="margin-right: 10px; border: 1px solid black"
        @click="setTheme('theme-light')"
      ></button>
    </div>
    <header-component></header-component>
    <div style="height: 20px"></div>
    <input-component></input-component>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    setTheme(theme) {
      document.body.classList.remove("theme-light", "theme-blue");
      document.body.classList.add(theme);
      document.body.style.setProperty(
        "--input-background-global",
        theme === "theme-light" ? "#525355" : "#181A1A"
      );
      document.body.style.setProperty(
        "--input-color-global",
        theme === "theme-light" ? "#000608" : "#626464"
      );

      document.body.style.setProperty(
        "--p-color-global",
        theme === "theme-light" ? "#98807A" : "#D6C9AF"
      );
    },
  },
  beforeMount() {
    document.body.classList.add("theme-blue");
    document.body.style.setProperty("--input-background-global", "#181A1A");
    document.body.style.setProperty("--input-color-global", "#626464");
    document.body.style.setProperty("--p-color-global", "#D6C9AF");
  },
};
</script>

<style>
body {
  background: linear-gradient(45deg, #525355, #37464d, #263e48, #0c3141);
  margin: 0;
  padding: 0;
  font-family: "Noto Sans";
  overflow-y: auto; /* Permite rolagem quando houver muitos itens */
}

body.theme-light {
  background: linear-gradient(45deg, #d9f3ff, #c6d5db, #cdd8de, #fafdff);
}

body.theme-blue {
  background: linear-gradient(
    45deg,
    #525355,
    #37464d,
    #263e48,
    #0f3242,
    #0c3141
  );
}

body.theme-dark {
  background: linear-gradient(45deg, #001417, #00191f, #001d26, #001e28);
}

.theme-blue {
  background: linear-gradient(
    45deg,
    #525355,
    #37464d,
    #263e48,
    #0f3242,
    #0c3141
  );
}

.theme-light {
  background: linear-gradient(45deg, #d9f3ff, #e1f5ff, #ebf8ff, #fafdff);
}

.theme-dark {
  background: linear-gradient(45deg, #001417, #00191f, #001d26, #000608);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.position-theme {
  position: relative;
  bottom: 40px;
  left: 300px;
}

.circle {
  height: 16px;
  width: 16px;
  border: 0.5px #fff solid;
  border-radius: 10px;
}

input {
  background-color: var(--input-background-global, #181a1a);
  color: var(--input-color-global, #181a1a);
}

p {
  color: var(--p-color-global, #181a1a);
}
</style>
