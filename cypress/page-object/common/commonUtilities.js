class commonUtilities {
    /**
     * This function generate random string for specified length
     * @param {number} length length should be any number
     * @returns {string} returns random string with specified length
     */
    genericRandomText(length) {
      return Math.random()
        .toString(36)
        .slice(2, 2 + length);
    }

     /**
   * This function generates a random email address
   * @returns {string} returns a unique random email address
   */
   getRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `testuser_${randomString}@example.com`;
  }
    /**
     * This function generate random 10 digits number
     * @returns {number} returns 10 digits random number
     */
    getRandomPhoneNumber() {
      return (
        "87" +
        Math.floor(Math.random() * 100000000)
          .toString()
          .padStart(8, "0")
      );
    }
  
    /**
     * This function generate 7 digits random number
     * @returns {string} returns 7 digits random number along with 23- such as 23-1234567
     */
    getTaxId() {
      return (
        "23-" +
        Math.floor(Math.random() * 10000000)
          .toString()
          .padStart(7, "0")
      );
    }
  
    /**
     * This function calculate current quarter
     * @returns {number} returns current quarter such as 1,2,3,4
     */
    getCurrentQuarter() {
      var date = new Date();
      var quarter = Math.floor((date.getMonth() + 3) / 3);
      return quarter;
    }
  
    /**
     * This function return current year
     * @returns {number} returns current year
     */
    getCurrentYear() {
      var date = new Date();
      return date.getFullYear();
    }
  
    /**
     * This function calculate future date based on specified number of days
     * @param {number} days days should be a any number
     * @returns {string} returns future date for specified days
     */
    getFutureDate(days) {
      const today = new Date();
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + days);
      const month = (futureDate.getMonth() + 1).toString();
      const day = futureDate.getDate().toString();
      const year = futureDate.getFullYear();
      return `${month}/${day}/${year}`;
    }
  
    /**
     * This function generate today date
     * @returns {string} returns today date
     */
    getCurrentDayDate() {
      const currentDate = new Date();
      const month = (currentDate.getMonth() + 1).toString();
      const day = currentDate.getDate().toString();
      const year = currentDate.getFullYear();
      return `${month}/${day}/${year}`;
    }
  
    /**
     * This function generate yesterday date
     * @returns {string} returns yesterday date
     */
    getYesterdayDate() {
      var date = new Date();
      date.setDate(date.getDate() - 1);
      var day = date.getDate();
      var month = (date.getMonth() + 1).toString();
      var year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
  export default commonUtilities;
  