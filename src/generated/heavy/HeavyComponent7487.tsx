'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7487<T> = T extends (infer U)[]
  ? DeepReadonlyArray7487<U>
  : T extends object
  ? DeepReadonlyObject7487<T>
  : T;

interface DeepReadonlyArray7487<T> extends ReadonlyArray<DeepReadonly7487<T>> {}

type DeepReadonlyObject7487<T> = {
  readonly [P in keyof T]: DeepReadonly7487<T[P]>;
};

type UnionToIntersection7487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7487<T> = UnionToIntersection7487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7487<T extends unknown[], V> = [...T, V];

type TuplifyUnion7487<T, L = LastOf7487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7487<TuplifyUnion7487<Exclude<T, L>>, L>;

type DeepPartial7487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7487<T[P]> }
  : T;

type Paths7487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7487<K, Paths7487<T[K], Prev7487[D]>> : never }[keyof T]
  : never;

type Prev7487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7487 {
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

type ConfigPaths7487 = Paths7487<NestedConfig7487>;

interface HeavyProps7487 {
  config: DeepPartial7487<NestedConfig7487>;
  path?: ConfigPaths7487;
}

const HeavyComponent7487 = memo(function HeavyComponent7487({ config }: HeavyProps7487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7487.displayName = 'HeavyComponent7487';
export default HeavyComponent7487;
