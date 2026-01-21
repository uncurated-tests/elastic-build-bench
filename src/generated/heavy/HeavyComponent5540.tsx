'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5540<T> = T extends (infer U)[]
  ? DeepReadonlyArray5540<U>
  : T extends object
  ? DeepReadonlyObject5540<T>
  : T;

interface DeepReadonlyArray5540<T> extends ReadonlyArray<DeepReadonly5540<T>> {}

type DeepReadonlyObject5540<T> = {
  readonly [P in keyof T]: DeepReadonly5540<T[P]>;
};

type UnionToIntersection5540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5540<T> = UnionToIntersection5540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5540<T extends unknown[], V> = [...T, V];

type TuplifyUnion5540<T, L = LastOf5540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5540<TuplifyUnion5540<Exclude<T, L>>, L>;

type DeepPartial5540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5540<T[P]> }
  : T;

type Paths5540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5540<K, Paths5540<T[K], Prev5540[D]>> : never }[keyof T]
  : never;

type Prev5540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5540 {
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

type ConfigPaths5540 = Paths5540<NestedConfig5540>;

interface HeavyProps5540 {
  config: DeepPartial5540<NestedConfig5540>;
  path?: ConfigPaths5540;
}

const HeavyComponent5540 = memo(function HeavyComponent5540({ config }: HeavyProps5540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5540.displayName = 'HeavyComponent5540';
export default HeavyComponent5540;
