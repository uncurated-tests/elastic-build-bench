'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3618<T> = T extends (infer U)[]
  ? DeepReadonlyArray3618<U>
  : T extends object
  ? DeepReadonlyObject3618<T>
  : T;

interface DeepReadonlyArray3618<T> extends ReadonlyArray<DeepReadonly3618<T>> {}

type DeepReadonlyObject3618<T> = {
  readonly [P in keyof T]: DeepReadonly3618<T[P]>;
};

type UnionToIntersection3618<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3618<T> = UnionToIntersection3618<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3618<T extends unknown[], V> = [...T, V];

type TuplifyUnion3618<T, L = LastOf3618<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3618<TuplifyUnion3618<Exclude<T, L>>, L>;

type DeepPartial3618<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3618<T[P]> }
  : T;

type Paths3618<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3618<K, Paths3618<T[K], Prev3618[D]>> : never }[keyof T]
  : never;

type Prev3618 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3618<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3618 {
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

type ConfigPaths3618 = Paths3618<NestedConfig3618>;

interface HeavyProps3618 {
  config: DeepPartial3618<NestedConfig3618>;
  path?: ConfigPaths3618;
}

const HeavyComponent3618 = memo(function HeavyComponent3618({ config }: HeavyProps3618) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3618) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3618 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3618: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3618.displayName = 'HeavyComponent3618';
export default HeavyComponent3618;
