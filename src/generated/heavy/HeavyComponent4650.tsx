'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4650<T> = T extends (infer U)[]
  ? DeepReadonlyArray4650<U>
  : T extends object
  ? DeepReadonlyObject4650<T>
  : T;

interface DeepReadonlyArray4650<T> extends ReadonlyArray<DeepReadonly4650<T>> {}

type DeepReadonlyObject4650<T> = {
  readonly [P in keyof T]: DeepReadonly4650<T[P]>;
};

type UnionToIntersection4650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4650<T> = UnionToIntersection4650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4650<T extends unknown[], V> = [...T, V];

type TuplifyUnion4650<T, L = LastOf4650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4650<TuplifyUnion4650<Exclude<T, L>>, L>;

type DeepPartial4650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4650<T[P]> }
  : T;

type Paths4650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4650<K, Paths4650<T[K], Prev4650[D]>> : never }[keyof T]
  : never;

type Prev4650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4650 {
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

type ConfigPaths4650 = Paths4650<NestedConfig4650>;

interface HeavyProps4650 {
  config: DeepPartial4650<NestedConfig4650>;
  path?: ConfigPaths4650;
}

const HeavyComponent4650 = memo(function HeavyComponent4650({ config }: HeavyProps4650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4650.displayName = 'HeavyComponent4650';
export default HeavyComponent4650;
