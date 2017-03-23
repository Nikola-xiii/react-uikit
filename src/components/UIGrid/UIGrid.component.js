import React, {Component, PropTypes} from 'react';
import UIButton from '../UIButton';

const GridHead = ({headers}) => {
  return(
    <thead>
      <tr>{headers.map((header, index) =><th key={index}>{header.name}</th>)}</tr>
    </thead>
  )
};

const GridRow = ({row, headers, index}) => {
  return(
    <tr key={index}>
      {headers.map((header, index) =><GridCell row={row} valueKey={header.key} type={header.type}></GridCell>)}
    </tr>
  )
};

const GridCell = ({row, valueKey, type}) => {
  if(type === 'text')
    return(<td>{row[valueKey]}</td>);
  if(type === 'link')
    return(<td><a href={row[valueKey]}>{row[valueKey]}</a></td>);
  if(type === 'action')
    return(<td><UIButton icon={row[valueKey].icon} type="icon"></UIButton></td>);
};

class UIGrid extends Component {
  render() {
    return(
      <table className="uikit-grid">
        <GridHead headers={this.props.settings.headers}></GridHead>
        <tbody>
        {this.props.gridDataRows.map((row, index)=>
          <GridRow key={index} row={row} headers={this.props.settings.headers}></GridRow>
        )}
        </tbody>
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
