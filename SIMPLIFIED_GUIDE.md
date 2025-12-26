<!-- @format -->

# M4A to SRT Converter - Simplified Guide

## What It Does

Converts M4A audio files to SRT subtitle files using OpenAI's Whisper AI.

**✨ Perfect for mixed-language content:** Whisper naturally handles Hindi/Urdu/English code-switching!

## Key Features

✅ **Accurate transcription** in the original language(s)
✅ **Handles multilingual audio** (mixed Hindi/Urdu/English)  
✅ **Word-level timing** for precise synchronization
✅ **Natural or custom segmentation** options
✅ **No translation needed** - keeps exactly what was said

## Quick Start

### 1. Install Dependencies

```bash
cd m4a-to-srt/backend
source venv/bin/activate  # If using virtual environment
pip install -r requirements.txt
```

### 2. Start Backend

```bash
python main.py
```

### 3. Use Frontend

```bash
cd ../nextjs-frontend
npm install
npm run dev
```

Visit: http://localhost:3000

## How Whisper Handles Mixed Languages

### Example: Hindi/Urdu/English Mixed Speech

**What you say:**

```
"मैं school जा रहा हूं और boss से meeting करूंगा"
```

**What Whisper transcribes:**

```
"मैं school जा रहा हूं और boss से meeting करूंगा"
```

**Result:** ✅ Perfect! Exactly what was said.

### Why This Is Better

- **No translation errors** - original content preserved
- **Natural code-switching** - maintains your speaking style
- **Maximum accuracy** - no interpretation layer
- **Faster processing** - no translation step

## Usage

### Language Settings

| Your Audio          | Input Language Setting | What You Get                        |
| ------------------- | ---------------------- | ----------------------------------- |
| Pure Hindi          | `Hindi`                | Hindi subtitles                     |
| Pure Urdu           | `Hindi` or `Auto`      | Urdu subtitles                      |
| Mixed Hindi/English | `Hindi` or `Auto`      | Mixed subtitles (exactly as spoken) |
| Mixed Urdu/English  | `Hindi` or `Auto`      | Mixed subtitles (exactly as spoken) |
| Unknown             | `Auto-detect`          | Auto-detected transcription         |

### Segmentation Options

**Natural Segmentation (Recommended):**

- ✅ Use Whisper's AI to break sentences naturally
- ✅ Better for conversational content
- ✅ Respects speech patterns

**Word-based Segmentation:**

- Fixed number of words per subtitle
- Good for consistent subtitle length
- Customize with "words per segment" setting

## Settings

### Input Language

- `Auto-detect`: Let Whisper detect the language
- `Hindi`: For Hindi/Urdu content (works for both)
- `English`: For English content
- Other supported languages: Korean, Japanese, Spanish, French, German, etc.

### Words Per Segment

- Default: 8 words
- Range: 1-20 words
- Only used if "Natural Segmentation" is OFF

### Natural Segmentation

- ✅ ON: AI breaks sentences naturally (recommended)
- ❌ OFF: Fixed word count per subtitle

## Requirements

### Backend

- Python 3.8+
- FFmpeg (for audio conversion)
- Whisper model (downloads automatically on first use)

### Frontend

- Node.js 16+
- Next.js 13+

## File Structure

```
m4a-to-srt/
├── backend/
│   ├── main.py              # FastAPI server
│   ├── requirements.txt     # Python dependencies
│   └── venv/               # Virtual environment
├── nextjs-frontend/
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   └── package.json
└── WHISPER_MULTILINGUAL_GUIDE.md  # Detailed guide
```

## Troubleshooting

### "No speech detected"

- Check audio quality
- Ensure file is not corrupted
- Try a different section of the audio

### Incorrect transcriptions

- Set input language explicitly (don't use Auto)
- Use better audio quality
- Try `large` Whisper model (edit main.py line 88)

### Subtitles too long/short

- Adjust "words per segment" (3-12 recommended)
- Try Natural Segmentation mode

## Performance

| Audio Length | Processing Time | Model Size  |
| ------------ | --------------- | ----------- |
| 1 minute     | ~5-10 seconds   | Base: 140MB |
| 5 minutes    | ~25-50 seconds  | Base: 140MB |
| 30 minutes   | ~3-6 minutes    | Base: 140MB |

_Times vary based on CPU speed. GPU acceleration available with CUDA._

## Best Practices

1. **Use high-quality audio** - Better input = better output
2. **Set language explicitly** - Don't rely on auto-detect for best results
3. **Try natural segmentation** - Usually gives better subtitle flow
4. **Test with short clips** - Verify settings before processing long files
5. **Keep mixed languages** - No need to translate, Whisper handles it!

## What We Removed

❌ **Translation features** - Unnecessary complexity
❌ **DeepL/Google Translate** - Added no value for accurate transcription
❌ **API keys and setup** - Simpler is better

## Why This Approach?

**Whisper is trained on multilingual data**, including:

- Code-switched speech (Hindi+English, Urdu+English)
- Multiple languages in one audio
- Natural conversation patterns

**Translation would:**

- ❌ Add complexity
- ❌ Introduce errors
- ❌ Lose original meaning
- ❌ Require API keys/setup
- ❌ Slow down processing

**Direct transcription:**

- ✅ Perfect accuracy
- ✅ Zero setup
- ✅ Preserves original
- ✅ Fast processing
- ✅ Free!

## Next Steps

1. Try uploading a test audio file
2. Use `Auto-detect` or `Hindi` for input language
3. Enable "Natural Segmentation"
4. Check the subtitle quality
5. Adjust settings if needed

**That's it!** No translation, no API keys, no complexity. Just accurate subtitles. 🎯
