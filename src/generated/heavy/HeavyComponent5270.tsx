'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5270<T> = T extends (infer U)[]
  ? DeepReadonlyArray5270<U>
  : T extends object
  ? DeepReadonlyObject5270<T>
  : T;

interface DeepReadonlyArray5270<T> extends ReadonlyArray<DeepReadonly5270<T>> {}

type DeepReadonlyObject5270<T> = {
  readonly [P in keyof T]: DeepReadonly5270<T[P]>;
};

type UnionToIntersection5270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5270<T> = UnionToIntersection5270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5270<T extends unknown[], V> = [...T, V];

type TuplifyUnion5270<T, L = LastOf5270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5270<TuplifyUnion5270<Exclude<T, L>>, L>;

type DeepPartial5270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5270<T[P]> }
  : T;

type Paths5270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5270<K, Paths5270<T[K], Prev5270[D]>> : never }[keyof T]
  : never;

type Prev5270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5270 {
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

type ConfigPaths5270 = Paths5270<NestedConfig5270>;

interface HeavyProps5270 {
  config: DeepPartial5270<NestedConfig5270>;
  path?: ConfigPaths5270;
}

const HeavyComponent5270 = memo(function HeavyComponent5270({ config }: HeavyProps5270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5270.displayName = 'HeavyComponent5270';
export default HeavyComponent5270;
