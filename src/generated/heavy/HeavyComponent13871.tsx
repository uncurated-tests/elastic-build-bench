'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13871<T> = T extends (infer U)[]
  ? DeepReadonlyArray13871<U>
  : T extends object
  ? DeepReadonlyObject13871<T>
  : T;

interface DeepReadonlyArray13871<T> extends ReadonlyArray<DeepReadonly13871<T>> {}

type DeepReadonlyObject13871<T> = {
  readonly [P in keyof T]: DeepReadonly13871<T[P]>;
};

type UnionToIntersection13871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13871<T> = UnionToIntersection13871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13871<T extends unknown[], V> = [...T, V];

type TuplifyUnion13871<T, L = LastOf13871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13871<TuplifyUnion13871<Exclude<T, L>>, L>;

type DeepPartial13871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13871<T[P]> }
  : T;

type Paths13871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13871<K, Paths13871<T[K], Prev13871[D]>> : never }[keyof T]
  : never;

type Prev13871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13871 {
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

type ConfigPaths13871 = Paths13871<NestedConfig13871>;

interface HeavyProps13871 {
  config: DeepPartial13871<NestedConfig13871>;
  path?: ConfigPaths13871;
}

const HeavyComponent13871 = memo(function HeavyComponent13871({ config }: HeavyProps13871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13871.displayName = 'HeavyComponent13871';
export default HeavyComponent13871;
