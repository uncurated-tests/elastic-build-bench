'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4038<T> = T extends (infer U)[]
  ? DeepReadonlyArray4038<U>
  : T extends object
  ? DeepReadonlyObject4038<T>
  : T;

interface DeepReadonlyArray4038<T> extends ReadonlyArray<DeepReadonly4038<T>> {}

type DeepReadonlyObject4038<T> = {
  readonly [P in keyof T]: DeepReadonly4038<T[P]>;
};

type UnionToIntersection4038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4038<T> = UnionToIntersection4038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4038<T extends unknown[], V> = [...T, V];

type TuplifyUnion4038<T, L = LastOf4038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4038<TuplifyUnion4038<Exclude<T, L>>, L>;

type DeepPartial4038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4038<T[P]> }
  : T;

type Paths4038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4038<K, Paths4038<T[K], Prev4038[D]>> : never }[keyof T]
  : never;

type Prev4038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4038 {
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

type ConfigPaths4038 = Paths4038<NestedConfig4038>;

interface HeavyProps4038 {
  config: DeepPartial4038<NestedConfig4038>;
  path?: ConfigPaths4038;
}

const HeavyComponent4038 = memo(function HeavyComponent4038({ config }: HeavyProps4038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4038.displayName = 'HeavyComponent4038';
export default HeavyComponent4038;
