import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Id: 'ditto',
  Name: 'Ditto',
  Description:
    'Real-time, peer-to-peer data synchronization across devices and platforms without relying on the cloud, even in offline or unreliable network conditions.',
  Website: 'https://ditto.live',
  Deployment: ['Hosted', 'Self-hosted'],
  License: 'Proprietary',
  AppTarget: {
    Platform: ['Browser', 'iOS', 'Android', 'macOS', 'WASM'],
    LanguageSDK: ['Swift', 'Kotlin', 'JavaScript', 'C#', 'c++', 'Java'],
    FrameworkIntegrations: ['React Native', 'Flutter', 'Jetpack Compose', 'SwiftUI'],
  },
  Networking: {
    Protocol: ['WiFi LAN', 'Bluetooth', 'P2P WiFi', 'TCP', 'HTTP', 'WebSockets'],
    Topology: 'P2P',
  },
  ServerSideData: {
    PersistenceMechanism: ['Custom'],
    DataModelParadigm: 'Document',
    ExistingDatabaseSupport: 'HTTP/Webhooks and real-time via CDC Connectors (Kafka-based)',
    DataSize: 'No theoretical limit',
  },
  ClientSideData: {
    QueryAPI: ['Async'],
    LocalRefreshLatency: '10ms-2s depends on cardinality, query optimization plan, and local data size',
    PersistenceMechanism: ['SQLite'],
    DataModel: 'Document',
    OfflineReads: 'Full Support',
    OfflineWrites: 'Full local conflict resolution',
    DataSize: 'up to the size of the hard drive',
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: ['Full Replication', 'Partial Replication'],
    ConflictHandling: 'Automatic via CRDT',
    WhereResolutionOccurs: 'Client',
    WhatGetsSynced: {
      ClientToClient: 'document deltas'
    },
    Authority: 'Decentralized',
  },
  AuthIdentity: {
    Encryption: 'Built-in e2ee',
    AuthenticationMethod: ['JWT Tokens'],
    AuthorizationPermissions: 'Custom-mapped ACLs',
  },
  UIRelated: {
    Components: ['Presence'],
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: ['DevTools', 'Data Inspector', 'Network Inspector'],
  },
})
