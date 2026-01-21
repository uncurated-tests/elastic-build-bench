'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13879<T> = T extends (infer U)[]
  ? DeepReadonlyArray13879<U>
  : T extends object
  ? DeepReadonlyObject13879<T>
  : T;

interface DeepReadonlyArray13879<T> extends ReadonlyArray<DeepReadonly13879<T>> {}

type DeepReadonlyObject13879<T> = {
  readonly [P in keyof T]: DeepReadonly13879<T[P]>;
};

type UnionToIntersection13879<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13879<T> = UnionToIntersection13879<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13879<T extends unknown[], V> = [...T, V];

type TuplifyUnion13879<T, L = LastOf13879<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13879<TuplifyUnion13879<Exclude<T, L>>, L>;

type DeepPartial13879<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13879<T[P]> }
  : T;

type Paths13879<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13879<K, Paths13879<T[K], Prev13879[D]>> : never }[keyof T]
  : never;

type Prev13879 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13879<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13879 {
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

type ConfigPaths13879 = Paths13879<NestedConfig13879>;

interface HeavyProps13879 {
  config: DeepPartial13879<NestedConfig13879>;
  path?: ConfigPaths13879;
}

const HeavyComponent13879 = memo(function HeavyComponent13879({ config }: HeavyProps13879) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13879) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13879 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13879: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13879.displayName = 'HeavyComponent13879';
export default HeavyComponent13879;
