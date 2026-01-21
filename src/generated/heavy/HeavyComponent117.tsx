'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly117<T> = T extends (infer U)[]
  ? DeepReadonlyArray117<U>
  : T extends object
  ? DeepReadonlyObject117<T>
  : T;

interface DeepReadonlyArray117<T> extends ReadonlyArray<DeepReadonly117<T>> {}

type DeepReadonlyObject117<T> = {
  readonly [P in keyof T]: DeepReadonly117<T[P]>;
};

type UnionToIntersection117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf117<T> = UnionToIntersection117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push117<T extends unknown[], V> = [...T, V];

type TuplifyUnion117<T, L = LastOf117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push117<TuplifyUnion117<Exclude<T, L>>, L>;

type DeepPartial117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial117<T[P]> }
  : T;

type Paths117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join117<K, Paths117<T[K], Prev117[D]>> : never }[keyof T]
  : never;

type Prev117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig117 {
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

type ConfigPaths117 = Paths117<NestedConfig117>;

interface HeavyProps117 {
  config: DeepPartial117<NestedConfig117>;
  path?: ConfigPaths117;
}

const HeavyComponent117 = memo(function HeavyComponent117({ config }: HeavyProps117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent117.displayName = 'HeavyComponent117';
export default HeavyComponent117;
