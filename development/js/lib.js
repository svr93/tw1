/* ----- DataContainer ----- */

function DataContainer(header, node) {
  this._header = header;
  this._node = node;
}

DataContainer.prototype.fillRows = function(jsonString) {
  this._rows = JSON.parse(jsonString);
};

DataContainer.prototype._createTableHeader = function(table) {

  var tr = document.createElement('tr');

  this._header.forEach(function (elem) {
    var th = document.createElement('th');
    th.innerHTML = elem.title;
    tr.appendChild(th);
  });

  table.appendChild(tr);
};

DataContainer.prototype.createTableFromRows = function() {
  
  var table = document.createElement('table');
  this._createTableHeader(table);

  if (!this._rows) return;

  this._rows.forEach(function (row) {
    var tr = document.createElement('tr');

    row.forEach(function (item) {
      var td = document.createElement('td');
      td.innerHTML = item;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
  
  if (this._node.firstChild) {
    this._node.removeChild(this._node.firstChild);
  }

  this._node.appendChild(table);
};

/* ----- TabsContainer ----- */

function TabsContainer(names, tabsNode, nameDisplayNode, contentClasses) {
  this._names = names;
  this._tabsNode = tabsNode;
  this._nameDisplayNode = nameDisplayNode;
  this._contentClasses = contentClasses;
}

TabsContainer.prototype.fillTabs = function() {

  if (this._tabsNode.firstChild) {
    this._tabsNode.removeChild(this._tabsNode.firstChild);
  }

  var self = this;

  this._names.forEach(function (item, i) {

    var div = document.createElement('div');
    div.className = 'tab';
    div.innerHTML = item;

    div.onclick = function() {
      Array.prototype.forEach.call(self._tabsNode.childNodes,
                                   function (item, j) {

        item.className = 'tab';
        self._contentClasses[j].style.display = 'none';
      });

      this.className = 'tab--active';    
      self._contentClasses[i].style.display = 'block';
      self._nameDisplayNode.innerHTML = item;
    };

    self._tabsNode.appendChild(div);
  });

  this._tabsNode.firstChild.className = 'tab--active';
  this._nameDisplayNode.innerHTML = this._names[0];
};
