'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7278<T> = T extends (infer U)[]
  ? DeepReadonlyArray7278<U>
  : T extends object
  ? DeepReadonlyObject7278<T>
  : T;

interface DeepReadonlyArray7278<T> extends ReadonlyArray<DeepReadonly7278<T>> {}

type DeepReadonlyObject7278<T> = {
  readonly [P in keyof T]: DeepReadonly7278<T[P]>;
};

type UnionToIntersection7278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7278<T> = UnionToIntersection7278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7278<T extends unknown[], V> = [...T, V];

type TuplifyUnion7278<T, L = LastOf7278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7278<TuplifyUnion7278<Exclude<T, L>>, L>;

type DeepPartial7278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7278<T[P]> }
  : T;

type Paths7278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7278<K, Paths7278<T[K], Prev7278[D]>> : never }[keyof T]
  : never;

type Prev7278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7278 {
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

type ConfigPaths7278 = Paths7278<NestedConfig7278>;

interface HeavyProps7278 {
  config: DeepPartial7278<NestedConfig7278>;
  path?: ConfigPaths7278;
}

const HeavyComponent7278 = memo(function HeavyComponent7278({ config }: HeavyProps7278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7278.displayName = 'HeavyComponent7278';
export default HeavyComponent7278;
