import './cell.css';

export default function Cell({rowIndex, colIndex, value, originalBoard, selectedCell, onClick}){
    const borderClasses = [
        (colIndex === 2 || colIndex === 5) && 'right-border-thick',
        (colIndex === 3 || colIndex === 6) && 'left-border-thick',
        (rowIndex === 2 || rowIndex === 5) && 'bottom-border-thick',
        (rowIndex === 3 || rowIndex === 6) && 'top-border-thick',
        rowIndex === 0 && 'top-border-strong',
        rowIndex === 8 && 'bottom-border-strong',
        colIndex === 0 && 'left-border-strong',
        colIndex === 8 && 'right-border-strong',
    ].filter(Boolean);
    
    const isEditable = originalBoard === 0;

    const isSelected = selectedCell.row === rowIndex && selectedCell.col === colIndex;

    const classes = [
        'cell',
        isEditable ? 'editable' : 'readonly',
        isSelected ? 'selected' : '',
        ...borderClasses,
    ].join(' ').trim();

    const handleSelection = () => {
        if (isEditable) onClick({row: rowIndex, col: colIndex});
    }

    return (
        <div className={classes} onClick={handleSelection}>
            {value !== 0 ? value : ''}
        </div>
    );
}