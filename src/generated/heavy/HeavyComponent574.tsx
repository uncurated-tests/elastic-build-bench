'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly574<T> = T extends (infer U)[]
  ? DeepReadonlyArray574<U>
  : T extends object
  ? DeepReadonlyObject574<T>
  : T;

interface DeepReadonlyArray574<T> extends ReadonlyArray<DeepReadonly574<T>> {}

type DeepReadonlyObject574<T> = {
  readonly [P in keyof T]: DeepReadonly574<T[P]>;
};

type UnionToIntersection574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf574<T> = UnionToIntersection574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push574<T extends unknown[], V> = [...T, V];

type TuplifyUnion574<T, L = LastOf574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push574<TuplifyUnion574<Exclude<T, L>>, L>;

type DeepPartial574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial574<T[P]> }
  : T;

type Paths574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join574<K, Paths574<T[K], Prev574[D]>> : never }[keyof T]
  : never;

type Prev574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig574 {
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

type ConfigPaths574 = Paths574<NestedConfig574>;

interface HeavyProps574 {
  config: DeepPartial574<NestedConfig574>;
  path?: ConfigPaths574;
}

const HeavyComponent574 = memo(function HeavyComponent574({ config }: HeavyProps574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent574.displayName = 'HeavyComponent574';
export default HeavyComponent574;
