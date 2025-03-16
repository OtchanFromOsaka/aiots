import { describe, it, expect } from "vitest";
import { AioSideNav } from "../../../app/components/aio-side-nav";

describe("AioSideNav", () => {
	it("should be defined", () => {
		expect(AioSideNav).toBeDefined();
	});

	it("should be a function", () => {
		expect(typeof AioSideNav).toBe("function");
	});

	// Since we can't easily test JSX rendering without additional libraries,
	// we'll just test that the component function can be called without errors
	it("should not throw when called with default props", () => {
		expect(() => {
			AioSideNav({});
		}).not.toThrow();
	});

	it("should not throw when called with custom props", () => {
		expect(() => {
			AioSideNav({
				location: "right",
				visible: false,
				overlay: true,
				width: 300,
				className: "custom-class",
			});
		}).not.toThrow();
	});

	it("should not throw when called with children", () => {
		expect(() => {
			AioSideNav({
				children: "Side Nav Content",
			});
		}).not.toThrow();
	});
});
