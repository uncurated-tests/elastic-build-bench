'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4002<T> = T extends (infer U)[]
  ? DeepReadonlyArray4002<U>
  : T extends object
  ? DeepReadonlyObject4002<T>
  : T;

interface DeepReadonlyArray4002<T> extends ReadonlyArray<DeepReadonly4002<T>> {}

type DeepReadonlyObject4002<T> = {
  readonly [P in keyof T]: DeepReadonly4002<T[P]>;
};

type UnionToIntersection4002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4002<T> = UnionToIntersection4002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4002<T extends unknown[], V> = [...T, V];

type TuplifyUnion4002<T, L = LastOf4002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4002<TuplifyUnion4002<Exclude<T, L>>, L>;

type DeepPartial4002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4002<T[P]> }
  : T;

type Paths4002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4002<K, Paths4002<T[K], Prev4002[D]>> : never }[keyof T]
  : never;

type Prev4002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4002 {
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

type ConfigPaths4002 = Paths4002<NestedConfig4002>;

interface HeavyProps4002 {
  config: DeepPartial4002<NestedConfig4002>;
  path?: ConfigPaths4002;
}

const HeavyComponent4002 = memo(function HeavyComponent4002({ config }: HeavyProps4002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4002.displayName = 'HeavyComponent4002';
export default HeavyComponent4002;
