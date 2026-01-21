'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4258<T> = T extends (infer U)[]
  ? DeepReadonlyArray4258<U>
  : T extends object
  ? DeepReadonlyObject4258<T>
  : T;

interface DeepReadonlyArray4258<T> extends ReadonlyArray<DeepReadonly4258<T>> {}

type DeepReadonlyObject4258<T> = {
  readonly [P in keyof T]: DeepReadonly4258<T[P]>;
};

type UnionToIntersection4258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4258<T> = UnionToIntersection4258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4258<T extends unknown[], V> = [...T, V];

type TuplifyUnion4258<T, L = LastOf4258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4258<TuplifyUnion4258<Exclude<T, L>>, L>;

type DeepPartial4258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4258<T[P]> }
  : T;

type Paths4258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4258<K, Paths4258<T[K], Prev4258[D]>> : never }[keyof T]
  : never;

type Prev4258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4258 {
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

type ConfigPaths4258 = Paths4258<NestedConfig4258>;

interface HeavyProps4258 {
  config: DeepPartial4258<NestedConfig4258>;
  path?: ConfigPaths4258;
}

const HeavyComponent4258 = memo(function HeavyComponent4258({ config }: HeavyProps4258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4258.displayName = 'HeavyComponent4258';
export default HeavyComponent4258;
