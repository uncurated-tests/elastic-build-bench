'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4957<T> = T extends (infer U)[]
  ? DeepReadonlyArray4957<U>
  : T extends object
  ? DeepReadonlyObject4957<T>
  : T;

interface DeepReadonlyArray4957<T> extends ReadonlyArray<DeepReadonly4957<T>> {}

type DeepReadonlyObject4957<T> = {
  readonly [P in keyof T]: DeepReadonly4957<T[P]>;
};

type UnionToIntersection4957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4957<T> = UnionToIntersection4957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4957<T extends unknown[], V> = [...T, V];

type TuplifyUnion4957<T, L = LastOf4957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4957<TuplifyUnion4957<Exclude<T, L>>, L>;

type DeepPartial4957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4957<T[P]> }
  : T;

type Paths4957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4957<K, Paths4957<T[K], Prev4957[D]>> : never }[keyof T]
  : never;

type Prev4957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4957 {
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

type ConfigPaths4957 = Paths4957<NestedConfig4957>;

interface HeavyProps4957 {
  config: DeepPartial4957<NestedConfig4957>;
  path?: ConfigPaths4957;
}

const HeavyComponent4957 = memo(function HeavyComponent4957({ config }: HeavyProps4957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4957.displayName = 'HeavyComponent4957';
export default HeavyComponent4957;
