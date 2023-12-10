export function RowElement(){
    return(
        <tr>
        <td>1</td>
        {Array.from({ length:numRows}).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>

    )
}