
import { NativeModules } from 'react-native';

const { RNCheckImage } = NativeModules;

export default class RNCheckImageUtils {

    static check(name,callback){
        RNCheckImage.check(name,callback);
    }

    static async checkCamera(name){
        try{
            let result = await RNCheckImage.checkCemera(name);
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }
};
