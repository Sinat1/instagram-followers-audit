import { AppContainer } from './App.styled.js';
import { useState, useEffect } from 'react';
import Header from 'components/Header/Header.jsx';
import Description from 'components/Description/Description.jsx';
import StepGuide from 'components/StepGuide/StepGuide.jsx';
import FileUpload from 'components/FileUpload/FileUpload.jsx';
import UnFollowList from 'components/UnfollowersList/UnfollowersList.jsx';
import Footer from 'components/Footer/Footer.jsx';
import ScrollToTop from 'components/ToTopBtn/ToTopBtn.jsx';

const STORAGE_KEY = 'unfollowersList';

export const App = () => {
  const [unfollowers, setUnfollowers] = useState([]);
  const [error, setError] = useState('');

  // Universal function for getting username (new + old format)
  const getUsername = entry => {
    if (!entry) return null;

    // New format → username in title
    if (entry.title && entry.title.trim() !== '') {
      return entry.title.trim();
    }

    const data = entry.string_list_data?.[0];

    // Old format → username in value
    if (data?.value) {
      return data.value.trim();
    }

    // Parse username from href
    if (data?.href) {
      const match = data.href.match(/instagram\.com\/(?:_u\/)?([^/?]+)/);
      if (match) return match[1];
    }

    return null;
  };

  const handleFileUpload = async event => {
    setError('');
    setUnfollowers([]);

    const files = event.dataTransfer?.files || event.target?.files;
    if (!files || files.length === 0) return;

    try {
      let followersFile, followingFile;

      // Searching for necessary files
      for (const file of files) {
        if (file.name === 'followers_1.json') followersFile = file;
        if (file.name === 'following.json') followingFile = file;
      }

      if (!followersFile || !followingFile) {
        throw new Error(
          'followers_1.json and following.json files can not be found'
        );
      }

      const followersText = await followersFile.text();
      const followingText = await followingFile.text();

      const followersJson = JSON.parse(followersText);
      const followingJson = JSON.parse(followingText);

      // Followers
      const followersArray = (followersJson || [])
        .map(getUsername)
        .filter(Boolean);

      const followers = new Set(followersArray);

      // Following
      const followingArray = (followingJson.relationships_following || [])
        .map(getUsername)
        .filter(Boolean);

      const following = new Set(followingArray);

      // Unfollowers (following - followers)
      const result = [...following]
        .filter(user => !followers.has(user))
        .map(user => ({
          name: user,
          href: `https://www.instagram.com/${user}/`,
        }));

      setUnfollowers(result);
    } catch (err) {
      console.error(err);
      setError('An error occurred while processing the file: ' + err.message);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setUnfollowers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (unfollowers.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(unfollowers));
    }
  }, [unfollowers]);

  const clearUnfollowers = () => {
    setUnfollowers([]);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('lastVisitedUser');
  };

  return (
    <AppContainer>
      <Header />
      <div style={{ padding: '2.5rem' }}>
        <Description />
        <StepGuide />
        <FileUpload onUpload={handleFileUpload} />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {unfollowers.length > 0 && (
          <UnFollowList
            unfollowers={unfollowers}
            clearFunc={clearUnfollowers}
          />
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </AppContainer>
  );
};

export default App;
