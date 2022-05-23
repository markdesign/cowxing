// I didn't follow the security pattern suggested in the NextJS documentation but you should:
//
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation

/*
curl "http://localhost:3301/api/revalidate" \
    -X POST \
    -H "Content-Type: application/json" \
    -d "[\"/playground/youtube_jack_herrington/ssr_and_ssg/Example3/pokemon/1\"]"
*/
export default async function handler(req, res) {
    for (const url of req.body) {
      await res.unstable_revalidate(url);
    }
    res.status(200).json({ revalidate: true });
  }