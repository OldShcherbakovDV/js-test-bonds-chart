import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useActions } from "../../utils/redux";
import { getBondsInfo, bondsFetchInfoAction } from "../../redux/modules/bonds";

import BondChart from "./BondsChart";

const ISIN = "US67021BAE92";

const Bond = () => {
  const bondInfo = useSelector(getBondsInfo);
  const [bondsFetchInfo] = useActions(bondsFetchInfoAction);

  useEffect(() => {
    bondsFetchInfo(ISIN);
  }, []);

  const bondHeader = bondInfo ? (
    <>
      <h1>{bondInfo.title}</h1>
      <div>{bondInfo.currency}</div>
      <div>{ISIN}</div>
      <div>{bondInfo.description}</div>
    </>
  ) : null;

  return (
    <div>
      {bondHeader}
      <hr />
      <BondChart isin={ISIN} />
    </div>
  );
};

export default Bond;
