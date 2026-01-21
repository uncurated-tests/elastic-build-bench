'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5325<T> = T extends (infer U)[]
  ? DeepReadonlyArray5325<U>
  : T extends object
  ? DeepReadonlyObject5325<T>
  : T;

interface DeepReadonlyArray5325<T> extends ReadonlyArray<DeepReadonly5325<T>> {}

type DeepReadonlyObject5325<T> = {
  readonly [P in keyof T]: DeepReadonly5325<T[P]>;
};

type UnionToIntersection5325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5325<T> = UnionToIntersection5325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5325<T extends unknown[], V> = [...T, V];

type TuplifyUnion5325<T, L = LastOf5325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5325<TuplifyUnion5325<Exclude<T, L>>, L>;

type DeepPartial5325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5325<T[P]> }
  : T;

type Paths5325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5325<K, Paths5325<T[K], Prev5325[D]>> : never }[keyof T]
  : never;

type Prev5325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5325 {
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

type ConfigPaths5325 = Paths5325<NestedConfig5325>;

interface HeavyProps5325 {
  config: DeepPartial5325<NestedConfig5325>;
  path?: ConfigPaths5325;
}

const HeavyComponent5325 = memo(function HeavyComponent5325({ config }: HeavyProps5325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5325.displayName = 'HeavyComponent5325';
export default HeavyComponent5325;
