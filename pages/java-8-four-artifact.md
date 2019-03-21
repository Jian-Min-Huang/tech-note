# Java 8 四神器

### Lambda

### Streams
peek Intermediate vs. Terminal Operations https://www.baeldung.com/java-streams-peek-api
https://openhome.cc/Gossip/Java/ParallelStream.html

### Optional
* Consumer (forEach)
```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}
```
* Function (map)
```java
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
    ...
}
```
* Predicate (filter)
```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}
```
* Supplier (orElseGet)
```java
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```

### Date