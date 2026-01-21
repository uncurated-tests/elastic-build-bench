'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13561<T> = T extends (infer U)[]
  ? DeepReadonlyArray13561<U>
  : T extends object
  ? DeepReadonlyObject13561<T>
  : T;

interface DeepReadonlyArray13561<T> extends ReadonlyArray<DeepReadonly13561<T>> {}

type DeepReadonlyObject13561<T> = {
  readonly [P in keyof T]: DeepReadonly13561<T[P]>;
};

type UnionToIntersection13561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13561<T> = UnionToIntersection13561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13561<T extends unknown[], V> = [...T, V];

type TuplifyUnion13561<T, L = LastOf13561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13561<TuplifyUnion13561<Exclude<T, L>>, L>;

type DeepPartial13561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13561<T[P]> }
  : T;

type Paths13561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13561<K, Paths13561<T[K], Prev13561[D]>> : never }[keyof T]
  : never;

type Prev13561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13561 {
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

type ConfigPaths13561 = Paths13561<NestedConfig13561>;

interface HeavyProps13561 {
  config: DeepPartial13561<NestedConfig13561>;
  path?: ConfigPaths13561;
}

const HeavyComponent13561 = memo(function HeavyComponent13561({ config }: HeavyProps13561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13561.displayName = 'HeavyComponent13561';
export default HeavyComponent13561;
