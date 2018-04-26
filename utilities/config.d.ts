import { JsonAstObject, JsonValue, experimental } from '@angular-devkit/core';
export declare const workspaceSchemaPath: string;
export declare function getWorkspace(level?: 'local' | 'global'): experimental.workspace.Workspace | null;
export declare function getWorkspaceRaw(level?: 'local' | 'global'): [JsonAstObject | null, string | null];
export declare function validateWorkspace(json: JsonValue): boolean;
export declare function getPackageManager(): string;
export declare function getDefaultSchematicCollection(): string;
export declare function getSchematicDefaults(collection: string, schematic: string, project?: string): {};
export declare function isWarningEnabled(warning: string): boolean;
