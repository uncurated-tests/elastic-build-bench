'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13648<T> = T extends (infer U)[]
  ? DeepReadonlyArray13648<U>
  : T extends object
  ? DeepReadonlyObject13648<T>
  : T;

interface DeepReadonlyArray13648<T> extends ReadonlyArray<DeepReadonly13648<T>> {}

type DeepReadonlyObject13648<T> = {
  readonly [P in keyof T]: DeepReadonly13648<T[P]>;
};

type UnionToIntersection13648<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13648<T> = UnionToIntersection13648<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13648<T extends unknown[], V> = [...T, V];

type TuplifyUnion13648<T, L = LastOf13648<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13648<TuplifyUnion13648<Exclude<T, L>>, L>;

type DeepPartial13648<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13648<T[P]> }
  : T;

type Paths13648<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13648<K, Paths13648<T[K], Prev13648[D]>> : never }[keyof T]
  : never;

type Prev13648 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13648<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13648 {
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

type ConfigPaths13648 = Paths13648<NestedConfig13648>;

interface HeavyProps13648 {
  config: DeepPartial13648<NestedConfig13648>;
  path?: ConfigPaths13648;
}

const HeavyComponent13648 = memo(function HeavyComponent13648({ config }: HeavyProps13648) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13648) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13648 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13648: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13648.displayName = 'HeavyComponent13648';
export default HeavyComponent13648;
