'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4902<T> = T extends (infer U)[]
  ? DeepReadonlyArray4902<U>
  : T extends object
  ? DeepReadonlyObject4902<T>
  : T;

interface DeepReadonlyArray4902<T> extends ReadonlyArray<DeepReadonly4902<T>> {}

type DeepReadonlyObject4902<T> = {
  readonly [P in keyof T]: DeepReadonly4902<T[P]>;
};

type UnionToIntersection4902<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4902<T> = UnionToIntersection4902<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4902<T extends unknown[], V> = [...T, V];

type TuplifyUnion4902<T, L = LastOf4902<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4902<TuplifyUnion4902<Exclude<T, L>>, L>;

type DeepPartial4902<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4902<T[P]> }
  : T;

type Paths4902<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4902<K, Paths4902<T[K], Prev4902[D]>> : never }[keyof T]
  : never;

type Prev4902 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4902<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4902 {
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

type ConfigPaths4902 = Paths4902<NestedConfig4902>;

interface HeavyProps4902 {
  config: DeepPartial4902<NestedConfig4902>;
  path?: ConfigPaths4902;
}

const HeavyComponent4902 = memo(function HeavyComponent4902({ config }: HeavyProps4902) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4902) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4902 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4902: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4902.displayName = 'HeavyComponent4902';
export default HeavyComponent4902;
