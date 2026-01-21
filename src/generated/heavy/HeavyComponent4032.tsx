'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4032<T> = T extends (infer U)[]
  ? DeepReadonlyArray4032<U>
  : T extends object
  ? DeepReadonlyObject4032<T>
  : T;

interface DeepReadonlyArray4032<T> extends ReadonlyArray<DeepReadonly4032<T>> {}

type DeepReadonlyObject4032<T> = {
  readonly [P in keyof T]: DeepReadonly4032<T[P]>;
};

type UnionToIntersection4032<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4032<T> = UnionToIntersection4032<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4032<T extends unknown[], V> = [...T, V];

type TuplifyUnion4032<T, L = LastOf4032<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4032<TuplifyUnion4032<Exclude<T, L>>, L>;

type DeepPartial4032<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4032<T[P]> }
  : T;

type Paths4032<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4032<K, Paths4032<T[K], Prev4032[D]>> : never }[keyof T]
  : never;

type Prev4032 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4032<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4032 {
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

type ConfigPaths4032 = Paths4032<NestedConfig4032>;

interface HeavyProps4032 {
  config: DeepPartial4032<NestedConfig4032>;
  path?: ConfigPaths4032;
}

const HeavyComponent4032 = memo(function HeavyComponent4032({ config }: HeavyProps4032) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4032) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4032 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4032: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4032.displayName = 'HeavyComponent4032';
export default HeavyComponent4032;
