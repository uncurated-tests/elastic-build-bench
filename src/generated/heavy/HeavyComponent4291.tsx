'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4291<T> = T extends (infer U)[]
  ? DeepReadonlyArray4291<U>
  : T extends object
  ? DeepReadonlyObject4291<T>
  : T;

interface DeepReadonlyArray4291<T> extends ReadonlyArray<DeepReadonly4291<T>> {}

type DeepReadonlyObject4291<T> = {
  readonly [P in keyof T]: DeepReadonly4291<T[P]>;
};

type UnionToIntersection4291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4291<T> = UnionToIntersection4291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4291<T extends unknown[], V> = [...T, V];

type TuplifyUnion4291<T, L = LastOf4291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4291<TuplifyUnion4291<Exclude<T, L>>, L>;

type DeepPartial4291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4291<T[P]> }
  : T;

type Paths4291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4291<K, Paths4291<T[K], Prev4291[D]>> : never }[keyof T]
  : never;

type Prev4291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4291 {
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

type ConfigPaths4291 = Paths4291<NestedConfig4291>;

interface HeavyProps4291 {
  config: DeepPartial4291<NestedConfig4291>;
  path?: ConfigPaths4291;
}

const HeavyComponent4291 = memo(function HeavyComponent4291({ config }: HeavyProps4291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4291.displayName = 'HeavyComponent4291';
export default HeavyComponent4291;
