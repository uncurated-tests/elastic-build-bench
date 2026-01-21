'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13935<T> = T extends (infer U)[]
  ? DeepReadonlyArray13935<U>
  : T extends object
  ? DeepReadonlyObject13935<T>
  : T;

interface DeepReadonlyArray13935<T> extends ReadonlyArray<DeepReadonly13935<T>> {}

type DeepReadonlyObject13935<T> = {
  readonly [P in keyof T]: DeepReadonly13935<T[P]>;
};

type UnionToIntersection13935<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13935<T> = UnionToIntersection13935<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13935<T extends unknown[], V> = [...T, V];

type TuplifyUnion13935<T, L = LastOf13935<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13935<TuplifyUnion13935<Exclude<T, L>>, L>;

type DeepPartial13935<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13935<T[P]> }
  : T;

type Paths13935<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13935<K, Paths13935<T[K], Prev13935[D]>> : never }[keyof T]
  : never;

type Prev13935 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13935<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13935 {
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

type ConfigPaths13935 = Paths13935<NestedConfig13935>;

interface HeavyProps13935 {
  config: DeepPartial13935<NestedConfig13935>;
  path?: ConfigPaths13935;
}

const HeavyComponent13935 = memo(function HeavyComponent13935({ config }: HeavyProps13935) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13935) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13935 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13935: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13935.displayName = 'HeavyComponent13935';
export default HeavyComponent13935;
