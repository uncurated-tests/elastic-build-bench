'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13403<T> = T extends (infer U)[]
  ? DeepReadonlyArray13403<U>
  : T extends object
  ? DeepReadonlyObject13403<T>
  : T;

interface DeepReadonlyArray13403<T> extends ReadonlyArray<DeepReadonly13403<T>> {}

type DeepReadonlyObject13403<T> = {
  readonly [P in keyof T]: DeepReadonly13403<T[P]>;
};

type UnionToIntersection13403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13403<T> = UnionToIntersection13403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13403<T extends unknown[], V> = [...T, V];

type TuplifyUnion13403<T, L = LastOf13403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13403<TuplifyUnion13403<Exclude<T, L>>, L>;

type DeepPartial13403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13403<T[P]> }
  : T;

type Paths13403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13403<K, Paths13403<T[K], Prev13403[D]>> : never }[keyof T]
  : never;

type Prev13403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13403 {
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

type ConfigPaths13403 = Paths13403<NestedConfig13403>;

interface HeavyProps13403 {
  config: DeepPartial13403<NestedConfig13403>;
  path?: ConfigPaths13403;
}

const HeavyComponent13403 = memo(function HeavyComponent13403({ config }: HeavyProps13403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13403.displayName = 'HeavyComponent13403';
export default HeavyComponent13403;
