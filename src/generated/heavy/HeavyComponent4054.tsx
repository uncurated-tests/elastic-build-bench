'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4054<T> = T extends (infer U)[]
  ? DeepReadonlyArray4054<U>
  : T extends object
  ? DeepReadonlyObject4054<T>
  : T;

interface DeepReadonlyArray4054<T> extends ReadonlyArray<DeepReadonly4054<T>> {}

type DeepReadonlyObject4054<T> = {
  readonly [P in keyof T]: DeepReadonly4054<T[P]>;
};

type UnionToIntersection4054<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4054<T> = UnionToIntersection4054<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4054<T extends unknown[], V> = [...T, V];

type TuplifyUnion4054<T, L = LastOf4054<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4054<TuplifyUnion4054<Exclude<T, L>>, L>;

type DeepPartial4054<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4054<T[P]> }
  : T;

type Paths4054<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4054<K, Paths4054<T[K], Prev4054[D]>> : never }[keyof T]
  : never;

type Prev4054 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4054<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4054 {
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

type ConfigPaths4054 = Paths4054<NestedConfig4054>;

interface HeavyProps4054 {
  config: DeepPartial4054<NestedConfig4054>;
  path?: ConfigPaths4054;
}

const HeavyComponent4054 = memo(function HeavyComponent4054({ config }: HeavyProps4054) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4054) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4054 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4054: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4054.displayName = 'HeavyComponent4054';
export default HeavyComponent4054;
