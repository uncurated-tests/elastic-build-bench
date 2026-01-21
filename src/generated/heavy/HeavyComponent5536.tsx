'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5536<T> = T extends (infer U)[]
  ? DeepReadonlyArray5536<U>
  : T extends object
  ? DeepReadonlyObject5536<T>
  : T;

interface DeepReadonlyArray5536<T> extends ReadonlyArray<DeepReadonly5536<T>> {}

type DeepReadonlyObject5536<T> = {
  readonly [P in keyof T]: DeepReadonly5536<T[P]>;
};

type UnionToIntersection5536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5536<T> = UnionToIntersection5536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5536<T extends unknown[], V> = [...T, V];

type TuplifyUnion5536<T, L = LastOf5536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5536<TuplifyUnion5536<Exclude<T, L>>, L>;

type DeepPartial5536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5536<T[P]> }
  : T;

type Paths5536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5536<K, Paths5536<T[K], Prev5536[D]>> : never }[keyof T]
  : never;

type Prev5536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5536 {
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

type ConfigPaths5536 = Paths5536<NestedConfig5536>;

interface HeavyProps5536 {
  config: DeepPartial5536<NestedConfig5536>;
  path?: ConfigPaths5536;
}

const HeavyComponent5536 = memo(function HeavyComponent5536({ config }: HeavyProps5536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5536.displayName = 'HeavyComponent5536';
export default HeavyComponent5536;
