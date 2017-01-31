/*
 * The server configuration type
 */
class Server {

   /*
    * The initialization of server
    */
   constructor(app){
     this.startServer(app);
   }

   /*
    * The start server method.
    * This method start the server on env port or 3000
    */
   startServer(app){
     app.listen(process.env.PORT || 3000, ()=>{
       console.log("The server has been started...");
     });
   }
}

 module.exports = Server;
