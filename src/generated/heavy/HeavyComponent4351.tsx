'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4351<T> = T extends (infer U)[]
  ? DeepReadonlyArray4351<U>
  : T extends object
  ? DeepReadonlyObject4351<T>
  : T;

interface DeepReadonlyArray4351<T> extends ReadonlyArray<DeepReadonly4351<T>> {}

type DeepReadonlyObject4351<T> = {
  readonly [P in keyof T]: DeepReadonly4351<T[P]>;
};

type UnionToIntersection4351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4351<T> = UnionToIntersection4351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4351<T extends unknown[], V> = [...T, V];

type TuplifyUnion4351<T, L = LastOf4351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4351<TuplifyUnion4351<Exclude<T, L>>, L>;

type DeepPartial4351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4351<T[P]> }
  : T;

type Paths4351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4351<K, Paths4351<T[K], Prev4351[D]>> : never }[keyof T]
  : never;

type Prev4351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4351 {
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

type ConfigPaths4351 = Paths4351<NestedConfig4351>;

interface HeavyProps4351 {
  config: DeepPartial4351<NestedConfig4351>;
  path?: ConfigPaths4351;
}

const HeavyComponent4351 = memo(function HeavyComponent4351({ config }: HeavyProps4351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4351.displayName = 'HeavyComponent4351';
export default HeavyComponent4351;
