'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4398<T> = T extends (infer U)[]
  ? DeepReadonlyArray4398<U>
  : T extends object
  ? DeepReadonlyObject4398<T>
  : T;

interface DeepReadonlyArray4398<T> extends ReadonlyArray<DeepReadonly4398<T>> {}

type DeepReadonlyObject4398<T> = {
  readonly [P in keyof T]: DeepReadonly4398<T[P]>;
};

type UnionToIntersection4398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4398<T> = UnionToIntersection4398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4398<T extends unknown[], V> = [...T, V];

type TuplifyUnion4398<T, L = LastOf4398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4398<TuplifyUnion4398<Exclude<T, L>>, L>;

type DeepPartial4398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4398<T[P]> }
  : T;

type Paths4398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4398<K, Paths4398<T[K], Prev4398[D]>> : never }[keyof T]
  : never;

type Prev4398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4398 {
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

type ConfigPaths4398 = Paths4398<NestedConfig4398>;

interface HeavyProps4398 {
  config: DeepPartial4398<NestedConfig4398>;
  path?: ConfigPaths4398;
}

const HeavyComponent4398 = memo(function HeavyComponent4398({ config }: HeavyProps4398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4398.displayName = 'HeavyComponent4398';
export default HeavyComponent4398;
