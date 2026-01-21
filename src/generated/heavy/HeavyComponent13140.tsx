'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13140<T> = T extends (infer U)[]
  ? DeepReadonlyArray13140<U>
  : T extends object
  ? DeepReadonlyObject13140<T>
  : T;

interface DeepReadonlyArray13140<T> extends ReadonlyArray<DeepReadonly13140<T>> {}

type DeepReadonlyObject13140<T> = {
  readonly [P in keyof T]: DeepReadonly13140<T[P]>;
};

type UnionToIntersection13140<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13140<T> = UnionToIntersection13140<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13140<T extends unknown[], V> = [...T, V];

type TuplifyUnion13140<T, L = LastOf13140<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13140<TuplifyUnion13140<Exclude<T, L>>, L>;

type DeepPartial13140<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13140<T[P]> }
  : T;

type Paths13140<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13140<K, Paths13140<T[K], Prev13140[D]>> : never }[keyof T]
  : never;

type Prev13140 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13140<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13140 {
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

type ConfigPaths13140 = Paths13140<NestedConfig13140>;

interface HeavyProps13140 {
  config: DeepPartial13140<NestedConfig13140>;
  path?: ConfigPaths13140;
}

const HeavyComponent13140 = memo(function HeavyComponent13140({ config }: HeavyProps13140) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13140) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13140 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13140: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13140.displayName = 'HeavyComponent13140';
export default HeavyComponent13140;
