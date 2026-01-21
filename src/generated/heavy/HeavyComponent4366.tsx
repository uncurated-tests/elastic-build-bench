'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4366<T> = T extends (infer U)[]
  ? DeepReadonlyArray4366<U>
  : T extends object
  ? DeepReadonlyObject4366<T>
  : T;

interface DeepReadonlyArray4366<T> extends ReadonlyArray<DeepReadonly4366<T>> {}

type DeepReadonlyObject4366<T> = {
  readonly [P in keyof T]: DeepReadonly4366<T[P]>;
};

type UnionToIntersection4366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4366<T> = UnionToIntersection4366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4366<T extends unknown[], V> = [...T, V];

type TuplifyUnion4366<T, L = LastOf4366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4366<TuplifyUnion4366<Exclude<T, L>>, L>;

type DeepPartial4366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4366<T[P]> }
  : T;

type Paths4366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4366<K, Paths4366<T[K], Prev4366[D]>> : never }[keyof T]
  : never;

type Prev4366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4366 {
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

type ConfigPaths4366 = Paths4366<NestedConfig4366>;

interface HeavyProps4366 {
  config: DeepPartial4366<NestedConfig4366>;
  path?: ConfigPaths4366;
}

const HeavyComponent4366 = memo(function HeavyComponent4366({ config }: HeavyProps4366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4366.displayName = 'HeavyComponent4366';
export default HeavyComponent4366;
