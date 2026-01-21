'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4808<T> = T extends (infer U)[]
  ? DeepReadonlyArray4808<U>
  : T extends object
  ? DeepReadonlyObject4808<T>
  : T;

interface DeepReadonlyArray4808<T> extends ReadonlyArray<DeepReadonly4808<T>> {}

type DeepReadonlyObject4808<T> = {
  readonly [P in keyof T]: DeepReadonly4808<T[P]>;
};

type UnionToIntersection4808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4808<T> = UnionToIntersection4808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4808<T extends unknown[], V> = [...T, V];

type TuplifyUnion4808<T, L = LastOf4808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4808<TuplifyUnion4808<Exclude<T, L>>, L>;

type DeepPartial4808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4808<T[P]> }
  : T;

type Paths4808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4808<K, Paths4808<T[K], Prev4808[D]>> : never }[keyof T]
  : never;

type Prev4808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4808 {
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

type ConfigPaths4808 = Paths4808<NestedConfig4808>;

interface HeavyProps4808 {
  config: DeepPartial4808<NestedConfig4808>;
  path?: ConfigPaths4808;
}

const HeavyComponent4808 = memo(function HeavyComponent4808({ config }: HeavyProps4808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4808.displayName = 'HeavyComponent4808';
export default HeavyComponent4808;
