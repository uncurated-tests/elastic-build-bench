'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7260<T> = T extends (infer U)[]
  ? DeepReadonlyArray7260<U>
  : T extends object
  ? DeepReadonlyObject7260<T>
  : T;

interface DeepReadonlyArray7260<T> extends ReadonlyArray<DeepReadonly7260<T>> {}

type DeepReadonlyObject7260<T> = {
  readonly [P in keyof T]: DeepReadonly7260<T[P]>;
};

type UnionToIntersection7260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7260<T> = UnionToIntersection7260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7260<T extends unknown[], V> = [...T, V];

type TuplifyUnion7260<T, L = LastOf7260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7260<TuplifyUnion7260<Exclude<T, L>>, L>;

type DeepPartial7260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7260<T[P]> }
  : T;

type Paths7260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7260<K, Paths7260<T[K], Prev7260[D]>> : never }[keyof T]
  : never;

type Prev7260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7260 {
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

type ConfigPaths7260 = Paths7260<NestedConfig7260>;

interface HeavyProps7260 {
  config: DeepPartial7260<NestedConfig7260>;
  path?: ConfigPaths7260;
}

const HeavyComponent7260 = memo(function HeavyComponent7260({ config }: HeavyProps7260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7260.displayName = 'HeavyComponent7260';
export default HeavyComponent7260;
