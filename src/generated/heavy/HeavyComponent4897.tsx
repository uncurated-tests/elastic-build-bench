'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4897<T> = T extends (infer U)[]
  ? DeepReadonlyArray4897<U>
  : T extends object
  ? DeepReadonlyObject4897<T>
  : T;

interface DeepReadonlyArray4897<T> extends ReadonlyArray<DeepReadonly4897<T>> {}

type DeepReadonlyObject4897<T> = {
  readonly [P in keyof T]: DeepReadonly4897<T[P]>;
};

type UnionToIntersection4897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4897<T> = UnionToIntersection4897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4897<T extends unknown[], V> = [...T, V];

type TuplifyUnion4897<T, L = LastOf4897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4897<TuplifyUnion4897<Exclude<T, L>>, L>;

type DeepPartial4897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4897<T[P]> }
  : T;

type Paths4897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4897<K, Paths4897<T[K], Prev4897[D]>> : never }[keyof T]
  : never;

type Prev4897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4897 {
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

type ConfigPaths4897 = Paths4897<NestedConfig4897>;

interface HeavyProps4897 {
  config: DeepPartial4897<NestedConfig4897>;
  path?: ConfigPaths4897;
}

const HeavyComponent4897 = memo(function HeavyComponent4897({ config }: HeavyProps4897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4897.displayName = 'HeavyComponent4897';
export default HeavyComponent4897;
