'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4415<T> = T extends (infer U)[]
  ? DeepReadonlyArray4415<U>
  : T extends object
  ? DeepReadonlyObject4415<T>
  : T;

interface DeepReadonlyArray4415<T> extends ReadonlyArray<DeepReadonly4415<T>> {}

type DeepReadonlyObject4415<T> = {
  readonly [P in keyof T]: DeepReadonly4415<T[P]>;
};

type UnionToIntersection4415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4415<T> = UnionToIntersection4415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4415<T extends unknown[], V> = [...T, V];

type TuplifyUnion4415<T, L = LastOf4415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4415<TuplifyUnion4415<Exclude<T, L>>, L>;

type DeepPartial4415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4415<T[P]> }
  : T;

type Paths4415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4415<K, Paths4415<T[K], Prev4415[D]>> : never }[keyof T]
  : never;

type Prev4415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4415 {
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

type ConfigPaths4415 = Paths4415<NestedConfig4415>;

interface HeavyProps4415 {
  config: DeepPartial4415<NestedConfig4415>;
  path?: ConfigPaths4415;
}

const HeavyComponent4415 = memo(function HeavyComponent4415({ config }: HeavyProps4415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4415.displayName = 'HeavyComponent4415';
export default HeavyComponent4415;
