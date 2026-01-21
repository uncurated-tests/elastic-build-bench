'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7766<T> = T extends (infer U)[]
  ? DeepReadonlyArray7766<U>
  : T extends object
  ? DeepReadonlyObject7766<T>
  : T;

interface DeepReadonlyArray7766<T> extends ReadonlyArray<DeepReadonly7766<T>> {}

type DeepReadonlyObject7766<T> = {
  readonly [P in keyof T]: DeepReadonly7766<T[P]>;
};

type UnionToIntersection7766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7766<T> = UnionToIntersection7766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7766<T extends unknown[], V> = [...T, V];

type TuplifyUnion7766<T, L = LastOf7766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7766<TuplifyUnion7766<Exclude<T, L>>, L>;

type DeepPartial7766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7766<T[P]> }
  : T;

type Paths7766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7766<K, Paths7766<T[K], Prev7766[D]>> : never }[keyof T]
  : never;

type Prev7766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7766 {
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

type ConfigPaths7766 = Paths7766<NestedConfig7766>;

interface HeavyProps7766 {
  config: DeepPartial7766<NestedConfig7766>;
  path?: ConfigPaths7766;
}

const HeavyComponent7766 = memo(function HeavyComponent7766({ config }: HeavyProps7766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7766.displayName = 'HeavyComponent7766';
export default HeavyComponent7766;
