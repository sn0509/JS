let year = parseInt(prompt("Enter the year"));
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      alert("Đây là năm nhuận");
    } else {
      alert("Đây không phải là năm nhuận");
    }
  } else {
    alert("Đây là năm nhuận");
  }
} else {
  alert("Đây không phải là năm nhuận");
}
