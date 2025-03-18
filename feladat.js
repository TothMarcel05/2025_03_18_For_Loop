//1. feladat
for (let i = 1; i < 20; i++) {
    console.log(i);
    console.log(i * i);
    console.log(Math.sqrt(i));

}
//2. feladat
let str = "😊"
for (let i = 1; i < 10; i++)
    {
        console.log(str.repeat(i))
    }
//3. feladat
for (let i = 99; i > 1; i--)
    {
        if (i % 2 == 0 && i % 3 == 0) {
            console.log(i)
        }
    }
//4. feladat
    for (let i = 101; i > 50; i--)
        {
            if (i % 5 == 0)
                {
                    console.log(i*2)
                }
          
        }
//5. feladat
let összz = 0;
let dbb = 0;
for (let i = 1; i < 10; i++)
    {
        dbb++;
        if (dbb != 5)
            {összz += i}
    }
console.log(összz)
//6. feladat
let összzz = 0;
let dbbb = 0;
for (let i = 1; i < 10; i++)
    {
        dbbb++;
        if (dbbb != 5)
            {összzz += i}
    }
let atlagg = összzz / dbbb;
console.log(atlagg)
//7. feladat
let össz = 0;
let szorzat = 1;
let db = 0;
for (let i = 1; i < 11; i++)
    {
        össz += i
        szorzat * i
        db++;
    }

let atlag = össz / db;    
console.log(össz)
console.log(szorzat)
console.log(atlag)


