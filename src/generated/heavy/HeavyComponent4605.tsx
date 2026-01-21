'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4605<T> = T extends (infer U)[]
  ? DeepReadonlyArray4605<U>
  : T extends object
  ? DeepReadonlyObject4605<T>
  : T;

interface DeepReadonlyArray4605<T> extends ReadonlyArray<DeepReadonly4605<T>> {}

type DeepReadonlyObject4605<T> = {
  readonly [P in keyof T]: DeepReadonly4605<T[P]>;
};

type UnionToIntersection4605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4605<T> = UnionToIntersection4605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4605<T extends unknown[], V> = [...T, V];

type TuplifyUnion4605<T, L = LastOf4605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4605<TuplifyUnion4605<Exclude<T, L>>, L>;

type DeepPartial4605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4605<T[P]> }
  : T;

type Paths4605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4605<K, Paths4605<T[K], Prev4605[D]>> : never }[keyof T]
  : never;

type Prev4605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4605 {
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

type ConfigPaths4605 = Paths4605<NestedConfig4605>;

interface HeavyProps4605 {
  config: DeepPartial4605<NestedConfig4605>;
  path?: ConfigPaths4605;
}

const HeavyComponent4605 = memo(function HeavyComponent4605({ config }: HeavyProps4605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4605.displayName = 'HeavyComponent4605';
export default HeavyComponent4605;
