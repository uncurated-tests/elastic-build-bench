'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4954<T> = T extends (infer U)[]
  ? DeepReadonlyArray4954<U>
  : T extends object
  ? DeepReadonlyObject4954<T>
  : T;

interface DeepReadonlyArray4954<T> extends ReadonlyArray<DeepReadonly4954<T>> {}

type DeepReadonlyObject4954<T> = {
  readonly [P in keyof T]: DeepReadonly4954<T[P]>;
};

type UnionToIntersection4954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4954<T> = UnionToIntersection4954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4954<T extends unknown[], V> = [...T, V];

type TuplifyUnion4954<T, L = LastOf4954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4954<TuplifyUnion4954<Exclude<T, L>>, L>;

type DeepPartial4954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4954<T[P]> }
  : T;

type Paths4954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4954<K, Paths4954<T[K], Prev4954[D]>> : never }[keyof T]
  : never;

type Prev4954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4954 {
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

type ConfigPaths4954 = Paths4954<NestedConfig4954>;

interface HeavyProps4954 {
  config: DeepPartial4954<NestedConfig4954>;
  path?: ConfigPaths4954;
}

const HeavyComponent4954 = memo(function HeavyComponent4954({ config }: HeavyProps4954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4954.displayName = 'HeavyComponent4954';
export default HeavyComponent4954;
