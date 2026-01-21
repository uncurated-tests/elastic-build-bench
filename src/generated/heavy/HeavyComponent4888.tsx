'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4888<T> = T extends (infer U)[]
  ? DeepReadonlyArray4888<U>
  : T extends object
  ? DeepReadonlyObject4888<T>
  : T;

interface DeepReadonlyArray4888<T> extends ReadonlyArray<DeepReadonly4888<T>> {}

type DeepReadonlyObject4888<T> = {
  readonly [P in keyof T]: DeepReadonly4888<T[P]>;
};

type UnionToIntersection4888<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4888<T> = UnionToIntersection4888<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4888<T extends unknown[], V> = [...T, V];

type TuplifyUnion4888<T, L = LastOf4888<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4888<TuplifyUnion4888<Exclude<T, L>>, L>;

type DeepPartial4888<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4888<T[P]> }
  : T;

type Paths4888<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4888<K, Paths4888<T[K], Prev4888[D]>> : never }[keyof T]
  : never;

type Prev4888 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4888<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4888 {
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

type ConfigPaths4888 = Paths4888<NestedConfig4888>;

interface HeavyProps4888 {
  config: DeepPartial4888<NestedConfig4888>;
  path?: ConfigPaths4888;
}

const HeavyComponent4888 = memo(function HeavyComponent4888({ config }: HeavyProps4888) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4888) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4888 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4888: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4888.displayName = 'HeavyComponent4888';
export default HeavyComponent4888;
