'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7730<T> = T extends (infer U)[]
  ? DeepReadonlyArray7730<U>
  : T extends object
  ? DeepReadonlyObject7730<T>
  : T;

interface DeepReadonlyArray7730<T> extends ReadonlyArray<DeepReadonly7730<T>> {}

type DeepReadonlyObject7730<T> = {
  readonly [P in keyof T]: DeepReadonly7730<T[P]>;
};

type UnionToIntersection7730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7730<T> = UnionToIntersection7730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7730<T extends unknown[], V> = [...T, V];

type TuplifyUnion7730<T, L = LastOf7730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7730<TuplifyUnion7730<Exclude<T, L>>, L>;

type DeepPartial7730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7730<T[P]> }
  : T;

type Paths7730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7730<K, Paths7730<T[K], Prev7730[D]>> : never }[keyof T]
  : never;

type Prev7730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7730 {
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

type ConfigPaths7730 = Paths7730<NestedConfig7730>;

interface HeavyProps7730 {
  config: DeepPartial7730<NestedConfig7730>;
  path?: ConfigPaths7730;
}

const HeavyComponent7730 = memo(function HeavyComponent7730({ config }: HeavyProps7730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7730.displayName = 'HeavyComponent7730';
export default HeavyComponent7730;
