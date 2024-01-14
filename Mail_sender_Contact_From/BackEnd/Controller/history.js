
const SendEmail =require("../modals/sendEmail")


const Showhistory= async (req ,res) =>{
    
   const token=req.headers.authorization;
   
    SendEmail.find({SenderEmail:token._id})
    .then((data) => res.json({success : true ,Datas :data }))
    .catch((err) => res.json({success: false , message:err.message}))
    };

    module.exports={Showhistory}

