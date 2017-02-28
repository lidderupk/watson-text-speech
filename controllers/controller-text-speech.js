var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');



router.get('/', function(req, res) {
    var text = req.query.text;
    var voice = req.query.voice;

    var params = {
        text: 'sample',
        voice: 'en-US_MichaelVoice',
        accept: 'audio/wav'
    };


    if (text && text.length > 0) {
        params.text = text;
    }

    if(voice && voice.length > 0) {
        params.voice = voice;
    }

    //call watson
    var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
    var text_to_speech = new TextToSpeechV1({
        username: process.env.TEXT_TO_SPEECH_USERNAME,
        password: process.env.TEXT_TO_SPEECH_PASSWORD
    });

    var dir = path.join(__dirname, '/../public/audio');
    var fileName = new Date().getTime() + '-watson.wav';
    var filePath = dir + '/' + fileName;
    // Pipe the synthesized text to a file.
    var stream = text_to_speech.synthesize(params)
        .on('error', function(error) {
            console.log('Error:', error);
        })
        .on('end', function() {
            console.log('ending streaming !');
        })
        .pipe(fs.createWriteStream(filePath));

    stream.on('finish', function() { 
            console.log('finished streaming !');
            res.status(200).setHeader('Content-disposition', 'attachment; filename=' + fileName);
            var readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        });
});

module.exports = router;