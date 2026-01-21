'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13573<T> = T extends (infer U)[]
  ? DeepReadonlyArray13573<U>
  : T extends object
  ? DeepReadonlyObject13573<T>
  : T;

interface DeepReadonlyArray13573<T> extends ReadonlyArray<DeepReadonly13573<T>> {}

type DeepReadonlyObject13573<T> = {
  readonly [P in keyof T]: DeepReadonly13573<T[P]>;
};

type UnionToIntersection13573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13573<T> = UnionToIntersection13573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13573<T extends unknown[], V> = [...T, V];

type TuplifyUnion13573<T, L = LastOf13573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13573<TuplifyUnion13573<Exclude<T, L>>, L>;

type DeepPartial13573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13573<T[P]> }
  : T;

type Paths13573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13573<K, Paths13573<T[K], Prev13573[D]>> : never }[keyof T]
  : never;

type Prev13573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13573 {
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

type ConfigPaths13573 = Paths13573<NestedConfig13573>;

interface HeavyProps13573 {
  config: DeepPartial13573<NestedConfig13573>;
  path?: ConfigPaths13573;
}

const HeavyComponent13573 = memo(function HeavyComponent13573({ config }: HeavyProps13573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13573.displayName = 'HeavyComponent13573';
export default HeavyComponent13573;
