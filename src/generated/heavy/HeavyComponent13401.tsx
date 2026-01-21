'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13401<T> = T extends (infer U)[]
  ? DeepReadonlyArray13401<U>
  : T extends object
  ? DeepReadonlyObject13401<T>
  : T;

interface DeepReadonlyArray13401<T> extends ReadonlyArray<DeepReadonly13401<T>> {}

type DeepReadonlyObject13401<T> = {
  readonly [P in keyof T]: DeepReadonly13401<T[P]>;
};

type UnionToIntersection13401<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13401<T> = UnionToIntersection13401<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13401<T extends unknown[], V> = [...T, V];

type TuplifyUnion13401<T, L = LastOf13401<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13401<TuplifyUnion13401<Exclude<T, L>>, L>;

type DeepPartial13401<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13401<T[P]> }
  : T;

type Paths13401<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13401<K, Paths13401<T[K], Prev13401[D]>> : never }[keyof T]
  : never;

type Prev13401 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13401<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13401 {
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

type ConfigPaths13401 = Paths13401<NestedConfig13401>;

interface HeavyProps13401 {
  config: DeepPartial13401<NestedConfig13401>;
  path?: ConfigPaths13401;
}

const HeavyComponent13401 = memo(function HeavyComponent13401({ config }: HeavyProps13401) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13401) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13401 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13401: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13401.displayName = 'HeavyComponent13401';
export default HeavyComponent13401;
