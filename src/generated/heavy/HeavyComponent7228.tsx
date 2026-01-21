'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7228<T> = T extends (infer U)[]
  ? DeepReadonlyArray7228<U>
  : T extends object
  ? DeepReadonlyObject7228<T>
  : T;

interface DeepReadonlyArray7228<T> extends ReadonlyArray<DeepReadonly7228<T>> {}

type DeepReadonlyObject7228<T> = {
  readonly [P in keyof T]: DeepReadonly7228<T[P]>;
};

type UnionToIntersection7228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7228<T> = UnionToIntersection7228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7228<T extends unknown[], V> = [...T, V];

type TuplifyUnion7228<T, L = LastOf7228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7228<TuplifyUnion7228<Exclude<T, L>>, L>;

type DeepPartial7228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7228<T[P]> }
  : T;

type Paths7228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7228<K, Paths7228<T[K], Prev7228[D]>> : never }[keyof T]
  : never;

type Prev7228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7228 {
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

type ConfigPaths7228 = Paths7228<NestedConfig7228>;

interface HeavyProps7228 {
  config: DeepPartial7228<NestedConfig7228>;
  path?: ConfigPaths7228;
}

const HeavyComponent7228 = memo(function HeavyComponent7228({ config }: HeavyProps7228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7228.displayName = 'HeavyComponent7228';
export default HeavyComponent7228;
