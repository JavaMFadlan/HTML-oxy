let array = [2,4,6,8,10];


//menaampilkasn menggunakan foreach
array.forEach(element => {
    console.log(element);
});


//bagi menggunakan map
let bagi = array.map(num => {
    return num/2;
});

console.log("pembagian menggunakan Map : "+bagi);

//menambah 1 data
array[5] = 1;
array.forEach(element1 => {
    console.log(element1);
});



//menampilkan multidimensi array
let array1 = [["Tomat", 20],["Anggur", 20],["Lobak", 20]];
console.log(array1[1][0]);


//membuat dan menampilkan nested object
let array2 = {
    Nama : 'orang',
    usia : 'tahun ini dikurang umur saya',
    status : {
        kawin : 'Tidak kawin',
        gender : 'helikopter',
        agama : 'sainstology',
        ras : 'alien'
    }
};

for(let data in array2){
    console.log(array2[data]);
}
for(let data1 in array2.status){
    console.log(data1);
}
