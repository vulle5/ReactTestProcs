import { makeEntity } from 'react-entities';
import * as counter from './counter';
import * as post from './post';

export const useCounter = makeEntity(counter);
export const usePost = makeEntity(post);
