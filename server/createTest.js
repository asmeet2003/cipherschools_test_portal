require('dotenv').config();  
const mongoose = require('mongoose');
const Question = require('./models/Question');
const Test = require('./models/Test');  

async function createQuestionsAndTest() {
  try {
    
    console.log('MONGO_URI:', process.env.MONGO_URI);
    
  
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

     
    const question1 = new Question({
      text: 'What is the capital of France?',
      options: [
        { text: 'Paris' },
        { text: 'London' },
        { text: 'Berlin' },
        { text: 'Madrid' }
      ],
      marks: 5,
      correctAnswer: 0   
    });
    await question1.save();

    
    const question2 = new Question({
      text: 'What is 2 + 2?',
      options: [
        { text: '3' },
        { text: '4' },
        { text: '5' },
        { text: '6' }
      ],
      marks: 3,
      correctAnswer: 1   
    });
    await question2.save();

 
    const newTest = new Test({
      title: 'Sample Test',
      description: 'A test containing basic questions',
      questions: [question1._id, question2._id]   
    });
    await newTest.save();

    console.log('Test created successfully:', newTest);

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error creating test:', error);
  }
}

createQuestionsAndTest();
