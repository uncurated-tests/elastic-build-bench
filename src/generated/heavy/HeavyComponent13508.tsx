'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13508<T> = T extends (infer U)[]
  ? DeepReadonlyArray13508<U>
  : T extends object
  ? DeepReadonlyObject13508<T>
  : T;

interface DeepReadonlyArray13508<T> extends ReadonlyArray<DeepReadonly13508<T>> {}

type DeepReadonlyObject13508<T> = {
  readonly [P in keyof T]: DeepReadonly13508<T[P]>;
};

type UnionToIntersection13508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13508<T> = UnionToIntersection13508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13508<T extends unknown[], V> = [...T, V];

type TuplifyUnion13508<T, L = LastOf13508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13508<TuplifyUnion13508<Exclude<T, L>>, L>;

type DeepPartial13508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13508<T[P]> }
  : T;

type Paths13508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13508<K, Paths13508<T[K], Prev13508[D]>> : never }[keyof T]
  : never;

type Prev13508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13508 {
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

type ConfigPaths13508 = Paths13508<NestedConfig13508>;

interface HeavyProps13508 {
  config: DeepPartial13508<NestedConfig13508>;
  path?: ConfigPaths13508;
}

const HeavyComponent13508 = memo(function HeavyComponent13508({ config }: HeavyProps13508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13508.displayName = 'HeavyComponent13508';
export default HeavyComponent13508;
