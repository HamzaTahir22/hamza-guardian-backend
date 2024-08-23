const express = require('express');
const router = express.Router();
const ActivityRecognition = require('../models/ActivityRecognition');

router.post('/', async (req, res) => {
  try {
    const newActivity = new ActivityRecognition({
      user_id: req.body.user_id,
      wifi_csi_id: req.body.wifi_csi_id,
      activity_type: req.body.activity_type,
      confidence: req.body.confidence,
      detected_at: req.body.detected_at
    });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const activities = await ActivityRecognition.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
