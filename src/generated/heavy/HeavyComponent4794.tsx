'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4794<T> = T extends (infer U)[]
  ? DeepReadonlyArray4794<U>
  : T extends object
  ? DeepReadonlyObject4794<T>
  : T;

interface DeepReadonlyArray4794<T> extends ReadonlyArray<DeepReadonly4794<T>> {}

type DeepReadonlyObject4794<T> = {
  readonly [P in keyof T]: DeepReadonly4794<T[P]>;
};

type UnionToIntersection4794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4794<T> = UnionToIntersection4794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4794<T extends unknown[], V> = [...T, V];

type TuplifyUnion4794<T, L = LastOf4794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4794<TuplifyUnion4794<Exclude<T, L>>, L>;

type DeepPartial4794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4794<T[P]> }
  : T;

type Paths4794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4794<K, Paths4794<T[K], Prev4794[D]>> : never }[keyof T]
  : never;

type Prev4794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4794 {
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

type ConfigPaths4794 = Paths4794<NestedConfig4794>;

interface HeavyProps4794 {
  config: DeepPartial4794<NestedConfig4794>;
  path?: ConfigPaths4794;
}

const HeavyComponent4794 = memo(function HeavyComponent4794({ config }: HeavyProps4794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4794.displayName = 'HeavyComponent4794';
export default HeavyComponent4794;
