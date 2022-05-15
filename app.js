var array=["Jay","Yash","Chandan","Dishil","Jatin","Mohini","Jayamala","Yogini"];


for(var i=0;i<array.length;i++){
    
        var fl = array[i].charAt(0).toLowerCase();

        if(fl=='j' ){
            console.table("Good Bye "+ array[i] );
        }  else{
            console.table("Hello "+array[i]);
        }
    }

   