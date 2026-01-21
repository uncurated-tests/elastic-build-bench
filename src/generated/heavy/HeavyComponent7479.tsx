'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7479<T> = T extends (infer U)[]
  ? DeepReadonlyArray7479<U>
  : T extends object
  ? DeepReadonlyObject7479<T>
  : T;

interface DeepReadonlyArray7479<T> extends ReadonlyArray<DeepReadonly7479<T>> {}

type DeepReadonlyObject7479<T> = {
  readonly [P in keyof T]: DeepReadonly7479<T[P]>;
};

type UnionToIntersection7479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7479<T> = UnionToIntersection7479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7479<T extends unknown[], V> = [...T, V];

type TuplifyUnion7479<T, L = LastOf7479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7479<TuplifyUnion7479<Exclude<T, L>>, L>;

type DeepPartial7479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7479<T[P]> }
  : T;

type Paths7479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7479<K, Paths7479<T[K], Prev7479[D]>> : never }[keyof T]
  : never;

type Prev7479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7479 {
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

type ConfigPaths7479 = Paths7479<NestedConfig7479>;

interface HeavyProps7479 {
  config: DeepPartial7479<NestedConfig7479>;
  path?: ConfigPaths7479;
}

const HeavyComponent7479 = memo(function HeavyComponent7479({ config }: HeavyProps7479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7479.displayName = 'HeavyComponent7479';
export default HeavyComponent7479;
