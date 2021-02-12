<script type="text/javascript">

    document.getElementById("1").addEventListener("click", function(){
        document.getElementById("box").style.height = "300px" ;
    });
    document.getElementById("2").addEventListener("click", function(){
        document.getElementById("box").style.backgroundColor = "blue" ;
        document.getElementById("box").style.backgroundImage = "none" ;
    });
    document.getElementById("3").addEventListener("click", function(){
        document.getElementById("box").style.opacity = "0.5" ;
    });
    document.getElementById("4").addEventListener("click", function(){
        document.getElementById("box").style.backgroundColor = "green";
    });
    document.getElementById("5").addEventListener("click", function(){
        document.getElementById("box").style.width = "100px";
    });
    
    document.getElementById("resetButton").addEventListener("click", function(){
        document.getElementById("box").setAttribute("style", "height:150px; width:150px; background-color:orange; background-image:none; background-size:cover; margin:25px; opacity: 1; border-radius: 0px;box-shadow:none;")
    });
    </script>