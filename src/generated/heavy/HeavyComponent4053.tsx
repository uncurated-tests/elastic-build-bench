'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4053<T> = T extends (infer U)[]
  ? DeepReadonlyArray4053<U>
  : T extends object
  ? DeepReadonlyObject4053<T>
  : T;

interface DeepReadonlyArray4053<T> extends ReadonlyArray<DeepReadonly4053<T>> {}

type DeepReadonlyObject4053<T> = {
  readonly [P in keyof T]: DeepReadonly4053<T[P]>;
};

type UnionToIntersection4053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4053<T> = UnionToIntersection4053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4053<T extends unknown[], V> = [...T, V];

type TuplifyUnion4053<T, L = LastOf4053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4053<TuplifyUnion4053<Exclude<T, L>>, L>;

type DeepPartial4053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4053<T[P]> }
  : T;

type Paths4053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4053<K, Paths4053<T[K], Prev4053[D]>> : never }[keyof T]
  : never;

type Prev4053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4053 {
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

type ConfigPaths4053 = Paths4053<NestedConfig4053>;

interface HeavyProps4053 {
  config: DeepPartial4053<NestedConfig4053>;
  path?: ConfigPaths4053;
}

const HeavyComponent4053 = memo(function HeavyComponent4053({ config }: HeavyProps4053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4053.displayName = 'HeavyComponent4053';
export default HeavyComponent4053;
