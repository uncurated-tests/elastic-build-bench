'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7676<T> = T extends (infer U)[]
  ? DeepReadonlyArray7676<U>
  : T extends object
  ? DeepReadonlyObject7676<T>
  : T;

interface DeepReadonlyArray7676<T> extends ReadonlyArray<DeepReadonly7676<T>> {}

type DeepReadonlyObject7676<T> = {
  readonly [P in keyof T]: DeepReadonly7676<T[P]>;
};

type UnionToIntersection7676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7676<T> = UnionToIntersection7676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7676<T extends unknown[], V> = [...T, V];

type TuplifyUnion7676<T, L = LastOf7676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7676<TuplifyUnion7676<Exclude<T, L>>, L>;

type DeepPartial7676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7676<T[P]> }
  : T;

type Paths7676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7676<K, Paths7676<T[K], Prev7676[D]>> : never }[keyof T]
  : never;

type Prev7676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7676 {
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

type ConfigPaths7676 = Paths7676<NestedConfig7676>;

interface HeavyProps7676 {
  config: DeepPartial7676<NestedConfig7676>;
  path?: ConfigPaths7676;
}

const HeavyComponent7676 = memo(function HeavyComponent7676({ config }: HeavyProps7676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7676.displayName = 'HeavyComponent7676';
export default HeavyComponent7676;
