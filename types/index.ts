// types/index.ts
export interface OAuthToken {
    access_token: string;
    expires_in: number;
  }
  
  export interface UserProfile {
    name: string;
    email?: string;
  }
  
  export interface Hub {
    id: string;
    name: string;
    region: string;
    type: string;
  }
  
  export interface Project {
    id: string;
    name: string;
    accountId: string;
    type: string;
  }
  
  export interface FolderContent {
    id: string;
    name: string;
    folder: boolean;
  }
  
  export interface Version {
    id: string;
    name: string;
  }
  
  export interface TreeNode {
    id: string;
    text: string;
    children: boolean | TreeNode[];
    itree: {
      icon: string;
    };
  }
  
  export interface SessionData {
    public_token: string;
    internal_token: string;
    refresh_token: string;
    expires_at: number;
  }