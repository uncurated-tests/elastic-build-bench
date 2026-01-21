'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4409<T> = T extends (infer U)[]
  ? DeepReadonlyArray4409<U>
  : T extends object
  ? DeepReadonlyObject4409<T>
  : T;

interface DeepReadonlyArray4409<T> extends ReadonlyArray<DeepReadonly4409<T>> {}

type DeepReadonlyObject4409<T> = {
  readonly [P in keyof T]: DeepReadonly4409<T[P]>;
};

type UnionToIntersection4409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4409<T> = UnionToIntersection4409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4409<T extends unknown[], V> = [...T, V];

type TuplifyUnion4409<T, L = LastOf4409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4409<TuplifyUnion4409<Exclude<T, L>>, L>;

type DeepPartial4409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4409<T[P]> }
  : T;

type Paths4409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4409<K, Paths4409<T[K], Prev4409[D]>> : never }[keyof T]
  : never;

type Prev4409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4409 {
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

type ConfigPaths4409 = Paths4409<NestedConfig4409>;

interface HeavyProps4409 {
  config: DeepPartial4409<NestedConfig4409>;
  path?: ConfigPaths4409;
}

const HeavyComponent4409 = memo(function HeavyComponent4409({ config }: HeavyProps4409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4409.displayName = 'HeavyComponent4409';
export default HeavyComponent4409;
