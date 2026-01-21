'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7636<T> = T extends (infer U)[]
  ? DeepReadonlyArray7636<U>
  : T extends object
  ? DeepReadonlyObject7636<T>
  : T;

interface DeepReadonlyArray7636<T> extends ReadonlyArray<DeepReadonly7636<T>> {}

type DeepReadonlyObject7636<T> = {
  readonly [P in keyof T]: DeepReadonly7636<T[P]>;
};

type UnionToIntersection7636<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7636<T> = UnionToIntersection7636<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7636<T extends unknown[], V> = [...T, V];

type TuplifyUnion7636<T, L = LastOf7636<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7636<TuplifyUnion7636<Exclude<T, L>>, L>;

type DeepPartial7636<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7636<T[P]> }
  : T;

type Paths7636<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7636<K, Paths7636<T[K], Prev7636[D]>> : never }[keyof T]
  : never;

type Prev7636 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7636<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7636 {
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

type ConfigPaths7636 = Paths7636<NestedConfig7636>;

interface HeavyProps7636 {
  config: DeepPartial7636<NestedConfig7636>;
  path?: ConfigPaths7636;
}

const HeavyComponent7636 = memo(function HeavyComponent7636({ config }: HeavyProps7636) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7636) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7636 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7636: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7636.displayName = 'HeavyComponent7636';
export default HeavyComponent7636;
