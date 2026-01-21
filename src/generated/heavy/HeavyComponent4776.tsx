'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4776<T> = T extends (infer U)[]
  ? DeepReadonlyArray4776<U>
  : T extends object
  ? DeepReadonlyObject4776<T>
  : T;

interface DeepReadonlyArray4776<T> extends ReadonlyArray<DeepReadonly4776<T>> {}

type DeepReadonlyObject4776<T> = {
  readonly [P in keyof T]: DeepReadonly4776<T[P]>;
};

type UnionToIntersection4776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4776<T> = UnionToIntersection4776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4776<T extends unknown[], V> = [...T, V];

type TuplifyUnion4776<T, L = LastOf4776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4776<TuplifyUnion4776<Exclude<T, L>>, L>;

type DeepPartial4776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4776<T[P]> }
  : T;

type Paths4776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4776<K, Paths4776<T[K], Prev4776[D]>> : never }[keyof T]
  : never;

type Prev4776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4776 {
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

type ConfigPaths4776 = Paths4776<NestedConfig4776>;

interface HeavyProps4776 {
  config: DeepPartial4776<NestedConfig4776>;
  path?: ConfigPaths4776;
}

const HeavyComponent4776 = memo(function HeavyComponent4776({ config }: HeavyProps4776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4776.displayName = 'HeavyComponent4776';
export default HeavyComponent4776;
