'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7445<T> = T extends (infer U)[]
  ? DeepReadonlyArray7445<U>
  : T extends object
  ? DeepReadonlyObject7445<T>
  : T;

interface DeepReadonlyArray7445<T> extends ReadonlyArray<DeepReadonly7445<T>> {}

type DeepReadonlyObject7445<T> = {
  readonly [P in keyof T]: DeepReadonly7445<T[P]>;
};

type UnionToIntersection7445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7445<T> = UnionToIntersection7445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7445<T extends unknown[], V> = [...T, V];

type TuplifyUnion7445<T, L = LastOf7445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7445<TuplifyUnion7445<Exclude<T, L>>, L>;

type DeepPartial7445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7445<T[P]> }
  : T;

type Paths7445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7445<K, Paths7445<T[K], Prev7445[D]>> : never }[keyof T]
  : never;

type Prev7445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7445 {
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

type ConfigPaths7445 = Paths7445<NestedConfig7445>;

interface HeavyProps7445 {
  config: DeepPartial7445<NestedConfig7445>;
  path?: ConfigPaths7445;
}

const HeavyComponent7445 = memo(function HeavyComponent7445({ config }: HeavyProps7445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7445.displayName = 'HeavyComponent7445';
export default HeavyComponent7445;
