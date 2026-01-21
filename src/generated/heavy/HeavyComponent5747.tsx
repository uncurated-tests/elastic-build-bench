'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5747<T> = T extends (infer U)[]
  ? DeepReadonlyArray5747<U>
  : T extends object
  ? DeepReadonlyObject5747<T>
  : T;

interface DeepReadonlyArray5747<T> extends ReadonlyArray<DeepReadonly5747<T>> {}

type DeepReadonlyObject5747<T> = {
  readonly [P in keyof T]: DeepReadonly5747<T[P]>;
};

type UnionToIntersection5747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5747<T> = UnionToIntersection5747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5747<T extends unknown[], V> = [...T, V];

type TuplifyUnion5747<T, L = LastOf5747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5747<TuplifyUnion5747<Exclude<T, L>>, L>;

type DeepPartial5747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5747<T[P]> }
  : T;

type Paths5747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5747<K, Paths5747<T[K], Prev5747[D]>> : never }[keyof T]
  : never;

type Prev5747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5747 {
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

type ConfigPaths5747 = Paths5747<NestedConfig5747>;

interface HeavyProps5747 {
  config: DeepPartial5747<NestedConfig5747>;
  path?: ConfigPaths5747;
}

const HeavyComponent5747 = memo(function HeavyComponent5747({ config }: HeavyProps5747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5747.displayName = 'HeavyComponent5747';
export default HeavyComponent5747;
