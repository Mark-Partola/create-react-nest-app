const { WebhookClient } = require("dialogflow-fulfillment");

module.exports = class {
  handle(request, response) {
    const agent = new WebhookClient({ request, response });

    agent.add("Hello from node!");
  }
};
