import Image1 from '../../../image/льввів.png'
import Image2 from '../../../image/Zaporizhya3.png'
import Image3 from '../../../image/дніпро.png'
import Image4 from '../../../image/іванофр.png'
import Image5 from '../../../image/київ.png'
import Image6 from '../../../image/берлін.png'
import Image7 from '../../../image/відень.png'
import Image8 from '../../../image/прага.png'
import Image9 from '../../../image/краків.png'
import Image10 from '../../../image/варщава.png'
const handle = () =>{
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
    });
}
export const train = {
    routeList: [{
        image:Image1,
        startPoint: 'Київ',
        endPoint: 'Львів',
        route:'Київ - Львів',
        handle: handle
    },
    {
        image:Image2,
        startPoint: 'Львів',
        endPoint: 'Запоріжжя',
        route:'Львів - Запоріжжя',
        handle: handle
    },
    {
        image:Image3,
        startPoint: 'Київ',
        endPoint: 'Дніпро',
        route:'Київ - Дніпро',
        handle: handle
    },
    {
        image:Image4,
        startPoint: 'Київ',
        endPoint: 'Івано-Франківськ',
        route:'Київ - Івано-Франківськ',
        handle: handle
    },
    {
        image:Image5,
        startPoint: 'Львів',
        endPoint: 'Київ',
        route:'Львів - Київ',
        handle: handle
    }]
}
export const bus = {
    routeList: [
        {
            image: Image10,
            startPoint: 'Львів',
            endPoint: 'Варшава',
            route: 'Львів - Варшава',
            handle: handle
        },
        {
            image: Image6,
            startPoint: 'Київ',
            endPoint: 'Берлін',
            route: 'Київ - Берлін',
            handle: handle
        },
        {
            image: Image7,
            startPoint: 'Київ',
            endPoint: 'Відень',
            route: 'Київ - Відень',
            handle: handle 
        },
        {
            image: Image8,
            startPoint: 'Ужгород',
            endPoint: 'Прага',
            route: 'Ужгород - Прага',
            handle: handle 
        },
        {
            image: Image9,
            startPoint: 'Київ',
            endPoint: 'Краків',
            route: 'Київ - Краків',
            handle: handle
        }],
    routeListUkraine: [
        {
            image: 'Image11',
            startPoint: 'Одеса',
            endPoint: 'Львів',
            route: 'Одеса - Львів',
            handle: handle // Замість handle введіть відповідний обробник, якщо потрібно
        },
        {
            image: 'Image12',
            startPoint: 'Запоріжжя',
            endPoint: 'Харків',
            route: 'Запоріжжя - Харків',
            handle: handle // Замість handle введіть відповідний обробник, якщо потрібно
        },
        {
            image: 'Image13',
            startPoint: 'Львів',
            endPoint: 'Ужгород',
            route: 'Львів - Ужгород',
            handle: handle // Замість handle введіть відповідний обробник, якщо потрібно
        },
        {
            image: 'Image14',
            startPoint: 'Харків',
            endPoint: 'Дніпро',
            route: 'Харків - Дніпро',
            handle: handle // Замість handle введіть відповідний обробник, якщо потрібно
        },
        {
            image: 'Image15',
            startPoint: 'Київ',
            endPoint: 'Одеса',
            route: 'Київ - Одеса',
            handle: handle // Замість handle введіть відповідний обробник, якщо потрібно
        }
    ]
}
export const airplane = {
    routeList: [
        {
            image:Image4,
            route:'Київ - Івано-Франківськ'
        },
        {
            image:Image3,
            route:'Київ - Дніпро'
        },
        
        {
            image:Image2,
            route:'Львів - Запоріжжя'
        },
        {
            image:Image5,
            route:'Львів - Київ'
        },
        {
            image:Image1,
            route:'Київ - Львів'
        }]
}