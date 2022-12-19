const mongoose =  require("mongoose");

const menSchema =  new mongoose.Schema({
    ranking: {
        type: Number,
        required:true,
        unique:true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    dob: {
        type: Date,
        require: true,
        trim: true
    },
    country: {
        type: String,
        require: true,
        trim: true
    },
    score: {
        type: Number,
        require: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
});

const MensRanking = new mongoose.model("MenRanking", menSchema);
const MensRanking1 = new mongoose.model("MenRanking2", menSchema);

module.exports = {MensRanking, MensRanking1};