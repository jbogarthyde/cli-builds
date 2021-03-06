/**
 * Run unit tests in existing project.
 */
export interface Schema {
    /**
     * A named configuration environment, as specified in the `configurations` section of
     * `angular.json`.
     */
    configuration?: string;
    /**
     * Shows a help message. You can pass the format as a value.
     */
    help?: HelpUnion;
    /**
     * When true, sets the build configuration to the production environment.
     * All builds make use of bundling and limited tree-shaking, A production build also runs
     * limited dead code elimination using UglifyJS.
     */
    prod?: boolean;
    /**
     * The name of the project to build. Can be an app or a library.
     */
    project?: string;
}
/**
 * Shows a help message. You can pass the format as a value.
 */
export declare type HelpUnion = boolean | HelpEnum;
export declare enum HelpEnum {
    HelpJSON = "JSON",
    JSON = "json"
}
