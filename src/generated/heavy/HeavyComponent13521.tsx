'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13521<T> = T extends (infer U)[]
  ? DeepReadonlyArray13521<U>
  : T extends object
  ? DeepReadonlyObject13521<T>
  : T;

interface DeepReadonlyArray13521<T> extends ReadonlyArray<DeepReadonly13521<T>> {}

type DeepReadonlyObject13521<T> = {
  readonly [P in keyof T]: DeepReadonly13521<T[P]>;
};

type UnionToIntersection13521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13521<T> = UnionToIntersection13521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13521<T extends unknown[], V> = [...T, V];

type TuplifyUnion13521<T, L = LastOf13521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13521<TuplifyUnion13521<Exclude<T, L>>, L>;

type DeepPartial13521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13521<T[P]> }
  : T;

type Paths13521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13521<K, Paths13521<T[K], Prev13521[D]>> : never }[keyof T]
  : never;

type Prev13521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13521 {
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

type ConfigPaths13521 = Paths13521<NestedConfig13521>;

interface HeavyProps13521 {
  config: DeepPartial13521<NestedConfig13521>;
  path?: ConfigPaths13521;
}

const HeavyComponent13521 = memo(function HeavyComponent13521({ config }: HeavyProps13521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13521.displayName = 'HeavyComponent13521';
export default HeavyComponent13521;
