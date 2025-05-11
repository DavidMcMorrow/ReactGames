import './number-options.css';

export default function NumberOptions({optionsRef, selectedNumber, setSelectedNumber}) {
    const options = Array.from({ length: 9 }, (_, i) => i + 1);

    function handleSelection(value){
        if(selectedNumber === value){
            setSelectedNumber(null)
        } else{
            setSelectedNumber(value)
        }
    }
    
    return(
       <div ref={optionsRef} className='options-container'>
            {
                options.map((value) => 
                    <div className={`option-boxes ${selectedNumber === value ? 'selected' : ''}`}
                        key={value} 
                        onClick={() => handleSelection(value)}>{value}
                    </div>
                )
            }
            <div className={`option-boxes ${selectedNumber === 0 ? 'selected' : ''}`}
                key='Clear' 
                onClick={() => handleSelection(0)}>X
            </div>
            
       </div>
    );
}