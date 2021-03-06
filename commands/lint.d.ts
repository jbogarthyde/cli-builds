/**
 * Lints code in existing project.
 */
export interface Schema {
    /**
     * Specify the configuration to use.
     */
    configuration?: string;
    /**
     * Shows a help message. You can pass the format as a value.
     */
    help?: HelpUnion;
    /**
     * The name of the project to lint.
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
