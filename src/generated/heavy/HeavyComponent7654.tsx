'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7654<T> = T extends (infer U)[]
  ? DeepReadonlyArray7654<U>
  : T extends object
  ? DeepReadonlyObject7654<T>
  : T;

interface DeepReadonlyArray7654<T> extends ReadonlyArray<DeepReadonly7654<T>> {}

type DeepReadonlyObject7654<T> = {
  readonly [P in keyof T]: DeepReadonly7654<T[P]>;
};

type UnionToIntersection7654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7654<T> = UnionToIntersection7654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7654<T extends unknown[], V> = [...T, V];

type TuplifyUnion7654<T, L = LastOf7654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7654<TuplifyUnion7654<Exclude<T, L>>, L>;

type DeepPartial7654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7654<T[P]> }
  : T;

type Paths7654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7654<K, Paths7654<T[K], Prev7654[D]>> : never }[keyof T]
  : never;

type Prev7654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7654 {
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

type ConfigPaths7654 = Paths7654<NestedConfig7654>;

interface HeavyProps7654 {
  config: DeepPartial7654<NestedConfig7654>;
  path?: ConfigPaths7654;
}

const HeavyComponent7654 = memo(function HeavyComponent7654({ config }: HeavyProps7654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7654.displayName = 'HeavyComponent7654';
export default HeavyComponent7654;
