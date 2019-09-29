module.exports ={
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                let data= require("./mock/goodList.json")
                res.send(data)
            })
        }
    }
}