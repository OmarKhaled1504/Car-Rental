renderTableHeader() {
   let header = Object.keys(this.state.students[0])
   return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
   })
}

render() {
   return (
      <div>
         <h1 id='title'>React Dynamic Table</h1>
         <table id='students'>
            <tbody>
               <tr>{this.renderTableHeader()}</tr>
               {this.renderTableData()}
            </tbody>
         </table>
      </div>
   )
}