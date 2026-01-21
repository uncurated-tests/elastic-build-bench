'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4490<T> = T extends (infer U)[]
  ? DeepReadonlyArray4490<U>
  : T extends object
  ? DeepReadonlyObject4490<T>
  : T;

interface DeepReadonlyArray4490<T> extends ReadonlyArray<DeepReadonly4490<T>> {}

type DeepReadonlyObject4490<T> = {
  readonly [P in keyof T]: DeepReadonly4490<T[P]>;
};

type UnionToIntersection4490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4490<T> = UnionToIntersection4490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4490<T extends unknown[], V> = [...T, V];

type TuplifyUnion4490<T, L = LastOf4490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4490<TuplifyUnion4490<Exclude<T, L>>, L>;

type DeepPartial4490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4490<T[P]> }
  : T;

type Paths4490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4490<K, Paths4490<T[K], Prev4490[D]>> : never }[keyof T]
  : never;

type Prev4490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4490 {
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

type ConfigPaths4490 = Paths4490<NestedConfig4490>;

interface HeavyProps4490 {
  config: DeepPartial4490<NestedConfig4490>;
  path?: ConfigPaths4490;
}

const HeavyComponent4490 = memo(function HeavyComponent4490({ config }: HeavyProps4490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4490.displayName = 'HeavyComponent4490';
export default HeavyComponent4490;
