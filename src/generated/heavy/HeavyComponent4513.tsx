'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4513<T> = T extends (infer U)[]
  ? DeepReadonlyArray4513<U>
  : T extends object
  ? DeepReadonlyObject4513<T>
  : T;

interface DeepReadonlyArray4513<T> extends ReadonlyArray<DeepReadonly4513<T>> {}

type DeepReadonlyObject4513<T> = {
  readonly [P in keyof T]: DeepReadonly4513<T[P]>;
};

type UnionToIntersection4513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4513<T> = UnionToIntersection4513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4513<T extends unknown[], V> = [...T, V];

type TuplifyUnion4513<T, L = LastOf4513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4513<TuplifyUnion4513<Exclude<T, L>>, L>;

type DeepPartial4513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4513<T[P]> }
  : T;

type Paths4513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4513<K, Paths4513<T[K], Prev4513[D]>> : never }[keyof T]
  : never;

type Prev4513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4513 {
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

type ConfigPaths4513 = Paths4513<NestedConfig4513>;

interface HeavyProps4513 {
  config: DeepPartial4513<NestedConfig4513>;
  path?: ConfigPaths4513;
}

const HeavyComponent4513 = memo(function HeavyComponent4513({ config }: HeavyProps4513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4513.displayName = 'HeavyComponent4513';
export default HeavyComponent4513;
