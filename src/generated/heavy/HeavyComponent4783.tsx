'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4783<T> = T extends (infer U)[]
  ? DeepReadonlyArray4783<U>
  : T extends object
  ? DeepReadonlyObject4783<T>
  : T;

interface DeepReadonlyArray4783<T> extends ReadonlyArray<DeepReadonly4783<T>> {}

type DeepReadonlyObject4783<T> = {
  readonly [P in keyof T]: DeepReadonly4783<T[P]>;
};

type UnionToIntersection4783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4783<T> = UnionToIntersection4783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4783<T extends unknown[], V> = [...T, V];

type TuplifyUnion4783<T, L = LastOf4783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4783<TuplifyUnion4783<Exclude<T, L>>, L>;

type DeepPartial4783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4783<T[P]> }
  : T;

type Paths4783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4783<K, Paths4783<T[K], Prev4783[D]>> : never }[keyof T]
  : never;

type Prev4783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4783 {
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

type ConfigPaths4783 = Paths4783<NestedConfig4783>;

interface HeavyProps4783 {
  config: DeepPartial4783<NestedConfig4783>;
  path?: ConfigPaths4783;
}

const HeavyComponent4783 = memo(function HeavyComponent4783({ config }: HeavyProps4783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4783.displayName = 'HeavyComponent4783';
export default HeavyComponent4783;
