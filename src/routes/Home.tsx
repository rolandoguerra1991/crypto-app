import { useCrypto } from "../hooks/useCrypto";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import CryptoImage from "../components/CryptoImage";
import CryptoNameLabel from "../components/CryptoNameLabel";

import "../assets/css/home.css";

export default function Home() {
  const { cryptoList } = useCrypto();
  return (
    <>
      <DataTable
        className="border-1 border-solid border-gray-300"
        value={cryptoList}
        responsiveLayout="scroll"
        stripedRows
        rowHover
      >
        <Column
          className="w-1rem h-1rem"
          field="image"
          header="Image"
          body={CryptoImage}
        ></Column>
        <Column field="name" header="Crypto" body={CryptoNameLabel}></Column>
      </DataTable>
    </>
  );
}
