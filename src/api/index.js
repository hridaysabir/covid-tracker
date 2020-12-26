import axios from 'axios';
const url = "https://api.covid19india.org/v4/data.json";
const miscUrl = "https://api.covid19india.org/misc.json"

export const fetchData = async () => {
    try {
      const {
        data: { stateCode, delta, meta, total },
      } = await axios.get(url);
      return {
        stateCode,
        delta,
        meta,
        total,
      };
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchDailyData = async (stateCode) => {
    try {
      const { data } = await axios.get(url);
      const modifiedData = data.map((dailyData) => ({
        stateCode: stateCode,
        confirmed: dailyData.total.confirmed,
        deceased: dailyData.total.deceased,
        date: dailyData.meta.last_updated,
      }));
      return modifiedData;
    } catch (error) {}
  };

  export const fetchDistricts = async () => {
    try {
      const {
        data: { districts },
      } = await axios.get(miscUrl);
      return districts.map((district) => district.district);
    } catch (error) {
      console.log(error);
    }
  };