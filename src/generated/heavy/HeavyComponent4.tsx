'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4<T> = T extends (infer U)[]
  ? DeepReadonlyArray4<U>
  : T extends object
  ? DeepReadonlyObject4<T>
  : T;

interface DeepReadonlyArray4<T> extends ReadonlyArray<DeepReadonly4<T>> {}

type DeepReadonlyObject4<T> = {
  readonly [P in keyof T]: DeepReadonly4<T[P]>;
};

type UnionToIntersection4<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4<T> = UnionToIntersection4<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4<T extends unknown[], V> = [...T, V];

type TuplifyUnion4<T, L = LastOf4<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4<TuplifyUnion4<Exclude<T, L>>, L>;

type DeepPartial4<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4<T[P]> }
  : T;

type Paths4<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4<K, Paths4<T[K], Prev4[D]>> : never }[keyof T]
  : never;

type Prev4 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4 {
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

type ConfigPaths4 = Paths4<NestedConfig4>;

interface HeavyProps4 {
  config: DeepPartial4<NestedConfig4>;
  path?: ConfigPaths4;
}

const HeavyComponent4 = memo(function HeavyComponent4({ config }: HeavyProps4) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4.displayName = 'HeavyComponent4';
export default HeavyComponent4;
