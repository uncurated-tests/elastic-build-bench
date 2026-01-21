'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7388<T> = T extends (infer U)[]
  ? DeepReadonlyArray7388<U>
  : T extends object
  ? DeepReadonlyObject7388<T>
  : T;

interface DeepReadonlyArray7388<T> extends ReadonlyArray<DeepReadonly7388<T>> {}

type DeepReadonlyObject7388<T> = {
  readonly [P in keyof T]: DeepReadonly7388<T[P]>;
};

type UnionToIntersection7388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7388<T> = UnionToIntersection7388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7388<T extends unknown[], V> = [...T, V];

type TuplifyUnion7388<T, L = LastOf7388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7388<TuplifyUnion7388<Exclude<T, L>>, L>;

type DeepPartial7388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7388<T[P]> }
  : T;

type Paths7388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7388<K, Paths7388<T[K], Prev7388[D]>> : never }[keyof T]
  : never;

type Prev7388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7388 {
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

type ConfigPaths7388 = Paths7388<NestedConfig7388>;

interface HeavyProps7388 {
  config: DeepPartial7388<NestedConfig7388>;
  path?: ConfigPaths7388;
}

const HeavyComponent7388 = memo(function HeavyComponent7388({ config }: HeavyProps7388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7388.displayName = 'HeavyComponent7388';
export default HeavyComponent7388;
