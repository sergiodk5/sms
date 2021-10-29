export const TabList = ({name, setActive, title, active}) => {
    return (
        <li className="-mb-px mr-1">
            <span
                onClick={(e) => setActive(name)}
                className={`inline-block py-2 px-4 hover:text-purple-500 focus:outline-none ${
                    name === active
                        ? "bg-white border-l border-t border-r rounded-t font-semibold hover:text-blue-darker"
                        : "bg-gray-50"
                }`}
            >
                {title}
            </span>
        </li>
    );
}

export const TabContent = ({tab, active, children}) => {
    return (
        <div
            className={`${
                tab === active ? "" : "hidden"
            } bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-b-lg px-4 py-5 sm:p-6`}
        >
            {children}
        </div>
    );
}


