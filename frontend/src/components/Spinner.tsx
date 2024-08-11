import  Triangle   from 'react-loader-spinner';
export const Spinner = ()=>{
    return (
        <div>
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                aria-label="triangle-loading"
                wrapper-style={{}}
                wrapper-class="" type={'Audio'}            /> 
        </div>
    )
} 