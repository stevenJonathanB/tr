// Binary search, condition the array must be sorted ascending 


function BinarySearch(MyArrayArg,SearchItem)
{   
    if (MyArrayArg.length == 0)
        
        {   console.log("Not found");
            return;
        }
    
    if (MyArrayArg[0] == SearchItem)
        {   console.log("Found");
            console.log(MyArrayArg[0]);
            return;
        }
        if (MyArrayArg[1] == SearchItem)
        {   console.log("Found");
            console.log(MyArrayArg[1]);
            return;
        }
    var splitindex = Math.round(MyArrayArg.length/2);

    if (MyArrayArg[splitindex] > SearchItem)
        {   
            console.log(MyArrayArg.slice(0,splitindex));
            BinarySearch( MyArrayArg.slice(0,splitindex),SearchItem);
        }
    else
        {  
            console.log(MyArrayArg.slice(splitindex,MyArrayArg.length));
            BinarySearch( MyArrayArg.slice(splitindex,MyArrayArg.length),SearchItem);
        }  
    
}
var myarray = [1,3,4,5,6,7,9,100,200,201,206] ;
var mysecondarray= [2000,3000];

BinarySearch(myarray,206);

