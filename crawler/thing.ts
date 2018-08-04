var lineHelper = function(idx: number, i: number, count: number, depth: number) {
    for(var j: number=0; j < i; j++) {
       if(data.results[data.results[idx].children[j]].links > 0) {
         count += lineHelper(data.results[idx].children[j], i+j, count, depth++);
       } else {
         count++;
       }
     }
     return count;
   }
