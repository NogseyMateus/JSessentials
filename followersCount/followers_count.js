let count= 0; 

function increaseCount() {
    count++; //Increment the count by 1
    displayCount(); // Display the count
    checkCountValue();// Check count value and display messages
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if(count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCount(){
    count = 0; //Reset the count
    displayCount(); // Display the count
    alert("The Followers count has been reset");
}