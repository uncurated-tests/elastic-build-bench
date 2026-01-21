'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4086<T> = T extends (infer U)[]
  ? DeepReadonlyArray4086<U>
  : T extends object
  ? DeepReadonlyObject4086<T>
  : T;

interface DeepReadonlyArray4086<T> extends ReadonlyArray<DeepReadonly4086<T>> {}

type DeepReadonlyObject4086<T> = {
  readonly [P in keyof T]: DeepReadonly4086<T[P]>;
};

type UnionToIntersection4086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4086<T> = UnionToIntersection4086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4086<T extends unknown[], V> = [...T, V];

type TuplifyUnion4086<T, L = LastOf4086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4086<TuplifyUnion4086<Exclude<T, L>>, L>;

type DeepPartial4086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4086<T[P]> }
  : T;

type Paths4086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4086<K, Paths4086<T[K], Prev4086[D]>> : never }[keyof T]
  : never;

type Prev4086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4086 {
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

type ConfigPaths4086 = Paths4086<NestedConfig4086>;

interface HeavyProps4086 {
  config: DeepPartial4086<NestedConfig4086>;
  path?: ConfigPaths4086;
}

const HeavyComponent4086 = memo(function HeavyComponent4086({ config }: HeavyProps4086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4086.displayName = 'HeavyComponent4086';
export default HeavyComponent4086;
