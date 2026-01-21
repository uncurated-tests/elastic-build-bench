'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4421<T> = T extends (infer U)[]
  ? DeepReadonlyArray4421<U>
  : T extends object
  ? DeepReadonlyObject4421<T>
  : T;

interface DeepReadonlyArray4421<T> extends ReadonlyArray<DeepReadonly4421<T>> {}

type DeepReadonlyObject4421<T> = {
  readonly [P in keyof T]: DeepReadonly4421<T[P]>;
};

type UnionToIntersection4421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4421<T> = UnionToIntersection4421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4421<T extends unknown[], V> = [...T, V];

type TuplifyUnion4421<T, L = LastOf4421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4421<TuplifyUnion4421<Exclude<T, L>>, L>;

type DeepPartial4421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4421<T[P]> }
  : T;

type Paths4421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4421<K, Paths4421<T[K], Prev4421[D]>> : never }[keyof T]
  : never;

type Prev4421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4421 {
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

type ConfigPaths4421 = Paths4421<NestedConfig4421>;

interface HeavyProps4421 {
  config: DeepPartial4421<NestedConfig4421>;
  path?: ConfigPaths4421;
}

const HeavyComponent4421 = memo(function HeavyComponent4421({ config }: HeavyProps4421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4421.displayName = 'HeavyComponent4421';
export default HeavyComponent4421;
