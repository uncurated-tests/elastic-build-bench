'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5024<T> = T extends (infer U)[]
  ? DeepReadonlyArray5024<U>
  : T extends object
  ? DeepReadonlyObject5024<T>
  : T;

interface DeepReadonlyArray5024<T> extends ReadonlyArray<DeepReadonly5024<T>> {}

type DeepReadonlyObject5024<T> = {
  readonly [P in keyof T]: DeepReadonly5024<T[P]>;
};

type UnionToIntersection5024<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5024<T> = UnionToIntersection5024<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5024<T extends unknown[], V> = [...T, V];

type TuplifyUnion5024<T, L = LastOf5024<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5024<TuplifyUnion5024<Exclude<T, L>>, L>;

type DeepPartial5024<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5024<T[P]> }
  : T;

type Paths5024<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5024<K, Paths5024<T[K], Prev5024[D]>> : never }[keyof T]
  : never;

type Prev5024 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5024<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5024 {
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

type ConfigPaths5024 = Paths5024<NestedConfig5024>;

interface HeavyProps5024 {
  config: DeepPartial5024<NestedConfig5024>;
  path?: ConfigPaths5024;
}

const HeavyComponent5024 = memo(function HeavyComponent5024({ config }: HeavyProps5024) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5024) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5024 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5024: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5024.displayName = 'HeavyComponent5024';
export default HeavyComponent5024;
