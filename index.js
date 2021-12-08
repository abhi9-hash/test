import Express from 'express';
import mongoose from 'mongoose';
import Story from './models/storyModel.js';
// import messageRouter from './routes/messageRouter.js';
// import friendsRouter from './routes/friendsRouter.js';
import storyRouter from './routes/storyRouter.js';

const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }));

mongoose.connect( "mongodb+srv://abhinav:abhinav@cluster0.qzukv.mongodb.net/UserService?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log('DB Connected'))
  .catch((err)=>console.log(err));

// app.use('/message', messageRouter);
app.use('/story', storyRouter);
// app.use('/friends', friendsRouter);
app.get('/',(req,res)=>{                       
    res.send('server has started')
    });
    
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    });
app.listen(5000,async()=>{ 
    console.log('running port 5000');
    setInterval(async()=>{
      const date= new Date();
        const stories = await Story.find({})
        for(var i=0;i<stories.length;i++) {
          if(date-stories[i].date >86400000){
            const story = await Story.findByIdAndDelete(stories[i]._id);
          }
          }
   },100000)
});

