<template>
  <div class="container">
    <div class="customer">
      <h1>I'm a customer</h1>
      <p>I see {{ totalTvCount }} TVs!</p>
      <p>I see {{ reverseName }} TVs!</p>
      <p>{{ name }}</p>
    </div>
    <div class="title">
      <h2>User Details</h2>
    </div>
    <div class="d-flex">
      <form action="" method="">
        <label>
          <span class="fname">Subject<span class="required">*</span></span>
          <input type="text" name="fname" v-model="subject" />
        </label>
        <label>
          <span class="lname">Description<span class="required">*</span></span>
          <input type="text" name="lname" v-model="description" />
        </label>
        <label>
          <span>Category<span class="required">*</span></span>
          <select name="selection" v-model="category">
            <option value="select">Select a country...</option>
            <option value="AFG">Afghanistan</option>
            <option value="ALA">Åland Islands</option>
            <option value="ALB">Albania</option>
          </select>
        </label>

        <button type="button" @click="submitTodos">Submit</button>
      </form>
    </div>
    <div>
      <h1>{{allTodos}}</h1>
      <ul v-if="allTodos">
        <li v-for="todo in allTodos" :key="todo.id">
          {{todo.subject}} {{todo.description}} {{todo.category}} <button @click="deleteTodoItem(todo.id)">Remove</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Customer",
  data() {
    return {
      description: null,
      subject: null,
      category: null,
    };
  },
  computed: {
    ...mapState(["totalTvCount", "name"]),
    ...mapGetters(["reverseName", "allTodos"]),
    
    firstName: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        return this.$store.state.commit("updateName", value);
      },
    },
  },
  methods: {
    ...mapMutations(["addTodos","deleteTodo"]),

    submitTodos() {
      let timestampID = Date.now() + Math.random()
      this.addTodos({
        id: timestampID,
        description: this.description,
        subject: this.subject,
        category: this.category,
      });

      this.description = null,
      this.subject = null,
      this.category = null

      console.log(this.allTodos);
    },
    deleteTodoItem(id){
      console.log(id)
      this.deleteTodo(id)
    }
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700");

body {
  background: url("http://all4desktop.com/data_images/original/4236532-background-images.jpg");
  font-family: "Roboto Condensed", sans-serif;
  color: #262626;
  margin: 5% 0;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.d-flex {
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  border-radius: 0 0 5px 5px;
  padding: 25px;
}
form {
  flex: 4;
}

.title {
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0, #5195a8),
    color-stop(100, #70eaff)
  );
  background: -moz-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: -ms-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: -o-linear-gradient(top left, #5195a8 0%, #70eaff 100%);
  background: linear-gradient(to bottom right, #5195a8 0%, #70eaff 100%);
  border-radius: 5px 5px 0 0;
  padding: 20px;
  color: #f6f6f6;
}
h2 {
  margin: 0;
  padding-left: 15px;
}
.required {
  color: red;
}
label,
table {
  display: block;
  margin: 15px;
}
label > span {
  float: left;
  width: 25%;
  margin-top: 12px;
  padding-right: 10px;
}
input[type="text"],
input[type="tel"],
input[type="email"],
select {
  width: 70%;
  height: 30px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid #dadada;
  color: #888;
}
select {
  width: 72%;
  height: 45px;
  padding: 5px 10px;
  margin-bottom: 10px;
}

table {
  margin: 0;
  padding: 0;
}
th {
  border-bottom: 1px solid #dadada;
  padding: 10px 0;
}
tr > td:nth-child(1) {
  text-align: left;
  color: #2d2d2a;
}
tr > td:nth-child(2) {
  text-align: right;
  color: #52ad9c;
}
td {
  border-bottom: 1px solid #dadada;
  padding: 25px 25px 25px 0;
}

p {
  display: block;
  color: #888;
  margin: 0;
  padding-left: 25px;
}

button {
  width: 25%;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  background: #2933c9;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
}
button:hover {
  cursor: pointer;
  background: #428a7d;
}
</style>