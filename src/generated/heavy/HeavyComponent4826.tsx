'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4826<T> = T extends (infer U)[]
  ? DeepReadonlyArray4826<U>
  : T extends object
  ? DeepReadonlyObject4826<T>
  : T;

interface DeepReadonlyArray4826<T> extends ReadonlyArray<DeepReadonly4826<T>> {}

type DeepReadonlyObject4826<T> = {
  readonly [P in keyof T]: DeepReadonly4826<T[P]>;
};

type UnionToIntersection4826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4826<T> = UnionToIntersection4826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4826<T extends unknown[], V> = [...T, V];

type TuplifyUnion4826<T, L = LastOf4826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4826<TuplifyUnion4826<Exclude<T, L>>, L>;

type DeepPartial4826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4826<T[P]> }
  : T;

type Paths4826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4826<K, Paths4826<T[K], Prev4826[D]>> : never }[keyof T]
  : never;

type Prev4826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4826 {
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

type ConfigPaths4826 = Paths4826<NestedConfig4826>;

interface HeavyProps4826 {
  config: DeepPartial4826<NestedConfig4826>;
  path?: ConfigPaths4826;
}

const HeavyComponent4826 = memo(function HeavyComponent4826({ config }: HeavyProps4826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4826.displayName = 'HeavyComponent4826';
export default HeavyComponent4826;
