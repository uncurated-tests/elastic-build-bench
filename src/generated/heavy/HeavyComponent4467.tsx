'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4467<T> = T extends (infer U)[]
  ? DeepReadonlyArray4467<U>
  : T extends object
  ? DeepReadonlyObject4467<T>
  : T;

interface DeepReadonlyArray4467<T> extends ReadonlyArray<DeepReadonly4467<T>> {}

type DeepReadonlyObject4467<T> = {
  readonly [P in keyof T]: DeepReadonly4467<T[P]>;
};

type UnionToIntersection4467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4467<T> = UnionToIntersection4467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4467<T extends unknown[], V> = [...T, V];

type TuplifyUnion4467<T, L = LastOf4467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4467<TuplifyUnion4467<Exclude<T, L>>, L>;

type DeepPartial4467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4467<T[P]> }
  : T;

type Paths4467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4467<K, Paths4467<T[K], Prev4467[D]>> : never }[keyof T]
  : never;

type Prev4467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4467 {
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

type ConfigPaths4467 = Paths4467<NestedConfig4467>;

interface HeavyProps4467 {
  config: DeepPartial4467<NestedConfig4467>;
  path?: ConfigPaths4467;
}

const HeavyComponent4467 = memo(function HeavyComponent4467({ config }: HeavyProps4467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4467.displayName = 'HeavyComponent4467';
export default HeavyComponent4467;
