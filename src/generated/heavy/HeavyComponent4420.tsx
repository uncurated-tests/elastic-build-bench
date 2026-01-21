'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4420<T> = T extends (infer U)[]
  ? DeepReadonlyArray4420<U>
  : T extends object
  ? DeepReadonlyObject4420<T>
  : T;

interface DeepReadonlyArray4420<T> extends ReadonlyArray<DeepReadonly4420<T>> {}

type DeepReadonlyObject4420<T> = {
  readonly [P in keyof T]: DeepReadonly4420<T[P]>;
};

type UnionToIntersection4420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4420<T> = UnionToIntersection4420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4420<T extends unknown[], V> = [...T, V];

type TuplifyUnion4420<T, L = LastOf4420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4420<TuplifyUnion4420<Exclude<T, L>>, L>;

type DeepPartial4420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4420<T[P]> }
  : T;

type Paths4420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4420<K, Paths4420<T[K], Prev4420[D]>> : never }[keyof T]
  : never;

type Prev4420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4420 {
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

type ConfigPaths4420 = Paths4420<NestedConfig4420>;

interface HeavyProps4420 {
  config: DeepPartial4420<NestedConfig4420>;
  path?: ConfigPaths4420;
}

const HeavyComponent4420 = memo(function HeavyComponent4420({ config }: HeavyProps4420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4420.displayName = 'HeavyComponent4420';
export default HeavyComponent4420;
