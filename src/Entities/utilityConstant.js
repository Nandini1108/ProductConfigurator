require('dotenv').config();
class UtilityConstant{
    constructor(){
        this.apiHost=process.env.API_HOST;
        this.apiAction=process.env.API_METHOD;
        this.env=process.env.NODE_ENV;
        this.platform=process.platform;
        this.PORT=process.env.PORT;
        this.directoryLocation=process.env.FILE_PATH;
        this.STATIC_FILE_NAME_KEY="PRODUCT_DEFINITION";
        this.validate();
    }    
    validate()
    {
        if(!this.apiHost || !this.apiAction)
        {
            throw new Error("Invalid API configuration.");
        }
        if(!this.env)
        {
            this.env='PROD';
        }
    } 
}
module.exports={UtilityConstant};

