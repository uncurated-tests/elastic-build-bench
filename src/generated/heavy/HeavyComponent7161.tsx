'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7161<T> = T extends (infer U)[]
  ? DeepReadonlyArray7161<U>
  : T extends object
  ? DeepReadonlyObject7161<T>
  : T;

interface DeepReadonlyArray7161<T> extends ReadonlyArray<DeepReadonly7161<T>> {}

type DeepReadonlyObject7161<T> = {
  readonly [P in keyof T]: DeepReadonly7161<T[P]>;
};

type UnionToIntersection7161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7161<T> = UnionToIntersection7161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7161<T extends unknown[], V> = [...T, V];

type TuplifyUnion7161<T, L = LastOf7161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7161<TuplifyUnion7161<Exclude<T, L>>, L>;

type DeepPartial7161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7161<T[P]> }
  : T;

type Paths7161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7161<K, Paths7161<T[K], Prev7161[D]>> : never }[keyof T]
  : never;

type Prev7161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7161 {
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

type ConfigPaths7161 = Paths7161<NestedConfig7161>;

interface HeavyProps7161 {
  config: DeepPartial7161<NestedConfig7161>;
  path?: ConfigPaths7161;
}

const HeavyComponent7161 = memo(function HeavyComponent7161({ config }: HeavyProps7161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7161.displayName = 'HeavyComponent7161';
export default HeavyComponent7161;
