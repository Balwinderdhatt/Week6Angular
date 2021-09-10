module.exports= {
  listen: function(app, Port){
    app.listen(Port, ()=>{
      let d = new Date();
      let h = d.getHours();
      let m = d.getMinutes();
      console.log("Server started at " + h +":"+m + "on Port: "+Port)
    })
  }
}