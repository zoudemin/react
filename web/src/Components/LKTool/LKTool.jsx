export default class LKTool {
    fileToBase64(file, callback){
        const reader = new FileReader();
        let src = '';
        if (file) {
            reader.readAsDataURL(file);
        } else {
            src = '';
        }
        reader.onloadend = ()=>{
            src = reader.result;
            callback && callback(src);
        }
    }
}