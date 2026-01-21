'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4030<T> = T extends (infer U)[]
  ? DeepReadonlyArray4030<U>
  : T extends object
  ? DeepReadonlyObject4030<T>
  : T;

interface DeepReadonlyArray4030<T> extends ReadonlyArray<DeepReadonly4030<T>> {}

type DeepReadonlyObject4030<T> = {
  readonly [P in keyof T]: DeepReadonly4030<T[P]>;
};

type UnionToIntersection4030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4030<T> = UnionToIntersection4030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4030<T extends unknown[], V> = [...T, V];

type TuplifyUnion4030<T, L = LastOf4030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4030<TuplifyUnion4030<Exclude<T, L>>, L>;

type DeepPartial4030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4030<T[P]> }
  : T;

type Paths4030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4030<K, Paths4030<T[K], Prev4030[D]>> : never }[keyof T]
  : never;

type Prev4030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4030 {
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

type ConfigPaths4030 = Paths4030<NestedConfig4030>;

interface HeavyProps4030 {
  config: DeepPartial4030<NestedConfig4030>;
  path?: ConfigPaths4030;
}

const HeavyComponent4030 = memo(function HeavyComponent4030({ config }: HeavyProps4030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4030.displayName = 'HeavyComponent4030';
export default HeavyComponent4030;
