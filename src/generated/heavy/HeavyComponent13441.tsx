'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13441<T> = T extends (infer U)[]
  ? DeepReadonlyArray13441<U>
  : T extends object
  ? DeepReadonlyObject13441<T>
  : T;

interface DeepReadonlyArray13441<T> extends ReadonlyArray<DeepReadonly13441<T>> {}

type DeepReadonlyObject13441<T> = {
  readonly [P in keyof T]: DeepReadonly13441<T[P]>;
};

type UnionToIntersection13441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13441<T> = UnionToIntersection13441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13441<T extends unknown[], V> = [...T, V];

type TuplifyUnion13441<T, L = LastOf13441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13441<TuplifyUnion13441<Exclude<T, L>>, L>;

type DeepPartial13441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13441<T[P]> }
  : T;

type Paths13441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13441<K, Paths13441<T[K], Prev13441[D]>> : never }[keyof T]
  : never;

type Prev13441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13441 {
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

type ConfigPaths13441 = Paths13441<NestedConfig13441>;

interface HeavyProps13441 {
  config: DeepPartial13441<NestedConfig13441>;
  path?: ConfigPaths13441;
}

const HeavyComponent13441 = memo(function HeavyComponent13441({ config }: HeavyProps13441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13441.displayName = 'HeavyComponent13441';
export default HeavyComponent13441;
