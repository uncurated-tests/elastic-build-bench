'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4488<T> = T extends (infer U)[]
  ? DeepReadonlyArray4488<U>
  : T extends object
  ? DeepReadonlyObject4488<T>
  : T;

interface DeepReadonlyArray4488<T> extends ReadonlyArray<DeepReadonly4488<T>> {}

type DeepReadonlyObject4488<T> = {
  readonly [P in keyof T]: DeepReadonly4488<T[P]>;
};

type UnionToIntersection4488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4488<T> = UnionToIntersection4488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4488<T extends unknown[], V> = [...T, V];

type TuplifyUnion4488<T, L = LastOf4488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4488<TuplifyUnion4488<Exclude<T, L>>, L>;

type DeepPartial4488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4488<T[P]> }
  : T;

type Paths4488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4488<K, Paths4488<T[K], Prev4488[D]>> : never }[keyof T]
  : never;

type Prev4488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4488 {
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

type ConfigPaths4488 = Paths4488<NestedConfig4488>;

interface HeavyProps4488 {
  config: DeepPartial4488<NestedConfig4488>;
  path?: ConfigPaths4488;
}

const HeavyComponent4488 = memo(function HeavyComponent4488({ config }: HeavyProps4488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4488.displayName = 'HeavyComponent4488';
export default HeavyComponent4488;
