'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4739<T> = T extends (infer U)[]
  ? DeepReadonlyArray4739<U>
  : T extends object
  ? DeepReadonlyObject4739<T>
  : T;

interface DeepReadonlyArray4739<T> extends ReadonlyArray<DeepReadonly4739<T>> {}

type DeepReadonlyObject4739<T> = {
  readonly [P in keyof T]: DeepReadonly4739<T[P]>;
};

type UnionToIntersection4739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4739<T> = UnionToIntersection4739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4739<T extends unknown[], V> = [...T, V];

type TuplifyUnion4739<T, L = LastOf4739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4739<TuplifyUnion4739<Exclude<T, L>>, L>;

type DeepPartial4739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4739<T[P]> }
  : T;

type Paths4739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4739<K, Paths4739<T[K], Prev4739[D]>> : never }[keyof T]
  : never;

type Prev4739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4739 {
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

type ConfigPaths4739 = Paths4739<NestedConfig4739>;

interface HeavyProps4739 {
  config: DeepPartial4739<NestedConfig4739>;
  path?: ConfigPaths4739;
}

const HeavyComponent4739 = memo(function HeavyComponent4739({ config }: HeavyProps4739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4739.displayName = 'HeavyComponent4739';
export default HeavyComponent4739;
