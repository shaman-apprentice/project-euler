package jsTalk.srcExamples.streamTypeRuntimeError;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public class Container {
  public String id;
  public String content;

  public Container(String id, String content) {
    this.id = id;
    this.content = content;
  }

  public static Map<String, String> getContentById(Container[] ship) {
    return Arrays.stream(ship)
      .collect(Collectors.toMap(
        container -> container.id,
        container -> container.content
      ));
  }
}
