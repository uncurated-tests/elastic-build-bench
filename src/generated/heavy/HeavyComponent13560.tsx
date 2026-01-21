'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13560<T> = T extends (infer U)[]
  ? DeepReadonlyArray13560<U>
  : T extends object
  ? DeepReadonlyObject13560<T>
  : T;

interface DeepReadonlyArray13560<T> extends ReadonlyArray<DeepReadonly13560<T>> {}

type DeepReadonlyObject13560<T> = {
  readonly [P in keyof T]: DeepReadonly13560<T[P]>;
};

type UnionToIntersection13560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13560<T> = UnionToIntersection13560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13560<T extends unknown[], V> = [...T, V];

type TuplifyUnion13560<T, L = LastOf13560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13560<TuplifyUnion13560<Exclude<T, L>>, L>;

type DeepPartial13560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13560<T[P]> }
  : T;

type Paths13560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13560<K, Paths13560<T[K], Prev13560[D]>> : never }[keyof T]
  : never;

type Prev13560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13560 {
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

type ConfigPaths13560 = Paths13560<NestedConfig13560>;

interface HeavyProps13560 {
  config: DeepPartial13560<NestedConfig13560>;
  path?: ConfigPaths13560;
}

const HeavyComponent13560 = memo(function HeavyComponent13560({ config }: HeavyProps13560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13560.displayName = 'HeavyComponent13560';
export default HeavyComponent13560;
