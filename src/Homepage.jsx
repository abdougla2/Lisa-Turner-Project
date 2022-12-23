import './Index.css'

function Homepage(){
    return(
        <div>
            <section className="bg-white-200 dark:bg-gray-900">
    <nav x-data="{ isOpen: false }" className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
            <div>
                <a id='hplogoBorder' className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">LRT Associates</a>
            </div>
        
            
            <div className="flex lg:hidden">
                <button x-cloak type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
            
                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        
        <div x-cloak className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-purple shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
           
        </div>
    </nav>

    <div className="">
        <div className="max-w-lg mx-auto">
             
            <div className="backgroundText">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Bridging The Gap Between Black Women and Entrepreneurship</h1>
                <p id= "quote" className="mt-6 dark:text-gray-300"> {/* This needs to be reworded or else it's plagiarism */} "Women in Entrepreneurship's goal is to enhance the knowledge and provide the opportunities for women to develop their entrepreneurial skills"</p>
           
            </div>
           
        </div>
            
        <div id="bannerPic"className="flex justify-center mt-10">
            
            <img className=" h-100 w-full" src="./hero_cropped (1).png" />
        </div>
  </div>
</section>
        </div>
    )
}

export default Homepage