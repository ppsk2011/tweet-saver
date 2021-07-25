  export const saveCardToLocalStorage = (tweet, cardId) => {
    let stringCardsList = localStorage.getItem("cardsList");
    if (typeof (stringCardsList) === 'string' && stringCardsList.indexOf(cardId) > -1)
        return;
    let cardsList = typeof (stringCardsList) === 'string' ? JSON.parse(stringCardsList) : []
    cardsList.push(tweet);
    localStorage.setItem('cardsList', JSON.stringify(cardsList))
}

export const convertDate = (isoDate) => {
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateObj = new Date(isoDate);
    const dayNum = appendTh(dateObj.getDate());
    const monthName = monthsArray[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    const formattedDateString = `${monthName} ${dayNum}, ${year}`;
    return formattedDateString;
  }
  
  const appendTh = function (d) {
    if (d > 3 && d < 21) return `${d}th`;
    switch (d % 10) {
      case 1: return `${d}st`;
      case 2: return `${d}nd`;
      case 3: return `${d}rd`;
      default: return `${d}th`;
    }
  }

  