'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5906<T> = T extends (infer U)[]
  ? DeepReadonlyArray5906<U>
  : T extends object
  ? DeepReadonlyObject5906<T>
  : T;

interface DeepReadonlyArray5906<T> extends ReadonlyArray<DeepReadonly5906<T>> {}

type DeepReadonlyObject5906<T> = {
  readonly [P in keyof T]: DeepReadonly5906<T[P]>;
};

type UnionToIntersection5906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5906<T> = UnionToIntersection5906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5906<T extends unknown[], V> = [...T, V];

type TuplifyUnion5906<T, L = LastOf5906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5906<TuplifyUnion5906<Exclude<T, L>>, L>;

type DeepPartial5906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5906<T[P]> }
  : T;

type Paths5906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5906<K, Paths5906<T[K], Prev5906[D]>> : never }[keyof T]
  : never;

type Prev5906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5906 {
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

type ConfigPaths5906 = Paths5906<NestedConfig5906>;

interface HeavyProps5906 {
  config: DeepPartial5906<NestedConfig5906>;
  path?: ConfigPaths5906;
}

const HeavyComponent5906 = memo(function HeavyComponent5906({ config }: HeavyProps5906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5906.displayName = 'HeavyComponent5906';
export default HeavyComponent5906;
