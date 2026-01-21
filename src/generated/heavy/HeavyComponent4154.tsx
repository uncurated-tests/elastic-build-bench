'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4154<T> = T extends (infer U)[]
  ? DeepReadonlyArray4154<U>
  : T extends object
  ? DeepReadonlyObject4154<T>
  : T;

interface DeepReadonlyArray4154<T> extends ReadonlyArray<DeepReadonly4154<T>> {}

type DeepReadonlyObject4154<T> = {
  readonly [P in keyof T]: DeepReadonly4154<T[P]>;
};

type UnionToIntersection4154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4154<T> = UnionToIntersection4154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4154<T extends unknown[], V> = [...T, V];

type TuplifyUnion4154<T, L = LastOf4154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4154<TuplifyUnion4154<Exclude<T, L>>, L>;

type DeepPartial4154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4154<T[P]> }
  : T;

type Paths4154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4154<K, Paths4154<T[K], Prev4154[D]>> : never }[keyof T]
  : never;

type Prev4154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4154 {
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

type ConfigPaths4154 = Paths4154<NestedConfig4154>;

interface HeavyProps4154 {
  config: DeepPartial4154<NestedConfig4154>;
  path?: ConfigPaths4154;
}

const HeavyComponent4154 = memo(function HeavyComponent4154({ config }: HeavyProps4154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4154.displayName = 'HeavyComponent4154';
export default HeavyComponent4154;
