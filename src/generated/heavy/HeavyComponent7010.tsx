'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7010<T> = T extends (infer U)[]
  ? DeepReadonlyArray7010<U>
  : T extends object
  ? DeepReadonlyObject7010<T>
  : T;

interface DeepReadonlyArray7010<T> extends ReadonlyArray<DeepReadonly7010<T>> {}

type DeepReadonlyObject7010<T> = {
  readonly [P in keyof T]: DeepReadonly7010<T[P]>;
};

type UnionToIntersection7010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7010<T> = UnionToIntersection7010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7010<T extends unknown[], V> = [...T, V];

type TuplifyUnion7010<T, L = LastOf7010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7010<TuplifyUnion7010<Exclude<T, L>>, L>;

type DeepPartial7010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7010<T[P]> }
  : T;

type Paths7010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7010<K, Paths7010<T[K], Prev7010[D]>> : never }[keyof T]
  : never;

type Prev7010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7010 {
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

type ConfigPaths7010 = Paths7010<NestedConfig7010>;

interface HeavyProps7010 {
  config: DeepPartial7010<NestedConfig7010>;
  path?: ConfigPaths7010;
}

const HeavyComponent7010 = memo(function HeavyComponent7010({ config }: HeavyProps7010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7010.displayName = 'HeavyComponent7010';
export default HeavyComponent7010;
