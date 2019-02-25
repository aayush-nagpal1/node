module.exports = {
    add : function(num1, num2){
        return Number(num1) + Number(num2);
    },

    sub : function(num1, num2){
        return Number(num1) - Number(num2);
    },

    mul : function(num1, num2){
        return Number(num1) * Number(num2);
    },
    
    div : function(num1, num2){
        if(num2>0)
            return Number(num1) / Number(num2);
        else
            return ("Divisor should be greater than zero");
    }
}