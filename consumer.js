const { KafkaClient, Consumer } = require('kafka-node')

const kafkaHost = 'localhost:9092'
const client = new KafkaClient({ kafkaHost })

consumer = new Consumer(
    client,
    [
        { topic: 'my_new_kafka_topic', partition: 0 }
    ],
    {
        autoCommit: false
    }
);

consumer.on('message', function (message) {
    console.log(message);
});

consumer.on('error', function (error) {
    console.log(error);
});