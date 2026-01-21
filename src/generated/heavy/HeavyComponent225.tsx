'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly225<T> = T extends (infer U)[]
  ? DeepReadonlyArray225<U>
  : T extends object
  ? DeepReadonlyObject225<T>
  : T;

interface DeepReadonlyArray225<T> extends ReadonlyArray<DeepReadonly225<T>> {}

type DeepReadonlyObject225<T> = {
  readonly [P in keyof T]: DeepReadonly225<T[P]>;
};

type UnionToIntersection225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf225<T> = UnionToIntersection225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push225<T extends unknown[], V> = [...T, V];

type TuplifyUnion225<T, L = LastOf225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push225<TuplifyUnion225<Exclude<T, L>>, L>;

type DeepPartial225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial225<T[P]> }
  : T;

type Paths225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join225<K, Paths225<T[K], Prev225[D]>> : never }[keyof T]
  : never;

type Prev225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig225 {
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

type ConfigPaths225 = Paths225<NestedConfig225>;

interface HeavyProps225 {
  config: DeepPartial225<NestedConfig225>;
  path?: ConfigPaths225;
}

const HeavyComponent225 = memo(function HeavyComponent225({ config }: HeavyProps225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent225.displayName = 'HeavyComponent225';
export default HeavyComponent225;
