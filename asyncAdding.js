async function asyncAdd(a, b)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            resolve(a + b);
        }
        , 0
        );
    });
}

async function addNumbers(numbers)
{
    let result = 0;
    for (let num of numbers)
    {
        result = await asyncAdd(result, num);
    }
    return result;
}

async function DoTests(numbers)
{
    let oprCount = 0;
    let startTime = Date.now();
    let result = await addNumbers(numbers);
    let endTime = Date.now();
    let operationTime = endTime - startTime;
    oprCount = numbers.length;

    alert(`Wynik = ${result} 
        <br> Iloœæ operacji: ${oprCount} 
        <br> Czas trwania operacji: ${operationTime}ms`
    );
}

function test()
{
    let numInput = document.getElementById('numInput').value;
    let numbers = numInput.split(',').map(num => parseInt(num.trim(), 10));
    DoTests(numbers);
}
function genNumb()
{
    let newNumbers = "";
    for (let i = 0; i < 100; i++)
    {
        let numb = Math.floor(Math.random() * 100);
        newNumbers += numb.toString() + ",";
    }

    document.getElementById('numInput').value = newNumbers.slice(0, -1);
}
