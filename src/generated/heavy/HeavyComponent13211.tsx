'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13211<T> = T extends (infer U)[]
  ? DeepReadonlyArray13211<U>
  : T extends object
  ? DeepReadonlyObject13211<T>
  : T;

interface DeepReadonlyArray13211<T> extends ReadonlyArray<DeepReadonly13211<T>> {}

type DeepReadonlyObject13211<T> = {
  readonly [P in keyof T]: DeepReadonly13211<T[P]>;
};

type UnionToIntersection13211<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13211<T> = UnionToIntersection13211<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13211<T extends unknown[], V> = [...T, V];

type TuplifyUnion13211<T, L = LastOf13211<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13211<TuplifyUnion13211<Exclude<T, L>>, L>;

type DeepPartial13211<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13211<T[P]> }
  : T;

type Paths13211<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13211<K, Paths13211<T[K], Prev13211[D]>> : never }[keyof T]
  : never;

type Prev13211 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13211<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13211 {
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

type ConfigPaths13211 = Paths13211<NestedConfig13211>;

interface HeavyProps13211 {
  config: DeepPartial13211<NestedConfig13211>;
  path?: ConfigPaths13211;
}

const HeavyComponent13211 = memo(function HeavyComponent13211({ config }: HeavyProps13211) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13211) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13211 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13211: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13211.displayName = 'HeavyComponent13211';
export default HeavyComponent13211;
