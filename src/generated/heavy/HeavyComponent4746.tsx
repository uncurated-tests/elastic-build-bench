'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4746<T> = T extends (infer U)[]
  ? DeepReadonlyArray4746<U>
  : T extends object
  ? DeepReadonlyObject4746<T>
  : T;

interface DeepReadonlyArray4746<T> extends ReadonlyArray<DeepReadonly4746<T>> {}

type DeepReadonlyObject4746<T> = {
  readonly [P in keyof T]: DeepReadonly4746<T[P]>;
};

type UnionToIntersection4746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4746<T> = UnionToIntersection4746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4746<T extends unknown[], V> = [...T, V];

type TuplifyUnion4746<T, L = LastOf4746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4746<TuplifyUnion4746<Exclude<T, L>>, L>;

type DeepPartial4746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4746<T[P]> }
  : T;

type Paths4746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4746<K, Paths4746<T[K], Prev4746[D]>> : never }[keyof T]
  : never;

type Prev4746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4746 {
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

type ConfigPaths4746 = Paths4746<NestedConfig4746>;

interface HeavyProps4746 {
  config: DeepPartial4746<NestedConfig4746>;
  path?: ConfigPaths4746;
}

const HeavyComponent4746 = memo(function HeavyComponent4746({ config }: HeavyProps4746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4746.displayName = 'HeavyComponent4746';
export default HeavyComponent4746;
