'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4820<T> = T extends (infer U)[]
  ? DeepReadonlyArray4820<U>
  : T extends object
  ? DeepReadonlyObject4820<T>
  : T;

interface DeepReadonlyArray4820<T> extends ReadonlyArray<DeepReadonly4820<T>> {}

type DeepReadonlyObject4820<T> = {
  readonly [P in keyof T]: DeepReadonly4820<T[P]>;
};

type UnionToIntersection4820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4820<T> = UnionToIntersection4820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4820<T extends unknown[], V> = [...T, V];

type TuplifyUnion4820<T, L = LastOf4820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4820<TuplifyUnion4820<Exclude<T, L>>, L>;

type DeepPartial4820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4820<T[P]> }
  : T;

type Paths4820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4820<K, Paths4820<T[K], Prev4820[D]>> : never }[keyof T]
  : never;

type Prev4820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4820 {
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

type ConfigPaths4820 = Paths4820<NestedConfig4820>;

interface HeavyProps4820 {
  config: DeepPartial4820<NestedConfig4820>;
  path?: ConfigPaths4820;
}

const HeavyComponent4820 = memo(function HeavyComponent4820({ config }: HeavyProps4820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4820.displayName = 'HeavyComponent4820';
export default HeavyComponent4820;
