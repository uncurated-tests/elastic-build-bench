'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4762<T> = T extends (infer U)[]
  ? DeepReadonlyArray4762<U>
  : T extends object
  ? DeepReadonlyObject4762<T>
  : T;

interface DeepReadonlyArray4762<T> extends ReadonlyArray<DeepReadonly4762<T>> {}

type DeepReadonlyObject4762<T> = {
  readonly [P in keyof T]: DeepReadonly4762<T[P]>;
};

type UnionToIntersection4762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4762<T> = UnionToIntersection4762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4762<T extends unknown[], V> = [...T, V];

type TuplifyUnion4762<T, L = LastOf4762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4762<TuplifyUnion4762<Exclude<T, L>>, L>;

type DeepPartial4762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4762<T[P]> }
  : T;

type Paths4762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4762<K, Paths4762<T[K], Prev4762[D]>> : never }[keyof T]
  : never;

type Prev4762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4762 {
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

type ConfigPaths4762 = Paths4762<NestedConfig4762>;

interface HeavyProps4762 {
  config: DeepPartial4762<NestedConfig4762>;
  path?: ConfigPaths4762;
}

const HeavyComponent4762 = memo(function HeavyComponent4762({ config }: HeavyProps4762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4762.displayName = 'HeavyComponent4762';
export default HeavyComponent4762;
