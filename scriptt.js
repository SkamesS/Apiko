 let stud = [
        {firstName: 'Maks',   lastName:  'Kovtsun',  ratting:  '90'},
        {firstName: 'Taras',  lastName:  'Seneyko',  ratting:  '85'},
        {firstName: 'Ivan',   lastName:  'Sergeev',  ratting:  '98'},
        {firstName: 'Taras',  lastName:  'Kyhar',    ratting:  '88',},
        {firstName: 'Vital',  lastName:  'Payk',     ratting:  '84',},
        {firstName: 'Tanya',  lastName:  'Marninen', ratting:  '82',},
        {firstName: 'Oleg',   lastName:  'Oprishko', ratting:  '93',},
        {firstName: 'Sasha',  lastName:  'Masnik',   ratting:  '75',},
        {firstName: 'Nazar',  lastName:  'Ivanow',   ratting:  '60',},
    ]

    const sortObj = (arr, poz) => {
        let compare = (a, b) => a[poz] > b[poz] ? 1 : a[poz] == b[poz] ? 0 : -1;
        arr.sort(compare);
    }

    const compare = (arr, key, callback) => arr.reduce((prev, curr) =>
        (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const rateMin = compare(stud, 'ratting', (a, b) => a < b);
    const rateMax = compare(stud, 'ratting', (a, b) => a > b);


    function ser () {
        let sum=0;
        for (const key in stud){
            sum += +stud[key].ratting;
        };
        let ser = Math.ceil(sum/stud.length);
        return ser.toString();
    }

    function rate (){
        for (const key in stud) {
            let value;
            value = Math.round(((rateMax/stud[key].ratting)*100)-100);
            stud[key].rate = value;
        }
    }
	//Sorting
    sortObj(stud, 'firstName');
    console.log(stud);
    console.log('\n')
    sortObj(stud, 'lastName');
    console.log(stud);
    console.log('\n')
    sortObj(stud, 'ratting');
    console.log(stud);
    console.log('\n');
	//

    console.log('Мінімальне та Максимальне значення'+'\n'+`Min: ${rateMin}, Max: ${rateMax}`);
    console.log(stud.find(x => x.ratting === ser()));
    console.log(stud.find(x => x.ratting === rateMin));
    console.log(stud.find(x => x.ratting === rateMax));

    rate();
    console.log('\n'+'Добавлення поля rate: ')
    console.log(stud);