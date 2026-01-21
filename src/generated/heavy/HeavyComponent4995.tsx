'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4995<T> = T extends (infer U)[]
  ? DeepReadonlyArray4995<U>
  : T extends object
  ? DeepReadonlyObject4995<T>
  : T;

interface DeepReadonlyArray4995<T> extends ReadonlyArray<DeepReadonly4995<T>> {}

type DeepReadonlyObject4995<T> = {
  readonly [P in keyof T]: DeepReadonly4995<T[P]>;
};

type UnionToIntersection4995<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4995<T> = UnionToIntersection4995<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4995<T extends unknown[], V> = [...T, V];

type TuplifyUnion4995<T, L = LastOf4995<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4995<TuplifyUnion4995<Exclude<T, L>>, L>;

type DeepPartial4995<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4995<T[P]> }
  : T;

type Paths4995<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4995<K, Paths4995<T[K], Prev4995[D]>> : never }[keyof T]
  : never;

type Prev4995 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4995<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4995 {
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

type ConfigPaths4995 = Paths4995<NestedConfig4995>;

interface HeavyProps4995 {
  config: DeepPartial4995<NestedConfig4995>;
  path?: ConfigPaths4995;
}

const HeavyComponent4995 = memo(function HeavyComponent4995({ config }: HeavyProps4995) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4995) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4995 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4995: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4995.displayName = 'HeavyComponent4995';
export default HeavyComponent4995;
