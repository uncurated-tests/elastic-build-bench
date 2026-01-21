'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7563<T> = T extends (infer U)[]
  ? DeepReadonlyArray7563<U>
  : T extends object
  ? DeepReadonlyObject7563<T>
  : T;

interface DeepReadonlyArray7563<T> extends ReadonlyArray<DeepReadonly7563<T>> {}

type DeepReadonlyObject7563<T> = {
  readonly [P in keyof T]: DeepReadonly7563<T[P]>;
};

type UnionToIntersection7563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7563<T> = UnionToIntersection7563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7563<T extends unknown[], V> = [...T, V];

type TuplifyUnion7563<T, L = LastOf7563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7563<TuplifyUnion7563<Exclude<T, L>>, L>;

type DeepPartial7563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7563<T[P]> }
  : T;

type Paths7563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7563<K, Paths7563<T[K], Prev7563[D]>> : never }[keyof T]
  : never;

type Prev7563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7563 {
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

type ConfigPaths7563 = Paths7563<NestedConfig7563>;

interface HeavyProps7563 {
  config: DeepPartial7563<NestedConfig7563>;
  path?: ConfigPaths7563;
}

const HeavyComponent7563 = memo(function HeavyComponent7563({ config }: HeavyProps7563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7563.displayName = 'HeavyComponent7563';
export default HeavyComponent7563;
