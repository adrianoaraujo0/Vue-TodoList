<template >
  <div class="wrapper">
    <span>
      <input type="text" v-model="text" placeholder="Write your task" />
      <button class="button-add-text" @click="pushItem()">I Got This!</button>
    </span>
    <p>{{ showDateTime() }}</p>
    <div class="task-container">
      <div class="container-items" v-for="(item, index) in items" :key="index">
        <p class="task" :class="{ 'cross-out': item.crossout }">
          {{ item.text }}
        </p>
        <span class="task-container">
          <div>
            <span>
              <button
                @click="finishTask(index)"
                class="button-edit-task"
                style="margin-right: 5px"
              >
                <i class="fa fa-check"></i>
              </button>
              <button @click="removeItem('item')" class="button-edit-task">
                <i class="fa fa-trash"></i>
              </button>
            </span>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      dateTime: this.date() + ", " + this.time(),
      items: [],
      text: "",
    };
  },
  methods: {
    pushItem() {
      this.items.push({ text: this.text, crossout: false });
      this.text = "";
    },
    removeItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    finishTask(index) {
      console.log(this.items[index].crossout);
      this.items[index].crossout = !this.items[index].crossout;
      console.log(this.items[index].crossout);
    },
    showDateTime() {
      setInterval(() => {
        this.dateTime = this.date() + ", " + this.time();
      }, 1000);
      return this.dateTime;
    },
    date() {
      let date = new Date();
      let day = date.getDate().toString().padStart(2, "0");
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let year = date.getFullYear();
      return day + "/" + month + "/" + year;
    },
    time() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let seconds = date.getSeconds().toString().padStart(2, "0");
      return hours + ":" + minutes + ":" + seconds;
    },
  },
};
</script>


<style >
input {
  border-radius: 10px 0px 0px 10px;
  border: none;
  width: 240px;
  font-size: 10px;
  height: 20px;
  padding: 2px 10px;
  outline: none;
}

.button-add-text {
  height: 25px;
  width: 65px;
  padding: 2px 10px;
  border-radius: 0px 10px 10px 0px;
  border: none;
  font-size: 8px;
}

span {
  display: flex;
  align-items: center;
}

p {
  font-size: 8px;
  text-align: center;
  margin-right: 7px;
}

.container-items {
  margin-top: 10px;
  height: 20px;
  width: 180px;
  background-color: #181a1a;
  border-radius: 10px;
  background-color: rgba(24, 26, 26, 0.5);
  padding: 0px 5px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-edit-task {
  height: 15px;
  width: 15px;
  border-radius: 10px;
  border: none;
  background-color: #949fa4;
  display: flex;
  justify-content: center;
}

i {
  font-size: 10px;
}

.cross-out {
  text-decoration: line-through;
}

.task {
  font-size: 10px;
  color: rgba(143, 152, 152, 0.838);
  display: flex;
  align-items: center;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>