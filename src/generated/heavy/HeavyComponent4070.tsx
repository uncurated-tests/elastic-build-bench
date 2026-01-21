'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4070<T> = T extends (infer U)[]
  ? DeepReadonlyArray4070<U>
  : T extends object
  ? DeepReadonlyObject4070<T>
  : T;

interface DeepReadonlyArray4070<T> extends ReadonlyArray<DeepReadonly4070<T>> {}

type DeepReadonlyObject4070<T> = {
  readonly [P in keyof T]: DeepReadonly4070<T[P]>;
};

type UnionToIntersection4070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4070<T> = UnionToIntersection4070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4070<T extends unknown[], V> = [...T, V];

type TuplifyUnion4070<T, L = LastOf4070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4070<TuplifyUnion4070<Exclude<T, L>>, L>;

type DeepPartial4070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4070<T[P]> }
  : T;

type Paths4070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4070<K, Paths4070<T[K], Prev4070[D]>> : never }[keyof T]
  : never;

type Prev4070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4070 {
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

type ConfigPaths4070 = Paths4070<NestedConfig4070>;

interface HeavyProps4070 {
  config: DeepPartial4070<NestedConfig4070>;
  path?: ConfigPaths4070;
}

const HeavyComponent4070 = memo(function HeavyComponent4070({ config }: HeavyProps4070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4070.displayName = 'HeavyComponent4070';
export default HeavyComponent4070;
