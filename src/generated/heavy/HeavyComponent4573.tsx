'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4573<T> = T extends (infer U)[]
  ? DeepReadonlyArray4573<U>
  : T extends object
  ? DeepReadonlyObject4573<T>
  : T;

interface DeepReadonlyArray4573<T> extends ReadonlyArray<DeepReadonly4573<T>> {}

type DeepReadonlyObject4573<T> = {
  readonly [P in keyof T]: DeepReadonly4573<T[P]>;
};

type UnionToIntersection4573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4573<T> = UnionToIntersection4573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4573<T extends unknown[], V> = [...T, V];

type TuplifyUnion4573<T, L = LastOf4573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4573<TuplifyUnion4573<Exclude<T, L>>, L>;

type DeepPartial4573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4573<T[P]> }
  : T;

type Paths4573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4573<K, Paths4573<T[K], Prev4573[D]>> : never }[keyof T]
  : never;

type Prev4573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4573 {
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

type ConfigPaths4573 = Paths4573<NestedConfig4573>;

interface HeavyProps4573 {
  config: DeepPartial4573<NestedConfig4573>;
  path?: ConfigPaths4573;
}

const HeavyComponent4573 = memo(function HeavyComponent4573({ config }: HeavyProps4573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4573.displayName = 'HeavyComponent4573';
export default HeavyComponent4573;
