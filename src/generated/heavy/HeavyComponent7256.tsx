'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7256<T> = T extends (infer U)[]
  ? DeepReadonlyArray7256<U>
  : T extends object
  ? DeepReadonlyObject7256<T>
  : T;

interface DeepReadonlyArray7256<T> extends ReadonlyArray<DeepReadonly7256<T>> {}

type DeepReadonlyObject7256<T> = {
  readonly [P in keyof T]: DeepReadonly7256<T[P]>;
};

type UnionToIntersection7256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7256<T> = UnionToIntersection7256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7256<T extends unknown[], V> = [...T, V];

type TuplifyUnion7256<T, L = LastOf7256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7256<TuplifyUnion7256<Exclude<T, L>>, L>;

type DeepPartial7256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7256<T[P]> }
  : T;

type Paths7256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7256<K, Paths7256<T[K], Prev7256[D]>> : never }[keyof T]
  : never;

type Prev7256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7256 {
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

type ConfigPaths7256 = Paths7256<NestedConfig7256>;

interface HeavyProps7256 {
  config: DeepPartial7256<NestedConfig7256>;
  path?: ConfigPaths7256;
}

const HeavyComponent7256 = memo(function HeavyComponent7256({ config }: HeavyProps7256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7256.displayName = 'HeavyComponent7256';
export default HeavyComponent7256;
