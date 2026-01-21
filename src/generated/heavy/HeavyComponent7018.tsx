'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7018<T> = T extends (infer U)[]
  ? DeepReadonlyArray7018<U>
  : T extends object
  ? DeepReadonlyObject7018<T>
  : T;

interface DeepReadonlyArray7018<T> extends ReadonlyArray<DeepReadonly7018<T>> {}

type DeepReadonlyObject7018<T> = {
  readonly [P in keyof T]: DeepReadonly7018<T[P]>;
};

type UnionToIntersection7018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7018<T> = UnionToIntersection7018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7018<T extends unknown[], V> = [...T, V];

type TuplifyUnion7018<T, L = LastOf7018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7018<TuplifyUnion7018<Exclude<T, L>>, L>;

type DeepPartial7018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7018<T[P]> }
  : T;

type Paths7018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7018<K, Paths7018<T[K], Prev7018[D]>> : never }[keyof T]
  : never;

type Prev7018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7018 {
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

type ConfigPaths7018 = Paths7018<NestedConfig7018>;

interface HeavyProps7018 {
  config: DeepPartial7018<NestedConfig7018>;
  path?: ConfigPaths7018;
}

const HeavyComponent7018 = memo(function HeavyComponent7018({ config }: HeavyProps7018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7018.displayName = 'HeavyComponent7018';
export default HeavyComponent7018;
