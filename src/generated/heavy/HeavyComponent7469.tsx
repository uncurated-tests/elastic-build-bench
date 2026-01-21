'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7469<T> = T extends (infer U)[]
  ? DeepReadonlyArray7469<U>
  : T extends object
  ? DeepReadonlyObject7469<T>
  : T;

interface DeepReadonlyArray7469<T> extends ReadonlyArray<DeepReadonly7469<T>> {}

type DeepReadonlyObject7469<T> = {
  readonly [P in keyof T]: DeepReadonly7469<T[P]>;
};

type UnionToIntersection7469<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7469<T> = UnionToIntersection7469<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7469<T extends unknown[], V> = [...T, V];

type TuplifyUnion7469<T, L = LastOf7469<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7469<TuplifyUnion7469<Exclude<T, L>>, L>;

type DeepPartial7469<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7469<T[P]> }
  : T;

type Paths7469<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7469<K, Paths7469<T[K], Prev7469[D]>> : never }[keyof T]
  : never;

type Prev7469 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7469<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7469 {
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

type ConfigPaths7469 = Paths7469<NestedConfig7469>;

interface HeavyProps7469 {
  config: DeepPartial7469<NestedConfig7469>;
  path?: ConfigPaths7469;
}

const HeavyComponent7469 = memo(function HeavyComponent7469({ config }: HeavyProps7469) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7469) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7469 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7469: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7469.displayName = 'HeavyComponent7469';
export default HeavyComponent7469;
