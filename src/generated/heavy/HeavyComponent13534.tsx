'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13534<T> = T extends (infer U)[]
  ? DeepReadonlyArray13534<U>
  : T extends object
  ? DeepReadonlyObject13534<T>
  : T;

interface DeepReadonlyArray13534<T> extends ReadonlyArray<DeepReadonly13534<T>> {}

type DeepReadonlyObject13534<T> = {
  readonly [P in keyof T]: DeepReadonly13534<T[P]>;
};

type UnionToIntersection13534<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13534<T> = UnionToIntersection13534<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13534<T extends unknown[], V> = [...T, V];

type TuplifyUnion13534<T, L = LastOf13534<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13534<TuplifyUnion13534<Exclude<T, L>>, L>;

type DeepPartial13534<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13534<T[P]> }
  : T;

type Paths13534<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13534<K, Paths13534<T[K], Prev13534[D]>> : never }[keyof T]
  : never;

type Prev13534 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13534<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13534 {
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

type ConfigPaths13534 = Paths13534<NestedConfig13534>;

interface HeavyProps13534 {
  config: DeepPartial13534<NestedConfig13534>;
  path?: ConfigPaths13534;
}

const HeavyComponent13534 = memo(function HeavyComponent13534({ config }: HeavyProps13534) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13534) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13534 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13534: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13534.displayName = 'HeavyComponent13534';
export default HeavyComponent13534;
