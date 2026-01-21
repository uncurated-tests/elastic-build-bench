'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly510<T> = T extends (infer U)[]
  ? DeepReadonlyArray510<U>
  : T extends object
  ? DeepReadonlyObject510<T>
  : T;

interface DeepReadonlyArray510<T> extends ReadonlyArray<DeepReadonly510<T>> {}

type DeepReadonlyObject510<T> = {
  readonly [P in keyof T]: DeepReadonly510<T[P]>;
};

type UnionToIntersection510<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf510<T> = UnionToIntersection510<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push510<T extends unknown[], V> = [...T, V];

type TuplifyUnion510<T, L = LastOf510<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push510<TuplifyUnion510<Exclude<T, L>>, L>;

type DeepPartial510<T> = T extends object
  ? { [P in keyof T]?: DeepPartial510<T[P]> }
  : T;

type Paths510<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join510<K, Paths510<T[K], Prev510[D]>> : never }[keyof T]
  : never;

type Prev510 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join510<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig510 {
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

type ConfigPaths510 = Paths510<NestedConfig510>;

interface HeavyProps510 {
  config: DeepPartial510<NestedConfig510>;
  path?: ConfigPaths510;
}

const HeavyComponent510 = memo(function HeavyComponent510({ config }: HeavyProps510) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 510) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-510 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H510: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent510.displayName = 'HeavyComponent510';
export default HeavyComponent510;
