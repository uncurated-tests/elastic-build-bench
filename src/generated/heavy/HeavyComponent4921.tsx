'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4921<T> = T extends (infer U)[]
  ? DeepReadonlyArray4921<U>
  : T extends object
  ? DeepReadonlyObject4921<T>
  : T;

interface DeepReadonlyArray4921<T> extends ReadonlyArray<DeepReadonly4921<T>> {}

type DeepReadonlyObject4921<T> = {
  readonly [P in keyof T]: DeepReadonly4921<T[P]>;
};

type UnionToIntersection4921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4921<T> = UnionToIntersection4921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4921<T extends unknown[], V> = [...T, V];

type TuplifyUnion4921<T, L = LastOf4921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4921<TuplifyUnion4921<Exclude<T, L>>, L>;

type DeepPartial4921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4921<T[P]> }
  : T;

type Paths4921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4921<K, Paths4921<T[K], Prev4921[D]>> : never }[keyof T]
  : never;

type Prev4921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4921 {
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

type ConfigPaths4921 = Paths4921<NestedConfig4921>;

interface HeavyProps4921 {
  config: DeepPartial4921<NestedConfig4921>;
  path?: ConfigPaths4921;
}

const HeavyComponent4921 = memo(function HeavyComponent4921({ config }: HeavyProps4921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4921.displayName = 'HeavyComponent4921';
export default HeavyComponent4921;
