'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4761<T> = T extends (infer U)[]
  ? DeepReadonlyArray4761<U>
  : T extends object
  ? DeepReadonlyObject4761<T>
  : T;

interface DeepReadonlyArray4761<T> extends ReadonlyArray<DeepReadonly4761<T>> {}

type DeepReadonlyObject4761<T> = {
  readonly [P in keyof T]: DeepReadonly4761<T[P]>;
};

type UnionToIntersection4761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4761<T> = UnionToIntersection4761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4761<T extends unknown[], V> = [...T, V];

type TuplifyUnion4761<T, L = LastOf4761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4761<TuplifyUnion4761<Exclude<T, L>>, L>;

type DeepPartial4761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4761<T[P]> }
  : T;

type Paths4761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4761<K, Paths4761<T[K], Prev4761[D]>> : never }[keyof T]
  : never;

type Prev4761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4761 {
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

type ConfigPaths4761 = Paths4761<NestedConfig4761>;

interface HeavyProps4761 {
  config: DeepPartial4761<NestedConfig4761>;
  path?: ConfigPaths4761;
}

const HeavyComponent4761 = memo(function HeavyComponent4761({ config }: HeavyProps4761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4761.displayName = 'HeavyComponent4761';
export default HeavyComponent4761;
