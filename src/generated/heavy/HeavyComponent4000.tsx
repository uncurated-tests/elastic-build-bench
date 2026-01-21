'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4000<T> = T extends (infer U)[]
  ? DeepReadonlyArray4000<U>
  : T extends object
  ? DeepReadonlyObject4000<T>
  : T;

interface DeepReadonlyArray4000<T> extends ReadonlyArray<DeepReadonly4000<T>> {}

type DeepReadonlyObject4000<T> = {
  readonly [P in keyof T]: DeepReadonly4000<T[P]>;
};

type UnionToIntersection4000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4000<T> = UnionToIntersection4000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4000<T extends unknown[], V> = [...T, V];

type TuplifyUnion4000<T, L = LastOf4000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4000<TuplifyUnion4000<Exclude<T, L>>, L>;

type DeepPartial4000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4000<T[P]> }
  : T;

type Paths4000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4000<K, Paths4000<T[K], Prev4000[D]>> : never }[keyof T]
  : never;

type Prev4000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4000 {
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

type ConfigPaths4000 = Paths4000<NestedConfig4000>;

interface HeavyProps4000 {
  config: DeepPartial4000<NestedConfig4000>;
  path?: ConfigPaths4000;
}

const HeavyComponent4000 = memo(function HeavyComponent4000({ config }: HeavyProps4000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4000.displayName = 'HeavyComponent4000';
export default HeavyComponent4000;
