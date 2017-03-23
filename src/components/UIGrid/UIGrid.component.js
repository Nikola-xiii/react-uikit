import React, {Component, PropTypes} from 'react';
import UIButton from '../UIButton';

const GridHead = ({headers}) => {
  return(
    <tbody>
      <tr>{headers.map((header, index) =>
        <th key={index}>
          {header.sortable && <i className="material-icons">arrow_downward</i>}
          <span>{header.name}</span>
        </th>)}
      </tr>
    </tbody>
  )
};

const GridRow = ({row, headers, index, columns}) => {
  if(row) {
    return(
      <tr key={index}>
        {headers.map((header, i) => <GridCell index={i} value={row[header.key]} type={header.type}/>)}
      </tr>
    )
  }

  if(columns) {
    let rowElement = columns.id.map((id, index) => <tr>
      {headers.map((header, i) => <GridCell value={columns[header.key][index]} type={header.type}/>)}
    </tr>);

    return (
      <tbody>{rowElement}</tbody>
    );
  }
};

const GridCell = ({value, type, index}) => {
  if(type === 'text')
    return(<td key={index}>{value}</td>);
  if(type === 'link')
    return(<td key={index}><a href={value}>{value}</a></td>);
  if(type === 'action')
    return(<td key={index}><UIButton icon={value.icon} type="icon"/></td>);
};

class UIGrid extends Component {
  render() {
    return(
      <table className="uikit-grid">
        <GridHead headers={this.props.settings.headers}/>
        {this.props.gridDataRows && <tbody>
          {this.props.gridDataRows.map((row, index) =>
            <GridRow key={index} row={row} headers={this.props.settings.headers}/>
          )}
        </tbody>}
        {this.props.gridDataColumns &&
          <GridRow columns={this.props.gridDataColumns} headers={this.props.settings.headers}/>}
      </table>
    )
  }
}

UIGrid.PropTypes = {
  gridDataRows: PropTypes.array,
  gridDataColumns: PropTypes.object,
  settings: PropTypes.object.isRequired
};

export default UIGrid;
