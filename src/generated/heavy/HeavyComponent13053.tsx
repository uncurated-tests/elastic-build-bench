'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13053<T> = T extends (infer U)[]
  ? DeepReadonlyArray13053<U>
  : T extends object
  ? DeepReadonlyObject13053<T>
  : T;

interface DeepReadonlyArray13053<T> extends ReadonlyArray<DeepReadonly13053<T>> {}

type DeepReadonlyObject13053<T> = {
  readonly [P in keyof T]: DeepReadonly13053<T[P]>;
};

type UnionToIntersection13053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13053<T> = UnionToIntersection13053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13053<T extends unknown[], V> = [...T, V];

type TuplifyUnion13053<T, L = LastOf13053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13053<TuplifyUnion13053<Exclude<T, L>>, L>;

type DeepPartial13053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13053<T[P]> }
  : T;

type Paths13053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13053<K, Paths13053<T[K], Prev13053[D]>> : never }[keyof T]
  : never;

type Prev13053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13053 {
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

type ConfigPaths13053 = Paths13053<NestedConfig13053>;

interface HeavyProps13053 {
  config: DeepPartial13053<NestedConfig13053>;
  path?: ConfigPaths13053;
}

const HeavyComponent13053 = memo(function HeavyComponent13053({ config }: HeavyProps13053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13053.displayName = 'HeavyComponent13053';
export default HeavyComponent13053;
