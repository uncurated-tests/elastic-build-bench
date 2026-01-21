'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4621<T> = T extends (infer U)[]
  ? DeepReadonlyArray4621<U>
  : T extends object
  ? DeepReadonlyObject4621<T>
  : T;

interface DeepReadonlyArray4621<T> extends ReadonlyArray<DeepReadonly4621<T>> {}

type DeepReadonlyObject4621<T> = {
  readonly [P in keyof T]: DeepReadonly4621<T[P]>;
};

type UnionToIntersection4621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4621<T> = UnionToIntersection4621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4621<T extends unknown[], V> = [...T, V];

type TuplifyUnion4621<T, L = LastOf4621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4621<TuplifyUnion4621<Exclude<T, L>>, L>;

type DeepPartial4621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4621<T[P]> }
  : T;

type Paths4621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4621<K, Paths4621<T[K], Prev4621[D]>> : never }[keyof T]
  : never;

type Prev4621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4621 {
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

type ConfigPaths4621 = Paths4621<NestedConfig4621>;

interface HeavyProps4621 {
  config: DeepPartial4621<NestedConfig4621>;
  path?: ConfigPaths4621;
}

const HeavyComponent4621 = memo(function HeavyComponent4621({ config }: HeavyProps4621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4621.displayName = 'HeavyComponent4621';
export default HeavyComponent4621;
