'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5900<T> = T extends (infer U)[]
  ? DeepReadonlyArray5900<U>
  : T extends object
  ? DeepReadonlyObject5900<T>
  : T;

interface DeepReadonlyArray5900<T> extends ReadonlyArray<DeepReadonly5900<T>> {}

type DeepReadonlyObject5900<T> = {
  readonly [P in keyof T]: DeepReadonly5900<T[P]>;
};

type UnionToIntersection5900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5900<T> = UnionToIntersection5900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5900<T extends unknown[], V> = [...T, V];

type TuplifyUnion5900<T, L = LastOf5900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5900<TuplifyUnion5900<Exclude<T, L>>, L>;

type DeepPartial5900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5900<T[P]> }
  : T;

type Paths5900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5900<K, Paths5900<T[K], Prev5900[D]>> : never }[keyof T]
  : never;

type Prev5900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5900 {
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

type ConfigPaths5900 = Paths5900<NestedConfig5900>;

interface HeavyProps5900 {
  config: DeepPartial5900<NestedConfig5900>;
  path?: ConfigPaths5900;
}

const HeavyComponent5900 = memo(function HeavyComponent5900({ config }: HeavyProps5900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5900.displayName = 'HeavyComponent5900';
export default HeavyComponent5900;
