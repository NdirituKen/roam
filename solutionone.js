const input = [
    ['04:00', '11:00'],
    ['13:00', '16:00'],
    ['06:00', '10:00'],
    ['12:30', '13:30'],
    ['02:00', '11:00']
  ];
  

  // Function to calculate the total number of late returns
  function lateReturnFnx(input) {
    let result = 0;
  
    for (const [borrowTime, returnTime] of input) {
      const borrowTimestamp = new Date(`2000-01-01T${borrowTime}:00`);
      const returnTimestamp = new Date(`2000-01-01T${returnTime}:00`);
  
      const maxReturnTimestamp = new Date(borrowTimestamp);
      maxReturnTimestamp.setHours(borrowTimestamp.getHours() + 5);
  
      if (returnTimestamp > maxReturnTimestamp) {
        result++;
      }
    }
  
    return result;
  }
  
  const lateReturns = lateReturnFnx(input);
  
  console.log(lateReturns);