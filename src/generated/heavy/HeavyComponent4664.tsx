'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4664<T> = T extends (infer U)[]
  ? DeepReadonlyArray4664<U>
  : T extends object
  ? DeepReadonlyObject4664<T>
  : T;

interface DeepReadonlyArray4664<T> extends ReadonlyArray<DeepReadonly4664<T>> {}

type DeepReadonlyObject4664<T> = {
  readonly [P in keyof T]: DeepReadonly4664<T[P]>;
};

type UnionToIntersection4664<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4664<T> = UnionToIntersection4664<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4664<T extends unknown[], V> = [...T, V];

type TuplifyUnion4664<T, L = LastOf4664<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4664<TuplifyUnion4664<Exclude<T, L>>, L>;

type DeepPartial4664<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4664<T[P]> }
  : T;

type Paths4664<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4664<K, Paths4664<T[K], Prev4664[D]>> : never }[keyof T]
  : never;

type Prev4664 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4664<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4664 {
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

type ConfigPaths4664 = Paths4664<NestedConfig4664>;

interface HeavyProps4664 {
  config: DeepPartial4664<NestedConfig4664>;
  path?: ConfigPaths4664;
}

const HeavyComponent4664 = memo(function HeavyComponent4664({ config }: HeavyProps4664) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4664) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4664 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4664: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4664.displayName = 'HeavyComponent4664';
export default HeavyComponent4664;
