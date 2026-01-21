'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7373<T> = T extends (infer U)[]
  ? DeepReadonlyArray7373<U>
  : T extends object
  ? DeepReadonlyObject7373<T>
  : T;

interface DeepReadonlyArray7373<T> extends ReadonlyArray<DeepReadonly7373<T>> {}

type DeepReadonlyObject7373<T> = {
  readonly [P in keyof T]: DeepReadonly7373<T[P]>;
};

type UnionToIntersection7373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7373<T> = UnionToIntersection7373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7373<T extends unknown[], V> = [...T, V];

type TuplifyUnion7373<T, L = LastOf7373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7373<TuplifyUnion7373<Exclude<T, L>>, L>;

type DeepPartial7373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7373<T[P]> }
  : T;

type Paths7373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7373<K, Paths7373<T[K], Prev7373[D]>> : never }[keyof T]
  : never;

type Prev7373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7373 {
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

type ConfigPaths7373 = Paths7373<NestedConfig7373>;

interface HeavyProps7373 {
  config: DeepPartial7373<NestedConfig7373>;
  path?: ConfigPaths7373;
}

const HeavyComponent7373 = memo(function HeavyComponent7373({ config }: HeavyProps7373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7373.displayName = 'HeavyComponent7373';
export default HeavyComponent7373;
