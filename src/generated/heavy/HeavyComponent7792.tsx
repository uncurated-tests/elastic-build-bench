'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7792<T> = T extends (infer U)[]
  ? DeepReadonlyArray7792<U>
  : T extends object
  ? DeepReadonlyObject7792<T>
  : T;

interface DeepReadonlyArray7792<T> extends ReadonlyArray<DeepReadonly7792<T>> {}

type DeepReadonlyObject7792<T> = {
  readonly [P in keyof T]: DeepReadonly7792<T[P]>;
};

type UnionToIntersection7792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7792<T> = UnionToIntersection7792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7792<T extends unknown[], V> = [...T, V];

type TuplifyUnion7792<T, L = LastOf7792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7792<TuplifyUnion7792<Exclude<T, L>>, L>;

type DeepPartial7792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7792<T[P]> }
  : T;

type Paths7792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7792<K, Paths7792<T[K], Prev7792[D]>> : never }[keyof T]
  : never;

type Prev7792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7792 {
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

type ConfigPaths7792 = Paths7792<NestedConfig7792>;

interface HeavyProps7792 {
  config: DeepPartial7792<NestedConfig7792>;
  path?: ConfigPaths7792;
}

const HeavyComponent7792 = memo(function HeavyComponent7792({ config }: HeavyProps7792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7792.displayName = 'HeavyComponent7792';
export default HeavyComponent7792;
