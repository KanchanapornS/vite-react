const FormateDate = ({children}) => {
    return (
        <div>
            <span className={`text-sm ${isMouseEnter['exp1'] ? "text-primaryTitle" : ""}`}>2022-2023
            {children}
            </span>
        </div>
    )
}

export default FormateDate;