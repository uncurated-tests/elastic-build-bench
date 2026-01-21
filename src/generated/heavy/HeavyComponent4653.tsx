'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4653<T> = T extends (infer U)[]
  ? DeepReadonlyArray4653<U>
  : T extends object
  ? DeepReadonlyObject4653<T>
  : T;

interface DeepReadonlyArray4653<T> extends ReadonlyArray<DeepReadonly4653<T>> {}

type DeepReadonlyObject4653<T> = {
  readonly [P in keyof T]: DeepReadonly4653<T[P]>;
};

type UnionToIntersection4653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4653<T> = UnionToIntersection4653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4653<T extends unknown[], V> = [...T, V];

type TuplifyUnion4653<T, L = LastOf4653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4653<TuplifyUnion4653<Exclude<T, L>>, L>;

type DeepPartial4653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4653<T[P]> }
  : T;

type Paths4653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4653<K, Paths4653<T[K], Prev4653[D]>> : never }[keyof T]
  : never;

type Prev4653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4653 {
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

type ConfigPaths4653 = Paths4653<NestedConfig4653>;

interface HeavyProps4653 {
  config: DeepPartial4653<NestedConfig4653>;
  path?: ConfigPaths4653;
}

const HeavyComponent4653 = memo(function HeavyComponent4653({ config }: HeavyProps4653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4653.displayName = 'HeavyComponent4653';
export default HeavyComponent4653;
