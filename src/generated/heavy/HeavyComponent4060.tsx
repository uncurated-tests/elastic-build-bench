'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4060<T> = T extends (infer U)[]
  ? DeepReadonlyArray4060<U>
  : T extends object
  ? DeepReadonlyObject4060<T>
  : T;

interface DeepReadonlyArray4060<T> extends ReadonlyArray<DeepReadonly4060<T>> {}

type DeepReadonlyObject4060<T> = {
  readonly [P in keyof T]: DeepReadonly4060<T[P]>;
};

type UnionToIntersection4060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4060<T> = UnionToIntersection4060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4060<T extends unknown[], V> = [...T, V];

type TuplifyUnion4060<T, L = LastOf4060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4060<TuplifyUnion4060<Exclude<T, L>>, L>;

type DeepPartial4060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4060<T[P]> }
  : T;

type Paths4060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4060<K, Paths4060<T[K], Prev4060[D]>> : never }[keyof T]
  : never;

type Prev4060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4060 {
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

type ConfigPaths4060 = Paths4060<NestedConfig4060>;

interface HeavyProps4060 {
  config: DeepPartial4060<NestedConfig4060>;
  path?: ConfigPaths4060;
}

const HeavyComponent4060 = memo(function HeavyComponent4060({ config }: HeavyProps4060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4060.displayName = 'HeavyComponent4060';
export default HeavyComponent4060;
