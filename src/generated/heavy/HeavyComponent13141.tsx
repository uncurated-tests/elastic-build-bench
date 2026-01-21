'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13141<T> = T extends (infer U)[]
  ? DeepReadonlyArray13141<U>
  : T extends object
  ? DeepReadonlyObject13141<T>
  : T;

interface DeepReadonlyArray13141<T> extends ReadonlyArray<DeepReadonly13141<T>> {}

type DeepReadonlyObject13141<T> = {
  readonly [P in keyof T]: DeepReadonly13141<T[P]>;
};

type UnionToIntersection13141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13141<T> = UnionToIntersection13141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13141<T extends unknown[], V> = [...T, V];

type TuplifyUnion13141<T, L = LastOf13141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13141<TuplifyUnion13141<Exclude<T, L>>, L>;

type DeepPartial13141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13141<T[P]> }
  : T;

type Paths13141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13141<K, Paths13141<T[K], Prev13141[D]>> : never }[keyof T]
  : never;

type Prev13141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13141 {
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

type ConfigPaths13141 = Paths13141<NestedConfig13141>;

interface HeavyProps13141 {
  config: DeepPartial13141<NestedConfig13141>;
  path?: ConfigPaths13141;
}

const HeavyComponent13141 = memo(function HeavyComponent13141({ config }: HeavyProps13141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13141.displayName = 'HeavyComponent13141';
export default HeavyComponent13141;
