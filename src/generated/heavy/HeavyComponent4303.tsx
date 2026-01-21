'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4303<T> = T extends (infer U)[]
  ? DeepReadonlyArray4303<U>
  : T extends object
  ? DeepReadonlyObject4303<T>
  : T;

interface DeepReadonlyArray4303<T> extends ReadonlyArray<DeepReadonly4303<T>> {}

type DeepReadonlyObject4303<T> = {
  readonly [P in keyof T]: DeepReadonly4303<T[P]>;
};

type UnionToIntersection4303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4303<T> = UnionToIntersection4303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4303<T extends unknown[], V> = [...T, V];

type TuplifyUnion4303<T, L = LastOf4303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4303<TuplifyUnion4303<Exclude<T, L>>, L>;

type DeepPartial4303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4303<T[P]> }
  : T;

type Paths4303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4303<K, Paths4303<T[K], Prev4303[D]>> : never }[keyof T]
  : never;

type Prev4303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4303 {
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

type ConfigPaths4303 = Paths4303<NestedConfig4303>;

interface HeavyProps4303 {
  config: DeepPartial4303<NestedConfig4303>;
  path?: ConfigPaths4303;
}

const HeavyComponent4303 = memo(function HeavyComponent4303({ config }: HeavyProps4303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4303.displayName = 'HeavyComponent4303';
export default HeavyComponent4303;
