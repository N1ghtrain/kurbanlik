
exports.dehash = async (hashedPassword) => {
    try {
        const nums = hashedPassword.split('-');
        console.log(`mevcut nums >>>`+nums)
        console.log(typeof(nums))
        var list = [];
        for (var i = 0; i<nums.length; i++){
            list[i] = String.fromCharCode(nums[i] - 27);
            console.log(list[i]);   
        }
        var dehashedPassword = list.join('')
        console.log(dehashedPassword);
    return dehashedPassword;
    } catch (error) {
        console.log("hata-dehashing")
        console.log(error)
    }
};



