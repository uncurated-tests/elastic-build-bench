'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13680<T> = T extends (infer U)[]
  ? DeepReadonlyArray13680<U>
  : T extends object
  ? DeepReadonlyObject13680<T>
  : T;

interface DeepReadonlyArray13680<T> extends ReadonlyArray<DeepReadonly13680<T>> {}

type DeepReadonlyObject13680<T> = {
  readonly [P in keyof T]: DeepReadonly13680<T[P]>;
};

type UnionToIntersection13680<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13680<T> = UnionToIntersection13680<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13680<T extends unknown[], V> = [...T, V];

type TuplifyUnion13680<T, L = LastOf13680<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13680<TuplifyUnion13680<Exclude<T, L>>, L>;

type DeepPartial13680<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13680<T[P]> }
  : T;

type Paths13680<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13680<K, Paths13680<T[K], Prev13680[D]>> : never }[keyof T]
  : never;

type Prev13680 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13680<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13680 {
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

type ConfigPaths13680 = Paths13680<NestedConfig13680>;

interface HeavyProps13680 {
  config: DeepPartial13680<NestedConfig13680>;
  path?: ConfigPaths13680;
}

const HeavyComponent13680 = memo(function HeavyComponent13680({ config }: HeavyProps13680) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13680) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13680 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13680: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13680.displayName = 'HeavyComponent13680';
export default HeavyComponent13680;
