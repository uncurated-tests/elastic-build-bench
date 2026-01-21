'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13099<T> = T extends (infer U)[]
  ? DeepReadonlyArray13099<U>
  : T extends object
  ? DeepReadonlyObject13099<T>
  : T;

interface DeepReadonlyArray13099<T> extends ReadonlyArray<DeepReadonly13099<T>> {}

type DeepReadonlyObject13099<T> = {
  readonly [P in keyof T]: DeepReadonly13099<T[P]>;
};

type UnionToIntersection13099<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13099<T> = UnionToIntersection13099<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13099<T extends unknown[], V> = [...T, V];

type TuplifyUnion13099<T, L = LastOf13099<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13099<TuplifyUnion13099<Exclude<T, L>>, L>;

type DeepPartial13099<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13099<T[P]> }
  : T;

type Paths13099<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13099<K, Paths13099<T[K], Prev13099[D]>> : never }[keyof T]
  : never;

type Prev13099 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13099<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13099 {
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

type ConfigPaths13099 = Paths13099<NestedConfig13099>;

interface HeavyProps13099 {
  config: DeepPartial13099<NestedConfig13099>;
  path?: ConfigPaths13099;
}

const HeavyComponent13099 = memo(function HeavyComponent13099({ config }: HeavyProps13099) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13099) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13099 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13099: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13099.displayName = 'HeavyComponent13099';
export default HeavyComponent13099;
