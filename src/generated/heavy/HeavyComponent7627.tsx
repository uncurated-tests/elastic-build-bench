'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7627<T> = T extends (infer U)[]
  ? DeepReadonlyArray7627<U>
  : T extends object
  ? DeepReadonlyObject7627<T>
  : T;

interface DeepReadonlyArray7627<T> extends ReadonlyArray<DeepReadonly7627<T>> {}

type DeepReadonlyObject7627<T> = {
  readonly [P in keyof T]: DeepReadonly7627<T[P]>;
};

type UnionToIntersection7627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7627<T> = UnionToIntersection7627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7627<T extends unknown[], V> = [...T, V];

type TuplifyUnion7627<T, L = LastOf7627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7627<TuplifyUnion7627<Exclude<T, L>>, L>;

type DeepPartial7627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7627<T[P]> }
  : T;

type Paths7627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7627<K, Paths7627<T[K], Prev7627[D]>> : never }[keyof T]
  : never;

type Prev7627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7627 {
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

type ConfigPaths7627 = Paths7627<NestedConfig7627>;

interface HeavyProps7627 {
  config: DeepPartial7627<NestedConfig7627>;
  path?: ConfigPaths7627;
}

const HeavyComponent7627 = memo(function HeavyComponent7627({ config }: HeavyProps7627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7627.displayName = 'HeavyComponent7627';
export default HeavyComponent7627;
