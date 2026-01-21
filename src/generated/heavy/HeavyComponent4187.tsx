'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4187<T> = T extends (infer U)[]
  ? DeepReadonlyArray4187<U>
  : T extends object
  ? DeepReadonlyObject4187<T>
  : T;

interface DeepReadonlyArray4187<T> extends ReadonlyArray<DeepReadonly4187<T>> {}

type DeepReadonlyObject4187<T> = {
  readonly [P in keyof T]: DeepReadonly4187<T[P]>;
};

type UnionToIntersection4187<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4187<T> = UnionToIntersection4187<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4187<T extends unknown[], V> = [...T, V];

type TuplifyUnion4187<T, L = LastOf4187<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4187<TuplifyUnion4187<Exclude<T, L>>, L>;

type DeepPartial4187<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4187<T[P]> }
  : T;

type Paths4187<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4187<K, Paths4187<T[K], Prev4187[D]>> : never }[keyof T]
  : never;

type Prev4187 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4187<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4187 {
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

type ConfigPaths4187 = Paths4187<NestedConfig4187>;

interface HeavyProps4187 {
  config: DeepPartial4187<NestedConfig4187>;
  path?: ConfigPaths4187;
}

const HeavyComponent4187 = memo(function HeavyComponent4187({ config }: HeavyProps4187) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4187) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4187 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4187: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4187.displayName = 'HeavyComponent4187';
export default HeavyComponent4187;
