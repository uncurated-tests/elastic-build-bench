'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4989<T> = T extends (infer U)[]
  ? DeepReadonlyArray4989<U>
  : T extends object
  ? DeepReadonlyObject4989<T>
  : T;

interface DeepReadonlyArray4989<T> extends ReadonlyArray<DeepReadonly4989<T>> {}

type DeepReadonlyObject4989<T> = {
  readonly [P in keyof T]: DeepReadonly4989<T[P]>;
};

type UnionToIntersection4989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4989<T> = UnionToIntersection4989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4989<T extends unknown[], V> = [...T, V];

type TuplifyUnion4989<T, L = LastOf4989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4989<TuplifyUnion4989<Exclude<T, L>>, L>;

type DeepPartial4989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4989<T[P]> }
  : T;

type Paths4989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4989<K, Paths4989<T[K], Prev4989[D]>> : never }[keyof T]
  : never;

type Prev4989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4989 {
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

type ConfigPaths4989 = Paths4989<NestedConfig4989>;

interface HeavyProps4989 {
  config: DeepPartial4989<NestedConfig4989>;
  path?: ConfigPaths4989;
}

const HeavyComponent4989 = memo(function HeavyComponent4989({ config }: HeavyProps4989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4989.displayName = 'HeavyComponent4989';
export default HeavyComponent4989;
