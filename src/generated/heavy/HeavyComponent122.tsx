'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly122<T> = T extends (infer U)[]
  ? DeepReadonlyArray122<U>
  : T extends object
  ? DeepReadonlyObject122<T>
  : T;

interface DeepReadonlyArray122<T> extends ReadonlyArray<DeepReadonly122<T>> {}

type DeepReadonlyObject122<T> = {
  readonly [P in keyof T]: DeepReadonly122<T[P]>;
};

type UnionToIntersection122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf122<T> = UnionToIntersection122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push122<T extends unknown[], V> = [...T, V];

type TuplifyUnion122<T, L = LastOf122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push122<TuplifyUnion122<Exclude<T, L>>, L>;

type DeepPartial122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial122<T[P]> }
  : T;

type Paths122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join122<K, Paths122<T[K], Prev122[D]>> : never }[keyof T]
  : never;

type Prev122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig122 {
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

type ConfigPaths122 = Paths122<NestedConfig122>;

interface HeavyProps122 {
  config: DeepPartial122<NestedConfig122>;
  path?: ConfigPaths122;
}

const HeavyComponent122 = memo(function HeavyComponent122({ config }: HeavyProps122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent122.displayName = 'HeavyComponent122';
export default HeavyComponent122;
