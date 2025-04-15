class App {
    static async main() {
        const listOptions = document.querySelectorAll(`#main-menu a`);
        console.log(listOptions);
        listOptions.forEach(item => item.addEventListener('click', App.#mainMenu))

        const logo = document.querySelector('.logo'); // home
        if (logo) {
            logo.addEventListener('click', App.#redirectToHomePage);
        }
        else{
            console.error('logo no encontrado')
        }
            
    }

    static #redirectToHomePage = (e) =>{
        e.preventDefault();
        console.log('Clic en el logo, redirigiendo a home.html');
        App.loadPage('../html/about.html', `main`);
    }

    static #mainMenu = async e => {
        let option =`ninguna`;
        console.log(e.target.text)
        if (e !== undefined) {
            e.preventDefault();
            option = e.target.text;
            console.log(option)
        }

        switch (option) {
            case "Contact":
                App.loadPage('../html/contacto.html', `main`).then(()=> {
                    AppContact.main()
                })
                break;
                case "About":
                    App.loadPage('../html/about.html', `main`);
                break;
            default:
                break;
        }
    }

    //Json
    static async fetchJSON(url) {
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Error de acceso al recurso ${response.status} - ${response.statusText}`);
            }
            return await response.json()
        } catch (error) {
            console.error('No se pudieron recuperar los datos:', error);
        }
    }

    //Cargar páginas
    static async loadPage(url, container = null) {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}, al intentar acceder al recurso ${response.url}`);
            }
            const html = await response.text()
            const element = document.querySelector(container)
            if (element) {
                element.innerHTML = html
                if (url.includes('../html/about.html')) {
                    // Espera a que Swiper se cargue
                    await App.loadScript('https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js');
                    // Ahora inicializa Swiper
                    var swiper = new Swiper(".mySwiper-1", {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                    console.log("Swiper inicializado después de cargar el HTML");
                
            }
        }
            
            return element || html
        }
        catch(e) {
            console.log(e)
        }

    }

    // Método para cargar scripts porque el slider daba error :D
static async loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Error cargando el script: ${src}`));
        document.head.appendChild(script);
        });
    }
}

App.main();

class AppContact {
    static departamentos = new Array()
    static dpto = new Array()
    static ciudades = new Array()

    static async main(){
        AppContact.departamentos = await AppContact.fetchJSON("https://raw.githubusercontent.com/proyecto26/colombia/refs/heads/master/departments.json");
        AppContact.ciudades = await AppContact.fetchJSON("https://raw.githubusercontent.com/proyecto26/colombia/refs/heads/master/cities.json"); 
        
        const selectDeptos = document.querySelector('#deptos');
        const selectCities = document.querySelector('#cities');
        
        let deptos = '';
        AppContact.departamentos.data.forEach(element => {
            deptos += `<option value="${element.id}">${element.name}</option>`
        });
        selectDeptos.innerHTML = `${deptos}`

        selectDeptos.addEventListener('change', e => {
            let cities = ''
            AppContact.ciudades.data.forEach(element => {
                if (element.departmentId == e.target.value) {
                    console.log(element.name)
                    cities += `<option value="${element.id}">${element.name}</option>`
                }
                selectCities.innerHTML = `${cities}`
            });
        })

        selectDeptos.dispatchEvent(new Event('change'))
    }

    static async fetchJSON(url) {
        try {
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`Error de acceso al recurso ${response.status} - ${response.statusText}`);
            }
            return await response.json()
        } catch (error) {
            console.error('No se pudieron recuperar los datos:', error);
        }
    }
}






