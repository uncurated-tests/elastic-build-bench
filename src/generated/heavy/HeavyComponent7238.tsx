'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7238<T> = T extends (infer U)[]
  ? DeepReadonlyArray7238<U>
  : T extends object
  ? DeepReadonlyObject7238<T>
  : T;

interface DeepReadonlyArray7238<T> extends ReadonlyArray<DeepReadonly7238<T>> {}

type DeepReadonlyObject7238<T> = {
  readonly [P in keyof T]: DeepReadonly7238<T[P]>;
};

type UnionToIntersection7238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7238<T> = UnionToIntersection7238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7238<T extends unknown[], V> = [...T, V];

type TuplifyUnion7238<T, L = LastOf7238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7238<TuplifyUnion7238<Exclude<T, L>>, L>;

type DeepPartial7238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7238<T[P]> }
  : T;

type Paths7238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7238<K, Paths7238<T[K], Prev7238[D]>> : never }[keyof T]
  : never;

type Prev7238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7238 {
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

type ConfigPaths7238 = Paths7238<NestedConfig7238>;

interface HeavyProps7238 {
  config: DeepPartial7238<NestedConfig7238>;
  path?: ConfigPaths7238;
}

const HeavyComponent7238 = memo(function HeavyComponent7238({ config }: HeavyProps7238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7238.displayName = 'HeavyComponent7238';
export default HeavyComponent7238;
