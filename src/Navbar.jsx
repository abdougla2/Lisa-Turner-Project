import './Index.css'

function Navbar(){
    return(
        <div className='navBar'>
            
            <nav className="bg-purple-200 shadow dark:bg-gray-800">
            
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
   
        <a href="#" class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-black mx-1.5 sm:mx-6">home</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">about us</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">services</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">trainings</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">blog</a>
           

        <a href="https://form.jotform.com/223387762831160" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-black mx-1.5 sm:mx-6">contact us</a>
    </div>
</nav>
        </div>
    )
}

export default Navbar