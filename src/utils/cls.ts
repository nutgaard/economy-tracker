export function cls(...args: any[] ): string {
    const out: string[] = [];
    for (const arg of args) {
        if (arg === null || arg === undefined) {
        } else if (typeof arg === "string" && arg.length > 0) {
            out.push(arg);
        } else if (Array.isArray(arg)) {
            out.push(cls(arg));
        } else {
            for (const [key, value] of Object.entries(arg)) {
                if (value) {
                    out.push(key)
                }
            }
        }
    }

    return out.join(' ');
}