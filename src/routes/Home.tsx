import { useCrypto } from "../hooks/useCrypto";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from 'primereact/paginator';
import { useEffect } from "react";
import CryptoImage from "../components/CryptoImage";
import CryptoNameLabel from "../components/CryptoNameLabel";
import CryptoPriceLabel from "../components/CryptoPriceLabel";

export default function Home() {
  const { cryptoList, fetchMarket } = useCrypto();

  useEffect(() => {
    fetchMarket();
  }, []);

  return (
    <>
      <DataTable
        className="border-1 border-solid border-gray-300"
        value={cryptoList}
        responsiveLayout="scroll"
        stripedRows
        rowHover>
        <Column
          className="w-1rem h-1rem"
          field="image"
          header="Image"
          body={CryptoImage}>
        </Column>
        <Column
          field="name"
          header="Crypto"
          body={CryptoNameLabel}>
        </Column>
        <Column
          field="high_24h"
          header="High 24h"
          body={({ high_24h }) => <CryptoPriceLabel price={high_24h} lowOrHigh='high' />}>
        </Column>
        <Column
          field="low_24h"
          header="Low 24h"
          body={({ low_24h }) => <CryptoPriceLabel price={low_24h} lowOrHigh='low' />}>
        </Column>
      </DataTable>
    </>
  );
}
