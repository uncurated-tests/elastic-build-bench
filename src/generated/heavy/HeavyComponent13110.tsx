'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13110<T> = T extends (infer U)[]
  ? DeepReadonlyArray13110<U>
  : T extends object
  ? DeepReadonlyObject13110<T>
  : T;

interface DeepReadonlyArray13110<T> extends ReadonlyArray<DeepReadonly13110<T>> {}

type DeepReadonlyObject13110<T> = {
  readonly [P in keyof T]: DeepReadonly13110<T[P]>;
};

type UnionToIntersection13110<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13110<T> = UnionToIntersection13110<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13110<T extends unknown[], V> = [...T, V];

type TuplifyUnion13110<T, L = LastOf13110<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13110<TuplifyUnion13110<Exclude<T, L>>, L>;

type DeepPartial13110<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13110<T[P]> }
  : T;

type Paths13110<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13110<K, Paths13110<T[K], Prev13110[D]>> : never }[keyof T]
  : never;

type Prev13110 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13110<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13110 {
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

type ConfigPaths13110 = Paths13110<NestedConfig13110>;

interface HeavyProps13110 {
  config: DeepPartial13110<NestedConfig13110>;
  path?: ConfigPaths13110;
}

const HeavyComponent13110 = memo(function HeavyComponent13110({ config }: HeavyProps13110) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13110) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13110 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13110: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13110.displayName = 'HeavyComponent13110';
export default HeavyComponent13110;
