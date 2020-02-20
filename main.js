// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
function challenge(str){
    console.log('##### Challenge ' + str + ' #####')
}
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
challenge('Banner Function Works!')

// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
challenge(2)
for (let i=1; i <= 20; i++){
    if (i%3===0){
        console.log(i)
    }
}

// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
challenge(3)
for (let i=3; i <= 20; i=i+3){
    console.log(i)
}


// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
challenge(4)
for (let i=20; i>=1; i--){
    console.log(i)
}

// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
challenge(5)
for (let x='Boy howdy am I good at this!', y=0; y <= x.length-1; y++){
    console.log(x[y])
}

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
challenge(6)

for (let x='And getting better every day.', y=1; y <= x.length-1; y=y+3){
    console.log(x[y])
}

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
challenge(7)
for (let x='Am I the best?', y=0; y <= x.length-1; y++){
    console.log(x[y].toUpperCase())
}

// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
challenge(8)
for (let a='Whoa, I am the best!', b=a.split(' '), c=0; c < b.length; c++){
    if (c===2){
        for (let i=0, d=b[c]; i<d.length; i++){
        console.log(d[i].toUpperCase())
        }
        
    }
    else {
        for (let i=0, d=b[c]; i<d.length; i++){
            console.log(d[i])
            }
    }
    if (c!==b.length-1){
        console.log(' ')
    }
}

// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
challenge(9)
for (x='I am become death, destroyer of worlds.', i=x.length-1; i>=0; i--){
    console.log(x[i])
}

// 10.
//
challenge(10)
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';
for (a=0, b=names.split('|'); a<b.length; a++){
    console.log('Here today is:')
    for (let i=0, c=b[a]; i<c.length; i++){
            console.log(c[i])
            }
}
// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
