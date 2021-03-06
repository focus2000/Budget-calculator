
.login input{
    display:block;
    margin-bottom:1.2rem;
    
}



.login input[type= "email"],
.login input[type = "password"]{
    width:100%;
    font-size:1.1rem;
    padding:1.1rem 5rem;
    border:1px solid #c2c2c2;
    background:#f0f0f0;
    border-radius:10px
}

.login {
    margin:0 0 5rem 0
}

.login input[type = "submit"]{
    width:90px;
    padding:1rem;
    font-size:1.1rem;
    border:1px;
    border-radius:8px;
    background:gray;
    color:white
}

.login h1 {
    margin-bottom: 1rem;
    text-align: center;
    color:whitesmoke
}

.question p {
    color:white;
    font-size:1.5rem;
    padding:0 0.5rem
}

.question_link {
    color:skyblue;
    text-decoration:none
}

.login input:focus {
    outline:none;
    border:1px solid purple;
    box-shadow:inset 0px 0px 5px rgba(38, 142, 228, 0.5);
    outline:none
}



 .danger {
     color:red;
     padding:0.2rem 1rem;
     margin-bottom:1rem;
     display:flex;
     justify-content:space-between;
     align-items: center;
     border-radius:8px;
     outline:none;
     border:1px solid purple;
     box-shadow:inset 0px 0px 5px rgba(38, 142, 228, 0.5);
     outline:none

 }

 .clear {
     background-color:rgb(128, 16, 16);
     color:white;
     margin:0.3rem 1rem;
     border-radius:50%;
     padding:0 0.5rem;
     text-align:center
 }


@media(max-width:375px) {
    .container{
        max-width:900px;
        margin:0 auto;
        height:80vh;
        letter-spacing: 0.5rem;
    }

    .login input[type= "email"],
.login input[type = "password"]{
    width:60%;
    font-size:1.5rem;
    padding:1.5rem 7rem;
    border:1px solid #c2c2c2;
    background:#f0f0f0;
    border-radius:10px
}


.login {
    margin:0 0 5rem 0
}
    
    
}