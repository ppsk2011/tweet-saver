import axios from 'axios'

const options = {
    headers: {
      Authorization:
        "Bearer AAAAAAAAAAAAAAAAAAAAAKgXSAEAAAAAphwm5YUvDh5tdkTHMd1X4X8yveU%3DIIal0BUA0dEJQYrU6b74XFnFtfxAajMtYJB5YeMF9us0n2eplo",
    }
  };
export const getTweets=(searchString,count)=>{
    const url= `https://api.twitter.com/1.1/search/tweets.json?q=${searchString}&result_type=popular&count=${count}`
    return axios.get(url,options)
}