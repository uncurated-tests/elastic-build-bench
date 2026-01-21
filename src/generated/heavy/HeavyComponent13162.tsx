'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13162<T> = T extends (infer U)[]
  ? DeepReadonlyArray13162<U>
  : T extends object
  ? DeepReadonlyObject13162<T>
  : T;

interface DeepReadonlyArray13162<T> extends ReadonlyArray<DeepReadonly13162<T>> {}

type DeepReadonlyObject13162<T> = {
  readonly [P in keyof T]: DeepReadonly13162<T[P]>;
};

type UnionToIntersection13162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13162<T> = UnionToIntersection13162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13162<T extends unknown[], V> = [...T, V];

type TuplifyUnion13162<T, L = LastOf13162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13162<TuplifyUnion13162<Exclude<T, L>>, L>;

type DeepPartial13162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13162<T[P]> }
  : T;

type Paths13162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13162<K, Paths13162<T[K], Prev13162[D]>> : never }[keyof T]
  : never;

type Prev13162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13162 {
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

type ConfigPaths13162 = Paths13162<NestedConfig13162>;

interface HeavyProps13162 {
  config: DeepPartial13162<NestedConfig13162>;
  path?: ConfigPaths13162;
}

const HeavyComponent13162 = memo(function HeavyComponent13162({ config }: HeavyProps13162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13162.displayName = 'HeavyComponent13162';
export default HeavyComponent13162;
