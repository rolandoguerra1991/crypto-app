import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  setCryptoList,
  setLoading,
  setPriceChangePercentage,
} from "../slices/cryptoSlice";

export const useCrypto = () => {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";
  const dispatch = useDispatch();
  const cryptoList = useSelector((state: RootState) => state.crypto.cryptoList);
  const loading = useSelector((state: RootState) => state.crypto.loading);
  const cryptoDetails = useSelector(
    (state: RootState) => state.crypto.cryptoDetails
  );
  const vsCurrency = useSelector((state: RootState) => state.crypto.vsCurrency);
  const orderBy = useSelector((state: RootState) => state.crypto.orderBy);
  const perPage = useSelector((state: RootState) => state.crypto.perPage);
  const page = useSelector((state: RootState) => state.crypto.page);
  const priceChangePercentage = useSelector(
    (state: RootState) => state.crypto.priceChangePercentage
  );

  const orderByOptions: any[] = [
    { label: "Market Cap", value: "market_cap_desc" },
    { label: "Market Cap Asc", value: "market_cap_asc" },
    { label: "Market Cap Desc", value: "gecko_desc" },
    { label: "Market Cap Desc", value: "gecko_asc" },
    { label: "Market Cap Desc", value: "volume_asc" },
    { label: "Market Cap Desc", value: "volume_desc" },
    { label: "Market Cap Desc", value: "id_asc" },
    { label: "Market Cap Desc", value: "id_desc" },
  ];

  const priceChangePercentageOptions: any[] = [
    { label: "1H", value: "1h" },
    { label: "24H", value: "24h" },
    { label: "7D", value: "7d" },
    { label: "14D", value: "14d" },
    { label: "30D", value: "30d" },
    { label: "200D", value: "200d" },
    { label: "1Y", value: "1y" },
  ];

  const onSelectPriceChangePercentage = (event: any) => {
    dispatch(setPriceChangePercentage(event.value));
  };

  const fetchMarket = async () => {
    dispatch(setLoading(true));
    await axios
      .get(
        `${BASE_URL}?vs_currency=${vsCurrency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=${priceChangePercentage}`
      )
      .then((resp) => {
        dispatch(setCryptoList(resp.data));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

  return {
    cryptoList,
    loading,
    cryptoDetails,
    vsCurrency,
    orderBy,
    perPage,
    page,
    priceChangePercentage,
    orderByOptions,
    priceChangePercentageOptions,
    onSelectPriceChangePercentage,
    fetchMarket
  };
};
