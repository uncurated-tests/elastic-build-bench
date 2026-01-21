'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7000<T> = T extends (infer U)[]
  ? DeepReadonlyArray7000<U>
  : T extends object
  ? DeepReadonlyObject7000<T>
  : T;

interface DeepReadonlyArray7000<T> extends ReadonlyArray<DeepReadonly7000<T>> {}

type DeepReadonlyObject7000<T> = {
  readonly [P in keyof T]: DeepReadonly7000<T[P]>;
};

type UnionToIntersection7000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7000<T> = UnionToIntersection7000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7000<T extends unknown[], V> = [...T, V];

type TuplifyUnion7000<T, L = LastOf7000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7000<TuplifyUnion7000<Exclude<T, L>>, L>;

type DeepPartial7000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7000<T[P]> }
  : T;

type Paths7000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7000<K, Paths7000<T[K], Prev7000[D]>> : never }[keyof T]
  : never;

type Prev7000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7000 {
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

type ConfigPaths7000 = Paths7000<NestedConfig7000>;

interface HeavyProps7000 {
  config: DeepPartial7000<NestedConfig7000>;
  path?: ConfigPaths7000;
}

const HeavyComponent7000 = memo(function HeavyComponent7000({ config }: HeavyProps7000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7000.displayName = 'HeavyComponent7000';
export default HeavyComponent7000;
