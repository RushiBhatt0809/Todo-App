function Button({ children, onClick, variant = 'primary', className = '' }) {
    const base = 'px-4 py-2 rounded-lg font-medium transition cursor-pointer'

    const variants = {
        primary: 'bg-blue-500 border hover:bg-blue-600 text-white',
        outline: 'border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-gray-50',
        danger: 'bg-red-500 hover:bg-red-900 text-white',
        edit: 'bg-lime-500 text-white hover:bg-green-700',
        ghost: 'text-gray-600 hover:bg-gray-100',
    }

    return (
        <button
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button