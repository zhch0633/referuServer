<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click = "getUser">get user</button>    
    <button v-on:click = "postUser">post users</button>
    <button>delete users</button>
    <button>query users</button>  
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Start an api testing'
    }
  },
  methods: {
    getUser: function (event) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET",  window.location.protocol + "//" + window.location.host + "/user?userID=mockUser2", false ); // false for synchronous request
      xmlHttp.send( null );
      console.log(xmlHttp.responseText);
    },
    postUser:function (event) {
      var xmlHttp = new XMLHttpRequest();
      var paramsJson = {
          userID:"mockUser2",
          version:"1"
      }
      var params = JSON.stringify(paramsJson);
      xmlHttp.open( "POST", window.location.protocol + "//" + window.location.host + "/user", true);
      xmlHttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
      xmlHttp.send(params);
    },
    deleteUser:function (event) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.send(params);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
