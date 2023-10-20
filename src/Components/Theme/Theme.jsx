import "../Theme/Theme.css";
import { MdDarkMode } from 'react-icons/md';
import { HiSun } from 'react-icons/hi';

const Theme = () => {

    const setDarkMode = () => {
          document.querySelector("body").setAttribute("data-theme", "dark"); 
          localStorage.setItem("selectedTheme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light"); 
        localStorage.setItem("selectedTheme", "light");
}

const selectedTheme = localStorage.getItem("selectedTheme");

if (selectedTheme === "dark") { 
    setDarkMode();
}

    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };



    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <div className="mr-4 flex justify-center gap-10 items-center">
                    
                    <span><HiSun></HiSun></span>
                    <span><MdDarkMode></MdDarkMode></span>
                </div>
            </label>
        </div>
    );
};

export default Theme;
