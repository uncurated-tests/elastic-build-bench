'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4962<T> = T extends (infer U)[]
  ? DeepReadonlyArray4962<U>
  : T extends object
  ? DeepReadonlyObject4962<T>
  : T;

interface DeepReadonlyArray4962<T> extends ReadonlyArray<DeepReadonly4962<T>> {}

type DeepReadonlyObject4962<T> = {
  readonly [P in keyof T]: DeepReadonly4962<T[P]>;
};

type UnionToIntersection4962<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4962<T> = UnionToIntersection4962<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4962<T extends unknown[], V> = [...T, V];

type TuplifyUnion4962<T, L = LastOf4962<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4962<TuplifyUnion4962<Exclude<T, L>>, L>;

type DeepPartial4962<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4962<T[P]> }
  : T;

type Paths4962<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4962<K, Paths4962<T[K], Prev4962[D]>> : never }[keyof T]
  : never;

type Prev4962 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4962<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4962 {
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

type ConfigPaths4962 = Paths4962<NestedConfig4962>;

interface HeavyProps4962 {
  config: DeepPartial4962<NestedConfig4962>;
  path?: ConfigPaths4962;
}

const HeavyComponent4962 = memo(function HeavyComponent4962({ config }: HeavyProps4962) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4962) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4962 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4962: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4962.displayName = 'HeavyComponent4962';
export default HeavyComponent4962;
