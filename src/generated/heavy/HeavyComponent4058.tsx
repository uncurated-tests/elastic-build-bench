'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4058<T> = T extends (infer U)[]
  ? DeepReadonlyArray4058<U>
  : T extends object
  ? DeepReadonlyObject4058<T>
  : T;

interface DeepReadonlyArray4058<T> extends ReadonlyArray<DeepReadonly4058<T>> {}

type DeepReadonlyObject4058<T> = {
  readonly [P in keyof T]: DeepReadonly4058<T[P]>;
};

type UnionToIntersection4058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4058<T> = UnionToIntersection4058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4058<T extends unknown[], V> = [...T, V];

type TuplifyUnion4058<T, L = LastOf4058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4058<TuplifyUnion4058<Exclude<T, L>>, L>;

type DeepPartial4058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4058<T[P]> }
  : T;

type Paths4058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4058<K, Paths4058<T[K], Prev4058[D]>> : never }[keyof T]
  : never;

type Prev4058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4058 {
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

type ConfigPaths4058 = Paths4058<NestedConfig4058>;

interface HeavyProps4058 {
  config: DeepPartial4058<NestedConfig4058>;
  path?: ConfigPaths4058;
}

const HeavyComponent4058 = memo(function HeavyComponent4058({ config }: HeavyProps4058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4058.displayName = 'HeavyComponent4058';
export default HeavyComponent4058;
