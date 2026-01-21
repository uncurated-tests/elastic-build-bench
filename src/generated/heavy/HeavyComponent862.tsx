'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly862<T> = T extends (infer U)[]
  ? DeepReadonlyArray862<U>
  : T extends object
  ? DeepReadonlyObject862<T>
  : T;

interface DeepReadonlyArray862<T> extends ReadonlyArray<DeepReadonly862<T>> {}

type DeepReadonlyObject862<T> = {
  readonly [P in keyof T]: DeepReadonly862<T[P]>;
};

type UnionToIntersection862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf862<T> = UnionToIntersection862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push862<T extends unknown[], V> = [...T, V];

type TuplifyUnion862<T, L = LastOf862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push862<TuplifyUnion862<Exclude<T, L>>, L>;

type DeepPartial862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial862<T[P]> }
  : T;

type Paths862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join862<K, Paths862<T[K], Prev862[D]>> : never }[keyof T]
  : never;

type Prev862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig862 {
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

type ConfigPaths862 = Paths862<NestedConfig862>;

interface HeavyProps862 {
  config: DeepPartial862<NestedConfig862>;
  path?: ConfigPaths862;
}

const HeavyComponent862 = memo(function HeavyComponent862({ config }: HeavyProps862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent862.displayName = 'HeavyComponent862';
export default HeavyComponent862;
