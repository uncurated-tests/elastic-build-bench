'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4093<T> = T extends (infer U)[]
  ? DeepReadonlyArray4093<U>
  : T extends object
  ? DeepReadonlyObject4093<T>
  : T;

interface DeepReadonlyArray4093<T> extends ReadonlyArray<DeepReadonly4093<T>> {}

type DeepReadonlyObject4093<T> = {
  readonly [P in keyof T]: DeepReadonly4093<T[P]>;
};

type UnionToIntersection4093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4093<T> = UnionToIntersection4093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4093<T extends unknown[], V> = [...T, V];

type TuplifyUnion4093<T, L = LastOf4093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4093<TuplifyUnion4093<Exclude<T, L>>, L>;

type DeepPartial4093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4093<T[P]> }
  : T;

type Paths4093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4093<K, Paths4093<T[K], Prev4093[D]>> : never }[keyof T]
  : never;

type Prev4093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4093 {
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

type ConfigPaths4093 = Paths4093<NestedConfig4093>;

interface HeavyProps4093 {
  config: DeepPartial4093<NestedConfig4093>;
  path?: ConfigPaths4093;
}

const HeavyComponent4093 = memo(function HeavyComponent4093({ config }: HeavyProps4093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4093.displayName = 'HeavyComponent4093';
export default HeavyComponent4093;
