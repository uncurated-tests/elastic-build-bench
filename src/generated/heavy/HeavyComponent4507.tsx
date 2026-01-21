'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4507<T> = T extends (infer U)[]
  ? DeepReadonlyArray4507<U>
  : T extends object
  ? DeepReadonlyObject4507<T>
  : T;

interface DeepReadonlyArray4507<T> extends ReadonlyArray<DeepReadonly4507<T>> {}

type DeepReadonlyObject4507<T> = {
  readonly [P in keyof T]: DeepReadonly4507<T[P]>;
};

type UnionToIntersection4507<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4507<T> = UnionToIntersection4507<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4507<T extends unknown[], V> = [...T, V];

type TuplifyUnion4507<T, L = LastOf4507<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4507<TuplifyUnion4507<Exclude<T, L>>, L>;

type DeepPartial4507<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4507<T[P]> }
  : T;

type Paths4507<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4507<K, Paths4507<T[K], Prev4507[D]>> : never }[keyof T]
  : never;

type Prev4507 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4507<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4507 {
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

type ConfigPaths4507 = Paths4507<NestedConfig4507>;

interface HeavyProps4507 {
  config: DeepPartial4507<NestedConfig4507>;
  path?: ConfigPaths4507;
}

const HeavyComponent4507 = memo(function HeavyComponent4507({ config }: HeavyProps4507) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4507) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4507 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4507: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4507.displayName = 'HeavyComponent4507';
export default HeavyComponent4507;
