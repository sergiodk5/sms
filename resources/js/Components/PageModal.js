import React from "react";

const PageModal = ({ closeModal, children }) => {
    const handleClick = () => {
        closeModal(true);
    };
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 py-12 overflow-x-hidden overflow-y-auto">
            <span
                className="absolute top-5 right-5 cursor-pointer"
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageModal;
