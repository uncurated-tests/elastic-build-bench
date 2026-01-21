'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4381<T> = T extends (infer U)[]
  ? DeepReadonlyArray4381<U>
  : T extends object
  ? DeepReadonlyObject4381<T>
  : T;

interface DeepReadonlyArray4381<T> extends ReadonlyArray<DeepReadonly4381<T>> {}

type DeepReadonlyObject4381<T> = {
  readonly [P in keyof T]: DeepReadonly4381<T[P]>;
};

type UnionToIntersection4381<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4381<T> = UnionToIntersection4381<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4381<T extends unknown[], V> = [...T, V];

type TuplifyUnion4381<T, L = LastOf4381<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4381<TuplifyUnion4381<Exclude<T, L>>, L>;

type DeepPartial4381<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4381<T[P]> }
  : T;

type Paths4381<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4381<K, Paths4381<T[K], Prev4381[D]>> : never }[keyof T]
  : never;

type Prev4381 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4381<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4381 {
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

type ConfigPaths4381 = Paths4381<NestedConfig4381>;

interface HeavyProps4381 {
  config: DeepPartial4381<NestedConfig4381>;
  path?: ConfigPaths4381;
}

const HeavyComponent4381 = memo(function HeavyComponent4381({ config }: HeavyProps4381) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4381) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4381 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4381: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4381.displayName = 'HeavyComponent4381';
export default HeavyComponent4381;
