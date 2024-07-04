const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const lowerCaseCarBrand = carBrand.toLowerCase(); // แปลงเป็นตัวพิมพ์เล็กเพื่อเป็นไปตามที่อยู่ใน Array

  if (!carCollection.includes(lowerCaseCarBrand)) {
    carCollection.push(lowerCaseCarBrand);
    return `New car collection is: ${carCollection.join(',')}.`;
  } else {
    const position = carCollection.indexOf(lowerCaseCarBrand) + 1;
    return `${carBrand} already exists in position ${position} of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.