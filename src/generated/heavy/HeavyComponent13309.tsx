'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13309<T> = T extends (infer U)[]
  ? DeepReadonlyArray13309<U>
  : T extends object
  ? DeepReadonlyObject13309<T>
  : T;

interface DeepReadonlyArray13309<T> extends ReadonlyArray<DeepReadonly13309<T>> {}

type DeepReadonlyObject13309<T> = {
  readonly [P in keyof T]: DeepReadonly13309<T[P]>;
};

type UnionToIntersection13309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13309<T> = UnionToIntersection13309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13309<T extends unknown[], V> = [...T, V];

type TuplifyUnion13309<T, L = LastOf13309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13309<TuplifyUnion13309<Exclude<T, L>>, L>;

type DeepPartial13309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13309<T[P]> }
  : T;

type Paths13309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13309<K, Paths13309<T[K], Prev13309[D]>> : never }[keyof T]
  : never;

type Prev13309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13309 {
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

type ConfigPaths13309 = Paths13309<NestedConfig13309>;

interface HeavyProps13309 {
  config: DeepPartial13309<NestedConfig13309>;
  path?: ConfigPaths13309;
}

const HeavyComponent13309 = memo(function HeavyComponent13309({ config }: HeavyProps13309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13309.displayName = 'HeavyComponent13309';
export default HeavyComponent13309;
