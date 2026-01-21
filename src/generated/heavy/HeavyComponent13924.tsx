'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13924<T> = T extends (infer U)[]
  ? DeepReadonlyArray13924<U>
  : T extends object
  ? DeepReadonlyObject13924<T>
  : T;

interface DeepReadonlyArray13924<T> extends ReadonlyArray<DeepReadonly13924<T>> {}

type DeepReadonlyObject13924<T> = {
  readonly [P in keyof T]: DeepReadonly13924<T[P]>;
};

type UnionToIntersection13924<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13924<T> = UnionToIntersection13924<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13924<T extends unknown[], V> = [...T, V];

type TuplifyUnion13924<T, L = LastOf13924<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13924<TuplifyUnion13924<Exclude<T, L>>, L>;

type DeepPartial13924<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13924<T[P]> }
  : T;

type Paths13924<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13924<K, Paths13924<T[K], Prev13924[D]>> : never }[keyof T]
  : never;

type Prev13924 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13924<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13924 {
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

type ConfigPaths13924 = Paths13924<NestedConfig13924>;

interface HeavyProps13924 {
  config: DeepPartial13924<NestedConfig13924>;
  path?: ConfigPaths13924;
}

const HeavyComponent13924 = memo(function HeavyComponent13924({ config }: HeavyProps13924) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13924) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13924 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13924: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13924.displayName = 'HeavyComponent13924';
export default HeavyComponent13924;
