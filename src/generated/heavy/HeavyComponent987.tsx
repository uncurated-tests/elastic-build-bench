'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly987<T> = T extends (infer U)[]
  ? DeepReadonlyArray987<U>
  : T extends object
  ? DeepReadonlyObject987<T>
  : T;

interface DeepReadonlyArray987<T> extends ReadonlyArray<DeepReadonly987<T>> {}

type DeepReadonlyObject987<T> = {
  readonly [P in keyof T]: DeepReadonly987<T[P]>;
};

type UnionToIntersection987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf987<T> = UnionToIntersection987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push987<T extends unknown[], V> = [...T, V];

type TuplifyUnion987<T, L = LastOf987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push987<TuplifyUnion987<Exclude<T, L>>, L>;

type DeepPartial987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial987<T[P]> }
  : T;

type Paths987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join987<K, Paths987<T[K], Prev987[D]>> : never }[keyof T]
  : never;

type Prev987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig987 {
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

type ConfigPaths987 = Paths987<NestedConfig987>;

interface HeavyProps987 {
  config: DeepPartial987<NestedConfig987>;
  path?: ConfigPaths987;
}

const HeavyComponent987 = memo(function HeavyComponent987({ config }: HeavyProps987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent987.displayName = 'HeavyComponent987';
export default HeavyComponent987;
