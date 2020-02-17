module.exports = {
  TEAMS: (() => {
    return [
      {
        name: "Labs Team",
        channel: process.env.LABS_CHANNEL
      },
      {
        name: "Product Team",
        channel: process.env.PRODUCT_ORG_CHANNEL
      },
      {
        name: "Test Team",
        channel: process.env.TEST_CHANNEL
      }
    ];
  })()
};
