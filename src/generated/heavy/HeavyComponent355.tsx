'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly355<T> = T extends (infer U)[]
  ? DeepReadonlyArray355<U>
  : T extends object
  ? DeepReadonlyObject355<T>
  : T;

interface DeepReadonlyArray355<T> extends ReadonlyArray<DeepReadonly355<T>> {}

type DeepReadonlyObject355<T> = {
  readonly [P in keyof T]: DeepReadonly355<T[P]>;
};

type UnionToIntersection355<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf355<T> = UnionToIntersection355<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push355<T extends unknown[], V> = [...T, V];

type TuplifyUnion355<T, L = LastOf355<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push355<TuplifyUnion355<Exclude<T, L>>, L>;

type DeepPartial355<T> = T extends object
  ? { [P in keyof T]?: DeepPartial355<T[P]> }
  : T;

type Paths355<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join355<K, Paths355<T[K], Prev355[D]>> : never }[keyof T]
  : never;

type Prev355 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join355<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig355 {
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

type ConfigPaths355 = Paths355<NestedConfig355>;

interface HeavyProps355 {
  config: DeepPartial355<NestedConfig355>;
  path?: ConfigPaths355;
}

const HeavyComponent355 = memo(function HeavyComponent355({ config }: HeavyProps355) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 355) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-355 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H355: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent355.displayName = 'HeavyComponent355';
export default HeavyComponent355;
