'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7743<T> = T extends (infer U)[]
  ? DeepReadonlyArray7743<U>
  : T extends object
  ? DeepReadonlyObject7743<T>
  : T;

interface DeepReadonlyArray7743<T> extends ReadonlyArray<DeepReadonly7743<T>> {}

type DeepReadonlyObject7743<T> = {
  readonly [P in keyof T]: DeepReadonly7743<T[P]>;
};

type UnionToIntersection7743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7743<T> = UnionToIntersection7743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7743<T extends unknown[], V> = [...T, V];

type TuplifyUnion7743<T, L = LastOf7743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7743<TuplifyUnion7743<Exclude<T, L>>, L>;

type DeepPartial7743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7743<T[P]> }
  : T;

type Paths7743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7743<K, Paths7743<T[K], Prev7743[D]>> : never }[keyof T]
  : never;

type Prev7743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7743 {
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

type ConfigPaths7743 = Paths7743<NestedConfig7743>;

interface HeavyProps7743 {
  config: DeepPartial7743<NestedConfig7743>;
  path?: ConfigPaths7743;
}

const HeavyComponent7743 = memo(function HeavyComponent7743({ config }: HeavyProps7743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7743.displayName = 'HeavyComponent7743';
export default HeavyComponent7743;
