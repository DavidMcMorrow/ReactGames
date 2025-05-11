import './number-options.css';

export default function NumberOptions({optionsRef, selectedNumber, setSelectedNumber}) {
    const options = Array.from({ length: 9 }, (_, i) => i + 1);

    function handleSelection(value){
        if(selectedNumber === value){
            setSelectedNumber(0)
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
       </div>

    );
}