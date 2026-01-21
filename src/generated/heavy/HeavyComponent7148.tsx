'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7148<T> = T extends (infer U)[]
  ? DeepReadonlyArray7148<U>
  : T extends object
  ? DeepReadonlyObject7148<T>
  : T;

interface DeepReadonlyArray7148<T> extends ReadonlyArray<DeepReadonly7148<T>> {}

type DeepReadonlyObject7148<T> = {
  readonly [P in keyof T]: DeepReadonly7148<T[P]>;
};

type UnionToIntersection7148<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7148<T> = UnionToIntersection7148<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7148<T extends unknown[], V> = [...T, V];

type TuplifyUnion7148<T, L = LastOf7148<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7148<TuplifyUnion7148<Exclude<T, L>>, L>;

type DeepPartial7148<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7148<T[P]> }
  : T;

type Paths7148<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7148<K, Paths7148<T[K], Prev7148[D]>> : never }[keyof T]
  : never;

type Prev7148 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7148<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7148 {
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

type ConfigPaths7148 = Paths7148<NestedConfig7148>;

interface HeavyProps7148 {
  config: DeepPartial7148<NestedConfig7148>;
  path?: ConfigPaths7148;
}

const HeavyComponent7148 = memo(function HeavyComponent7148({ config }: HeavyProps7148) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7148) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7148 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7148: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7148.displayName = 'HeavyComponent7148';
export default HeavyComponent7148;
