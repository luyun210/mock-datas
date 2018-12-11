'use strict';

const BaseController = require('./base.js');

class TableController extends BaseController {
  async getDatas() {
    const {
      column1 = '',
      column2 = '',
      column3 = '',
      column4 = '',
      column5 = '',
      page = 1,
      pageSize = 10,
    } = this.ctx.query;
    const datas = {
      data: [],
      columns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          type: 'number',
          display: true,
        },
        { title: 'column 1', dataIndex: 'column1', key: 'column1', display: true },
        {
          title: '业务来源',
          dataIndex: 'column2',
          key: 'column2',
          type: 'string',
          display: true,
        },
        {
          title: '运输方式',
          dataIndex: 'column3',
          key: 'column3',
          type: 'enum',
          display: true,
        },
        { title: 'column 4', dataIndex: 'column4', key: 'column4' },
        { title: 'column 5', dataIndex: 'column5', key: 'column5' },
        {
          title: '操作',
          width: 100,
          key: 'action',
        },
      ],
      pageInfo: {
        page,
        total: 100,
        pageSize,
      },
    };
    const begin = (page) * pageSize;
    const end = (parseInt(page) + 1) * pageSize;

    for (let index = begin; index < end; index++) {
      const data = {
        id: index,
        column1: this.renderColumnData('column1', index, column1),
        column2: this.renderColumnData('column2', index, column2),
        column3: this.renderColumnData('column3', index, column3),
        column4: this.renderColumnData('column4', index, column4),
        column5: this.renderColumnData('column5', index, column5),
      };

      datas.data.push(data);
    }

    this.ctx.body = this.format(datas);
  }

  renderColumnData(column, index, data) {
    if (!data) {
      return `${column}-${index}`;
    }
    return `${data}-${index}`;

  }
}

module.exports = TableController;
