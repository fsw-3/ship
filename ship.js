function ship(value){
  let stars = '*';
  let starsTop = '';
  let starsButtom = '';
  let spaces = '';
  let spacesTop = '';
  let spacesButtom = '';
  
  //ketentuan banyak spasi untuk spacesTop pertama yaitu setengah-1 dari jumlah star pada starsButton pertama
  let lenSpaces = ((((value+value-1)*3)-1)/2);
  
  // melakukan looping untuk mendapatkan banyak spasi
  for(let i=1; i<lenSpaces; i++){
    spaces += ' ';
  }
  
  spacesTop = spaces; // mengcopy data spaces ke spacesTop 
  
  // melakukan looping untuk urutan starTop
  for(let j=0; j<value; j++){
    starsTop += stars; // menambahkan data stars kedalam starsTop
    console.log(spacesTop,starsTop); // menampilkan spacesTop dan starsTop
    starsTop += stars; // menambahkan data stars kedalam starsTop
    spaces = spacesTop.substring(0, spacesTop.length-1); // melakukan pengurangan jumlah spasi
    spacesTop = spaces; // mengcopy data spaces ke spacesTop
  }
  
  stars = starsTop.substring(0,starsTop.length-1); // menentukan stars untuk ditambah sebanyak 2x
  starsButtom += stars+stars+stars; // menetukan jumlah starsButtom
  console.log(starsButtom); // menampilakan starsButtom paling atas
  
  //  melakukan looping untuk starsButton kedua dst
  for(let k=1; k<value; k++){
    stars = starsButtom.substring(0, starsButtom.length-4); // mengurangi jumlah stars
    starsButtom = stars; // mengcopy data stars ke starsButtom
    spacesButtom += ' '; // menambahkan spasi pada spacesButtom
    console.log(spacesButtom, starsButtom); // menampilkan spacesButtom dan starsButtom
    spacesButtom += ' '; // menambahkan spasi pada spacesButtom
  }
}
  
ship(1);
ship(2);
ship(3);
ship(4);