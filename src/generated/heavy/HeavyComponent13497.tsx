'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13497<T> = T extends (infer U)[]
  ? DeepReadonlyArray13497<U>
  : T extends object
  ? DeepReadonlyObject13497<T>
  : T;

interface DeepReadonlyArray13497<T> extends ReadonlyArray<DeepReadonly13497<T>> {}

type DeepReadonlyObject13497<T> = {
  readonly [P in keyof T]: DeepReadonly13497<T[P]>;
};

type UnionToIntersection13497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13497<T> = UnionToIntersection13497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13497<T extends unknown[], V> = [...T, V];

type TuplifyUnion13497<T, L = LastOf13497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13497<TuplifyUnion13497<Exclude<T, L>>, L>;

type DeepPartial13497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13497<T[P]> }
  : T;

type Paths13497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13497<K, Paths13497<T[K], Prev13497[D]>> : never }[keyof T]
  : never;

type Prev13497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13497 {
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

type ConfigPaths13497 = Paths13497<NestedConfig13497>;

interface HeavyProps13497 {
  config: DeepPartial13497<NestedConfig13497>;
  path?: ConfigPaths13497;
}

const HeavyComponent13497 = memo(function HeavyComponent13497({ config }: HeavyProps13497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13497.displayName = 'HeavyComponent13497';
export default HeavyComponent13497;
