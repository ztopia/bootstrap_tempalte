<template>
  <div class="home">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li :class="steps==0?'nav-item active':'nav-item'" @click='jump(0)'>
            <a class="nav-link" >
              top1
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li :class="steps==1?'nav-item active':'nav-item'" @click='jump(1)'>
            <a class="nav-link" >top2</a>
          </li>
          <li :class="steps==2?'nav-item active':'nav-item'" @click='jump(2)'>
            <a class="nav-link" >top3</a>
          </li>
          <li :class="steps==3?'nav-item active':'nav-item'" @click='jump(3)'>
            <a class="nav-link" >top4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <main role="main">
      <!-- Main jumbotron for a primary marketing message or call to action -->
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a>
          </p>
        </div>
      </div>

      <div class="container">
        <!-- Example row of columns -->
        <div class="row d_jump">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
        </div>

        <div class="row d_jump">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
        </div>

        <div class="row d_jump">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
        </div>

        <div class="row d_jump">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
            </p>
          </div>
        </div>

        <hr>
      </div>
      <!-- /container -->
    </main>

    <footer class="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return{
      steps:0
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
  },
  methods: {
    onScroll() {
      let scrolled =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop; // 586、1063分别为第二个和第三个锚点对应的距离
      if (scrolled >= 1063) {
        this.steps = 2;
      } else if (scrolled < 1063 && scrolled >= 586) {
        this.steps = 1;
      } else {
        this.steps = 0;
      }
    }
  },
  created() {},
  methods: {
    jump(index) {
     
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll(".d_jump");
      let total = jump[index].offsetTop;
      
      let distance =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
         console.log('jump',total,'---------',distance)
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          console.log(distance)
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          window.pageYOffset = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
          window.pageYOffset = total;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>

.d_jump{
  height:100rem;
}  
</style>
