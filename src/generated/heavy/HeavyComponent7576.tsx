'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7576<T> = T extends (infer U)[]
  ? DeepReadonlyArray7576<U>
  : T extends object
  ? DeepReadonlyObject7576<T>
  : T;

interface DeepReadonlyArray7576<T> extends ReadonlyArray<DeepReadonly7576<T>> {}

type DeepReadonlyObject7576<T> = {
  readonly [P in keyof T]: DeepReadonly7576<T[P]>;
};

type UnionToIntersection7576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7576<T> = UnionToIntersection7576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7576<T extends unknown[], V> = [...T, V];

type TuplifyUnion7576<T, L = LastOf7576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7576<TuplifyUnion7576<Exclude<T, L>>, L>;

type DeepPartial7576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7576<T[P]> }
  : T;

type Paths7576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7576<K, Paths7576<T[K], Prev7576[D]>> : never }[keyof T]
  : never;

type Prev7576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7576 {
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

type ConfigPaths7576 = Paths7576<NestedConfig7576>;

interface HeavyProps7576 {
  config: DeepPartial7576<NestedConfig7576>;
  path?: ConfigPaths7576;
}

const HeavyComponent7576 = memo(function HeavyComponent7576({ config }: HeavyProps7576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7576.displayName = 'HeavyComponent7576';
export default HeavyComponent7576;
