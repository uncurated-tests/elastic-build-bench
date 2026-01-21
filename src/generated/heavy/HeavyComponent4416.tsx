'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4416<T> = T extends (infer U)[]
  ? DeepReadonlyArray4416<U>
  : T extends object
  ? DeepReadonlyObject4416<T>
  : T;

interface DeepReadonlyArray4416<T> extends ReadonlyArray<DeepReadonly4416<T>> {}

type DeepReadonlyObject4416<T> = {
  readonly [P in keyof T]: DeepReadonly4416<T[P]>;
};

type UnionToIntersection4416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4416<T> = UnionToIntersection4416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4416<T extends unknown[], V> = [...T, V];

type TuplifyUnion4416<T, L = LastOf4416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4416<TuplifyUnion4416<Exclude<T, L>>, L>;

type DeepPartial4416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4416<T[P]> }
  : T;

type Paths4416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4416<K, Paths4416<T[K], Prev4416[D]>> : never }[keyof T]
  : never;

type Prev4416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4416 {
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

type ConfigPaths4416 = Paths4416<NestedConfig4416>;

interface HeavyProps4416 {
  config: DeepPartial4416<NestedConfig4416>;
  path?: ConfigPaths4416;
}

const HeavyComponent4416 = memo(function HeavyComponent4416({ config }: HeavyProps4416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4416.displayName = 'HeavyComponent4416';
export default HeavyComponent4416;
