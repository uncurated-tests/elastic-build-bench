'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4596<T> = T extends (infer U)[]
  ? DeepReadonlyArray4596<U>
  : T extends object
  ? DeepReadonlyObject4596<T>
  : T;

interface DeepReadonlyArray4596<T> extends ReadonlyArray<DeepReadonly4596<T>> {}

type DeepReadonlyObject4596<T> = {
  readonly [P in keyof T]: DeepReadonly4596<T[P]>;
};

type UnionToIntersection4596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4596<T> = UnionToIntersection4596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4596<T extends unknown[], V> = [...T, V];

type TuplifyUnion4596<T, L = LastOf4596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4596<TuplifyUnion4596<Exclude<T, L>>, L>;

type DeepPartial4596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4596<T[P]> }
  : T;

type Paths4596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4596<K, Paths4596<T[K], Prev4596[D]>> : never }[keyof T]
  : never;

type Prev4596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4596 {
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

type ConfigPaths4596 = Paths4596<NestedConfig4596>;

interface HeavyProps4596 {
  config: DeepPartial4596<NestedConfig4596>;
  path?: ConfigPaths4596;
}

const HeavyComponent4596 = memo(function HeavyComponent4596({ config }: HeavyProps4596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4596.displayName = 'HeavyComponent4596';
export default HeavyComponent4596;
