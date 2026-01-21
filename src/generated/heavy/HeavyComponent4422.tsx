'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4422<T> = T extends (infer U)[]
  ? DeepReadonlyArray4422<U>
  : T extends object
  ? DeepReadonlyObject4422<T>
  : T;

interface DeepReadonlyArray4422<T> extends ReadonlyArray<DeepReadonly4422<T>> {}

type DeepReadonlyObject4422<T> = {
  readonly [P in keyof T]: DeepReadonly4422<T[P]>;
};

type UnionToIntersection4422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4422<T> = UnionToIntersection4422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4422<T extends unknown[], V> = [...T, V];

type TuplifyUnion4422<T, L = LastOf4422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4422<TuplifyUnion4422<Exclude<T, L>>, L>;

type DeepPartial4422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4422<T[P]> }
  : T;

type Paths4422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4422<K, Paths4422<T[K], Prev4422[D]>> : never }[keyof T]
  : never;

type Prev4422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4422 {
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

type ConfigPaths4422 = Paths4422<NestedConfig4422>;

interface HeavyProps4422 {
  config: DeepPartial4422<NestedConfig4422>;
  path?: ConfigPaths4422;
}

const HeavyComponent4422 = memo(function HeavyComponent4422({ config }: HeavyProps4422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4422.displayName = 'HeavyComponent4422';
export default HeavyComponent4422;
