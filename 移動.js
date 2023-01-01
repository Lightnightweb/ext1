class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'idou',
        name: 'ページ移動',
        blocks: [
          {
            opcode: 'idou',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'ページを離れてる?',
          }
        ]
      };

    }
    idou(){
        return(
            document.addEventListener("visibilitychange", () => {
           return document.visibilityState === "visible"
        });
        )
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());
