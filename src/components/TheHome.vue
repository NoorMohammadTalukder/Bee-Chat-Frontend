<template>
   
    <div class="header">
      <div class="container">
        <ul class="nav">
          <li><router-link class="x" to="/registration"> JOIN NOW </router-link></li>
          <li><router-link class="x" to="/login"> Login </router-link></li>
					<li>Work</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>

    <div class="jumbotron">
      <div class="container">  
        <div class="main">
          <h1>BEE CHAT</h1>
          <a href="#" class="btn-main">Register</a>
          
        </div>
      </div>
    </div>

    <!-- <div class="supporting">
      <div class="container">
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg">
          <h2>Design</h2>
          <p>Make your projects look great and interact beautifully.</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg">
          <h2>Develop</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg">
          <h2>Deploy</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="footer">
      <div class="container">
        <p>&copy; Broadway 2015</p>
      </div>
    </div> -->
 

</template>

<style scoped>
/* html, body {
    margin: 0;
    padding: 0;
  } */
  
  .header {
    background-color:#ededed8e;
  }
  .x{
     text-decoration: none;
     color: #333;
 }
  
  .container {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 10px;
    /* padding: 0 ; */
  }
  
  .jumbotron {
    background: url(https://images.unsplash.com/photo-1666756144626-127da4bde0d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80);
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    height: 100vh;
  }
  
  .nav {
    margin: 0;
    padding: 20px 0;
  }
  
  .nav li {
    display:inline;
    color: rgb(19, 18, 18);
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 12px;
    text-transform:uppercase;
    margin-left:10px;
    margin-right:10px;
  }
  
  .main {
    position: relative;
    top: 180px;
    text-align: center;
  }
  
  .main h1 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 70px;
    margin-top: 0;
    margin-bottom: 80px;
    text-transform: uppercase;
  }
  
  .btn-main {
    background-color: #333;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1.3px;
    padding: 16px 40px;
    text-decoration: none;
    text-transform: uppercase;
  }
  
  .btn-default {
    color:#333;
    border:1px solid #333333;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 1.3px;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;  
    display: inline-block;
    margin-bottom: 20px; 
    padding-right:50px;
    padding-left:50px;
  }
  
  .supporting {
    padding-top: 80px;
    padding-bottom: 100px;
  }
  
  .supporting .col {
    float: left;
    width: 33%;
    font-family: 'Raleway', sans-serif;
    text-align: center;
  }
  
  .supporting img {
    height: 32px;
  }
  
  .supporting h2 {
    font-weight: 600;
    font-size: 23px;
    text-transform: uppercase;
  }
  
  .supporting p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 0 50px;
    margin-bottom: 40px;
  }
  
  .clearfix {
    clear: both;
  }
  
  .footer {
    background-color: #333;
    color: #fff;
    padding: 30px 0;
  }
  
  .footer p {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 11px;
  }
  
  @media (max-width: 500px) {
    .main h1 {
      font-size: 50px;
      padding: 0 40px;
    }
  
    .supporting .col {
      width: 100%;
    }
  }
</style>