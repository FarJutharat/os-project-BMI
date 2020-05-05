class Request{
    async BMIreq (req){
        return new Promise(async function (resolve, reject) {
            try {
                var weight = req.weight
                var high = req.high
                high = high/100
              var BMI = weight/(high*high)
               console.log(high)
                console.log(BMI)
                var message = ""
                if(BMI < 18.5){
                    message = "น้ำหนักต่ำกว่าเกณฑ์"
                } else if(BMI > 18.5 && BMI < 22.9) {
                    message = "สมส่วน"
                } else if(BMI > 23 && BMI < 24.9) {
                    message = "น้ำหนักเกิน"
                } else if(BMI > 25.5 && BMI < 29.9) {
                    message = "โรคอ้วน"
                } else {
                    message = "โรคอ้วนอันตราย"
                }
                resolve(message)
            }
            
            catch(err){
                let  messageError = {message: err.message || ` CREATE failed [Error] ${err}`,
                statusCode: err.statusCode || 500}
                reject(messageError)
            }
        })
}
}
module.exports = Request;