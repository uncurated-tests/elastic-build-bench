'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7665<T> = T extends (infer U)[]
  ? DeepReadonlyArray7665<U>
  : T extends object
  ? DeepReadonlyObject7665<T>
  : T;

interface DeepReadonlyArray7665<T> extends ReadonlyArray<DeepReadonly7665<T>> {}

type DeepReadonlyObject7665<T> = {
  readonly [P in keyof T]: DeepReadonly7665<T[P]>;
};

type UnionToIntersection7665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7665<T> = UnionToIntersection7665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7665<T extends unknown[], V> = [...T, V];

type TuplifyUnion7665<T, L = LastOf7665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7665<TuplifyUnion7665<Exclude<T, L>>, L>;

type DeepPartial7665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7665<T[P]> }
  : T;

type Paths7665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7665<K, Paths7665<T[K], Prev7665[D]>> : never }[keyof T]
  : never;

type Prev7665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7665 {
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

type ConfigPaths7665 = Paths7665<NestedConfig7665>;

interface HeavyProps7665 {
  config: DeepPartial7665<NestedConfig7665>;
  path?: ConfigPaths7665;
}

const HeavyComponent7665 = memo(function HeavyComponent7665({ config }: HeavyProps7665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7665.displayName = 'HeavyComponent7665';
export default HeavyComponent7665;
