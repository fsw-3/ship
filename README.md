# Logic Challenge - Ship

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun


---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Direction

Pada soal ini kalian diminta untuk menganalisa output
Console.log dilakukan langsung di dalam function, tidak perlu pakai return
Asumsi input bilangan dari 1 smp tak hingga

```js
star(1)
output
 *                          spasi 1
*** 3                       spasi 0 kelipatan 3  3 x 1 = 3
star(2) 
output
//     *                       spasi 5
//    *** 3 x 3                spasi 3
// ********* 9                 spasi 1 kelipatan 3 9 
//   ***** 5 -4                spasi 3
// star(3)
// output
//        *                     spasi 8
//       *** 3                  spasi 7
//      ***** 5 + 2 , 5 x 3     spasi 6
// *************** 15           spasi 1 kelipatan 3 kelipatan 5 x 3 = 15
//   *********** 11 -4          spasi 3
//     ******* 7  - 4           spasi 5
star(4)
// output
//           *                  spasi 11
//          *** 3               spasi 10
//         ***** 5              spasi 9
//        ******* 7 x 3         spasi 8
// ********************* 21     spasi 1 kelipatan 3 7 x 3 = 21; i * 3 
//   ***************** 17 - 4   spasi 3
//     *************  13 - 4    spasi 5
//       ********* 9  - 4       spasi 7
```
