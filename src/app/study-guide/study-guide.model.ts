/**
 * A data structure to isolate from the component code.
 * 
 * This data structure represents a single 'study-guide'.
 */
export class StudyGuide {
    title: string;
    link: string;
    votes: number;

    // Default constructor with taking votes as optional.
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        // If votes value is null, then default to '0'.
        // Strange this votes doesn't already default to 0 as a number like Java class attribute.
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    // domain() is a utility function that extracts
    // the domain from a URL, which we'll explain shortly
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}