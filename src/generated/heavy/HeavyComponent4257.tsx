'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4257<T> = T extends (infer U)[]
  ? DeepReadonlyArray4257<U>
  : T extends object
  ? DeepReadonlyObject4257<T>
  : T;

interface DeepReadonlyArray4257<T> extends ReadonlyArray<DeepReadonly4257<T>> {}

type DeepReadonlyObject4257<T> = {
  readonly [P in keyof T]: DeepReadonly4257<T[P]>;
};

type UnionToIntersection4257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4257<T> = UnionToIntersection4257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4257<T extends unknown[], V> = [...T, V];

type TuplifyUnion4257<T, L = LastOf4257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4257<TuplifyUnion4257<Exclude<T, L>>, L>;

type DeepPartial4257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4257<T[P]> }
  : T;

type Paths4257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4257<K, Paths4257<T[K], Prev4257[D]>> : never }[keyof T]
  : never;

type Prev4257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4257 {
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

type ConfigPaths4257 = Paths4257<NestedConfig4257>;

interface HeavyProps4257 {
  config: DeepPartial4257<NestedConfig4257>;
  path?: ConfigPaths4257;
}

const HeavyComponent4257 = memo(function HeavyComponent4257({ config }: HeavyProps4257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4257.displayName = 'HeavyComponent4257';
export default HeavyComponent4257;
