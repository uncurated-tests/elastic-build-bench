'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5457<T> = T extends (infer U)[]
  ? DeepReadonlyArray5457<U>
  : T extends object
  ? DeepReadonlyObject5457<T>
  : T;

interface DeepReadonlyArray5457<T> extends ReadonlyArray<DeepReadonly5457<T>> {}

type DeepReadonlyObject5457<T> = {
  readonly [P in keyof T]: DeepReadonly5457<T[P]>;
};

type UnionToIntersection5457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5457<T> = UnionToIntersection5457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5457<T extends unknown[], V> = [...T, V];

type TuplifyUnion5457<T, L = LastOf5457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5457<TuplifyUnion5457<Exclude<T, L>>, L>;

type DeepPartial5457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5457<T[P]> }
  : T;

type Paths5457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5457<K, Paths5457<T[K], Prev5457[D]>> : never }[keyof T]
  : never;

type Prev5457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5457 {
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

type ConfigPaths5457 = Paths5457<NestedConfig5457>;

interface HeavyProps5457 {
  config: DeepPartial5457<NestedConfig5457>;
  path?: ConfigPaths5457;
}

const HeavyComponent5457 = memo(function HeavyComponent5457({ config }: HeavyProps5457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5457.displayName = 'HeavyComponent5457';
export default HeavyComponent5457;
