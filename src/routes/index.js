import routerBook from "./books.js";

const initRoutes = (app) => {
    app.use("/api/v1", routerBook);

    return app.use("/",(req,res)=>{
        res.send("erver on....");
    })
}

export default initRoutes;