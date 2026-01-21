'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4300<T> = T extends (infer U)[]
  ? DeepReadonlyArray4300<U>
  : T extends object
  ? DeepReadonlyObject4300<T>
  : T;

interface DeepReadonlyArray4300<T> extends ReadonlyArray<DeepReadonly4300<T>> {}

type DeepReadonlyObject4300<T> = {
  readonly [P in keyof T]: DeepReadonly4300<T[P]>;
};

type UnionToIntersection4300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4300<T> = UnionToIntersection4300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4300<T extends unknown[], V> = [...T, V];

type TuplifyUnion4300<T, L = LastOf4300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4300<TuplifyUnion4300<Exclude<T, L>>, L>;

type DeepPartial4300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4300<T[P]> }
  : T;

type Paths4300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4300<K, Paths4300<T[K], Prev4300[D]>> : never }[keyof T]
  : never;

type Prev4300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4300 {
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

type ConfigPaths4300 = Paths4300<NestedConfig4300>;

interface HeavyProps4300 {
  config: DeepPartial4300<NestedConfig4300>;
  path?: ConfigPaths4300;
}

const HeavyComponent4300 = memo(function HeavyComponent4300({ config }: HeavyProps4300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4300.displayName = 'HeavyComponent4300';
export default HeavyComponent4300;
