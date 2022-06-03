//declaring data types and variables within
const names = ['John', 'Jack', 'Jason'];
const day = ['monday', 'tuesday', 'wednesday', 'thursday','friday','saturday','sunday'];
const activity = ['basketball', 'painting', 'running', 'swimming', 'cycling'];

//declaring function
function generateMessage(){
        let randomName = names[Math.floor(Math.random()*names.length)];
        let randomDay = day[Math.floor(Math.random()*day.length)];
        let randomActivity = activity[Math.floor(Math.random()*activity.length)];
        
        console.log(`Hello, ${randomName}!`); 
        console.log(`Its a beautiful ${randomDay}, best day of the week!`); 
        console.log(`Would you like to get together and do some ${randomActivity}?`);
    }

generateMessage();