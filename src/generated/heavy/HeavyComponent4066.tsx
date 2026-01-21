'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4066<T> = T extends (infer U)[]
  ? DeepReadonlyArray4066<U>
  : T extends object
  ? DeepReadonlyObject4066<T>
  : T;

interface DeepReadonlyArray4066<T> extends ReadonlyArray<DeepReadonly4066<T>> {}

type DeepReadonlyObject4066<T> = {
  readonly [P in keyof T]: DeepReadonly4066<T[P]>;
};

type UnionToIntersection4066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4066<T> = UnionToIntersection4066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4066<T extends unknown[], V> = [...T, V];

type TuplifyUnion4066<T, L = LastOf4066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4066<TuplifyUnion4066<Exclude<T, L>>, L>;

type DeepPartial4066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4066<T[P]> }
  : T;

type Paths4066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4066<K, Paths4066<T[K], Prev4066[D]>> : never }[keyof T]
  : never;

type Prev4066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4066 {
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

type ConfigPaths4066 = Paths4066<NestedConfig4066>;

interface HeavyProps4066 {
  config: DeepPartial4066<NestedConfig4066>;
  path?: ConfigPaths4066;
}

const HeavyComponent4066 = memo(function HeavyComponent4066({ config }: HeavyProps4066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4066.displayName = 'HeavyComponent4066';
export default HeavyComponent4066;
