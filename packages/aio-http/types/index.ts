export interface HttpGetOption {
	query?: Record<string, string | number>;
	header?: Record<string, string>;
}

export interface HttpPostOption {
	query?: Record<string, string | number>;
	body?: Record<string, string | number>;
	header?: Record<string, string>;
}
