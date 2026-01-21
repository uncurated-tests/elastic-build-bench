'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13280<T> = T extends (infer U)[]
  ? DeepReadonlyArray13280<U>
  : T extends object
  ? DeepReadonlyObject13280<T>
  : T;

interface DeepReadonlyArray13280<T> extends ReadonlyArray<DeepReadonly13280<T>> {}

type DeepReadonlyObject13280<T> = {
  readonly [P in keyof T]: DeepReadonly13280<T[P]>;
};

type UnionToIntersection13280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13280<T> = UnionToIntersection13280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13280<T extends unknown[], V> = [...T, V];

type TuplifyUnion13280<T, L = LastOf13280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13280<TuplifyUnion13280<Exclude<T, L>>, L>;

type DeepPartial13280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13280<T[P]> }
  : T;

type Paths13280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13280<K, Paths13280<T[K], Prev13280[D]>> : never }[keyof T]
  : never;

type Prev13280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13280 {
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

type ConfigPaths13280 = Paths13280<NestedConfig13280>;

interface HeavyProps13280 {
  config: DeepPartial13280<NestedConfig13280>;
  path?: ConfigPaths13280;
}

const HeavyComponent13280 = memo(function HeavyComponent13280({ config }: HeavyProps13280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13280.displayName = 'HeavyComponent13280';
export default HeavyComponent13280;
