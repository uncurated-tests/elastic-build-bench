'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4206<T> = T extends (infer U)[]
  ? DeepReadonlyArray4206<U>
  : T extends object
  ? DeepReadonlyObject4206<T>
  : T;

interface DeepReadonlyArray4206<T> extends ReadonlyArray<DeepReadonly4206<T>> {}

type DeepReadonlyObject4206<T> = {
  readonly [P in keyof T]: DeepReadonly4206<T[P]>;
};

type UnionToIntersection4206<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4206<T> = UnionToIntersection4206<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4206<T extends unknown[], V> = [...T, V];

type TuplifyUnion4206<T, L = LastOf4206<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4206<TuplifyUnion4206<Exclude<T, L>>, L>;

type DeepPartial4206<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4206<T[P]> }
  : T;

type Paths4206<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4206<K, Paths4206<T[K], Prev4206[D]>> : never }[keyof T]
  : never;

type Prev4206 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4206<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4206 {
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

type ConfigPaths4206 = Paths4206<NestedConfig4206>;

interface HeavyProps4206 {
  config: DeepPartial4206<NestedConfig4206>;
  path?: ConfigPaths4206;
}

const HeavyComponent4206 = memo(function HeavyComponent4206({ config }: HeavyProps4206) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4206) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4206 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4206: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4206.displayName = 'HeavyComponent4206';
export default HeavyComponent4206;
