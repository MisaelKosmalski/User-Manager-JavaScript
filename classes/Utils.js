class Utils{

    static dateFormat(date){

        let dd = (date.getDate() < 10  ? "0" : "") + date.getDate();
        let mm = ((date.getMonth() + 1) < 10 ? "0" : "") + (date.getMonth() + 1);
        let hour = (date.getHours() < 10 ? "0" : "") + date.getHours();
        let minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

        return dd + "/" + mm + "/" + date.getFullYear() + " " + hour + ":" + minute;

    }

}