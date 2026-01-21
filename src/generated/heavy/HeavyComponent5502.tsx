'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5502<T> = T extends (infer U)[]
  ? DeepReadonlyArray5502<U>
  : T extends object
  ? DeepReadonlyObject5502<T>
  : T;

interface DeepReadonlyArray5502<T> extends ReadonlyArray<DeepReadonly5502<T>> {}

type DeepReadonlyObject5502<T> = {
  readonly [P in keyof T]: DeepReadonly5502<T[P]>;
};

type UnionToIntersection5502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5502<T> = UnionToIntersection5502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5502<T extends unknown[], V> = [...T, V];

type TuplifyUnion5502<T, L = LastOf5502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5502<TuplifyUnion5502<Exclude<T, L>>, L>;

type DeepPartial5502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5502<T[P]> }
  : T;

type Paths5502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5502<K, Paths5502<T[K], Prev5502[D]>> : never }[keyof T]
  : never;

type Prev5502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5502 {
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

type ConfigPaths5502 = Paths5502<NestedConfig5502>;

interface HeavyProps5502 {
  config: DeepPartial5502<NestedConfig5502>;
  path?: ConfigPaths5502;
}

const HeavyComponent5502 = memo(function HeavyComponent5502({ config }: HeavyProps5502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5502.displayName = 'HeavyComponent5502';
export default HeavyComponent5502;
