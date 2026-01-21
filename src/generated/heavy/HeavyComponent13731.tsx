'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13731<T> = T extends (infer U)[]
  ? DeepReadonlyArray13731<U>
  : T extends object
  ? DeepReadonlyObject13731<T>
  : T;

interface DeepReadonlyArray13731<T> extends ReadonlyArray<DeepReadonly13731<T>> {}

type DeepReadonlyObject13731<T> = {
  readonly [P in keyof T]: DeepReadonly13731<T[P]>;
};

type UnionToIntersection13731<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13731<T> = UnionToIntersection13731<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13731<T extends unknown[], V> = [...T, V];

type TuplifyUnion13731<T, L = LastOf13731<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13731<TuplifyUnion13731<Exclude<T, L>>, L>;

type DeepPartial13731<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13731<T[P]> }
  : T;

type Paths13731<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13731<K, Paths13731<T[K], Prev13731[D]>> : never }[keyof T]
  : never;

type Prev13731 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13731<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13731 {
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

type ConfigPaths13731 = Paths13731<NestedConfig13731>;

interface HeavyProps13731 {
  config: DeepPartial13731<NestedConfig13731>;
  path?: ConfigPaths13731;
}

const HeavyComponent13731 = memo(function HeavyComponent13731({ config }: HeavyProps13731) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13731) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13731 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13731: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13731.displayName = 'HeavyComponent13731';
export default HeavyComponent13731;
