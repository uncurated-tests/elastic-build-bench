'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4806<T> = T extends (infer U)[]
  ? DeepReadonlyArray4806<U>
  : T extends object
  ? DeepReadonlyObject4806<T>
  : T;

interface DeepReadonlyArray4806<T> extends ReadonlyArray<DeepReadonly4806<T>> {}

type DeepReadonlyObject4806<T> = {
  readonly [P in keyof T]: DeepReadonly4806<T[P]>;
};

type UnionToIntersection4806<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4806<T> = UnionToIntersection4806<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4806<T extends unknown[], V> = [...T, V];

type TuplifyUnion4806<T, L = LastOf4806<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4806<TuplifyUnion4806<Exclude<T, L>>, L>;

type DeepPartial4806<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4806<T[P]> }
  : T;

type Paths4806<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4806<K, Paths4806<T[K], Prev4806[D]>> : never }[keyof T]
  : never;

type Prev4806 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4806<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4806 {
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

type ConfigPaths4806 = Paths4806<NestedConfig4806>;

interface HeavyProps4806 {
  config: DeepPartial4806<NestedConfig4806>;
  path?: ConfigPaths4806;
}

const HeavyComponent4806 = memo(function HeavyComponent4806({ config }: HeavyProps4806) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4806) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4806 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4806: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4806.displayName = 'HeavyComponent4806';
export default HeavyComponent4806;
