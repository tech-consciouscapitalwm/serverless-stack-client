export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_NcIWznjOuzYwsA00k4OKIpm400mkyzu2aP",
  s3: {
    REGION: "us-east-1",
    BUCKET: "ccas-notes"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sbptocki2f.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zvTsJxwOY",
    APP_CLIENT_ID: "5lv3ehf4h3bvj8tdpardn79sen",
    IDENTITY_POOL_ID: "us-east-1:bb8d9484-2d9a-429f-ad80-1516d7695c82"
  }
};
