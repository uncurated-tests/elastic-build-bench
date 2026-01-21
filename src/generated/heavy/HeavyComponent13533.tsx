'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13533<T> = T extends (infer U)[]
  ? DeepReadonlyArray13533<U>
  : T extends object
  ? DeepReadonlyObject13533<T>
  : T;

interface DeepReadonlyArray13533<T> extends ReadonlyArray<DeepReadonly13533<T>> {}

type DeepReadonlyObject13533<T> = {
  readonly [P in keyof T]: DeepReadonly13533<T[P]>;
};

type UnionToIntersection13533<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13533<T> = UnionToIntersection13533<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13533<T extends unknown[], V> = [...T, V];

type TuplifyUnion13533<T, L = LastOf13533<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13533<TuplifyUnion13533<Exclude<T, L>>, L>;

type DeepPartial13533<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13533<T[P]> }
  : T;

type Paths13533<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13533<K, Paths13533<T[K], Prev13533[D]>> : never }[keyof T]
  : never;

type Prev13533 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13533<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13533 {
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

type ConfigPaths13533 = Paths13533<NestedConfig13533>;

interface HeavyProps13533 {
  config: DeepPartial13533<NestedConfig13533>;
  path?: ConfigPaths13533;
}

const HeavyComponent13533 = memo(function HeavyComponent13533({ config }: HeavyProps13533) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13533) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13533 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13533: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13533.displayName = 'HeavyComponent13533';
export default HeavyComponent13533;
