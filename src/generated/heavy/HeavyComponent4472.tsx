'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4472<T> = T extends (infer U)[]
  ? DeepReadonlyArray4472<U>
  : T extends object
  ? DeepReadonlyObject4472<T>
  : T;

interface DeepReadonlyArray4472<T> extends ReadonlyArray<DeepReadonly4472<T>> {}

type DeepReadonlyObject4472<T> = {
  readonly [P in keyof T]: DeepReadonly4472<T[P]>;
};

type UnionToIntersection4472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4472<T> = UnionToIntersection4472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4472<T extends unknown[], V> = [...T, V];

type TuplifyUnion4472<T, L = LastOf4472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4472<TuplifyUnion4472<Exclude<T, L>>, L>;

type DeepPartial4472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4472<T[P]> }
  : T;

type Paths4472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4472<K, Paths4472<T[K], Prev4472[D]>> : never }[keyof T]
  : never;

type Prev4472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4472 {
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

type ConfigPaths4472 = Paths4472<NestedConfig4472>;

interface HeavyProps4472 {
  config: DeepPartial4472<NestedConfig4472>;
  path?: ConfigPaths4472;
}

const HeavyComponent4472 = memo(function HeavyComponent4472({ config }: HeavyProps4472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4472.displayName = 'HeavyComponent4472';
export default HeavyComponent4472;
