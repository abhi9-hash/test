import express from 'express';
import Story from '../models/storyModel.js';

const storyRouter = express.Router();

storyRouter.post(
    '/add',
    async (req, res) => {
      try {  
          const newdate= new Date();
        const story = new Story({
            content: req.body.content,
            time: newdate,
            userid: req.body.userid
          }); 
        const savedStory = await story.save();
        res.status(200).send({content: savedStory, message:" Story posted !"});
      } catch {
        res.status(400).send({ message: 'Story not posted' });
      }
    }
  );
  storyRouter.get(
    '/getall/:id',
    async (req, res) => {
      try {
        const stories = await Story.find({userid:req.params.id})
        res.send({Remaining:stories, message:"Story Deleted!"});
      } catch {
        res.status(404).send({ message: 'Story Not Deleted' });
      }
    }
  );  
  storyRouter.delete(
    '/remove/:id',
    async (req, res) => {
      try {
        const story = await Story.findByIdAndDelete(req.params.id);
        const stories = await Story.find({})
        res.send({Remaining:stories, message:"Story Deleted!"});
      } catch {
        res.status(404).send({ message: 'Story Not Deleted' });
      }
    }
  );  


export default storyRouter;