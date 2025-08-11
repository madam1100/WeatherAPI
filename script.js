async function FirstfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=pristina');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p  class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

window.addEventListener('load', function() {
    FirstfetchAPI();
});

const live = document.getElementById('live').addEventListener('click', function () {
    FirstfetchAPI();
});

async function SecondfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=chicago');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const chicago = document.getElementById('chicago').addEventListener('click', function () {
    SecondfetchAPI();
});

async function ThirdfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=london');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const london = document.getElementById('london').addEventListener('click', function () {
    ThirdfetchAPI();
});

async function FourthfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=dubai');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const dubai = document.getElementById('dubai').addEventListener('click', function () {
    FourthfetchAPI();
});

async function FifthfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=rome');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const rome = document.getElementById('rome').addEventListener('click', function () {
    FifthfetchAPI();
});

async function SixthfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=paris');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const paris = document.getElementById('paris').addEventListener('click', function () {
    SixthfetchAPI();
});

async function SeventhfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=ljubljana');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const ljubljana = document.getElementById('ljubljana').addEventListener('click', function () {
    SeventhfetchAPI();
});

async function EighthfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=zagreb');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const zagreb = document.getElementById('zagreb').addEventListener('click', function () {
    EighthfetchAPI();
});

async function NinethfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=tirana');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const tirana = document.getElementById('tirana').addEventListener('click', function () {
    NinethfetchAPI();
});

async function TenthfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=frankfurt');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const frankfurt = document.getElementById('frankfurt').addEventListener('click', function () {
    TenthfetchAPI();
});

async function EleventhfetchAPI () {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=amsterdam');
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const weatherInfoHTML = `
                    <p class="p1">City: ${data.location.name}</p>
                    <p class="p2">Region: ${data.location.region}</p>
                    <p class="p3">Country: ${data.location.country}</p>
                    <p class="p4">Temperature: ${data.current.temp_c}°C</p>
                    <p class="p5">Weather: ${data.current.condition.text}</p>
                    <p class="p6">Local Time: ${data.location.localtime}</p>
                `;
                console.log(weatherInfoHTML);
                const print = document.getElementById('print');
                print.innerHTML = weatherInfoHTML;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const amsterdam = document.getElementById('amsterdam').addEventListener('click', function () {
    EleventhfetchAPI();
});

// async function TwelwthfetchAPI () {
//     try {
//         const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e5b312dce4b24444ba5203536240507&q=dublin');
//         if (!response.ok) {
//             throw new Error ('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         const weatherInfoHTML = `
//                         <p class="p1">Qyteti: ${data.location.name}</p>
//                         <p class="p2">Regjioni: ${data.location.region}</p>
//                         <p class="p3">Shteti: ${data.location.country}</p>
//                         <p class="p4">Temperatura: ${data.current.temp_c}°C</p>
//                         <p class="p5">Moti: ${data.current.condition.text}</p>
//                         <p class="p6">Ora Lokale: ${data.location.localtime}</p>
//                     `;
//                 console.log(weatherInfoHTML);
//                 const print = document.getElementById('print');
//                 print.innerHTML = weatherInfoHTML;
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// };

// const dublin = document.getElementById('dublin').addEventListener('click', function () {
//     TwelwthfetchAPI();
// });