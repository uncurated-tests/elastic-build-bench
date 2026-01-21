'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7100<T> = T extends (infer U)[]
  ? DeepReadonlyArray7100<U>
  : T extends object
  ? DeepReadonlyObject7100<T>
  : T;

interface DeepReadonlyArray7100<T> extends ReadonlyArray<DeepReadonly7100<T>> {}

type DeepReadonlyObject7100<T> = {
  readonly [P in keyof T]: DeepReadonly7100<T[P]>;
};

type UnionToIntersection7100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7100<T> = UnionToIntersection7100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7100<T extends unknown[], V> = [...T, V];

type TuplifyUnion7100<T, L = LastOf7100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7100<TuplifyUnion7100<Exclude<T, L>>, L>;

type DeepPartial7100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7100<T[P]> }
  : T;

type Paths7100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7100<K, Paths7100<T[K], Prev7100[D]>> : never }[keyof T]
  : never;

type Prev7100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7100 {
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

type ConfigPaths7100 = Paths7100<NestedConfig7100>;

interface HeavyProps7100 {
  config: DeepPartial7100<NestedConfig7100>;
  path?: ConfigPaths7100;
}

const HeavyComponent7100 = memo(function HeavyComponent7100({ config }: HeavyProps7100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7100.displayName = 'HeavyComponent7100';
export default HeavyComponent7100;
