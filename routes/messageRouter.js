import express from 'express';
import Story from '../models/storyModel.js';

const storyRouter = express.Router();

storyRouter.post(
    '/add',
    async (req, res) => {
      try {  
        const story = new Story({
            content: re.body.content
          }); 
        const savedStory = await story.save();
        res.status(200).send({content: savedStory, message:" Story posted !"});
      } catch {
        res.status(400).send({ message: 'Story not posted' });
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