'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13776<T> = T extends (infer U)[]
  ? DeepReadonlyArray13776<U>
  : T extends object
  ? DeepReadonlyObject13776<T>
  : T;

interface DeepReadonlyArray13776<T> extends ReadonlyArray<DeepReadonly13776<T>> {}

type DeepReadonlyObject13776<T> = {
  readonly [P in keyof T]: DeepReadonly13776<T[P]>;
};

type UnionToIntersection13776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13776<T> = UnionToIntersection13776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13776<T extends unknown[], V> = [...T, V];

type TuplifyUnion13776<T, L = LastOf13776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13776<TuplifyUnion13776<Exclude<T, L>>, L>;

type DeepPartial13776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13776<T[P]> }
  : T;

type Paths13776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13776<K, Paths13776<T[K], Prev13776[D]>> : never }[keyof T]
  : never;

type Prev13776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13776 {
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

type ConfigPaths13776 = Paths13776<NestedConfig13776>;

interface HeavyProps13776 {
  config: DeepPartial13776<NestedConfig13776>;
  path?: ConfigPaths13776;
}

const HeavyComponent13776 = memo(function HeavyComponent13776({ config }: HeavyProps13776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13776.displayName = 'HeavyComponent13776';
export default HeavyComponent13776;
