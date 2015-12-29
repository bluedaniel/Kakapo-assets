# Script to convert mp3 to ogg files
# Website and desktop uses ogg files
for file in sounds/*.mp3;
   do ffmpeg -i "${file}" -acodec libvorbis "${file/%mp3/ogg}";
done
