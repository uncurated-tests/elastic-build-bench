'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13737<T> = T extends (infer U)[]
  ? DeepReadonlyArray13737<U>
  : T extends object
  ? DeepReadonlyObject13737<T>
  : T;

interface DeepReadonlyArray13737<T> extends ReadonlyArray<DeepReadonly13737<T>> {}

type DeepReadonlyObject13737<T> = {
  readonly [P in keyof T]: DeepReadonly13737<T[P]>;
};

type UnionToIntersection13737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13737<T> = UnionToIntersection13737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13737<T extends unknown[], V> = [...T, V];

type TuplifyUnion13737<T, L = LastOf13737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13737<TuplifyUnion13737<Exclude<T, L>>, L>;

type DeepPartial13737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13737<T[P]> }
  : T;

type Paths13737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13737<K, Paths13737<T[K], Prev13737[D]>> : never }[keyof T]
  : never;

type Prev13737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13737 {
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

type ConfigPaths13737 = Paths13737<NestedConfig13737>;

interface HeavyProps13737 {
  config: DeepPartial13737<NestedConfig13737>;
  path?: ConfigPaths13737;
}

const HeavyComponent13737 = memo(function HeavyComponent13737({ config }: HeavyProps13737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13737.displayName = 'HeavyComponent13737';
export default HeavyComponent13737;
