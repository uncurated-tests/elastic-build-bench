'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4376<T> = T extends (infer U)[]
  ? DeepReadonlyArray4376<U>
  : T extends object
  ? DeepReadonlyObject4376<T>
  : T;

interface DeepReadonlyArray4376<T> extends ReadonlyArray<DeepReadonly4376<T>> {}

type DeepReadonlyObject4376<T> = {
  readonly [P in keyof T]: DeepReadonly4376<T[P]>;
};

type UnionToIntersection4376<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4376<T> = UnionToIntersection4376<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4376<T extends unknown[], V> = [...T, V];

type TuplifyUnion4376<T, L = LastOf4376<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4376<TuplifyUnion4376<Exclude<T, L>>, L>;

type DeepPartial4376<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4376<T[P]> }
  : T;

type Paths4376<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4376<K, Paths4376<T[K], Prev4376[D]>> : never }[keyof T]
  : never;

type Prev4376 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4376<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4376 {
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

type ConfigPaths4376 = Paths4376<NestedConfig4376>;

interface HeavyProps4376 {
  config: DeepPartial4376<NestedConfig4376>;
  path?: ConfigPaths4376;
}

const HeavyComponent4376 = memo(function HeavyComponent4376({ config }: HeavyProps4376) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4376) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4376 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4376: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4376.displayName = 'HeavyComponent4376';
export default HeavyComponent4376;
