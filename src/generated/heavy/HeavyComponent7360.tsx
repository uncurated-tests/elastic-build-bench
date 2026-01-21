'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7360<T> = T extends (infer U)[]
  ? DeepReadonlyArray7360<U>
  : T extends object
  ? DeepReadonlyObject7360<T>
  : T;

interface DeepReadonlyArray7360<T> extends ReadonlyArray<DeepReadonly7360<T>> {}

type DeepReadonlyObject7360<T> = {
  readonly [P in keyof T]: DeepReadonly7360<T[P]>;
};

type UnionToIntersection7360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7360<T> = UnionToIntersection7360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7360<T extends unknown[], V> = [...T, V];

type TuplifyUnion7360<T, L = LastOf7360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7360<TuplifyUnion7360<Exclude<T, L>>, L>;

type DeepPartial7360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7360<T[P]> }
  : T;

type Paths7360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7360<K, Paths7360<T[K], Prev7360[D]>> : never }[keyof T]
  : never;

type Prev7360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7360 {
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

type ConfigPaths7360 = Paths7360<NestedConfig7360>;

interface HeavyProps7360 {
  config: DeepPartial7360<NestedConfig7360>;
  path?: ConfigPaths7360;
}

const HeavyComponent7360 = memo(function HeavyComponent7360({ config }: HeavyProps7360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7360.displayName = 'HeavyComponent7360';
export default HeavyComponent7360;
