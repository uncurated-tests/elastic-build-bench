'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5901<T> = T extends (infer U)[]
  ? DeepReadonlyArray5901<U>
  : T extends object
  ? DeepReadonlyObject5901<T>
  : T;

interface DeepReadonlyArray5901<T> extends ReadonlyArray<DeepReadonly5901<T>> {}

type DeepReadonlyObject5901<T> = {
  readonly [P in keyof T]: DeepReadonly5901<T[P]>;
};

type UnionToIntersection5901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5901<T> = UnionToIntersection5901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5901<T extends unknown[], V> = [...T, V];

type TuplifyUnion5901<T, L = LastOf5901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5901<TuplifyUnion5901<Exclude<T, L>>, L>;

type DeepPartial5901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5901<T[P]> }
  : T;

type Paths5901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5901<K, Paths5901<T[K], Prev5901[D]>> : never }[keyof T]
  : never;

type Prev5901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5901 {
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

type ConfigPaths5901 = Paths5901<NestedConfig5901>;

interface HeavyProps5901 {
  config: DeepPartial5901<NestedConfig5901>;
  path?: ConfigPaths5901;
}

const HeavyComponent5901 = memo(function HeavyComponent5901({ config }: HeavyProps5901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5901.displayName = 'HeavyComponent5901';
export default HeavyComponent5901;
