'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7738<T> = T extends (infer U)[]
  ? DeepReadonlyArray7738<U>
  : T extends object
  ? DeepReadonlyObject7738<T>
  : T;

interface DeepReadonlyArray7738<T> extends ReadonlyArray<DeepReadonly7738<T>> {}

type DeepReadonlyObject7738<T> = {
  readonly [P in keyof T]: DeepReadonly7738<T[P]>;
};

type UnionToIntersection7738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7738<T> = UnionToIntersection7738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7738<T extends unknown[], V> = [...T, V];

type TuplifyUnion7738<T, L = LastOf7738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7738<TuplifyUnion7738<Exclude<T, L>>, L>;

type DeepPartial7738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7738<T[P]> }
  : T;

type Paths7738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7738<K, Paths7738<T[K], Prev7738[D]>> : never }[keyof T]
  : never;

type Prev7738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7738 {
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

type ConfigPaths7738 = Paths7738<NestedConfig7738>;

interface HeavyProps7738 {
  config: DeepPartial7738<NestedConfig7738>;
  path?: ConfigPaths7738;
}

const HeavyComponent7738 = memo(function HeavyComponent7738({ config }: HeavyProps7738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7738.displayName = 'HeavyComponent7738';
export default HeavyComponent7738;
