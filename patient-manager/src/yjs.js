import * as Y from 'yjs'
import { IndexeddbPersistence } from 'y-indexeddb'
import { WebsocketProvider } from 'y-websocket'

export const ydoc = new Y.Doc()
export const patients = ydoc.getMap('patients')
export const persistence = new IndexeddbPersistence('patient-manager', ydoc)
export const provider = new WebsocketProvider('http://localhost:1234/', 'patient-manager', ydoc)