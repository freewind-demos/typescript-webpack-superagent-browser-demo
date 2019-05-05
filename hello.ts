import superagent from 'superagent';

async function run() {
  const response = await superagent.get('http://localhost:8080/data.json').send();
  const data = response.body;
  console.log(data);
}

run();
