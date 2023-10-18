import React from 'react';

function StaticTable() {
  return (
    <div>
      <h2 align="center">Discount  Table</h2>
      <table bgcolor='black'align='center' width="1300px">
        <thead>
          <tr bgcolor="grey" color="white" >
            <th>Vendor</th>
            <th>Trade A</th>
            <th>Trade B</th>
            <th>Trade C</th>
            <th>Trade D</th>
          </tr>
        </thead>
        <tbody>
          <tr bgcolor="white" >
            <td>Vendor 1</td>
            <td>12</td>
            <td>12</td>
            <td>n/a</td>
            <td>6</td>
          </tr>
          <tr bgcolor="white">
            <td>Vendor 2</td>
            <td>10</td>
            <td>15</td>
            <td>8</td>
            <td>7</td>
          </tr>
          <tr bgcolor="white">
            <td>Vendor 3</td>
            <td>18</td>
            <td>10</td>
            <td>9</td>
            <td>5</td>
          </tr>
          <tr bgcolor="white">
            <td>Vendor 4</td>
            <td>15</td>
            <td>14</td>
            <td>12</td>
            <td>11</td>
          </tr>
          <tr bgcolor="white">
            <td width={100}>Vendor 5</td>
            <td width={100}>9</td>
            <td width={100}>8</td>
            <td width={100}>7</td> 
            <td width={100}>15</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default StaticTable;
