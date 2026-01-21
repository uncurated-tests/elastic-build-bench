'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4597<T> = T extends (infer U)[]
  ? DeepReadonlyArray4597<U>
  : T extends object
  ? DeepReadonlyObject4597<T>
  : T;

interface DeepReadonlyArray4597<T> extends ReadonlyArray<DeepReadonly4597<T>> {}

type DeepReadonlyObject4597<T> = {
  readonly [P in keyof T]: DeepReadonly4597<T[P]>;
};

type UnionToIntersection4597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4597<T> = UnionToIntersection4597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4597<T extends unknown[], V> = [...T, V];

type TuplifyUnion4597<T, L = LastOf4597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4597<TuplifyUnion4597<Exclude<T, L>>, L>;

type DeepPartial4597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4597<T[P]> }
  : T;

type Paths4597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4597<K, Paths4597<T[K], Prev4597[D]>> : never }[keyof T]
  : never;

type Prev4597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4597 {
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

type ConfigPaths4597 = Paths4597<NestedConfig4597>;

interface HeavyProps4597 {
  config: DeepPartial4597<NestedConfig4597>;
  path?: ConfigPaths4597;
}

const HeavyComponent4597 = memo(function HeavyComponent4597({ config }: HeavyProps4597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4597.displayName = 'HeavyComponent4597';
export default HeavyComponent4597;
