'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7387<T> = T extends (infer U)[]
  ? DeepReadonlyArray7387<U>
  : T extends object
  ? DeepReadonlyObject7387<T>
  : T;

interface DeepReadonlyArray7387<T> extends ReadonlyArray<DeepReadonly7387<T>> {}

type DeepReadonlyObject7387<T> = {
  readonly [P in keyof T]: DeepReadonly7387<T[P]>;
};

type UnionToIntersection7387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7387<T> = UnionToIntersection7387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7387<T extends unknown[], V> = [...T, V];

type TuplifyUnion7387<T, L = LastOf7387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7387<TuplifyUnion7387<Exclude<T, L>>, L>;

type DeepPartial7387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7387<T[P]> }
  : T;

type Paths7387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7387<K, Paths7387<T[K], Prev7387[D]>> : never }[keyof T]
  : never;

type Prev7387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7387 {
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

type ConfigPaths7387 = Paths7387<NestedConfig7387>;

interface HeavyProps7387 {
  config: DeepPartial7387<NestedConfig7387>;
  path?: ConfigPaths7387;
}

const HeavyComponent7387 = memo(function HeavyComponent7387({ config }: HeavyProps7387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7387.displayName = 'HeavyComponent7387';
export default HeavyComponent7387;
