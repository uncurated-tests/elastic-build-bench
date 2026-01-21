'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly157<T> = T extends (infer U)[]
  ? DeepReadonlyArray157<U>
  : T extends object
  ? DeepReadonlyObject157<T>
  : T;

interface DeepReadonlyArray157<T> extends ReadonlyArray<DeepReadonly157<T>> {}

type DeepReadonlyObject157<T> = {
  readonly [P in keyof T]: DeepReadonly157<T[P]>;
};

type UnionToIntersection157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf157<T> = UnionToIntersection157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push157<T extends unknown[], V> = [...T, V];

type TuplifyUnion157<T, L = LastOf157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push157<TuplifyUnion157<Exclude<T, L>>, L>;

type DeepPartial157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial157<T[P]> }
  : T;

type Paths157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join157<K, Paths157<T[K], Prev157[D]>> : never }[keyof T]
  : never;

type Prev157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig157 {
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

type ConfigPaths157 = Paths157<NestedConfig157>;

interface HeavyProps157 {
  config: DeepPartial157<NestedConfig157>;
  path?: ConfigPaths157;
}

const HeavyComponent157 = memo(function HeavyComponent157({ config }: HeavyProps157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent157.displayName = 'HeavyComponent157';
export default HeavyComponent157;
