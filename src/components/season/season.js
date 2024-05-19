import { useState, useEffect } from 'react';

const Season = (props) => {
  const [season, setSeason] = useState("winter");

  const today = new Date();
  const thisyear = today.getFullYear();
  const dateString = (date) => {
      return new Date(date + thisyear);
  }
  let seasonString = "winter";
  const winter = dateString("03/21/");
  const fall = dateString("12/21/");
  const summer = dateString("9/21/");
  const spring = dateString("06/21/");

  if (today >= winter && today <= spring) seasonString = "spring";
  if (today >= spring && today <= summer) seasonString = "summer";
  if (today >= summer && today <= fall) seasonString = "fall";
  if (today >= fall || today <= winter) seasonString = "winter";

  useEffect(() => {
    setSeason(seasonString);
    document.querySelector("body").setAttribute('class', `${season}`);
    document.querySelector(":root").style.setProperty('--themeSeason', `"${season}"`);
  }, [seasonString, season]);
}
export default Season;