'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4498<T> = T extends (infer U)[]
  ? DeepReadonlyArray4498<U>
  : T extends object
  ? DeepReadonlyObject4498<T>
  : T;

interface DeepReadonlyArray4498<T> extends ReadonlyArray<DeepReadonly4498<T>> {}

type DeepReadonlyObject4498<T> = {
  readonly [P in keyof T]: DeepReadonly4498<T[P]>;
};

type UnionToIntersection4498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4498<T> = UnionToIntersection4498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4498<T extends unknown[], V> = [...T, V];

type TuplifyUnion4498<T, L = LastOf4498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4498<TuplifyUnion4498<Exclude<T, L>>, L>;

type DeepPartial4498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4498<T[P]> }
  : T;

type Paths4498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4498<K, Paths4498<T[K], Prev4498[D]>> : never }[keyof T]
  : never;

type Prev4498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4498 {
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

type ConfigPaths4498 = Paths4498<NestedConfig4498>;

interface HeavyProps4498 {
  config: DeepPartial4498<NestedConfig4498>;
  path?: ConfigPaths4498;
}

const HeavyComponent4498 = memo(function HeavyComponent4498({ config }: HeavyProps4498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4498.displayName = 'HeavyComponent4498';
export default HeavyComponent4498;
