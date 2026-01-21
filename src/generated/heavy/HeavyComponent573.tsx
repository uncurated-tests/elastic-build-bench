'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly573<T> = T extends (infer U)[]
  ? DeepReadonlyArray573<U>
  : T extends object
  ? DeepReadonlyObject573<T>
  : T;

interface DeepReadonlyArray573<T> extends ReadonlyArray<DeepReadonly573<T>> {}

type DeepReadonlyObject573<T> = {
  readonly [P in keyof T]: DeepReadonly573<T[P]>;
};

type UnionToIntersection573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf573<T> = UnionToIntersection573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push573<T extends unknown[], V> = [...T, V];

type TuplifyUnion573<T, L = LastOf573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push573<TuplifyUnion573<Exclude<T, L>>, L>;

type DeepPartial573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial573<T[P]> }
  : T;

type Paths573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join573<K, Paths573<T[K], Prev573[D]>> : never }[keyof T]
  : never;

type Prev573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig573 {
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

type ConfigPaths573 = Paths573<NestedConfig573>;

interface HeavyProps573 {
  config: DeepPartial573<NestedConfig573>;
  path?: ConfigPaths573;
}

const HeavyComponent573 = memo(function HeavyComponent573({ config }: HeavyProps573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent573.displayName = 'HeavyComponent573';
export default HeavyComponent573;
