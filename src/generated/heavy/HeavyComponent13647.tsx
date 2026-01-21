'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13647<T> = T extends (infer U)[]
  ? DeepReadonlyArray13647<U>
  : T extends object
  ? DeepReadonlyObject13647<T>
  : T;

interface DeepReadonlyArray13647<T> extends ReadonlyArray<DeepReadonly13647<T>> {}

type DeepReadonlyObject13647<T> = {
  readonly [P in keyof T]: DeepReadonly13647<T[P]>;
};

type UnionToIntersection13647<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13647<T> = UnionToIntersection13647<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13647<T extends unknown[], V> = [...T, V];

type TuplifyUnion13647<T, L = LastOf13647<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13647<TuplifyUnion13647<Exclude<T, L>>, L>;

type DeepPartial13647<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13647<T[P]> }
  : T;

type Paths13647<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13647<K, Paths13647<T[K], Prev13647[D]>> : never }[keyof T]
  : never;

type Prev13647 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13647<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13647 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths13647 = Paths13647<NestedConfig13647>;

interface HeavyProps13647 {
  config: DeepPartial13647<NestedConfig13647>;
  path?: ConfigPaths13647;
}

const HeavyComponent13647 = memo(function HeavyComponent13647({ config }: HeavyProps13647) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13647) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13647 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13647: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13647.displayName = 'HeavyComponent13647';
export default HeavyComponent13647;
