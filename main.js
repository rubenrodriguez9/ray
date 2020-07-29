const Ray = function() {
    const ray = {
        length: 0,

        push: function(value){
            
            this[this.length] = value
            this.length++;


        },

       pop: function(){
        
        this.length--

        

    
       }


    }




  return ray
}






module.exports = Ray
