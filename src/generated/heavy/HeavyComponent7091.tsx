'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7091<T> = T extends (infer U)[]
  ? DeepReadonlyArray7091<U>
  : T extends object
  ? DeepReadonlyObject7091<T>
  : T;

interface DeepReadonlyArray7091<T> extends ReadonlyArray<DeepReadonly7091<T>> {}

type DeepReadonlyObject7091<T> = {
  readonly [P in keyof T]: DeepReadonly7091<T[P]>;
};

type UnionToIntersection7091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7091<T> = UnionToIntersection7091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7091<T extends unknown[], V> = [...T, V];

type TuplifyUnion7091<T, L = LastOf7091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7091<TuplifyUnion7091<Exclude<T, L>>, L>;

type DeepPartial7091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7091<T[P]> }
  : T;

type Paths7091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7091<K, Paths7091<T[K], Prev7091[D]>> : never }[keyof T]
  : never;

type Prev7091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7091 {
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

type ConfigPaths7091 = Paths7091<NestedConfig7091>;

interface HeavyProps7091 {
  config: DeepPartial7091<NestedConfig7091>;
  path?: ConfigPaths7091;
}

const HeavyComponent7091 = memo(function HeavyComponent7091({ config }: HeavyProps7091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7091.displayName = 'HeavyComponent7091';
export default HeavyComponent7091;
