'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7998<T> = T extends (infer U)[]
  ? DeepReadonlyArray7998<U>
  : T extends object
  ? DeepReadonlyObject7998<T>
  : T;

interface DeepReadonlyArray7998<T> extends ReadonlyArray<DeepReadonly7998<T>> {}

type DeepReadonlyObject7998<T> = {
  readonly [P in keyof T]: DeepReadonly7998<T[P]>;
};

type UnionToIntersection7998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7998<T> = UnionToIntersection7998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7998<T extends unknown[], V> = [...T, V];

type TuplifyUnion7998<T, L = LastOf7998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7998<TuplifyUnion7998<Exclude<T, L>>, L>;

type DeepPartial7998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7998<T[P]> }
  : T;

type Paths7998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7998<K, Paths7998<T[K], Prev7998[D]>> : never }[keyof T]
  : never;

type Prev7998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7998 {
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

type ConfigPaths7998 = Paths7998<NestedConfig7998>;

interface HeavyProps7998 {
  config: DeepPartial7998<NestedConfig7998>;
  path?: ConfigPaths7998;
}

const HeavyComponent7998 = memo(function HeavyComponent7998({ config }: HeavyProps7998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7998.displayName = 'HeavyComponent7998';
export default HeavyComponent7998;
