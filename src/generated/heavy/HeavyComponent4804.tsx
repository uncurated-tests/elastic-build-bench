'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4804<T> = T extends (infer U)[]
  ? DeepReadonlyArray4804<U>
  : T extends object
  ? DeepReadonlyObject4804<T>
  : T;

interface DeepReadonlyArray4804<T> extends ReadonlyArray<DeepReadonly4804<T>> {}

type DeepReadonlyObject4804<T> = {
  readonly [P in keyof T]: DeepReadonly4804<T[P]>;
};

type UnionToIntersection4804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4804<T> = UnionToIntersection4804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4804<T extends unknown[], V> = [...T, V];

type TuplifyUnion4804<T, L = LastOf4804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4804<TuplifyUnion4804<Exclude<T, L>>, L>;

type DeepPartial4804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4804<T[P]> }
  : T;

type Paths4804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4804<K, Paths4804<T[K], Prev4804[D]>> : never }[keyof T]
  : never;

type Prev4804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4804 {
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

type ConfigPaths4804 = Paths4804<NestedConfig4804>;

interface HeavyProps4804 {
  config: DeepPartial4804<NestedConfig4804>;
  path?: ConfigPaths4804;
}

const HeavyComponent4804 = memo(function HeavyComponent4804({ config }: HeavyProps4804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4804.displayName = 'HeavyComponent4804';
export default HeavyComponent4804;
