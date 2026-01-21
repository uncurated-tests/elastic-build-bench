'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4955<T> = T extends (infer U)[]
  ? DeepReadonlyArray4955<U>
  : T extends object
  ? DeepReadonlyObject4955<T>
  : T;

interface DeepReadonlyArray4955<T> extends ReadonlyArray<DeepReadonly4955<T>> {}

type DeepReadonlyObject4955<T> = {
  readonly [P in keyof T]: DeepReadonly4955<T[P]>;
};

type UnionToIntersection4955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4955<T> = UnionToIntersection4955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4955<T extends unknown[], V> = [...T, V];

type TuplifyUnion4955<T, L = LastOf4955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4955<TuplifyUnion4955<Exclude<T, L>>, L>;

type DeepPartial4955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4955<T[P]> }
  : T;

type Paths4955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4955<K, Paths4955<T[K], Prev4955[D]>> : never }[keyof T]
  : never;

type Prev4955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4955 {
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

type ConfigPaths4955 = Paths4955<NestedConfig4955>;

interface HeavyProps4955 {
  config: DeepPartial4955<NestedConfig4955>;
  path?: ConfigPaths4955;
}

const HeavyComponent4955 = memo(function HeavyComponent4955({ config }: HeavyProps4955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4955.displayName = 'HeavyComponent4955';
export default HeavyComponent4955;
