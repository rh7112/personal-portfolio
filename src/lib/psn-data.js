import {
  exchangeAccessCodeForAuthTokens,
  exchangeNpssoForAccessCode,
  getUserTitles,
  getUserTrophyProfileSummary,
} from "psn-api";

// Purely a "hobbies" showcase, not core content -- if PSN_NPSSO is missing
// or the PSN API call fails for any reason (expired token, PSN outage), this
// returns null and the whole section is omitted rather than shown broken or
// backed by fake data.
async function getPsnAuthorization() {
  const npsso = process.env.PSN_NPSSO;

  if (!npsso) {
    console.log("Skipping PSN trophy fetch, missing PSN_NPSSO");
    return null;
  }

  try {
    const accessCode = await exchangeNpssoForAccessCode(npsso);
    return await exchangeAccessCodeForAuthTokens(accessCode);
  } catch (err) {
    console.error(`PSN authentication failed: ${err.message}`);
    return null;
  }
}

function getTierLabel(tier) {
  if (tier >= 10) return "Platinum";
  if (tier >= 7) return "Gold";
  if (tier >= 4) return "Silver";
  return "Bronze";
}

export async function getPsnTrophies() {
  const authorization = await getPsnAuthorization();

  if (!authorization) {
    return null;
  }

  try {
    const [summary, titles] = await Promise.all([
      getUserTrophyProfileSummary(authorization, "me"),
      getUserTitles(authorization, "me", { limit: 6 }),
    ]);

    return {
      trophyLevel: summary.trophyLevel,
      tierLabel: getTierLabel(summary.tier),
      progress: summary.progress,
      earnedTrophies: summary.earnedTrophies,
      recentTitles: titles.trophyTitles.map((title) => ({
        id: title.npCommunicationId,
        name: title.trophyTitleName,
        iconUrl: title.trophyTitleIconUrl,
        progress: title.progress,
      })),
    };
  } catch (err) {
    console.error(`PSN trophy fetch failed: ${err.message}`);
    return null;
  }
}
