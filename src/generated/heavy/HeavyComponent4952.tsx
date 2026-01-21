'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4952<T> = T extends (infer U)[]
  ? DeepReadonlyArray4952<U>
  : T extends object
  ? DeepReadonlyObject4952<T>
  : T;

interface DeepReadonlyArray4952<T> extends ReadonlyArray<DeepReadonly4952<T>> {}

type DeepReadonlyObject4952<T> = {
  readonly [P in keyof T]: DeepReadonly4952<T[P]>;
};

type UnionToIntersection4952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4952<T> = UnionToIntersection4952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4952<T extends unknown[], V> = [...T, V];

type TuplifyUnion4952<T, L = LastOf4952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4952<TuplifyUnion4952<Exclude<T, L>>, L>;

type DeepPartial4952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4952<T[P]> }
  : T;

type Paths4952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4952<K, Paths4952<T[K], Prev4952[D]>> : never }[keyof T]
  : never;

type Prev4952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4952 {
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

type ConfigPaths4952 = Paths4952<NestedConfig4952>;

interface HeavyProps4952 {
  config: DeepPartial4952<NestedConfig4952>;
  path?: ConfigPaths4952;
}

const HeavyComponent4952 = memo(function HeavyComponent4952({ config }: HeavyProps4952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4952.displayName = 'HeavyComponent4952';
export default HeavyComponent4952;
