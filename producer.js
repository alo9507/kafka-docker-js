const { KafkaClient, Producer, Admin } = require('kafka-node')

const kafkaHost = 'localhost:9092'
const client = new KafkaClient({ kafkaHost })
const producer = new Producer(client);

// List topics
const admin = new Admin(client);
admin.listTopics((err, res) => {
  console.log('topics', res[1].metadata);
});

// Create a new topic
var topics = [{
    topic: 'my_new_kafka_topic',
    partitions: 2,
    replicationFactor: 2
}];
admin.createTopics(topics, (err, res) => {
    console.log("create topic response: ", res)
})

// Send 100 messages to the new topic
producer.on('ready', function () {
    for (let i = 0; i < 100; i++) {
        producer.send([{ topic: 'my_new_kafka_topic', messages: i },], function (err, data) {
            console.log(data)  
        });
      }
});

producer.on('error', function (err) { console.log(error) })
