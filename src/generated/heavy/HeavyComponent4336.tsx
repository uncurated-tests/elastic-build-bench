'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4336<T> = T extends (infer U)[]
  ? DeepReadonlyArray4336<U>
  : T extends object
  ? DeepReadonlyObject4336<T>
  : T;

interface DeepReadonlyArray4336<T> extends ReadonlyArray<DeepReadonly4336<T>> {}

type DeepReadonlyObject4336<T> = {
  readonly [P in keyof T]: DeepReadonly4336<T[P]>;
};

type UnionToIntersection4336<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4336<T> = UnionToIntersection4336<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4336<T extends unknown[], V> = [...T, V];

type TuplifyUnion4336<T, L = LastOf4336<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4336<TuplifyUnion4336<Exclude<T, L>>, L>;

type DeepPartial4336<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4336<T[P]> }
  : T;

type Paths4336<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4336<K, Paths4336<T[K], Prev4336[D]>> : never }[keyof T]
  : never;

type Prev4336 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4336<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4336 {
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

type ConfigPaths4336 = Paths4336<NestedConfig4336>;

interface HeavyProps4336 {
  config: DeepPartial4336<NestedConfig4336>;
  path?: ConfigPaths4336;
}

const HeavyComponent4336 = memo(function HeavyComponent4336({ config }: HeavyProps4336) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4336) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4336 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4336: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4336.displayName = 'HeavyComponent4336';
export default HeavyComponent4336;
