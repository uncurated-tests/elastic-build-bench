'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13289<T> = T extends (infer U)[]
  ? DeepReadonlyArray13289<U>
  : T extends object
  ? DeepReadonlyObject13289<T>
  : T;

interface DeepReadonlyArray13289<T> extends ReadonlyArray<DeepReadonly13289<T>> {}

type DeepReadonlyObject13289<T> = {
  readonly [P in keyof T]: DeepReadonly13289<T[P]>;
};

type UnionToIntersection13289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13289<T> = UnionToIntersection13289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13289<T extends unknown[], V> = [...T, V];

type TuplifyUnion13289<T, L = LastOf13289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13289<TuplifyUnion13289<Exclude<T, L>>, L>;

type DeepPartial13289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13289<T[P]> }
  : T;

type Paths13289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13289<K, Paths13289<T[K], Prev13289[D]>> : never }[keyof T]
  : never;

type Prev13289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13289 {
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

type ConfigPaths13289 = Paths13289<NestedConfig13289>;

interface HeavyProps13289 {
  config: DeepPartial13289<NestedConfig13289>;
  path?: ConfigPaths13289;
}

const HeavyComponent13289 = memo(function HeavyComponent13289({ config }: HeavyProps13289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13289.displayName = 'HeavyComponent13289';
export default HeavyComponent13289;
