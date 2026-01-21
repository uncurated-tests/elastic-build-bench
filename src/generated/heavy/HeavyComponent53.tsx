'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly53<T> = T extends (infer U)[]
  ? DeepReadonlyArray53<U>
  : T extends object
  ? DeepReadonlyObject53<T>
  : T;

interface DeepReadonlyArray53<T> extends ReadonlyArray<DeepReadonly53<T>> {}

type DeepReadonlyObject53<T> = {
  readonly [P in keyof T]: DeepReadonly53<T[P]>;
};

type UnionToIntersection53<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf53<T> = UnionToIntersection53<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push53<T extends unknown[], V> = [...T, V];

type TuplifyUnion53<T, L = LastOf53<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push53<TuplifyUnion53<Exclude<T, L>>, L>;

type DeepPartial53<T> = T extends object
  ? { [P in keyof T]?: DeepPartial53<T[P]> }
  : T;

type Paths53<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join53<K, Paths53<T[K], Prev53[D]>> : never }[keyof T]
  : never;

type Prev53 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join53<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig53 {
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

type ConfigPaths53 = Paths53<NestedConfig53>;

interface HeavyProps53 {
  config: DeepPartial53<NestedConfig53>;
  path?: ConfigPaths53;
}

const HeavyComponent53 = memo(function HeavyComponent53({ config }: HeavyProps53) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 53) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-53 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H53: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent53.displayName = 'HeavyComponent53';
export default HeavyComponent53;
