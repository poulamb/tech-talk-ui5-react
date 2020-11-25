import React from "react";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import data from "../tabledata";

const Table = (props) => {
  return (
    <>
      <ui5-table
        class="demo-table"
        id="table"
        no-data-text="No Data"
        show-no-data
      >
        <ui5-table-column slot="columns" style={{ width: "12rem" }}>
          <span style={{ lineHeight: "1.4rem" }}>Product</span>
        </ui5-table-column>

        <ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
          <span style={{ lineHeight: "1.4rem" }}>Supplier</span>
        </ui5-table-column>

        <ui5-table-column
          slot="columns"
          min-width="600"
          popin-text="Dimensions"
          demand-popin
        >
          <span style={{ lineHeight: "1.4rem" }}>Dimensions</span>
        </ui5-table-column>

        <ui5-table-column
          slot="columns"
          min-width="600"
          popin-text="Weight"
          demand-popin
        >
          <span style={{ lineHeight: "1.4rem" }}>Weight</span>
        </ui5-table-column>

        <ui5-table-column slot="columns">
          <span style={{ lineHeight: "1.4rem" }}>Price</span>
        </ui5-table-column>
        {data.map((d) => (
          <TableRow {...d} />
        ))}
      </ui5-table>
    </>
  );
};

const TableRow = (props) => {
  return (
    <ui5-table-row
      ui5-table-row=""
      _tab-index="0"
      slot="default-1"
      style={{ textAlign: "left" }}
    >
      <ui5-table-cell ui5-table-cell="" first-in-row="" slot="default-1">
        <div class="double-line-content">
          <span>
            <b>{props.name}</b>
          </span>
          <span style={{ marginTop: "0.5rem" }}>{props.model}</span>
        </div>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-2">
        <span class="middle">{props.supplier}</span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-3">
        <span class="middle">{props.dim}</span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" slot="default-4">
        <span style={{ color: "#2b7c2b" }} class="middle">
          <b>{props.weight}</b>
          {props.weightUnit}
        </span>
      </ui5-table-cell>
      <ui5-table-cell ui5-table-cell="" last-in-row="" slot="default-5">
        <span class="middle">
          <b>{props.price}</b>
          {props.priceUnit}
        </span>
      </ui5-table-cell>
    </ui5-table-row>
  );
};

export default Table;
