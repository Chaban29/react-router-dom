import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './common/routes/routes';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './pages/Layout/Layout';
import { SinglePage } from './pages/SinglePage';
import { CreatePost } from './components/CreatePost/CreatePost';
import { EditPage } from './pages/EditPage';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index path={ROUTES.HOME} element={<HomePage />} />

          <Route path={ROUTES.ABOUT} element={<AboutPage />} />

          <Route path={ROUTES.BLOG} element={<BlogPage />} />
          <Route path={`${ROUTES.BLOG}/:id`} element={<SinglePage />} />
          <Route path={`${ROUTES.BLOG}/new`} element={<CreatePost />} />
          <Route path={`${ROUTES.BLOG}/:id/edit`} element={<EditPage />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
