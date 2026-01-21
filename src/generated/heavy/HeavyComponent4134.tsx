'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4134<T> = T extends (infer U)[]
  ? DeepReadonlyArray4134<U>
  : T extends object
  ? DeepReadonlyObject4134<T>
  : T;

interface DeepReadonlyArray4134<T> extends ReadonlyArray<DeepReadonly4134<T>> {}

type DeepReadonlyObject4134<T> = {
  readonly [P in keyof T]: DeepReadonly4134<T[P]>;
};

type UnionToIntersection4134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4134<T> = UnionToIntersection4134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4134<T extends unknown[], V> = [...T, V];

type TuplifyUnion4134<T, L = LastOf4134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4134<TuplifyUnion4134<Exclude<T, L>>, L>;

type DeepPartial4134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4134<T[P]> }
  : T;

type Paths4134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4134<K, Paths4134<T[K], Prev4134[D]>> : never }[keyof T]
  : never;

type Prev4134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4134 {
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

type ConfigPaths4134 = Paths4134<NestedConfig4134>;

interface HeavyProps4134 {
  config: DeepPartial4134<NestedConfig4134>;
  path?: ConfigPaths4134;
}

const HeavyComponent4134 = memo(function HeavyComponent4134({ config }: HeavyProps4134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4134.displayName = 'HeavyComponent4134';
export default HeavyComponent4134;
