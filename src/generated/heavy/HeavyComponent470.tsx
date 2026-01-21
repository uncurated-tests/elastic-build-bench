'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly470<T> = T extends (infer U)[]
  ? DeepReadonlyArray470<U>
  : T extends object
  ? DeepReadonlyObject470<T>
  : T;

interface DeepReadonlyArray470<T> extends ReadonlyArray<DeepReadonly470<T>> {}

type DeepReadonlyObject470<T> = {
  readonly [P in keyof T]: DeepReadonly470<T[P]>;
};

type UnionToIntersection470<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf470<T> = UnionToIntersection470<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push470<T extends unknown[], V> = [...T, V];

type TuplifyUnion470<T, L = LastOf470<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push470<TuplifyUnion470<Exclude<T, L>>, L>;

type DeepPartial470<T> = T extends object
  ? { [P in keyof T]?: DeepPartial470<T[P]> }
  : T;

type Paths470<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join470<K, Paths470<T[K], Prev470[D]>> : never }[keyof T]
  : never;

type Prev470 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join470<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig470 {
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

type ConfigPaths470 = Paths470<NestedConfig470>;

interface HeavyProps470 {
  config: DeepPartial470<NestedConfig470>;
  path?: ConfigPaths470;
}

const HeavyComponent470 = memo(function HeavyComponent470({ config }: HeavyProps470) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 470) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-470 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H470: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent470.displayName = 'HeavyComponent470';
export default HeavyComponent470;
