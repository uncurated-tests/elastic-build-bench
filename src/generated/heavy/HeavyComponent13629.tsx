'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13629<T> = T extends (infer U)[]
  ? DeepReadonlyArray13629<U>
  : T extends object
  ? DeepReadonlyObject13629<T>
  : T;

interface DeepReadonlyArray13629<T> extends ReadonlyArray<DeepReadonly13629<T>> {}

type DeepReadonlyObject13629<T> = {
  readonly [P in keyof T]: DeepReadonly13629<T[P]>;
};

type UnionToIntersection13629<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13629<T> = UnionToIntersection13629<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13629<T extends unknown[], V> = [...T, V];

type TuplifyUnion13629<T, L = LastOf13629<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13629<TuplifyUnion13629<Exclude<T, L>>, L>;

type DeepPartial13629<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13629<T[P]> }
  : T;

type Paths13629<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13629<K, Paths13629<T[K], Prev13629[D]>> : never }[keyof T]
  : never;

type Prev13629 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13629<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13629 {
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

type ConfigPaths13629 = Paths13629<NestedConfig13629>;

interface HeavyProps13629 {
  config: DeepPartial13629<NestedConfig13629>;
  path?: ConfigPaths13629;
}

const HeavyComponent13629 = memo(function HeavyComponent13629({ config }: HeavyProps13629) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13629) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13629 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13629: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13629.displayName = 'HeavyComponent13629';
export default HeavyComponent13629;
