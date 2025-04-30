const checkValidData=(email,pass)=>{
   const isEmailvalid= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   const isPassvalid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(pass)
   if(!isEmailvalid) {
    return "Email not valid";
   }
   if(!isPassvalid) return "Password not valid. Example: Xyz123@";
   return null;
}
export default checkValidData;