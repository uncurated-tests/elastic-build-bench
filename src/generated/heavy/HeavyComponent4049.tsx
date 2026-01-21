'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4049<T> = T extends (infer U)[]
  ? DeepReadonlyArray4049<U>
  : T extends object
  ? DeepReadonlyObject4049<T>
  : T;

interface DeepReadonlyArray4049<T> extends ReadonlyArray<DeepReadonly4049<T>> {}

type DeepReadonlyObject4049<T> = {
  readonly [P in keyof T]: DeepReadonly4049<T[P]>;
};

type UnionToIntersection4049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4049<T> = UnionToIntersection4049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4049<T extends unknown[], V> = [...T, V];

type TuplifyUnion4049<T, L = LastOf4049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4049<TuplifyUnion4049<Exclude<T, L>>, L>;

type DeepPartial4049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4049<T[P]> }
  : T;

type Paths4049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4049<K, Paths4049<T[K], Prev4049[D]>> : never }[keyof T]
  : never;

type Prev4049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4049 {
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

type ConfigPaths4049 = Paths4049<NestedConfig4049>;

interface HeavyProps4049 {
  config: DeepPartial4049<NestedConfig4049>;
  path?: ConfigPaths4049;
}

const HeavyComponent4049 = memo(function HeavyComponent4049({ config }: HeavyProps4049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4049.displayName = 'HeavyComponent4049';
export default HeavyComponent4049;
