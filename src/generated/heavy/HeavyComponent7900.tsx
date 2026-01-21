'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7900<T> = T extends (infer U)[]
  ? DeepReadonlyArray7900<U>
  : T extends object
  ? DeepReadonlyObject7900<T>
  : T;

interface DeepReadonlyArray7900<T> extends ReadonlyArray<DeepReadonly7900<T>> {}

type DeepReadonlyObject7900<T> = {
  readonly [P in keyof T]: DeepReadonly7900<T[P]>;
};

type UnionToIntersection7900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7900<T> = UnionToIntersection7900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7900<T extends unknown[], V> = [...T, V];

type TuplifyUnion7900<T, L = LastOf7900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7900<TuplifyUnion7900<Exclude<T, L>>, L>;

type DeepPartial7900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7900<T[P]> }
  : T;

type Paths7900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7900<K, Paths7900<T[K], Prev7900[D]>> : never }[keyof T]
  : never;

type Prev7900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7900 {
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

type ConfigPaths7900 = Paths7900<NestedConfig7900>;

interface HeavyProps7900 {
  config: DeepPartial7900<NestedConfig7900>;
  path?: ConfigPaths7900;
}

const HeavyComponent7900 = memo(function HeavyComponent7900({ config }: HeavyProps7900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7900.displayName = 'HeavyComponent7900';
export default HeavyComponent7900;
