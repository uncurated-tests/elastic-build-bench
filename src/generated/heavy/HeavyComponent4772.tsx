'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4772<T> = T extends (infer U)[]
  ? DeepReadonlyArray4772<U>
  : T extends object
  ? DeepReadonlyObject4772<T>
  : T;

interface DeepReadonlyArray4772<T> extends ReadonlyArray<DeepReadonly4772<T>> {}

type DeepReadonlyObject4772<T> = {
  readonly [P in keyof T]: DeepReadonly4772<T[P]>;
};

type UnionToIntersection4772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4772<T> = UnionToIntersection4772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4772<T extends unknown[], V> = [...T, V];

type TuplifyUnion4772<T, L = LastOf4772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4772<TuplifyUnion4772<Exclude<T, L>>, L>;

type DeepPartial4772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4772<T[P]> }
  : T;

type Paths4772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4772<K, Paths4772<T[K], Prev4772[D]>> : never }[keyof T]
  : never;

type Prev4772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4772 {
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

type ConfigPaths4772 = Paths4772<NestedConfig4772>;

interface HeavyProps4772 {
  config: DeepPartial4772<NestedConfig4772>;
  path?: ConfigPaths4772;
}

const HeavyComponent4772 = memo(function HeavyComponent4772({ config }: HeavyProps4772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4772.displayName = 'HeavyComponent4772';
export default HeavyComponent4772;
