'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13922<T> = T extends (infer U)[]
  ? DeepReadonlyArray13922<U>
  : T extends object
  ? DeepReadonlyObject13922<T>
  : T;

interface DeepReadonlyArray13922<T> extends ReadonlyArray<DeepReadonly13922<T>> {}

type DeepReadonlyObject13922<T> = {
  readonly [P in keyof T]: DeepReadonly13922<T[P]>;
};

type UnionToIntersection13922<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13922<T> = UnionToIntersection13922<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13922<T extends unknown[], V> = [...T, V];

type TuplifyUnion13922<T, L = LastOf13922<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13922<TuplifyUnion13922<Exclude<T, L>>, L>;

type DeepPartial13922<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13922<T[P]> }
  : T;

type Paths13922<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13922<K, Paths13922<T[K], Prev13922[D]>> : never }[keyof T]
  : never;

type Prev13922 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13922<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13922 {
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

type ConfigPaths13922 = Paths13922<NestedConfig13922>;

interface HeavyProps13922 {
  config: DeepPartial13922<NestedConfig13922>;
  path?: ConfigPaths13922;
}

const HeavyComponent13922 = memo(function HeavyComponent13922({ config }: HeavyProps13922) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13922) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13922 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13922: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13922.displayName = 'HeavyComponent13922';
export default HeavyComponent13922;
