'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13960<T> = T extends (infer U)[]
  ? DeepReadonlyArray13960<U>
  : T extends object
  ? DeepReadonlyObject13960<T>
  : T;

interface DeepReadonlyArray13960<T> extends ReadonlyArray<DeepReadonly13960<T>> {}

type DeepReadonlyObject13960<T> = {
  readonly [P in keyof T]: DeepReadonly13960<T[P]>;
};

type UnionToIntersection13960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13960<T> = UnionToIntersection13960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13960<T extends unknown[], V> = [...T, V];

type TuplifyUnion13960<T, L = LastOf13960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13960<TuplifyUnion13960<Exclude<T, L>>, L>;

type DeepPartial13960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13960<T[P]> }
  : T;

type Paths13960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13960<K, Paths13960<T[K], Prev13960[D]>> : never }[keyof T]
  : never;

type Prev13960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13960 {
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

type ConfigPaths13960 = Paths13960<NestedConfig13960>;

interface HeavyProps13960 {
  config: DeepPartial13960<NestedConfig13960>;
  path?: ConfigPaths13960;
}

const HeavyComponent13960 = memo(function HeavyComponent13960({ config }: HeavyProps13960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13960.displayName = 'HeavyComponent13960';
export default HeavyComponent13960;
