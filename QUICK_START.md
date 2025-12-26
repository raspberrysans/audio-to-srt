<!-- @format -->

# Quick Start Guide - Translation Fix Applied

## Installation

1. **Navigate to the backend directory:**

   ```bash
   cd m4a-to-srt/backend
   ```

2. **Activate your virtual environment:**

   ```bash
   source venv/bin/activate
   ```

3. **Install the new dependency (deep-translator):**

   ```bash
   pip install deep-translator==1.11.4
   ```

   Or install all requirements:

   ```bash
   pip install -r requirements.txt
   ```

## Running the Backend

```bash
cd m4a-to-srt/backend
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The server will start at `http://localhost:8000`

## Running the Frontend

In a new terminal:

```bash
cd m4a-to-srt/nextjs-frontend
npm install  # if not already installed
npm run dev
```

The frontend will start at `http://localhost:3000`

## Testing Translation

1. Open `http://localhost:3000` in your browser
2. Upload an M4A file
3. In the settings:
   - Set **Input Language** to the language of your audio (or use Auto-detect)
   - Set **Target Language** to a different language (e.g., if audio is English, select Hindi, Korean, or Japanese)
4. Click "Convert to SRT"
5. Wait for processing
6. Preview the subtitles - they should now be in the target language
7. Download the SRT file

## Example Test Scenarios

### Scenario 1: English to Hindi

- Upload English audio
- Input Language: Auto-detect (or English)
- Target Language: Hindi
- Result: All subtitles translated to Hindi

### Scenario 2: Korean to English

- Upload Korean audio
- Input Language: Korean (or Auto-detect)
- Target Language: English
- Result: All subtitles translated to English

### Scenario 3: No Translation

- Upload any audio
- Input Language: Auto-detect
- Target Language: Auto-detect
- Result: Subtitles in original detected language (no translation)

## Quick Preset Buttons

The frontend provides quick preset buttons:

- **Natural Segmentation**: Uses Whisper's natural sentence breaks
- **English → Hindi**: Sets up English to Hindi translation
- **English → Korean**: Sets up English to Korean translation
- **English → Japanese**: Sets up English to Japanese translation

## Troubleshooting

### If translation is not working:

1. **Check backend logs** for any translation errors
2. **Verify deep-translator is installed:**
   ```bash
   pip show deep-translator
   ```
3. **Check network connection** (Google Translate API requires internet)
4. **Try a different language pair**

### If only first 3 subtitles appear:

This was the bug that has now been fixed. If you still see this:

1. Make sure you've restarted the backend server after installing dependencies
2. Check that main.py has the latest changes
3. Clear browser cache and reload

## API Endpoint

The `/api/convert` endpoint now accepts:

- `file`: M4A audio file
- `words_per_segment`: Number of words per subtitle (default: 8)
- `frame_rate`: Frame rate for timing (default: 30.0)
- `use_natural_segmentation`: Use natural breaks (default: false)
- `input_language`: Input audio language (default: 'auto')
- `target_language`: Target language for translation (default: 'auto')

## Example cURL Request

```bash
curl -X POST http://localhost:8000/api/convert \
  -F "file=@your-audio.m4a" \
  -F "input_language=en" \
  -F "target_language=hi" \
  -F "use_natural_segmentation=true"
```

## Notes

- Translation uses Google Translate (via deep-translator)
- No API key required for basic usage
- Translation is done subtitle by subtitle to preserve timing
- Original timing information is maintained after translation
- If translation fails, original text is retained
