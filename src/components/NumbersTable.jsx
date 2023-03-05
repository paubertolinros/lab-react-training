import React from 'react';

const NumbersTable = ({limit}) => {
  const numArr = [];
  for (let i = 1; i < limit + 1; i++) {
    numArr.push(i)
  };

  return (
    <section className="section-table">
      <table>
        <tbody>
          <tr>
            {numArr.map((elem, i) => {
              return (
                <td key={i} className={elem % 2 === 0 ? "red" : "white"}>
                  {elem}
              </td>
            )
            })}
            </tr>
          </tbody>
        </table>
    </section>
  )
}

export default NumbersTable;