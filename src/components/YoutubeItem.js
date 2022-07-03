import React from "react";

function YoutubeItem({link}) {
  return (
    <iframe className="youtubeItem"
        src= {link}
        title = "Youtube video player"
        frameborder = "0"
        allow="accelerometer"
        autoplay
        clipboard-write
        encryptedmedia
        gyroscope
        picture-in-picture
        allowFullScreen
    >

    </iframe>
  );
}

export default YoutubeItem;
