'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13640<T> = T extends (infer U)[]
  ? DeepReadonlyArray13640<U>
  : T extends object
  ? DeepReadonlyObject13640<T>
  : T;

interface DeepReadonlyArray13640<T> extends ReadonlyArray<DeepReadonly13640<T>> {}

type DeepReadonlyObject13640<T> = {
  readonly [P in keyof T]: DeepReadonly13640<T[P]>;
};

type UnionToIntersection13640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13640<T> = UnionToIntersection13640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13640<T extends unknown[], V> = [...T, V];

type TuplifyUnion13640<T, L = LastOf13640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13640<TuplifyUnion13640<Exclude<T, L>>, L>;

type DeepPartial13640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13640<T[P]> }
  : T;

type Paths13640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13640<K, Paths13640<T[K], Prev13640[D]>> : never }[keyof T]
  : never;

type Prev13640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13640 {
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

type ConfigPaths13640 = Paths13640<NestedConfig13640>;

interface HeavyProps13640 {
  config: DeepPartial13640<NestedConfig13640>;
  path?: ConfigPaths13640;
}

const HeavyComponent13640 = memo(function HeavyComponent13640({ config }: HeavyProps13640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13640.displayName = 'HeavyComponent13640';
export default HeavyComponent13640;
