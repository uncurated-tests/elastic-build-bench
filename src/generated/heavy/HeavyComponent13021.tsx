'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13021<T> = T extends (infer U)[]
  ? DeepReadonlyArray13021<U>
  : T extends object
  ? DeepReadonlyObject13021<T>
  : T;

interface DeepReadonlyArray13021<T> extends ReadonlyArray<DeepReadonly13021<T>> {}

type DeepReadonlyObject13021<T> = {
  readonly [P in keyof T]: DeepReadonly13021<T[P]>;
};

type UnionToIntersection13021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13021<T> = UnionToIntersection13021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13021<T extends unknown[], V> = [...T, V];

type TuplifyUnion13021<T, L = LastOf13021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13021<TuplifyUnion13021<Exclude<T, L>>, L>;

type DeepPartial13021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13021<T[P]> }
  : T;

type Paths13021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13021<K, Paths13021<T[K], Prev13021[D]>> : never }[keyof T]
  : never;

type Prev13021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13021 {
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

type ConfigPaths13021 = Paths13021<NestedConfig13021>;

interface HeavyProps13021 {
  config: DeepPartial13021<NestedConfig13021>;
  path?: ConfigPaths13021;
}

const HeavyComponent13021 = memo(function HeavyComponent13021({ config }: HeavyProps13021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13021.displayName = 'HeavyComponent13021';
export default HeavyComponent13021;
