'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4201<T> = T extends (infer U)[]
  ? DeepReadonlyArray4201<U>
  : T extends object
  ? DeepReadonlyObject4201<T>
  : T;

interface DeepReadonlyArray4201<T> extends ReadonlyArray<DeepReadonly4201<T>> {}

type DeepReadonlyObject4201<T> = {
  readonly [P in keyof T]: DeepReadonly4201<T[P]>;
};

type UnionToIntersection4201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4201<T> = UnionToIntersection4201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4201<T extends unknown[], V> = [...T, V];

type TuplifyUnion4201<T, L = LastOf4201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4201<TuplifyUnion4201<Exclude<T, L>>, L>;

type DeepPartial4201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4201<T[P]> }
  : T;

type Paths4201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4201<K, Paths4201<T[K], Prev4201[D]>> : never }[keyof T]
  : never;

type Prev4201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4201 {
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

type ConfigPaths4201 = Paths4201<NestedConfig4201>;

interface HeavyProps4201 {
  config: DeepPartial4201<NestedConfig4201>;
  path?: ConfigPaths4201;
}

const HeavyComponent4201 = memo(function HeavyComponent4201({ config }: HeavyProps4201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4201.displayName = 'HeavyComponent4201';
export default HeavyComponent4201;
