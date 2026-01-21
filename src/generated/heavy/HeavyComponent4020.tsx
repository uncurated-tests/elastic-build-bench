'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4020<T> = T extends (infer U)[]
  ? DeepReadonlyArray4020<U>
  : T extends object
  ? DeepReadonlyObject4020<T>
  : T;

interface DeepReadonlyArray4020<T> extends ReadonlyArray<DeepReadonly4020<T>> {}

type DeepReadonlyObject4020<T> = {
  readonly [P in keyof T]: DeepReadonly4020<T[P]>;
};

type UnionToIntersection4020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4020<T> = UnionToIntersection4020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4020<T extends unknown[], V> = [...T, V];

type TuplifyUnion4020<T, L = LastOf4020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4020<TuplifyUnion4020<Exclude<T, L>>, L>;

type DeepPartial4020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4020<T[P]> }
  : T;

type Paths4020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4020<K, Paths4020<T[K], Prev4020[D]>> : never }[keyof T]
  : never;

type Prev4020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4020 {
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

type ConfigPaths4020 = Paths4020<NestedConfig4020>;

interface HeavyProps4020 {
  config: DeepPartial4020<NestedConfig4020>;
  path?: ConfigPaths4020;
}

const HeavyComponent4020 = memo(function HeavyComponent4020({ config }: HeavyProps4020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4020.displayName = 'HeavyComponent4020';
export default HeavyComponent4020;
