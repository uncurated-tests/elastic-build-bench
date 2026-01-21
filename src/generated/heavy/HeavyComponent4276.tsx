'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4276<T> = T extends (infer U)[]
  ? DeepReadonlyArray4276<U>
  : T extends object
  ? DeepReadonlyObject4276<T>
  : T;

interface DeepReadonlyArray4276<T> extends ReadonlyArray<DeepReadonly4276<T>> {}

type DeepReadonlyObject4276<T> = {
  readonly [P in keyof T]: DeepReadonly4276<T[P]>;
};

type UnionToIntersection4276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4276<T> = UnionToIntersection4276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4276<T extends unknown[], V> = [...T, V];

type TuplifyUnion4276<T, L = LastOf4276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4276<TuplifyUnion4276<Exclude<T, L>>, L>;

type DeepPartial4276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4276<T[P]> }
  : T;

type Paths4276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4276<K, Paths4276<T[K], Prev4276[D]>> : never }[keyof T]
  : never;

type Prev4276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4276 {
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

type ConfigPaths4276 = Paths4276<NestedConfig4276>;

interface HeavyProps4276 {
  config: DeepPartial4276<NestedConfig4276>;
  path?: ConfigPaths4276;
}

const HeavyComponent4276 = memo(function HeavyComponent4276({ config }: HeavyProps4276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4276.displayName = 'HeavyComponent4276';
export default HeavyComponent4276;
