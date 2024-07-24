function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const n = customers.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return console.log(customers);
}

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
sortCustomerName(customers);
// correct answer = [ "Arthit", "Napasorn", "Pimchanok", "Somchai", "Suchada"]

// ตอบคำถามตรงนี้จ้า
// BigO = n² เพราะเป็น loop ซ้อน loop จำนวนรอบประมาณ length x length = length² 