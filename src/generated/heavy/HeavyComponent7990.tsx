'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7990<T> = T extends (infer U)[]
  ? DeepReadonlyArray7990<U>
  : T extends object
  ? DeepReadonlyObject7990<T>
  : T;

interface DeepReadonlyArray7990<T> extends ReadonlyArray<DeepReadonly7990<T>> {}

type DeepReadonlyObject7990<T> = {
  readonly [P in keyof T]: DeepReadonly7990<T[P]>;
};

type UnionToIntersection7990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7990<T> = UnionToIntersection7990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7990<T extends unknown[], V> = [...T, V];

type TuplifyUnion7990<T, L = LastOf7990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7990<TuplifyUnion7990<Exclude<T, L>>, L>;

type DeepPartial7990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7990<T[P]> }
  : T;

type Paths7990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7990<K, Paths7990<T[K], Prev7990[D]>> : never }[keyof T]
  : never;

type Prev7990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7990 {
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

type ConfigPaths7990 = Paths7990<NestedConfig7990>;

interface HeavyProps7990 {
  config: DeepPartial7990<NestedConfig7990>;
  path?: ConfigPaths7990;
}

const HeavyComponent7990 = memo(function HeavyComponent7990({ config }: HeavyProps7990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7990.displayName = 'HeavyComponent7990';
export default HeavyComponent7990;
