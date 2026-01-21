'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13669<T> = T extends (infer U)[]
  ? DeepReadonlyArray13669<U>
  : T extends object
  ? DeepReadonlyObject13669<T>
  : T;

interface DeepReadonlyArray13669<T> extends ReadonlyArray<DeepReadonly13669<T>> {}

type DeepReadonlyObject13669<T> = {
  readonly [P in keyof T]: DeepReadonly13669<T[P]>;
};

type UnionToIntersection13669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13669<T> = UnionToIntersection13669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13669<T extends unknown[], V> = [...T, V];

type TuplifyUnion13669<T, L = LastOf13669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13669<TuplifyUnion13669<Exclude<T, L>>, L>;

type DeepPartial13669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13669<T[P]> }
  : T;

type Paths13669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13669<K, Paths13669<T[K], Prev13669[D]>> : never }[keyof T]
  : never;

type Prev13669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13669 {
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

type ConfigPaths13669 = Paths13669<NestedConfig13669>;

interface HeavyProps13669 {
  config: DeepPartial13669<NestedConfig13669>;
  path?: ConfigPaths13669;
}

const HeavyComponent13669 = memo(function HeavyComponent13669({ config }: HeavyProps13669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13669.displayName = 'HeavyComponent13669';
export default HeavyComponent13669;
