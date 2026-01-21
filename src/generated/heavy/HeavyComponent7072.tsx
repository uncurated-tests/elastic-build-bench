'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7072<T> = T extends (infer U)[]
  ? DeepReadonlyArray7072<U>
  : T extends object
  ? DeepReadonlyObject7072<T>
  : T;

interface DeepReadonlyArray7072<T> extends ReadonlyArray<DeepReadonly7072<T>> {}

type DeepReadonlyObject7072<T> = {
  readonly [P in keyof T]: DeepReadonly7072<T[P]>;
};

type UnionToIntersection7072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7072<T> = UnionToIntersection7072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7072<T extends unknown[], V> = [...T, V];

type TuplifyUnion7072<T, L = LastOf7072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7072<TuplifyUnion7072<Exclude<T, L>>, L>;

type DeepPartial7072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7072<T[P]> }
  : T;

type Paths7072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7072<K, Paths7072<T[K], Prev7072[D]>> : never }[keyof T]
  : never;

type Prev7072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7072 {
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

type ConfigPaths7072 = Paths7072<NestedConfig7072>;

interface HeavyProps7072 {
  config: DeepPartial7072<NestedConfig7072>;
  path?: ConfigPaths7072;
}

const HeavyComponent7072 = memo(function HeavyComponent7072({ config }: HeavyProps7072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7072.displayName = 'HeavyComponent7072';
export default HeavyComponent7072;
