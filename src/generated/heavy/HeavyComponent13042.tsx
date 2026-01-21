'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13042<T> = T extends (infer U)[]
  ? DeepReadonlyArray13042<U>
  : T extends object
  ? DeepReadonlyObject13042<T>
  : T;

interface DeepReadonlyArray13042<T> extends ReadonlyArray<DeepReadonly13042<T>> {}

type DeepReadonlyObject13042<T> = {
  readonly [P in keyof T]: DeepReadonly13042<T[P]>;
};

type UnionToIntersection13042<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13042<T> = UnionToIntersection13042<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13042<T extends unknown[], V> = [...T, V];

type TuplifyUnion13042<T, L = LastOf13042<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13042<TuplifyUnion13042<Exclude<T, L>>, L>;

type DeepPartial13042<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13042<T[P]> }
  : T;

type Paths13042<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13042<K, Paths13042<T[K], Prev13042[D]>> : never }[keyof T]
  : never;

type Prev13042 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13042<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13042 {
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

type ConfigPaths13042 = Paths13042<NestedConfig13042>;

interface HeavyProps13042 {
  config: DeepPartial13042<NestedConfig13042>;
  path?: ConfigPaths13042;
}

const HeavyComponent13042 = memo(function HeavyComponent13042({ config }: HeavyProps13042) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13042) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13042 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13042: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13042.displayName = 'HeavyComponent13042';
export default HeavyComponent13042;
