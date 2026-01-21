'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4176<T> = T extends (infer U)[]
  ? DeepReadonlyArray4176<U>
  : T extends object
  ? DeepReadonlyObject4176<T>
  : T;

interface DeepReadonlyArray4176<T> extends ReadonlyArray<DeepReadonly4176<T>> {}

type DeepReadonlyObject4176<T> = {
  readonly [P in keyof T]: DeepReadonly4176<T[P]>;
};

type UnionToIntersection4176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4176<T> = UnionToIntersection4176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4176<T extends unknown[], V> = [...T, V];

type TuplifyUnion4176<T, L = LastOf4176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4176<TuplifyUnion4176<Exclude<T, L>>, L>;

type DeepPartial4176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4176<T[P]> }
  : T;

type Paths4176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4176<K, Paths4176<T[K], Prev4176[D]>> : never }[keyof T]
  : never;

type Prev4176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4176 {
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

type ConfigPaths4176 = Paths4176<NestedConfig4176>;

interface HeavyProps4176 {
  config: DeepPartial4176<NestedConfig4176>;
  path?: ConfigPaths4176;
}

const HeavyComponent4176 = memo(function HeavyComponent4176({ config }: HeavyProps4176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4176.displayName = 'HeavyComponent4176';
export default HeavyComponent4176;
