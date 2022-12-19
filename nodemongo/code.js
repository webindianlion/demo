const router = require("./src/router/router");

router.post("/getuser", fetchuser, async ()=>{
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
    }catch(e){

    }
})