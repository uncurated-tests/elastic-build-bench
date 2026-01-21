'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4402<T> = T extends (infer U)[]
  ? DeepReadonlyArray4402<U>
  : T extends object
  ? DeepReadonlyObject4402<T>
  : T;

interface DeepReadonlyArray4402<T> extends ReadonlyArray<DeepReadonly4402<T>> {}

type DeepReadonlyObject4402<T> = {
  readonly [P in keyof T]: DeepReadonly4402<T[P]>;
};

type UnionToIntersection4402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4402<T> = UnionToIntersection4402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4402<T extends unknown[], V> = [...T, V];

type TuplifyUnion4402<T, L = LastOf4402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4402<TuplifyUnion4402<Exclude<T, L>>, L>;

type DeepPartial4402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4402<T[P]> }
  : T;

type Paths4402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4402<K, Paths4402<T[K], Prev4402[D]>> : never }[keyof T]
  : never;

type Prev4402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4402 {
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

type ConfigPaths4402 = Paths4402<NestedConfig4402>;

interface HeavyProps4402 {
  config: DeepPartial4402<NestedConfig4402>;
  path?: ConfigPaths4402;
}

const HeavyComponent4402 = memo(function HeavyComponent4402({ config }: HeavyProps4402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4402.displayName = 'HeavyComponent4402';
export default HeavyComponent4402;
