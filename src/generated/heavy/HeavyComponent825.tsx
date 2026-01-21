'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly825<T> = T extends (infer U)[]
  ? DeepReadonlyArray825<U>
  : T extends object
  ? DeepReadonlyObject825<T>
  : T;

interface DeepReadonlyArray825<T> extends ReadonlyArray<DeepReadonly825<T>> {}

type DeepReadonlyObject825<T> = {
  readonly [P in keyof T]: DeepReadonly825<T[P]>;
};

type UnionToIntersection825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf825<T> = UnionToIntersection825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push825<T extends unknown[], V> = [...T, V];

type TuplifyUnion825<T, L = LastOf825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push825<TuplifyUnion825<Exclude<T, L>>, L>;

type DeepPartial825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial825<T[P]> }
  : T;

type Paths825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join825<K, Paths825<T[K], Prev825[D]>> : never }[keyof T]
  : never;

type Prev825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig825 {
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

type ConfigPaths825 = Paths825<NestedConfig825>;

interface HeavyProps825 {
  config: DeepPartial825<NestedConfig825>;
  path?: ConfigPaths825;
}

const HeavyComponent825 = memo(function HeavyComponent825({ config }: HeavyProps825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent825.displayName = 'HeavyComponent825';
export default HeavyComponent825;
