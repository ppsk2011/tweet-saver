const axios = require("axios");
const options = {
  Authorization:
    "Bearer AAAAAAAAAAAAAAAAAAAAAKgXSAEAAAAAphwm5YUvDh5tdkTHMd1X4X8yveU%3DIIal0BUA0dEJQYrU6b74XFnFtfxAajMtYJB5YeMF9us0n2eplo",
};
return new Promise((res, rej) => {
  axios
    .get(
      "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular",
      options
    )
    .then((response) => {
      console.log(reponse);
      res(reponse);
    })
    .catch((err) => {
      console.log(err);
      rej(err);
    });
});
