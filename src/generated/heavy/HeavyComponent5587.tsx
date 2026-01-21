'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5587<T> = T extends (infer U)[]
  ? DeepReadonlyArray5587<U>
  : T extends object
  ? DeepReadonlyObject5587<T>
  : T;

interface DeepReadonlyArray5587<T> extends ReadonlyArray<DeepReadonly5587<T>> {}

type DeepReadonlyObject5587<T> = {
  readonly [P in keyof T]: DeepReadonly5587<T[P]>;
};

type UnionToIntersection5587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5587<T> = UnionToIntersection5587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5587<T extends unknown[], V> = [...T, V];

type TuplifyUnion5587<T, L = LastOf5587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5587<TuplifyUnion5587<Exclude<T, L>>, L>;

type DeepPartial5587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5587<T[P]> }
  : T;

type Paths5587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5587<K, Paths5587<T[K], Prev5587[D]>> : never }[keyof T]
  : never;

type Prev5587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5587 {
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

type ConfigPaths5587 = Paths5587<NestedConfig5587>;

interface HeavyProps5587 {
  config: DeepPartial5587<NestedConfig5587>;
  path?: ConfigPaths5587;
}

const HeavyComponent5587 = memo(function HeavyComponent5587({ config }: HeavyProps5587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5587.displayName = 'HeavyComponent5587';
export default HeavyComponent5587;
