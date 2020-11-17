package jsTalk.srcExamples.streamTypeRuntimeError;

import java.util.Map;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class ContainerTests {

  @Test
  public void getContentByIdWithValue() {
    Container[] ship = { new Container("Happiness", "Awesome JS project") };
    Map<String, String> contentById = Container.getContentById(ship);
    
    Assertions.assertEquals(
      "Awesome JS project",
      contentById.get("Happiness")
    );
  }

  @Test
  public void getContentByIdWithoutValue() {
    Container[] ship = { new Container("Happiness", null) };

    Assertions.assertThrows(NullPointerException.class, () -> {
      Container.getContentById(ship);
    });
  }
}
