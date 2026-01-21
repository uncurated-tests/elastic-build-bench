'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5658<T> = T extends (infer U)[]
  ? DeepReadonlyArray5658<U>
  : T extends object
  ? DeepReadonlyObject5658<T>
  : T;

interface DeepReadonlyArray5658<T> extends ReadonlyArray<DeepReadonly5658<T>> {}

type DeepReadonlyObject5658<T> = {
  readonly [P in keyof T]: DeepReadonly5658<T[P]>;
};

type UnionToIntersection5658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5658<T> = UnionToIntersection5658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5658<T extends unknown[], V> = [...T, V];

type TuplifyUnion5658<T, L = LastOf5658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5658<TuplifyUnion5658<Exclude<T, L>>, L>;

type DeepPartial5658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5658<T[P]> }
  : T;

type Paths5658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5658<K, Paths5658<T[K], Prev5658[D]>> : never }[keyof T]
  : never;

type Prev5658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5658 {
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

type ConfigPaths5658 = Paths5658<NestedConfig5658>;

interface HeavyProps5658 {
  config: DeepPartial5658<NestedConfig5658>;
  path?: ConfigPaths5658;
}

const HeavyComponent5658 = memo(function HeavyComponent5658({ config }: HeavyProps5658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5658.displayName = 'HeavyComponent5658';
export default HeavyComponent5658;
