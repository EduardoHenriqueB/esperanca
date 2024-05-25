import styles from "../styles/BottomBar.module.css"

export default function BottomBar(){
    return(
        <>
        

<div class="fixed bottom-0 left-0 z-50 grid w-full h-16 grid-cols-1 px-8 bg-white border-t border-gray-200 md:grid-cols-3 dark:bg-orange-800 dark:border-gray-600">
    <div class="items-center justify-center hidden text-gray-200 dark:text-gray-100 me-auto md:flex">
        <p>Quer falar com a gente? contato@placamae.org</p>
    </div>
    <div class="flex items-center justify-center mx-auto">
        <a href="https://www.instagram.com/placamae.org_/" target="_blank">
        <button data-tooltip-target="tooltip-microphone" type="button" class="p-2.5 group bg-orange-100 rounded-full hover:bg-orange-200 me-4 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-600 dark:bg-orange-600 dark:hover:bg-orange-900">
        <img src="/insta.png" className="h-6 me-0 sm:h-30 " alt="Placa Mae" />
        </button>
        </a>
        <div id="tooltip-camera" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Hide camera
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a href="https://www.linkedin.com/company/placamãe-org/" target="_blank">
        <button data-tooltip-target="tooltip-feedback" type="button" class="p-2.5 group bg-orange-100 rounded-full hover:bg-orange-200 me-4 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-600 dark:bg-orange-600 dark:hover:bg-orange-900">
        <img src="/linkedin.png" className="h-6 me-0 sm:h-30 " alt="Placa Mae" />
        </button>
        </a>

        <div id="tooltip-feedback" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Share feedback
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a href="https://www.facebook.com/placamae.org?locale=pt_BR" target="_blank"> 
        <button data-tooltip-target="tooltip-settings" type="button" class="p-2.5 group bg-orange-100 rounded-full hover:bg-orange-200 me-4 focus:outline-none focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-600 dark:bg-orange-600 dark:hover:bg-orange-900">
        <img src="/facebook.png" className="h-6 me-0 sm:h-30 " alt="Placa Mae" />
        </button>
        </a>
        <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Video settings
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button id="moreOptionsDropdownButton" data-dropdown-toggle="moreOptionsDropdown" type="button" class="p-2.5 bg-gray-100 md:hidden group rounded-full hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
            </svg>
            <span class="sr-only">Show options</span>
        </button>
        <div id="moreOptionsDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="moreOptionsDropdownButton">
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show participants</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Adjust volume</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show information</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="items-center  hidden ms-auto md:flex"><div></div>
        <p className="text-gray-200">Conheça nossa sede!</p>
        <a href="https://www.google.com/maps/place/R.+Marquês+do+Herval,+167+-+São+José,+Recife+-+PE,+50020-030/@-8.0663293,-34.88677,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18b78405967d:0xb11afd4190e0e1c4!8m2!3d-8.0663293!4d-34.8819044!16s%2Fg%2F11b8v4x_44?entry=ttu" target="_blank">
        <button data-tooltip-target="tooltip-information" type="button" class="p-2.5 group rounded-full hover:bg-orange-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-orange-600 dark:hover:bg-orange-900">
        <img src="/mapa.png" className="h-8 me-0 sm:h-30 " alt="Placa Mae" />
        </button>
        </a>
        <div id="tooltip-information" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Show information
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>

        </>
    )
}