let tab = [-2, 1, 4];


const myFunc = () => {

    const substraction = (x) => {
        
        x-= tab[0];
        
        if (Math.sign(x) == -1 ){
            alert(x+ " negative number");
        }
        else{
            alert(x+ " positive number");
        }
        
    };

    for (let i = 0; i < tab.length; i++){
        substraction(tab[i]);
    };
};


