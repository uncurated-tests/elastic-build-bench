'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13527<T> = T extends (infer U)[]
  ? DeepReadonlyArray13527<U>
  : T extends object
  ? DeepReadonlyObject13527<T>
  : T;

interface DeepReadonlyArray13527<T> extends ReadonlyArray<DeepReadonly13527<T>> {}

type DeepReadonlyObject13527<T> = {
  readonly [P in keyof T]: DeepReadonly13527<T[P]>;
};

type UnionToIntersection13527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13527<T> = UnionToIntersection13527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13527<T extends unknown[], V> = [...T, V];

type TuplifyUnion13527<T, L = LastOf13527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13527<TuplifyUnion13527<Exclude<T, L>>, L>;

type DeepPartial13527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13527<T[P]> }
  : T;

type Paths13527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13527<K, Paths13527<T[K], Prev13527[D]>> : never }[keyof T]
  : never;

type Prev13527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13527 {
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

type ConfigPaths13527 = Paths13527<NestedConfig13527>;

interface HeavyProps13527 {
  config: DeepPartial13527<NestedConfig13527>;
  path?: ConfigPaths13527;
}

const HeavyComponent13527 = memo(function HeavyComponent13527({ config }: HeavyProps13527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13527.displayName = 'HeavyComponent13527';
export default HeavyComponent13527;
