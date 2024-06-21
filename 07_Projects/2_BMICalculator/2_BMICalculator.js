const form = document.querySelector('form');

    form.addEventListener('submit', function (e) 
    {
      e.preventDefault();

      const height = parseInt(document.querySelector('#height').value);
      const weight = parseInt(document.querySelector('#weight').value);
      const results = document.querySelector('#results');

      if (isNaN(height) || height <= 0 || height === '') 
      {
        results.innerHTML = 'Please give a valid height';
      } 
      
      else if (isNaN(weight) || weight <= 0 || weight === '') 
      {
        results.innerHTML = 'Please give a valid weight';
      } 
      
      else 
      {
        //show results
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
      }
    });