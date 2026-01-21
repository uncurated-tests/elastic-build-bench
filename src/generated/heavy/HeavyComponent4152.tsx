'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4152<T> = T extends (infer U)[]
  ? DeepReadonlyArray4152<U>
  : T extends object
  ? DeepReadonlyObject4152<T>
  : T;

interface DeepReadonlyArray4152<T> extends ReadonlyArray<DeepReadonly4152<T>> {}

type DeepReadonlyObject4152<T> = {
  readonly [P in keyof T]: DeepReadonly4152<T[P]>;
};

type UnionToIntersection4152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4152<T> = UnionToIntersection4152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4152<T extends unknown[], V> = [...T, V];

type TuplifyUnion4152<T, L = LastOf4152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4152<TuplifyUnion4152<Exclude<T, L>>, L>;

type DeepPartial4152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4152<T[P]> }
  : T;

type Paths4152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4152<K, Paths4152<T[K], Prev4152[D]>> : never }[keyof T]
  : never;

type Prev4152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4152 {
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

type ConfigPaths4152 = Paths4152<NestedConfig4152>;

interface HeavyProps4152 {
  config: DeepPartial4152<NestedConfig4152>;
  path?: ConfigPaths4152;
}

const HeavyComponent4152 = memo(function HeavyComponent4152({ config }: HeavyProps4152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4152.displayName = 'HeavyComponent4152';
export default HeavyComponent4152;
