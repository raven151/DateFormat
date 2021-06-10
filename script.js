

var formatted = DateFormat(5000)

document.write("<p>" + formatted + "</p>");


  function  DateFormat(input) {
        var line = "";
        var words =[];
    
        var second = 0;
        var minute = 0;
        var hour = 0;
        var day = 0;
        var year = 0;
    
        var ssecond = "";
        var sminute = "";
        var shour = "";
        var sday = "";
        var syear = "";
    
        var wminute = 60;
        var whour = 3600;
        var wday = 86400;
        var wyear = 31536000;
    
        if(input == 0){
    
            line = "now";
    
    
        }
        else{
            //while check start
            while (input !== 0)
            {
                if(input >= wyear){
                    input-=wyear;
                    year++;
    
    
                }
    
                else if(wyear > input && input >= wday){
    
                    input-=wday;
                    day++;
                }
                else if(wday > input && input >= whour){
    
                    input-=whour;
                    hour++;
                }
                else if(whour > input && input >= wminute){
    
                    input-=wminute;
                    minute++;
                }
                else if(wminute > input){
    
                    second = input;
                    input = 0;
                }
    
    
    
    
    
            }
            //while end
    
            //if for strings start
            if(year > 0)
            {
                if(year == 1){
                    syear = year + " year";
    
                }
                else{
                    syear = year + " years"
    
                }
                words.push(syear);
                
                
                
            }
            if(day > 0)
            {
                if(day == 1){
                    sday = day + " day";
    
                }
                else{
                    sday = day + " days"
    
                }
                words.push(sday);
                
                
            }
            if(hour > 0)
            {
                if(hour == 1){
                    shour = hour + " hour";
    
                }
                else{
                    shour = hour + " hours"
    
                }
                words.push(shour);
                
                
            }
            if(minute > 0)
            {
                if(minute == 1){
                    sminute = minute + " minute";
    
                }
                else{
                    sminute = minute + " minutes"
    
                }
                words.push(sminute);
                
                
            }
            if(second > 0)
            {
                if(second == 1){
                    ssecond = second + " second";
    
                }
                else{
                    ssecond = second + " seconds"
    
                }
                words.push(ssecond);
                
                
            }
            //if for string end
            
    
            if(words.length == 1){
    
                line = words[0];
            }
    
            if(words.length == 2){
                line = words[0] + " and " + words[1];
            }
    
            if(words.length == 3){
                line = words[0] + ", " + words[1] + " and " + words[2];
            }
    
            if(words.length == 4){
                line = words[0] + ", " + words[1] + ", " + words[2] + " and " + words[3];
            }
            if(words.length == 5){
                line = words[0] + ", " + words[1] + ", " + words[2] + ", " + words[3] + " and " + words[4];
            }
    
          
    
    
    
            
    
    
    
    
    
            
    
        }
    
    
    
        return line;   
      }
    
    