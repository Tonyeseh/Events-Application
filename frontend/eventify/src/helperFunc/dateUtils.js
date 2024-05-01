export const getMaxDate = (sessions) => {
  let maxDate = sessions[0].startDate;
  for (const sess of sessions) {
    if (new Date(sess.startDate) > new Date(maxDate)) maxDate = sess.startDate;
  }
  return maxDate;
};

export const getMinDate = (sessions) => {
  let minDate = sessions[0].startDate;
  for (const sess of sessions) {
    if (new Date(sess.startDate) < new Date(minDate)) minDate = sess.startDate;
  }
  return minDate;
};

export const checkMaxDateMOnth = (sessions) => {
  if (
    new Date(getMaxDate(sessions)).getMonth() !==
    new Date(getMinDate(sessions)).getMonth()
  )
    return new Date(getMaxDate(sessions)).toLocaleString("en-us", {
      month: "short",
    });
  else return null;
};
