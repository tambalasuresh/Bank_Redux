import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchPosts } from '../store/apislice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { users, posts, loadingUsers, loadingPosts, errorUsers, errorPosts } = useSelector((state) => state.api);

  useEffect(() => {
    // Dispatch both API requests
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {/* Loading and Error for Users */}
      {loadingUsers ? <p>Loading Users...</p> : null}
      {errorUsers ? <p>Error: {errorUsers}</p> : null}
      {users && users.length > 0 && (
        <div>
          <h3>Users</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Loading and Error for Posts */}
      {loadingPosts ? <p>Loading Posts...</p> : null}
      {errorPosts ? <p>Error: {errorPosts}</p> : null}
      {posts && posts.length > 0 && (
        <div>
          <h3>Posts</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
