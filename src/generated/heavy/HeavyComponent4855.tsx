'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4855<T> = T extends (infer U)[]
  ? DeepReadonlyArray4855<U>
  : T extends object
  ? DeepReadonlyObject4855<T>
  : T;

interface DeepReadonlyArray4855<T> extends ReadonlyArray<DeepReadonly4855<T>> {}

type DeepReadonlyObject4855<T> = {
  readonly [P in keyof T]: DeepReadonly4855<T[P]>;
};

type UnionToIntersection4855<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4855<T> = UnionToIntersection4855<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4855<T extends unknown[], V> = [...T, V];

type TuplifyUnion4855<T, L = LastOf4855<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4855<TuplifyUnion4855<Exclude<T, L>>, L>;

type DeepPartial4855<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4855<T[P]> }
  : T;

type Paths4855<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4855<K, Paths4855<T[K], Prev4855[D]>> : never }[keyof T]
  : never;

type Prev4855 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4855<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4855 {
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

type ConfigPaths4855 = Paths4855<NestedConfig4855>;

interface HeavyProps4855 {
  config: DeepPartial4855<NestedConfig4855>;
  path?: ConfigPaths4855;
}

const HeavyComponent4855 = memo(function HeavyComponent4855({ config }: HeavyProps4855) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4855) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4855 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4855: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4855.displayName = 'HeavyComponent4855';
export default HeavyComponent4855;
