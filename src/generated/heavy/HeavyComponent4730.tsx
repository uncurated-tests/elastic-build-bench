'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4730<T> = T extends (infer U)[]
  ? DeepReadonlyArray4730<U>
  : T extends object
  ? DeepReadonlyObject4730<T>
  : T;

interface DeepReadonlyArray4730<T> extends ReadonlyArray<DeepReadonly4730<T>> {}

type DeepReadonlyObject4730<T> = {
  readonly [P in keyof T]: DeepReadonly4730<T[P]>;
};

type UnionToIntersection4730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4730<T> = UnionToIntersection4730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4730<T extends unknown[], V> = [...T, V];

type TuplifyUnion4730<T, L = LastOf4730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4730<TuplifyUnion4730<Exclude<T, L>>, L>;

type DeepPartial4730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4730<T[P]> }
  : T;

type Paths4730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4730<K, Paths4730<T[K], Prev4730[D]>> : never }[keyof T]
  : never;

type Prev4730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4730 {
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

type ConfigPaths4730 = Paths4730<NestedConfig4730>;

interface HeavyProps4730 {
  config: DeepPartial4730<NestedConfig4730>;
  path?: ConfigPaths4730;
}

const HeavyComponent4730 = memo(function HeavyComponent4730({ config }: HeavyProps4730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4730.displayName = 'HeavyComponent4730';
export default HeavyComponent4730;
