'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4138<T> = T extends (infer U)[]
  ? DeepReadonlyArray4138<U>
  : T extends object
  ? DeepReadonlyObject4138<T>
  : T;

interface DeepReadonlyArray4138<T> extends ReadonlyArray<DeepReadonly4138<T>> {}

type DeepReadonlyObject4138<T> = {
  readonly [P in keyof T]: DeepReadonly4138<T[P]>;
};

type UnionToIntersection4138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4138<T> = UnionToIntersection4138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4138<T extends unknown[], V> = [...T, V];

type TuplifyUnion4138<T, L = LastOf4138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4138<TuplifyUnion4138<Exclude<T, L>>, L>;

type DeepPartial4138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4138<T[P]> }
  : T;

type Paths4138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4138<K, Paths4138<T[K], Prev4138[D]>> : never }[keyof T]
  : never;

type Prev4138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4138 {
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

type ConfigPaths4138 = Paths4138<NestedConfig4138>;

interface HeavyProps4138 {
  config: DeepPartial4138<NestedConfig4138>;
  path?: ConfigPaths4138;
}

const HeavyComponent4138 = memo(function HeavyComponent4138({ config }: HeavyProps4138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4138.displayName = 'HeavyComponent4138';
export default HeavyComponent4138;
