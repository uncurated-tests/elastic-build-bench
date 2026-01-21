'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4520<T> = T extends (infer U)[]
  ? DeepReadonlyArray4520<U>
  : T extends object
  ? DeepReadonlyObject4520<T>
  : T;

interface DeepReadonlyArray4520<T> extends ReadonlyArray<DeepReadonly4520<T>> {}

type DeepReadonlyObject4520<T> = {
  readonly [P in keyof T]: DeepReadonly4520<T[P]>;
};

type UnionToIntersection4520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4520<T> = UnionToIntersection4520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4520<T extends unknown[], V> = [...T, V];

type TuplifyUnion4520<T, L = LastOf4520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4520<TuplifyUnion4520<Exclude<T, L>>, L>;

type DeepPartial4520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4520<T[P]> }
  : T;

type Paths4520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4520<K, Paths4520<T[K], Prev4520[D]>> : never }[keyof T]
  : never;

type Prev4520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4520 {
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

type ConfigPaths4520 = Paths4520<NestedConfig4520>;

interface HeavyProps4520 {
  config: DeepPartial4520<NestedConfig4520>;
  path?: ConfigPaths4520;
}

const HeavyComponent4520 = memo(function HeavyComponent4520({ config }: HeavyProps4520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4520.displayName = 'HeavyComponent4520';
export default HeavyComponent4520;
