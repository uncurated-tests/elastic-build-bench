'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7703<T> = T extends (infer U)[]
  ? DeepReadonlyArray7703<U>
  : T extends object
  ? DeepReadonlyObject7703<T>
  : T;

interface DeepReadonlyArray7703<T> extends ReadonlyArray<DeepReadonly7703<T>> {}

type DeepReadonlyObject7703<T> = {
  readonly [P in keyof T]: DeepReadonly7703<T[P]>;
};

type UnionToIntersection7703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7703<T> = UnionToIntersection7703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7703<T extends unknown[], V> = [...T, V];

type TuplifyUnion7703<T, L = LastOf7703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7703<TuplifyUnion7703<Exclude<T, L>>, L>;

type DeepPartial7703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7703<T[P]> }
  : T;

type Paths7703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7703<K, Paths7703<T[K], Prev7703[D]>> : never }[keyof T]
  : never;

type Prev7703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7703 {
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

type ConfigPaths7703 = Paths7703<NestedConfig7703>;

interface HeavyProps7703 {
  config: DeepPartial7703<NestedConfig7703>;
  path?: ConfigPaths7703;
}

const HeavyComponent7703 = memo(function HeavyComponent7703({ config }: HeavyProps7703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7703.displayName = 'HeavyComponent7703';
export default HeavyComponent7703;
