'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13350<T> = T extends (infer U)[]
  ? DeepReadonlyArray13350<U>
  : T extends object
  ? DeepReadonlyObject13350<T>
  : T;

interface DeepReadonlyArray13350<T> extends ReadonlyArray<DeepReadonly13350<T>> {}

type DeepReadonlyObject13350<T> = {
  readonly [P in keyof T]: DeepReadonly13350<T[P]>;
};

type UnionToIntersection13350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13350<T> = UnionToIntersection13350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13350<T extends unknown[], V> = [...T, V];

type TuplifyUnion13350<T, L = LastOf13350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13350<TuplifyUnion13350<Exclude<T, L>>, L>;

type DeepPartial13350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13350<T[P]> }
  : T;

type Paths13350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13350<K, Paths13350<T[K], Prev13350[D]>> : never }[keyof T]
  : never;

type Prev13350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13350 {
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

type ConfigPaths13350 = Paths13350<NestedConfig13350>;

interface HeavyProps13350 {
  config: DeepPartial13350<NestedConfig13350>;
  path?: ConfigPaths13350;
}

const HeavyComponent13350 = memo(function HeavyComponent13350({ config }: HeavyProps13350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13350.displayName = 'HeavyComponent13350';
export default HeavyComponent13350;
