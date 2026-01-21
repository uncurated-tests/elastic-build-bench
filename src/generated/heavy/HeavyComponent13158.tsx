'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13158<T> = T extends (infer U)[]
  ? DeepReadonlyArray13158<U>
  : T extends object
  ? DeepReadonlyObject13158<T>
  : T;

interface DeepReadonlyArray13158<T> extends ReadonlyArray<DeepReadonly13158<T>> {}

type DeepReadonlyObject13158<T> = {
  readonly [P in keyof T]: DeepReadonly13158<T[P]>;
};

type UnionToIntersection13158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13158<T> = UnionToIntersection13158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13158<T extends unknown[], V> = [...T, V];

type TuplifyUnion13158<T, L = LastOf13158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13158<TuplifyUnion13158<Exclude<T, L>>, L>;

type DeepPartial13158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13158<T[P]> }
  : T;

type Paths13158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13158<K, Paths13158<T[K], Prev13158[D]>> : never }[keyof T]
  : never;

type Prev13158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13158 {
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

type ConfigPaths13158 = Paths13158<NestedConfig13158>;

interface HeavyProps13158 {
  config: DeepPartial13158<NestedConfig13158>;
  path?: ConfigPaths13158;
}

const HeavyComponent13158 = memo(function HeavyComponent13158({ config }: HeavyProps13158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13158.displayName = 'HeavyComponent13158';
export default HeavyComponent13158;
