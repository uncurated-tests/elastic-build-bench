'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13433<T> = T extends (infer U)[]
  ? DeepReadonlyArray13433<U>
  : T extends object
  ? DeepReadonlyObject13433<T>
  : T;

interface DeepReadonlyArray13433<T> extends ReadonlyArray<DeepReadonly13433<T>> {}

type DeepReadonlyObject13433<T> = {
  readonly [P in keyof T]: DeepReadonly13433<T[P]>;
};

type UnionToIntersection13433<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13433<T> = UnionToIntersection13433<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13433<T extends unknown[], V> = [...T, V];

type TuplifyUnion13433<T, L = LastOf13433<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13433<TuplifyUnion13433<Exclude<T, L>>, L>;

type DeepPartial13433<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13433<T[P]> }
  : T;

type Paths13433<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13433<K, Paths13433<T[K], Prev13433[D]>> : never }[keyof T]
  : never;

type Prev13433 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13433<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13433 {
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

type ConfigPaths13433 = Paths13433<NestedConfig13433>;

interface HeavyProps13433 {
  config: DeepPartial13433<NestedConfig13433>;
  path?: ConfigPaths13433;
}

const HeavyComponent13433 = memo(function HeavyComponent13433({ config }: HeavyProps13433) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13433) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13433 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13433: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13433.displayName = 'HeavyComponent13433';
export default HeavyComponent13433;
