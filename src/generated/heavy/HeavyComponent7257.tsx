'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7257<T> = T extends (infer U)[]
  ? DeepReadonlyArray7257<U>
  : T extends object
  ? DeepReadonlyObject7257<T>
  : T;

interface DeepReadonlyArray7257<T> extends ReadonlyArray<DeepReadonly7257<T>> {}

type DeepReadonlyObject7257<T> = {
  readonly [P in keyof T]: DeepReadonly7257<T[P]>;
};

type UnionToIntersection7257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7257<T> = UnionToIntersection7257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7257<T extends unknown[], V> = [...T, V];

type TuplifyUnion7257<T, L = LastOf7257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7257<TuplifyUnion7257<Exclude<T, L>>, L>;

type DeepPartial7257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7257<T[P]> }
  : T;

type Paths7257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7257<K, Paths7257<T[K], Prev7257[D]>> : never }[keyof T]
  : never;

type Prev7257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7257 {
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

type ConfigPaths7257 = Paths7257<NestedConfig7257>;

interface HeavyProps7257 {
  config: DeepPartial7257<NestedConfig7257>;
  path?: ConfigPaths7257;
}

const HeavyComponent7257 = memo(function HeavyComponent7257({ config }: HeavyProps7257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7257.displayName = 'HeavyComponent7257';
export default HeavyComponent7257;
