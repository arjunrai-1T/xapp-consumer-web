import * as React from 'react';
import Dashboard from '../Dashboard/DashBoard.tsx';
import { HomePageProps } from '../types/props.ts';

const HomePage=({path}:HomePageProps)=> {
  return (
    <Dashboard path={path}/>
  );
}

export default HomePage;