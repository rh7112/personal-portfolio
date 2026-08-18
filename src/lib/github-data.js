const GITHUB_USERNAME = "rh7112";

// Unauthenticated GitHub API calls are rate-limited to 60/hr per IP, which
// is plenty for a once-per-build fetch -- but Cloudflare's shared build
// fleet means that IP isn't exclusively ours, so this can plausibly get
// rate-limited by unrelated traffic. Fails soft: returns null and the
// widget just doesn't render, same pattern as PSN trophies.
export async function getGitHubStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: { Accept: "application/vnd.github+json" },
        signal: AbortSignal.timeout(5000),
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
        headers: { Accept: "application/vnd.github+json" },
        signal: AbortSignal.timeout(5000),
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.error(`GitHub API request failed: user=${userRes.status} repos=${reposRes.status}`);
      return null;
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos
      .filter((repo) => !repo.fork)
      .reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      profileUrl: user.html_url,
    };
  } catch (err) {
    console.error(`GitHub stats fetch failed: ${err.message}`);
    return null;
  }
}
