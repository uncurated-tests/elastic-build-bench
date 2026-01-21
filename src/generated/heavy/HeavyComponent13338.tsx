'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13338<T> = T extends (infer U)[]
  ? DeepReadonlyArray13338<U>
  : T extends object
  ? DeepReadonlyObject13338<T>
  : T;

interface DeepReadonlyArray13338<T> extends ReadonlyArray<DeepReadonly13338<T>> {}

type DeepReadonlyObject13338<T> = {
  readonly [P in keyof T]: DeepReadonly13338<T[P]>;
};

type UnionToIntersection13338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13338<T> = UnionToIntersection13338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13338<T extends unknown[], V> = [...T, V];

type TuplifyUnion13338<T, L = LastOf13338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13338<TuplifyUnion13338<Exclude<T, L>>, L>;

type DeepPartial13338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13338<T[P]> }
  : T;

type Paths13338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13338<K, Paths13338<T[K], Prev13338[D]>> : never }[keyof T]
  : never;

type Prev13338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13338 {
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

type ConfigPaths13338 = Paths13338<NestedConfig13338>;

interface HeavyProps13338 {
  config: DeepPartial13338<NestedConfig13338>;
  path?: ConfigPaths13338;
}

const HeavyComponent13338 = memo(function HeavyComponent13338({ config }: HeavyProps13338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13338.displayName = 'HeavyComponent13338';
export default HeavyComponent13338;
