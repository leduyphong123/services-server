import routerBook from "./books";
import authRouter from "./auth";


const initRoutes = (app) => {
    app.use("/api/v1", routerBook);
    app.use("/api/v1", authRouter);

    return app.use("/",(req,res)=>{
        res.send("erver on....");
    })
}

export default initRoutes;