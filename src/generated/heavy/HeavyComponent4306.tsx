'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4306<T> = T extends (infer U)[]
  ? DeepReadonlyArray4306<U>
  : T extends object
  ? DeepReadonlyObject4306<T>
  : T;

interface DeepReadonlyArray4306<T> extends ReadonlyArray<DeepReadonly4306<T>> {}

type DeepReadonlyObject4306<T> = {
  readonly [P in keyof T]: DeepReadonly4306<T[P]>;
};

type UnionToIntersection4306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4306<T> = UnionToIntersection4306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4306<T extends unknown[], V> = [...T, V];

type TuplifyUnion4306<T, L = LastOf4306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4306<TuplifyUnion4306<Exclude<T, L>>, L>;

type DeepPartial4306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4306<T[P]> }
  : T;

type Paths4306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4306<K, Paths4306<T[K], Prev4306[D]>> : never }[keyof T]
  : never;

type Prev4306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4306 {
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

type ConfigPaths4306 = Paths4306<NestedConfig4306>;

interface HeavyProps4306 {
  config: DeepPartial4306<NestedConfig4306>;
  path?: ConfigPaths4306;
}

const HeavyComponent4306 = memo(function HeavyComponent4306({ config }: HeavyProps4306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4306.displayName = 'HeavyComponent4306';
export default HeavyComponent4306;
