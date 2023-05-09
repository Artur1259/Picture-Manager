const FormRadio = ({ name, label, value,onChange }) => {
return (
    <label className="flex flex-row items-center cursor-pointer">
        <div className="relative rounded-full border-2 border-gray-700  mr-4">
            <input
                type="radio"
                name={name}
                value={value}
                className="block appearance-none cursor-pointer focus:outline-none focus-visible:ring ring-gray-800 ring-opacity-50
                rounded-full border-8 border-transparent checked:border-gray-700 p-1 checked:bg-gray-400"
                onChange={(event) => onChange(event.target.value)}
               
            />
            {/* <div className="absolute inset-0 m-2 rounded-full shadow-sm"></div> */}
        </div>
        {label}
    </label>
);
}

    

export default FormRadio;

// className="block appearance-none cursor-pointer focus:outline-none focus-visible:ring ring-gray-800 ring-opacity-50
// rounded-full border-8 border-transparent checked:border-gray-700 p-1 checked:bg-gray-400"
// relative rounded-full border-2 border-gray-700  mr-4