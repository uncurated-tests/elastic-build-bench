'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7865<T> = T extends (infer U)[]
  ? DeepReadonlyArray7865<U>
  : T extends object
  ? DeepReadonlyObject7865<T>
  : T;

interface DeepReadonlyArray7865<T> extends ReadonlyArray<DeepReadonly7865<T>> {}

type DeepReadonlyObject7865<T> = {
  readonly [P in keyof T]: DeepReadonly7865<T[P]>;
};

type UnionToIntersection7865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7865<T> = UnionToIntersection7865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7865<T extends unknown[], V> = [...T, V];

type TuplifyUnion7865<T, L = LastOf7865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7865<TuplifyUnion7865<Exclude<T, L>>, L>;

type DeepPartial7865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7865<T[P]> }
  : T;

type Paths7865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7865<K, Paths7865<T[K], Prev7865[D]>> : never }[keyof T]
  : never;

type Prev7865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7865 {
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

type ConfigPaths7865 = Paths7865<NestedConfig7865>;

interface HeavyProps7865 {
  config: DeepPartial7865<NestedConfig7865>;
  path?: ConfigPaths7865;
}

const HeavyComponent7865 = memo(function HeavyComponent7865({ config }: HeavyProps7865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7865.displayName = 'HeavyComponent7865';
export default HeavyComponent7865;
