'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4562<T> = T extends (infer U)[]
  ? DeepReadonlyArray4562<U>
  : T extends object
  ? DeepReadonlyObject4562<T>
  : T;

interface DeepReadonlyArray4562<T> extends ReadonlyArray<DeepReadonly4562<T>> {}

type DeepReadonlyObject4562<T> = {
  readonly [P in keyof T]: DeepReadonly4562<T[P]>;
};

type UnionToIntersection4562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4562<T> = UnionToIntersection4562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4562<T extends unknown[], V> = [...T, V];

type TuplifyUnion4562<T, L = LastOf4562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4562<TuplifyUnion4562<Exclude<T, L>>, L>;

type DeepPartial4562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4562<T[P]> }
  : T;

type Paths4562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4562<K, Paths4562<T[K], Prev4562[D]>> : never }[keyof T]
  : never;

type Prev4562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4562 {
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

type ConfigPaths4562 = Paths4562<NestedConfig4562>;

interface HeavyProps4562 {
  config: DeepPartial4562<NestedConfig4562>;
  path?: ConfigPaths4562;
}

const HeavyComponent4562 = memo(function HeavyComponent4562({ config }: HeavyProps4562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4562.displayName = 'HeavyComponent4562';
export default HeavyComponent4562;
