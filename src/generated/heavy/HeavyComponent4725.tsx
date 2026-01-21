'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4725<T> = T extends (infer U)[]
  ? DeepReadonlyArray4725<U>
  : T extends object
  ? DeepReadonlyObject4725<T>
  : T;

interface DeepReadonlyArray4725<T> extends ReadonlyArray<DeepReadonly4725<T>> {}

type DeepReadonlyObject4725<T> = {
  readonly [P in keyof T]: DeepReadonly4725<T[P]>;
};

type UnionToIntersection4725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4725<T> = UnionToIntersection4725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4725<T extends unknown[], V> = [...T, V];

type TuplifyUnion4725<T, L = LastOf4725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4725<TuplifyUnion4725<Exclude<T, L>>, L>;

type DeepPartial4725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4725<T[P]> }
  : T;

type Paths4725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4725<K, Paths4725<T[K], Prev4725[D]>> : never }[keyof T]
  : never;

type Prev4725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4725 {
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

type ConfigPaths4725 = Paths4725<NestedConfig4725>;

interface HeavyProps4725 {
  config: DeepPartial4725<NestedConfig4725>;
  path?: ConfigPaths4725;
}

const HeavyComponent4725 = memo(function HeavyComponent4725({ config }: HeavyProps4725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4725.displayName = 'HeavyComponent4725';
export default HeavyComponent4725;
