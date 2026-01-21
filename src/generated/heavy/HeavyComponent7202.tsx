'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7202<T> = T extends (infer U)[]
  ? DeepReadonlyArray7202<U>
  : T extends object
  ? DeepReadonlyObject7202<T>
  : T;

interface DeepReadonlyArray7202<T> extends ReadonlyArray<DeepReadonly7202<T>> {}

type DeepReadonlyObject7202<T> = {
  readonly [P in keyof T]: DeepReadonly7202<T[P]>;
};

type UnionToIntersection7202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7202<T> = UnionToIntersection7202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7202<T extends unknown[], V> = [...T, V];

type TuplifyUnion7202<T, L = LastOf7202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7202<TuplifyUnion7202<Exclude<T, L>>, L>;

type DeepPartial7202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7202<T[P]> }
  : T;

type Paths7202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7202<K, Paths7202<T[K], Prev7202[D]>> : never }[keyof T]
  : never;

type Prev7202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7202 {
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

type ConfigPaths7202 = Paths7202<NestedConfig7202>;

interface HeavyProps7202 {
  config: DeepPartial7202<NestedConfig7202>;
  path?: ConfigPaths7202;
}

const HeavyComponent7202 = memo(function HeavyComponent7202({ config }: HeavyProps7202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7202.displayName = 'HeavyComponent7202';
export default HeavyComponent7202;
