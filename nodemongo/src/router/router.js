const router =  require("express").Router();
const {MensRanking, MensRanking1} =  require("../models/mens");

router.post("/mens", async (req, res)=>{
    try{
     const addingMensRecords = new MensRanking1(req.body);
    //  console.log(req.body);
     const insertmens = await addingMensRecords.save();
     res.status(201).send(insertmens);
    }catch(e){
        res.status(400).send(e);
    }
    });
    
router.get("/mens", async (req, res)=>{
    try{
    //  const getMensRecords = await MensRanking1.find({}).select({name:1});
    //  const getMensRecords = await MensRanking1.find({}).select(name dob);
    //  const getMensRecords = await MensRanking1.find({}).limit(1);
    const getMensRecords = await MensRanking1.find({}).sort({"ranking":1});
        res.send(getMensRecords);
    }catch(e){
        res.status(400).send(e);
    }
    });
    
router.get("/mens/:name", async (req, res)=>{
    try{
        const name = req.params.name;
        const getMen = await MensRanking.find({name:name});
        res.send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
    });  

router.patch("/men/:name", async (req, res)=>{
    try{
        const name = req.params.name;
        const getMen = await MensRanking.updateOne({name:name}, req.body, {new:true});
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);
    }
    });

router.delete("/men/:name", async (req, res)=>{
    try{
        const name = req.params.name;
        const getMen = await MensRanking.deleteOne({name:name});
        res.send(getMen);
    }catch(e){
        res.status(500).send(e);
    }
    });

module.exports = router;