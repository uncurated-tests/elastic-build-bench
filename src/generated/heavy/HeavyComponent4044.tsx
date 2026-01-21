'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4044<T> = T extends (infer U)[]
  ? DeepReadonlyArray4044<U>
  : T extends object
  ? DeepReadonlyObject4044<T>
  : T;

interface DeepReadonlyArray4044<T> extends ReadonlyArray<DeepReadonly4044<T>> {}

type DeepReadonlyObject4044<T> = {
  readonly [P in keyof T]: DeepReadonly4044<T[P]>;
};

type UnionToIntersection4044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4044<T> = UnionToIntersection4044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4044<T extends unknown[], V> = [...T, V];

type TuplifyUnion4044<T, L = LastOf4044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4044<TuplifyUnion4044<Exclude<T, L>>, L>;

type DeepPartial4044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4044<T[P]> }
  : T;

type Paths4044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4044<K, Paths4044<T[K], Prev4044[D]>> : never }[keyof T]
  : never;

type Prev4044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4044 {
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

type ConfigPaths4044 = Paths4044<NestedConfig4044>;

interface HeavyProps4044 {
  config: DeepPartial4044<NestedConfig4044>;
  path?: ConfigPaths4044;
}

const HeavyComponent4044 = memo(function HeavyComponent4044({ config }: HeavyProps4044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4044.displayName = 'HeavyComponent4044';
export default HeavyComponent4044;
