'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13566<T> = T extends (infer U)[]
  ? DeepReadonlyArray13566<U>
  : T extends object
  ? DeepReadonlyObject13566<T>
  : T;

interface DeepReadonlyArray13566<T> extends ReadonlyArray<DeepReadonly13566<T>> {}

type DeepReadonlyObject13566<T> = {
  readonly [P in keyof T]: DeepReadonly13566<T[P]>;
};

type UnionToIntersection13566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13566<T> = UnionToIntersection13566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13566<T extends unknown[], V> = [...T, V];

type TuplifyUnion13566<T, L = LastOf13566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13566<TuplifyUnion13566<Exclude<T, L>>, L>;

type DeepPartial13566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13566<T[P]> }
  : T;

type Paths13566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13566<K, Paths13566<T[K], Prev13566[D]>> : never }[keyof T]
  : never;

type Prev13566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13566 {
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

type ConfigPaths13566 = Paths13566<NestedConfig13566>;

interface HeavyProps13566 {
  config: DeepPartial13566<NestedConfig13566>;
  path?: ConfigPaths13566;
}

const HeavyComponent13566 = memo(function HeavyComponent13566({ config }: HeavyProps13566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13566.displayName = 'HeavyComponent13566';
export default HeavyComponent13566;
