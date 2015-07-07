function PeopleDataContainer() {
  DataContainer.apply(this, arguments);
}

PeopleDataContainer.prototype = Object.create(DataContainer.prototype);

PeopleDataContainer.prototype.createTableFromRows = function() {
  
  var table = document.createElement('table');
  this._createTableHeader(table);

  if (!this._rows) return;

  this._rows.forEach(function (row) {
    var tr = document.createElement('tr');

    row.slice(0, row.length - 1).forEach(function (item) {
      var td = document.createElement('td');
      td.innerHTML = item;
      tr.appendChild(td);
    });

    var linksTd = document.createElement('td');
    var item = row[row.length - 1];
    linksTd.innerHTML = item.length < 4 ? item : item.slice(0, 3) + '...';
    tr.appendChild(linksTd);

    table.appendChild(tr);
  });
  
  if (this._node.firstChild) {
    this._node.removeChild(this._node.firstChild);
  }

  this._node.appendChild(table);
};
