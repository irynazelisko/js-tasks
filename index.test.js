
/* LESSON 24 */
describe("Get sum of numbers", () => {
  const desc = "<p>Get sum of numbers</p>";

  describe(desc, () => {
    it("should return 60", () => {
      const result = sum(20, 40);
      expect(result).toBe(60);
    });
  });
});

describe("Get subtraction of numbers", () => {
  const desc = "<p>Get subtraction of numbers</p>";

  describe(desc, () => {
    it("should return 24", () => {
      const result = subtraction(28, 4);
      expect(result).toBe(24);
    });
  });
});

describe("Get divide of numbers", () => {
  const desc = "<p>Get divide of numbers</p>";

  describe(desc, () => {
    it("should return 9", () => {
      const result = divide(36, 4);
      expect(result).toBe(9);
    });
  });
});

describe("Get multiply of numbers", () => {
  const desc = "<p>Get multiply of numbers</p>";

  describe(desc, () => {
    it("should return 80", () => {
      const result = multiply(20, 4);
      expect(result).toBe(80);
    });
  });
});
/* пошук максимального значення */
describe('Find max value', () => {
  const desc = "<p>Find max value</p>";

  describe(desc, () => {
    it('should return 4576', () => {
      const result = findMaxValue([2, 34, 45, 10, 3, 59, 5, 44, 11, 333, 4576, 29]);
      expect(result).toBe(4576);
    });
  });
});


/* пошук мінімального значення */
describe('Find minimum value', () => {
  const desc = "<p>Find minimum value</p>";

  describe(desc, () => {
    it('should return -18', () => {
      const result = findMinValue([-1, 34, 54, 55, 21, 43, 98, -18, 4, 1, 2]);
      expect(result).toBe(-18);
    });
  });
});


/* LESSON 26 */

describe('Checking increment value', () => {
  const desc = "<p>Checking increment value</p>";

  describe(desc, () => {
    it('should return 25', () => {
      let acc = new Accumulator(24);
      acc.increment();
      expect(acc.value).toBe(25);
    });
  });
});

describe('Checking decrement value', () => {
  const desc = "<p>Checking decrement value</p>";

  describe(desc, () => {
    it('should return 23', () => {
      let acc = new Accumulator(24);
      acc.decrement();
      expect(acc.value).toBe(23);
    });
  });
});

describe('Checking clear method ', () => {
  const desc = "<p>Checking clear method </p>";

  describe(desc, () => {
    it('should return 24', () => {
      let cncblAcc = new CancelableAccumulator(24);
      cncblAcc.clear();
      expect(cncblAcc.value).toBe(24);
    });
  });
});

/* LESSON 28 */

describe("Toggle image on 'click", () => {
  let desc = "<p>Toggle image on 'click' </p>";

  describe(desc, () => {
    const image = document.createElement("img");
    image.setAttribute("id", "image");
    document.body.appendChild(image);

    it('should toggle the "image-enlarged" class', () => {

      spyOn(image.classList, "toggle");
      toggleImageSize();
      expect(image.classList.toggle).toHaveBeenCalledWith("image-enlarged");
    });
    it('should increase the image size', () => {

      image.style.transform = "scale(1)";
      toggleImageSize();
      expect(image.style.transform).toEqual("scale(1.2)");
    });

    it('should descrese the image size', () => {
      image.style.transform = "scale(1.2)";
      toggleImageSize();
      expect(image.style.transform).toEqual("scale(1)");
    });
  })
})


describe('Scroll to sections', () => {
  const desc = "<p>Scroll to sections </p>";

  describe(desc, () => {
    it('should return "sectionA" for section A', () => {
      const event = new KeyboardEvent("keydown", { key: "a" });
      expect(scrollToSection(event)).toBe("sectionA");
    })
    it('should return "sectionB" for section B', () => {
      const event = new KeyboardEvent("keydown", { key: "b" });
      expect(scrollToSection(event)).toBe("sectionB");
    });

    it('should return "sectionC" for section C', () => {
      const event = new KeyboardEvent("keydown", { key: "c" });
      expect(scrollToSection(event)).toBe("sectionC");
    });

    it('should return "sectionD" for section D', () => {
      const event = new KeyboardEvent("keydown", { key: "d" });
      expect(scrollToSection(event)).toBe("sectionD");
    });
  })
})




