import React, { useEffect, useState } from "react";
import { Box, Stack, Image, Text, Link, Spinner } from "@chakra-ui/react";
import getNowPlayingItem from "./../../pages/api/spotify";
import SpotifyLogo from "./Logo";
import PlayingAnimation from "./PlayingAnimation";

const SpotifyNowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <Box width="xs" mt={10} display="flex">
      {loading ? (
        <Stack align="center" mb={8}>
          <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
        </Stack>
      ) : (
        <Stack width="full" mb={result.isPlaying ? 2 : 4} spacing={3}>
          <Stack spacing={2} direction="row" align="center">
            <SpotifyLogo />
            <Text fontWeight="semibold">
              {result.isPlaying ? "Now playing" : "Currently offline"}
            </Text>
            {result.isPlaying && <PlayingAnimation />}
          </Stack>
          {result.isPlaying && (
            <Box p={2} borderRadius="md" borderWidth={1} display="flex">
              <Stack direction="row" spacing={4} align="center">
                <Image
                  alt={`${result.title} album art`}
                  src={result.albumImageUrl}
                  width={12}
                  height={12}
                  borderRadius="sm"
                />
                <Stack spacing={0} overflow="hidden">
                  <Link href={result.songUrl} target="_blank">
                    <Text
                      fontWeight="semibold"
                      width="full"
                      isTruncated
                      color="alph"
                    >
                      {result.title}
                    </Text>
                  </Link>
                  <Text color="gray.500" isTruncated>
                    {result.artist}
                  </Text>
                  <Text></Text>
                </Stack>
              </Stack>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default SpotifyNowPlaying;
